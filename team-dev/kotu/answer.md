# 課題1（質問）

## PR（プルリクエスト）は小さい方が良しとされる理由
関心ごとが明確になり、レビューワーの負担も減るから。
逆に大きいPRというのは複数の機能を混ぜていたり、ついでの実装が混じったりしてることが多く影響範囲も多いので、
レビューワー側の負担も大きくなってしまう。

### 参考
https://khigashigashi.hatenablog.com/entry/2018/03/09/020359
https://blog.masuyoshi.com/git%E3%83%97%E3%83%AB%E3%83%AA%E3%82%AF%E3%81%AE%E7%B2%92%E5%BA%A6%E3%81%AF%E7%B4%B0%E3%81%8B%E3%81%8F%E5%87%BA%E3%81%9D%E3%81%86%EF%BC%81/

## コードのコメントに書くべきこと、 書くべきではないこと

### 書くべきこと
1. 難しい前提知識
2. 何故~しないか (普通は~するけど、理由があってできなかった)
3. 2と似ているが、決定の背景となったこと

総じて、コードからだけではわからないもの

### 書くべきではないこと
1. コードの再翻訳となるもの
2. コードを誰が書いたか、いつ書いたか


### 参考
https://google.github.io/eng-practices/review/reviewer/looking-for.html
https://shuuji3.xyz/eng-practices/review/
https://shuuji3.xyz/eng-practices/review/reviewer/looking-for.html
https://qiita.com/ndxbn/items/8aa0c2a3c7ef1f044ffb
## コミットコメントに書くべきこと
何故コードを変更したのか
コードの変更目的はプリフィックスがチームごとに決まっているなら、それを使うべき

### 参考
https://gist.github.com/stephenparish/9941e89d80e2bc58a153
https://www.praha-inc.com/lab/posts/commit-message
https://qiita.com/itosho/items/9565c6ad2ffc24c09364
https://qiita.com/konatsu_p/items/dfe199ebe3a7d2010b3e

## 課題2 
PRのtemplate

### 参考
https://dev.classmethod.jp/articles/pull-request-template/