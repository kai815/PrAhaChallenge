# 課題
自分のプロジェクトでリファクタリングの課題をする

## レポジトリ
GraphQLの勉強のために作ったレポジトリです。
https://github.com/kai815/learn-graphql-app

## Before
[こののUserCardコンポーネント](https://github.com/kai815/learn-graphql-app/blob/a35709668e5c235edfe746c63074714ce49ad4ea/react-graphql/src/components/UserCard.tsx#L7)に表示したい項目を追加したいとき、



[親コンポーネントのGraphQLのquery](https://github.com/kai815/learn-graphql-app/blob/7b134cf50d940f8ec349dc92b9ee898c1f8e1463/react-graphql/src/components/UserList.tsx#L13)も修正する必要がある（このQueryを修正しなければというのは、GraphQLならではの問題感もある。RESTの場合は全てとってしまっているので修正の必要ないかもしれないし、そもそもBEの修正が必要な場合もありえる。）


親コンポーネントが子コンポーネントの中身を知らないといけなくなっているのが問題かと。
この例だけであれば、そんなに問題ならないかもだが、
このUserCardコンポーネントが色々なところに使われると修正は多岐に渡る可能性もある。



## After
以下のPRが実装です。

https://github.com/kai815/learn-graphql-app/pull/13

これに子供コンポーネントのUserFieldsに欲しいプロパティを追加すれば、
親コンポーネントでqueryを修正する必要はなくなり、より関心ごとが分離されているかと。

### 参考
https://zenn.dev/so_nishimura/articles/2c8796761f2d02

https://zenn.dev/moneyforward/articles/20221211-fragment-colocation

https://blog.nnn.dev/entry/2023/07/03/144639
