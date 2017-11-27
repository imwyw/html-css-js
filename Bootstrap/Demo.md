<!-- TOC -->

- [示例](#示例)
    - [Button](#button)
        - [Basic example](#basic-example)
        - [Button dropdowns](#button-dropdowns)
    - [Tables](#tables)
        - [Basic example](#basic-example-1)
    - [Forms](#forms)
        - [Basic example](#basic-example-2)
    - [辅助类](#辅助类)
        - [排版](#排版)
        - [文本](#文本)
        - [背景](#背景)
        - [其他](#其他)
    - [Grid system栅格系统](#grid-system栅格系统)
        - [Glyphicons 字体图标](#glyphicons-字体图标)

<!-- /TOC -->
<a id="markdown-示例" name="示例"></a>
# 示例
<a id="markdown-button" name="button"></a>
## Button

<a id="markdown-basic-example" name="basic-example"></a>
### Basic example
下样式可用于`<a>, <button>, 或 <input> `元素上：

类 | 描述
--|---
.btn | 为按钮添加基本样式 
.btn-default | 默认/标准按钮 
.btn-primary | 原始按钮样式（未被操作）
.btn-success | 表示成功的动作 
.btn-info | 该样式可用于要弹出信息的按钮 
.btn-warning | 表示需要谨慎操作的按钮 
.btn-danger | 表示一个危险动作的按钮操作 
.btn-link | 让按钮看起来像个链接 (仍然保留按钮行为) 
.btn-lg | 制作一个大按钮 
.btn-sm | 制作一个小按钮 
.btn-xs | 制作一个超小按钮 
.btn-block | 块级按钮(拉伸至父元素100%的宽度) 
.active | 按钮被点击 
.disabled | 禁用按钮 

```html
<!-- 标准的按钮 -->
<button type="button" class="btn btn-default">默认按钮</button>

<!-- 提供额外的视觉效果，标识一组按钮中的原始动作 -->
<button type="button" class="btn btn-primary">原始按钮</button>

<!-- 表示一个成功的或积极的动作 -->
<button type="button" class="btn btn-success">成功按钮</button>

<!-- 信息警告消息的上下文按钮 -->
<button type="button" class="btn btn-info">信息按钮</button>

<!-- 表示应谨慎采取的动作 -->
<button type="button" class="btn btn-warning">警告按钮</button>

<!-- 表示一个危险的或潜在的负面动作 -->
<button type="button" class="btn btn-danger">危险按钮</button>

<!-- 并不强调是一个按钮，看起来像一个链接，但同时保持按钮的行为 -->
<button type="button" class="btn btn-link">链接按钮</button>
```

- 按钮大小

Class | 描述
------|---
.btn-lg | 这会让按钮看起来比较大。 
.btn-sm | 这会让按钮看起来比较小。 
.btn-xs | 这会让按钮看起来特别小。 
.btn-block | 这会创建块级的按钮，会横跨父元素的全部宽度。 

- 按钮状态

元素 | Class
---|------
激活按钮元素 | 添加 .active class 来显示它是激活的。 
激活锚元素 | 添加 .active class 到 `<a>` 按钮来显示它是激活的。 
禁用按钮元素 | 添加 disabled 属性 到 `<button>` 按钮。
禁用锚元素 | 添加 disabled class 到 `<a>` 按钮。注意：该 class 只会改变 `<a>` 的外观，不会改变它的功能。在这里，您需要使用自定义的 JavaScript 来禁用链接。 

```html
<!-- 原始按钮 -->
<button type="button" class="btn btn-primary">原始按钮</button>

<!--激活的按钮，即按钮点击时的样式-->
<button type="button" class="btn btn-primary active">激活的按钮</button>
<!--按钮禁用的状态，但事件的触发还需要人工进行禁用，添加样式并不会阻止事件的触发-->
<button type="button" class="btn btn-primary disabled" id="btnDis">禁用的按钮</button>

<script>
    $('#btnDis').click(function () {
        alert();
    });
</script>
```

<a id="markdown-button-dropdowns" name="button-dropdowns"></a>
### Button dropdowns
如需向按钮添加下拉菜单，只需要简单地在在一个 .btn-group 中放置按钮和下拉菜单即可。

```html
<!-- Single button -->
<div class="btn-group">
    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
        Action <span class="caret"></span>
    </button>
    <ul class="dropdown-menu">
        <li><a href="#">Action</a></li>
        <li><a href="#">Another action</a></li>
        <li><a href="#">Something else here</a></li>
        <!--分割线-->
        <li role="separator" class="divider"></li>
        <li><a href="#">Separated link</a></li>
    </ul>
</div>
```

<a id="markdown-tables" name="tables"></a>
## Tables

<a id="markdown-basic-example-1" name="basic-example-1"></a>
### Basic example
```html
<table class="table">
    <caption>基本的表格布局</caption>
    <thead>
        <tr>
            <th>名称</th>
            <th>城市</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>安徽</td>
            <td>河南</td>
        </tr>
        <tr>
            <td>合肥</td>
            <td>郑州</td>
        </tr>
    </tbody>
</table>
```

表格中可以应用以下样式：

类 | 描述
--|---
.table | 为任意 `<table>` 添加基本样式 (只有横向分隔线) 
.table-striped | 在 `<tbody>` 内添加斑马线形式的条纹 ( IE8 不支持)
.table-bordered | 为所有表格的单元格添加边框
.table-hover | 在 `<tbody>` 内的任一行启用鼠标悬停状态
.table-condensed | 让表格更加紧凑

下表的类可用于表格的行或者单元格(`<tr>, <th> 和 <td>` )

类 | 描述
--|---
.active | 将悬停的颜色应用在行或者单元格上
.success | 表示成功的操作
.info | 表示信息变化的操作
.warning | 表示一个警告的操作
.danger | 表示一个危险的操作

<a id="markdown-forms" name="forms"></a>
## Forms
表单布局，提供了三种：
* 垂直表单(默认)
* 内联表单
* 水平表单

<a id="markdown-basic-example-2" name="basic-example-2"></a>
### Basic example
简单步骤：
1. `<form>`元素添加属性role="form";
2. 把标签和控件放在一个带有 class .form-group 的 `<div>` 中。这是获取最佳间距所必需的。
3. 向所有的文本元素 `<input>、<textarea> 和 <select>` 添加 class ="form-control" 。

```html
<!--垂直表单-->
<form role="form">
    <div class="form-group">
        <label for="txtEmail">Email address</label>
        <input type="email" class="form-control" id="txtEmail" placeholder="邮箱">
    </div>
    <div class="form-group">
        <label for="txtPwd">Password</label>
        <input type="password" class="form-control" id="txtPwd" placeholder="密码">
    </div>
    <div class="form-group">
        <label for="upload">File input</label>
        <input type="file" id="upload">
        <p class="help-block">Example block-level help text here.</p>
    </div>
    <div class="checkbox">
        <label>
            <input type="checkbox"> Check me out
        </label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
</form>
```
```html
<!--内联表单-->
<form class="form-inline" role="form">
    <div class="form-group">
        <!-- .sr-only 即screen reader(sr)，只针对屏幕阅读显示， 隐藏label标签-->
        <label class="sr-only" for="name">名称</label>
        <input type="text" class="form-control" id="name" placeholder="请输入名称">
    </div>
    <div class="form-group">
        <!-- .sr-only 即screen reader(sr)，只针对屏幕阅读显示， 隐藏label标签-->
        <label class="sr-only" for="inputfile">文件输入</label>
        <input type="file" id="inputfile">
    </div>
    <div class="checkbox">
        <label>
            <input type="checkbox">请打勾
        </label>
    </div>
    <button type="submit" class="btn btn-primary">提交</button>
</form>
```
```html
<!--水平表单-->
<form class="form-horizontal" role="form">
    <div class="form-group">
        <label for="firstname" class="col-sm-2 control-label">名字</label>
        <div class="col-sm-10">
            <input type="text" class="form-control" id="firstname" placeholder="请输入名字">
        </div>
    </div>
    <div class="form-group">
        <label for="lastname" class="col-sm-2 control-label">姓</label>
        <div class="col-sm-10">
            <input type="text" class="form-control" id="lastname" placeholder="请输入姓">
        </div>
    </div>
    <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
            <div class="checkbox">
                <label>
                    <input type="checkbox">请记住我
                </label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
            <button type="submit" class="btn btn-primary">登录</button>
        </div>
    </div>
</form>
```

<a id="markdown-辅助类" name="辅助类"></a>
## 辅助类

<a id="markdown-排版" name="排版"></a>
### 排版

类 | 描述
--|---
.lead | 使段落突出显示
.small | 设定小文本 (设置为父文本的 85% 大小)
.text-left | 设定文本左对齐
.text-center | 设定文本居中对齐
.text-right | 设定文本右对齐
.text-justify | 设定文本对齐,段落中超出屏幕部分文字自动换行
.text-nowrap | 段落中超出屏幕部分不换行
.text-lowercase | 设定文本小写
.text-uppercase | 设定文本大写
.text-capitalize | 设定单词首字母大写
.initialism | 显示在 `<abbr>` 元素中的文本以小号字体展示，且可以将小写字母转换为大写字母
.blockquote-reverse | 设定引用右对齐
.list-unstyled | 移除默认的列表样式，列表项中左对齐 ( `<ul> 和 <ol>` 中)。 这个类仅适用于直接子列表项 (如果需要移除嵌套的列表项，你需要在嵌套的列表中使用该样式)
.list-inline | 将所有列表项放置同一行
.dl-horizontal | 该类设置了浮动和偏移，应用于 `<dl> 元素和 <dt>` 元素中，具体实现可以查看实例
.pre-scrollable | 使 `<pre>` 元素可滚动，代码块区域最大高度为340px,一旦超出这个高度,就会在Y轴出现滚动条

<a id="markdown-文本" name="文本"></a>
### 文本
以下不同的类展示了不同的文本颜色。如果文本是个链接鼠标移动到文本上会变暗：
* .text-muted
* .text-primary
* .text-success
* .text-info
* .text-warning
* .text-danger

<a id="markdown-背景" name="背景"></a>
### 背景
以下不同的类展示了不同的背景颜色。 如果文本是个链接鼠标移动到文本上会变暗：
* .bg-primary
* .bg-success
* .bg-info	
* .bg-warning
* .bg-danger

<a id="markdown-其他" name="其他"></a>
### 其他

类 | 描述
--|---
.pull-left | 元素浮动到左边
.pull-right | 元素浮动到右边
.center-block | 设置元素为 display:block 并居中显示
.clearfix | 清除浮动
.show | 强制元素显示
.hidden | 强制元素隐藏
.sr-only | 除了屏幕阅读器外，其他设备上隐藏元素(screen reader)
.sr-only-focusable | 与 .sr-only 类结合使用，在元素获取焦点时显示(如：键盘操作的用户)
.text-hide | 将页面元素所包含的文本内容替换为背景图
.close | 显示关闭按钮
.caret | 显示下拉式功能

<a id="markdown-grid-system栅格系统" name="grid-system栅格系统"></a>
## Grid system栅格系统
栅格系统用于通过一系列的行（row）与列（column）的组合来创建页面布局，你的内容就可以放入这些创建好的布局中。下面就介绍一下 Bootstrap 栅格系统的工作原理：

* “行（row）”必须包含在 .container （固定宽度）或 .container-fluid （100% 宽度）中，以便为其赋予合适的排列（aligment）和内补（padding）。
* 通过“行（row）”在水平方向创建一组“列（column）”。
* 你的内容应当放置于“列（column）”内，并且，只有“列（column）”可以作为行（row）”的直接子元素。
* 类似 .row 和 .col-xs-4 这种预定义的类，可以用来快速创建栅格布局。Bootstrap 源码中定义的 mixin 也可以用来创建语义化的布局。
* 通过为“列（column）”设置 padding 属性，从而创建列与列之间的间隔（gutter）。通过为 .row 元素设置负值 margin 从而抵消掉为 .container 元素设置的 padding，也就间接为“行（row）”所包含的“列（column）”抵消掉了padding。
* 负值的 margin就是下面的示例为什么是向外突出的原因。在栅格列中的内容排成一行。
* 栅格系统中的列是通过指定1到12的值来表示其跨越的范围。例如，三个等宽的列可以使用三个 .col-xs-4 来创建。
* 如果一“行（row）”中包含了的“列（column）”大于 12，多余的“列（column）”所在的元素将被作为一个整体另起一行排列。
* 栅格类适用于与屏幕宽度大于或等于分界点大小的设备 ， 并且针对小屏幕设备覆盖栅格类。 因此，在元素上应用任何 .col-md-* 栅格类适用于与屏幕宽度大于或等于分界点大小的设备 ， 并且针对小屏幕设备覆盖栅格类。 因此，在元素上应用任何 .col-lg-* 不存在， 也影响大屏幕设备。

栅格参数：

-- |  超小屏幕 手机 (<768px) | 小屏幕 平板 (≥768px) | 中等屏幕 桌面显示器 (≥992px) | 大屏幕 大桌面显示器 (≥1200px)
-----------------|-----------------|---------------------|---------------------
栅格系统行为 | 总是水平排列 | 开始是堆叠在一起的，当大于这些阈值时将变为水平排列 | 开始是堆叠在一起的，当大于这些阈值时将变为水平排列 | 开始是堆叠在一起的，当大于这些阈值时将变为水平排列
.container 最大宽度 | None （自动） | 750px | 970px | 1170px
类前缀 | .col-xs- | .col-sm- | .col-md- | .col-lg-
列（column）数 | 12 | 12 | 12 | 12
最大列（column）宽 | 自动 | ~62px | ~81px | ~97px
槽（gutter）宽 | 30px （每列左右均有 15px） | 30px （每列左右均有 15px） | 30px （每列左右均有 15px） | 30px （每列左右均有 15px）
可嵌套 | 是 | 是 | 是 | 是
偏移（Offsets） | 是 | 是 | 是 | 是
列排序 | 是 | 是 | 是 | 是

```html
<style>
    div[class^='col-'] {
        background-color: aliceblue;
        line-height: 30px;
        border: 1px solid #808080;
    }
</style>
<div class="row">
    <div class="col-md-1">.col-md-1</div>
    <div class="col-md-1">.col-md-1</div>
    <div class="col-md-1">.col-md-1</div>
    <div class="col-md-1">.col-md-1</div>
    <div class="col-md-1">.col-md-1</div>
    <div class="col-md-1">.col-md-1</div>
    <div class="col-md-1">.col-md-1</div>
    <div class="col-md-1">.col-md-1</div>
    <div class="col-md-1">.col-md-1</div>
    <div class="col-md-1">.col-md-1</div>
    <div class="col-md-1">.col-md-1</div>
    <div class="col-md-1">.col-md-1</div>
</div>
<div class="row">
    <div class="col-md-8">.col-md-8</div>
    <div class="col-md-4">.col-md-4</div>
</div>
<div class="row">
    <div class="col-md-4">.col-md-4</div>
    <div class="col-md-4">.col-md-4</div>
    <div class="col-md-4">.col-md-4</div>
</div>
<div class="row">
    <div class="col-md-6">.col-md-6</div>
    <div class="col-md-6">.col-md-6</div>
</div>
```

<a id="markdown-glyphicons-字体图标" name="glyphicons-字体图标"></a>
### Glyphicons 字体图标
包括250多个来自 Glyphicon Halflings 的字体图标。Glyphicons Halflings 一般是收费的，但是他们的作者允许 Bootstrap 免费使用。为了表示感谢，希望你在使用时尽量为 Glyphicons 添加一个友情链接。

不随放大而失真。

官网上给出的图标列表：
> http://v3.bootcss.com/components/#glyphicons
> https://getbootstrap.com/docs/3.3/components/#glyphicons-glyphs

有两点需要特别注意：
1. 不要和其他组件混合使用，图标类不能和其它组件直接联合使用。它们不能在同一个元素上与其他类共同存在。应该创建一个嵌套的 `<span>` 标签，并将图标类应用到这个 `<span>` 标签上。
2. 只对内容为空的元素起作用，图标类只能应用在不包含任何文本内容或子元素的元素上。
```html
<button type="button" class="btn btn-default btn-sm">
    <span class="glyphicon glyphicon-qrcode"></span>
    二维码
</button>
<button type="button" class="btn btn-default btn-lg">
    <span class="glyphicon glyphicon-qrcode"></span>
    二维码
</button>
<button type="button" class="btn btn-default">
    <!--10em 10倍当前字体尺寸，图标需要放大设置font-size即可-->
    <span class="glyphicon glyphicon-qrcode" style="font-size:10em;"></span>
    二维码
</button>
```

除此，还有 [Font Awesome](http://www.bootcss.com/p/font-awesome/) 字体图标可和bootstrap搭配使用，有兴趣线下自行研究。
