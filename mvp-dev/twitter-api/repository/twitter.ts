//課題の内容と異なるが、今のtwitterAPIはこれしか使えなさそうなので
export const postTweet = (body:string) =>{
  //エラーハンドリングはざつ
  if(!body){
    return {success: false, message:"body is required"}
  }
  return {success: true, message:""}
}

export const deleteTweet = (tweetId:string) => {
  if(!tweetId){
    return {success: false, message:"tweetId is required"}
  }
  return {success: true, message:""}
}

type MeResponse = {
  id :string,
  name:string,
  username:string
}

export const getMe =():MeResponse =>{
  return {
    id:"test",
    name:"testname",
    username:"testusername",
  }
}