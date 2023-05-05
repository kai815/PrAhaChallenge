## 課題

### 以下のような要望を実現するために使えそうなツールは？

Slackへの通知は、
Datadogでできるので、他の質問では割愛する。
https://docs.datadoghq.com/ja/monitors/

Sentryもできるかな。
https://docs.sentry.io/product/alerts/create-alerts/issue-alert-config/

NewRelicもできる。
https://newrelic.com/jp/platform/alerts

#### 一定期間で一定数以上、フロントエンドのWEBアプリケーションがクラッシュしていたら、開発者にSlackで知らせる

これでエラーの監視もできる。
https://docs.datadoghq.com/ja/real_user_monitoring/

#### フロントエンドで何らかのエラーが発生したら、直前までユーザが実施した作業手順、ブラウザの実行環境等の情報を付与して開発者に通知する

Datadogのセッションリプレイでできる。
https://docs.datadoghq.com/ja/real_user_monitoring/

あとはLogRocketでもできる模様。

https://tekito-style.me/columns/howto-use-logrocket

#### バックエンドのアプリケーションが（メモリ不足などの理由で）クラッシュしたら、自動的にアプリケーションを再起動しつつ、開発者にSlackで知らせる

Continuous Profilerといういのでできる模様。
https://docs.datadoghq.com/ja/profiler/

再起動する場合は、AWSでcloud watchと併用するとできそう。
https://blog.websandbag.com/entry/2019/01/10/025849

#### APIからのレスポンスタイムが5秒以上かかっているエンドポイントを可視化する。もし5秒以上かかっているレスポンスが全体の1割を超えたら開発者にSlackで知らせる

可視化はこれでできそう。
https://docs.datadoghq.com/ja/profiler/connect_traces_and_profiles/

全体の1割を超えたらとかは、monitoringの設定でできそう。
https://docs.datadoghq.com/ja/monitors/


これとかでもできそう。

https://www.site24x7.jp/rest-api-monitoring.html

#### データベースのスロークエリを可視化して、レスポンスに5秒以上かかるクエリがある場合は開発者にSlackで知らせる

データベースのモニタリングはこれでできそう。
https://docs.datadoghq.com/ja/database_monitoring/

なので、モニタリングの設定と合わせて通知もできそう。
https://docs.datadoghq.com/ja/monitors/

### WEBアプリケーションを安定稼働させるため、上記の他に監視しておいた方が良いメトリクスは?(挙げれるだけ)

1. バックエンドで何かしらのエラーが出た場合に通知(実装時の考慮漏れなどでエラーがあるかもしれないので。)
2. UXという観点が安定稼働とは異なるかもだが、ページの表示速度も監視しておくと使いやすさにも影響するのいい。

#### 全体の参考
https://qiita.com/tsurumiii/items/27f22b38215e37518c7c
https://qiita.com/MetricFire/items/d07fce3b2d001db8d94f