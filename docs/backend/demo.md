---
title: 示例模块
order: 4
toc: menu
---
## 逻辑分层

在逻辑分层中，我们以逻辑方法`app\controller\api\wechat_pay\Index::orderPaid()`举例：

> 未使用路由中间件指定模块的情况下：

+ 控制器层：`app\controller\api\wechat_pay\Index::orderPaid()`
+ 逻辑方法：`huike\default_module\logic\controller\api\wechat_pay\Index::orderPaid()`
+ 自动验证：`huike\default_module\validate\api\wechat_pay\index\OrderPaid`
+ 服务工厂：`huike\default_module\service\api\wechat_pay\IndexService`
+ 服务门面：`huike\default_module\service\api\wechat_pay\facede\IndexService`
+ 服务Handler：`huike\default_module\service\api\wechat_pay\provider\OrderPaid`

> 路由中间件指定模块为`api`的情况下：

+ 控制器层：`app\controller\api\wechat_pay\Index::orderPaid()`
+ 逻辑方法：`huike\api\logic\controller\wechat_pay\Index::orderPaid()`
+ 自动验证：`huike\api\validate\wechat_pay\index\OrderPaid`
+ 服务工厂：`huike\api\service\wechat_pay\IndexService`
+ 服务门面：`huike\api\service\wechat_pay\facede\IndexService`
+ 服务Handler：`huike\api\service\wechat_pay\provider\OrderPaid`

**若未使用开发辅助的情况下，各个分层的创建和方法的追加会非常繁琐。所以我推荐使用[开发辅助后台](/dev_admin) 来减少机械性的工作，并严格按照逻辑分层的架构来开发项目。**

## 示例模块

### 控制器
在安装完成后，项目会自动生成一个示例模块，示例模块的控制器路径为：

`<ROOT_PATH>/app/controller/huike_module/index/Index.php`

### 模块目录
模块的逻辑目录为：

<Tree title="huike">
  <ul>
    <li>
      huike_module
      <ul>
        <li>
          logic
          <ul>
            <li>
              controller
              <ul>
                <li>
                  index
                  <ul>
                    <li>
                      Index.php
                      <small>逻辑控制器</small>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          service
          <ul>
            <li>
              index
              <ul>
                <li>
                  facade
                  <ul>
                    <li>
                      IndexService.php
                      <small>服务门面</small>
                    </li>
                  </ul>
                </li>
                <li>
                  provider
                  <ul>
                    <li>
                      Html.php
                      <small>html方法的服务层逻辑</small>
                    </li>
                    <li>
                      Index.php
                      <small>index方法的服务层逻辑</small>
                    </li>
                    <li>
                      Validate.php
                      <small>validate方法的服务层逻辑</small>
                    </li>
                  </ul>
                </li>
                <li>
                  IndexService.php
                  <small>服务工厂类</small>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          validate
          <ul>
            <li>
              index
              <ul>
                <li>
                  index
                  <ul>
                    <li>
                      Validate.php
                      <small>validate方法的验证器</small>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          route.php
          <small>示例模块的路由配置信息</small>
        </li>
        </li>
      </ul>
    </li>
  </ul>
</Tree>


### 访问测试

+ yourdomain.com/huike
+ yourdomain.com/huike/validate
+ yourdomain.com/huike/validate?test=huikedev
+ yourdomain.com/huike/html

<Alert type="error">
访问以上四个url会有各自不同的返回
</Alert>
