---
title: 常见问题
order: 19
---

## 分层对应关系是怎样的？

如控制器方法：`app\controller\api\wechat_pay\Index::orderPaid()`

未使用路由中间件指定模块的情况下：

+ 逻辑层：`huike\default_module\logic\controller\api\wechat_pay\Index::orderPaid()`
+ 验证器：`huike\default_module\validate\api\wechat_pay\index\OrderPaid`
+ 服务层：`huike\default_module\service\api\wechat_pay\IndexService`，也可手动指定

路由中间件指定模块为`api`的情况下：

+ 逻辑层：`huike\api\logic\controller\wechat_pay\Index::orderPaid()`
+ 验证器：`huike\api\validate\wechat_pay\index\OrderPaid`
+ 服务层：`huike\api\service\wechat_pay\IndexService`，也可手动指定

