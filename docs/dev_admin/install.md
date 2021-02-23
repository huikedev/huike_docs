---
title: 安装和更新
order: 2
toc: menu
---
## 初始账号及密码

- 账号 huikedev
- 密码 huike.dev

## 后端安装

**安装前请保证数据库正常连接，开发辅助功能依赖数据库**

### 第一步：安装扩展

```bash
composer require huikedev/dev_admin
```

建议安装为dev依赖：

```bash
composer require huikedev/dev_admin --dev
```

### 第二步：执行安装命令

```bash
php think DevAdminInstall
```


## 前端安装
**前端项目依赖`node.js`环境，请提前安装配置`node.js`环境**
### 第一步：拉取代码

```bash
git clone https://github.com/huikedev/dev_admin_front.git
```

或

```bash
git clone https://gitee.com/huikedev/dev_admin_front.git
```

**此操作会创建一个项目目录**

### 第二步：安装前端依赖

```bash
cd dev_admin_front && npm install
# or
cd dev_admin_front && yarn
```

### 第三步：修改配置文件

找到`dev_admin_front\src\common\AppConfig.ts`文件，修改接口配置：

```typescript
export default class AppConfig{

  public static devHost='http://huike.local/'

  public static productionHost='https://dev.api.huike.dev/'

  public static tokenName = 'authorization';

  public static tokenCacheName = 'authorization'

  public static localStoragePrefix = 'huike_'

  public static version = '0.0.1-beta';

}
```

`devHost`为开发环境下的接口地址，即后端安装时绑定的主域名

`productionHost`为生产环境下的接口地址，此项目一般用不到

### 第四步：启动项目

```bash
npm start
# or
yarn start
```

在浏览器里打开 http://localhost:8000/ ，即可访问开发辅助后台


