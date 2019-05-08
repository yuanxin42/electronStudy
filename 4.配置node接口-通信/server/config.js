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
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*') // 访问控制允许来源：所有
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept') // 访问控制允许报头 X-Requested-With: xhr请求
  res.header('Access-Control-Allow-Metheds', 'PUT, POST, GET, DELETE, OPTIONS') // 访问控制允许方法
  res.header('X-Powered-By', 'nodejs') // 自定义头信息，表示服务端用nodejs
  res.header('Content-Type', 'application/json;charset=utf-8')
  res.header('Access-Control-Max-Age', '600')
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
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))
// export const appServer =  app


module.exports = {
  appServer : app
};

