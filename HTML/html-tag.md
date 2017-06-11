# 语义化
## 什么是语义化
在HTML5出现前，满屏的div，不利于结构化。

语义化是指根据内容的结构化（内容语义化），选择合适的标签（代码语义化），便于开发者阅读和写出更优雅的代码的同时，让浏览器的爬虫和机器很好的解析。

## 好处
- 有利于SEO(Search Engine Optimization)，有助于爬虫抓取更多的有效信息，爬虫是依赖于标签来确定上下文和各个关键字的权重。
- 语义化的HTML在没有CSS的情况下也能呈现较好的内容结构与代码结构
- 方便其他设备的解析
- 便于团队开发和维护

# HTML TAG（标签）
## 标签tag
- HTML 标签是由尖括号包围的关键词，比如 `<html>`
- HTML 标签通常是成对出现的，比如 `<body> 和 </body>`
- 标签对中的第一个标签是开始标签，第二个标签是结束标签
- 开始和结束标签也被称为开放标签和闭合标签

## 元素element
从开始标签到结束标签的所有代码。

## 标题h1-h6
``` html
<h1>大娃</h1>
<h2>二娃</h2>
<h3>三娃</h3>
<h4>四娃</h4>
<h5>五娃</h5>
<h6>六娃</h6>
```

## 段落p/换行br/空格nbsp
``` html
<p>我是段落一，段落前后会自动添加"空行"</p>
<p>我是段落二</p>
```

**特别强调**

``` html
<p>
    静夜思
    床前明月光，疑似地上霜。
    举头望明月，低头思故乡。
</p>
```

对于 HTML，您无法通过在 HTML 代码中添加额外的空格或换行来改变输出的效果。
当显示页面时，浏览器会移除源代码中多余的空格和空行。

所有连续的空格或空行都会被算作一个空格。需要注意的是，
HTML 代码中的所有连续的空行（换行）也被显示为一个空格。

## 元素标注label/输入控件input
`<label>` 标签为 input 元素定义标注（标记）。
label 元素不会向用户呈现任何特殊效果。不过，它为鼠标用户改进了可用性。如果您在 label 元素内点击文本，就会触发此控件。就是说，当用户选择该标签时，浏览器就会自动将焦点转到和标签相关的表单控件上。
`<label>` 标签的 for 属性应当与相关元素的 id 属性相同。

``` html
<p>
    <label for="txtFruit">你最喜欢吃啥水果？</label>
    <input type="text" id="txtFruit" />
</p>
<p>
    <label for="txtRice">你最喜欢吃什么盖浇饭？</label>
    <input type="text" id="txtRice" />
</p>
```

## 多行文本textarea
`<textarea>` 标签定义多行的文本输入控件。
文本区中可容纳无限数量的文本，其中的文本的默认字体是等宽字体（通常是 Courier）。
可以通过 cols 和 rows 属性来规定 textarea 的尺寸，不过更好的办法是使用 CSS 的 height 和 width 属性。

``` html
<p>
    <label for="txtPoem">写首诗吧</label>
    <textarea id="txtPoem" cols="30" rows="5"></textarea>
</p>
```

## 无序ul/有序ol列表
``` html
<p>你爱吃什么水果？</p>
<ul>
    <li>桃子</li>
    <li>菠萝</li>
    <li>西瓜</li>
</ul>
<p>你最擅长什么？</p>
<ol>
    <li>西瓜</li>
    <li>桃子</li>
    <li>菠萝</li>
</ol>
```

## 选择列表select
``` html
<p>你爱吃什么水果？</p>
<select name="Fruit" id="selFruit">
    <option value="1">桃子</option>
    <option value="2">西瓜</option>
    <option value="3">菠萝</option>
    <option value="4">橙子</option>
    <option value="5">榴莲</option>
</select>
```

## div
可定义文档中的分区或节（division/section）。

标签可以把文档分割为独立的、不同的部分。它可以用作严格的组织工具，并且不使用任何格式与其关联。
如果用 id 或 class 来标记 <div>，那么该标签的作用会变得更加有效。

使用id属性为div提供唯一的名称，以便访问，注意id在同一页面内是唯一的，如身份证号，不可重复！

