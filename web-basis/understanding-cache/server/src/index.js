const express = require('express');
const noCacheHtmlServer = express();
const noCachehtmlServerPort = 8080;
const setNoCacheHeader = function(req, res, next) {
  //キャッシュしない
  res.header('Cache-control', 'no-store')
  next()
}

//キャッシュしないサーバ
noCacheHtmlServer.use(setNoCacheHeader)
noCacheHtmlServer.use(express.static(__dirname + '/public/',{
}))
noCacheHtmlServer.listen(noCachehtmlServerPort)


const cacheHtmlServer = express();
const cacheHtmlServerPort = 8081;
const setCacheHeader = function(req, res, next) {
  //キャッシュさせる
  res.header('Cache-control', 'max-age=3000000');
  // res.removeHeader('ETag');
  // res.header('Expires', new Date(Date.now() + 2592000000).toLocaleString())

  next()
}
cacheHtmlServer.use(setCacheHeader)
cacheHtmlServer.use(express.static(__dirname + '/public/',{
}))
cacheHtmlServer.listen(cacheHtmlServerPort)
