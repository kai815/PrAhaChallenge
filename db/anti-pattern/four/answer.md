## 課題 1

ツリー構造をリレーショナルデータベースで表現する際（例えば slack のようなスレッドを表現する時など）に、以下のように親の ID だけを持つツリー構造を見かけることがあります

TABLE Message {

id: varchar

parent_message_id: varchar

text: varchar

FOREIGN KEY (parent_message_id) REFERENCES Message(id)

}

上記の設計では parent_message_id に Message 自身の id を持つ、自己参照を用いています

### この設計で生じる問題

・削除するときに、子供メッセージから全て削除する必要がある

・親メッセージ一覧とそのスレッドの件数を出すときに SELECT しにくい？
