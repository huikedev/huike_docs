---
hero:
  title: HuikeDev
  desc: 一款基于ThinkPHP 6.0的逻辑分层框架
  actions:
    - text: 查看文档
      link: /backend
features:
  - title: 逻辑分层
    desc: 在传统MVC的基础上行加入逻辑层和服务层，更利于逻辑解耦与规范开发行为
  - title: 快速生成
    desc: 可以快速的生成\追加逻辑分层、门面、模型、路由、迁移文件等文件
  - title: 低侵入性
    desc: 代码对TP核心框架及组件零侵入，以composer组件方式实现
footer: Apache-2.0 License | Copyright © 2021<br />Powered by HuikeDev  [Github](https://github.com/huikedev/huike_base)   [Gitee](https://gitee.com/huikedev/huike_base)
---

## 立即开始


### 第零步：安装`ThinkPHP 6.0.*`
```bash
composer create-project topthink/think tp
```
<Alert type="error">
若在已有项目安装本扩展可跳过此步。
</Alert>

具体参考：[安装ThinkPHP 6.0.*](https://www.kancloud.cn/manual/thinkphp6_0/1037481)

### 第一步：安装扩展

在项目根目录命令行执行：

```bash
composer require huikedev/huike_base
```

### 第二步：执行安装命令
安装完成后，在命令行执行以下命令：

```bash
php think HuikeInstall
```
此命令会在项目根目录创建一个`huike`的目录，并生成`HuikeService`系统服务注册时用到的所有文件，您可以通过配置文件来开启或关闭系统服务注册的组件。

此命令还会重写配置文件，并随机生成`admin_token_key`与`token_secret`以提升项目的安全性。

### 第三步：修改`composer.json`
如下找到项目根目录的`composer.json`，在`autoload.psr-4`中加入`"huike\\": "huike",`：
```json
{
  "autoload": {
    "psr-4": {
      "app\\": "app",
      "huike\\": "huike"
    },
    "psr-0": {
      "": "extend/"
    }
  }
}
```
### 第四步：开启强制路由

本扩展依赖路由功能，所以请开启强制路由。找到`config/route.php`，将`url_route_must`的值修改为`true`。

### 第五步：刷新composer缓存

命令行执行

```bash
composer dump-autoload
```

**数据库时间字段设置**

请将`<ROOT_PATH>\config\database.php`中的时间字段配置修改为以下：

```php
    // 字符串则明确指定时间字段类型 支持 int timestamp datetime date
    'auto_timestamp'  => 'int',

    // 时间字段取出后的默认时间格式
    'datetime_format' => false,
```
