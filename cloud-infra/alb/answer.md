# 課題 1

## nginx の導入

> ヒント：これまで作成してきた Security Group の設定だと SSH しか許可されていないため、インターネット経由でアクセス出来ないかもしれません。そんな時は Security Group の設定も見直してみましょう！

ってあるけど、private サブネットの場合はそもそもインターネット接続できないのでは？

一旦パブリックにして表示

az1

![az1](./screenshot/AZ1.png)

az2

![az2](./screenshot/AZ2.png)

## alb 入れた結果

両方がいきてる場合
![1and2](./screenshot/1and2.gif)

1 を停止した場合
![2only](./screenshot/2only.gif)
