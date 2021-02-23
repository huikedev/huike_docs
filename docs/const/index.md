---
title: 介绍
order: 1
toc: menu
nav:
  title: 系统常量
  order: 3
---

## 介绍
系统内置了众多常量用于系统逻辑。常量的设置可以减少逻辑代码中非表意参数的使用。如：

```php
// 直接使用数值
$noticeType = 8;
// 使用常量替代数值
$noticeType = NoticeType::DIALOG_ERROR;
```

以上同样作用的代码中，**使用常量替代非表意参数**能让代码的可读性更强。同时，修改逻辑也更加简单，只需要修改常量的赋值即可。
