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
  postTweet(body: string): Result;
  deleteTweet(tweetId: string): Result;
  getMe(): MeResponse;
}