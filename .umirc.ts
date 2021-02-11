import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'HuikeDev',
  favicon: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  locales:[['zh-CN', '中文']],
  // more config: https://d.umijs.org/config
  exportStatic: {},
  navs: [
    null, // null 值代表保留约定式生成的导航，只做增量配置
    {
      title: 'GitHub',
      path: 'https://github.com/huikedev/huike_base',
    },
    {
      title: 'Gitee',
      path: 'https://gitee.com/huikedev/huike_base',
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
});
