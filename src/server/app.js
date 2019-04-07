// http服务器
var express = require("express");
// 用于处理文件路径和目录路径 // 内置模块 path
var path = require("path");
// 解析cookie标头并填充req.cookies由 cookie名称键入的对象
var cookieParser = require("cookie-parser");
// 为express/koa/connect等创建 http错误
var createError = require("http-errors");
// http请求记录器中间件
var logger = require("morgan");

/**
 * 业务路由
 */
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

/**
 * 视图引擎设置
 */
app.set("views", path.join(__dirname, "views"));
app.engine('.html', require('ejs').__express);
app.set("view engine", "html");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// 静态资源
app.use(express.static(path.join(__dirname, "public-server")));
app.use(express.static(path.join(__dirname, "public-client")));

/**
 * 配置业务路由
 */
app.use("/", indexRouter);
app.use("/users", usersRouter);

/**
 * 捕获404，并转发到其他页面
 */
app.use(function(req, res, next) {
  next(createError(404));
});

/**
 * 异常处理
 */
app.use(function(err, req, res, next) {
  // 设置局部变量，只提供开发中的错误
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // 渲染报错页面
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
