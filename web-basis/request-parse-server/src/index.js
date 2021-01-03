const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function(req, res){
  res.status(200);
  res.send({text:"hello world"});
})

app.post('/', function(req, res){
  if(req.is('application/json')){
    return res.status(201).send(req.body);
  }
  return res.status(400).send({ 
    errorMessage: "Invalid content-type",
    "content-type":req.get('content-type')
  });
})
app.listen(port)