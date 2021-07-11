## 課題２（実装）

### 使用する SQL

```sql
SELECT * FROM employees
WHERE first_name = 'Duke' AND last_name = 'Koyama';
```

```sql
| SELECT * FROM employees WHERE first_name = 'Duke' AND last_name = 'Koyama'                                                        | 80.04 ms |
+-----------------------------------------------------------------------------------------------------------------------------------+----------+
2 rows in set (0.00 sec)
```

80.04 ms

### ビュー として作成

```sql
mysql> CREATE VIEW view_1 AS SELECT * FROM employees WHERE first_name = 'Duke' AND last_name = 'Koyama';
Query OK, 0 rows affected (0.07 sec)
```

```sql
mysql> SELECT * FROM view_1;
+--------+------------+------------+-----------+--------+------------+
| emp_no | birth_date | first_name | last_name | gender | hire_date  |
+--------+------------+------------+-----------+--------+------------+
|  33835 | 1963-10-29 | Duke       | Koyama    | M      | 1985-05-08 |
| 280106 | 1952-09-27 | Duke       | Koyama    | M      | 1988-01-18 |
| 422451 | 1954-05-29 | Duke       | Koyama    | F      | 1989-09-10 |
+--------+------------+------------+-----------+--------+------------+
3 rows in set (0.08 sec)
```

パフォーマンス

```sql
| SELECT * FROM view_1                                                                                                              | 77.96 ms  |
+-----------------------------------------------------------------------------------------------------------------------------------+-----------+
2 rows in set (0.00 sec)
```

77.96 ms

通常実行と速度変わらない

### 実行結果を返すビュー

```sql
mysql> CREATE TABLE view_2 LIKE employees;
Query OK, 0 rows affected (0.15 sec)
```

```sql
mysql> show columns from view_2;
+------------+---------------+------+-----+---------+-------+
| Field      | Type          | Null | Key | Default | Extra |
+------------+---------------+------+-----+---------+-------+
| emp_no     | int(11)       | NO   | PRI | NULL    |       |
| birth_date | date          | NO   |     | NULL    |       |
| first_name | varchar(14)   | NO   |     | NULL    |       |
| last_name  | varchar(16)   | NO   |     | NULL    |       |
| gender     | enum('M','F') | NO   |     | NULL    |       |
| hire_date  | date          | NO   |     | NULL    |       |
+------------+---------------+------+-----+---------+-------+
6 rows in set (0.00 sec)
```

```sql
INSERT INTO view_2
(emp_no, birth_date, first_name, last_name, gender, hire_date)
VALUES
(33835,"1963-10-29", "Duke", "Koyama", "M", "1985-05-08"),
(280106,"1952-09-27","Duke", "Koyama", "M", "1988-01-18"),
(422451,"1954-05-29", "Duke", "Koyama", "F", "1989-09-10");
```

```sql
mysql> select * from view_2;
+--------+------------+------------+-----------+--------+------------+
| emp_no | birth_date | first_name | last_name | gender | hire_date  |
+--------+------------+------------+-----------+--------+------------+
|  33835 | 1963-10-29 | Duke       | Koyama    | M      | 1985-05-08 |
| 280106 | 1952-09-27 | Duke       | Koyama    | M      | 1988-01-18 |
| 422451 | 1954-05-29 | Duke       | Koyama    | F      | 1989-09-10 |
+--------+------------+------------+-----------+--------+------------+
3 rows in set (0.00 sec)
```

```sql
mysql> SELECT sql_text, sys.format_time(timer_wait) AS time FROM performance_schema.events_statements_history WHERE sql_text IS NOT NULL;
+----------------------+-----------+
| sql_text             | time      |
+----------------------+-----------+
| select * from view_2 | 416.10 us |
+----------------------+-----------+
1 row in set (0.00 sec)
```

77.96 ms→416.10 us と通常のビューよりも速くなった
