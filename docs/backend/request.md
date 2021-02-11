---
title: 请求
order: 7
toc: menu
---

## AppRequest

<Alert type="info">
AppRequest是对 think\Request 的二次封装或扩展，您也可以选择使用官方的Request组件
</Alert>

### 静态调用

静态调用时使用的是`huikedev\huike_base\facade\AppRequest`，而不是`huikedev\huike_base\request\AppRequest`

```php
<?php

namespace app\index\controller;

use huikedev\huike_base\facade\AppRequest;

class Index
{
    
    public function index()
    {
		return AppRequest::param('name');
    }    
}

```

## 重写的方法

### `has`

  + @desc 检测请求中是否包含指定参数，空字符串也会返回false
  + @param string $name
  + @param string $type = 'param'
  + @param bool $checkEmpty = true
  + @return bool

`public function has(string $name, string $type = 'param', bool $checkEmpty = true):bool`


## 追加的方法

### `setId`

+ @desc 设置默认ID
+ @param int $id
+ @return $this

`public function setId(int $id): AppRequest`

### `safeBoolean`

+ @desc 获取指定字段的boolean值
+ @param string $name
+ @return bool

`public function safeBoolean(string $name):bool`

### `safeInteger`

+ @desc 获取指定字段的integer值
+ @param string $name
+ @return int

`public function safeInteger(string $name):int`

<Alert type="error">
！注意:如果$name不存在，则返回0 需要自行处理
</Alert>

### `safeFloat`

+ @desc 获取指定字段的float值
+ @param string $name
+ @return float

`public function safeFloat(string $name):float`

### `safeString`

+ @desc 获取指定字段的string值，并使用strip_tags、trim过滤
+ @param string $name
+ @return string

`public function safeString(string $name):string`

### `safeArray`

+ @desc 获取指定字段的array值
+ @param string $name
+ @return array

`public function safeArray(string $name):array`

### `getFullActionName`

+ @desc 获取被访问的方法（包含控制器）,如user.Index/profile
+ @return string

`public function getFullActionName(): string`

### `getTokenName`

+ @desc 获取当前请求携带的Token的键名，可能为`admin_token_key的值`、`authorization`或`null`
+ @return string|null

`public function getTokenName(): ?string`

### `getToken`

+ @desc 获取当前请求携带的Token的的值，和上面的方法结合用于构造url
+ @return string|null

`public function getToken(): ?string`

### `pageSize`

+ @desc 获取当前请求中的分页参数的pageSize
+ @return int

`public function pageSize():int`

### `pageSize`

+ @desc 获取当前请求中的分页参数的当前页数
+ @param int $default = 1
+ @return int

`public function current(int $default = 1):int`

### `id`

+ @desc 获取当前请求中或通过setId设置的ID参数的值
+ @param int $default = 0
+ @return int

public function id(int $default = 0):int

### `module`

+ @desc 获取模块名称
+ @return mixed
+ @throws Exception

`public function module():string`

### `setModule`

+ @desc 设置模块名称
+ @param string $module

`public function setModule(string $module):void`

### `namespace`

+ @desc 获取当前模块的根命名空间
+ @return string

`public function namespace():string`

### `setNamespace`

+ @desc 设置当前模块的根命名空间，主要为第三方模块使用
+ @param string $namespace

`public function setNamespace(string $namespace):void`

### `isDebug`

+ 检测是否为debug模式
+ @return bool

`public function isDebug(): bool`

### `getOs`

+ @desc 获取客户端系统类型
+ @return string

`public function getOs(): string`

### `getBrowser`

+ @desc 获取客户端浏览器类型
+ @return string

`public function getBrowser(): string`

