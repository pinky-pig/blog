# 三分钟知道js中动态设置css变量的值

::: tip
vue官网: https://cn.vuejs.org/api/sfc-css-features.html#v-bind-in-css
- 知识点
  - vue3 -- v-bind 修改颜色变量
  - js获取dom，setProperty 
:::

修改css变量的值有很多种，这里介绍两种，一种是vue3种的<a href="https://cn.vuejs.org/api/sfc-css-features.html#v-bind-in-css">v-bind</a>语法，一种是获取dom修改css变量

## 1. Vue3 CSS 中的 v-bind()
```vue
<script setup>
const theme = {
  color: 'red'
}
</script>

<template>
  <p>hello</p>
</template>

<style scoped>
p {
  color: v-bind('theme.color');
}
</style>
```

## 2. js动态设置CSS变量

> css: stroke-dashoffset: var(--stroke-dashoffset);  
> js: line.style.setProperty('--stroke-dashoffset', value)

```html
<svg width="600" height="80" xmlns="http://www.w3.org/2000/svg" version="1.1">
  <line class="line" x1="0" x2="600" y1="0" y2="0" stroke="#4af" stroke-width="20" />
</svg>

<div class="range-container">
  <input class="range" type="range" min="0" max="200" value="200">
  <p>stroke-dasharray: 50</p>
  <p>stroke-dashoffset: <output name="result" class="result">0  </output></p>
</div>
```

```js
// 动态设置stroke-dashoffset
const line = document.querySelector('.line')
const range = document.querySelector('.range')
range.addEventListener('input', handleSlider)
function handleSlider (e) {
  let value = e.target.value
  line.style.setProperty('--stroke-dashoffset', value)
  document.querySelector('.result').innerHTML = value
}
```

```css
/* 使用css变量设置 */
.range-container {
  margin: 2rem auto 0;
  text-align: center;
}
.range {
  direction: rtl;
}
.line {
  --stroke-dashoffset: 0;
  stroke-dasharray: 50;
  stroke-dashoffset: var(--stroke-dashoffset);
}
```
