## 貝塚作成クイズの回答

### 1 の SQL

```sql
mysql> SELECT COUNT(*) FROM employees WHERE birth_date <= '1961-06-13';
+----------+
| COUNT(*) |
+----------+
| 216381 |
+----------+
1 row in set (0.08 sec)
```

実行時間

```sql
+-----------------------------------------------------------------+-----------+
| sql_text                                                        | time      |
+-----------------------------------------------------------------+-----------+
| SELECT COUNT(*) FROM employees WHERE birth_date <= '1961-06-13' | 74.53 ms  |
```

74.53 ms

インデックスを貼る

```sql
ALTER TABLE employees
ADD INDEX birth_date_index(birth_date);
```

```sql
+-----------------------------------------------------------------------------------------------------------------------------------+----------+
| SELECT sql_text, sys.format_time(timer_wait) AS time FROM performance_schema.events_statements_history WHERE sql_text IS NOT NULL | 1.93 ms  |
| SELECT COUNT(*) FROM employees WHERE birth_date <= '1961-06-13'                                                                   | 58.08 ms |
+-----------------------------------------------------------------------------------------------------------------------------------+----------+
```

58.08 ms

### 2 の SQL

```sql
mysql> SELECT concat(round((sum(case gender WHEN 'F' THEN 1 ELSE 0 END)/count(*) * 100),1),'%') as per
    -> FROM employees;
+-------+
| per   |
+-------+
| 40.0% |
+-------+
1 row in set (0.08 sec)
```

実行時間

```sql
| SELECT concat(round((sum(case gender WHEN 'F' THEN 1 ELSE 0 END)/count(*) * 100),1),'%') as per
FROM employees | 78.16 ms |
```

78.16 ms

インデックスを貼る

```sql
ALTER TABLE employees
ADD INDEX gender_index(gender);
```

実行速度

```sql
| SELECT concat(round((sum(case gender WHEN 'F' THEN 1 ELSE 0 END)/count(*) * 100),1),'%') as per
    -> FROM employees             | 142.60 us |
+-----------------------------------------------------------------------------------------------------------------------------------+-----------+
```

142.60 us

### 3 の SQL

```sql
mysql> SELECT COUNT(*) FROM employees WHERE hire_date <= '1991-06-13';
+----------+
| COUNT(*) |
+----------+
|   200938 |
+----------+
1 row in set (0.08 sec)
```

実行時間

```sql
+----------------------------------------------------------------+----------+
| SELECT COUNT(*) FROM employees WHERE hire_date <= '1991-06-13' | 73.05 ms |
```

73.05 ms

インデックスを貼る

```sql
ALTER TABLE employees
ADD INDEX hire_date_index(hire_date);
```

```sql
| SELECT COUNT(*) FROM employees WHERE hire_date <= '1991-06-13'                                                                    | 54.99 ms |
```

54.99 ms
