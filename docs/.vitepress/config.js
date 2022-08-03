import { defineConfig } from "vitepress";
import blog from "./sidebar_conf/blog";
import project from "./sidebar_conf/project";

{/* <link rel="icon" href="/src/assets/image/logo.png" /> */}

export default defineConfig({
  base: '/blog/',
  appearance: true, // 是否启用黑暗模式
  title: 'Arvin Blog', // 所有文档的浏览器标签title
  description: '阿文的博客', // 会渲染成<meta>标签，SEO用
  head: [
    ['link', { rel: 'icon', href: '/man.svg', crossorigin: '' }]
  ],

  themeConfig: {
    siteTitle: 'Arvin Wang',
    logo: { light: '/man_light.svg', dark: '/man_dark.svg' },

    nav: [
      { text: 'About', link: '/about/', activeMatch: '/about/' },
      { text: 'Blog', link: '/blog/', activeMatch: '/blog/' },
      { text: 'Project', link: '/project/', activeMatch: '/project/' },
      {
        text: '🍌',
        items: [
          { text: 'Item A', link: '/item-1' },
          { text: 'Item B', link: '/item-2' },
          { text: 'Item C', link: '/item-3' }
        ]
      },

    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/pinky-pig' },
    ],

    sidebar: {
      '/blog/': blog,
      '/project/': project,
    },
    

  }
})
