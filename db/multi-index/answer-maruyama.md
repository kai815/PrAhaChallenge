## まるやまさんクイズの回答

### 1 の回答

```sql
SELECT emp_no FROM employees WHERE first_name = 'Chenxi' and last_name = 'Schnabel';
```

```sql
CREATE INDEX employee_name ON employees (first_name,last_name);
```

### 2 の回答

```sql
SELECT emp_no FROM titles WHERE title = 'Staff' and to_date = '9999-01-01';
```

```sql
CREATE INDEX title_to_date ON titles (title,to_date);
```

### 3 の回答

```sql
SELECT emp_no FROM salaries WHERE salary = 100000 and to_date = '9999-01-01';
```

```sql
CREATE INDEX salary_to_date ON salaries (salary,to_date);
```
