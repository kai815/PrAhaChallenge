const admin = require("firebase-admin");

// 配置したサービスアカウントの秘密鍵を取得
const serviceAccount = require("../firebase-account.json");

// firebase-adminを初期化
admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });

// firestoreのインスタンスを取得
export const db = admin.firestore();

export type User = {
  id:string,
  name:string
}

export type Task = {
  id:string,
  title:string
}

export type TaskStatus = {
  id:string,
  user_id:string
  task_id:string
  status:Status
}
type Status = 'DONE' | 'UNDONE'