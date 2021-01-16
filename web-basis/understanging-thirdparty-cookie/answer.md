# 課題 1（質問）

## サードパーティクッキーとファーストパーティクッキーの違い

現在アクセスしているページのドメインと同じドメインが発行元であるクッキーをファーストパーティクッキーと呼びます。

反対に、アクセスしたページのドメインと異なるドメインが発行元であるクッキーをサードパーティクッキーと呼びます。
サードパーティクッキーは、広告などのサイトをまたいだ行動追跡を可能にします。

## 広告配信ネットワーク（例えば Google AdSense など）がどのようにユーザの訪問履歴を把握しているのか

バナー広告の画像や JavaScript を用いてサードパーティクッキーを埋め込み、サイトを跨ってユーザーの訪問履歴を追跡しています。

## サードパーティークッキーはどのように生成されるのか

1.img タグで参照された画像を返す時に、Set-cookie ヘッダーを含める方法。

2.iframe タグからフォームを作成して送信する方法

3.ポップアップウィンドウを表示する方法

4.JavaScript で postMessage()を使う方法

## サードパーティクッキーの扱いはブラウザによってどのような差があるか

Safari はサードパーティクッキーの使用を禁止しています。ITP という技術を用いてブロックしています。

Chrome は 現在デフォルトの設定ではサードパーティクッキーをブロックしていないが、設定によってサードパーティクッキーをブロックすることもできる。2022 年までに段階的にサードパーティクッキーの利用を停止する予定。

FireFox は設定でサードパーティクッキーをブロックすることもできます。(一部情報によるとデフォルトでブロックとありましたが、私の手元の Firefox ではトラッキングを無効にする設定がデフォルトだと無効になっていました。)

## ドメインは同一で、ポートが異なるクッキーはファーストパーティクッキーでしょうか？サードパーティクッキーでしょうか？

ファーストパーティクッキーです。ドメインが同じでポートが異なる場合でもブラウザではクッキーは共有されますし、サードパーティクッキーかどうかは発行元のドメインが重要になりますので。