## 課題２（実装）

### Dirty Read

クライアント A

READ UNCOMMITTED レベルにする

```sql
mysql> set session transaction isolation level read uncommitted;
Query OK, 0 rows affected (0.00 sec)
```

```sql
mysql> start transaction;
Query OK, 0 rows affected (0.00 sec)
```

```sql
mysql> SELECT emp_no, first_name, last_name FROM employees WHERE emp_no = 20000;
+--------+------------+-----------+
| emp_no | first_name | last_name |
+--------+------------+-----------+
|  20000 | Jenwei     | Matzke    |
+--------+------------+-----------+
1 row in set (0.00 sec)
```

クライアント B

READ UNCOMMITTED レベルにする

```sql
mysql> set session transaction isolation level read uncommitted;
Query OK, 0 rows affected (0.00 sec)
```

```sql
mysql> start transaction;
Query OK, 0 rows affected (0.00 sec)
```

```sql
mysql> UPDATE employees set first_name = 'Updated' WHERE emp_no = 20000;
Query OK, 1 row affected (0.04 sec)
Rows matched: 1  Changed: 1  Warnings: 0
```

```sql
mysql> SELECT emp_no, first_name, last_name FROM employees WHERE emp_no = 20000;
+--------+------------+-----------+
| emp_no | first_name | last_name |
+--------+------------+-----------+
|  20000 | Updated    | Matzke    |
+--------+------------+-----------+
1 row in set (0.00 sec)
```

クライアント A

```sql
mysql> SELECT emp_no, first_name, last_name FROM employees WHERE emp_no = 20000;
+--------+------------+-----------+
| emp_no | first_name | last_name |
+--------+------------+-----------+
|  20000 | Updated    | Matzke    |
+--------+------------+-----------+
1 row in set (0.00 sec)
```

クライアント A でも first_name が変更されている

### Non-repeatable read

クライアント A

read committed で始める

```sql
mysql> set session transaction isolation level read committed;
Query OK, 0 rows affected (0.00 sec)
```

```sql
mysql> start transaction;
Query OK, 0 rows affected (0.00 sec)
```

```sql
mysql> SELECT emp_no, first_name, last_name FROM employees WHERE emp_no = 20000;
+--------+------------+-----------+
| emp_no | first_name | last_name |
+--------+------------+-----------+
|  20000 | Jenwei     | Matzke    |
+--------+------------+-----------+
1 row in set (0.00 sec)
```

クライアント B

READ UNCOMMITTED レベルにする

read committed で始める

```sql
mysql> set session transaction isolation level read committed;
Query OK, 0 rows affected (0.00 sec)
```

```sql
mysql> start transaction;
Query OK, 0 rows affected (0.00 sec)
```

```sql
mysql> UPDATE employees set first_name = 'Updated' WHERE emp_no = 20000;
Query OK, 1 row affected (0.04 sec)
Rows matched: 1  Changed: 1  Warnings: 0
```

クライアント A

```sql
mysql> SELECT emp_no, first_name, last_name FROM employees WHERE emp_no = 20000;
+--------+------------+-----------+
| emp_no | first_name | last_name |
+--------+------------+-----------+
|  20000 | Jenwei     | Matzke    |
+--------+------------+-----------+
1 row in set (0.01 sec)
```

クライアント A ではコミットされる前に変更は反映されていない

クライアント B

```sql
mysql> commit;
Query OK, 0 rows affected (0.00 sec)
```

クライアント A

```sql
mysql> SELECT emp_no, first_name, last_name FROM employees WHERE emp_no = 20000;
+--------+------------+-----------+
| emp_no | first_name | last_name |
+--------+------------+-----------+
| 20000 | Updated | Matzke |
+--------+------------+-----------+
1 row in set (0.00 sec)
```

コミットされた後に A で変更された後の検索結果になった

### Phantom read

クライアント A

read committed で始める

```sql
mysql> set session transaction isolation level read committed;
Query OK, 0 rows affected (0.00 sec)
```

```sql
mysql> start transaction;
Query OK, 0 rows affected (0.00 sec)
```

```sql
mysql> SELECT emp_no, SUM(salary) FROM salaries WHERE emp_no = 20000;
+--------+-------------+
| emp_no | SUM(salary) |
+--------+-------------+
|  20000 |      266978 |
+--------+-------------+
1 row in set (0.00 sec)

```

クライアント B

```sql
mysql> set session transaction isolation level read committed;
Query OK, 0 rows affected (0.00 sec)
```

```sql
mysql> start transaction;
Query OK, 0 rows affected (0.00 sec)
```

```sql
mysql> UPDATE salaries set salary = 1 WHERE emp_no = 20000;
Query OK, 5 rows affected (0.10 sec)
Rows matched: 5  Changed: 5  Warnings: 0
```

クライアント A

```sql
mysql> SELECT emp_no, SUM(salary) FROM salaries WHERE emp_no = 20000;
+--------+-------------+
| emp_no | SUM(salary) |
+--------+-------------+
|  20000 |      266978 |
+--------+-------------+
1 row in set (0.00 sec)
```

B がコミットする前は計算結果は変わらず

クライアント B

```sql
mysql> commit;
Query OK, 0 rows affected (0.00 sec)
```

クライアント A

```sql
mysql> SELECT emp_no, SUM(salary) FROM salaries WHERE emp_no = 20000;
+--------+-------------+
| emp_no | SUM(salary) |
+--------+-------------+
|  20000 |           5 |
+--------+-------------+
1 row in set (0.00 sec)
```

クライアント A の処理結果が変わった
