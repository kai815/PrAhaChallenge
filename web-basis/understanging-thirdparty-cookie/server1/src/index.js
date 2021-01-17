const express = require('express');
const app = express();
const port = 8080;


app.use(express.static(__dirname + '/public',{
  setHeaders: function (res, path, stat) {
    //ただのテスト用
    res.cookie("test", "cookie",{
      httpOnly:true
    })
    //アクセスしたドメインのcookie
    res.cookie("hoge", "hoge",{
      httpOnly:true
    })
  }
}))


app.listen(port)
