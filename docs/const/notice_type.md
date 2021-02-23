---
title: 前端反馈类型
order: 5
toc: menu
---

## 完整类名

`huikedev\huike_base\app_const\NoticeType`

## SILENT

- 类型: `integer`
- 默认值：`0`
- 详细：静默模式，无前端反馈

## MESSAGE_WARN

- 类型: `integer`
- 默认值：`1`
- 详细：警告`message`

## MESSAGE_ERROR

- 类型: `integer`
- 默认值：`2`
- 详细：错误`message`

## MESSAGE_SUCCESS

- 类型: `integer`
- 默认值：`3`
- 详细：成功`message`

## NOTIFICATION_WARN

- 类型: `integer`
- 默认值：`4`
- 详细：警告`notifacation`

## NOTIFICATION_ERROR

- 类型: `integer`
- 默认值：`5`
- 详细：错误`notifacation`

## NOTIFICATION_SUCCESS

- 类型: `integer`
- 默认值：`6`
- 详细：成功`notifacation`

## DIALOG_WARN

- 类型: `integer`
- 默认值：`7`
- 详细：警告`dialog`

## DIALOG_ERROR

- 类型: `integer`
- 默认值：`8`
- 详细：错误`dialog`

## DIALOG_SUCCESS

- 类型: `integer`
- 默认值：`9`
- 详细：成功`dialog`

## PAGE_WARN

- 类型: `integer`
- 默认值：`10`
- 详细：警告`page`

## PAGE_ERROR

- 类型: `integer`
- 默认值：`11`
- 详细：错误`page`

## PAGE_SUCCESS

- 类型: `integer`
- 默认值：`12`
- 详细：成功`page`

以上为五种常见前端反馈组件的不同状态，在不同的UI框架中都可以找到对应的组件与之对应。

设置前端反馈类型的目的是让后端可以针对不同的异常/响应发起不同的前端反馈。该设置在任意接口中都会返回。前端调用组件需要在前端的响应拦截器中设置。


