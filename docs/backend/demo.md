---
title: 示例模块
order: 3
toc: menu
---

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

### 路由信息

<Alert type="error">
将 <span style="color: red;">huike/huike_module/route.php</span> 中的路由配置信息复制到 <span style="color: red;">routes/app.php</span> 中即可访问
</Alert>

### 访问测试

+ yourdomain.com/huike
+ yourdomain.com/huike/validate
+ yourdomain.com/huike/validate?test=huikedev
+ yourdomain.com/huike/html

<Alert type="error">
访问以上四个url会有各自不同的返回
</Alert>
