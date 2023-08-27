import http from 'node:http';
import url from 'node:url';
import readline from 'readline';
import { spawnSync } from 'node:child_process';
import { auth, Client } from "twitter-api-sdk";
import dotenv from 'dotenv';

dotenv.config();

const STATE = "my-state";

const authClient = new auth.OAuth2User({
  client_id: process.env.CLIENT_ID as string,
  callback: "http://127.0.0.1:3000/callback",
  scopes: ["tweet.read", "tweet.write", "users.read"],
});

const client = new Client(authClient);

const authUrl = authClient.generateAuthURL({
  state: STATE,
  code_challenge_method: "s256",
});

// open commands
const openCmd = {
  darwin: "open",
  linux: "xgd-open",
  win32: "start",
};

// open browser
const platform = process.platform;
console.log('Open login url:', authUrl);
// @ts-ignore
spawnSync(openCmd[platform], [authUrl]);

// deletetweet
const deleteTweet = async(id:string) => {
  try {
    const deleteTweet = await client.tweets.deleteTweetById(id);

    return deleteTweet;
  } catch (error) {
    console.log('===Tweet error');
    console.log(error);
  };
}

// tweet prompt
const question = async (questionText:string) => {
  const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  return new Promise((resolve) => {
    readlineInterface.question(questionText, (answer) => {
      resolve(answer);
      readlineInterface.close();
    })
  })
}

const prompt = async(promptMessage:string) => {
  console.log(promptMessage)
  const answer = await question('> ');
  // @ts-ignore
  return answer.trim();
}

// callback server
const server = http.createServer();

server.on('request', async (req, res) => {
  // @ts-ignore
  const uri = url.parse(req.url).pathname;

  if(uri !== '/callback') {
    res.writeHead(404, {"Content-Type": "text/plain"});
    res.end("not found");
    return;
  }

  try {
    // @ts-ignore
    const {code, state} = url.parse(req.url, true).query;
    console.log({code})

    if (state !== STATE) {
      throw new Error("State isn't matching");
    }

    const result = await authClient.requestAccessToken(code as string);
    console.log({result})

    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("OK");

    server.close(() => {
      console.log('Close callback server')
    })

    const promptMessage = "What's tweet delete?";
    const tweet = await prompt(promptMessage);
    const postedTweet = await deleteTweet(tweet);
    console.log("Tweet Delete succeeded!");
    console.log({postedTweet})
  } catch (error) {
    console.log('===Callback error');
    console.log(error);
  }
})

server.listen(3000, () => {
  console.log('Started callback sevrer.')
});