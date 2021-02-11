---
title: 安装
order: 2
toc: menu
---
## 核心依赖安装

### 第一步：安装扩展
通过composer安装时最简单也是最快捷的方式：
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

## 示例模块

在安装完成后，项目会自动生成一个示例模块，示例模块的控制器路径为：

`<ROOT_PATH>/app/controller/huike_module/index/Index.php`

模块的逻辑目录为：

<Tree title="huike">
  <ul>
    <li>
      huike_module
      <ul>
        <li>
          logic
          <ul>
            <li>
              controller
              <ul>
                <li>
                  index
                  <ul>
                    <li>
                      Index.php
                      <small>逻辑控制器</small>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          service
          <ul>
            <li>
              index
              <ul>
                <li>
                  facade
                  <ul>
                    <li>
                      IndexService.php
                      <small>服务门面</small>
                    </li>
                  </ul>
                </li>
                <li>
                  provider
                  <ul>
                    <li>
                      Html.php
                      <small>html方法的服务层逻辑</small>
                    </li>
                    <li>
                      Index.php
                      <small>index方法的服务层逻辑</small>
                    </li>
                    <li>
                      Validate.php
                      <small>validate方法的服务层逻辑</small>
                    </li>
                  </ul>
                </li>
                <li>
                  IndexService.php
                  <small>服务工厂类</small>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          validate
          <ul>
            <li>
              index
              <ul>
                <li>
                  index
                  <ul>
                    <li>
                      Validate.php
                      <small>validate方法的验证器</small>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          route.php
          <small>示例模块的路由配置信息</small>
        </li>
        </li>
      </ul>
    </li>
  </ul>
</Tree>

<Alert type="error">
将 <span style="color: red;">huike/huike_module/route.php</span> 中的路由配置信息复制到 <span style="color: red;">routes/app.php</span> 中即可访问
</Alert>

测试URL：

+ yourdomain.com/huike
+ yourdomain.com/huike/validate
+ yourdomain.com/huike/validate?test=huikedev
+ yourdomain.com/huike/html

<Alert type="error">
访问以上四个url会有各自不同的返回
</Alert>

## 安装开发辅助后台

开发辅助后台是基于`huikedev/huike_base`开发的一款第三方模块，通过开发辅助后台您可以快速的创建模块、控制器、方法、门面、模型、数据表以及生成路由配置。

> 安装前请保证数据库正常连接，后台功能依赖数据库

### 第一步：安装扩展

```bash
composer require huikedev/dev_admin
```

### 第二步：执行安装命令

```bash
php think DevAdminInstall
```
### 第三步：复制路由配置

打开`app/controller/dev/route.php`，将路由配置信息复制到`routes/app.php`中即可。

### 第四步：拉取前端代码

参考[前端文档](http://huike.dev/front)
