# 五分钟使用 VitePress 搭配 GitHub 构建个人博客

::: tip
VitePress: https://vitepress.vuejs.org/  
Arvin blog: https://pinky-pig.github.io/blog/
- 知识点
  - VitePress
  - GitHub 部署静态页面
:::

## 1.构建vitePress
_按照官网步骤走_

```bash
# 1. 创建文件夹
mkdir vitepress-starter && cd vitepress-starter 
# 2. 初始化
yarn init
# 3. 安装 VitePress
yarn add --dev vitepress vue
# 4. 创建 docs文件夹，并创建默认index.md文件，写入hello VitePress
mkdir docs && echo '# Hello VitePress' > docs/index.md
```
```json
// 5.在package.json写入npm命令。其中deploy是后面自动推送到GitHub上的bash脚本
{
  "name": "wblog",
  "version": "1.0.0",
  "main": "index.js",
  "author": "wwb",
  "license": "MIT",
  "scripts": {
    "deploy": "bash deploy.sh",
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:serve": "vitepress serve docs"
  },
  "devDependencies": {
    "vitepress": "^1.0.0-alpha.4",
    "vue": "^3.2.37"
  }
}
```
```bash
# 6. 将项目运行。以上就在本地构建好了VitePress项目。
yarn docs:dev
```


## 2.Github 部署文档
1. 新建 GitHub 仓库（步骤忽略）
2. 在本地项目中根目录新建 deploy.sh文件，并写入
```bash
#!/usr/bin/env sh

# 关于错误
set -e

# 打包VitePress项目
npm run docs:build

# 进入生成的文件夹目录
cd docs/.vitepress/dist

# 执行命令上传到GitHub仓库到 gh-pages 分支（代码在master分支，打包生成的静态页面在gh-pages分支）
git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/pinky-pig/blog.git master:gh-pages

# 返回目录，将刚才打包生成的静态文件在目录中删除
cd -
rm -rf docs/.vitepress/dist
```
3. 执行之前在package.json写入的deploy命令，运行这个脚本，最后上传成功就能部署站点了
```bash
npm run deploy
```

## 3. 将静态页面部署到GitHub站点
![20220804024543](https://cdn.jsdelivr.net/gh/pinky-pig/pic-bed/images20220804024543.png)

以上步骤，即五分钟使用 VitePress 和 GitHub 部署了一个博客站点。下一篇文章分享 VitePress 的配置，构造出美观的文档。

![20220804025526](https://cdn.jsdelivr.net/gh/pinky-pig/pic-bed/images20220804025526.png)
