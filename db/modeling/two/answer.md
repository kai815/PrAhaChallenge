## 課題１

Slack のモデリング
以下を満たすように。

1. メッセージ
   誰が、どのチャネルに、いつ、どんな内容を投稿したのか分かること
2. スレッドメッセージ
   誰が、どのメッセージに、いつ、どんな内容をスレッドとして投稿したのか分かること
3. チャネル
   そのチャネルに所属しているユーザにしか、メッセージ・スレッドメッセージが見えないこと
4. ユーザ
   ワークスペースに参加・脱退できること
   チャネルに参加・脱退できること
5. 横断機能
   メッセージとスレッドメッセージを横断的に検索できること（例えば「hoge」と検索したら、この文字列を含むメッセージとスレッドメッセージを両方とも取得できること）
   参加していないチャネルのメッセージ・スレッドメッセージは検索できないこと

### リソースの洗い出し

メッセージ

チャンネル

ユーザー

ワークスペース

### イベントの洗い出し

ユーザがワークスペースに参加・脱退する

ユーザがチャンネルを作成する

ユーザがチャンネルに参加・退会する

ユーザがチャンネルにメッセージを送る

ユーザがチャンネルの特定のメッセージにメッセージを送る（スレッド）

### 回答

db/modeling/two/answer.png