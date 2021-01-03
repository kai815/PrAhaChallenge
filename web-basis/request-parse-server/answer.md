# 課題 1（実装）

web-basis/request-parse-server に実装

postman で実行結果
https://documenter.getpostman.com/view/13158613/TVt2bP4n

## 課題２（質問）

### データ形式の違い

application/x-www-form-urlencoded の場合のデータ形式は、
a=1&b=1 のようなキーバリュー型のクエリパラメータのような形式です。

application/json の場合のデータ形式は、
{"a":1,"b":2}のような JSON 型の形式です。

### どの場合にどちらを使うべきかについて

1.JavaScript で ajax や axios などを用いてクライアントから非同期通信でデータのやりとりを行う際は、
リクエストするデータとレスポンスで受け取るデータのフォーマットを揃えるという観点から、application/json が望ましいです。

2.また、ネストがあるような複雑なデータ(例:

```
{
  id:1,
  userInfo:{
    age:20,
    name:"hideo",
    hoby:["サウナ","カレー","温泉","サッカー"]
  },
}


```

)、

を扱う際も application/json の方が扱いやすく望ましいと考えられます。

3.非同期通信ではなく、通常の HTML の form からデータをポストするかつ、データの構造がそれほど複雑でなく単純なキーバリュー型である場合は、application/x-www-form-urlencoded を用いたほうがやりやすいと考えます。

4.基本的には 上記の 1,2,3 で検討しつつも、使っているプログラミング言語によってデフォルトが変わる部分もある(PHP の$\_POST は Content-type: application/x-www-form-urlencoded または multipart/form-data を受け取る)ので、使っている言語の仕様も検討しつつ、実装のコストからフロント(JS)がバックエンドに合わせるなどのこともチームで検討してもいいかもしれないです。
