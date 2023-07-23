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

## ユーザーに紐づくタスクとそのステータスを表示

```shell
npx ts-node src/getTaskStatusByUserId.ts {user_idを指定}
```

## ユーザーに紐づくタスクを全て完了にする

```shell
npx ts-node src/updateStatusDoneByUserId.ts {user_idを指定}
```

## タスクを更新する

```shell
npx ts-node src/updateTask.ts {task_idを指定} {titleを指定}
```

## タスクを削除する

```shell
npx ts-node src/deleteTask.ts {task_idを指定}
```