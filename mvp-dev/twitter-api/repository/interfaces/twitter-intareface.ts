//こっちも結局使ってない
export type Result = {
  success:boolean,
  message: string
}

export type MeResponse = {
  id :string,
  name:string,
  username:string
}

export interface ITwitterRepository {
  postTweet(body: string): Promise<Result>;
  deleteTweet(tweetId: string):Promise<Result>;
  getMe(): Promise<MeResponse>;
}