---
title: 跨域请求
order: 9
toc: menu
---

## 跨域问题

在前后端分离项目中，经常会碰到跨域问题。大多数情况下是因为请求头中携带了非默认的字段信息。本项目中可直接在`<ROOT_PATH>\config\huike.php`中进行设置。


## Headers设置

在配置文件`config\huike.php`中的`optionHeader`可以设置需要追加的`Access-Control-Allow-Headers`字段（token name字段不需要单独设置，会自动追加）。

## Origin设置

**debug模式下，此设置无效，默认为`*`方便调试**

在配置文件`config\huike.php`中的`optionOrigin`可以设置需要追加的`Access-Control-Allow-Origin`信息。


## Methods设置

**不建议修改此配置，修改后可能导致跨域设置无效**

在配置文件`config\huike.php`中的`optionMethods`可以设置需要追加的`Access-Control-Allow-Methods`信息。
