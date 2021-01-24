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

# 課題 4（成果物に関する質問）

### curl

実行した curl Content-Type: application/json なので simple ではないはず。（他のいろいろなパターンも試しましたが、割愛）
`curl --location --request POST 'https://323805abc601.ngrok.io' \ --header 'Origin: https://960afc52ca8a.ngrok.io' \ --header 'Content-Type: application/json' --verbose`

返ってきたログ
`
curl --location --request POST 'https://323805abc601.ngrok.io' \
--header 'Origin: https://960afc52ca8a.ngrok.io' \
--header 'Content-Type: application/json' --verbose

- Trying 3.13.191.225...
- TCP_NODELAY set
- Connected to 323805abc601.ngrok.io (3.13.191.225) port 443 (#0)
- ALPN, offering h2
- ALPN, offering http/1.1
- successfully set certificate verify locations:
- CAfile: /etc/ssl/cert.pem
  CApath: none
- TLSv1.2 (OUT), TLS handshake, Client hello (1):
- TLSv1.2 (IN), TLS handshake, Server hello (2):
- TLSv1.2 (IN), TLS handshake, Certificate (11):
- TLSv1.2 (IN), TLS handshake, Server key exchange (12):
- TLSv1.2 (IN), TLS handshake, Server finished (14):
- TLSv1.2 (OUT), TLS handshake, Client key exchange (16):
- TLSv1.2 (OUT), TLS change cipher, Change cipher spec (1):
- TLSv1.2 (OUT), TLS handshake, Finished (20):
- TLSv1.2 (IN), TLS change cipher, Change cipher spec (1):
- TLSv1.2 (IN), TLS handshake, Finished (20):
- SSL connection using TLSv1.2 / ECDHE-ECDSA-AES256-GCM-SHA384
- ALPN, server accepted to use h2
- Server certificate:
- subject: CN=\*.ngrok.io
- start date: Jan 7 16:05:51 2021 GMT
- expire date: Apr 7 16:05:51 2021 GMT
- subjectAltName: host "323805abc601.ngrok.io" matched cert's "\*.ngrok.io"
- issuer: C=US; O=Let's Encrypt; CN=R3
- SSL certificate verify ok.
- Using HTTP2, server supports multi-use
- Connection state changed (HTTP/2 confirmed)
- Copying HTTP/2 data in stream buffer to connection buffer after upgrade: len=0
- Using Stream ID: 1 (easy handle 0x7fcf3b008a00)
  > POST / HTTP/2
  > Host: 323805abc601.ngrok.io
  > User-Agent: curl/7.64.1
  > Accept: _/_
  > Origin: https://960afc52ca8a.ngrok.io
  > Content-Type: application/json
- Connection state changed (MAX_CONCURRENT_STREAMS == 250)!
  < HTTP/2 200
  < access-control-allow-methods: POST,OPTIONS
  < access-control-allow-origin: https://960afc52ca8a.ngrok.io
  < content-type: application/json; charset=utf-8
  < date: Sun, 24 Jan 2021 03:15:39 GMT
  < etag: W/"17-sR81gc85CIor8DUsT/tYP7cXlG0"
  < x-powered-by: Express
  < content-length: 23
  <
- Connection #0 to host 323805abc601.ngrok.io left intact
  {"text":"post success"}\* Closing connection 0
  `

### cors は適用されるか

上記のログの preflight request が送られてないのと、origin ヘッダーを許可していないものにして試した際にも cors 制約は起きなかったことから、適用されないと考えられます。

### 理由

CORS 制約はあくまでブラウザ側のルールで、XMLHttpRequest や FetchAPI などによるアクセスの時に適用されるためです。
