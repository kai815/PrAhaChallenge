## 課題１（実装）

### 設定

設定の確認

```sql
mysql> show variables like 'slow%';
+---------------------+--------------------------------------+
| Variable_name       | Value                                |
+---------------------+--------------------------------------+
| slow_launch_time    | 2                                    |
| slow_query_log      | OFF                                  |
| slow_query_log_file | /var/lib/mysql/f656a298255f-slow.log |
+---------------------+--------------------------------------+
3 rows in set (0.10 sec)

```

```sql
mysql> show variables like 'long_query_time';
+-----------------+-----------+
| Variable_name   | Value     |
+-----------------+-----------+
| long_query_time | 10.000000 |
+-----------------+-----------+
1 row in set (0.00 sec)
```

設定の変更

```sql
mysql> set global slow_query_log_file = '/tmp/mysql-slow.log';
Query OK, 0 rows affected (0.02 sec)

mysql>  set global long_query_time = 0.1;
Query OK, 0 rows affected (0.00 sec)

mysql> set global slow_query_log = ON;
Query OK, 0 rows affected (0.08 sec)
```

設定の再確認

```sql
mysql> show variables like 'slow%';
+---------------------+---------------------+
| Variable_name       | Value               |
+---------------------+---------------------+
| slow_launch_time    | 2                   |
| slow_query_log      | ON                  |
| slow_query_log_file | /tmp/mysql-slow.log |
+---------------------+---------------------+
3 rows in set (0.00 sec)
```

```sql
mysql> show variables like 'long_query_time';
+-----------------+----------+
| Variable_name   | Value    |
+-----------------+----------+
| long_query_time | 0.100000 |
+-----------------+----------+
1 row in set (0.00 sec)
```

### 0.1 秒未満の sql3 つ

1

```sql
mysql> SELECT COUNT(*) gender FROM employees WHERE gender = 'M';
+--------+
| gender |
+--------+
| 179973 |
+--------+
1 row in set (0.06 sec)
```

2

```sql
mysql> SELECT COUNT(*) FROM employees
    -> WHERE last_name = 'Kalloufi';
+----------+
| COUNT(*) |
+----------+
|      195 |
+----------+
1 row in set (0.05 sec)
```

3

```sql
mysql> SELECT COUNT(*) FROM employees WHERE first_name = 'Chenxi' and last_name = 'Schnabel';
+----------+
| COUNT(*) |
+----------+
|        1 |
+----------+
1 row in set (0.06 sec)
```

### 0.1 秒以上の sql3 つ

1

```sql
mysql> SELECT COUNT(*) FROM salaries WHERE salary > 1000;
+----------+
| COUNT(*) |
+----------+
|  2844047 |
+----------+
1 row in set (1.15 sec)

```

2.

```sql
mysql> SELECT COUNT(*) FROM titles;
+----------+
| COUNT(*) |
+----------+
|   443308 |
+----------+
1 row in set (0.34 sec)
```

3.

```sql
mysql> SELECT COUNT(*) FROM salaries WHERE salary < 1000;
+----------+
| COUNT(*) |
+----------+
|        0 |
+----------+
1 row in set (0.57 sec)
```

### スロークエリログ確認

```
root@f656a298255f:/# cat /tmp/mysql-slow.log
# Time: 2021-07-03T06:57:06.521892Z
# User@Host: root[root] @ localhost []  Id:     4
# Query_time: 1.148087  Lock_time: 0.000129 Rows_sent: 1  Rows_examined: 2844047
SET timestamp=1625295426;
SELECT COUNT(*) FROM salaries WHERE salary > 1000;
# Time: 2021-07-03T07:00:18.543056Z
# User@Host: root[root] @ localhost []  Id:     4
# Query_time: 0.340348  Lock_time: 0.000127 Rows_sent: 1  Rows_examined: 443308
SET timestamp=1625295618;
SELECT COUNT(*) FROM titles;
# Time: 2021-07-03T07:00:59.459166Z
# User@Host: root[root] @ localhost []  Id:     4
# Query_time: 0.575459  Lock_time: 0.000144 Rows_sent: 1  Rows_examined: 2844047
SET timestamp=1625295659;
SELECT COUNT(*) FROM salaries WHERE salary < 1000;
```

0.1 秒より長いのしかない。

### 課題２（実装）

#### 最も頻度高くスロークエリに現れるクエリ

```
mysqldumpslow -s c -t 1 /tmp/mysql-slow.log > /tmp/analitics-slowquery.log
```

count でソートして取得できる

#### 実行時間が最も長いクエリ

```
mysqldumpslow -s at -t 1 /tmp/mysql-slow.log > /tmp/analitics-slowquery.log
```

クエリー時間でソートして取得できる

#### ロック時間が最も長いクエリ

```
mysqldumpslow -s al -t 1 /tmp/mysql-slow.log > /tmp/analitics-slowquery.log
```

ロック時間でソートして取得できる
