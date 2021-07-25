## 課題 1

TABLE Post {

id: varchar

text: varchar

tags: varchar -- ("tagA,tagB,tagC"といった値が入る)

}

※上記の例では、「投稿」に紐づけられた「タグ」を表現するために、投稿テーブルに「タグ」というカラムを持ち、その中に "tagA, tagB, tagC"といった形で格納している

### このテーブル設計で生じる問題

1.特定のタグがある Post を絞るときに tags の名前を Like 句を用いる必要があり、精度と速度が疑問

2.tagA の名称が Atag と変わった時に一括で変更できない。

3.tags の追加をするときに、文字列結合をする形になるので手間になる。

4.tags と Post の関連を削除をするときに、一致する文字列を探してから削除する事になるので手間になる。

5.tag の一覧を表示する時に、全部の Post から tags を取得、被っている tags を削除という処理になるので手間になる

## 課題２

db/anti-pattern/one/answer.png
