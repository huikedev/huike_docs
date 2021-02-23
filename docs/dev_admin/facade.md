---
title: 门面管理
order: 7
toc: menu
---

## 功能介绍

门面管理提供门面生成、门面刷新的功能，主要是为了提供`Facade`以及门面IDE提示。

门面注解最大的作用是提供IDE代码提示，对于实际逻辑并没有任何作用。

## 生成门面

门面生成会自动获取动态类以及动态类父级的所有的`public`方法并生成注解。

### 动态对象

即门面类中的动态类对象。

### 门面名称

方便前端展示与管理使用。

### 门面类名

默认情况下，门面会生成在动态类所在目录的`facade`目录下，类名与动态类类名一致。如`huikedev\dev_admin\common\caching\provider\user\DeveloperCache`默认会生成的门面类名为`huikedev\dev_admin\common\caching\provider\user\facade\DeveloperCache`。

若需要生成其他类名，可手动输入。如`huikedev\dev_admin\common\caching\facade\DeveloperCache`

### 门面路径

门面类的物理路径与命名空间保持一致的情况下，无需填写。若是进行`composer library`开发时，可能会出现物理路径与命名空间不一致，这种情况下，需要填写门面路径，如`huikedev\dev_admin\src\common\caching\facade`或`huikedev\dev_admin\src\common\caching\facade\DeveloperCache.php`

## 门面更新

若动态类中的`public`方法发生了修改，可以通过更新门面来重新生成门面来获取最新的门面注解。
