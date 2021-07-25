## 課題１

以下のように、漫画、小説といった書籍を保存する DB があり、それらにコメントできるようなサービスが題材

(漫画)

TABLE Manga {

id: varchar

name: varchar

}

(小説)

TABLE Novel {

id: varchar

name: varchar

}

(コメント)

TABLE Comment {

id: varchar

text: varchar

}

「漫画と小説どちらにもコメントを紐付けられるようにしたい」という要望を受けて、前任のエンジニアは「belongs_to_id」を定義し、そこに manga_id あるいは novel_id を格納することで解決しました。以下のような状態です

TABLE Comment {

id: varchar

text: varchar

belongs_to_id: varchar (ここには Manga.Id、あるいは Novel.Id が入る)

}

### この設計の問題

1. 漫画へのコメントなのか小説へのコメントなのかわからないので、belongs_to_id が 1 の場合、id が 1 の Manga と Novel に紐づくことになる。
