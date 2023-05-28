import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { TwitterRepository }from "./repository/twitter"

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.post('/tweet', async (req: Request, res: Response) => {
  const twitterRepo = new TwitterRepository()
  const result = await twitterRepo.postTweet(req?.body?.content ?? '')
  if(result.success){
    return res.send("success")
  }
  return res.send("fail")
})
app.delete('/tweet/:id', async(req: Request, res: Response) => {
  const twitterRepo = new TwitterRepository()
  const result = await twitterRepo.deleteTweet(req.params.id)
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