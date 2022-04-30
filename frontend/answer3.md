# 課題 1

## フック を使うメリット

シンプルに関数として扱うことができるので、ロジックの分割と再利用がしやすくなる。
また、テストの書きやすくなる。

## 実務でも使えそうな外部フック

useMedia
https://github.com/streamich/react-use/blob/master/docs/useMedia.md

レスポンシブ対応に使いやすそう。

# 課題 2

## 実装課題

https://codepen.io/kai815/pen/KKQPZEB?editors=0010

codepen からダウンロードしてきました
/hooks-refactor/script.babel

# 課題 3

## 「Container」と「Presentational」に分けるメリット

Presentational を受け取った値を表示するのみの UI を担当するコンポーネント、
Container をビジネスロジックを持ち、Presentational に値を渡すコンポーネント
と分けることで、可読性・保守性が上がる。

さらに、Presentational を Story に書き、見た目のテスト、
Container のロジックテストと分けることができ、テストもしやすい。

## useState のクイズ

useState で宣言をするときに、以下のようにある外側の括弧はどういう意味でしょうか？

```
const [count, setCount] = useState(0);
```
