import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'HuikeDev',
  outputPath: 'docs-dist',
  mode: 'site',
  locales:[['zh-CN', '中文']],
  // more config: https://d.umijs.org/config
  exportStatic: {},
  navs: [
    null, // null 值代表保留约定式生成的导航，只做增量配置
    {
      title: '功能演示',
      path: 'https://demo.huike.dev',
    },
    {
      title: '仓库地址',
      // 可通过如下形式嵌套二级导航菜单，目前暂不支持更多层级嵌套：
      children: [
        {
          title: 'GitHub',
          path: 'https://github.com/huikedev',
        },
        {
          title: 'Gitee',
          path: 'https://gitee.com/huikedev',
        },
      ],
    },

  ],
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
      },
    ],
  ],
  styles:[
    'strong{\n' +
    '  background-color: yellow;\n' +
    '  padding: 2px 5px;\n' +
    '  font-weight: 600;\n' +
    '}'
  ]
});
