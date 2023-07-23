# Firestoreを試すためのscript

主に、コマンドを忘れないようにメモ用

## とりあえず動かす

```shell
 npx ts-node src/app.ts

 //* ts-node src/app.tsだと動かなかった
```

## ユーザー一覧の取得

```shell
npx ts-node src/getUsers.ts
```

## ユーザーに紐づくタスクとそのステータス

```shell
npx ts-node src/getTaskStatusByUserId.ts //user_idを指定
```