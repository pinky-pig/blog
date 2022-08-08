# svg animation

::: tip
学习svg基础： https://juejin.cn/post/7118985770408345630  
学习svg line 描边动画： https://css-tricks.com/svg-line-animation-works/  
学习svg path 路径动画： https://css-tricks.com/almanac/properties/o/offset-path/  
学习svg动画开发实战： https://www.notion.so/svganimation/SVG-cd1568c43a7d47dfa9979a5ddf807320   
GSAP官网： https://greensock.com/docs/  
Vivus官网： http://maxwellito.github.io/vivus/  
clip-path优秀公益网站：http://www.species-in-pieces.com/  
GSAP的变形动画插件MorphSVGPlugin：https://greensock.com/docs/v3/Plugins/MorphSVGPlugin  

- 知识点
  - 描边动画
  - 路径动画
  - 变形动画
  - 闪烁动画
  - 图案动画 
:::


## Stroke - 描边动画

### 1.stroke、stroke-dasharray、stroke-dashoffset

- stroke: 定义线条样式
- stroke-dasharray: 定义虚线，数值越大，线与间隔越大。只有一个值的时候，线的宽度与间隔的宽度都是这个值。有多个值的时候，先线的宽度，再间隔的宽度，以此循环： 虚线-间隔-虚线-间隔。比如：`stroke-dasharray:4;` ，线的宽度和间隔的宽度都是4。`stroke-dasharray:4 1 2 3 5;` ，线的宽度是4，间隔的宽度是1，线的宽度是2，间隔的宽度是3，线的宽度是5。间隔的宽度重头开始为4。
- stroke-dashoffset: 定义虚线的偏移值，只有虚线能看出效果，因为实线偏移之后，也会被后面的元素补上，所以看不出效果。需要跟dasharray搭配使用，这两个值只是设置stroke的样式，并不会改变svg元素的尺寸。

> 总之，stroke-dasharray和stroke-dashoffset组合使用构造出来的描边动画，其实就是先设置 dasharray 为线条长度。本来的 虚线-间隔-虚线-间隔，现在的虚线就是这个线条；再设置 dashoffset 为线条长度。这样，偏移值就是一个线条，本来第一个显示的线条就会刚好被隐藏。随着减小 dashoffset 的值，这个线条显示出来。再添加 animation，能构造出描边动画。

- 获取路径的长度
```js
var path = document.querySelector('.path');
var length = path.getTotalLength();
```
- 简单的stroke路径介绍
<iframe height="300" style="width: 100%;" scrolling="no" title="svg storke" src="https://codepen.io/pinky-pig/embed/preview/WNzyxdx?default-tab=html%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/pinky-pig/pen/WNzyxdx">
  svg storke</a> by pinky-pig (<a href="https://codepen.io/pinky-pig">@pinky-pig</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

- 简单的stroke-dasharray和stroke-dashoffset组合构建的描边动画
<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/pinky-pig/embed/preview/KKoegzZ?default-tab=html%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/pinky-pig/pen/KKoegzZ">
  Untitled</a> by pinky-pig (<a href="https://codepen.io/pinky-pig">@pinky-pig</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### 2.使用 GSAP 的 <a href ="https://greensock.com/docs/v3/Plugins/DrawSVGPlugin">DrawSVGPlugin</a> 实现 <a href ="http://maxwellito.github.io/vivus/">vivus</a> 的动画 

```js
var tl = gsap.timeline();
tl.from(".draw-me", {duration: 2, drawSVG: 0}, 0.1);
//now we can control it:
tl.pause();
tl.play();
tl.reverse();
tl.seek(0.5);
```

<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/pinky-pig/embed/preview/wvmXWLo?default-tab=html%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/pinky-pig/pen/wvmXWLo">
  Untitled</a> by pinky-pig (<a href="https://codepen.io/pinky-pig">@pinky-pig</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>


## Path - 路径动画

### offset-path、offset-distance、offset-anchor、offset-rotate

- offset-path： 接收一个path作为运动的路径。
- offset-distance：声明了元素沿着路径运动的距离，常用100%表示路径总长度。
- offset-path和offset-distance都是css的属性，且前身是`motion-*`，现在改名`offset-*`,在svg标签内也还是<a href ="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animateMotion">`<animateMotion>`</a>
- offset-anchor：锚点，默认是左上角与路径对齐
- offset-rotate：定义元素在路径上面向的方向

### 1.简单的offset-path、animateMotion和animateTransform动画
<iframe height="300" style="width: 100%;" scrolling="no" title="svg animateMotion和animateTransform动画" src="https://codepen.io/pinky-pig/embed/preview/NWYzjPL?default-tab=html%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/pinky-pig/pen/NWYzjPL">
  svg animateMotion和animateTransform动画</a> by pinky-pig (<a href="https://codepen.io/pinky-pig">@pinky-pig</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### 2.使用 GSAP 的 <a href ="https://greensock.com/docs/v3/Plugins/MotionPathPlugin">DrawSVGPlugin</a> 实现 <a href ="http://maxwellito.github.io/vivus/">vivus</a> 路径动画

<iframe height="300" style="width: 100%;" scrolling="no" title="SVG GSAP 路径动画" src="https://codepen.io/pinky-pig/embed/preview/ExERmyV?default-tab=html%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/pinky-pig/pen/ExERmyV">
  SVG GSAP 路径动画</a> by pinky-pig (<a href="https://codepen.io/pinky-pig">@pinky-pig</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>



## Morphing - 变形动画

### 使用 GSAP 的 <a href ="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/MorphSVGPlugin3.min.js">MotionPathPlugin</a> 实现 <a href ="http://maxwellito.github.io/vivus/">vivus</a> 变形动画。其中可以使用TweenMax补间动画

```js
<iframe height="300" style="width: 100%;" scrolling="no" title="SVG GSAP 变形动画" src="https://codepen.io/pinky-pig/embed/preview/LYdryJz?default-tab=html%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/pinky-pig/pen/LYdryJz">
  SVG GSAP 变形动画</a> by pinky-pig (<a href="https://codepen.io/pinky-pig">@pinky-pig</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
```

## Blink - 闪烁动画
|  Name   | duration |  repeat  |  delay  |  direction  | 
|  ----  | ----  |  ----  |  ----  |  ----  |  
|css|animation-duration|animation-iteration-count|animation-delay|animation-direction|
|SMIL|dur|repeatCount|begin|from,to|
|GSAP|duration|repeat|delay|yoyo|


## Pattern - 图案动画


