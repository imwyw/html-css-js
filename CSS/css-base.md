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
