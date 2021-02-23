---
title: 配置项
order: 1
toc: menu
nav:
  title: 配置项
  order: 2
---
# 配置项

项目安装完成后，所有的配置项均在`config/huike.php`中。

## is_installed

- 类型: `boolean`
- 默认值：`true`
- 详细：系统安装完成后自动生成，改为`false`可重新覆盖安装

## replace_query

- 类型: `boolean`
- 默认值：`true`
- 详细：系统服务中是否是否替换Query类

## extra_validate

- 类型: `boolean`
- 默认值：`true`
- 详细：系统服务中是否扩展基础验证规则

## autoload_routes

- 类型: `boolean`
- 默认值：`false`
- 详细：是否自动加载路由

在debug模式下，此配置无效。debug模式下会自动加载`huike/routes/*.php`为路由。若开启此项配置，在非debug模式下，同样会自动加载路由配置（稍微影响性能和安全性）。

## log_error_level

- 类型: `integer`
- 默认值：`-1`
- 详细：日志记录级别，大于此值的异常都会进行日志记录

## default_error_notice_type

- 类型: `integer`
- 默认值：`4`
- 详细：默认异常提示类型，即`notification.error`

## base_logic_check

- 类型: `boolean`
- 默认值：`false`
- 详细：是否严格检测逻辑控制器继承BaseLogic

## paginator

- 类型: `array`
- 详细：分页设置

### replace

- 类型: `boolean`
- 默认值：`true`
- 详细：系统服务中是否替换分页类

### var_page

- 类型: `string`
- 默认值：`current`
- 详细：当前页数的字段名

### var_pageSize

- 类型: `string`
- 默认值：`pageSize`
- 详细：每页条数的字段名

### var_total

- 类型: `string`
- 默认值：`total`
- 详细：总条数的字段名

### var_data

- 类型: `string`
- 默认值：`list`
- 详细：数据的字段名

### var_last

- 类型: `string`
- 默认值：`last`
- 详细：最大页的字段名

### pageSize

- 类型: `integer`
- 默认值：`10`
- 详细：每页条数默认值

## token

- 类型: `array`
- 详细：Token配置项

### max_client

- 类型: `integer`
- 默认值：`3`
- 详细：同一用户允许同时在线最大客户端数量

### token_name

- 类型: `string`
- 默认值：`authorization`
- 详细：token的字段名

### token_prefix

- 类型: `string`
- 默认值：`token_`
- 详细：缓存前缀

### token_alg

- 类型: `string`
- 默认值：`HS256_`
- 详细：加密方式

### token_iss

- 类型: `string`
- 默认值：`huike.dev`
- 详细：发布者

### token_lifetime

- 类型: `integer`
- 默认值：`28800`
- 详细：默认有效期（秒），默认为8*60*60，0 为长期有效

## cors

- 类型: `array`
- 详细：跨域配置项

### optionOrigin

- 类型: `array`
- 默认值：`[*]`
- 详细：Access-Control-Allow-Methods

### optionMethods

- 类型: `array`
- 默认值：`[*]`
- 详细：Access-Control-Allow-Methods

### optionHeader

- 类型: `array`
- 默认值：`[]`
- 详细：Access-Control-Allow-Headers，token name自动允许

## admin_token_key

- 类型: `string`
- 默认值：`随机生成`
- 详细：用于显示调试，可以通过携带`随机生成值=uid`来获取对应用户的响应数据

## token_secret

- 类型: `string`
- 默认值：`随机生成`
- 详细：token秘钥，用于token加密

## online_debug
- 类型: `array`
- 详细：线上环境开启调试模式的设置，当参数中包含`key-value`时即可开启debug模式

### key
- 类型: `string`
- 默认值：`随机生成`

### value
- 类型: `string`
- 默认值：`随机生成`
