---
title: 项目架构
order: 7
toc: menu
---
## 请求流程
<Alert type="error">
可以通过AppResponse中的setXXX方法来讲请求转发到自定义的逻辑层或dispatch
</Alert>

对于现版本的请求流程，`ThinkPHP`的请求流程我们在此不做介绍，具体参见：[HTTP请求流程](https://www.kancloud.cn/manual/thinkphp6_0/1075414) ,我们从请求到达控制器开始介绍：
+ 控制器方法接收到路由请求信息后，会直接`return (new AppResponse())->render()`
+ 在`AppResponse`中，我们会根据控制器方法获取逻辑层方法，如`app\controller\admin\user\Login::index()`则默认必须有`huike\logic\controller\admin\user\Login::index()`与之对应
+ 通过`app()`助手函数执行逻辑层的`index`方法，实际原理是通过反射的方式执行
+ `huike\logic\controller\admin\user\Login`必须继承`BaseLogic`或使用`LogicTrait`
+ `huike\logic\controller\admin\user\Login::index()`必须`return $this`;
+ 在`AppResponse`中根据`LogicTrait::getReturnType()`获取响应类型，并将逻辑层对象注入对应的`dispatch`
+ 在对应的`dispatch`中根据自身的逻辑获取逻辑层的响应数据
+ 将响应数据返回到`ThinkPHP`的响应器，进入框架的响应流程


## 项目目录

<Alert type="error">
项目安装生成的文件可以根据项目需要进行修改，如果不需要可以在配置文件中关闭此项的系统服务注册
</Alert>


在项目安装完成后，系统将会创建一下目录和文件：

<Tree>
  <ul>
    <li>
      huike
      <ul>
        <li>
          command
          <small>CLI模式下自动加载的命令行类文件</small>
          <ul>
            <li>
            # YourCommand.php
            </li>
          </ul>
        </li>
        <li>
          common
          <small>全局使用的基础组件、服务、模型</small>
          <ul>
            <li>
              exception
                <ul>
                  <li>
                    HuikeExceptionHandle.php
                    <small>自定义异常接管类</small>
                  </li>
                </ul>
            </li>
            <li>
              init
                <ul>
                  <li>
                    HuikeConsole.php
                    <small>处理自动加载命令行的逻辑</small>
                  </li>
                  <li>
                    HuikeExtraValidate.php
                    <small>扩展的验证规则</small>
                  </li>
                  <li>
                    HuikePaginator.php
                    <small>重写的分页类，用于全局替换分页默认参数</small>
                  </li>
                  <li>
                    HuikeQuery.php
                    <small>指定查询对象，用于全局替换orm分页默认参数</small>
                  </li>
                </ul>
            </li>
            <li>
              middlewares
              <small>模块路由中间件存放的位置</small>
                <ul>
                  <li>
                    app
                      <ul>
                        <li>
                        GlobalBeforeMiddleware.php
                        <small>默认开启的全局中间件，用于处理跨域请求</small>
                        </li>
                      </ul>
                  </li>
                </ul>
            </li>
          </ul>
        </li>
        <li>
          lang
          <small>基础异常信息存放目录，支持多语言</small>
          <ul>
            <li>
              zh-cn
              <ul>
                <li>
                  exception.php
                  <small>基础异常信息配置文件</small>
                </li>
              </ul>
            </li>
          </ul>
        </li>
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
        <li>
          other_module
          <ul>
            <li>...</li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</Tree>


