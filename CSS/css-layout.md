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
            - [flex-direction](#flex-direction)
            - [flex-wrap属性](#flex-wrap属性)
            - [flex-flow](#flex-flow)
            - [justify-content](#justify-content)
            - [align-items](#align-items)
            - [align-content](#align-content)
        - [项目的属性](#项目的属性)
            - [order](#order)
            - [flex-grow](#flex-grow)
            - [flex-shrink](#flex-shrink)
            - [flex-basis](#flex-basis)
            - [flex](#flex)
            - [align-self](#align-self)
    - [布局实例](#布局实例)
        - [基本网格布局](#基本网格布局)
        - [百分比网格](#百分比网格)
        - [圣杯布局](#圣杯布局)
        - [输入框的布局](#输入框的布局)
        - [固定底栏](#固定底栏)

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
position:fixed，表示固定定位，与absolute类似，不同的是fixed相对于屏幕内的网页窗口，不会受滚动的影响。

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

容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。

主轴的开始位置（与边框的交叉点）叫做main start，结束位置叫做main end；

交叉轴的开始位置叫做cross start，结束位置叫做cross end。

项目默认沿主轴排列。单个项目占据的主轴空间叫做main size，占据的交叉轴空间叫做cross size。

<a id="markdown-容器的属性" name="容器的属性"></a>
### 容器的属性
容器的六个属性：
* flex-direction
* flex-wrap
* flex-flow
* justify-content
* align-items
* align-content

<a id="markdown-flex-direction" name="flex-direction"></a>
#### flex-direction
flex-direction属性决定主轴的方向（即项目的排列方向）。

```css
.box {
  flex-direction: row | row-reverse | column | column-reverse;
}
```

* row（默认值）：主轴为水平方向，起点在左端。
* row-reverse：主轴为水平方向，起点在右端。
* column：主轴为垂直方向，起点在上沿。
* column-reverse：主轴为垂直方向，起点在下沿。

```html
<body>
	<style>
		div:not([class="box"]) {
			background-color: pink;
			width: 500px;
			height: 100px;
			margin: 5px;
		}

		div.box {
			display: flex;
			flex-direction: row;
		}
	</style>
	<div class="box">
		<div>div1</div>
		<div>div2</div>
		<div>div3</div>
		<div>div4</div>
		<div>div5</div>
		<div>div6</div>
		<div>div7</div>
		<div>div8</div>
	</div>
</body>
```

![](..\assets\CSS\flex-direc-row.png)

![](..\assets\CSS\flex-direc-all.png)

<a id="markdown-flex-wrap属性" name="flex-wrap属性"></a>
#### flex-wrap属性
默认情况下，项目都排在一条线（又称"轴线"）上。flex-wrap属性定义，如果一条轴线排不下，如何换行。

![](..\assets\CSS\flex-wrap-show.png)

```css
.box{
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```

* nowrap（默认）：不换行。

![](..\assets\CSS\flex-wrap-nowrap.png)


* wrap：换行，第一行在上方。

![](..\assets\CSS\flex-wrap-wrap.png)

* wrap-reverse：换行，第一行在下方。

![](..\assets\CSS\flex-wrap-wrap-reserve.png)

<a id="markdown-flex-flow" name="flex-flow"></a>
#### flex-flow
flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。

```css
.box {
  flex-flow: <flex-direction> || <flex-wrap>;
}

/* 例如 */
.box {
  flex-flow: row wrap;
}
```

<a id="markdown-justify-content" name="justify-content"></a>
#### justify-content
justify-content属性定义了项目在主轴上的对齐方式。

```css
.box {
  justify-content: flex-start | flex-end | center | space-between | space-around;
}
```

![](..\assets\CSS\justify-content.png)

* flex-start（默认值）：左对齐
* flex-end：右对齐
* center： 居中
* space-between：两端对齐，项目之间的间隔都相等。
* space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。

<a id="markdown-align-items" name="align-items"></a>
#### align-items
align-items属性定义项目在交叉轴上如何对齐。

```css
.box {
  align-items: flex-start | flex-end | center | baseline | stretch;
}
```

![](..\assets\CSS\align-items.png)

* flex-start：交叉轴的起点对齐。
* flex-end：交叉轴的终点对齐。
* center：交叉轴的中点对齐。
* baseline: 项目的第一行文字的基线对齐。
* stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。

<a id="markdown-align-content" name="align-content"></a>
#### align-content
align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。

```css
.box {
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
```

![](..\assets\CSS\align-content.png)

* flex-start：与交叉轴的起点对齐。
* flex-end：与交叉轴的终点对齐。
* center：与交叉轴的中点对齐。
* space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
* space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
* stretch（默认值）：轴线占满整个交叉轴。


<a id="markdown-项目的属性" name="项目的属性"></a>
### 项目的属性
* order
* flex-grow
* flex-shrink
* flex-basis
* flex
* align-self

<a id="markdown-order" name="order"></a>
#### order
order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。

```css
.item {
  order: <integer>;
}
```

![](..\assets\CSS\items-order.png)


<a id="markdown-flex-grow" name="flex-grow"></a>
#### flex-grow
flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。

```css
.item {
  flex-grow: <number>; /* default 0 */
}
```

![](..\assets\CSS\flex-grow.png)

如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。

如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。

<a id="markdown-flex-shrink" name="flex-shrink"></a>
#### flex-shrink
flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。

```css
.item {
  flex-shrink: <number>; /* default 1 */
}
```

![](..\assets\CSS\flex-shrink.jpg)


如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。

如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。

负值对该属性无效。

<a id="markdown-flex-basis" name="flex-basis"></a>
#### flex-basis

flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。

浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。

```css
.item {
  flex-basis: <length> | auto; /* default auto */
}
```

它可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间。

<a id="markdown-flex" name="flex"></a>
#### flex
flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。

```css
.item {
  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
}
```

该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。

建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。


<a id="markdown-align-self" name="align-self"></a>
#### align-self
align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。

默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。

```css
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```

![](..\assets\CSS\align-self.png)

<a id="markdown-布局实例" name="布局实例"></a>
## 布局实例

<a id="markdown-基本网格布局" name="基本网格布局"></a>
### 基本网格布局
最简单的网格布局，就是平均分布。在容器里面平均分配空间，跟上面的骰子布局很像，但是需要设置项目的自动缩放。

![](..\assets\CSS\flex-demo-grid.png)

```html
<body>
	<style>
		div.grid {
			display: flex;
		}

		.grid-cell {
            /* flex-grow, flex-shrink 和 flex-basis的简写 */
			flex: 1;
			height: 100px;
			background-color: skyblue;
			margin: 5px;
		}
	</style>
	<div class="grid">
		<div class="grid-cell"></div>
		<div class="grid-cell"></div>
	</div>
	<div class="grid">
		<div class="grid-cell"></div>
		<div class="grid-cell"></div>
		<div class="grid-cell"></div>
	</div>
	<div class="grid">
		<div class="grid-cell"></div>
		<div class="grid-cell"></div>
		<div class="grid-cell"></div>
		<div class="grid-cell"></div>
	</div>
	<div class="grid">
		<div class="grid-cell"></div>
	</div>
</body>
```

<a id="markdown-百分比网格" name="百分比网格"></a>
### 百分比网格
某个网格的宽度为固定的百分比，其余网格平均分配剩余的空间。

![](..\assets\CSS\flex-demo-grid-percent.png)

```html
<body>
	<style>
		div.grid {
			display: flex;
		}

		.grid-cell {
			flex: auto;
			height: 100px;
			background-color: skyblue;
			margin: 5px;
		}

		.grid-cell.c-1-3 {
			flex: 0 0 33.33%;
		}

		.grid-cell.c-1-2 {
			flex: 0 0 50%;
		}

		.grid-cell.c-1-4 {
			flex: 0 0 25%;
		}
	</style>
	<div class="grid">
		<div class="grid-cell"></div>
	</div>
	<div class="grid">
		<div class="grid-cell c-1-2"></div>
		<div class="grid-cell"></div>
		<div class="grid-cell"></div>
	</div>
	<div class="grid">
		<div class="grid-cell c-1-3"></div>
		<div class="grid-cell"></div>
	</div>
	<div class="grid">
		<div class="grid-cell c-1-4"></div>
		<div class="grid-cell"></div>
	</div>
</body>
```

<a id="markdown-圣杯布局" name="圣杯布局"></a>
### 圣杯布局
圣杯布局（Holy Grail Layout）指的是一种最常见的网站布局。

页面从上到下，分成三个部分：头部（header），躯干（body），尾部（footer）。

其中躯干又水平分成三栏，从左到右为：导航、主栏、副栏。

![](..\assets\CSS\flex-demo-holy.png)

```html
<body>
    <style>
        html,
        body {
            display: flex;
            flex-direction: column;
            min-height: 600px;
            /* 100% 屏幕高度，需要清除body margin值，否则会撑开滚动条 */
            height: 100vh;
            margin: 0;
            font-size: 28px;
            font-weight: bolder;
        }

        header,
        footer {
            height: 100px;
            background-color: #666;
            display: flex;
            justify-content: center;
            align-items: center;
            flex: none;
        }

        .content {
            /* 高度自适应 */
            flex: 1;
            display: flex;
        }

        nav,
        aside {
            background-color: #eb6f43;
            flex: 0 1 200px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        main {
            display: flex;
            justify-content: center;
            align-items: center;
            /* 宽度自适应 */
            flex: 1;
            background-color: #d6d6d6;
        }

        nav {
            /* 调整顺序在main前面 */
            order: -1;
        }
    </style>
    <header>
        header
    </header>
    <div class="content">
        <main>main</main>
        <nav>nav</nav>
        <aside>aside</aside>
    </div>
    <footer>
        footer
    </footer>
</body>
```

还有淘宝的双飞翼布局，有兴趣可以进行研究！

<a id="markdown-输入框的布局" name="输入框的布局"></a>
### 输入框的布局
我们常常需要在输入框的前方添加提示，后方添加按钮。

![](..\assets\CSS\flex-demo-输入框布局.png)

```html
<body>
    <style>
        .field-container{
            display: flex;
            width: 250px;
        }
        .add-field{
            flex:1;
        }
    </style>
    <div class="field-container">
        <span class="add-item">icon</span>
        <input type="text" class="add-field">
        <button class="add-item">查询</button>
    </div>
</body>
```

<a id="markdown-固定底栏" name="固定底栏"></a>
### 固定底栏
有时，页面内容太少，无法占满一屏的高度，底栏就会抬高到页面的中间。这时可以采用Flex布局，让底栏总是出现在页面的底部。

![](..\assets\CSS\flex-demo-固定底栏.png)

```html
<body>
    <style>
        body {
            margin: 0;
        }

        #cont {
            display: flex;
            flex-direction: column;
            /* 100% 屏幕高度，需要清除body margin值，否则会撑开滚动条 */
            min-height: 100vh;
        }

        main {
            flex: 1;
        }

        header,
        footer {
            background-color: lightblue;
            height: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 30px;
            font-weight: bold;
        }
    </style>
    <div id="cont">
        <header>header</header>
        <main></main>
        <footer>footer</footer>
    </div>
</body>
```

---

参考引用：

> http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html

> http://static.vgee.cn/static/index.html

> http://www.ruanyifeng.com/blog/2015/07/flex-examples.html
