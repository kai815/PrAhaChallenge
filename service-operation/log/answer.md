# 課題１（質問）

## ログレベルとは？

ログは色々な種類のものがあるが、それぞれの意味やどれほど重要か、またそのログが吐き出された際には何か対処が必要かなどを定めたもの。

### どのようなレベルがあるか

以下のようなもの

FATAL: 致命的なエラー
ERROR: エラー
WARN: 警告レベル
INFO: 一般的な情報を記録する
DEBUG: デバッグ情報を記録する
TRACE: トレース情報を記録する

### ログレベルを指定しておくメリット

1. ログの制御を考えやすくなる
   このレベルのエラーであればファイルに書き込むなどの制御が検討しやすくなる

2. すぐに対処可能なログかどうかの判断がしやすくなる

3. 1 に関連して不要なログをファイルに書き込まないため、サーバの容量を無駄に逼迫せずに済む

### 参考

https://docs.oracle.com/cd/E19299-01/820-0511/bgbfm/index.html
https://engineering.otobank.co.jp/entry/2016/09/20/181756
https://qiita.com/nanasess/items/350e59b29cceb2f122b3

## アプリケーションログにはどのような情報を含めるべきか(逆にログに含めない方が良い情報があれば)

含めるべきものは以下。

1. 日時 少なくてもミリ秒 3 桁以上は必要
2. 送信元 IP アドレス 環境によっては実際の送信元 IP アドレスを取得できない場合あり。
3. リクエスト ID
4. ユーザ ID アプリ上で認識しているユーザ ID
5. スレッド ID
6. ロガー（ログ送信元） ログ出力するクラス名等
7. ログレベル ERROR, WARN, INFO 等
8. エラーなどのメッセージ

含めない方がいいものは以下。

1. 認証情報(パスワード、暗証番号)
2. 個人情報(氏名、生年月日、住所、電話番号、メールアドレス、マイナンバー)
3. 決済情報(クレジットカード番号・有効期限、口座番号・名義人名)
4. 機密情報(暗号化・復号化キー、アクセストークン)

### 参考

https://www.nextdoorwith.info/wp/se/logging-design-policy-example/

## どのようなタイミングでログを出力すると良いか？（例えば「正常系の処理が終了したとき」「例外が生じたとき」など）ログレベルと併せて考える

INFO リクエスト開始時 - 処理概要、実行クラス名、メソッド名、HTTP のリクエスト内容
INFO 途中経過 - 実行条件、処理対象オブジェクトのキーとなる値等(customer_id, order_id 等)
INFO 処理終了時 - 実行結果(OK/NG 等)、リダイレクト先、HTTP のレスポンス内容
WARN イベント発生時 - 画面に表示したエラーメッセージ等
ERROR 例外発生時 - 例外クラス、例外メッセージ
INFO その他、必要に応じて

### 参考

https://qiita.com/nanasess/items/350e59b29cceb2f122b3

## ログを全て人力で検査するのは大変なので、スクリプトなどで集計しやすいように、パースしやすいメッセージを作ることも大切だと言われる。どのようなログメッセージならパースしやすいか？

規則性があって、ある程度構造化されているもの。読みやすいログはトレースしやすいのもかもしれない。

### 参考

https://applis.io/posts/how-to-design-log-output
https://docs.datadoghq.com/ja/logs/guide/log-parsing-best-practice/
https://docs.datadoghq.com/ja/logs/log_configuration/parsing/?tab=%E3%83%9E%E3%83%83%E3%83%81%E3%83%A3%E3%83%BC

## 以下のログの種類の説明

### アクセスログ

外部からサーバにアクセスされたことを記録するログ。Web アプリケーションにおいては、ユーザーがアクセスしたことを記録するログ。
HTTP メソッドや URL,リクエスト元の IP アドレス,アクセスした日時などを記録する。

#### 参考

https://e-words.jp/w/%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B9%E3%83%AD%E3%82%B0.html

### アプリケーションログ

アプリケーションが実行される際に発生するイベントやエラー、トランザクションなどの情報を記録するログのこと。アプリケーションログは、アプリケーションの動作状況を把握し、問題を特定するために用いる。
イベントのタイプ,発生日時,エラーメッセージなどを記録する。

#### 参考

https://www.manageengine.jp/products/EventLog_Analyzer/application-log-processing.html

### エラーログ

アプリケーションでエラーが起きたことを記録するログ。エラーが発生した時刻や場所、エラーの内容、発生した原因などが記録される。
エラーログを分析することで、エラーの原因や解決方法を特定することができる。

### （フロントエンドの）ユーザーログ

Web アプリケーションやモバイルアプリケーションのユーザー操作や動作に関する情報を記録するログのこと。
ユーザーログには、ユーザーがアプリケーション内でどのような操作を行ったのか、
どのような画面遷移を行ったのか、エラーが発生した場合にはどのようなエラーが発生したのかなどを記録する。

#### 参考

https://engineer.retty.me/entry/2018/12/01/120019

### データベースのクエリログ

データベースに対する SQL クエリの履歴を記録するログのこと。SQL クエリの実行時間や実行回数、実行されたクエリの内容、実行者の情報などが含まれる。
システムの監視やトラブルシューティング、パフォーマンスチューニングに役立つ。

#### 参考

https://www.netassist.ne.jp/techblog/27466/

## ログローテーションとは？どのような利点があるか？

ログファイルが一定のファイルサイズに達したり、一定の期間が経過したらファイル名を変更しログファイルを切り分け、古くなったログファイルをまとめて圧縮したり消去する作業のこと。ログファイルの肥大化を防ぐことができる。
サーバのストレージの逼迫を防いだり、必要なログへのアクセスがしやすくなるなどのメリットがある。

#### 参考

https://linuc.org/study/column/3635/
