const express = require('express');
const htmlServer = express();
const htmlServerPort = 8080;

//HTMLファイルを返すだけのサーバ
htmlServer.use(express.static(__dirname + '/public',{
}))
htmlServer.listen(htmlServerPort)

//ここからcorsのサーバ
const corsServer = express();
const corsServerPort = 3000;

const allowCrossDomain = function(req, res, next) {
  //許すドメインやメソッドの定義
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080')
  res.header('Access-Control-Allow-Methods', 'POST,OPTIONS')

  // プリフライト
  if ('OPTIONS' === req.method) {
    console.log("preflightが行われる");
    res.send(200)
  } else {
    next()
  }
}
corsServer.use(express.json());
corsServer.use(express.urlencoded({ extended: true }));
corsServer.use(allowCrossDomain);

corsServer.post('/', function(req, res){
  res.status(200);
  res.send({text:"post success"});
})

corsServer.listen(corsServerPort)
