## アトミックデザインとは？

小さい UI コンポーネントを組み合わせてより大きなコンポーネントを作っていくためのデザイン・フレームワークです。
どんな単位で UI パーツを分割すればいいかを示してくれるフレームワークです。

## アトミックデザインの以下の用語の説明

### Page

Template にコンテンツを流し込んだもの。
ユーザが実際にプロダクト上で触れるものです。

### Template

Organism や Molecule、Atom を使ってページのレイアウトを提供します。
具体的なコンテンツは含まず、あくまでレイアウトに責任を持ちます。

### Organism

Molecule や Atom で構成されるコンポーネント群です。
Organism 層のコンポーネント自体も Organism 層のコンポーネントを構成する要素になりえます。
Organism のコンポーネントで完結するコンテンツを提供します。

例：Twitter の 1 つの投稿を表示するもの

### Molecule

2 つ以上の Atom が結合したものです。
Atom との違いは、何のためにボタンを押すのか、何のために入力をするのかという、ユーザーの具体的な行動が入ります。

例：「ラベル」「テキスト入力欄」「ボタン」といった Atom を組み合わせて作った「検索フォーム」

## Atom

UI コンポーネントの最小単位です。
例：「ラベル」「テキスト入力欄」「ボタン」

## React の class コンポーネント function コンポーネントの違い

### class コンポーネント

1. React のもつ Component クラスを継承する必要がある
2. render メソッド内で JSX を返すことで描画される
3. state のは constructor でセットする。
4. class なので、this でアクセスする。
5. props は constructor で super に渡す必要がある。
6. props も this を用いてアクセスする。
7. ライフサイクルメソッド componentDidMount は、最初のレンダリングが完了した直後に呼び出されます。
8. ライフサイクルメソッド componentWillUnmount は、アンマウントされて破棄される直前に呼び出されます。
   ※他にも色々ライフサイクルメソッドはあるけど省略。

### function コンポーネント

1. 関数コーポネントは JSX を返す JS 関数
2. state は useState という hooks の関数を用いる
3. props は関数の引数として受け取る
4. ライフサイクルメソッドに変わるものとして、useEffect がある。useEffect は第二引数が変更されると呼び出されます。空の配列を指定した場合は、マウント時に 1 度呼び出されます。マウント解除時に実行したい関数の場合は、useEffect 内で関数を return する。

総じて、関数コンポーネントの方がシンプルで使いやすい？

書いたコード
https://codesandbox.io/s/frosty-lovelace-rmfcgh

## 参考記事

https://www.codegrid.net/articles/2017-atomic-design-1

https://www.twilio.com/blog/react-choose-functional-components-jp

あとは Atomic Design の本
