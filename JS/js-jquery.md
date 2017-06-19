# jQuery
jQuery是目前使用最广泛的JavaScript函数库。据统计，全世界57.5%的网站使用jQuery，在使用JavaScript函数库的网站中，93.0%使用jQuery。它已经成了开发者必须学会的技能。

jQuery的最大优势有两个。首先，它基本是一个DOM操作工具，可以使操作DOM对象变得异常容易。其次，它统一了不同浏览器的API接口，使得代码在所有现代浏览器均能运行，开发者不用担心浏览器之间的差异。

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
- [Google CDN](https://developers.google.com/speed/libraries/#jquery)
- [Microsoft CDN](https://docs.microsoft.com/en-us/aspnet/ajax/cdn/overview#jQuery_Releases_on_the_CDN_0)
- [jQuery CDN](http://jquery.com/download/#jquery-39-s-cdn-provided-by-maxcdn)
- [CDNJS CDN](https://cdnjs.com/libraries/jquery/)
- [jsDelivr CDN](http://www.jsdelivr.com/#!jquery)

## 基础
jQuery最重要的概念，就是jQuery对象。它是一个全局对象，可以简写为美元符号$。也就是说，jQuery和$两者是等价的。

在网页中加载jQuery函数库以后，就可以使用jQuery对象了。jQuery的全部方法，都定义在这个对象上面。
```js
var listItems = jQuery('li');
// or
var listItems = $('li');
```
上面两行代码是等价的，表示选中网页中所有的li元素。

