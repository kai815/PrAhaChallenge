## 課題１（質問）

### ビューの仕組み

テーブルの特定部分や複数テーブルを結合し、ユーザに必要な部分だけをあたかも一つのテーブルであるかのように見せるための、仮想的なテーブルのようなものです。
ビューそのものはデータを持たずに、元となっているテーブルからデータを参照します。保存されているのは、あくまで SELECT 文です。ビューにアクセスする際に、保存された SELECT 文が実行されます。

### メリットや用途

1. 特定のカラムだけを表示させることが可能になり、それ以外のカラムを表示させないようにできること

2. JOIN が多い SQL は再利用するのであれば view によって簡潔に記述することができ，他人でも理解し易い SQL になること

### マテリアライズドビュー

ビューでは実際にデータは保存されずに、実行する SELECT 文のみが保存されますが、マテリアライズドビューはデータも保存されます。
そのため、都度 SELECT が実行されるビューより取得時のパフォーマンスはよくなりますが、毎回検索を行うわけではないので、データの不整合が生じる可能性があります。更新は別で行う必要があります。
