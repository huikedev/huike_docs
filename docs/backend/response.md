---
title: 响应器
order: 11
toc: menu
---

## AppResponse

本项目中的响应器是对请求响应的抽象，实际上的响应数据是在响应器中通过反射机制执行逻辑方法获取的逻辑层属性。

## 响应器方法

### setLogicNamespacePrefix

+ 设置逻辑控制器的命名空间前缀

```php
public function setLogicNamespacePrefix(string $logicNamespacePrefix): AppResponse
```

如：`app\controller\dev\user\Login::index()`这个控制器方法：

+ 应用内模块会被解析到 `huike\dev\logic\controller\user\Login::index()`

+ 第三方模块会被解析到 `MODULE_NAMESPACE\logic\controller\user\Login::index()`

在使用此方法后，则会被解析到`$logicNamespacePrefix\user\Login::index()`

<Alert type="error">
在使用此方法后 setLogicControllerPath 方法无效
</Alert>

### setLogicControllerPath

+ 设置逻辑控制器的默认目录

```php
public function setLogicControllerPath(string $path): AppResponse
```
如上的示例中：

+ 应用内模块会被解析到 `huike\dev\logic\$path\user\Login::index()`

+ 第三方模块会被解析到 `MODULE_NAMESPACE\logic\$path\user\Login::index()`

### setValidateNamespacePrefix

+ 设置自动验证器的默认命名空间前缀

```php
public function setValidateNamespacePrefix(string $validateNamespacePrefix): AppResponse
```

如：`app\controller\dev\user\HelloWorld::getName()`这个控制器方法的自动验证器为：

+ 应用内模块会被解析到 `huike\dev\validate\user\hello_world\GetName`

+ 第三方模块会被解析到 `MODULE_NAMESPACE\validate\user\hello_world\GetName`

在使用此方法后，则会被解析到`$logicNamespacePrefix\user\hello_world\GetName`

### setDispatch

+ 设置响应Dispatch

```php
public function setDispatch(string $dispatchClass): AppResponse
```

使用此方法可以替换项目默认的响应Dispatch，传入参数为自定义Dispatch的**完整类名**

### validate

+ 开启自动验证

```php
public function validate(?string $validate=null,?string $scene = null): AppResponse
```

使用此方法，系统对当前请求开启自动验证，支持传入自定义的验证器和场景值

### render

+ 最终响应方法

若不使用此方法，则不会进行最终响应。使用此方法后，会调用对应`dispatch`的`render`方法。

<Alert type="error">
注意：debug模式下严格校验，并给出响应的提示。关闭debug模式后，不会进行严格校验。
</Alert>


