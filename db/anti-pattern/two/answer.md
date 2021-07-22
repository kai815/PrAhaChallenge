## 課題 1

以下のようなテーブルが定義されていたとします。投稿があり、そこに紐づくタグを複数のカラムで管理しています

TABLE Post {

id: varchar

content: varchar

tag1: varchar

tag2: varchar

tag3: varchar

}

TABLE Tag {

id: varchar

content: varchar

}

### この設計で生じる問題

1. タグを 3 つまで紐づけられず、4 個以上紐づける場合、都度カラムを増やす必要があること

2. Post の tag1~3 カラムに Tag の content の内容が入るなら、Tag の content を更新するたびに Post の tag カラムの更新する必要がある

3. Post の tag1~3 カラムに Tag の content の内容が入るなら、Tag を削除するたびに関連する Post の tag カラムも更新する必要がある
