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

<!-- /TOC -->
# 标准库
## Object
javaScript 原生提供Object对象（注意起首的O是大写），所有其他对象都继承自这个对象。Object本身也是一个构造函数，可以直接通过它来生成新对象。

```js
var obj = new Object();
var obj = {};//和上面的效果一样，更推荐花括号{}的方式
```

Object作为构造函数使用时，可以接受一个参数。如果该参数是一个对象，则直接返回这个对象；如果是一个原始类型的值，则返回该值对应的包装对象。

### Object.keys()，Object.getOwnPropertyNames()
Object.keys方法和Object.getOwnPropertyNames方法很相似，一般用来遍历对象的属性。它们的参数都是一个对象，都返回一个数组，该数组的成员都是对象自身的（而不是继承的）所有属性名。它们的区别在于，Object.keys方法只返回可枚举的属性（关于可枚举性的详细解释见后文），Object.getOwnPropertyNames方法还返回不可枚举的属性名。
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

## Array
Array是JavaScript的内置对象，同时也是一个构造函数，可以用它生成新的数组。
```js
var obj = new Array();
var obj = [];//和上面的效果一样，更推荐中括号[]的方式
```

### Array.isArray()
Array.isArray方法用来判断一个值是否为数组。它可以弥补typeof运算符的不足。
```js
var a = [1, 2, 3];

typeof a // "object"
Array.isArray(a) // true
```
上面代码中，typeof运算符只能显示数组的类型是Object，而Array.isArray方法可以对数组返回true。

### valueof(),toString()
valueOf方法返回数组本身。

toString方法返回数组的字符串形式。

### push()
push方法用于在数组的末端添加一个或多个元素，并返回添加新元素后的数组长度。注意，该方法会改变原数组。

### pop()
pop方法用于删除数组的最后一个元素，并返回该元素。注意，该方法会改变原数组。

### join()
join方法以参数作为分隔符，将所有数组成员组成一个字符串返回。如果不提供参数，默认用逗号分隔。

### concat()
concat方法用于多个数组的合并。它将新数组的成员，添加到原数组的尾部，然后返回一个新数组，原数组不变。

### shift()
shift方法用于删除数组的第一个元素，并返回该元素。注意，该方法会改变原数组。

### unshift()
unshift方法用于在数组的第一个位置添加元素，并返回添加新元素后的数组长度。注意，该方法会改变原数组。

### reverse()
reverse方法用于颠倒数组中元素的顺序，返回改变后的数组。注意，该方法将改变原数组。

### slice()
slice方法用于提取原数组的一部分，返回一个新数组，原数组不变。

它的第一个参数为起始位置（从0开始），第二个参数为终止位置（但该位置的元素本身不包括在内）。如果省略第二个参数，则一直返回到原数组的最后一个成员。

### splice()
splice方法用于删除原数组的一部分成员，并可以在被删除的位置添加入新的数组成员，返回值是被删除的元素。注意，该方法会改变原数组。

splice的第一个参数是删除的起始位置，第二个参数是被删除的元素个数。如果后面还有更多的参数，则表示这些就是要被插入数组的新元素。

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
上面代码的最后两个例子，需要特殊注意。sort方法不是按照大小排序，而是按照对应字符串的字典顺序排序。也就是说，数值会被先转成字符串，再按照字典顺序进行比较，所以101排在11的前面。

如果想让sort方法按照自定义方式排序，可以传入一个函数作为参数，表示按照自定义方法进行排序。该函数本身又接受两个参数，表示进行比较的两个元素。如果返回值大于0，表示第一个元素排在第二个元素后面；其他情况下，都是第一个元素排在第二个元素前面。
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

### forEach()
forEach方法与map方法很相似，也是遍历数组的所有成员，执行某种操作，但是forEach方法一般不返回值，只用来操作数据。如果需要有返回值，一般使用map方法。

forEach方法的参数与map方法一致，也是一个函数，数组的所有成员会依次执行该函数。它接受三个参数，分别是当前位置的值、当前位置的编号和整个数组。

### filter()
filter方法的参数是一个函数，所有数组成员依次执行该函数，返回结果为true的成员组成一个新数组返回。该方法不会改变原数组。

### some()，every()
这两个方法类似“断言”（assert），用来判断数组成员是否符合某种条件。

它们接受一个函数作为参数，所有数组成员依次执行该函数，返回一个布尔值。该函数接受三个参数，依次是当前位置的成员、当前位置的序号和整个数组。

some方法是只要有一个数组成员的返回值是true，则整个some方法的返回值就是true，否则false。

### reduce()，reduceRight()
reduce方法和reduceRight方法依次处理数组的每个成员，最终累计为一个值。

它们的差别是，reduce是从左到右处理（从第一个成员到最后一个成员），reduceRight则是从右到左（从最后一个成员到第一个成员），其他完全一样。

### indexOf()，lastIndexOf()
indexOf方法返回给定元素在数组中第一次出现的位置，如果没有出现则返回-1。

参考引用：

[阮一峰 JavaScript 标准参考教程](http://javascript.ruanyifeng.com/)

[阮一峰 undefined与null的区别](http://www.ruanyifeng.com/blog/2014/03/undefined-vs-null.html)