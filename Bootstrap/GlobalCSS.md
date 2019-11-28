<!-- TOC -->

- [全局样式](#全局样式)
    - [移动设备优先](#移动设备优先)
    - [布局容器](#布局容器)
    - [栅格系统](#栅格系统)
    - [Tables](#tables)
        - [Basic example](#basic-example)
        - [响应式表格](#响应式表格)
    - [Forms](#forms)
        - [Basic example](#basic-example-1)
        - [被支持的控件](#被支持的控件)
            - [check和radio](#check和radio)
            - [禁用状态](#禁用状态)
            - [只读状态](#只读状态)
            - [校验状态](#校验状态)
            - [控件尺寸](#控件尺寸)
    - [Button](#button)
        - [Basic example](#basic-example-2)
        - [Button dropdowns](#button-dropdowns)
    - [辅助类](#辅助类)
        - [排版](#排版)
        - [文本](#文本)
        - [背景](#背景)
        - [其他](#其他)
    - [Glyphicons 字体图标](#glyphicons-字体图标)
    - [案例引用](#案例引用)
        - [23种Bootstrap导航菜单布局设计jQuery插件](#23种bootstrap导航菜单布局设计jquery插件)

<!-- /TOC -->
<a id="markdown-全局样式" name="全局样式"></a>
# 全局样式

<a id="markdown-移动设备优先" name="移动设备优先"></a>
## 移动设备优先
为了确保适当的绘制和触屏缩放，需要在 <head> 之中添加 viewport 元数据标签。

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

在移动设备浏览器上，通过为视口（viewport）设置 meta 属性为 user-scalable=no 可以禁用其缩放（zooming）功能。

这样禁用缩放功能后，用户只能滚动屏幕，就能让你的网站看上去更像原生应用的感觉。注意，这种方式我们并不推荐所有网站使用，还是要看你自己的情况而定！

```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
```

<a id="markdown-布局容器" name="布局容器"></a>
## 布局容器
Bootstrap 需要为页面内容和栅格系统包裹一个 .container 容器。

我们提供了两个作此用处的类。注意，由于 padding 等属性的原因，这两种 容器类不能互相嵌套。

.container 类用于固定宽度并支持响应式布局的容器，默认有左右内、外边距。

```html
<div class="container">
  ...
</div>
```

.container-fluid 类用于 100% 宽度，占据全部视口（viewport）的容器。
```html
<div class="container-fluid">
  ...
</div>
```

<a id="markdown-栅格系统" name="栅格系统"></a>
## 栅格系统
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

![](../assets/bootstrap/栅格参数.png)

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

<a id="markdown-tables" name="tables"></a>
## Tables

为任意 <table> 标签添加 .table 类可以为其赋予基本的样式 — 少量的内补（padding）和水平方向的分隔线。

这种方式看起来很多余！？但是我们觉得，表格元素使用的很广泛，如果我们为其赋予默认样式可能会影响例如日历和日期选择之类的插件，所以我们选择将此样式独立出来。

<a id="markdown-basic-example" name="basic-example"></a>
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
.table-hover | 在 `<tbody>` 内的任一行启用鼠标悬停状态，鼠标悬浮样式
.table-condensed | 让表格更加紧凑，行间距变小

下表的类可用于表格的行或者单元格(`<tr>, <th> 和 <td>` )

类 | 描述
--|---
.active | 将悬停的颜色应用在行或者单元格上
.success | 表示成功的操作
.info | 表示信息变化的操作
.warning | 表示一个警告的操作
.danger | 表示一个危险的操作

<a id="markdown-响应式表格" name="响应式表格"></a>
### 响应式表格
将任何 .table 元素包裹在 .table-responsive 元素内，即可创建响应式表格，其会在小屏幕设备上（小于768px）水平滚动。

当屏幕大于 768px 宽度时，水平滚动条消失。

```html
<div class="table-responsive">
  <table class="table">
    ...
  </table>
</div>
```

<a id="markdown-forms" name="forms"></a>
## Forms

单独的表单控件会被自动赋予一些全局样式。

所有设置了 .form-control 类的 `<input>、<textarea> 和 <select>` 元素都将被默认设置宽度属性为 width: 100%;。

将 label 元素和前面提到的控件包裹在 .form-group 中可以获得最好的排列。

表单布局，提供了三种：
* 垂直表单(默认) label/input上下分开
* 内联表单 全部都在一行，inline方式排列
* 水平表单 label/input左右分开

<a id="markdown-basic-example-1" name="basic-example-1"></a>
### Basic example
简单步骤：
1. 把标签和控件放在一个带有 class .form-group 的 `<div>` 中。这是获取最佳间距所必需的。
2. 向所有的文本元素 `<input>、<textarea> 和 <select>` 添加 class ="form-control" 。

```html
<!-- 垂直表单，不使用表单，用div也可以代替，但需要使用ajax进行数据提交 -->
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

<a id="markdown-被支持的控件" name="被支持的控件"></a>
### 被支持的控件

<a id="markdown-check和radio" name="check和radio"></a>
#### check和radio
多选框（checkbox）用于选择列表中的一个或多个选项，而单选框（radio）用于从多个选项中只选择一个。

默认外观，堆叠在一起
```html
<body>
    <div class="container">
        <!-- checkbox多选 -->
        <div class="form-group" id="checkPart">
            <label>喜欢什么水果？</label>
            <div>
                <!-- 默认外观（堆叠在一起） -->
                <div class="checkbox">
                    <label>
                        <input type="checkbox" id="chkBanana" value="banana">
                        香蕉
                    </label>
                </div>
                <div class="checkbox">
                    <label>
                        <input type="checkbox" id="chkApple" value="apple">
                        苹果
                    </label>
                </div>
                <div class="checkbox">
                    <label>
                        <input type="checkbox" id="chkOrangle" value="orangle">
                        橙子
                    </label>
                </div>
                <div class="checkbox disabled">
                    <label>
                        <input type="checkbox" id="chkPeach" value="peach" disabled>
                        桃子-被禁用
                    </label>
                </div>
            </div>
        </div>
        <!-- radio单选 -->
        <div class="form-group" id="radioPart">
            <label>选择性别：</label>
            <div class="radio">
                <label>
                    <input type="radio" name="radSex" value="male" checked="checked">男
                </label>
            </div>
            <div class="radio">
                <label>
                    <input type="radio" name="radSex" value="female">女
                </label>
            </div>
            <div class="radio disabled">
                <label>
                    <input type="radio" name="radSex" value="oth" disabled="disabled">其他
                </label>
            </div>
        </div>
        <div class="form-group">
            <button class="btn-primary" id="btnCheck">获取checked</button>
            <button class="btn-primary" id="btnRadio">获取Radio</button>
        </div>
    </div>
    <script>
        $('#btnCheck').on('click', function () {
            var arr = [];
            $('#checkPart input:checked').each(function (i, t) {
                arr.push($(t).val());
            });
            alert(arr.join(','));
        });
        $('#btnRadio').on('click', function () {
            alert($('#radioPart input:checked').val());
        });
    </script>
</body>
```

内联方式，即这些元素排列在一行：
```html
<body>
    <div class="container">
        <!-- checkbox多选 -->
        <div class="form-group" id="checkPart">
            <label>喜欢什么水果？</label>
            <div>
                <!-- 内联复选，排列在同一行 -->
                <label class="checkbox-inline">
                    <input type="checkbox" id="chkBanana" value="banana">
                    香蕉
                </label>
                <label class="checkbox-inline">
                    <input type="checkbox" id="chkApple" value="apple">
                    苹果
                </label>
                <label class="checkbox-inline">
                    <input type="checkbox" id="chkOrangle" value="orangle">
                    橙子
                </label>
                <label class="checkbox-inline disabled">
                    <input type="checkbox" id="chkPeach" value="peach" disabled>
                    桃子-被禁用
                </label>
            </div>
        </div>
        <!-- radio单选 -->
        <div class="form-group" id="radioPart">
            <label>选择性别：</label>
            <div>
                <!-- 内联单选，排列在一行 -->
                <label class="radio-inline">
                    <input type="radio" name="radSex" value="male" checked="checked">男
                </label>
                <label class="radio-inline">
                    <input type="radio" name="radSex" value="female">女
                </label>
                <label class="radio-inline disabled">
                    <input type="radio" name="radSex" value="oth" disabled="disabled">其他
                </label>
            </div>
        </div>
        <div class="form-group">
            <button class="btn-primary" id="btnCheck">获取checked</button>
            <button class="btn-primary" id="btnRadio">获取Radio</button>
        </div>
    </div>
    <script>
        $('#btnCheck').on('click', function () {
            var arr = [];
            $('#checkPart input:checked').each(function (i, t) {
                arr.push($(t).val());
            });
            alert(arr.join(','));
        });
        $('#btnRadio').on('click', function () {
            alert($('#radioPart input:checked').val());
        });
    </script>
</body>
```

<a id="markdown-禁用状态" name="禁用状态"></a>
#### 禁用状态
为输入框设置 disabled 属性可以禁止其与用户有任何交互（焦点、输入等）。

被禁用的输入框颜色更浅，并且还添加了 not-allowed 鼠标状态。

```html
<input class="form-control" id="disabledInput" type="text" placeholder="Disabled input here..." disabled>
```

被禁用的 fieldset，为`<fieldset>` 设置 disabled 属性,可以禁用 `<fieldset>` 中包含的所有控件。

默认情况下，浏览器会将 `<fieldset disabled>` 内所有的原生的表单控件（`<input>、<select> 和 <button>` 元素）设置为禁用状态，防止键盘和鼠标与他们交互。

然而，如果表单中还包含 `<a ... class="btn btn-*">` 元素，这些元素将只被赋予 pointer-events: none 属性。

正如在关于 禁用状态的按钮 章节中（尤其是关于锚点元素的子章节中）所描述的那样，该 CSS 属性尚不规范，并且在 Opera 18 及更低版本的浏览器或 Internet Explorer 11 总没有得到全面支持，并且不会阻止键盘用户能够获取焦点或激活这些链接。

所以为了安全起见，建议使用自定义 JavaScript 来禁用这些链接。

```html
<!-- fieldset内所有的原生的表单控件（<input>、<select> 和 <button> 元素）设置为禁用状态，防止键盘和鼠标与他们交互 -->
<fieldset disabled>
    <div class="form-group">
        <label for="disabledTextInput">Disabled input</label>
        <input type="text" id="disabledTextInput" class="form-control" placeholder="Disabled input">
    </div>
    <div class="form-group">
        <label for="disabledSelect">Disabled select menu</label>
        <select id="disabledSelect" class="form-control">
            <option>Disabled select</option>
        </select>
    </div>
    <div class="checkbox">
        <label>
            <input type="checkbox"> Can't check this
        </label>
    </div>
    <div class="form-group">
        <a href="javascript:void(0)" style="cursor:not-allowed;">a标签没有disabled属性，增加鼠标样式cursor:not-allowed;再使用js让标签的href属性设为空操作！！！</a>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
</fieldset>
```

<a id="markdown-只读状态" name="只读状态"></a>
#### 只读状态
为输入框设置 readonly 属性可以禁止用户修改输入框中的内容。

处于只读状态的输入框颜色更浅（就像被禁用的输入框一样），但是仍然保留标准的鼠标状态。

```html
<input class="form-control" type="text" placeholder="Readonly input here…" readonly>
```

<a id="markdown-校验状态" name="校验状态"></a>
#### 校验状态
Bootstrap 对表单控件的校验状态，如 error、warning 和 success 状态，都定义了样式。

使用时，添加 .has-warning、.has-error 或 .has-success 类到这些控件的父元素即可。

任何包含在此元素之内的 .control-label、.form-control 和 .help-block 元素都将接受这些校验状态的样式。

```html
<div class="container">
    <div class="form-group has-success">
        <label class="control-label" for="txtUserID">Input with success</label>
        <input type="text" class="form-control" id="txtUserID" placeholder="用户名或邮箱必须保持唯一">
    </div>
    <div class="form-group has-warning">
        <label class="control-label" for="txtName">Input with warning</label>
        <input type="text" class="form-control" id="txtName">
    </div>
    <div class="form-group has-error">
        <label class="control-label" for="helpPwd">Input with error</label>
        <input type="text" class="form-control" id="helpPwd" aria-describedby="helpPwd">
        <span id="helpPwd" class="help-block">输入有误，请检查！</span>
    </div>
    <div class="has-success">
        <div class="checkbox">
            <label>
                <input type="checkbox" id="checkboxSuccess" value="option1">
                Checkbox with success
            </label>
        </div>
    </div>
    <div class="has-warning">
        <div class="checkbox">
            <label>
                <input type="checkbox" id="checkboxWarning" value="option1">
                Checkbox with warning
            </label>
        </div>
    </div>
    <div class="has-error">
        <div class="checkbox">
            <label>
                <input type="checkbox" id="checkboxError" value="option1">
                Checkbox with error
            </label>
        </div>
    </div>
</div>
```

添加额外的图标、为水平排列的表单和内联表单设置可选的图标等详见官网。

<a id="markdown-控件尺寸" name="控件尺寸"></a>
#### 控件尺寸
通过 .input-lg 类似的类可以为控件设置高度，通过 .col-lg-* 类似的类可以为控件设置宽度。

创建大一些或小一些的表单控件以匹配按钮尺寸。

```html
<div class="container">
    <h1>高度尺寸</h1>
    <input class="form-control input-lg" type="text" placeholder=".input-lg">
    <input class="form-control" type="text" placeholder="Default input">
    <input class="form-control input-sm" type="text" placeholder=".input-sm">

    <select class="form-control input-lg">...</select>
    <select class="form-control">...</select>
    <select class="form-control input-sm">...</select>
</div>
```

<a id="markdown-button" name="button"></a>
## Button

<a id="markdown-basic-example-2" name="basic-example-2"></a>
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
<div class="container">
    <!-- 原始按钮 -->
    <button type="button" class="btn btn-primary">原始按钮</button>

    <!--激活的按钮，即按钮点击时的样式-->
    <button type="button" class="btn btn-primary active">激活的按钮</button>

    <button type="button" class="btn btn-primary" disabled>禁用的按钮</button>

    <!-- 针对连接 a元素的禁用控制，a元素没有disabled属性 -->
    <a href="javascript:void(0)" style="cursor:not-allowed;">禁用链接</a>
</div>
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

<a id="markdown-glyphicons-字体图标" name="glyphicons-字体图标"></a>
## Glyphicons 字体图标
包括250多个来自 Glyphicon Halflings 的字体图标。

Glyphicons Halflings 一般是收费的，但是他们的作者允许 Bootstrap 免费使用。

为了表示感谢，希望你在使用时尽量为 Glyphicons 添加一个友情链接。

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

除此，还有 [Font Awesome](http://www.fontawesome.com.cn/) 字体图标可和bootstrap搭配使用，有兴趣线下自行研究。

> http://www.fontawesome.com.cn/

<a id="markdown-案例引用" name="案例引用"></a>
## 案例引用

<a id="markdown-23种bootstrap导航菜单布局设计jquery插件" name="23种bootstrap导航菜单布局设计jquery插件"></a>
### 23种Bootstrap导航菜单布局设计jQuery插件

> http://www.htmleaf.com/jQuery/Menu-Navigation/201606083575.html

