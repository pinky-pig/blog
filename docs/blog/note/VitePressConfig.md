# 五分钟了解 VitePress 配置

::: tip
Arvin blog: https://pinky-pig.github.io/blog/
VitePress: https://vitepress.vuejs.org/  
VitePress plugins: https://vuepress.vuejs.org/zh/plugin/
Algolia: https://docsearch.algolia.com/apply/
- 知识点
  - defineConfig
  - theme config
  - algolia
:::

## 集成 Algolia 搜索
- 申请账号 `https://docsearch.algolia.com/apply/`
- 邮件回复确认后，会收到appID、appKey、indexName等
- 在config.js中进行如下配置就👌

```ts
themeConfig: {
  algolia: {
    appId: 'L9KM******',
    apiKey: 'ab27f8eec3147ace8f540b92********',
    indexName: 'pinky****',
  },
}
```
