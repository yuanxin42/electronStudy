// import appServer from './config.js'

let {appServer} = require('./config.js')
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
}
readFild()