# 課題１（質問）

## スナップショットテストとはなんでしょうか？説明してください

ある時点での出力をスナップショットとして保存しておき、それ以降のテスト時にアウトプットとスナップショットを比較して一致してるかを確認するテストです。


## スナップショットテストを用いることで、どのような不具合が防止できるでしょうか？3つほど例を挙げてみてください

### 1

意図しない画面のレイアウトになっている不具合

### 2

変更を加えてないコンポーネントのレイアウトが意図せずに崩れている不具合

### 3

同じ状態でも意図せずに表示（文字とか）が変わってしまう不具合

## スナップショットテストでは防止できない不具合もあります。3つほど例を挙げてください

### 1

元々のスナップショットに含まれていない（新しい機能自体の）不具合

### 2

ロジックの不具合(見た目に影響がないけどロジックが意図してない動作をしてる)

### 3

ランダムな動きのあるコンポーネント？（当選したときの薬玉的なやつとか）

# 課題２（実装）

test/storybook/my-app
に実装

# 課題３（クイズ）


## 1

デフォルトだとスナップショットは1枚のファイルに出力されますが、ストーリごとに分ける方法はあるでしょうか？

## 2

storyshotでなくjestでもスナップショットテストを行うことができますが、書く手間自体はjestの方が多そうです。jestを使うメリットはあるでしょうか？

## 3

スナップショットファイルもレビューされるべきという考え方がありますが、jestで作成されたスナップショットファイルを人間が読める形式にするライブラリをなんといるでしょうか？