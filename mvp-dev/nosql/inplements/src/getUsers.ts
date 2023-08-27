//試しに作ったユーザー一覧を取得するスクリプト
//レビューからは外してもらって良いです
import { db, User } from './db'


/**
 * usersにあるdocumentを取得
 */
async function getUsers() {
  const ref = db.collection("users");
  const snapshot = await ref.get();
  return snapshot.docs.map((s: { data: () => User; }) => s.data());
}

async function main() {
  console.log(`***** START GET_USERS *****`);
  const users:User[] = await getUsers();
  users.forEach((v) => console.log(`user=${JSON.stringify(v)}`))
  console.log(`***** END GET_USERS *****`);
}

main().then();