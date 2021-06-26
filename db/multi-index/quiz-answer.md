## 課題３（クイズ）の回答

### 1 の回答

```sql
SELECT COUNT(*) FROM employees WHERE first_name = 'Duke' AND hire_date >= '1999-01-01';
```

#### インデックスなし

```sql
| SELECT COUNT(*) FROM employees WHERE first_name = 'Duke' AND hire_date >= '1999-01-01'                                            | 66.21 ms |
```

66.21ms

#### インデックスあり

インデックスの作成

```sql
CREATE INDEX name_hiredate ON employees (first_name,hire_date);
```

```sql
| SELECT COUNT(*) FROM employees WHERE first_name = 'Duke' AND hire_date >= '1999-01-01'                                            | 682.10 us |
```

結果

66.21 ms→682.10 us

### 2 の回答

```sql
SELECT concat(round((sum(case gender WHEN 'F' THEN 1 ELSE 0 END)/count(*) * 100),1),'%') as per
FROM employees
WHERE hire_date >= '2000-01-01';
```

#### インデックスなし

```sql
| SELECT concat(round((sum(case gender WHEN 'F' THEN 1 ELSE 0 END)/count(*) * 100),1),'%') as per FROM employees WHERE hire_date >= '2000-01-01' | 70.18 ms |
```

70.18 ms

#### インデックスあり

インデックスの作成

```sql
CREATE INDEX hiredate_gender ON employees (hire_date,gender);
```

```sql
| SELECT concat(round((sum(case gender WHEN 'F' THEN 1 ELSE 0 END)/count(*) * 100),1),'%') as per
FROM employees
WHERE hire_date >= '2000-01-01' | 773.60 us |
```

70.18 ms→773.60 us

以下は速くならないやつ

```sql
CREATE INDEX gender_hiredate ON employees (gender,hire_date);
```

```sql
| SELECT concat(round((sum(case gender WHEN 'F' THEN 1 ELSE 0 END)/count(*) * 100),1),'%') as per FROM employees WHERE hire_date >= '2000-01-01' | 70.55 ms |
```

70.55 結果は変わらない

```sql
mysql> EXPLAIN SELECT concat(round((sum(case gender WHEN 'F' THEN 1 ELSE 0 END)/count(*) * 100),1),'%') as per    -> FROM employees
    -> WHERE hire_date >= '2000-01-01';
+----+-------------+-----------+------------+-------+---------------+-----------------+---------+------+--------+----------+--------------------------+
| id | select_type | table     | partitions | type  | possible_keys | key             | key_len | ref  | rows   | filtered | Extra                    |
+----+-------------+-----------+------------+-------+---------------+-----------------+---------+------+--------+----------+--------------------------+
|  1 | SIMPLE      | employees | NULL       | index | NULL          | gender_hiredate | 4       | NULL | 299245 |    33.33 | Using where; Using index |
+----+-------------+-----------+------------+-------+---------------+-----------------+---------+------+--------+----------+--------------------------+
1 row in set, 1 warning (0.00 sec)
```

### 3 の回答

```sql
SELECT COUNT(*) FROM titles WHERE title = 'Senior Engineer' AND to_date = '9999-01-01';
```

#### インデックスなし

```sql
| SELECT COUNT(*) FROM titles WHERE title = 'Senior Engineer' AND to_date = '9999-01-01'                                            | 328.72 ms |
```

328.72 ms

#### インデックスあり

```sql
CREATE INDEX title_hiredate ON titles (title,to_date);
```

```sql
| SELECT sql_text, sys.format_time(timer_wait) AS time FROM performance_schema.events_statements_history WHERE sql_text IS NOT NULL | 1.25 ms  |
```

328.72 ms→1.25 ms
