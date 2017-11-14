<!-- TOC -->

- [jQuery](#jquery)
    - [加载](#加载)
    - [基础](#基础)
        - [jQuery对象](#jquery对象)
        - [jQuery构造函数](#jquery构造函数)
            - [CSS选择器作为参数](#css选择器作为参数)
            - [DOM对象作为参数](#dom对象作为参数)
            - [HTML字符串作为参数](#html字符串作为参数)
            - [第二个参数](#第二个参数)
        - [jQuery构造函数返回的结果集](#jquery构造函数返回的结果集)
            - [length属性](#length属性)
            - [下标运算符](#下标运算符)
        - [$(document).ready()](#documentready)

<!-- /TOC -->
<a id="markdown-jquery" name="jquery"></a>
# jQuery
jQuery是目前使用最广泛的JavaScript函数库。据统计，全世界57.5%的网站使用jQuery，在使用JavaScript函数库的网站中，93.0%使用jQuery。它已经成了开发者必须学会的技能。

jQuery的最大优势有两个。首先，它基本是一个DOM操作工具，可以使操作DOM对象变得异常容易。其次，它统一了不同浏览器的API接口，使得代码在所有现代浏览器均能运行，开发者不用担心浏览器之间的差异。

1. jQuery是一个兼容多浏览器的javascript库，核心理念是write less,do more(写得更少,做得更多)。
2. jQuery是免费、开源的，使用MIT许可协议。
3. jQuery的语法设计可以使开发更加便捷，例如操作文档对象、选择DOM元素、制作动画效果、事件处理、使用Ajax以及其他功能。
4. 除此以外，jQuery提供API让开发者编写插件。其模块化的使用方式使开发者可以很轻松的开发出功能强大的静态或动态网页。

<a id="markdown-加载" name="加载"></a>
## 加载
一般采用下面的写法，在网页中加载jQuery。
```js
<script type="text/javascript"
  src="//code.jquery.com/jquery-1.11.0.min.js">
</script>
<script>
window.jQuery ||
  document.write(
    '<script src="js/jquery-1.11.0.min.js" type="text/javascript"><\/script>'
  );
</script>
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
var listItems = jQuery('li');
// or
var listItems = $('li');
```
上面两行代码是等价的，表示选中网页中所有的li元素。

<a id="markdown-jquery构造函数" name="jquery构造函数"></a>
### jQuery构造函数
jQuery对象本质上是一个构造函数，主要作用是返回jQuery对象的实例。比如，上面代码表面上是选中li元素，实际上是返回对应于li元素的jQuery实例。
因为只有这样，才能在DOM对象上使用jQuery提供的各种方法。
```js
$('body').nodeType
// undefined

$('body') instanceof jQuery
// true
```
上面代码表示，由于jQuery返回的不是DOM对象，所以没有DOM属性nodeType。它返回的是jQuery对象的实例。

jQuery构造函数可以多种参数，返回不同的值。

<a id="markdown-css选择器作为参数" name="css选择器作为参数"></a>
#### CSS选择器作为参数
jQuery构造函数的参数，主要是CSS选择器。常用的有：

* `#id`
* element 
* .class 
* `*`
* selector1,selector2,selectorN 

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
jQuery的核心思想是“先选中某些网页元素，然后对其进行某种处理”（find something, do something），也就是说，先选择后处理，这是jQuery的基本操作模式。所以，绝大多数jQuery操作都是从选择器开始的，返回一个选中的结果集。

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

<a id="markdown-documentready" name="documentready"></a>
### $(document).ready()
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

$(document).ready()：加载完dom文档后立即执行，不再等图片、视频、广告等全部下载完成。

window.onload：除了加载完dom文档，还要等待所有的图片、视频、广告全部下载完毕才会执行。

所以在时间上，ready()的执行是在onload之前的。


参考引用：

[阮一峰 JavaScript 标准参考教程](http://javascript.ruanyifeng.com/)