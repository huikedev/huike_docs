---
title: 模块
order: 9
toc: menu
---
## 基本概念

<Alert type="info">
本项目的模块并非 ThinkPHP 3.x和 ThinkPHP 5.x中的模块。本项目中模块是利用多级控制器实现的模块管理功能。
</Alert>

模块实际上是`app/controller`下的一个目录，将同一个模块的控制器放在一个统一的目录下，就形成了一个模块。再通过路由功能对请求进行分发，这样就实现了模块间的请求隔离。

<Alert type="error">
模块必须使用路由中间件，且需要再路由中间件中设置模块名称，如
</Alert>

```php
class HuikeModuleRouteMiddleware
{
    public function handle($request, \Closure $next)
    {
        AppRequest::setModule('huike_module');
        return $next($request);
    }
}
```

### 命名规范

+ 不包含版本控制的模块应该只是一个单级目录，并使用通俗易懂的英文单词命名，如 `index` 、 `admin` 、 `web`等
+ 模块命名采用带下划线的**蛇形**命名法，如`wechat_api`

## 应用内模块

应用内模块是代码存放在`huike`目录下的模块，通常情况下，目录结构如下

<Tree title="huike">
<ul>
<li>
          module
          <small>模块名，可能是多级目录</small>
          <ul>
                <li>
      logic
      <ul>
        <li>
          controller
          <ul>
            <li>
              ... <small>逻辑控制器目录或文件</small>
            </li>
          </ul>
        </li>
      </ul>
    </li>
    <li>
      validate
      <ul>
        <li>
          ...
          <small>验证器</small>
        </li>
      </ul>
    </li>
    <li>
      service
      <ul>
        <li>
          ...
          <small>服务层存放位置，按照模块进行划分</small>
        </li>
      </ul>
    </li>
          </ul>
        </li>
</ul>
</Tree>

<Alert type="error">
逻辑控制器下的 controller 目录是逻辑控制器默认的存放目录，通过AppResponse::setLogicControllerPath()方法来指定为其他目录
</Alert>


## 第三方模块

本项目同样支持第三方模块，默认情况下，第三方模块的目录结构与应用内模块结构有一些区别：

<Tree title="extend_module">
  <ul>
    <li>
      command
      <ul>
        <li>
          ...
        <small>第三方模块注册的命令行类文件</small>
        </li>
      </ul>
    </li>
    <li>
      common
      <ul>
        <li>
          exception
          <ul>
            <li>
              ModuleServiceException.php
              <small>模块异常基类，用于设置基础异常信息</small>
            </li>
          </ul>
        </li>
        <li>
          middlewares
          <ul>
            <li>
              ModuleRouteMiddleware.php
              <small>模块的路由中间件</small>
            </li>
          </ul>
        </li>
        <li>
          model
          <ul>
            <li>
              ModuleModel.php
              <small>模块的模型文件</small>
            </li>
          </ul>
        </li>
        <li>
          ...
          <small>其他目录或文件</small>
        </li>
      </ul>
    </li>
    <li>
      database
      <ul>
        <li>
        migrations
          <ul>
          <li>
          ...
            <small>数据库迁移文件</small>
          </ul>
        </li>
        <li>seeds
        <ul>
          <li>
          ...
            <small>数据库迁移种子文件</small>
          </ul>
        </li>
      </ul>
    </li>
    <li>
      lang
      <ul>
        <li>
          zh-cn
          <ul>
            <li>
              exception.php
              <small>基础异常信息文件</small>
            </li>
          </ul>
        </li>
      </ul>
    </li>
    <li>
      logic
      <ul>
        <li>
          controller
          <ul>
            <li>
              ... <small>逻辑控制器目录或文件</small>
            </li>
          </ul>
        </li>
      </ul>
    </li>
    <li>
      validate
      <ul>
        <li>
          ...
          <small>验证器</small>
        </li>
      </ul>
    </li>
    <li>
      service
      <ul>
        <li>
          ...
          <small>服务层存放位置，按照模块进行划分</small>
        </li>
      </ul>
    </li>
    <li>
      ModuleService.php
      <small>模块的系统服务注册类</small>
    </li>
  </ul>
</Tree>

<Alert type="error">
第三方模块的意义在于可以任意迁移，在多个项目中复用很方便
</Alert>
