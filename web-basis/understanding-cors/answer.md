# 課題 1（質問）

### 1.CORS の仕組み

セキュリティ上の理由から、ブラウザーは、スクリプトによって開始されるオリジン間 HTTP リクエストを制限しています。CORS はあるオリジンで動作している Web アプリケーションに、異なるオリジンにあるリソースへのアクセス権を与えるようにブラウザに指示するための仕組みです。

A ドメインから B ドメインにアクセスをする場合に、B ドメインのサーバは"access-control-allow-origin"ヘッダーを用いて A ドメインからのアクセスを許可する必要があります。

例

`Access-Control-Allow-Origin: https://Aドメイン`

オリジン間で通信する際は"simple request"（シンプルなリクエスの条件はあとの問題で解答します）かどうかがチェックされて、"simple request"ではない場合に、"preflight request"という実際に通信を行っても安全かどうか通信の権限が与えられているのかのチェックを行うリクエストが行われ、その上で通信が行われます。

### 2.Access-Control-Allow-Origin: \*の問題

例えば WebAPI を Access-Control-Allow-Origin:\*で設定していた場合、その WebAPI のデータを別のオリジンからのリクエストで取得できてしまう可能性があること。つまり、サービスの運営者の資産が他の人に横取りされてしまう可能性があることです。

## シンプルなリクエスト

### 3.「シンプルなリクエスト」の条件

以下の 3 つが条件です。

1.許可されているメソッドが'GET','POST','HEAD'のうちの一つであること

2.ヘッダーが'Accept','Accept-Language','Content-Language','Content-Type'以外を含まないこと

3.Content-Type をヘッダーに含む場合、'application/x-www-form-urlencoded','multipart/form-data','text/plain'

### 4.「シンプルなリクエスト」で Access-Control-Allow-Origin に送信元のオリジンが含まれない場合のブラウザの動作

`Access to fetch at '送信先オリジン' from origin '送信元オリジン' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.`

というエラー文が出て、ネットワークエラー（`net::ERR_FAILED`）となります。

### 5.XMLHttpRequest を使ってクロスオリジンリクエストを発行する際にクッキーを含めるには

Access-Control-Allow-Credentials ヘッダーを true にする必要があります。

# 課題 2（クイズ）

### 1

https://example.com から https://〇〇.example.com へのアクセスはクロスオリジンリクエストになるでしょうか？

### 2

http://〇〇.example.com
サーバでは Access-Control-Allow-Origin ヘッダーに
https://example.com
を設定していますが、
https://example.com
から
http://〇〇.example.com
へのアクセスがうまくいきせん。その際の原因と対策を教えてください。

### 3

Access-Control-Allow-Origin で複数のオリジンを許可することは可能でしょうか？また、可能な場合の方法を最低 1 つ挙げてください。（何でどう設定するかはお任せします。）
