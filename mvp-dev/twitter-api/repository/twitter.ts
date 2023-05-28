//課題の内容と異なるが、今のtwitterAPIはこれしか使えなさそうなので
import { ITwitterRepository, Result, MeResponse} from "./interfaces/twitter-intareface";

export class TwitterRepository implements ITwitterRepository {
  public constructor() {}
  public postTweet(body:string): Result{
    //エラーハンドリングはざつ
    if(!body){
      return {success: false, message:"body is required"}
    }
    return {success: true, message:""}
  }

  public deleteTweet(tweetId: string): Result {
    if(!tweetId){
      return {success: false, message:"tweetId is required"}
    }
    return {success: true, message:""}
  }
  public getMe():MeResponse{
    return {
      id:"test",
      name:"testname",
      username:"testusername",
    }
  }
}