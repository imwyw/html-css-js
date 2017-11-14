<!-- TOC -->

- [HTML](#html)
    - [什么是HTML](#什么是html)
    - [HTML5诞生](#html5诞生)
    - [Hello World](#hello-world)

<!-- /TOC -->
<a id="markdown-html" name="html"></a>
# HTML
<a id="markdown-什么是html" name="什么是html"></a>
## 什么是HTML
- HTML 指的是超文本标记语言 (Hyper Text Markup Language)
- HTML 不是一种编程语言，而是一种标记语言 (markup language)
- 标记语言是一套标记标签 (markup tag)
- HTML 使用标记标签来描述网页
- 运行在浏览器，由浏览器进行解析

<a id="markdown-html5诞生" name="html5诞生"></a>
## HTML5诞生
一个典型的WEB页面包含头部、脚部、导航、中心区域、侧边栏。如果我们想在HTML4的页面中呈现这些内容，可能要使用DIV标签。但在HTML5中，通过为这些区域创建元素名称（如下图），使他们更加清晰，也使得HTML更加可读性。

![](..\assets\HTML\h4-h5.png)

<a id="markdown-hello-world" name="hello-world"></a>
## Hello World
新建文本，修改扩展名为html，代码如下：
``` html
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <title>Hello World</title>
    </head>
    <body>
        Hello World!
    </body>
</html>
```