const express = require('express');
const app = express();
const port = 3000;

//こっちは読み込まれる側の想定のサーバngrokにホストする
app.use(express.static(__dirname + '/public',{
  setHeaders: function (res, path, stat) {
    //このcookieがサードパーティになる
    res.cookie("hoge2", "hoge2",{
      httpOnly:true,
      sameSite: 'none',
      secure:true
    })
    
  }
}))


app.listen(port)
