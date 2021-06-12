## 課題２（実装）

### SQL3 つ

1.性別が男性の employee

```sql
SELECT emp_no, first_name, gender
FROM employees
WHERE gender = 'M';
```

2.性別が男性の employee の数

```sql
SELECT COUNT(emp_no)
FROM employees
WHERE gender = 'M';
```

3.first_name が Duke の employee

```sql
SELECT emp_no, first_name, gender
FROM employees
WHERE first_name like '%Duke%';
```

### 計測のための設定

```sql
UPDATE performance_schema.setup_instruments
SET ENABLED = 'YES', TIMED = 'YES'
WHERE NAME LIKE '%statement/%';
```

```sql
UPDATE performance_schema.setup_instruments
SET ENABLED = 'YES', TIMED = 'YES'
WHERE NAME LIKE '%stage/%';
```

```sql
UPDATE performance_schema.setup_consumers
SET ENABLED = 'YES'
WHERE NAME LIKE '%events_statements_%';
```

```sql
UPDATE performance_schema.setup_consumers
SET ENABLED = 'YES'
WHERE NAME LIKE '%events_stages_%';
```

### 計測のクエリ

1.

```sql
mysql> SELECT sql_text, sys.format_time(timer_wait) AS time FROM performance_schema.events_statements_history WHERE sql_text IS NOT NULL;
+-----------------------------------------------------------------------------------------------------------------------------------+-----------+
| sql_text                                                                                                                          | time      |
+-----------------------------------------------------------------------------------------------------------------------------------+-----------+
| SELECT emp_no, first_name, gender
FROM employees
WHERE gender = 'M'                                                               | 127.90 ms |
```

127.90 ms

2.

```sql
mysql> SELECT sql_text, sys.format_time(timer_wait) AS time FROM performance_schema.events_statements_history WHERE sql_text IS NOT NULL;
+-----------------------------------------------------------------------------------------------------------------------------------+----------+
| sql_text                                                                                                                          | time     |
+-----------------------------------------------------------------------------------------------------------------------------------+----------+
| SELECT sql_text, sys.format_time(timer_wait) AS time FROM performance_schema.events_statements_history WHERE sql_text IS NOT NULL | 2.49 ms  |
| SELECT COUNT(emp_no)
FROM employees
WHERE gender = 'M'                                                                            | 55.74 ms |
+-----------------------------------------------------------------------------------------------------------------------------------+----------+
2 rows in set (0.00 sec)
```

55.74 ms

3.

```sql
mysql> SELECT sql_text, sys.format_time(timer_wait) AS time FROM performance_schema.events_statements_history WHERE sql_text IS NOT NULL;
+-----------------------------------------------------------------------------------------------------------------------------------+----------+
| sql_text                                                                                                                          | time     |
+-----------------------------------------------------------------------------------------------------------------------------------+----------+
| SELECT sql_text, sys.format_time(timer_wait) AS time FROM performance_schema.events_statements_history WHERE sql_text IS NOT NULL | 1.36 ms  |
| SELECT emp_no, first_name, gender
FROM employees
WHERE first_name like '%Duke%'                                                   | 66.58 ms |
+-----------------------------------------------------------------------------------------------------------------------------------+----------+
2 rows in set (0.00 sec)
```

66.58 ms

### インデックスを貼る

#### gender カラムに

```sql
ALTER TABLE employees
ADD INDEX gender_index(gender);
```

1.の測定

```sql
mysql> SELECT sql_text, sys.format_time(timer_wait) AS time FROM performance_schema.events_statements_history WHERE sql_text IS NOT NULL;
+-----------------------------------------------------------------------------------------------------------------------------------+-----------+
| sql_text                                                                                                                          | time      |
+-----------------------------------------------------------------------------------------------------------------------------------+-----------+
| SELECT sql_text, sys.format_time(timer_wait) AS time FROM performance_schema.events_statements_history WHERE sql_text IS NOT NULL | 1.81 ms   |
| ALTER TABLE employees
ADD INDEX gender_index(gender)                                                                              | 861.95 ms |
+-----------------------------------------------------------------------------------------------------------------------------------+-----------+
2 rows in set (0.00 sec)
```

1.81 ms と早くなった

2.の測定 s

```sql
mysql> SELECT sql_text, sys.format_time(timer_wait) AS time FROM performance_schema.events_statements_history WHERE sql_text IS NOT NULL;
+-----------------------------------------------------------------------------------------------------------------------------------+----------+
| sql_text                                                                                                                          | time     |
+-----------------------------------------------------------------------------------------------------------------------------------+----------+
| SELECT sql_text, sys.format_time(timer_wait) AS time FROM performance_schema.events_statements_history WHERE sql_text IS NOT NULL | 1.88 ms  |
| SELECT COUNT(emp_no)
FROM employees
WHERE gender = 'M'                                                                            | 29.14 ms |
+-----------------------------------------------------------------------------------------------------------------------------------+----------+
2 rows in set (0.01 sec)

```

