const express = require('express');
const app = express();
const port = 8080;


app.use(express.static(__dirname + '/public',{
  setHeaders: function (res, path, stat) {
    res.set('Set-Cookie', "cookie=test;")
    res.set('Set-Cookie', "cookie1=cookie1;domain=hoge.com")
    res.set('Set-Cookie', "cookie2=cookie2;domain=hoge2.com")
  }
}))


app.listen(port)
