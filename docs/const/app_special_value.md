---
title: 应用特殊值
order: 3
toc: menu
---

## 完整类名

`huikedev\huike_base\app_const\AppSpecialValue`

## FOREVER_TIMESTAMP_UNSIGNED

- 类型: `integer`
- 默认值：`4070880000`
- 详细：即`2099-01-01 00:00:00`的`unix时间戳`，表示永久

## FOREVER_TIMESTAMP_SIGNED

- 类型: `integer`
- 默认值：`2147483647`
- 详细：即`2038-01-19 11:14:07`的`unix时间戳`，表示永久（数据库字段非unsigned）

## VALUE_PASSED

- 类型: `integer`
- 默认值：`9`
- 详细：最终积极状态

## VALUE_REJECTED

- 类型: `integer`
- 默认值：`9`
- 详细：最终消极状态

> 说明：最终积极/消极状态中间预留一定的数值的冗余主要是为了方便后续扩展状态数值