1.88 ms と早くなった

#### first_name にインデックス

```sql
ALTER TABLE employees
ADD INDEX first_name(first_name);
```

```sql
mysql> SELECT sql_text, sys.format_time(timer_wait) AS time FROM performance_schema.events_statements_history WHERE sql_text IS NOT NULL;
+-----------------------------------------------------------------------------------------------------------------------------------+----------+
| sql_text                                                                                                                          | time     |
+-----------------------------------------------------------------------------------------------------------------------------------+----------+
| SELECT sql_text, sys.format_time(timer_wait) AS time FROM performance_schema.events_statements_history WHERE sql_text IS NOT NULL | 3.63 ms  |
| SELECT emp_no, first_name, gender FROM employees WHERE first_name like '%Duke%'                                                   | 65.26 ms |
+-----------------------------------------------------------------------------------------------------------------------------------+----------+
2 rows in set (0.01 sec)
```

65.26 ms となり変わらない

インデックスの確認

```sql
mysql> show index from employees;
+-----------+------------+--------------+--------------+-------------+-----------+-------------+----------+--------+------+------------+---------+---------------+
| Table     | Non_unique | Key_name     | Seq_in_index | Column_name | Collation | Cardinality | Sub_part | Packed | Null | Index_type | Comment | Index_comment |
+-----------+------------+--------------+--------------+-------------+-----------+-------------+----------+--------+------+------------+---------+---------------+
| employees |          0 | PRIMARY      |            1 | emp_no      | A         |      299246 |     NULL | NULL   |      | BTREE      |         |               |
| employees |          1 | gender_index |            1 | gender      | A         |           1 |     NULL | NULL   |      | BTREE      |         |               |
| employees |          1 | first_name   |            1 | first_name  | A         |        1282 |     NULL | NULL   |      | BTREE      |         |               |
+-----------+------------+--------------+--------------+-------------+-----------+-------------+----------+--------+------+------------+---------+---------------+
3 rows in set (0.00 sec)
```

### EXPLAIN で説明

1.

```sql
mysql> EXPLAIN SELECT emp_no, first_name, gender
    -> FROM employees
    -> WHERE gender = 'M';
+----+-------------+-----------+------------+------+---------------+--------------+---------+-------+--------+----------+-------+
| id | select_type | table     | partitions | type | possible_keys | key          | key_len | ref   | rows   | filtered | Extra |
+----+-------------+-----------+------------+------+---------------+--------------+---------+-------+--------+----------+-------+
|  1 | SIMPLE      | employees | NULL       | ref  | gender_index  | gender_index | 1       | const | 149623 |   100.00 | NULL  |
+----+-------------+-----------+------------+------+---------------+--------------+---------+-------+--------+----------+-------+
```

key カラムに gender_inde が使用されているので index が使われている

2.

```sql
mysql> EXPLAIN SELECT COUNT(emp_no)
    -> FROM employees
    -> WHERE gender = 'M';
+----+-------------+-----------+------------+------+---------------+--------------+---------+-------+--------+----------+-------------+
| id | select_type | table     | partitions | type | possible_keys | key          | key_len | ref   | rows   | filtered | Extra       |
+----+-------------+-----------+------------+------+---------------+--------------+---------+-------+--------+----------+-------------+
|  1 | SIMPLE      | employees | NULL       | ref  | gender_index  | gender_index | 1       | const | 149623 |   100.00 | Using index |
+----+-------------+-----------+------------+------+---------------+--------------+---------+-------+--------+----------+-------------+
1 row in set, 1 warning (0.00 sec)
```

key カラムに gender_inde が使用されているので index が使われている

3.

```sql
mysql> EXPLAIN SELECT emp_no, first_name, gender FROM employees WHERE first_name like '%Duke%';
+----+-------------+-----------+------------+------+---------------+------+---------+------+--------+----------+-------------+
| id | select_type | table     | partitions | type | possible_keys | key  | key_len | ref  | rows   | filtered | Extra       |
+----+-------------+-----------+------------+------+---------------+------+---------+------+--------+----------+-------------+
|  1 | SIMPLE      | employees | NULL       | ALL  | NULL          | NULL | NULL    | NULL | 299246 |    11.11 | Using where |
+----+-------------+-----------+------------+------+---------------+------+---------+------+--------+----------+-------------+
1 row in set, 1 warning (0.00 sec)
```

key が NULL なので index は使われていない

LIKE 句の中間一致と後方一致だと使えないよう

参考
https://qiita.com/NagaokaKenichi/items/44cabcafa3d02d9cd896
