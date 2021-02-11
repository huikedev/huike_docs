---
title: 内置组件
order: 16
toc: menu
---

## Auth

本项目内置了基本的权限验证组件`Auth`。默认支持`token`验证。

### 定义模块Auth类

继承`huikedev\huike_base\interceptor\auth\contract\AuthAbstract`，并实现其中的方法即可。

```php
<?php

namespace huikedev\dev_admin\common\interceptor\auth;

use huikedev\dev_admin\common\caching\facade\DevActionsCache;
use huikedev\huike_base\facade\AppRequest;
use huikedev\huike_base\interceptor\auth\contract\AuthAbstract;
use huikedev\huike_base\interceptor\auth\support\token\facade\Token;
use think\facade\Config;

class DevAuthProvider extends AuthAbstract
{

    protected function setClient()
    {
        $this->client = AppRequest::module();
    }

    public function handle()
    {
        if($this->isAuthNecessary()){
            $this->auth();
        }
    }

    protected function auth()
    {
        if(AppRequest::getTokenName() === Config::get('huike.admin_token_key')){
            $uid = AppRequest::getTokenName();
            $this->setUserId($uid);
        }else{
            $tokenCached = Token::setClient($this->client)->verifyToken(AppRequest::getToken());
            $this->setUserId($tokenCached['uid']);
        }
    }

    public function login(int $userId): string
    {
        return Token::setClient($this->client)->createToken($userId);
    }

    public function logout(string $token): bool
    {
        return Token::setClient($this->client)->delete($this->getUserId(),$token);
    }

    protected function isAuthNecessary(): bool
    {
        if(DevActionsCache::isPublic()){
            return false;
        }
        return true;
    }
}
```

### 路由中间件开启

在路由中间件中将已定义的模块Auth类绑定到`auth`别名即可

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
        AppRequest::setNamespace('huikedev\dev_admin');
        bind('auth',DevAuthProvider::class);
        app('auth')->handle();
        return $next($request);
    }
}
```

### Auth的使用

通过门面`huikedev\huike_base\interceptor\auth\facade\Auth`访问方法即可

#### getToken
+ 返回值：`string | null`
+ 获取当前用户的Token，若不存在会抛出异常

#### getNullableUserId
+ 返回值：`integer`
+ 获取用户UID，若token不存在会返回0，不会抛出异常

#### getUserId
+ 返回值：`integer`
+ 获取用户UID，若token不存在会抛出异常

#### login
+ 参数：`int $uid`
+ 返回值：`string`
+ 用户登录，成功后返回`token`字符串

#### logout
+ 返回值：`boolean`
+ 用户退出，非必要方法，可自行实现


## Caching

`Caching`是对缓存操作的封装，主要用于对模型相关数据缓存操作的封装。默认提供两种基类。

### AppCachingAbstract

对于根据ID来划分缓存的数据可以通过继承`huikedev\huike_base\base\caching\AppCachingAbstract`来实现，如下示例：

### 定义

```php
<?php

namespace huikedev\dev_admin\common\caching\provider\user;

use huikedev\dev_admin\common\caching\support\DevCachePrefix;
use huikedev\dev_admin\common\model\huike\HuikeDeveloper;
use huikedev\huike_base\base\caching\AppCachingAbstract;

class DeveloperCache extends AppCachingAbstract
{
    /**
     * @var HuikeDeveloper
     */
    protected $model;
    protected function setPrefix()
    {
        $this->prefix = DevCachePrefix::DEV_DEVELOPER;
    }

    public function getId():int
    {
        $this->parseDataToModel();
        return $this->model->id ?? 0;
    }

    public function getModel():HuikeDeveloper
    {
        $this->parseDataToModel();
        return $this->model;
    }

    // 对于模型或数据集的操作都应该将数组注入到对应的模型来获得模型实例
    protected function parseDataToModel()
    {
        // 判断是否需要从redis中获取数据
        if(is_null($this->model) === false && $this->update === false){
            return $this;
        }
        $this->getCacheData();
        if(empty($this->cacheData)){
            $this->model =  new HuikeDeveloper([]);
        }else{
            $this->model = new HuikeDeveloper($this->cacheData);
        }
        return $this;
    }

    protected function getDataSource()
    {
        // 注意所有的模型最后都应该toArray，将模型实例转换为数组存入redis以节省redis内存
        // 在取出的时候 通过逻辑将data注入到对应的模型/数据集实例已获得模型方法
        return HuikeDeveloper::where('id','=',$this->id)->findOrEmpty()->toArray();
    }
}
```

通过自行实现`getDataSource()`、`parseDataToModel()`、`setPrefix()`即可对模型数据进行缓存封装。再通过自行定义`public`方法来规范缓存数据的使用。

<Alert type="error">
注意：缓存返回的模型不能直接使用`save()`
</Alert>

### 门面代理

在定义好缓存类后，我们再生成门面即可实现单例调用。

```php
<?php

