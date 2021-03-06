---
title: 项目规范
order: 6
toc: menu
---
## 模块

在`ThinkPhp 6.0.*`中取消了之前版本模块的设计，本项目的模块实际上使用的是**路由**+**多级控制器**来实现的。
在模块的使用上，请遵循以下规范：
+ 模块使用单级目录，如需版本控制可使用两级目录，如`app/controller/v1/admin`
+ 模块目录命名使用识别度高的英文单词，如`wap`、`api`、`wechat`等

## 控制器

在控制器的使用上，我推荐以下规范：
+ 使用单级目录对控制器用途进行划分，如`user/Register`、`user/Login`、`user/User`
+ 控制器类名要么全用单数，要么全用复数，控制器命名和访问地址没有必然关系
+ 对于Restful风格的控制器根据业务选择，不可盲目
+ 控制器**只负责请求调度**，不应该处理业务逻辑

## 逻辑控制器

逻辑控制器是对请求的处理和响应数据的封装，我推荐以下规范：
+ 逻辑层不应该对数据进行处理，如修改、隐藏、追加字段
+ 同一个逻辑方法不应该出现两种正常响应类型，如一种情况返回`json`、另一种返回`html`
+ 除`data`字段外，同一个逻辑控制器正常返回的数据结构应该一致

## 服务层

服务（Service）层是对数据的处理和封装，遵循**单一原则**，即一个方法只干一件事，我推荐以下规范：
+ `Model`在一定程度上发挥了服务层的作用，所以服务层是非必要的，根据个人喜好和业务复杂度来选择是否使用服务层
+ 服务层方法遵循**单一原则**，如你不能同一个方法又能新增又能修改
+ 尽可能的接管异常并根据业务进行处理或抛出服务层异常
