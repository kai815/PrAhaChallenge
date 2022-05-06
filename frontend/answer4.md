# 課題 1

## useEffect の中で何らかの関数を返す(cleanup)ことが必要になることがある理由

データの購読や、タイマーなどコンポーネントが画面から消えた際には、
クリーンアップしないと不要な処理が残ってしまい、メモリーリークなどの問題を引き起こすため。

## useEffect の第 2 引数が以下の場合、第一引数の関数がいつ実行されるか？

### 何も指定しなかった場合

レンダリングごとに毎回第 1 引数の関数が実行される

### 空の配列（[]）を指定した場合

初回のレンダリング時にのみ第 1 引数の関数が実行される

# 課題 2

https://codesandbox.io/s/use-effect-demo-forked-uxkm9t?file=/src/some-component.js

codesandbox からダウンロードしてきたファイル
frontend/use-effect/some-component.js

# 課題 3

https://codesandbox.io/s/use-effect-demo-forked-uxkm9t?file=/src/fetch-component.js

codesandbox からダウンロードしてきたファイル
frontend/use-effect/fetch-component.js
