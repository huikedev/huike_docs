---
title: 序言
order: 1
toc: menu
nav:
  title: 后端文档
  order: 1
---

## 写在前面
写这个项目的出发点是在工作过程中碰到过很多几千行的控制器，大量的业务逻辑堆积在控制器中，对于后续的迭代以及改进极度不友好。同时在TP6.0之后，核心架构层面做了很多有利于开发者的调整，让开发者可以以更低的侵入性去重写或改写系统的基础组件。

最后，也希望这个项目能在开发效率、团队协作上帮助到您，同时也欢迎提供意见和建议。

## 适用场景

+ 前后端分离项目
+ 单应用需要多模块支持
+ 多端项目
+ 小型团队开发项目
+ 学习面向对象开发
+ 学习`ThinkPHP6.0.*`

**配合开发辅助后台使用能极大的提升开发效率和代码规范度**

<Alert type="error">
小型项目使用此扩展会增加不必要的架构设计，如非学习，不建议小型项目使用此扩展
</Alert>

## 注意事项

在使用此扩展前，请熟悉`ThinkPHP`的[系统服务](https://www.kancloud.cn/manual/thinkphp6_0/1037490) 、 [中间件](https://www.kancloud.cn/manual/thinkphp6_0/1037493) 、 [容器和依赖注入](https://www.kancloud.cn/manual/thinkphp6_0/1037489) 、 [门面](https://www.kancloud.cn/manual/thinkphp6_0/1037491) ，本项目正是基于这些特性开发而成的。

**数据库时间字段设置**

请将`<ROOT_PATH>\config\database.php`中的时间字段配置修改为以下：

```php
    // 字符串则明确指定时间字段类型 支持 int timestamp datetime date
    'auto_timestamp'  => 'int',

    // 时间字段取出后的默认时间格式
    'datetime_format' => false,
```

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

+ 您可以通过Github的issues来反馈您的意见、建议或BUG
+ 您也可以通过Github的Pull Requests来提交您的代码
+ QQ交流群：16117272

<Alert type="error">
注意：Gitee仓库仅作为同步使用，issues与pr请到Github仓库提交
</Alert>


## 赞赏一下
<img alt="赞赏一下" src="https://huikedev-1255741738.cos.ap-shanghai.myqcloud.com/donate/donate.jpg" style="text-align: center;max-width: 750px;" />

## 鸣谢开源

+ [ThinkPHP](https://github.com/top-think/framework)
+ [Ant.Design](https://ant.design/)
+ [UmiJS](https://umijs.org/)
