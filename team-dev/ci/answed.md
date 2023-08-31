## 課題1
### lintがPRで動くようにする
コミットはこちら
https://github.com/kai815/PrAhaChallenge/pull/52/commits/2c35e94ff38d7c6b50c9b1c39be45f41dea7646d
実際に動かしたactions
https://github.com/kai815/PrAhaChallenge/actions/runs/3979166554/jobs/6821420883

## 課題2

### プラハチャレンジをモデリングするのciを書く
以下のPR
https://github.com/kai815/praha-challenge-extra-large-task/pull/24

テスト自体は落ちてますが、今回の目的としては、unit testとDBを使ったintegration testが行えていますので果たしてるかと思います。
（テスト落ちてるところを直すまでやるのはやることがだいぶ増えそうなのもあり。）

## 課題3
### ビルド時間を短縮するためにできる事

キャッシュを使う、並行で処理を行う

https://qiita.com/qualitia_cdev/items/407b0df9c0a0f0f45bbc
https://dev.classmethod.jp/articles/caching-dependencies-in-workflow-execution-on-github-actions/
https://zenn.dev/odan/scraps/81b2738864a908

### headless CMSで管理しているコンテンツが更新されたタイミングでブログをデプロイする時の起動方法
headless CMSのWebhookを利用して、repository_dispatchイベントを発火させる

https://docs.github.com/ja/actions/using-workflows/events-that-trigger-workflows#repository_dispatch
https://www.newt.so/docs/tutorials/trigger-github-actions-with-webhooks

### 特定のディレクトリ配下が変更された時のみワークフローの書き方

pathを指定する
```
paths:
　- 'backend/**
```


### 特定のjobが他のjobの完了を待ってから 実行されるように設定する書き方

workflow runを使いイベントタイプをcompleteにするれい
```
on:
workflow_run:
workflows:
- first-workflow
branches:
- main
types:
- completed
```


https://zenn.dev/dzeyelid/articles/0dc97f76a7f33f2c27ca

### 秘匿性の高い環境変数をymlファイルの中で扱う

GitHubのsecretsを使う
https://docs.github.com/ja/actions/security-guides/encrypted-secrets


## 参考
https://docs.github.com/ja/actions/using-workflows/workflow-syntax-for-github-actions

https://docs.github.com/ja/actions/learn-github-actions/finding-and-customizing-actions

https://zenn.dev/masaaania/articles/c930f2f755a577

https://github.com/actions/checkout

https://docs.github.com/ja/actions/using-containerized-services/creating-postgresql-service-containers

https://qiita.com/ktoyod/items/de97f25af2d4089eece9

https://stackoverflow.com/questions/73117939/unknown-binarytarget-debian-openssl-3-0-x-and-no-custom-binaries-were-provided-e
https://github.com/prisma/prisma/issues/11356