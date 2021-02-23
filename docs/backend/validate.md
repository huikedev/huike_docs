---
title: 自动验证
order: 15
toc: menu
---

## 开启自动验证

在控制器中如下设置即可开启当前方法的自动验证功能。

```php
<?php

namespace app\controller\huike_module\index;

use huikedev\huike_base\response\AppResponse;

class Index
{
    public function validate()
    {
        return (new AppResponse())->validate()->render();
    }
}
```

自动验证是基于ThinkPHP的[独立验证器](https://www.kancloud.cn/manual/thinkphp6_0/1037624) 

在开启自动验证后，我们会自动查找对应的验证器，验证器的命名空间由以下参数组成：

+ 模块目录下的`validate`目录
+ 控制器命名空间前缀，如上`index`
+ 控制器类名的**蛇形**命名的目录，如上`index`
+ 方法名的**大驼峰命名**的验证器类名，如上`Validate`

由此可得出验证器的完整命名空间为：`huike\huike_module\validate\index\index\Validate`

## 验证器基类

自动验证器必须继承项目的验证器基类`huikedev\huike_base\base\BaseValidate`，并实现其中的方法：

```php
    protected function setExceptionKey()
    {
        $this->exceptionKey = 'huike_module index exception';
    }
```

该方法的作用是为验证错误提供统一的错误码。默认所有的验证错误码为 `基础异常码`+`99`

你可以在`huike\common\exception\ExceptionConst`修改`99`为其他值

<Alert type="error">
注意：自动验证不支持批量验证
</Alert>

## 自定义验证

自定义验证有两种方式实现：

### 传入验证类

你可以在`validate()`方法传入自定义的验证类，该验证类同样需要继承`huikedev\huike_base\base\BaseValidate`

```php
    public function validate()
    {
        return (new AppResponse())->validate(YourValidate::class)->render();
    }
```
### 指定命名空间前缀

设置自动验证器的默认命名空间前缀

```php
public function setValidateNamespacePrefix(string $validateNamespacePrefix): AppResponse
```

如：`app\controller\dev\user\HelloWorld::getName()`这个控制器方法的自动验证器为：

+ 应用内模块会被解析到 `huike\dev\validate\user\hello_world\GetName`

+ 第三方模块会被解析到 `MODULE_NAMESPACE\validate\user\hello_world\GetName`

在使用此方法后，则会被解析到`$logicNamespacePrefix\user\hello_world\GetName`

