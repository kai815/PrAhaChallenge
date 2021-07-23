## 課題 1

以下のようなテーブルが定義されていたとしましょう。生徒を管理するテーブルで、「在学中」「卒業」「停学中」などのステータスが存在します

TABLE Student {

id: varchar

name: varchar

status: varchar CHECK(status IN ("studying", "graduated", "suspended"))

}

status カラムには「studying」「graduated」「suspended」いずれかの値しか入らないように制限されている
