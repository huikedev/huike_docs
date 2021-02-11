---
title: 逻辑控制器
order: 13
toc: menu
---

## 注意事项

逻辑控制器的三种实现：
+ 逻辑控制器的正常返回必须是`$this`
+ 继承`huikedev\huike_base\base\BaseLogic`
+ 使用`huikedev\huike_base\base\LogicTrait`
+ 自行实现`huikedev\huike_base\base\LogicTrait`中的属性和方法（debug模式下关闭`base_logic_check`配置）

## 属性与方法

### code
+ 默认值：`0`
+ 判断是否为成功请求，`code = 0`时为成功请求

### noticeType
+ 默认值：`0`
+ 返回前端的提示类型，默认`0`为静默模式

### msg
+ 默认值：`null`
+ 返回前端的提示消息

### data
+ 默认值：`null`
+ 返回前端的数据

### returnType
+ 默认值：`json`
+ 可选值：`json`、`html`、`download`
+ 设置请求的响应类型

<Alert type="error">
其他功能如预览、二进制文件流等在后续版本中实现
</Alert>




