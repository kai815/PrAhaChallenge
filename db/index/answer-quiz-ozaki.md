## 尾崎さんのクイズの回答

1. last_name が'Kalloufi'の employee の一覧を表示

```sql
SELECT * FROM employees
WHERE last_name = 'Kalloufi';
```

last_name にインデックスなし

```sql
| SELECT * FROM employees
WHERE last_name = 'Kalloufi'                                                                              | 81.85 ms |
```

81.85 ms

last_name にインデックスあり

```sql
SELECT * FROM employees WHERE last_name = 'Kalloufi'                                                                              | 3.20 ms |
```

3.20 ms

2. first_name が'Kyoichi'の employee の一覧を表示

```sql
SELECT * FROM employees
WHERE first_name = 'Kyoichi';
```

first_name にインデックスなし

```sql
| SELECT * FROM employees
WHERE first_name = 'Kyoichi'                                                                              | 75.55 ms
```

75.55 ms

first_name にインデックスあり

```sql
| SELECT * FROM employees WHERE first_name = 'Kyoichi'                                                                              | 1.33 ms |
```

1.33 ms

3. 1990 年以降に雇用した社員の一覧を表示

```sql
SELECT * FROM employees WHERE hire_date >= '1990-01-01';
```

hire_date にインデックスなし

```sql
 SELECT * FROM employees WHERE hire_date >= '1990-01-01' | 157.87 ms |
```

157.87 ms

```sql
SELECT * FROM employees WHERE hire_date >= '1990-01-01'                                                                           | 160.04 ms |
```

160.04 ms

貼ったけど遅くなっている？
