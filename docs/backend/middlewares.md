---
title: 中间件
order: 8
toc: menu
---

## 全局前置中间件

<Alert type="info">
全局前置中间件是应用内所有请求都会加载的中间件，通常用于处理应用全局的逻辑
</Alert>

`huike\common\middlewares\app\GlobalBeforeMiddleware`的代码如下：

```php 
<?php

namespace huike\common\middlewares\app;

use huikedev\huike_base\facade\AppDebug;
use huikedev\huike_base\facade\AppRequest;
use huikedev\huike_base\utils\UtilsRequest;

class GlobalBeforeMiddleware
{
    public function handle($request, \Closure $next)
    {
        UtilsRequest::setHeader();
        //跨域option直接空返回
        if (strtolower(AppRequest::method()) == "options") {
            return \response('');
        }
        if(AppRequest::isDebug()){
            AppDebug::remark('huike_start');
        }
        return $next($request);
    }
}
```

在全局前置中间件中，默认只有两处逻辑：
+ 针对`OPTIONS请求`，返回`headers`、`origin`以及`methods`，并结束当前请求 (需要Nginx或Apache前置设置)
+ 在`debug模式`下，标记Debug信息的开始

## 路由前置中间件

<Alert type="info">
路由前置中间件与模块是绑定的，一个模块对应一个路由前置中间件，统一存放于 huike/common/middlewares 目录
</Alert>

<Alert type="error">
创建路由中间件后，请在路由中间件中设置 <span style="color: red;">AppRequest::setModule('模块目录名称');</span>
</Alert>

路由前置中间件主要用于处理模块相关的逻辑处理，如**访问权限**、**角色权限**、**追加请求参数**等。

如`huikedev/dev_admin`的路由中间件代码如下：

```php
<?php

namespace huikedev\dev_admin\common\middlewares;

use huikedev\dev_admin\common\interceptor\auth\DevAuthProvider;
use huikedev\huike_base\facade\AppRequest;

class DevRouteMiddleware
{
    public function handle($request, \Closure $next)
    {
        AppRequest::setModule('dev');
        bind('auth',DevAuthProvider::class);
        app('auth')->handle();
        return $next($request);
    }
}
```

再次我们将`DevAuthProvider::class`对象绑定到别名`auth`，再执行`app('auth')->handle()`,这样我们就可以通过`DevAuthProvider::class`对用户的请求进行权限校验。
