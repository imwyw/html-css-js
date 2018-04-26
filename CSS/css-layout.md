<!-- TOC -->

- [布局](#布局)
    - [基本类型](#基本类型)
    - [Flow](#flow)
    - [Float](#float)
    - [Position](#position)
        - [absolute](#absolute)
        - [relative](#relative)
        - [fixed](#fixed)
    - [Flex](#flex)
        - [弹性布局](#弹性布局)
        - [基本概念](#基本概念)
        - [容器的属性](#容器的属性)

<!-- /TOC -->
<a id="markdown-布局" name="布局"></a>
# 布局

<a id="markdown-基本类型" name="基本类型"></a>
## 基本类型
1. 流动模型 Flow
2. 浮动模型 Float
3. 层模型 Layer

<a id="markdown-flow" name="flow"></a>
## Flow
流动模型是网页默认的布局模式，典型特征有：
1. 块状元素在容器内自上而下的按顺序分布，块状元素默认都占据一行，默认宽度为100%；
2. 内联元素在行内从左到右按顺序分布，内联元素不会占据一行，不到南墙不换行。

<a id="markdown-float" name="float"></a>
## Float
难道两个div就不能和谐的在一行吗？

我们可以设置元素的浮动来实现div在同一行

``` html
<style>
    .div-float {
        width: 300px;
        height: 500px;
        float: left;
    }
</style>

<div class="div-float" id="div1">
    <h1>我是大娃</h1>
    <h2>我是二娃</h2>
    <h3>我是三娃</h3>
    <h4>我是四娃</h4>
    <h5>我是五娃</h5>
    <h6>我是六娃</h6>
</div>
<div class="div-float" id="div2">
    <ul>
        <li>桃子</li>
        <li>橘子</li>
    </ul>
</div>
```

设置两个div左右对齐呢？修改样式如下：

``` html
<style>
    .div-float {
        width: 300px;
        height: 500px;
    }
    #div1 {
        float: left;
    }
    #div2 {
        float: right;
    }
</style>
```

设置左右布局的结构，如下：
``` html
<style>
    header {
        height: 70px;
    }
    ul {
        float: left;
    }
    iframe {
        width: 600px;
        height: 400px;
        float: left;
    }
    footer {
        height: 50px;
    }
</style>
<body>
    <header>头部</header>
    <ul>
        <li><a href="" target="frmContent">菜单一</a></li>
        <li><a href="" target="frmContent">菜单二</a></li>
        <li><a href="" target="frmContent">菜单三</a></li>
    </ul>
    <iframe id="frmContent" name="frmContent" src="" frameborder="0"></iframe>
    <footer>底部</footer>
</body>
```
但是会有一个问题，底部的footer位置并不是在ul和iframe的下面。因为浮动的缘故，
body并没有被撑开。我们可以通过给footer标签增加clear属性设置不允许浮动元素,将浮动元素重新拉回文档中。

`footer{clear:both;}`

<a id="markdown-position" name="position"></a>
## Position
将元素理解成层的概念，类似于ps中的图层，定位层与层之间的位置。

定位方式 | 属性值 | 对应效果 | 标准文档流
-----|-----|------|------
静态定位 | Static | 没有定位，按照正常的形式展示 | 不脱离
相对定位 | Relative | 相对于自身原有位置进行偏移 | 不脱离
绝对定位 | Absolute | 相对于static定位以外的第一个父元素进行定位 | 脱离
绝对定位 | Fixed | 设定的目标位置不会随滚动条的滑动而改变 | 脱离

层模型有三种形式：
1. 绝对定位(position: absolute)
2. 相对定位(position: relative)
3. 固定定位(position: fixed)

<a id="markdown-absolute" name="absolute"></a>
### absolute
position:absolute，将元素从原先的文档流中独立出来，然后使用left、right、top、bottom属性相对于其最接近的一个具有定位属性的父包含块进行绝对定位。如果不存在这样的包含块，则相对于body元素，即相对于浏览器窗口。

对于前面Float浮动模型，两个div在同一行，也可以使用绝对定位的方式实现右对齐，如下示例：

``` html
<style>
    .div-float {
        width: 300px;
        height: 500px;
        float: left;
    }

    #divAbsolute {
        position: absolute;
        right: 0px;
    }
</style>

<div class="div-float">
    <h1>我是大娃</h1>
    <h2>我是二娃</h2>
    <h3>我是三娃</h3>
    <h4>我是四娃</h4>
    <h5>我是五娃</h5>
    <h6>我是六娃</h6>
</div>
<div class="div-float" id="divAbsolute">
    <ul>
        <li>桃子</li>
        <li>橘子</li>
    </ul>
</div>
```

<a id="markdown-relative" name="relative"></a>
### relative
position:relative，通过left、right、top、bottom属性确定元素在正常文档流中的偏移位置，相对定位完成的过程是首先按static(float)方式生成一个元素(并且元素像层一样浮动了起来)，然后相对于以前的位置移动，移动的方向和幅度由left、right、top、bottom属性确定，偏移前的位置保留不动。

``` html
<style>
    #divRelative {
        width: 300px;
        height: 300px;
        background-color: red;
        position: relative;
        left: 100px;
    }
</style>
<div id="divRelative"></div>
<span>偏移前的位置还保留不动，覆盖不了前面的div没有偏移前的位置</span>
```

<a id="markdown-fixed" name="fixed"></a>
### fixed
position:fixed，表示固定定位，与absolute类似，不同的是fixed相对于屏幕内的网页窗口，不会收滚动的影响。

``` html
<style>
    #divFixed {
        width: 200px;
        height: 100px;
        background-color: yellow;
        position: fixed;
        right: 0px;
        bottom: 0px;
    }
</style>

<div id="divFixed">
    <p>我是fixed，在浏览器窗口的右下角，不会动</p>
</div>
```

参考资料：

> http://zh.learnlayout.com/

<a id="markdown-flex" name="flex"></a>
## Flex
<a id="markdown-弹性布局" name="弹性布局"></a>
### 弹性布局
Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。

任何一个容器都可以指定为 Flex 布局。
```css
.box{
  display: flex;
}
```

行内元素也可以使用 Flex 布局。

```css
.box{
  display: inline-flex;
}
```

Webkit 内核的浏览器，必须加上-webkit前缀。

```css
.box{
  display: -webkit-flex; /* Safari */
  display: flex;
}
```

注意，设为 Flex 布局以后，子元素的float、clear和vertical-align属性将失效。

<a id="markdown-基本概念" name="基本概念"></a>
### 基本概念
采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称"项目"。

![](..\assets\CSS\flex-1.png)

容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做main start，结束位置叫做main end；交叉轴的开始位置叫做cross start，结束位置叫做cross end。

项目默认沿主轴排列。单个项目占据的主轴空间叫做main size，占据的交叉轴空间叫做cross size。

<a id="markdown-容器的属性" name="容器的属性"></a>
### 容器的属性


参考引用：

> http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html

> http://static.vgee.cn/static/index.html
