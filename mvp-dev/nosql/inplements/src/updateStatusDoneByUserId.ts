//ユーザの課題ステータスを完了にするスクリプト
import { db } from "./db";


//無理やりやってしまった感あるからモデリングが悪かったかも
//特定のユーザーのタスクのステータスを完了に更新する
async function updateStatusDoneByUserId(userId:string) {
  try {
    const ref = db.collection("users_tasks_status")
    const whereRef = ref.where("user_id","==", userId);
    const snapshot = await whereRef.get();
    const userTaskStatusIds:string[] = snapshot.docs.map((s: { id:string }) => s.id);
    userTaskStatusIds.forEach((id)=>{
      ref.doc(id).update({ status:'DONE'})
    })
    return true
  }catch(err){
    console.log(err)
    return false
  }

}

async function main() {
  //3つめにidを指定して欲しい
  if (process.argv.length <= 2){
    console.log('ユーザーidを指定して下さい')
    return;
  }
  const userId = process.argv[2]
  console.log(`***** START UpdateStatusDoneByUserId *****`);
  const result = await updateStatusDoneByUserId(userId);
  console.log({result})
  console.log(`***** END  UpdateStatusDoneByUserId *****`);
}

main().then();