---
title: 自定义异常
order: 18
toc: menu
---

## 异常接管

在项目安装完成后，系统会生成`huike\common\exception\HuikeExceptionHandle`，并自动设置[自定义异常接管](https://www.kancloud.cn/manual/thinkphp6_0/1037615#_29) 

<Alert type="error">
默认只提供 <span style="color: red;">json</span> 格式的异常信息
</Alert>

<Alert type="error">
注意：自定义服务异常必须继承 <span style="color: red;">huikedev\huike_base\exceptions\AppServiceException</span>
</Alert>

## 数据结构

你可以通过修改代码的方式修改数据结构和字段命名

```typescript
type exception = {
  success: boolean,
  showType: number,
  errorCode:number,
  errorMessage: string,
  data?: any,
  debug?: object,
  traces?:[]
}
```

## 逻辑层异常

通常情况下，一个逻辑方法的代码结构应该如下：

```php
public function index():self
	{
		try{
			// 调用数据服务层，封装返回数据
		}catch (AppServiceException $serviceException){
			throw new AppLogicException($serviceException);
		}
		return $this;
	}
```

在逻辑层方法中，我们会`catch AppServiceException`并抛出`AppLogicException`

## 服务层异常

服务层异常代码通常如下：

```php
<?php

namespace huikedev\dev_admin\service\system\exception;

use huikedev\huike_base\exceptions\AppServiceException;

class ModuleServiceException extends AppServiceException
{
    
	public function setExceptionKey()
	{
		$this->exceptionKey = 'dev module exception';
	}

}
```

我们在手动抛出异常时，代码如下：

```php
throw new ModuleServiceException('未找到ID为【'.AppRequest::id().'】的模块',11,NoticeType::DIALOG_ERROR);
```

如果在抛出异常时，你想通过日志记录关键信息，并对用户隐藏关键信息，你可以按照以下的方式抛出：

```php
throw new ModuleServiceException('系统错误',4,NoticeType::DIALOG_ERROR,$e,'数据库写入失败');
```

我们在接管其他异常时，代码如下：

```php
throw new ModuleServiceException($e->getMessage(),4,NoticeType::DIALOG_ERROR,$e);
```
## 服务层异常参数

### appMsg

+ 参数类型：`string`
+ 参数作用：返回前端的msg信息

### code

+ 参数类型：`integer`
+ 参数作用：用户计算最终错误码的数值，1-100之间

### noticeType

+ 参数类型：`integer`
+ 默认值：`4`
+ 参数作用：用于前端判断来显示错误提示类型，如`message`、`notification`、`dialog`、`page`

### previous

+ 参数类型：`\Throwable`
+ 默认值：`null`
+ 参数作用：接管的异常实例，用于处理trace信息

### error

+ 参数类型：`string`
+ 默认值：`null`
+ 参数作用：用户日志记录时的错误信息

### errorLevel

+ 参数类型：`integer`
+ 默认值：`0`
+ 参数作用：错误级别，可以设置不同的错误级别用于不同的提醒方式，如邮件、短信等

### appData

+ 参数类型：`array`
+ 默认值：`[]`
+ 参数作用：返回到前端的data数据

## 错误码计算

在服务层异常中，我们必须要实现`setExceptionKey`这个方法。这个方法会要求你设置一个`exceptionKey`，系统通过`exceptionKey`在指定的异常信息语言包，如`huike/lang/zh-cn/exception.php`去查找对应的`code`，将这个`code`和服务层异常抛出的`code`进行计算，加上或减去对应的值，从而形成一个唯一的值，如`-1001`、`-1002`

在开发或者生产环境中，我们通过错误码可以快速的定位到异常的代码行数，如我们得到一个`-1205`的错误码，我们可以先通过整数定位到对应的`exceptionKey`，然后再根据`exceptionKey`定位到服务异常类，再通过`ctrl+左键`的方式就可以找到抛出`code=5`的代码，从而确定抛出异常的逻辑。

## 第三方模块异常

在第三方模块中，只能使用模块内部的异常信息语言包，这时，我们需要定义个当前模块的服务异常基类，并在异常基类中设置异常信息语言包：

```php
<?php

namespace huikedev\dev_admin\common\exception;

use huikedev\huike_base\exceptions\AppServiceException;
use think\facade\Lang;

abstract class DevServiceException extends AppServiceException
{
    public function __construct(string $appMsg, int $code, int $noticeType = 1, \Throwable $previous = null, string $error = null, int $errorLevel = 0, array $appData = [])
    {
        $dir = __DIR__;
        $langDir = str_replace('common'.DIRECTORY_SEPARATOR.'exception','',$dir);
        $langDir .='lang'.DIRECTORY_SEPARATOR.Lang::defaultLangSet().DIRECTORY_SEPARATOR.'exception.php';
        parent::setExceptionLang($langDir);
        parent::__construct($appMsg, $code, $noticeType, $previous, $error, $errorLevel, $appData);
    }
}
```

如上，通过`parent::setExceptionLang`即可设置异常信息语言包。
