## 简介
- HTML 指的是超文本标记语言 (Hyper Text Markup Language)
- HTML 不是一种编程语言，而是一种标记语言 (markup language)
- 标记语言是一套标记标签 (markup tag)
- HTML 使用标记标签来描述网页

## HTML5/HTML4
### 文档头
``` html
<!--H5文档头-->
<!DOCTYPE html>

<!--H4文档头-->
<!DOCTYPE HTML PUBLIC
"-//W3C//DTD HTML 4.01//EN"
"http://www.w3.org/TR/html4/strict.dtd">

```

### HTML5诞生
一个典型的WEB页面包含头部、脚部、导航、中心区域、侧边栏。如果我们想在HTML4的页面中呈现这些内容，可能要使用DIV标签。但在HTML5中，通过为这些区域创建元素名称（如下图），使他们更加清晰，也使得HTML更加可读性。

![](/assets/HTML/h4-h5.png)

## 结构
``` html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>文档结构</title>
    </head>
    <body>
        <header></header>
        <nav></nav>
        ......
    </body>
</html>
```
