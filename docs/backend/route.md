---
title: 应用路由
order: 8
toc: menu
---
## 路由定义

### 使用框架路由

在`<ROOT_PATH>\routes\app.php`中定义路由即可

### 使用项目路由

在`<ROOT_PATH>\huike\routes`目录下的任意`*.php`文件都可以被自动加载，定义方式与`ThinkPHP`的 [路由定义](https://www.kancloud.cn/manual/thinkphp6_0/1037495) 方式一致。

**生产环境下自动加载需要手动开启。**

## 自动加载

### Debug环境

debug模式下路由的自动加载会默认开启，在`<ROOT_PATH>\huike\routes`目录下的任意`*.php`文件都可以被自动加载。

### 生产环境

生产环境下，如需自动加载功能，请将`<ROOT_PATH>\config\huike.php`中的`autoload_routes`设置为`true`即可开启生产环境下的自动加载功能。

生产环境开启此功能会增加一丢丢性能开销。若未开启生产环境下自动加载路由，请使用框架路由来定义路由规则。

**建议按照模块来划分不同的路由定义文件**

## 域名绑定

在路由中设置域名绑定后，应用的其他域名将无法访问到域名路由分组下的路由规则。