namespace huikedev\dev_admin\common\caching\facade;

use huikedev\dev_admin\common\model\huike\HuikeDeveloper;
use think\cache\Driver;
use think\Facade;

/**
 * @see \huikedev\dev_admin\common\caching\provider\user\DeveloperCache
 * @mixin \huikedev\dev_admin\common\caching\provider\user\DeveloperCache
 * @method int getId() static
 * @method HuikeDeveloper getModel() static
 * @method Driver cacheHandle() static
 * @method int getRedisCount() static 获取redis访问次数
 * @method \huikedev\dev_admin\common\caching\provider\user\DeveloperCache force() static 强制从缓存获取数据，非刷新数据
 * @method \huikedev\dev_admin\common\caching\provider\user\DeveloperCache setExpire(int $expire) static 设置有效期
 * @method \huikedev\dev_admin\common\caching\provider\user\DeveloperCache refreshCache() static 刷新缓存
 * @method \huikedev\dev_admin\common\caching\provider\user\DeveloperCache deleteCache() static
 */
class DeveloperCache extends Facade
{
    protected static function getFacadeClass()
    {
        return \huikedev\dev_admin\common\caching\provider\user\DeveloperCache::class;
    }
}
```

### 使用

```php
// 获取ID=1的模型
DeveloperCache::setId(1)->getModel()
// 刷新ID=1的缓存
DeveloperCache::setId(1)->refreshCache()
```

<Alert type="error">
注意：缓存数据以最后一次`setId()`为准，建议每次使用都带上setId()
</Alert>

```php
DeveloperCache::setId(1)->getModel()
DeveloperCache::setId(2)->getModel()
// 此时刷新的是ID=2的缓存
DeveloperCache::refreshCache();
// 再次指定ID为2时，并不会去redis中取数据，因为数据已保存在php的内存中
DeveloperCache::setId(2)->getModel()
```

### AppSettingCacheAbstract

一些不想生成配置文件全局配置类的数据可以通过继承`huikedev\huike_base\base\caching\AppSettingCacheAbstract`来实现。

`AppSettingCacheAbstract`全局只会保存一个`key`，所以在使用时并不需要`setId()`，直接使用即可，用法和`AppCachingAbstract`一致。

## GetterSetter

一个可以通过魔术方法`__call`快速实现类属性的`getXXX()`和`setXXX()`的特性类。

```php
/**
 * Class MakeModel
 * @package huikedev\huike_generator\generator\logic_skeleton\execute\model
 * @method MakeModel setModelFullName(string $fullName)
 * @method MakeModel setExtendModel(string $model)
 * @method MakeModel setTimestampFields(array $timestampFields)
 * @method MakeModel setJsonFields(array $jsonFields)
 * @method MakeModel setIsJsonAssoc(bool $isJsonAssoc)
 * @method MakeModel setModelConnection(string $modelConnection)
 * @method MakeModel setModelPk(string $modelPk)
 * @method MakeModel setModelTable(string $modelTable)
 * @method MakeModel setModelFile(string $modelFile)
 */
class MakeModel extends MakeClassAbstract
{
    use GetterSetter;
    protected $defaultNamespace = 'huike\common\model';
    protected $importClass;
    protected $extendModel;
    protected $modelFullName;
    protected $modelName;
    protected $modelProperty;
    protected $modelFunctions;
    protected $namespacePrefix;
    protected $realExtend;
    protected $modelPath;
    protected $timestampFields;
    protected $jsonFields;
    protected $isJsonAssoc;
    protected $modelConnection;
    protected $modelPk;
    protected $modelTable;
    protected $modelFile;
```

如上，通过`use GetterSetter;`和注解快速实现类属性的`setXXX()`方法。

## BatchTransTrait

一个针对不固定数量模型的批量事务特性类

如，我们在对模型进行操作时，可能需要根据逻辑判断来确定是否进行操作，并且需要开启事务。

```php
<?php

namespace huike\huike_module\service\index\provider;

use app\model\User;
use huikedev\huike_base\base\BatchTransTrait;
use huikedev\huike_base\facade\AppRequest;

class BatchTrans
{
    use BatchTransTrait;
    public function handle()
    {
        $users = AppRequest::safeArray('users');
        $this->initialize();
        foreach ($users as $user){
            if(isset($user['is_edit']) && $user['is_add']){
                $model = new User();
                $model->startTrans();
                try {
                    $model->user_name = $user['user_name'];
                    $model->save();
                    $this->transList->push($model);
                }catch (\Exception $e){
                    $this->rollback();
                }
            }
        }
        $this->commit();
        return true;
    }
}
```
