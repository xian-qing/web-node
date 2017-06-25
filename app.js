//express_demo.js 文件
const express = require('express');
const mysql  = require('mysql');  //调用MySQL模块
const conf = require('./config');
const app = express();
const server = require('http').createServer(app);
server.listen(5207);
var connection = mysql.createConnection(conf.sql);
connection.connect(function(err){
    if(err){
        console.log('[query] - :'+err);
        return;
    }

    console.log('[connection connect]  succeed!');

});

// router
app.use('/', require("./router/index.js"))
console.log(1)