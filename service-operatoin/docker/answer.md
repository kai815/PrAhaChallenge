## 課題1（質問）

### Dockerとは何か？初めてDockerという言葉を聞いた新人エンジニアにも分かるように説明
アプリケーションを動かすために必要な環境を1つのイメージにまとめて、
そのイメージを使って様々な環境でアプリケーション実行環境を構築・運用するためのオープンソースのプラットフォームです。
例えば、Nodejsのアプリを動かすには、Nodejsをインストールするなどの環境構築が必要になりますが、
この環境構築をした状態を1つのイメージにまとめておく感じです。
エンジニアそれぞれで、Nodejsをインストールすると、バージョンが違ってある人の環境では動く・動かないなどが生じるが、
こういったことが起きないように使うツールです。
### 以下の用語の解説

#### イメージ
アプリケーションの実行に必要なプログラム、ライブラリ、ミドルウェア、OSやネットワークの設定を定義したファイル群。
Dockerfileと呼ばれるテキストファイルで定義されて、それを元にイメージが作成される。
#### コンテナ
ホストOS上に論理的に区画を作り、アプリケーションを動作させるのに必要なライブラリやアプリケーションなどを1つにまとめ、
まるで個別のサーバのように使うことができるようにしたもの。
#### ベースイメージ
Dockerイメージを構築する際の元となるイメージのこと。
CentOSやUbuntuなどLinuxのディストリビューションが使われることが多い。
#### Dockerレジストリ
ストレージとコンテント配送システム。
公式のレジストリはDockerHubがある。DockerのGitHubみたいな
##### 参考
https://docs.docker.jp/v19.03/registry/introduction.html
#### ビルドコンテキスト
docker buildコマンドを実行したときの、
カレントなワーキングディレクトリのことを ビルドコンテキスト（build context）と呼ぶ

##### 参考
https://matsuand.github.io/docs.docker.jp.onthefly/develop/develop-images/dockerfile_best-practices/
#### マルチステージビルド
アプリケーションをビルドするためのイメージとプロダクションで動作させるイメージを同時に作成できる機能。

##### 参考
https://matsuand.github.io/docs.docker.jp.onthefly/develop/develop-images/multistage-build/

### Dockerfileを作成して環境構築をコード化するメリットは？

1. 手順書をわざわざ作成する必要がない
2. 変更履歴をGitで管理できる
3. エンジニアごとでlocal環境が異なることが原因のエラーが減る

### docker-composeはどのような場面で役立つか？
複数のコンテナを管理する時に役立つ。Webアプリケーションの依存関係（データベース、アプリケーションなど）も設定でき、
docker-composeコマンドで複数のコンテナをまとめて起動したり停止できる。

### .dockerignoreにはどのようなファイルやディレクトリを含めるか？

1. イメージのビルド時に追加されるディレクトリ(node_modulesなど)
2. 機密情報が入っている恐れのあるもの(.git、.npmrc、.aws、.envなど)
3. 本番で使わない開発用のフォルダ(.vscodeなど)

#### 参考
https://docs.docker.jp/engine/reference/builder.html?#dockerignore
https://qiita.com/munisystem/items/b0f08b28e8cc26132212
https://hi120ki.github.io/blog/posts/20210502/
https://nodejsbestpractices.com/sections/docker/docker-ignore.japanese/

### パッケージについて
#### インストール時にコマンドを分割すると問題が生じるのはなぜか？
例：
大丈夫
```
RUN apt-get update && apt-get install [something]
```
ダメ
```
RUN apt-get update
RUN apt-get install [something]
```
##### 回答

1命令ごとに1つのレイヤーが作成されます。
そのため、apt-get installコマンドを別のRUNコマンドで実行すると、新しいレイヤーが作成され、
apt-get updateコマンドで作成されたパッケージリストが含まれなくなる可能性があります。
### ENVについて
```
ENV NAME='hoge'
```
```
RUN export NAME='hoge'
```

どちらでも設定は可能だが、違いはな何か？
#### 回答
ENVは、環境変数を定義するために使用される。
ENVで定義された環境変数は、後続のDockerfileコマンドで使用することができる。
RUNはコマンドを実行するためのもので、
環境変数はRUNコマンドの実行中にのみ存在し、その後に実行されるコマンドでは利用できない。

##### 参考
https://stackoverflow.com/questions/33379393/docker-env-vs-run-export

## 課題2（実装）

特大課題をdockerで起動できるようにする

[こちらのPR](https://github.com/kai815/praha-challenge-extra-large-task/pull/26)

### 参考
https://qiita.com/yuuri23/items/6bfe9bb11727a80d12fd
https://qiita.com/yucatio/items/f5d23043228cc35fc763
https://zenn.dev/satton/articles/162735f93d5e6f
https://zenn.dev/optimisuke/articles/17ee6aba316e47
https://zenn.dev/mo_ri_regen/articles/how-to-dockerignore
https://github.com/yasu-s/nestjs-docker-sample