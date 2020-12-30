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
