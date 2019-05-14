// import appServer from './config.js'

let { appServer } = require('./config.js')
const { clipboard } = require('electron')
const fs = require('fs');
var multipart = require('connect-multiparty');

var multipartMiddleware = multipart();
function readFild(params) {
  // 设置允许跨域
  // appIndex.post('/situation/IPexcel', getIPExcel)
  // appIndex.post('/situation/getCommonExcel', getCommonExcel)
  // appIndex.post('/situation/export2Word', exportWord)
  // appIndex.post('/situation/export2Excel', exportExcel)
  // appIndex.post('/situation/export2Json', exportJson)
  // appIndex.post('/situation/importData/inspection', importData)
  // appIndex.post('/situation/importJson/inspection', importJson)
  // // 单位上报导入 2019.1.7
  // appIndex.post('/situation/importData/report', importData2)

  // 导出压缩包
  // 请求体中的key为text
  appServer.get('/getid:id?', function (req, res) {
    if (req.query.id) {
      res.send('hello word123')
      res.send(req.query)
    } else {
      res.send('阿西吧')
    }

  });
  appServer.post('/uploadImg', multipartMiddleware, function (req, res) {
    // clipboard.writeImage(req.body.file)
    fs.writeFile(req.body.file,imgData,'binary',function(err){  //path为本地路径例如public/logo.png
      if(err){console.log('保存出错！')}else{
        console.log('保存成功!')
      }
    })
    console.log(req.body.file)
    res.send(req.body.file)
  });
}
readFild()