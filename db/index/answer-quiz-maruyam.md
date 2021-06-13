## 丸山さんのクイズの回答

1. 何月入社が多いか調べるために、入社月ごとの従業員数を集計してください

```sql
mysql> SELECT COUNT(emp_no), DATE_FORMAT(hire_date, '%m') AS month FROM employees GROUP BY month;
+---------------+-------+
| COUNT(emp_no) | month |
+---------------+-------+
|         23859 | 01    |
|         24448 | 02    |
|         26917 | 03    |
|         25553 | 04    |
|         25943 | 05    |
|         25003 | 06    |
|         25605 | 07    |
|         25396 | 08    |
|         24316 | 09    |
|         24613 | 10    |
|         23862 | 11    |
|         24509 | 12    |
+---------------+-------+
12 rows in set (0.12 sec)

```

hire_date にインデックスなし

```sql
SELECT COUNT(emp_no), DATE_FORMAT(hire_date, '%m') AS month FROM employees GROUP BY month                                         | 133.54 ms
```

133.54 ms

hire_date にインデックスあり

```sql
SELECT COUNT(*), DATE_FORMAT(hire_date, '%m') AS monthFROM employees GROUP BY month | 1.65 ms
```

1.65 ms

2. どの肩書きの社員が多いか調べるために、現在の肩書きごとの従業員数を集計してください

```sql
SELECT title, COUNT(title) as titleNumber FROM titles JOIN employees ON employees.emp_no = titles.emp_no GROUP BY title;
```

title にインデックスなし

```sql
| SELECT COUNT(title) as titleNumber FROM titles JOIN employees ON employees.emp_no = titles.emp_no GROUP BY title                  | 667.13 ms |
```

667.13 ms

title に インデックス を貼った

```sql
| SELECT title, COUNT(title) as titleNumber FROM titles JOIN employees ON employees.emp_no = titles.emp_no GROUP BY title           | 641.08 ms |
```

641.08 ms

そこまで変わらない？他に貼るべき？

3. 現在の全社員の給与平均を調べてください

```sql
mysql> SELECT AVG(salaries.salary) FROM salaries JOIN employees ON employees.emp_no = salaries.emp_no WHERE to_date > CURRENT_DATE();
+----------------------+
| AVG(salaries.salary) |
+----------------------+
|           72012.2359 |
+----------------------+
1 row in set (3.36 sec)
```

salary にインデックスなし

```sql
| SELECT AVG(salaries.salary) FROM salaries JOIN employees ON employees.emp_no = salaries.emp_no WHERE to_date > CURRENT_DATE()     | 3.28 s  |
```

3.28s

salary にインデックスあり

```sql
| SELECT AVG(salaries.salary) FROM salaries JOIN employees ON employees.emp_no = salaries.emp_no WHERE to_date > CURRENT_DATE()     | 4.20 s  |
```

4.20 s

速くなってないなぁ
他に貼るべきなのか