下面的代码相比较上面代码，在结构上要清晰，并且便于样式或者动作的操控。
``` html
<div id="eat">
    <p>你爱吃什么水果？</p>
    <ul>
        <li>桃子</li>
        <li>菠萝</li>
        <li>西瓜</li>
    </ul>
</div>

<div id="good-at">
    <p>你最擅长什么？</p>
    <ol>
        <li>睡觉</li>
        <li>吃</li>
        <li>打游戏</li>
        <li>学习</li>
    </ol>
</div>

```

## 超链接a
标签定义超链接，用于从一张页面链接到另一张页面。

属性href：链接的目标。

属性target：规定在何处打开链接文档。常用的有_self,_blank

``` html
<p>你知道哪些搜索引擎？</p>
<ul>
    <li>
        <a href="https://www.google.com">Google</a>
    </li>
    <li>
        <a href="https://www.baidu.com" target="_blank">百度</a>
    </li>
    <li>
        <a href="https://www.bing.com" target="_self">Bing</a>
    </li>
</ul>
```

## 图像img
两个必要属性：src和alt

属性|值|描述
----|--|----
src|url|规定显示图像的 URL。
alt|text|规定图像的替代文本。

## 表格table
- table 表格以`<table>`开始，`</table>`结束
- tr 表格行，几对tr代表有几行
- th 表格表头
- td 表格的单元格，tr中包含几对td，说明一行中有几列

成绩表

|班级|姓名|高数|数据结构|英语|计算机组成原理|
|---|-----|----|--------|----|--------------|
|1701|张三|88|88|88|88|
|1702|赵小二|99|99|99|99|

``` html
<table>
    <caption>成绩表</caption>
    <tr>
        <th>班级</th>
        <th>姓名</th>
        <th>高数</th>
        <th>数据结构</th>
        <th>英语</th>
        <th>计算机组成原理</th>
    </tr>
    <tr>
        <td>1701</td>
        <td>张三</td>
        <td>88</td>
        <td>88</td>
        <td>88</td>
        <td>88</td>
    </tr>
    <tr>
        <td>1701</td>
        <td>赵小二</td>
        <td>99</td>
        <td>99</td>
        <td>99</td>
        <td>99</td>
    </tr>
</table>
```

课程表

||周一|周二|周三|周四|周五
|---|---|---|---|---|---
|上午|高数|高数|高数|高数|高数
|下午|高数|高数|高数|高数|高数
|晚自习|高数|高数|高数|高数|高数

``` html
<table>
    <caption>课程表</caption>
    <tr>
        <th></th>
        <th>周一</th>
        <th>周二</th>
        <th>周三</th>
        <th>周四</th>
        <th>周五</th>
    </tr>
    <tr>
        <td colspan="6">上午</td>
    </tr>
    <tr>
        <td>第一节 8:00-9:30</td>
        <td>高数</td>
        <td>英语</td>
        <td>计算机导论</td>
        <td>数据结构</td>
        <td>高数</td>
    </tr>
    <tr>
        <td>第二节 9:50-11:20</td>
        <td>高数</td>
        <td>英语</td>
        <td>计算机导论</td>
        <td>数据结构</td>
        <td>高数</td>
    </tr>
    <tr>
        <td colspan="6">下午</td>
    </tr>
    <tr>
        <td>第一节 14:30-16:00</td>
        <td>高数</td>
        <td>英语</td>
        <td>计算机导论</td>
        <td>数据结构</td>
        <td>高数</td>
    </tr>
    <tr>
        <td>第二节 16:20-17:50</td>
        <td>高数</td>
        <td>英语</td>
        <td>计算机导论</td>
        <td>数据结构</td>
        <td>高数</td>
    </tr>
</table>
```

Table 表格在没有添加 css 样式之前，是没有边框的。肉眼看上去很迷糊

``` css
table tr td,th{
    border : 1px solid;
}
```

## 表单form
当我们在网页上进行登录、注册、查询、保存等操作的时候，需要将用户填入的数据传到服务器端，
这时候需要用到html表单form，借助form我们可以把浏览器端数据传到服务器端并实现页面的刷新。

**form的两个重要属性：**

action：规定当提交表单时向何处发送表单数据。

method：规定用于发送 form-data 的 HTTP 方法。get/post

``` html
<form id="loginForm" action="/UserMgr/LoginVerify" method="post">
    <label for="txtID">用户名：</label>
    <input type="text" id="txtID" />
    <br/>
    <label for="txtPassword">密码：</label>
    <input type="password" id="txtPassword" />
    <br/>
    <input type="submit" value="登录" />
</form>
```