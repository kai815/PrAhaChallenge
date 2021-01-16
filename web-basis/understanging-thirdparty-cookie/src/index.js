const express = require('express');
const app = express();
const port = 8080;


app.use(express.static(__dirname + '/public',{
  setHeaders: function (res, path, stat) {
    res.cookie("test", "cookie",{
      httpOnly:true
    })
    res.cookie("hoge", "hoge",{
      domain:"hoge.com",
      httpOnly:true
    })
    res.cookie("hoge2", "hoge2",{
      domain:"hoge2.com",
      httpOnly:true
    })
  }
}))


app.listen(port)
