---
title: 开发环境
order: 1
toc: menu
---

## 介绍

开发环境对于一个开发者至关重要。个人一般会搭建两套开发环境，`windows`和`linux`各一套。

## 电脑配置

我目前的电脑配置如下，对于开发人员来说，内存最低应该是`16G`。特别推荐这款显示器，价格不高，用起来也比较舒服。

- CPU： i7-7700
- 内存： 24G
- 显示器：BenQ BL2480T 23.8寸 * 2

## IDE

- `JetBrains`全家桶

## Win开发环境

- WampServer 3.2 +
- PHP：7.3.*
- Mysql：5.7.*
- Apache：2.4.*

## Linux开发环境

- 系统：Ubuntu 20.04
- PHP：7.4.*
- Mysql：5.7.*
- Nginx：1.18.*

`linux`系统是通过`Vmware`免费版搭建的，这个比较关键。

开发环境使用 [lnmp.org](http://lnmp.org) 集成环境安装，这套环境值得安利一下。


## 骚操作

### 使用docker安装redis等

使用`docker`来安装不同版本的各种服务非常方便，在任何环境下，通过内外IP即可实现直连。

### 共享win目录

通过`Vmware`我们可以将windows下的目录挂在到`ubuntu`上，这样我们在`windows`下写代码的代码可以直接在linux上测试运行。

## 常用软件

- ssh客户端：putty免费版
- mysql管理：Navicat
- FTP工具：WinSCP
- Git GUI：Sourcetree
- 接口管理工具：Eolinker
