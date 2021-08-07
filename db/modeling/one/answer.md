## 課題 1

https://github.com/praha-inc/praha-challenge-templates/blob/master/db/design/sushi.png

のモデリング

### リソースの洗い出し

注文の情報（日付や顧客名）

注文詳細の情報（各商品が何個など）

寿司の単品メニュー

寿司単品のジャンル（値段ごと？寿司以外のもの単品も出てきそう）

セットメニュー（丼ものはこっち？）

セットメニューのジャンル(セットメニューのカラムに入れるかマスターにして別テーブルにするか？)

セットメニューに単品の中の何が含まれているか

### イベントの洗い出し

注文する

注文内容を変更する

寿司やセットメニューの価格を変更する(名前とかも変更するかもだけど、そこも履歴テーブル作るか悩む)

### 回答

db/modeling/one/answer.png

## 課題 2 仕様変更

### シャリの大小

SingleMenuOrder テーブルと SetMenuOrder テーブルにシャリの大小カラムを追加する
）

### 月毎の寿司ネタが何個か

これは今の設計でもいける
月ごとの Order から SingleMenuOrder に紐づく SingleMenu の数を集計するのと、
SetMenuOrder から SetMenu に SetSingleRelation から SingleMenu を取れる。（JOIN 多いかも？）
