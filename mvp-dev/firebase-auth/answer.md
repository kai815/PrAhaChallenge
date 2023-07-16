# 課題1

## 認証のフロントのアプリ

https://github.com/kai815/praha-challenge-extra-large-task/pull/27

## 認証の BE

https://github.com/kai815/praha-challenge-extra-large-task/pull/28

## 参考

https://zenn.dev/oreilly_ota/articles/31d66fab5c184e

https://zenn.dev/jun0723/articles/46441864f6dbbd

https://qiita.com/kurab/items/84573b3092c8db4ba750

https://zenn.dev/syo_yamamoto/articles/445ce152f05b02

https://hi1280.hatenablog.com/entry/2023/03/18/145628

# 課題2 

## セッションクッキーを認証に使うと良さそうな状況は？
ECのような(カートに追加する、お気に入りに登録するなどの)ログイン前に動作の状態を保持して、認証後にも引き継ぎたい場合。


### 参考
https://zenn.dev/oreilly_ota/articles/31d66fab5c184e

https://zenn.dev/tanaka_takeru/articles/3fe82159a045f7

## アクセストークンを盗まれて不正ログインされてしまったときの対処は？

盗まれてしまった恐れのあるアクセストークンのブラックリストをサーバーに持たせておき、それをチェックする。