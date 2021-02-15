# 課題１（質問）

## XMLHttpRequest とは

JavaScript からサーバに通信をできるようするのが ,XMLHttpRequest です。クライアントからサーバにリクエストを送り、そのレスポンスとしてサーバからクライアントにデータを返信できます。XML とありますが、実際は XML 以外のデータフォーマットを送信できます。

通常の http リクエスト(HTML フォームで送信する場合)とは異なるのは、以下の 3 点です。

1. 送受信時に HTML の画面がフラッシュ(リロード)されない

2. GET や POST 以外のメソッドも送信できる

3. フォームの場合には、key-value で 1:1 になっているデータ形式しか送ることができないが、プレーンテキスト、JSON、バイナリデータ、XML など様々なデータを送ることができる

## リクエストがクッキ-が送られていない

`xhr.open('GET', 'http://api.example.com/', true);`

の後に

`xhr.withCredentials = true;`
を付け加えてないことが問題です。
XMLHttpRequest オブジェクトの withCredentials は boolean でサイト間の Access-Control リクエストでクッキーや認証ヘッダーなどの資格情報を使用するかどうかを示すプロパティなので、これを true にすることでクッキーを送信することができます。

## CORS について

セキュリティ上の理由から、ブラウザーは、スクリプトによって開始されるオリジン間の通信(XMLHttpRequest や FetchAPI)を制限しています。
CORS はあるオリジンで動作している Web アプリケーションに、異なるオリジンにあるリソースへのアクセス権を与えるようにブラウザに指示するための仕組みです。

通信をするためには、サーバ側で Access-Control-Allow-Origin ヘッダーに許可するオリジンを設定する必要があります。

https://A ドメインの通信を許可したい場合の例

`Access-Control-Allow-Origin: https://Aドメイン`
