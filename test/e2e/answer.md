# 課題 2（質問）

## E2E のメリデメ

### メリット

1. ブラウザでユーザが操作しているようにテストができる

2. cypress に限るかもしれないが、落ちた時のスクリーンショットがあるので、どこで落ちたのかが判断しやすい

3. 操作してる時の動画もとってくれるので、意図通りの動作かも確認できる

### デメリット

1. 実行に多少時間がかかる

2. おそらく CI 環境だったりも用意するのが実際の運用だと思うが、そういったものの導入コスト

3. スナップショットテストなどに比べるとテストを書くコストは高い

## テスト手法の基準

導入コストの低さという観点（フロント）
スナップショットテスト＞ビジュアルリグレッション＞ E2E

信頼性の高さという観点（フロント）
E2E ＞ビジュアルリグレッション＞スナップショットテスト

設計を綺麗にする
単体＞結合＞ E2E

テストの実行のしやすや(実行時間など)
単体＞結合＞ E2E

# 課題 3（クイズ）

1. cypress を使用する場合、テストフォルダがデフォルトだと `cypress`だが、これを変更するにはどうすればいいか？

2. cypress と selenium の違いについて説明してください

3. cypress ディレクトリの fixtures、integration、plugins、support にはそれぞれどんな意味があるでしょうか？