<!-- TOC -->

- [基础](#基础)
    - [语法](#语法)
    - [选择器](#选择器)
        - [标签选择器](#标签选择器)
        - [类选择器](#类选择器)
        - [ID选择器](#id选择器)
        - [子选择器](#子选择器)
        - [后代选择器(空格)](#后代选择器空格)
        - [通用选择器](#通用选择器)
        - [伪类选择器](#伪类选择器)
        - [分组选择器](#分组选择器)
    - [样式优先级](#样式优先级)
        - [样式继承](#样式继承)

<!-- /TOC -->
<a id="markdown-基础" name="基础"></a>
# 基础

<a id="markdown-语法" name="语法"></a>
## 语法
由两部分构成：选择器，以及一条或多条声明。

简单的可以看成：
```css
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

<a id="markdown-选择器" name="选择器"></a>
## 选择器
<a id="markdown-标签选择器" name="标签选择器"></a>
### 标签选择器
根据html的标签名称进行选择，选择该页面所有该标签。

修改所有div内文字为红色：`div { color:red; }`

<a id="markdown-类选择器" name="类选择器"></a>
### 类选择器
根据html标签的class属性进行选择，选择所有该样式类的标签。
注意前面要加【.】号!

修改所有class名为iflytek-blue的元素的背景色为blue：
`.iflytek-blue { background-color : blue; }`

<a id="markdown-id选择器" name="id选择器"></a>
### ID选择器
根据html标签的id属性进行选择，选择id为该值的标签。
注意前面要加【#】号！

修改id为txtRemark文本框的宽度为300px：
`#txtRemark { width : 300px ;}`

<a id="markdown-子选择器" name="子选择器"></a>
### 子选择器
用于选择指定标签元素的第一代子元素，大于符号【>】

以下示例中仅子元素P显示为红色；

以下示例中span样式无效，因为不是第一代，已经隔代。
```html
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

<a id="markdown-后代选择器空格" name="后代选择器空格"></a>
### 后代选择器(空格)
用于选择指定标签元素下的后辈元素

基于【子选择器】示例中，子选择（>）修改为空格后，样式就都可以起作用了。

** `>`作用于元素的第一代后代，空格作用于元素的所有后代。 **

<a id="markdown-通用选择器" name="通用选择器"></a>
### 通用选择器
匹配所有的标签，使用*

修改页面中所有元素字体颜色为红色：
`* { color : red; }`

<a id="markdown-伪类选择器" name="伪类选择器"></a>
### 伪类选择器
名字很奇怪，它允许给html不存在的标签（标签的某种状态）设置样式，
比如说我们给html中一个标签元素的鼠标滑过的状态来设置字体颜色：

`a:hover{color:red;}`

<a id="markdown-分组选择器" name="分组选择器"></a>
### 分组选择器
当我们需要对多个标签设置同一个样式，可以使用逗号分隔进行分组使用

对h1，h3，h5标题的字体颜色修改：
`h1,h3,h5{ color:red; }`

<a id="markdown-样式优先级" name="样式优先级"></a>
## 样式优先级
当同一个 HTML 元素被不止一个样式定义时，会使用哪个样式呢？

一般而言，所有的样式会根据下面的规则层叠于一个新的虚拟样式表中，其中数字 4 拥有最高的优先权。
1. 浏览器缺省设置
2. 外部样式表,如`<head><link rel="stylesheet" type="text/css" href="my.css" /></head>`
3. 内部样式表(位于 <head> 标签内部),如`<head><style>div{width:100%;}</style></head>`
4. 内联样式(在 HTML 元素内部),如`<div style="width:100%;"></div>`

因此，内联样式(在 HTML 元素内部)拥有最高的优先权，这意味着它将优先于以下的样式声明：`<head>` 标签中的样式声明，外部样式表中的样式声明，或者浏览器中的样式声明(缺省值)。

**简而言之，就近原则！**

<a id="markdown-样式继承" name="样式继承"></a>
### 样式继承
所谓CSS的继承是指被包在内部的标签将拥有外部标签的样式性质。

具体可参考：
> http://www.cnphp.info/css-style-inheritance.html

