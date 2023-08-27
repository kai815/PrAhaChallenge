//ユーザの課題ステータスを一覧表示するスクリプト
import { db, Task, TaskStatus } from "./db";

type TaskStatusMap = {
  [key: string]:string
}
//無理やりやってしまった感あるからモデリングが悪かったかも
//あるユーザーのタスクのステータス一覧
async function getTaskStatusByUserId(userId:string) {
  const ref = db.collection("users_tasks_status").where("user_id","==", userId);
  const snapshot = await ref.get();
  let taskStatusMap:TaskStatusMap = {}
  snapshot.docs.forEach((s: { data: () => TaskStatus; }) => {
    taskStatusMap[s.data().task_id] = s.data().status
  });
  const tasksRef = db.collection("tasks")
  const tasksSnapshot = await tasksRef.get();
  const tasks:Task[] = tasksSnapshot.docs.map((s: { data: () => Task; id: string; }) => {
    const data = s.data()
    return {
      ...data,
      id:s.id
    }
  });
  const result = tasks.map((task)=>{
    return {...task, status:taskStatusMap[task.id]}
  })
  return result
}

async function main() {
  //3つめにidを指定して欲しい
  if (process.argv.length <= 2){
    console.log('ユーザーidを指定して下さい')
    return;
  }
  const userId = process.argv[2]
  console.log(`***** START GetTaskStatusByUser *****`);
  const tasks = await getTaskStatusByUserId(userId);
  console.log({tasks})
  console.log(`***** END  GetTaskStatusByUser *****`);
}

main().then();