## 課題２（実装）

### 実装

#### 1 つめの SQL

```sql
SELECT * FROM employees
WHERE first_name = 'Duke' AND last_name = 'Koyama';
```

##### 複合インデックスなし

```sql
| SELECT * FROM employees
WHERE first_name = 'Duke' AND last_name = 'Koyama'                                                        | 84.97 ms  |
```

84.97 ms

##### 複合インデックスあり

```sql
CREATE INDEX employees_name ON employees (first_name, last_name);
```

```sql
| SELECT * FROM employees
WHERE first_name = 'Duke' AND last_name = 'Koyama'                                                        | 671.40 us |
```

671.40 us

##### 変化結果

84.97 ms→671.40 us

速くなった

##### EXPLAIN での説明

```sql
mysql> EXPLAIN SELECT * FROM employees Woyees WHERE first_name = 'Duke' AND last_name = 'Koyama';
+----+-------------+-----------+------------+------+----------------+----------------+---------+-------------+------+----------+-------+
| id | select_type | table     | partitions | type | possible_keys  | key            | key_len | ref         | rows | filtered | Extra |
+----+-------------+-----------+------------+------+----------------+----------------+---------+-------------+------+----------+-------+
|  1 | SIMPLE      | employees | NULL       | ref  | employees_name | employees_name | 34      | const,const |    3 |   100.00 | NULL  |
+----+-------------+-----------+------------+------+----------------+----------------+---------+-------------+------+----------+-------+
1 row in set, 1 warning (0.00 sec)
```

key に employees_name が使われているので、使われている

#### 2 つめの SQL

```sql
SELECT * FROM employees
WHERE gender = 'M'　AND first_name = 'Duke' AND last_name = 'Koyama';
```

1 で作ったインデックスは削除

```sql
DROP INDEX employees_name ON employees;
```

##### 複合インデックスなし

```sql
| SELECT * FROM employees
WHERE gender = 'M'AND first_name = 'Duke' AND last_name = 'Koyama'                                        | 81.17 ms |
```

81.17 ms

##### 複合インデックスあり

インデックスの作成

```sql
CREATE INDEX employees_gender_name ON employees (gender, first_name, last_name);
```

```sql
| SELECT * FROM employees
WHERE gender = 'M'AND first_name = 'Duke' AND last_name = 'Koyama'                                        | 733.80 us |
```

733.80 us

##### 変化結果

81.17 ms→733.80 us
速くなった

##### EXPLAIN での説明

```sql
mysql> EXPLAIN SELECT * FROM employees WHERE gender = 'M' AND first_name = 'Duke' AND last_name = 'Koyama';+----+-------------+-----------+------------+------+-----------------------+-----------------------+---------+-------------------+------+----------+-------+
| id | select_type | table     | partitions | type | possible_keys         | key                   | key_len | ref               | rows | filtered | Extra |
+----+-------------+-----------+------------+------+-----------------------+-----------------------+---------+-------------------+------+----------+-------+
|  1 | SIMPLE      | employees | NULL       | ref  | employees_gender_name | employees_gender_name | 35      | const,const,const |    2 |   100.00 | NULL  |
+----+-------------+-----------+------------+------+-----------------------+-----------------------+---------+-------------------+------+----------+-------+
1 row in set, 1 warning (0.00 sec)
```

key に employees_gender_name が使われているので、使われている

#### 3 つめの SQL

```sql
SELECT * FROM employees
WHERE first_name = 'Duke' AND last_name = 'Koyama' AND gender = 'M';
```

2 で作ったインデックスは削除

```sql
DROP INDEX employees_gender_name ON employees;
```

##### 複合インデックスなし

```sql
| SELECT * FROM employees
WHERE first_name = 'Duke' AND last_name = 'Koyama' AND gender = 'M'                                       | 93.58 ms  |
```

93.58 ms

##### 複合インデックスあり

インデックスの作成

```sql
CREATE INDEX employees_gender_name ON employees (first_name, last_name, gender);
```

```sql
SELECT * FROM employees
WHERE first_name = 'Duke' AND last_name = 'Koyama' AND gender = 'M'                                       | 743.10 us |
```

743.10 us

##### 変化結果

93.58 ms→743.10 us と速くなった

##### EXPLAIN での説明

```sql
mysql> EXPLAIN SELECT * FROM employees WHERE first_name = 'Duke' AND last_name = 'Koyama' AND gender = 'M';
+----+-------------+-----------+------------+------+-----------------------+-----------------------+---------+-------------------+------+----------+-------+
| id | select_type | table     | partitions | type | possible_keys         | key                   | key_len | ref               | rows | filtered | Extra |
+----+-------------+-----------+------------+------+-----------------------+-----------------------+---------+-------------------+------+----------+-------+
|  1 | SIMPLE      | employees | NULL       | ref  | employees_gender_name | employees_gender_name | 35      | const,const,const |    2 |   100.00 | NULL  |
+----+-------------+-----------+------------+------+-----------------------+-----------------------+---------+-------------------+------+----------+-------+
1 row in set, 1 warning (0.00 sec)
```

key に employees_gender_name が使われているので、使われている
