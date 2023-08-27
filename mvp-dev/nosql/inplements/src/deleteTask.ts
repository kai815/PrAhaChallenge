//課題を更新する
import { db } from "./db";



//タスクを削除する
//中間テーブルも削除する
async function deleteTask(id:string) {
  try {
    await db.collection("tasks").doc(id).delete();
    //中間テーブルの削除
    const ref = db.collection("users_tasks_status")
    const whereRef = ref.where("task_id","==", id);
    const snapshot = await whereRef.get();
    const userTaskStatusIds:string[] = snapshot.docs.map((s: { id:string }) => s.id);
    userTaskStatusIds.forEach((id)=>{
      ref.doc(id).delete()
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
    console.log('課題のidを指定して下さい')
    return;
  }
  const taskId = process.argv[2]
  console.log(`***** START DeleteTask *****`);
  const result = await deleteTask(taskId);
  console.log({result})
  console.log(`***** END  DeleteTask *****`);
}

main().then();