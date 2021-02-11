---
title: 序言
order: 1
toc: menu
nav:
  title: 后端文档
  order: 1
---

## 写在前面
本人2018年6月份开始第一份PHP的专职工作，当时是30岁。也不能说是零基础吧，至少之前接触过一些PHP原生代码，可以靠着搜索引擎自己写一个简单的留言板程序，还有一些前端的HTML和JS知识。到现在两年多的时间，靠着这段时间的知识积累，以及带着对规范开发的初心，写出了这样一个略显生涩的项目。

写这个项目的出发点是在工作过程中碰到过很多几千行的控制器，大量的业务逻辑堆积在控制器中，对于后续的迭代以及改进极度不友好。同时在TP6.0之后，核心架构层面做了很多有利于开发者的调整，让开发者可以以更低的侵入性去重写或改写系统的基础组件。

最后，也希望这个项目能在开发效率、团队协作上帮助到您，同时也欢迎提供意见和建议。

## 主要功能

<Alert type="error">
请注意，这并不是一个管理后台之类的产品，这是一种业务逻辑规范，通过牺牲很小的一部分性能来规范和提升业务逻辑的开发
</Alert>

+ [√] 逻辑分层
+ [√] 模块化管理
+ [√] 文件生成
+ [√] 模型生成
+ [√] 数据库迁移生成
+ [√] 路由生成
+ [√] 自定义异常接管
+ [√] 请求方法扩展
+ [√] 内置Token验证
+ [√] 中间件验证
+ [√] 第三方模块支持
+ [-] 角色权限
+ [-] 字段权限
+ [-] 多数据库支持
+ [-] 自定义路由Dispatcher
+ [-] 模型关联管理
+ [-] 模型获取器管理
+ [-] 简单CURD逻辑生成
+ [-] API文档生成
+ [-] 前端生成
+ [-] TS类型生成

## 项目地址

`huikedev/huike_base` : [Github](https://github.com/huikedev/huike_base)

## 环境要求

+ php7.1+
+ mysql 5.7+
+ ThinkPHP 6.0.*

## issues与交流


+ 您可以通过Github或Gitee的issues来反馈您的意见、建议或BUG
+ 您也可以通过Github或Gitee的Pull Requests来提交您的代码
+ QQ交流群：16117272


## 赞赏一下
<img alt="赞赏一下" src="https://huikedev-1255741738.cos.ap-shanghai.myqcloud.com/donate/donate.jpg" style="text-align: center;max-width: 750px;" />

## 鸣谢开源

+ [ThinkPHP](https://github.com/top-think/framework)
+ [Ant.Design](https://ant.design/)
+ [UmiJS](https://umijs.org/)
