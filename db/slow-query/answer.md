## 課題４（質問）

### LIMIT 1 使って 1 件しか取得してないのにクエリが遅くなる理由

LIMIT を使って 1 件しか取得してなくても、その 1 件に到達するまでに時間がかかっていたら遅くなります。
例えば 1000 件データがあって、1000 件目に条件に当てはまるデータがあった場合、1 件 1 件条件に合うかを確認していたら 1000 件分のその処理の時間がかかってしまいます。
そう言ったことを回避するためにも、適切にインデックスを作成する必要があります。

### WHERE と ON の違い

ON は結合するための条件で、WHERE は抽出するための条件です。

1

```sql
SELECT * FROM employees e JOIN salaries s ON e.emp_no = s.emp_no WHERE gender = "M" AND birth_date > "1960-01-01"
```

2

```sql
SELEC * FROM employees e JOIN salaries s ON e.emp_no = s.emp_no AND gender = "M" AND birth_date > "1960-01-01"
```

1 の場合は、`e.emp_no = s.emp_no`の条件でテーブルを結合した後に、
`gender = "M" AND birth_date > "1960-01-01"`の条件でデータを抽出しています。

2 の場合は、`e.emp_no = s.emp_no AND gender = "M" AND birth_date > "1960-01-01"`の条件でテーブルを結合させています。
