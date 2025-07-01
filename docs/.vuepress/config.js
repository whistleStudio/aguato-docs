import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { slimsearchPlugin } from '@vuepress/plugin-slimsearch'
/* 
		<meta http-equiv="Pragma" content="no-cache" />
		<meta http-equiv="Cache-Control" content="no-cache" />
		<meta http-equiv="Expires" content="0" />
*/
export default defineUserConfig({
  bundler: viteBundler(),
  title: "阿瓜物联使用文档",
  head: [
    ["meta", {"http-equiv": "Pragma", content: "no-cache"}],
    ["meta", {"http-equiv": "Cache-Control", content: "no-cache"}],
    ["meta", {"http-equiv": "Expires", content: "0"}]
  ],
  theme: defaultTheme({
    home: "/introduction.md",
    logo: "/images/aguato.png",
    logoAlt: "[当前网络不佳]",
    contributors: "Whistle Wang",

    sidebar: [
      {text: "简介", link: "/introduction.md"},
      {text: "安装", link: "/installation.md"},
      {
        text: "使用",
        link: "/usage/service.md",
        collapsible: true,
        children: [
          {text: "物联服务的建立", link: "/usage/service.md"},
          {text: "物联服务的连接", link: "/usage/connect.md"},
          {text: "发布和订阅", link: "/usage/behavior.md"},
          {text: "可视化图表面板", link: "/usage/chart.md"},
        ]
      },
      {text: "随便写点", link: "/about.md"},
      // {text: "使用", link: "/usage.md"},
      // {
      //   text: "准备工作",
      //   link: "/getting-started/快速索引.md",
      //   children: [
      //     {text: "快速索引", link: "/getting-started/快速索引.md"},
      //     {text: "创趣星盒", link: "/getting-started/创趣星盒.md"},
      //     {text: "编程星空软件", link: "/getting-started/编程星空软件.md"},
      //     {text: "注意事项", link: "/getting-started/注意事项.md"},
      //   ]
      // }
    ],
    sidebarDepth: 1
  }),

  base: "/essay/App/aguato-docs/",

  plugins: [
    slimsearchPlugin({
      indexContent: true,
    }),
    backToTopPlugin()
  ],
})