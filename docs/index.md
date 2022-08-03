---
layout: home

features:
  - icon: ⚡️
    title: Vue,Vite
    details: Lorem ipsum...
  - icon: 🏈
    title: Svg,Canvas
    details: Lorem ipsum...
  - icon: 💻
    title: ThreeJS, BabylonJS
    details: Lorem ipsum...
hero:
  name: ARVIN BLOG
  text: ''
  tagline: FrontEnd
  image:
    src: /logo.svg
    alt: VitePress
  actions:
    - theme: brand
      text: Get Started
      link: /about/
    - theme: alt
      text: View on GitHub
      link: https://github.com/pinky-pig
---


<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe, #41d1ff);
}
html.dark {
  /* nav logo 暗黑模式下的 svg 颜色变换 */
  --VPImage-logo-color-filter:drop-shadow(rgba(255, 255, 255, 0.87) 100px 0);
  --VPImage-logo-color-transform:translateX(-100px);
}
.VPImage{
  filter: var(--VPImage-logo-color-filter);
  transform: var(--VPImage-logo-color-transform);
}
</style>
