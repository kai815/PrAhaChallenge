//課題の内容と異なるが、今のtwitterAPIはこれしか使えなさそうなので
import { ITwitterRepository, Result, MeResponse} from "./interfaces/twitter-intareface";
import { Client } from "twitter-api-sdk";



export class TwitterRepository implements ITwitterRepository {
  private client:Client
  public constructor() {
    const token:string = process.env.BEARER_TOKEN ?? ""
    this.client = new Client(token);
  }
  public async postTweet(body:string): Promise<Result>{
    //エラーハンドリングはざつ
    if(!body || body.length <= 0){
      return {success: false, message:"body is required"}
    }
    await this.client.tweets.createTweet({text:body})
    return {success: true, message:""}
  }

  public async deleteTweet(tweetId: string): Promise<Result> {
    if(!tweetId){
      return {success: false, message:"tweetId is required"}
    }
    await this.client.tweets.deleteTweetById(tweetId)
    return {success: true, message:""}
  }
  public async getMe():Promise<MeResponse>{
    const result = await this.client.users.findMyUser()
    return {
      id:result.data?.id ?? '',
      name:result.data?.name ?? '',
      username:result.data?.username ?? '',
    }
  }
}