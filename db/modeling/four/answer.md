## 課題１

リマインダーアプリ

1. ユーザ
   他のユーザ（複数可）宛にリマインダーを設定できる
2. リマインダー
   送信相手、文面、頻度を指定可能
   1 時間ごとにバッチが動き、配信が必要なリマインダーを指定されたユーザに配信する
3. リマインダーの周期
   設定可能な周期は、現時点では以下の 4 種類
   毎日
   X 日おき
   毎週 X 曜日
   毎月 X 日

   周期のパターンは増えることが予想される

### リソースの洗い出し

ユーザ

リマインダー

### イベントの洗い出し

ユーザがリマインダー(タスク)を作成する。

リマインダーを受け取ったユーザがタスクを完了にする。

バッチが各ユーザにリマインドする。

### 回答

db/modeling/four/answer.png