# 課題 1

## モデリング

項目書き出し

- User

  - name

- Task

  - title

- TaskStatus
  - status
    - done
    - undone

モデリングの回答はこちら
そんなに RDB と変わらない感じになったかも
[modling](./modeling.png)

Firestore の 中身 はレビュー時にでも見せる形にしようかなと思います。

## 参考

https://zenn.dev/ryokkkke/scraps/c13d07ab1e8b09

https://atmarkit.itmedia.co.jp/ait/articles/1103/25/news131.html

https://qiita.com/Yappii_111/items/bdac0b6826c8302e9bec

https://docs.aws.amazon.com/ja_jp/amazondynamodb/latest/developerguide/bp-adjacency-graphs.html

https://hack-le.com/dynamodb-many-to-many/

https://qiita.com/a2-tsuchiya/items/fcae664b7ec81d80194c

https://firebase.google.com/docs/firestore/manage-data/structure-data?hl=ja

https://cloud.google.com/firestore/docs/best-practices?hl=ja

# 課題 2(実装)

回答は`./inplments`以下にあります。

## 参考

https://ics.media/entry/4682/

https://qiita.com/mogmet/items/921fe9ba62a4d2442e32

https://firebase.google.com/docs/firestore/manage-data/add-data?hl=ja

# 課題 2(質問)

## 正規化について

firestoreでいうところのdocument(RDBでいうテーブルに近い)を作成して、分けて参照するためのidを保存しておく。（他の方法があるのかな？）

## NoSQL と RDB の比較

NoSQLのメリット
1. スキーマを事前に定義しないので、スキーマの変更がしやすい
2. JSON、XML、Key-Value、グラフ、ドキュメント形式など色々なデータ構造を扱える
3. 大量データなどにも強い?

NoSQLのデメリット
1. データの一貫性を保証するためのトランザクションがRDBよりも弱い?
2. RDBに比べてjoinなどの複雑なクエリを実行することが難しい場合がある

RDBのメリット
1. トランザクションを用いたデータの整合性
2. SQLで複雑なクエリを行うことができる

RDBのデメリット
1. 大量のデータやトラフィックを処理するのに制約がある
2. テーブルのスキーマを変更する際に手間がかかることがある