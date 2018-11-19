<!-- TOC -->

- [jQuery](#jquery)
    - [加载](#加载)
    - [基础](#基础)
        - [jQuery对象](#jquery对象)
        - [jQuery构造函数](#jquery构造函数)
            - [DOM对象作为参数](#dom对象作为参数)
            - [HTML字符串作为参数](#html字符串作为参数)
            - [第二个参数](#第二个参数)
        - [jQuery构造函数返回的结果集](#jquery构造函数返回的结果集)
            - [length属性](#length属性)
            - [下标运算符](#下标运算符)
    - [选择器](#选择器)
        - [基本-CSS选择器](#基本-css选择器)
        - [层级](#层级)
        - [伪类选择器](#伪类选择器)
            - [:first](#first)
            - [:not](#not)
            - [:even和:odd](#even和odd)
            - [:eq/:lt/:gt/:last](#eqltgtlast)
            - [:contains/:empty](#containsempty)
            - [:hidden/:visible](#hiddenvisible)
            - [[attribute]属性筛选](#attribute属性筛选)
            - [表单筛选](#表单筛选)
            - [表单对象属性](#表单对象属性)
    - [属性](#属性)
        - [attr()/removeAttr()](#attrremoveattr)
        - [prop()/removeProp()](#propremoveprop)
        - [addClass()/removeClass()](#addclassremoveclass)
        - [html()](#html)
        - [text()](#text)
        - [val()](#val)
    - [CSS](#css)
        - [css()](#css)
        - [width()/height()](#widthheight)
    - [文档处理](#文档处理)
        - [内部插入](#内部插入)
        - [外部插入](#外部插入)
        - [删除](#删除)
    - [筛选](#筛选)
    - [事件](#事件)
        - [ready()](#ready)
            - [`ready和onload`](#ready和onload)
        - [常见的dom事件](#常见的dom事件)
        - [jQuery中等效方法](#jquery中等效方法)
        - [on()/off()](#onoff)
        - [委托事件](#委托事件)
        - [事件对象](#事件对象)
    - [$.ajax](#ajax)
    - [工具](#工具)

<!-- /TOC -->
<a id="markdown-jquery" name="jquery"></a>
# jQuery
jQuery是目前使用最广泛的JavaScript函数库。据统计，全世界57.5%的网站使用jQuery，在使用JavaScript函数库的网站中，93.0%使用jQuery。

它已经成了开发者必须学会的技能。

官网：>https://jquery.com/

jQuery的最大优势有两个。首先，它基本是一个DOM操作工具，可以使操作DOM对象变得异常容易。其次，它统一了不同浏览器的API接口，使得代码在所有现代浏览器均能运行，开发者不用担心浏览器之间的差异。

1. jQuery是一个兼容多浏览器的javascript库，核心理念是write less,do more(写得更少,做得更多)。
2. jQuery是免费、开源的，使用MIT许可协议。
3. jQuery的语法设计可以使开发更加便捷，例如操作文档对象、选择DOM元素、制作动画效果、事件处理、使用Ajax以及其他功能。
4. 除此以外，jQuery提供API让开发者编写插件。其模块化的使用方式使开发者可以很轻松的开发出功能强大的静态或动态网页。

<a id="markdown-加载" name="加载"></a>
## 加载
一般采用下面的写法，在网页中加载jQuery。
```html
<!-- 实际使用取消注释 -->
<!-- 
<script type="text/javascript"
  src="https://cdn.jsdelivr.net/npm/jquery@3.3.1/dist/jquery.min.js">
</script> 
<script>
 window.jQuery ||
   document.write(
     '<script src="js/jquery-1.11.0.min.js" type="text/javascript"></script>'
   );
</script>
-->
```

上面代码有两点需要注意。一是采用CDN加载。如果CDN加载失败，则退回到本地加载。二是采用协议无关的加载网址（使用双斜线表示），同时支持http协议和https协议。

CDN的选择[参考jQuery官网](http://jquery.com/download/#other-cdns)

<a id="markdown-基础" name="基础"></a>
## 基础
<a id="markdown-jquery对象" name="jquery对象"></a>
### jQuery对象
jQuery最重要的概念，就是jQuery对象。它是一个全局对象，可以简写为美元符号$。也就是说，jQuery和$两者是等价的。

在网页中加载jQuery函数库以后，就可以使用jQuery对象了。jQuery的全部方法，都定义在这个对象上面。
```js
/*
var listItems = jQuery('li');
// or
var listItems = $('li');
*/
```
上面两行代码是等价的，表示选中网页中所有的li元素。

<a id="markdown-jquery构造函数" name="jquery构造函数"></a>
### jQuery构造函数
jQuery对象本质上是一个构造函数，主要作用是返回jQuery对象的实例。比如，上面代码表面上是选中li元素，实际上是返回对应于li元素的jQuery实例。

因为只有这样，才能在DOM对象上使用jQuery提供的各种方法。

```js
/*
$('body').nodeType; // undefined

$('body') instanceof jQuery; // true
*/
```
上面代码表示，由于jQuery返回的不是DOM对象，所以没有DOM属性nodeType。它返回的是jQuery对象的实例。

jQuery构造函数可以多种参数，返回不同的值。

<a id="markdown-dom对象作为参数" name="dom对象作为参数"></a>
#### DOM对象作为参数
jQuery构造函数的参数，还可以是DOM对象。它也会被转为jQuery对象的实例。

`$(document.body) instanceof jQuery`

上面代码中，jQuery的参数不是CSS选择器，而是一个DOM对象，返回的依然是jQuery对象的实例。

如果有多个DOM元素要转为jQuery对象的实例，可以把DOM元素放在一个数组里，输入jQuery构造函数。

<a id="markdown-html字符串作为参数" name="html字符串作为参数"></a>
#### HTML字符串作为参数
如果直接在jQuery构造函数中输入HTML字符串，返回的也是jQuery实例。

`$('<li class="greet">test</li>')`
上面代码从HTML代码生成了一个jQuery实例，它与从CSS选择器生成的jQuery实例完全一样。唯一的区别就是，它对应的DOM结构不属于当前文档。

上面代码也可以写成下面这样。
```js
$( '<li>', {
  html: 'test',
  'class': 'greet'
});
```
上面代码中，由于class是javaScript的保留字，所以只能放在引号中。

通常来说，上面第二种写法是更好的写法。
```js
$('<input class="form-control" type="hidden" name="foo" value="bar" />')

// 相当于
$('<input/>', {
  'class': 'form-control',
  type: 'hidden',
  name: 'foo',
  value: 'bar'
})

// 或者
$('<input/>')
.addClass('form-control')
.attr('type', 'hidden')
.attr('name', 'foo')
.val('bar')
```
由于新增的DOM节点不属于当前文档，所以可以用这种写法预加载图片。
```js
$.preloadImages = function () {
  for (var i = 0; i < arguments.length; i++) {
    $('<img>').attr('src', arguments[i]);
  }
};

$.preloadImages('img/hover-on.png', 'img/hover-off.png');
```

<a id="markdown-第二个参数" name="第二个参数"></a>
#### 第二个参数
默认情况下，jQuery将文档的根元素（html）作为寻找匹配对象的起点。如果要指定某个网页元素（比如某个div元素）作为寻找的起点，可以将它放在jQuery函数的第二个参数。

`$('li', someElement);`

上面代码表示，只寻找属于someElement对象下属的li元素。someElement可以是jQuery对象的实例，也可以是DOM对象。

<a id="markdown-jquery构造函数返回的结果集" name="jquery构造函数返回的结果集"></a>
### jQuery构造函数返回的结果集
jQuery的核心思想是“先选中某些网页元素，然后对其进行某种处理”（find something, do something），也就是说，先选择后处理，这是jQuery的基本操作模式。

所以，绝大多数jQuery操作都是从选择器开始的，返回一个选中的结果集。

<a id="markdown-length属性" name="length属性"></a>
#### length属性
jQuery对象返回的结果集是一个类似数组的对象，包含了所有被选中的网页元素。查看该对象的length属性，可以知道到底选中了多少个结果。
```js
if ( $('li').length === 0 ) {
	console.log('不含li元素');
}
```
上面代码表示，如果网页没有li元素，则返回对象的length属性等于0。这就是测试有没有选中的标准方法。

所以，如果想知道jQuery有没有选中相应的元素，不能写成下面这样。

`if ($('div.foo')) { ... }`

因为不管有没有选中，jQuery构造函数总是返回一个实例对象，而对象的布尔值永远是true。使用length属性才是判断有没有选中的正确方法。

<a id="markdown-下标运算符" name="下标运算符"></a>
#### 下标运算符
jQuery选择器返回的是一个类似数组的对象。但是，使用下标运算符取出的单个对象，并不是jQuery对象的实例，而是一个DOM对象。
```js
$('li')[0] instanceof jQuery // false
$('li')[0] instanceof Element // true
```
上面代码表示，下标运算符取出的是Element节点的实例。所以，通常使用下标运算符将jQuery实例转回DOM对象。

<a id="markdown-选择器" name="选择器"></a>
## 选择器

<a id="markdown-基本-css选择器" name="基本-css选择器"></a>
### 基本-CSS选择器
jQuery构造函数的参数，主要是CSS选择器。常用的有：

* `#id`
* element 
* .class 
* `*`
* selector1,selector2,selectorN 

<a id="markdown-层级" name="层级"></a>
### 层级
* ancestor descendant 选择给定的祖先元素的**所有后代**元素。 
* parent > child 选择所有指定“parent”元素中指定的"child"的**直接**子元素。 
* prev + next 选择所有**紧接**在 “prev” 元素后的一个 “next” 元素 
* prev ~ siblings 匹配 “prev”元素**之后**的所有兄弟元素。具有**相同的父元素**，并匹配过滤“siblings”选择器。 

```html
<body>
    <form>
        <label>Name:</label>
        <input name="name" />
        <div>
            <input type="text" name="pwd" />
        </div>
        <fieldset>
            <label>Newsletter:</label>
            <input name="newsletter" />
        </fieldset>
    </form>
    <input name="none" />

    <script>
        /*
        $(ancestor descendant) (中间的是空格)
        ancestor和descendant分别是选择器
        */
        $('form input');//form中3个input:[ <input name="name" />, <input type="text" name="pwd" /> , <input name="newsletter" /> ]
        $('form div input');//form div 中1个input:[<input type="text" name="pwd" />]

        /*
        $(parent > child)
        筛选直接子元素，不会继续往下寻找
        */
        $('form>input');//直接子元素只有：[ <input name="name" /> ]

        /*
        $(prev + next)
        紧接在prev元素后的一个next元素
        */
        $('label+input');//[ <input name="name" />, <input name="newsletter" /> ]

        /*
        $(prev ~ siblings)
        prev后面的兄弟，它们具有共同的父元素
        */
        $('form~input');//表单后的元素：[ <input name="none" /> ]
    </script>
</body>
```

<a id="markdown-伪类选择器" name="伪类选择器"></a>
### 伪类选择器
<a id="markdown-first" name="first"></a>
#### :first
选择第一个匹配的DOM元素。 :first伪类选择器相当于:eq(0)。它也可以写为:lt(1)。
```html
<ul>
    <li>list item 1</li>
    <li>list item 2</li>
    <li>list item 3</li>
    <li>list item 4</li>
    <li>list item 5</li>
</ul>
<script>
    $('li:first');//[ <li>list item 1</li> ]
</script>
```

<a id="markdown-not" name="not"></a>
#### :not
选择所有元素去除不匹配给定的选择器的元素。 
```html
<input type="checkbox" name="apple" />
<input  type="checkbox" name="flower" checked="checked" />
<script>
    $("input:not(:checked)");//[ <input name="apple" /> ]
</script>
```

<a id="markdown-even和odd" name="even和odd"></a>
#### :even和:odd
:even选择索引值为偶数的元素，从 0 开始计数。:odd选择索引值为奇数元素，从 0 开始计数。
```html
<table>
  <tr><td>Header 0</td></tr>
  <tr><td>Value 1</td></tr>
  <tr><td>Value 2</td></tr>
  <tr><td>Value 3</td></tr>
  <tr><td>Value 4</td></tr>
</table>
<script>
    //一次性处理不同行的样式
    $("tr:even").addClass('xxx');
    $("tr:odd").addClass('xxx');
</script>
```

<a id="markdown-eqltgtlast" name="eqltgtlast"></a>
#### :eq/:lt/:gt/:last
在匹配的集合中选择索引值为index的元素。 
```html
<table>
  <tr><td>Header 0</td></tr>
  <tr><td>Value 1</td></tr>
  <tr><td>Value 2</td></tr>
  <tr><td>Value 3</td></tr>
  <tr><td>Value 4</td></tr>
</table>
<script>
    $("tr:eq(0)");//$('tr:first')
    $('tr:lt(1)');//[<tr><td>Header 0</td></tr>]
    $('tr:gt(3)');//[<tr><td>Value 4</td></tr>]
    $('tr:last');//[<tr><td>Value 4</td></tr>]
</script>
```

<a id="markdown-containsempty" name="containsempty"></a>
#### :contains/:empty
contains选择所有包含指定文本的元素。 empty选择所有没有子元素的元素（包括文本节点）。 
```html
<div>John Resig</div>
<div>George Martin</div>
<div>Malcom John Sinclair</div>
<div id="ep"></div>
<script>
    $("div:contains('John')");//[ <div>John Resig</div>, <div>Malcom John Sinclair</div> ]
    $("div:empty");//[<div id="ep"></div>]
</script>
```

<a id="markdown-hiddenvisible" name="hiddenvisible"></a>
#### :hidden/:visible
hidden选择所有隐藏的元素。 visible选择所有可见的元素。 
```html
<table>
    <tr style="display:none"><td>Value 1</td></tr>
    <tr><td>Value 2</td></tr>
</table>
<script>
    $('tr:hidden');//[<tr style="display:none"><td>Value 1</td></tr>]
    $('tr:visible');//[<tr><td>Value 2</td></tr>]
</script>
```

<a id="markdown-attribute属性筛选" name="attribute属性筛选"></a>
#### [attribute]属性筛选
用法 | 说明
---|---
[attribute] | 选择所有具有指定属性的元素，该属性可以是任何值。 
[attribute=value] | 选择指定属性是给定值的元素。 
[attribute!=value] | 选择不存在指定属性，或者指定的属性值不等于给定值的元素。 
[attribute^=value] | 选择指定属性是以给定字符串开始的元素 
[attribute$=value] | 选择指定属性是以给定值结尾的元素。这个比较是区分大小写的。 
[attribute*=value] | 选择指定属性具有包含一个给定的子字符串的元素。
[attribute~=value] | 选择指定属性用空格分隔的值中包含一个给定值的元素。很少使用
[attribute&#124;=value] | 选择指定属性值等于给定字符串或以该字符串为前缀（该字符串后跟一个连字符“-” ）的元素。 
[attrSel1][attrSel2][attrSelN] | 选择匹配所有指定的属性筛选器的元素。属性筛选的组合，且的关系。

<a id="markdown-表单筛选" name="表单筛选"></a>
#### 表单筛选
用法 | 说明
---|---
:input | 选择所有 input, textarea, select 和 button 元素. 
:text | 选择所有类型为text的input元素。 
:password | 选择所有类型为密码的元素。 
:radio | 选择所有类型为单选框的元素。 
:checkbox | 选择所有类型为复选框的元素。 
:submit | 选择所有类型为提交的元素。 
:image | 选择所有图像类型的元素。 
:button | 选择所有按钮元素和类型为按钮的元素。 
:file | 选择所有类型为文件（file）的元素。 

```html
<form>
   <input type="button" value="Input Button"/>
   <input type="checkbox" />

   <input type="file" />
   <input type="hidden" />
   <input type="image" />

   <input type="password" />
    <input type="radio" />
    <input type="reset" />

    <input type="submit" />
    <input type="text" />
    <select><option>Option</option></select>
    <textarea></textarea>
    <button>Button</button>
</form>
```

<a id="markdown-表单对象属性" name="表单对象属性"></a>
#### 表单对象属性
用法 | 说明
---|---
:enabled | 选择所有可用的元素，即未被禁用的元素。
:disabled | 选择所有被禁用的元素。 
:checked | 匹配所有勾选的元素。 
:selected | 匹配所有选中的option元素 

```html
<body>
    <form>
        <input name="email" disabled="disabled" />
        <input name="id" />
        <input type="checkbox" id="chk1" /><label for="chk1">庐山</label>
        <input type="checkbox" id="chk2" /><label for="chk2">黄山</label>
        <select>
            <option>A</option>
            <option selected="selected">B</option>
            <option>C</option>
        </select>
    </form>

    <script>
        $('input:enabled');
        $('input:disabled');

        $('input:checked');

        $('option:selected').val();
    </script>
</body>
```

<a id="markdown-属性" name="属性"></a>
## 属性

<a id="markdown-attrremoveattr" name="attrremoveattr"></a>
### attr()/removeAttr()
```html
<!--data-self 自定义属性，命名遵循（data-xxx）-->
<div id="div1" class="red" data-self="今晚打老虎" style="width:200px;height:100px;background-color:aquamarine;"></div>
<script>
  //获取、然后修改后再获取属性
  console.log($("#div1").attr('class'));
  console.log($("#div1").attr('data-self'));
  $('#div1').attr('data-self', '赌侠');
  console.log($("#div1").attr('data-self'));

  //移除属性
  $('#div1').removeAttr('class');
</script>
```

<a id="markdown-propremoveprop" name="propremoveprop"></a>
### prop()/removeProp()
具有 true 和 false 两个值的属性，如 checked, selected 或者 disabled 使用prop()，其他的使用 attr()。
```html
<h4>性别</h4>
<input type="radio" name="radSex" id="chkMan" /><label for="chkMan">男</label>
<input type="radio" name="radSex" id="chkWomen" /><label for="chkWomen">女</label>

<script>
    //默认加载时选择女性
    $('#chkWomen').prop('checked', true);
    $('#chkWomen').prop('checked');//true
    $('#chkWomen').attr('checked')//undefined
</script>
```

<a id="markdown-addclassremoveclass" name="addclassremoveclass"></a>
### addClass()/removeClass()
```html
<style>
    .red {
        background-color: red;
    }

    .blue {
        background-color: blue;
    }
</style>
<body>
  <h4>动态样式</h4>
  <button id="btn1">红色</button>
  <button id="btn2">蓝色</button>
  <div id="divDy" style="width:300px;height:100px;"></div>
  <script>
    //addClass()/removeClass()  动态的控制div的背景色，
    $('#btn1').click(function () {
        $('#divDy').removeClass();
        $('#divDy').addClass('red');
    });
    $('#btn2').click(function () {
        $('#divDy').removeClass();
        $('#divDy').addClass('blue');
    });
  </script>
</body>
```

<a id="markdown-html" name="html"></a>
### html()
获取集合中第一个匹配元素的HTML内容 
```html
  <div id="divDy" style="width:300px;height:100px;"></div>
  <script>
    //注意 html和append的区别，html()会替换元素内部所有的内容，最终只有一个“哈弗H8”
    $('#divDy').html('<h6>哈弗H2</h6>');
    $('#divDy').html('<h6>哈弗H6</h6>');
    $('#divDy').html('<h6>哈弗H8</h6>');
    console.log('打印div内容：' + $('#divDy').html());
  </script>
```

<a id="markdown-text" name="text"></a>
### text()
得到匹配元素集合中每个元素的合并文本，包括他们的后代 
```html
<body>
    <div class="demo-container">
        <div class="demo-box">Demonstration Box</div>
        <ul>
            <li>list item 1</li>
            <li>list <strong>item</strong> 2</li>
        </ul>
    </div>
    <script>
        //设置匹配元素集合中每个元素的文本内容为指定的文本内容。 不包含dom结构，仅仅是文本内容
        console.log($('.demo-container').text());
    </script>
</body>
```

<a id="markdown-val" name="val"></a>
### val()
```html
<body>
    <div>
        <input type="text" id="txtName" placeholder="输入您的姓名" />
        <input type="button" id="btnShowName" value="显示您的输入" />
    </div>
    <script>
        //val() 必须记住
        document.getElementById('txtName').value;
        $('#btnShowName').click(function () {
            alert($('#txtName').val());
            //弹出alert后重置文本框为默认值
            $('#txtName').val('变成默认值');
        });
    </script>
</body>
```

<a id="markdown-css" name="css"></a>
## CSS

<a id="markdown-css" name="css"></a>
### css()

通常情况，不推荐通过js代码控制元素样式，代码极难维护。建议通过样式类搭配addClass和removeClass方法进行样式控制。

` .css( propertyName, value ) `

```js
$("p").css({ "color": "#ff0011", "background": "blue" });
$("p").css("color","red");
```

<a id="markdown-widthheight" name="widthheight"></a>
### width()/height()
给每个匹配的元素设置CSS宽高。
```js
//设置元素宽高
$('div').css('width',100);
$('div').css('width',100+'px');
$('div').css('height',50);
$('div').css('height',50+'px');

//设置元素宽度，以下两种方式均可
$('div').width(100);
$('div').width(100+'px');

//设置元素高度
$('div').height(50);
$('div').height(50+'px');

//css() 和 width/height之间的区别，css方法的返回值带有单位
$('div').css('width');// 100px
$('div').width();// 100
```

<a id="markdown-文档处理" name="文档处理"></a>
## 文档处理

<a id="markdown-内部插入" name="内部插入"></a>
### 内部插入
append在每个匹配元素里面的末尾处插入参数内容，注意是**内部的结尾插入**。
appendTo将元素插入到目标元素的最后面，也是在**内部**进行插入。

```html
<body>
    <div id="container">
        内部
    </div>
    外部

    <script>
        $('#container').append('<input />');
        $('<a href="#">appendTo</a>').appendTo('#container');
    </script>
</body>
```

相对应的还有prepend()和prependTo()，在这里不做赘述。

<a id="markdown-外部插入" name="外部插入"></a>
### 外部插入
after在匹配元素集合中的每个元素后面插入参数所指定的内容，作为其兄弟节点。 

insertAfter在目标元素后面插入集合中每个匹配的元素。

```html
<body>
    <div id="container">
        内部
    </div>
    外部

    <script>
        $('#container').after('<input />');
        $('<a href="#">appendTo</a>').insertAfter('#container');
    </script>
</body>
```

同样的还有before()和insertBefore()，也不再赘述。

<a id="markdown-删除" name="删除"></a>
### 删除
empty()从DOM中移除元素的所有子节点，不会移除自身。
remove()将匹配元素集合从DOM中删除，包含自身。

<a id="markdown-筛选" name="筛选"></a>
## 筛选
- ` .hasClass( className ) `确定任何一个匹配元素是否有被分配给定的（样式）类。 
- `.children( [selector ] )` 获得匹配元素集合中每个元素的子元素，选择器选择性筛选。 
- `.closest( selector ) `从元素本身开始，在DOM 树上逐级向上级元素匹配，并返回最先匹配的祖先元素。 
- ` .find( selector ) `通过一个选择器，jQuery对象，或元素过滤，得到当前匹配的元素集合中每个元素的后代。 
- `.next( [selector ] ) `取得匹配的元素集合中每一个元素紧邻的后面同辈元素的元素集合。如果提供一个选择器，那么只有紧跟着的兄弟元素满足选择器时，才会返回此元素。 

<a id="markdown-事件" name="事件"></a>
## 事件

<a id="markdown-ready" name="ready"></a>
### ready()
当DOM准备就绪时，指定一个函数来执行。 
```js
//以下语法都是等价的：
$( handler ) 
$( document ).ready( handler ) 
$( "document" ).ready( handler ) 
$( "img" ).ready( handler ) 
$().ready( handler ) 
```

<a id="markdown-ready和onload" name="ready和onload"></a>
#### `ready和onload`
$(document).ready方法接受一个函数作为参数，将该参数作为document对象的DOMContentLoaded事件的回调函数。
也就是说，当页面解析完成（即下载完</html>标签）以后，在所有外部资源（图片、脚本等）完成加载之前，该函数就会立刻运行。
```js
$( document ).ready(function() {
  console.log( 'ready!' );
});
```
上面代码表示，一旦页面完成解析，就会运行ready方法指定的函数，在控制台显示“ready!”。

该方法通常作为网页初始化手段使用，jQuery提供了一种简写法，就是直接把回调函数放在jQuery对象中。
```js
$(function() {
  console.log( 'ready!' );
});
```

**引申**：ready()与dom中window.onload方法并不一样，执行先后有区别。

```html
<body>
    <h1>图片加载示例</h1>
    <!--模拟显示一张图片-->
    <img src="http://desk.fd.zol-img.com.cn/t_s1920x1200c5/g5/M00/0D/02/ChMkJlnHOj2ICeciACiHxj33cI4AAgvowKUnYMAKIfe688.jpg" />

    <script>
        //等待dom加载，等待图片、音乐、视频、广告等加载完成才触发
        window.onload = function () {
            console.log('hello onload');
        }

        //dom文档结构加载完成后立即触发
        $(document).ready(function () {
            console.log('hello ready');
        });
        //此写法同上，推荐此用法
        $(function () {

        });
    </script>
</body>
```

$(document).ready()：加载完dom文档后立即执行，不再等图片、视频、广告等全部下载完成。

window.onload：除了加载完dom文档，还要等待所有的图片、视频、广告全部下载完毕才会执行。

所以在时间上，ready()的执行是在onload之前的。

<a id="markdown-常见的dom事件" name="常见的dom事件"></a>
### 常见的dom事件

鼠标事件 | 键盘事件 | 表单事件 | 文档/窗口事件
-----|------|------|--------
click | keypress | submit | load
dblclick | keydown | change | resize
mouseenter | keyup | focus | scroll
mouseleave |   blur | unload

<a id="markdown-jquery中等效方法" name="jquery中等效方法"></a>
### jQuery中等效方法
在 jQuery 中，大多数 DOM 事件都有一个等效的 jQuery 方法。
例如：
```html
<body>
    <input type="button" id="btn" value="按钮" />
    <input type="text" id="txtBlur" value="" />

    <ul>
        <li>Milk</li>
        <li>Bread</li>
        <li class='fade'>Chips</li>
        <li class='fade'>Socks</li>
    </ul>

    <script>
        //按钮实际执行文本框的blur事件
        $('#btn').click(function () {
            $('#txtBlur').trigger('blur');
        });

        //焦点离开 blur事件
        $('#txtBlur').blur(function () {
            alert('焦点离开');
        });

        /*将二个事件函数绑定到匹配元素上，分别当鼠标指针进入和离开元素时被执行。 
        鼠标移入时增加样式，移出时去除样式
        注意 hover是jQuery的封装
        */
        $('li').hover(function () {
            $(this).addClass('red');
        }, function () {
            $(this).removeClass();
        });
    </script>
</body>
```

当多个文本框切换时，blur失去焦点事件会陷入死循环，todo分析
> https://blog.csdn.net/hzw2312/article/details/8177927


<a id="markdown-onoff" name="onoff"></a>
### on()/off()
同样，还可以使用on进行事件的绑定，需要注意，在jQuery 3+版本后删除了bind、delegate等方法。
`.on( events [, selector ] [, data ], handler(eventObject) ) `

```html
<body>
    <input type="button" id="btn" value="show" />
    <input type="button" id="btnRemove" value="移除alert事件" />

    <script>
        //此为函数定义式 声明需要放在调用的前面！
        var handler1 = function () {
            alert();
        }
        var handler2 = function (event) {
            alert('你好！' + event.data.name);
        }
        //使用on进行事件的绑定
        $('#btn').on('click', handler1);
        //将数据传递到处理程序
        $('#btn').on('click', { name: '第二次绑定' }, handler2);

        $('#btnRemove').on('click', function () {
            //移除btn上的handler1处理函数
            $('#btn').off('click', handler1);
        });
    </script>
</body>
```

<a id="markdown-委托事件" name="委托事件"></a>
### 委托事件
委托事件 有一个优势，他们能在后代元素添加到文档后，可以处理这些事件。

在确保所选择的元素已经存在的情况下，进行事件绑定时，您可以使用委派的事件，以避免频繁的绑定事件及解除绑定事件。

```html
<body>
    <style>
        .red {
            background-color: red;
        }

        table {
            border: 1px solid #808080;
        }

            table th, table td {
                border: 1px solid #808080;
            }
    </style>
    <input type="button" id="btnAdd" value="添加行" />
    <table id="table">
        <tr><th>ID</th><th>NAME</th></tr>
        <tr><td>1</td><td>zhangsan</td></tr>
    </table>

    <script>
        //每次点击按钮添加一行数据
        $('#btnAdd').on('click', function () {
            var id = Math.floor(Math.random() * 10);
            $('#table').append('<tr><td>' + id + '</td><td>' + id + 'test</td></tr>');
        });

        /*
        动态为表格中每个td添加事件，即td是在未来产生的，如果使用$().click的方式是做不到的
        这里mouseenter和mouseleave其实就是jQuery封装的hover方法
        或者使用 $('#table').delegate('td','mouseenter',function(){});
        $().delegate()也是对on方法的封装
        */
        $('#table').on('mouseenter', 'td', function () {
            $(this).addClass('red');
        });
        $('#table').on('mouseleave', 'td', function () {
            $(this).removeClass();
        });
    </script>
</body>
```

<a id="markdown-事件对象" name="事件对象"></a>
### 事件对象
`event.target` 触发事件的DOM元素。 

<a id="markdown-ajax" name="ajax"></a>
## $.ajax
```js
//基本调用，以及常用属性
$.ajax({
    url : '',//请求的地址
    dataType : 'json',//从服务器返回你期望的数据类型。
    method : 'post',//post或get 或者使用type属性，1.9之前必须用type
    data : {},//对象或数组。发送到服务器的数据。它被转换成一个查询字符串,如果已经是一个字符串的话就不会转换。
    async : true,//true/false,是否异步，默认true
    success : function(data,textStatus,jqXHR){},//请求成功后的回调函数。
    error : function(jqXHR,textStatus,errorThrown){},//请求失败时调用此函数。
    complete : function(jqXHR,textStatus){},//请求完成后回调函数 (请求success 和 error之后均调用)。
});
```

更进一步的封装有：
- ` $.get( url [, data ] [, success ] [, dataType ] ) `使用一个HTTP GET请求从服务器加载数据。 
- `$.post( url [, data ] [, success ] [, dataType ] ) `使用一个HTTP POST 请求从服务器加载数据。 

<a id="markdown-工具" name="工具"></a>
## 工具
- ` $.each( collection, callback(indexInArray, valueOfElement) ) ` 一个通用的迭代函数，它可以用来无缝迭代对象和数组。
- ` $.extend([deep ,] target [, object1 ] [, objectN ] ) `将两个或更多对象的内容合并到第一个对象。 
- ` $.inArray( value, array [, fromIndex ] ) `在数组中查找指定值并返回它的索引（如果没有找到，则返回-1）。 
- ` $.isNumeric( value ) `确定它的参数是否是一个JavaScript数字，返回true/false。
- ` $.trim( str ) `去掉字符串起始和结尾的空格。 
