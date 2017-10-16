<!-- TOC -->

- [基础](#基础)
    - [语法](#语法)
    - [选择器](#选择器)
        - [标签选择器](#标签选择器)
        - [类选择器](#类选择器)
        - [ID选择器](#id选择器)
        - [子选择器(>)](#子选择器)
        - [后代选择器(空格)](#后代选择器空格)
        - [通用选择器](#通用选择器)
        - [伪类选择器](#伪类选择器)
        - [分组选择器](#分组选择器)
    - [样式继承](#样式继承)
    - [最高优先级Important](#最高优先级important)
- [盒子模型](#盒子模型)
    - [元素分类](#元素分类)
        - [块状元素](#块状元素)
        - [内联元素（行内元素）](#内联元素行内元素)
        - [内联块元素](#内联块元素)
    - [边框border](#边框border)
    - [内边距padding](#内边距padding)
    - [外边距margin](#外边距margin)
    - [宽度](#宽度)

<!-- /TOC -->
# 基础
## 语法
由两部分构成：选择器，以及一条或多条声明。

简单的可以看成：
``` css
选择器 {
    声明1;
    声明2;
    。。。
    声明N;
}
```

下面的示例中：

`h1 {color:red; font-size:14px;}`

![](../assets/CSS/css-declare.png)

## 选择器
### 标签选择器
根据html的标签名称进行选择，选择该页面所有该标签。

修改所有div内文字为红色：`div { color:red; }`

### 类选择器
根据html标签的class属性进行选择，选择所有该样式类的标签。
注意前面要加【.】号!

修改所有class名为iflytek-blue的元素的背景色为blue：
`.iflytek-blue { background-color : blue; }`

### ID选择器
根据html标签的id属性进行选择，选择id为该值的标签。
注意前面要加【#】号！

修改id为txtRemark文本框的宽度为300px：
`#txtRemark { width : 300px ;}`

### 子选择器(>)
用于选择指定标签元素的第一代子元素，大于符号【>】

以下示例中仅子元素P显示为红色；

以下示例中span样式无效，因为不是第一代，已经隔代。
``` html
<style type="text/css">
div>p {
    color: red;
}

ul>span {
    color: red;
}
</style>

<div>
    <p>子元素p</p>
    <span><p>后代元素p</p></span>
</div>
<ul>
    <li>桃子 <span>red</span> </li>
    <li>橘子 <span>red</span></li>
</ul>
```

### 后代选择器(空格)
用于选择指定标签元素下的后辈元素

基于【子选择器】示例中，子选择（>）修改为空格后，样式就都可以起作用了。

** `>`作用于元素的第一代后代，空格作用于元素的所有后代。 **

### 通用选择器
匹配所有的标签，使用*

修改页面中所有元素字体颜色为红色：
`* { color : red; }`

### 伪类选择器
名字很奇怪，它允许给html不存在的标签（标签的某种状态）设置样式，
比如说我们给html中一个标签元素的鼠标滑过的状态来设置字体颜色：

`a:hover{color:red;}`

### 分组选择器
当我们需要对多个标签设置同一个样式，可以使用逗号分隔进行分组使用

对h1，h3，h5标题的字体颜色修改：
`h1,h3,h5{ color:red; }`

## 样式继承

## 最高优先级Important

# 盒子模型
## 元素分类
### 块状元素
`display:block;`

**块级元素特点：**

1. 每个块级元素都从新的一行开始，并且其后的元素也另起一行。（真霸道，一个块级元素独占一行）
2. 元素的高度、宽度、行高以及顶和底边距都可设置。
3. 元素宽度在不设置的情况下，是它本身父容器的100%（和父元素的宽度一致），除非设定一个宽度。

常用的有：
`<div>、<p>、<h1>...<h6>、<ol>、<ul>、<dl>、<table>、<form>`

### 内联元素（行内元素）
`display:inline`

**内联元素特点：**
1. 和其他元素都在一行上；
2. 元素的高度、宽度及顶部和底部边距不可设置；
3. 元素的宽度就是它包含的文字或图片的宽度，不可改变。

常用的有：
`<a>、<span>、<br>、<label>`

### 内联块元素
`display:inline-block;`同时具备内联、块状元素特点。

**inline-block 元素特点：**
1. 和其他元素都在一行上；
2. 元素的高度、宽度、行高以及顶和底边距都可设置。

常用的有：
`<img>、<input>`

## 边框border
`border:1px solid red;`

等价于

``` style
<style>
    border-width:1px;
    border-style:solid;
    border-color:red;
</style>
```

其中border宽度也可以分开设置：
border-top，border-right，border-bottom，border-left

## 内边距padding
元素边框和内容的距离，记住设置的顺序！

`padding: 1px;`

`padding: 1px 10px;`

`padding: 1px 10px 20px 30px;`

## 外边距margin
元素之间的距离，也叫边界。
设置同padding

## 宽度
一个元素的宽度究竟该怎么计算？

对于下面的示例中#divBoxLeft元素的实际宽度为
500(width)+10x2(padding)+5x2(border) = 530
但是该元素实际占用宽度为530+50x2(margin) = 630
``` html
<style>
    #divBoxLeft {
        display: inline-block;
        width: 500px;
        height: 300px;
        border: 5px solid red;
        padding: 10px;
        margin: 50px;
    }
    
    #divSub {
        width: 100%;
        height: 100%;
        background-color: blue;
    }

    #divBoxRight {
        display: inline-block;
        width: 50px;
        height: 300px;
        background-color: black;
    }
</style>

<div id="divBoxLeft">
    <div id="divSub"></div>
</div>
<div id="divBoxRight"></div>
```

chrome调试工具提示我们该元素宽度为530px，并不表示该元素只占用了530px的宽度，
实际用截图工具量出的宽度为630px，如下图：

![](../assets/CSS/css-box-width.png)