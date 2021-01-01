const express = require('express');
const app = express();
const port = 8080;

app.use(express.json())

app.get('/', function(req, res){
  res.status(200);
  res.send({"text":"hello world"});
})

app.post('/', function(req, res){
  if(req.headers["content-type"]==="application/json"){
    return res.status(201).send(req.body);
  }
  return res.status(400).send({ 
    errorMessage: "Invalid content-type",
    "content-type":req.headers["content-type"]
  });
})
app.listen(port)