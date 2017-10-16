<!-- TOC -->

- [布局](#布局)
    - [基本类型](#基本类型)
    - [Flow](#flow)
    - [Float](#float)
    - [层模型](#层模型)
        - [absolute](#absolute)
        - [relative](#relative)
        - [fixed](#fixed)

<!-- /TOC -->
# 布局

## 基本类型
1. 流动模型 Flow
2. 浮动模型 Float
3. 层模型 Layer

## Flow
流动模型是网页默认的布局模式，典型特征有：
1. 块状元素在容器内自上而下的按顺序分布，块状元素默认都占据一行，默认宽度为100%；
2. 内联元素在行内从左到右按顺序分布，内联元素不会占据一行，不到南墙不换行。

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

## 层模型
将元素理解成层的概念，类似于ps中的图层，定位层与层之间的位置。

层模型有三种形式：
1. 绝对定位(position: absolute)
2. 相对定位(position: relative)
3. 固定定位(position: fixed)

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