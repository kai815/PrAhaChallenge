## 課題１

NULL = 0

```sql
mysql> SELECT COUNT(*) FROM employees WHERE NULL = 0;
+----------+
| COUNT(*) |
+----------+
|        0 |
+----------+
1 row in set (0.00 sec)

```

NULL = NULL

```sql
mysql> SELECT COUNT(*) FROM employees WHERE NULL = NULL;
+----------+
| COUNT(*) |
+----------+
|        0 |
+----------+
1 row in set (0.00 sec)
```

NULL <> NULL

```sql
mysql> SELECT COUNT(*) FROM employees WHERE NULL <> NULL;
+----------+
| COUNT(*) |
+----------+
|        0 |
+----------+
1 row in set (0.00 sec)
```

NULL AND TRUE

```sql
mysql> SELECT COUNT(*) FROM employees WHERE NULL AND TRUE;
+----------+
| COUNT(*) |
+----------+
|        0 |
+----------+
1 row in set (0.00 sec)

```

NULL AND FALSE

```sql
mysql> SELECT COUNT(*) FROM employees WHERE NULL AND FALSE;
+----------+
| COUNT(*) |
+----------+
|        0 |
+----------+
1 row in set (0.00 sec)
```

NULL OR TRUE

```sql
mysql> SELECT COUNT(*) FROM employees WHERE NULL OR TRUE;
+----------+
| COUNT(*) |
+----------+
|   300024 |
+----------+
1 row in set (0.04 sec)
```

普通にやる

```sql
mysql> SELECT COUNT(*) FROM employees;
+----------+
| COUNT(*) |
+----------+
|   300024 |
+----------+
1 row in set (0.04 sec)
```

## 課題２

### 元々の設計

TABLE assignee {

id: varchar NOT NULL

}

TABLE Issue {

id: varchar NOT NULL

text: varchar NOT NULL

assigned_to_id: varchar -- NULL になり得る

}

### 変更後

TABLE assignee {

id: varchar NOT NULL

}

TABLE issue {

id: varchar NOT NULL

text: varchar NOT NULL

}

TABLE issue_assignee {
id: varchar NOT NULL
issue_id: varchar NOT NULL
assignee: varchar NOT NULL
}

issue_assignee という assignee と issue を関連づけるテーブルを作成する
