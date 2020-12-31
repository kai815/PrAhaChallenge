# 問題１

```
curl -H 'X-Test:hello' https://httpbin.org/headers
```

-H でヘッダー情報の付与

# 問題２

```
curl -X POST -d '{"name":"hoge"}' -H 'Content-Type:application/json' https://httpbin.org/post
```

-X メソッドの指定

-d データ指定

# 問題 3

```
curl -X POST -d '{"userA":{"name":"hoge", "age":29}}' -H 'Content-Type:application/json' https://httpbin.org/post
```

# 問題 4

1

```
curl -X POST -d '{"name":"hoge"}' -H 'Content-Type:application/x-www-form-urlencoded' https://httpbin.org/post
```

2
省略版

```
curl -X POST -d 'name=hoge' https://httpbin.org/post
```

Content-Type を指定しなくても application/x-www-form-urlencoded になる

### 上記の同じ課題を postman でやった結果

https://documenter.getpostman.com/view/13158613/TVt184bW

# クイズ

## curl

### 1

問題２の curl コマンドを修正して、実行にかかった全ての時間を表示させる curl コマンドを作成してください。

### 2

https://httpbin.org/image/jpegを使用して、画像ファイルをダウンロードして保存するコマンドを作成してください。(保存するファイル名は「test.jpg」)

### 3

https://httpbin.org/cookiesを使用して、name=taro,age=20のcookieをcurlコマンドをセットしてください。レスポンスは以下になるはずです。

```
{
  "cookies": {
    "age": "20",
    "name": "taro"
  }
}
```

## postman

### 1

postman にある「collections」の意味は何か？

### 2

postman で API 叩き、それを保存してドキュメントとして公開して、URL を貼り付けてください。

例：https://documenter.getpostman.com/view/13158613/TVt184bW

### 3

問題 1（X-Test ヘッダーに hello をセットするやつ）を postaman 実行する際に、実行結果が正しいかどうかを判定するテストコードを postman の tests に記載し、テストが通ったら、回答のテストコードをこちらに貼り付けてください。
