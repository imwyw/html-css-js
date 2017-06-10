# 结构
## 声明
<!DOCTYPE>声明有助于浏览器中正确显示网页。
网络上有很多不同的文件，如果能够正确声明HTML的版本，浏览器就能正确显示网页内容。
``` html
<!--H5文档头-->
<!DOCTYPE html>

<!--H4文档头-->
<!DOCTYPE HTML PUBLIC
"-//W3C//DTD HTML 4.01//EN"
"http://www.w3.org/TR/html4/strict.dtd">

```


## 结构
HTML有自己固定的结构：
``` html
<html>
    <head>...</head>
    <!--body里的内容才会显示在页面-->
    <body>...</body>
</html>
```

1. &lt;html&gt; 称为根标签，所有的网页标签都在<html></html>中。

2. &lt;head&gt; 标签用于定义文档的头部，它是所有头部元素的容器。头部元素有title、script、style、link、meta等标签。

3. 在&lt;body&gt;标签之间的内容是网页的主要内容，如nav、div、form、img等网页内容标签，在这里的标签中的内容会在浏览器中显示出来。

``` html
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <title>文档结构</title>
    </head>
    <body>
        <header></header>
        <nav></nav>
        ......
    </body>
</html>
```

## head标签
文档的头部描述了文档的各种属性和信息，包括文档的标题等。绝大多数文档头部包含的数据都不会真正作为内容显示给读者。
- title (`<title>标题</title>`)
- meta (`<meta http-equiv="Content-Type" content="text/html; charset=utf-8">`)
- link (`<link rel="stylesheet" type="text/css" href="theme.css" /> `)
- style (`<style></style>`)
- script (`<script></script>`)

