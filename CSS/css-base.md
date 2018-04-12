<!-- TOC -->

- [基础](#基础)
    - [语法](#语法)
    - [选择器](#选择器)
        - [标签选择器](#标签选择器)
        - [类选择器](#类选择器)
        - [ID选择器](#id选择器)

<!-- /TOC -->
<a id="markdown-基础" name="基础"></a>
# 基础

<a id="markdown-语法" name="语法"></a>
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

