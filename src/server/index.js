#!/usr/bin/env node

/**
 * 模块依赖
 */

var app = require('./app');
var debug = require('debug')('blog:server');
var http = require('http');

/**
 * 从环境中获取端口并在Express中存储
 */
var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * 创建http服务器
 */

var server = http.createServer(app);

/**
 * 监听端口
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * 将端口规范化为数字、字符串或false
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * HTTP服务器"错误"事件的事件监听器。
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * 事件监听器，用于HTTP服务器“监听”事件。
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}

module.exports = {};
