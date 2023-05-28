import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { TwitterRepository }from "./repository/twitter"

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.post('/tweet', (req: Request, res: Response) => {
  const twitterRepo = new TwitterRepository()
  const result = twitterRepo.postTweet(req.body)
  if(result.success){
    return res.send("success")
  }
  return res.send("fail")
})
app.delete('/tweet/:id', (req: Request, res: Response) => {
  const twitterRepo = new TwitterRepository()
  const result = twitterRepo.deleteTweet(req.params.id)
  if(result.success){
    return res.send("success")
  }
  return res.send("fail")
})

app.get('/me', (req: Request, res: Response) => {
  const twitterRepo = new TwitterRepository()
  const result = twitterRepo.getMe()
  return res.send(result)
})

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});