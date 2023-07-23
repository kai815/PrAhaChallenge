//課題を更新する
import { db } from "./db";



//タスクを更新する
//更新に関しては、正規化しておいてよかった感ある
async function updateTask(id:string,title:string) {
  try {
    await db.collection("tasks").doc(id).update({ title })
    return true
  }catch(err){
    console.log(err)
    return false
  }

}

async function main() {
  //3つめにidを,4つめにタイトルを指定して欲しい
  if (process.argv.length <= 3){
    console.log('課題のidとタイトルを指定して下さい')
    return;
  }
  const taskId = process.argv[2]
  const title = process.argv[3]
  console.log(`***** START UpdateTask *****`);
  const result = await updateTask(taskId,title);
  console.log({result})
  console.log(`***** END  UpdateTask *****`);
}

main().then();