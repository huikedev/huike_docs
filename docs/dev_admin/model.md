---
title: 模型管理
order: 6
toc: menu
---
## 功能介绍

模型管理提供模型生成、数据库迁移/种子文件生成、模型注解更新等功能。

## 新建模型

### 关联模块
关联模块可以选择应用内模块和第三方模块。所有的应用内模块的模型都会存放在`huike\common\model`目录下， 第三方模块会存放在`<module_path>\common\model`下。

### 模块名称

模块名称为模型的类名，请按照**大驼峰命名风格**进行命名。若需要存放到多级目录下，可在模型名称填写`<dir_name>\ModelName`，使用`\`、`/`、`.`分隔均可。

### 模型基类

模型基类是所创建模型的父类，可以继承`ThinkPHP`、`HuikeDev`或第三方模块自定义的模型基类。

### 时间字段

**更新时间**、**创建时间**、**软删除时间**均使用统一的`unsigned int`类型，字段名为`ThinkPHP`默认设置

### 创建人

创建人字段为`int`类型，字段名为`creator_id`，在模型中可配合`huikedev\dev_admin\common\model_trait\CreatorTrait`使用，调用时使用`append(['creator'])`即可。

### JSON字段

实际上模型的`jsonAssoc`属性，开启后会将模型中设置的`json`数据返回数组，参考[JSON字段](https://www.kancloud.cn/manual/thinkphp6_0/1037587) 。

### 生成模型类

如果仅为添加数据库记录，去掉勾选即可。

## 添加字段

此功能实际上是通过数据库迁移生成迁移文件。添加字段提供了常见数据库字段的创建功能。

## 执行数据库迁移

在添加字段完毕后，可以通过执行数据库迁移将数据库迁移文件执行，生成对应的数据表。

## 表字段生成迁移文件

针对已经存在的数据表，该功能可以根据表字段信息生成数据库迁移文件。

## 表数据生成种子文件

针对已经存在数据的数据表，该功能可以将数据转换为`DB::insert`执行逻辑。若数据过多不建议使用此功能。

## 同步模型属性

该功能可以将模型中的属性同步到数据库中，目前来说除了展示之外没有太多的用途。

## 更新模型注解

该功能使用`yunwuxin/think-model-helper`来生成模型字段注解，可提供模型字段IDE箭头提示功能，如：

```php
// 方式一，实例化的方式可以直接获得IDE提示功能
$model = new HuikeModels();
$model->model_name = 'huike_models';

// 方式二，此时需要为变量提供类型注解才可获得IDE提示功能
/**
* @var HuikeModels $model
*/
$model = HuikeModels::where('id','=',1)->findOrEmpty();
```


