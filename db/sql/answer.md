## 課題２（質問）

### 「WHERE」と「HAVING」

基本的に SQL の実行される順番は下記になります。
FROM → WHERE → GROUPBY → HAVING → SELECT → ORDERBY → LIMIT

WHERE 区はグループ化される前に抽出条件を実行し、HAVING はグループ化された後に抽出条件を実行します。

さらに、COUNT や SUM などの集計関数はグループ化された後のものに対してのものなです。

そのため、COUNT や SUM などで条件を抽出する時には、WHERE は使うことができません。

グループ化された後で条件を抽出したい場合は、HAVING、グループ化される前に条件を抽出したい場合は、WHERE を使うといいです。

### DDL

`Data Definition Language`の略で、テーブルなどの作成や削除、各種設定など命令の総称です。（`CREATE`,`ALTER`,`DROP`,`TRUNCATE`など）

### DML

`Data Manipulation Language`の略で、データの格納や取り出し、更新、削除などの命令の総称です。（`SELECT`,`INSERT`,`UPDATE`,`DELETE`など）

### DCL

`Data Control Language`の略で DML や DDL の利用に関する許可や禁止を設定する命令の総称です。DCL は誰にどのようなデータ・テーブルを操作させるかなどの権限を設定する命令です。（`GRANT`,`REVOKE`）

### TCL

`Transaction Control Language`とは、トランザクションの開始や終了の命令の総称です。(`COMMIT`,`ROLLBACK`,`SET TRANSACTION`,`SAVEPOINT`)
