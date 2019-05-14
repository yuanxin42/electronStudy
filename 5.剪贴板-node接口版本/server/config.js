// import express from 'express'
let express  = require ('express')
// var log = require('electron-log')
// import fs from 'fs'
// import path from 'path'
let  bodyParser = require('body-parser') 

// import c from 'child_process';

let {portIsOccupied} = require('./portIsOccupied')
// import { portIsOccupied } from './portIsOccupied'
// import './constant/importFile/index.js'
const app = express()
app.all('*', function (req, res, next) {
  // var orginList = [
  //   'http://beike.xdf.cn',
  //   'http://localhost:5657',
  //   'http://127.0.0.1:8886',
  //   'http://127.0.0.1'
  // ]
    // 设置允许跨域的域名，*代表允许任意域名跨域
  res.header('Access-Control-Allow-Origin', req.headers.origin)
  // res.header('Access-Control-Allow-Origin', '*') // 访问控制允许来源：所有
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild')
  // res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept') // 访问控制允许报头 X-Requested-With: xhr请求
  res.header('Access-Control-Allow-Metheds', 'PUT, POST, GET, DELETE, OPTIONS') // 访问控制允许方法
  res.header('X-Powered-By', 'nodejs') // 自定义头信息，表示服务端用nodejs
  res.header('Content-Type', 'application/json;charset=utf-8')
  res.header('Access-Control-Max-Age', '600')
  res.header('Access-Control-Allow-Credentials', 'true')
  next()
})
portIsOccupied(5657)
  .then(port => {
    app.listen(port, () => {
      global.sharedObject = { // 设置全局sharedObject用做进程之间通信
        port: port
      }
      console.log(`start http://localhost:${port}`)
      // c.exec(`start http://localhost:${port}`)
    })
  })
app.use(bodyParser.urlencoded({ extended: false }));//解析post请求数据
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))
// export const appServer =  app


module.exports = {
  appServer : app
};

