## 課題 1

Salesforce のようなサービスを想像してみてください。以下のようなテーブルで新規顧客の営業進捗を管理しているとします

TABLE NewCustomer {

id: varchar

telephone: boolean -- 電話をかけたら TRUE になる

metOnce: boolean -- アポで面談したら TRUE になる

metAt: date -- 面談をした日付が入る

closed: boolean -- 成約した

closedAt: date -- 成約した日付が入る

}

### 上記の設計で生じる問題

1. いつ面談したか、いつ電話を掛けたか、行動の履歴が管理できない

2. 行動の結果が管理できない

3. ステータスが成約かどうかしか管理できない（今どんな状況かがわからない）
