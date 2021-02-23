---
title: 数据服务层
order: 17
toc: menu
---
## 基本概念

数据服务层是对数据层进行封装，为逻辑层提供可复用的单一方法的合集。数据模型在一定程度上发挥了服务层的作用，所以数据服务层不一定是必须的，但为了不让逻辑层臃肿，还是推荐使用数据服务层。

## 单一原则

数据服务层的方法**应该**遵循单一原则，即一个方法只做一件事。

如：你不能一个方法既能添加信息又能编辑信息。但你可以通过内部方法来实现逻辑的抽象，如下：

```php
namespace app\test;

use huikedev\dev_admin\common\model\huike\HuikeDeveloper;
use huikedev\huike_base\facade\AppRequest;
use think\Exception;

class Developer
{
    /**
     * @var HuikeDeveloper
     */
    protected $developer;

    public function add()
    {
        // 前置逻辑
        $this->developer = new HuikeDeveloper();
        $this->setDeveloper();
        // 后置逻辑
        return true;
    }

    public function edit()
    {
        // 前置逻辑
        $this->developer = HuikeDeveloper::where('id','=',AppRequest::id())->findOrEmpty();
        if($this->developer->isEmpty()){
            throw new Exception('未找到用户');
        }
        $this->setDeveloper();
        // 后置逻辑
        return true;
    }

    protected function setDeveloper()
    {
        $this->developer->nick_name = AppRequest::safeString('nick_name');
        $this->developer->save();
    }
}
```

在以上的示例中，将对模型操作的抽象为`setDeveloper()`，而`add()`和`edit()`分别负责前置和后置的逻辑处理即可。

## 服务工厂

通常情况下，我们还会对服务层进行拆分，如用户列表和用户详情的逻辑肯定不会写到一个类中，但是用户列表和用户详情都属于用户相关的数据服务。所以，我们在数据服务层的基础上会增加一个`ServiceFactory`，对同类的服务层逻辑进行聚合，同时也方便我们在业务开发时进行调用。

<Tree title="user">
  <ul>
    <li>
      provider
      <ul>
        <li>
          UserList.php
          <small>用户列表逻辑</small>
        </li>
        <li>
          UserProfile.php
          <small>用户详情逻辑</small>
        </li>
      </ul>
    </li>
    <li>
      UserService.php
      <small>用户相关服务逻辑的聚合Factory</small>
    </li>
  </ul>
</Tree>

`UserService`的代码可能如下：

```php
class UserService
{
    public function userList():Collection
    {
        return app(UserList::class,[],true)->handle();
    }

    public function userProfile():HuikeDeveloper
    {
        return app(UserList::class,[],true)->handle();
    }
}
```
此处对于`app()`助手函数的使用请参考ThinkPHP官方文档[容器和依赖注入](https://www.kancloud.cn/manual/thinkphp6_0/1037489)中的**解析**

然而这时又会出现新的问题，我们每次使用都需要`new Service()`，所以这时，我们还会引入代理机制。

## 门面代理

门面代理是根据服务工厂生成的一个`Facade`类，这样我们直接按照静态调用的方式使用即可。门面代理的代码可能如下：

```php
<?php

namespace app\test\facade;

use huikedev\dev_admin\common\model\huike\HuikeDeveloper;
use think\Facade;
use think\model\Collection;

/**
 * @see \app\test\UserService::class
 * @mixin \app\test\UserService::class
 * @method Collection userList() static
 * @method HuikeDeveloper userProfile() static
 */
class UserService extends Facade
{
    protected static function getFacadeClass()
    {
        return \app\test\UserService::class;
    }
}
```

<Alert type="error">
门面代理默认为单例模式，并且会自动绑定到容器，在你掌握了门面和容器管理助手后，你可以根据逻辑需要决定是否重新实例化
</Alert>

## 静态代理

若不想使用门面代理，也可以使用PHP原生的静态方法来实现静态调用，同时根据业务逻辑来决定是否重新实例化，如下：

```php
class UserService
{
    public static function userList($newInstance = false):Collection
    {
        return app(UserList::class,[],$newInstance)->handle();
    }

    public static function userProfile($newInstance = false):HuikeDeveloper
    {
        return app(UserList::class,[],$newInstance)->handle();
    }
}
```

## 服务异常

每一个服务工厂应对应一个服务异常类，不同的服务异常类是本项目生成异常码，返回异常信息的基础。如下：

```php
<?php

namespace huikedev\dev_admin\service\user\exception;

use huikedev\dev_admin\common\exception\DevServiceException;

class LoginServiceException extends DevServiceException
{

	public function setExceptionKey()
	{
		$this->exceptionKey = 'dev login exception';
	}

}
```

这个异常类即是用户登录相关的服务异常。

## 目录结构

个人推荐服务采用以下目录结构：

<Tree title="service">
  <ul>
    <li>
      contract
      <ul>
        <li>
          ServiceAbstract.php
          <small>服务抽象类</small>
        </li>
        <li>
          ServiceInterface.php
          <small>服务接口类</small>
        </li>
        <li>
          ServiceTrait.php
          <small>服务特性类</small>
        </li>
      </ul>
    </li>
    <li>
      exception
      <ul>
        <li>
          ServiceException.php
          <small>服务异常类</small>
        </li>
      </ul>
    </li>
    <li>
      facade
      <ul>
        <li>
          ServiceFacade.php
          <small>门面代理类</small>
        </li>
      </ul>
    </li>
    <li>
      provider
      <ul>
        <li>
          ServiceProvider.php
          <small>服务提供者</small>
        </li>
      </ul>
    </li>
    <li>
      support
      <ul>
        <li>
          ServiceSupport.php
          <small>服务专用的内部逻辑</small>
        </li>
      </ul>
    </li>
    <li>
      UserService.php
      <small>服务工厂类</small>
    </li>
  </ul>
</Tree>
