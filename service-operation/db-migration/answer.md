## 課題1

### 「expand and contract pattern」とはどのような手法か？

DBのスキーマの変更の際に、全て一気に置き換えるのではなく、移行フェーズを儲けて行う。
移行開始の際に、新しスキーマを追加しデータをマイグレート、移行用のソースコードもデプロイする。
移行終了のタイミングで古いスキーマを削除し、移行用コードも削除する。

#### 参考
https://www.prisma.io/dataguide/types/relational/expand-and-contract-pattern#what-is-the-expand-and-contract-pattern
https://syobochim.hatenablog.com/entry/2020/05/20/084736

### 開発環境でマイグレーションしたときは大丈夫だったが、本番で失敗するときはどんなときか？この失敗を避けるためには、どのような対策が有効か？

データが本番と開発環境で異なる時。
テーブルやフィールドの名前、データ型、制約などデータベースが本番と開発環境で異なる時。

これらの対策として、有効なのはデータや、データベースを本番と同じ状態で試してみること。（このくらいしか思いつかなかった。）

#### 参考
https://techblog.zozo.com/entry/refactoring_iqon_db

## 課題2
実際に特大課題の内容でmigrationするための手順書を作成する。
ユーザーが複数のペアに所属できる。(→元々のDB設計で大丈夫ではあったので、手順だけメモします。)
レポジトリは以下
https://github.com/kai815/praha-challenge-extra-large-task

1. スキーマファイルの変更(ここはコードレビューまでに終わっている想定だから課題としては不要かも)
   `backend/prisma/schema.prisma`ファイルを変更して
```
yarn migrate:dev
```
コマンドを実行して、`backend/prisma/migrations`に意図した変更のsqlのファイルがあるかを確認する
これらの変更を含んだソースを反映
2. 本番

```
yarn migrate:prd
```
を行う(本番てこれくらいだよな)

### 発生しうる問題
ケースがすでに満たせているので、仮定の話になるが、
PairMemberテーブルに主キーのidが元々なくて、pairIdとuserIdで複合主キーとなっていた場合とする。
その際には主キーでidを追加することになるかと思ったが、発生しうる問題が思いつかなかった。


### 参考

https://scrapbox.io/mrsekut-p/Prisma%E3%82%92%E5%AE%9F%E7%92%B0%E5%A2%83%E3%81%ABDeploy
https://qiita.com/gwappa/items/34cdab09a69d38c3fb07