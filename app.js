//express_demo.js 文件
const express = require('express');
const app = express();
const server = require('http').createServer(app);
server.listen(8081);

// router
app.use('/', require("./router/index.js"))