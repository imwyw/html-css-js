<!-- TOC -->

- [标准库](#标准库)
    - [Object](#object)
        - [Object.keys()，Object.getOwnPropertyNames()](#objectkeysobjectgetownpropertynames)
    - [Array](#array)
        - [Array.isArray()](#arrayisarray)
        - [valueof(),toString()](#valueoftostring)
        - [push()](#push)
        - [pop()](#pop)
        - [join()](#join)
        - [concat()](#concat)
        - [shift()](#shift)
        - [unshift()](#unshift)
        - [reverse()](#reverse)
        - [slice()](#slice)
        - [splice()](#splice)
        - [sort()](#sort)
        - [map()](#map)
        - [forEach()](#foreach)
        - [filter()](#filter)
        - [some()，every()](#someevery)
        - [reduce()，reduceRight()](#reducereduceright)
        - [indexOf()，lastIndexOf()](#indexoflastindexof)
    - [Date对象](#date对象)
        - [new Date()](#new-date)
        - [get和set类方法](#get和set类方法)
    - [Math对象](#math对象)
    - [RegExp对象](#regexp对象)
        - [修饰符](#修饰符)
        - [正则表达式创建](#正则表达式创建)
        - [属性](#属性)
        - [test()](#test)
        - [exec()](#exec)
        - [字符串实例方法](#字符串实例方法)
            - [String.prototype.match()](#stringprototypematch)
            - [String.prototype.search()](#stringprototypesearch)
            - [String.prototype.replace()](#stringprototypereplace)
            - [String.prototype.split()](#stringprototypesplit)
        - [常见正则表达式](#常见正则表达式)
            - [数字表达式](#数字表达式)
            - [校验字符的表达式](#校验字符的表达式)
            - [特殊需求表达式](#特殊需求表达式)
            - [金额的描述](#金额的描述)

<!-- /TOC -->
<a id="markdown-标准库" name="标准库"></a>
# 标准库
<a id="markdown-object" name="object"></a>
## Object
javaScript 原生提供Object对象（注意起首的O是大写），所有其他对象都继承自这个对象。

Object本身也是一个构造函数，可以直接通过它来生成新对象。

```js
var obj = new Object();
var obj = {};//和上面的效果一样，更推荐花括号{}的方式
```

Object作为构造函数使用时，可以接受一个参数。

如果该参数是一个对象，则直接返回这个对象；

如果是一个原始类型的值，则返回该值对应的包装对象。

<a id="markdown-objectkeysobjectgetownpropertynames" name="objectkeysobjectgetownpropertynames"></a>
### Object.keys()，Object.getOwnPropertyNames()
Object.keys方法和Object.getOwnPropertyNames方法很相似，一般用来遍历对象的属性。

它们的参数都是一个对象，都返回一个数组，该数组的成员都是对象自身的（而不是继承的）所有属性名。

它们的区别在于：

Object.keys方法只返回可枚举的属性（关于可枚举性的详细解释见后文）

Object.getOwnPropertyNames方法还返回不可枚举的属性名。
```js
var o = {
  p1: 123,
  p2: 456
};

Object.keys(o)
// ["p1", "p2"]

Object.getOwnPropertyNames(o)
// ["p1", "p2"]

var a = ["Hello", "World"];

Object.keys(a)
// ["0", "1"]

Object.getOwnPropertyNames(a)
// ["0", "1", "length"]
```

<a id="markdown-array" name="array"></a>
## Array
Array是JavaScript的内置对象，同时也是一个构造函数，可以用它生成新的数组。
```js
var obj = new Array();
var obj = [];//和上面的效果一样，更推荐中括号[]的方式
```

<a id="markdown-arrayisarray" name="arrayisarray"></a>
### Array.isArray()
Array.isArray方法用来判断一个值是否为数组。它可以弥补typeof运算符的不足。
```js
var a = [1, 2, 3];

typeof a // "object"
Array.isArray(a) // true
```
上面代码中，typeof运算符只能显示数组的类型是Object，而Array.isArray方法可以对数组返回true。

<a id="markdown-valueoftostring" name="valueoftostring"></a>
### valueof(),toString()
valueOf方法返回数组本身。

toString方法返回数组的字符串形式。

```js
[1,2,3].valueOf();// (3) [1, 2, 3]
[1,2,3].toString();// "1,2,3"
```

<a id="markdown-push" name="push"></a>
### push()
push方法用于在数组的末端添加一个或多个元素，并返回添加新元素后的数组长度。

**注意，该方法会改变原数组**。

```js
var arr = [1,2,3];
arr.push(4);
arr.toString();// "1,2,3,4"
```

<a id="markdown-pop" name="pop"></a>
### pop()
pop方法用于删除数组的最后一个元素，并返回该元素。

**注意，该方法会改变原数组**。

```js
var arr = [1,2,3];
arr.pop();
arr.toString();// "1,2"
```

<a id="markdown-join" name="join"></a>
### join()
join方法以参数作为分隔符，将所有数组成员组成一个字符串返回。

如果不提供参数，默认用逗号分隔。

```js
[1,2,3].join();// "1,2,3"
[1,2,3].join('-');// "1-2-3"
```

<a id="markdown-concat" name="concat"></a>
### concat()
concat方法用于多个数组的合并。它将新数组的成员，添加到原数组的尾部，然后返回一个新数组，原数组不变。

```js
[1,2,3].concat(['a','b'],'hello');// (6) [1, 2, 3, "a", "b", "hello"]
```

<a id="markdown-shift" name="shift"></a>
### shift()
shift方法用于删除数组的第一个元素，并返回该元素。

**注意，该方法会改变原数组**。

```js
var arr = [1,2,3];
arr.shift();
arr.toString();// "2,3"
```

<a id="markdown-unshift" name="unshift"></a>
### unshift()
unshift方法用于在数组的第一个位置添加元素，并返回添加新元素后的数组长度。

**注意，该方法会改变原数组**。

```js
var arr = [1,2,3];
arr.unshift(4);
arr.toString();// "4,1,2,3"
```

<a id="markdown-reverse" name="reverse"></a>
### reverse()
reverse方法用于颠倒数组中元素的顺序，返回改变后的数组。

**注意，该方法会改变原数组**。

```js
var arr = [1,2,3];
arr.reverse();
arr.toString();// "3,2,1"
```

<a id="markdown-slice" name="slice"></a>
### slice()
slice方法用于提取原数组的一部分，返回一个新数组，原数组不变。

它的第一个参数为起始位置（从0开始），第二个参数为终止位置（但该位置的元素本身不包括在内）。

如果省略第二个参数，则一直返回到原数组的最后一个成员。

```js
var arr = [1,2,3,4,5];
arr.slice(1,3);// (2) [2, 3]
arr.slice(3);// (2) [4, 5]
```

<a id="markdown-splice" name="splice"></a>
### splice()
splice方法用于删除原数组的一部分成员，并可以在被删除的位置添加入新的数组成员，返回值是被删除的元素。

**注意，该方法会改变原数组**。

splice的第一个参数是删除的起始位置，第二个参数是被删除的元素个数。

如果后面还有更多的参数，则表示这些就是要被插入数组的新元素。

```js
var arr = [1,2,3,4,5];
arr.splice(3);// 从3位置删到结束
arr.toString();// "1,2,3"

arr = [1,2,3,4,5];
arr.splice(3,1);// 从3位置删除1个元素
arr.toString();// "1,2,3,5"

arr = [1,2,3,4,5];
arr.splice(3,0,'hello');
arr.toString();// "1,2,3,hello,4,5"
```

<a id="markdown-sort" name="sort"></a>
### sort()
sort方法对数组成员进行排序，默认是按照字典顺序排序。排序后，原数组将被改变。
```js
['d', 'c', 'b', 'a'].sort()
// ['a', 'b', 'c', 'd']

[4, 3, 2, 1].sort()
// [1, 2, 3, 4]

[11, 101].sort()
// [101, 11]

[10111, 1101, 111].sort()
// [10111, 1101, 111]
```
上面代码的最后两个例子，需要特殊注意。sort方法不是按照大小排序，而是按照对应字符串的字典顺序排序。

也就是说，数值会被先转成字符串，再按照字典顺序进行比较，所以101排在11的前面。

如果想让sort方法按照自定义方式排序，可以传入一个函数作为参数，表示按照自定义方法进行排序。

该函数本身又接受两个参数，表示进行比较的两个元素。

如果返回值大于0，表示第一个元素排在第二个元素后面；

其他情况下，都是第一个元素排在第二个元素前面。

```js
[10111, 1101, 111].sort(function (a, b) {
  return a - b;
})
// [111, 1101, 10111]

[
  { name: "张三", age: 30 },
  { name: "李四", age: 24 },
  { name: "王五", age: 28  }
].sort(function (o1, o2) {
  return o1.age - o2.age;
})
// [
//   { name: "李四", age: 24 },
//   { name: "王五", age: 28  },
//   { name: "张三", age: 30 }
// ]
```

<a id="markdown-map" name="map"></a>
### map()
map方法对数组的所有成员依次调用一个函数，根据函数结果返回一个新数组。
```js
var numbers = [1, 2, 3];

numbers.map(function (n) {
  return n + 1;
});
// [2, 3, 4]

numbers
// [1, 2, 3]
```

<a id="markdown-foreach" name="foreach"></a>
### forEach()
forEach方法与map方法很相似，也是遍历数组的所有成员，执行某种操作，

但是forEach方法一般不返回值，只用来操作数据。如果需要有返回值，一般使用map方法。

forEach方法的参数与map方法一致，也是一个函数，数组的所有成员会依次执行该函数。

它接受三个参数，分别是当前位置的值、当前位置的编号和整个数组。

```js
var arr = ['h', 'e', 'l', 'l', 'o'];
arr.forEach(function (v, i) {
  console.log("索引：" + i + ",值：" + v);
});
```

<a id="markdown-filter" name="filter"></a>
### filter()
filter方法的参数是一个函数，所有数组成员依次执行该函数，返回结果为true的成员组成一个新数组返回。

该方法不会改变原数组。

```js
var arr = [1,2,3,4,5];
var arrNew = arr.filter(function(v){ return v%2==0?false:true; });
arrNew.toString();// "1,3,5"
```

<a id="markdown-someevery" name="someevery"></a>
### some()，every()
这两个方法类似“断言”（assert），用来判断数组成员是否符合某种条件。

它们接受一个函数作为参数，所有数组成员依次执行该函数，返回一个布尔值。

该函数接受三个参数，依次是当前位置的成员、当前位置的序号和整个数组。

some方法是只要有一个数组成员的返回值是true，则整个some方法的返回值就是true，否则false。

```js
var arr = [1,2,3,4,5];
arr.some(function(v){ if(v%2==0){ return true; } });// true
arr.every(function(v){ if(v%2==0){ return true; } });// false
```

<a id="markdown-reducereduceright" name="reducereduceright"></a>
### reduce()，reduceRight()
对数组中的所有元素调用指定的回调函数。

该回调函数的返回值为累积结果，并且此返回值在下一次调用该回调函数时作为参数提供。

它们的差别是，reduce是从左到右处理（从第一个成员到最后一个成员），reduceRight则是从右到左（从最后一个成员到第一个成员），其他完全一样。

```js
var arr = ["abc", 123, 456, "def"];
arr.reduce(function(pre,cur){ return pre+'-'+cur; });// "abc-123-456-def"
arr.reduceRight(function(pre,cur){ return pre+'-'+cur; });// "def-456-123-abc"
```

```js
var arr = [1,2,3,4,5];
arr.reduce(function(pre,cur){ return pre+cur; });// 15
arr.reduceRight(function(pre,cur){ return pre+cur; });// 15
```

<a id="markdown-indexoflastindexof" name="indexoflastindexof"></a>
### indexOf()，lastIndexOf()
indexOf方法返回给定元素在数组中第一次出现的位置，如果没有出现则返回-1。

```js
var arr = ['h', 'e', 'l', 'l', 'o'];
arr.indexOf('h');// 0
arr.indexOf('e');// 1
arr.indexOf('w');// -1
```

<a id="markdown-date对象" name="date对象"></a>
## Date对象
<a id="markdown-new-date" name="new-date"></a>
### new Date()
```js
//返回当前时间字符串
Date();//"Tue Oct 17 2017 22:14:40 GMT+0800 (中国标准时间)"

//返回当前时间的对象
new Date();//Tue Oct 17 2017 22:12:08 GMT+0800 (中国标准时间)

new Date("2017-09-11");//....还有很多

var curDate = new Date();
```

<a id="markdown-get和set类方法" name="get和set类方法"></a>
### get和set类方法
方法 | 说明
---|---
getTime() | 返回距离1970年1月1日00:00:00的毫秒数，等同于valueOf方法。
getDate() | 返回实例对象对应每个月的几号（从1开始）。
getDay() | 返回星期几，星期日为0，星期一为1，以此类推。
getYear() | 返回距离1900的年数。
getFullYear() | 返回四位的年份。
getMonth() | 返回月份（0表示1月，11表示12月）。
getHours() | 返回小时（0-23）。
getMilliseconds() | 返回毫秒（0-999）。
getMinutes() | 返回分钟（0-59）。
getSeconds() | 返回秒（0-59）。
getTimezoneOffset() | 返回当前时间与UTC的时区差异，以分钟表示，返回结果考虑到了夏令时因素。
setDate(date) | 设置实例对象对应的每个月的几号（1-31），返回改变后毫秒时间戳。
setYear(year)  |   设置距离1900年的年数。
`setFullYear(year [, month, date])` | 设置四位年份。
`setHours(hour [, min, sec, ms])` | 设置小时（0-23）。
setMilliseconds() | 设置毫秒（0-999）。
`setMinutes(min [, sec, ms])` | 设置分钟（0-59）。
`setMonth(month [, date])` | 设置月份（0-11）。
`setSeconds(sec [, ms])` | 设置秒（0-59）。
`setTime(milliseconds)` | 设置毫秒时间戳。

<a id="markdown-math对象" name="math对象"></a>
## Math对象
* Math.abs()：绝对值
* Math.ceil()：向上取整
* Math.floor()：向下取整
* Math.max()：最大值
* Math.min()：最小值
* Math.pow()：指数运算
* Math.sqrt()：平方根
* Math.log()：自然对数
* Math.exp()：e的指数
* Math.round()：四舍五入
* Math.random()：随机数

<a id="markdown-regexp对象" name="regexp对象"></a>
## RegExp对象
正则表达式是用于匹配字符串中字符组合的模式。

在 JavaScript中，正则表达式也是对象。

这些模式被用于 RegExp 的 exec 和 test 方法, 

以及 String 的 match、matchAll、replace、search 和 split 方法。

比如，正则表达式给出一个 Email 地址的模式，然后用它来确定一个字符串是否为 Email 地址。

<a id="markdown-修饰符" name="修饰符"></a>
### 修饰符

参数 | 含义 | 备注
---|----|---
i | 忽略大小写
g | 全局匹配
m | 多行匹配
u | 正确处理四个字节的UTF-16编码 | ES6新增
y | 确保匹配必须从剩余的第一个位置开始 | ES6新增

<a id="markdown-正则表达式创建" name="正则表达式创建"></a>
### 正则表达式创建

新建正则表达式有两种方法:
```js
//字面量，以斜杠表示开始和结束。特别强调，此处没有引号包含。推荐此方式，简单直接！
var regex = /xyz/;
var regex = /xyz/ig;

//RegExp 构造函数
var regex = new RegExp('xyz');
var regex = new RegExp('xyz','ig');
```

<a id="markdown-属性" name="属性"></a>
### 属性

一类是修饰符相关，返回一个布尔值，表示对应的修饰符是否设置。

* ignoreCase：返回一个布尔值，表示是否设置了i修饰符，该属性只读。
* global：返回一个布尔值，表示是否设置了g修饰符，该属性只读。
* multiline：返回一个布尔值，表示是否设置了m修饰符，该属性只读。

另一类是与修饰符无关的属性，主要是下面两个。

* lastIndex：返回下一次开始搜索的位置。该属性可读写，但是只在设置了g修饰符时有意义。
* source：返回正则表达式的字符串形式（不包括反斜杠），该属性只读。

<a id="markdown-test" name="test"></a>
### test()
正则对象的test方法返回一个布尔值，表示当前模式是否能匹配参数字符串。
```js
//验证参数字符串之中是否包含cat
var str = 'Cats and dogs';
var reg = /cat/ig;
var reg1 = new RegExp('cat','i');
reg.test(str);// true

/cat/.test(str); // false
reg1.test(str);// true
```

<a id="markdown-exec" name="exec"></a>
### exec()
正则对象的exec方法，可以返回匹配结果。

如果发现匹配，就返回一个数组，成员是每一个匹配成功的子字符串，否则返回null。

exec方法的返回数组还包含以下两个属性：

input：整个原字符串。

index：整个模式匹配成功的开始位置（从0开始计数）。
```js
var reg = new RegExp("a");
reg.exec("abca");//["a", index: 0, input: "abca"]
```

<a id="markdown-字符串实例方法" name="字符串实例方法"></a>
### 字符串实例方法

<a id="markdown-stringprototypematch" name="stringprototypematch"></a>
#### String.prototype.match()
字符串对象的match方法对字符串进行正则匹配，返回匹配结果。

从上面代码可以看到，字符串的match方法与正则对象的exec方法非常类似：

匹配成功返回一个数组，匹配失败返回null。

如果正则表达式带有g修饰符，则该方法与正则对象的exec方法行为不同，会一次性返回所有匹配成功的结果。
```js
var str = "abca";
str.match(/a/g);// ["a","a"]
str.match(/a/);// ["a", index: 0, input: "abca", groups: undefined]
/a/g.exec(str);// ["a", index: 0, input: "abca", groups: undefined]
```

<a id="markdown-stringprototypesearch" name="stringprototypesearch"></a>
#### String.prototype.search()
字符串对象的search方法，返回第一个满足条件的匹配结果在整个字符串中的位置。如果没有任何匹配，则返回-1。该方法会忽略g修饰符。
```js
"abc".search(/a/);//0
```

<a id="markdown-stringprototypereplace" name="stringprototypereplace"></a>
#### String.prototype.replace()
字符串对象的replace方法可以替换匹配的值。它接受两个参数，第一个是搜索模式，第二个是替换的内容。
```js
var str = "abca";
str.replace("a","w");//wbca
str.replace(/a/,"w");//wbca
str.replace(/a/g,"w");//wbcw
```
更多高级用法课下研究。

<a id="markdown-stringprototypesplit" name="stringprototypesplit"></a>
#### String.prototype.split()
字符串对象的split方法按照正则规则分割字符串，返回一个由分割后的各个部分组成的数组。
```js
/*
str.split(separator, [limit])
该方法接受两个参数，第一个参数是分隔规则，第二个参数是返回数组的最大成员数。
*/

var str = "a,  b,c, d";
// 非正则分隔
str.split(',');
// [ 'a', '  b', 'c', ' d' ]

// 正则分隔，去除多余的空格
str.split(/, */);
// [ 'a', 'b', 'c', 'd' ]

// 指定返回数组的最大成员
str.split(/, */, 2);
//[ 'a', 'b' ]
```

<a id="markdown-常见正则表达式" name="常见正则表达式"></a>
### 常见正则表达式

<a id="markdown-数字表达式" name="数字表达式"></a>
#### 数字表达式

```js
数字：^[0-9]*$
n位的数字：^\d{n}$
至少n位的数字：^\d{n,}$
m-n位的数字：^\d{m,n}$
零和非零开头的数字：^(0|[1-9][0-9]*)$
非零开头的最多带两位小数的数字：^([1-9][0-9]*)+(\.[0-9]{1,2})?$
带1-2位小数的正数或负数：^(\-)?\d+(\.\d{1,2})$
正数、负数、和小数：^(\-|\+)?\d+(\.\d+)?$
有两位小数的正实数：^[0-9]+(\.[0-9]{2})?$
有1~3位小数的正实数：^[0-9]+(\.[0-9]{1,3})?$
非零的正整数：^[1-9]\d*$ 或 ^([1-9][0-9]*){1,3}$ 或 ^\+?[1-9][0-9]*$
非零的负整数：^\-[1-9][]0-9"*$ 或 ^-[1-9]\d*$
非负整数：^\d+$ 或 ^[1-9]\d*|0$
非正整数：^-[1-9]\d*|0$ 或 ^((-\d+)|(0+))$
非负浮点数：^\d+(\.\d+)?$ 或 ^[1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0$
非正浮点数：^((-\d+(\.\d+)?)|(0+(\.0+)?))$ 或 ^(-([1-9]\d*\.\d*|0\.\d*[1-9]\d*))|0?\.0+|0$
正浮点数：^[1-9]\d*\.\d*|0\.\d*[1-9]\d*$ 或 ^(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$
负浮点数：^-([1-9]\d*\.\d*|0\.\d*[1-9]\d*)$ 或 ^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$
浮点数：^(-?\d+)(\.\d+)?$ 或 ^-?([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0)$
```

<a id="markdown-校验字符的表达式" name="校验字符的表达式"></a>
#### 校验字符的表达式

```js
汉字：^[\u4e00-\u9fa5]{0,}$
英文和数字：^[A-Za-z0-9]+$ 或 ^[A-Za-z0-9]{4,40}$
长度为3-20的所有字符：^.{3,20}$
由26个英文字母组成的字符串：^[A-Za-z]+$
由26个大写英文字母组成的字符串：^[A-Z]+$
由26个小写英文字母组成的字符串：^[a-z]+$
由数字和26个英文字母组成的字符串：^[A-Za-z0-9]+$
由数字、26个英文字母或者下划线组成的字符串：^\w+$ 或 ^\w{3,20}$
中文、英文、数字包括下划线：^[\u4E00-\u9FA5A-Za-z0-9_]+$
中文、英文、数字但不包括下划线等符号：^[\u4E00-\u9FA5A-Za-z0-9]+$ 或 ^[\u4E00-\u9FA5A-Za-z0-9]{2,20}$
可以输入含有^%&',;=?$\"等字符：[^%&',;=?$\x22]+
禁止输入含有~的字符：[^~\x22]+
```

<a id="markdown-特殊需求表达式" name="特殊需求表达式"></a>
#### 特殊需求表达式

```js
Email地址：^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$
域名：[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(/.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+/.?
InternetURL：[a-zA-z]+://[^\s]* 或 ^http://([\w-]+\.)+[\w-]+(/[\w-./?%&=]*)?$
手机号码：^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$
电话号码("XXX-XXXXXXX"、"XXXX-XXXXXXXX"、"XXX-XXXXXXX"、"XXX-XXXXXXXX"、"XXXXXXX"和"XXXXXXXX)：^(\(\d{3,4}-)|\d{3.4}-)?\d{7,8}$
国内电话号码(0511-4405222、021-87888822)：\d{3}-\d{8}|\d{4}-\d{7}
电话号码正则表达式（支持手机号码，3-4位区号，7-8位直播号码，1－4位分机号）: ((\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$)
身份证号(15位、18位数字)，最后一位是校验位，可能为数字或字符X：(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)
帐号是否合法(字母开头，允许5-16字节，允许字母数字下划线)：^[a-zA-Z][a-zA-Z0-9_]{4,15}$
密码(以字母开头，长度在6~18之间，只能包含字母、数字和下划线)：^[a-zA-Z]\w{5,17}$
强密码(必须包含大小写字母和数字的组合，不能使用特殊字符，长度在 8-10 之间)：^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,10}$
强密码(必须包含大小写字母和数字的组合，可以使用特殊字符，长度在8-10之间)：^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$
日期格式：^\d{4}-\d{1,2}-\d{1,2}
一年的12个月(01～09和1～12)：^(0?[1-9]|1[0-2])$
一个月的31天(01～09和1～31)：^((0?[1-9])|((1|2)[0-9])|30|31)$
xml文件：^([a-zA-Z]+-?)+[a-zA-Z0-9]+\\.[x|X][m|M][l|L]$
中文字符的正则表达式：[\u4e00-\u9fa5]
双字节字符：[^\x00-\xff] (包括汉字在内，可以用来计算字符串的长度(一个双字节字符长度计2，ASCII字符计1))
空白行的正则表达式：\n\s*\r (可以用来删除空白行)
HTML标记的正则表达式：<(\S*?)[^>]*>.*?|<.*? /> ( 首尾空白字符的正则表达式：^\s*|\s*$或(^\s*)|(\s*$) (可以用来删除行首行尾的空白字符(包括空格、制表符、换页符等等)，非常有用的表达式)
腾讯QQ号：[1-9][0-9]{4,} (腾讯QQ号从10000开始)
中国邮政编码：[1-9]\d{5}(?!\d) (中国邮政编码为6位数字)
IP地址：((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))
```

<a id="markdown-金额的描述" name="金额的描述"></a>
#### 金额的描述
```js
钱的输入格式：
  有四种钱的表示形式我们可以接受:"10000.00" 和 "10,000.00", 和没有 "分" 的 "10000" 和 "10,000"：^[1-9][0-9]*$
  这表示任意一个不以0开头的数字,但是,这也意味着一个字符"0"不通过,所以我们采用下面的形式：^(0|[1-9][0-9]*)$
  一个0或者一个不以0开头的数字.我们还可以允许开头有一个负号：^(0|-?[1-9][0-9]*)$
  这表示一个0或者一个可能为负的开头不为0的数字.让用户以0开头好了.把负号的也去掉,因为钱总不能是负的吧。下面我们要加的是说明可能的小数部分：^[0-9]+(.[0-9]+)?$
  必须说明的是,小数点后面至少应该有1位数,所以"10."是不通过的,但是 "10" 和 "10.2" 是通过的：^[0-9]+(.[0-9]{2})?$
  这样我们规定小数点后面必须有两位,如果你认为太苛刻了,可以这样：^[0-9]+(.[0-9]{1,2})?$
  这样就允许用户只写一位小数.下面我们该考虑数字中的逗号了,我们可以这样：^[0-9]{1,3}(,[0-9]{3})*(.[0-9]{1,2})?$
  1到3个数字,后面跟着任意个 逗号+3个数字,逗号成为可选,而不是必须：^([0-9]+|[0-9]{1,3}(,[0-9]{3})*)(.[0-9]{1,2})?$
  备注：这就是最终结果了,别忘了"+"可以用"*"替代如果你觉得空字符串也可以接受的话(奇怪,为什么?)最后,别忘了在用函数时去掉去掉那个反斜杠,一般的错误都在这里
```


---


参考引用：

[阮一峰 JavaScript 标准参考教程](http://javascript.ruanyifeng.com/)

[阮一峰 undefined与null的区别](http://www.ruanyifeng.com/blog/2014/03/undefined-vs-null.html)

[菜鸟工具在线校验](https://c.runoob.com/front-end/854)
