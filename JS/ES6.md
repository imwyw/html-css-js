<!-- TOC -->

- [ES6](#es6)
    - [历史背景](#历史背景)
        - [ECMAScript和JavaScript的关系](#ecmascript和javascript的关系)
        - [历史版本](#历史版本)
        - [ES6与ECMAScript 2015的关系](#es6与ecmascript-2015的关系)
    - [let和const](#let和const)
        - [let基本用法（重要）](#let基本用法重要)
        - [变量提升](#变量提升)
        - [块级作用域](#块级作用域)
        - [const命令（重要）](#const命令重要)
        - [区别](#区别)
    - [字符串扩展](#字符串扩展)
        - [includes(), startsWith(), endsWith()](#includes-startswith-endswith)
        - [repeat()](#repeat)
        - [padStart()，padEnd()](#padstartpadend)
        - [模板字符串（重要）](#模板字符串重要)
    - [for...of](#forof)
    - [函数扩展](#函数扩展)
        - [参数默认值](#参数默认值)
        - [rest参数](#rest参数)
        - [函数name属性](#函数name属性)
        - [箭头函数（重要）](#箭头函数重要)
    - [Symbol](#symbol)
        - [JS中函数传参](#js中函数传参)
        - [值相等](#值相等)
        - [symbol 作为对象的属性](#symbol-作为对象的属性)
        - [阻止对象名冲突](#阻止对象名冲突)
    - [对象新增用法](#对象新增用法)
        - [属性的简洁表示法](#属性的简洁表示法)
        - [属性的遍历](#属性的遍历)
        - [解构](#解构)
        - [Object.is()](#objectis)
        - [Object.assign()](#objectassign)
    - [Class基本用法](#class基本用法)
        - [类的由来（重要）](#类的由来重要)
        - [class表达式](#class表达式)
        - [不存在提升](#不存在提升)
        - [name封装](#name封装)
        - [this指向](#this指向)
        - [静态方法](#静态方法)
        - [实例属性](#实例属性)
        - [静态属性](#静态属性)
        - [私有方法](#私有方法)
        - [私有属性](#私有属性)
        - [Class的继承](#class的继承)
    - [Promise 对象](#promise-对象)
        - [基本用法](#基本用法)
        - [Promise.prototype.then()](#promiseprototypethen)
        - [Promise.prototype.catch()](#promiseprototypecatch)
        - [Promise.prototype.finally()](#promiseprototypefinally)
        - [Promise.all()](#promiseall)
        - [结合ajax的Promise](#结合ajax的promise)
    - [Module 模块](#module-模块)
        - [export和import](#export和import)

<!-- /TOC -->

<a id="markdown-es6" name="es6"></a>
# ES6

ECMAScript 6.0（以下简称ES6）是JavaScript语言的下一代标准，已经在2015年6月正式发布了。

它的目标，是使得JavaScript语言可以用来编写复杂的大型应用程序，成为企业级开发语言。

<a id="markdown-历史背景" name="历史背景"></a>
## 历史背景

<a id="markdown-ecmascript和javascript的关系" name="ecmascript和javascript的关系"></a>
### ECMAScript和JavaScript的关系
一个常见的问题是，ECMAScript和JavaScript到底是什么关系？

1996年11月，JavaScript的创造者Netscape公司，决定将JavaScript提交给国际标准化组织ECMA，希望这种语言能够成为国际标准。

次年，ECMA发布262号标准文件（ECMA-262）的第一版，规定了浏览器脚本语言的标准，并将这种语言称为ECMAScript，这个版本就是1.0版。

该标准从一开始就是针对JavaScript语言制定的，但是之所以不叫JavaScript，有两个原因。

一是商标，Java是Sun公司的商标，根据授权协议，只有Netscape公司可以合法地使用JavaScript这个名字，且JavaScript本身也已经被Netscape公司注册为商标。

二是想体现这门语言的制定者是ECMA，不是Netscape，这样有利于保证这门语言的开放性和中立性。

因此，ECMAScript和JavaScript的关系是，前者是后者的规格，后者是前者的一种实现（另外的ECMAScript方言还有Jscript和ActionScript）。

日常场合，这两个词是可以互换的。

<a id="markdown-历史版本" name="历史版本"></a>
### 历史版本

1. 1997年6月：第一版
2. 1998年6月：修改格式，使其与ISO/IEC16262国际标准一样
3. 1999年12月：强大的正则表达式，更好的词法作用域链处理，新的控制指令，异常处理，错误定义更加明确，数据输出的格式化及其它改变
4. 2009年12月：添加严格模式("use strict")。修改了前面版本模糊不清的概念。增加了getters，setters，JSON以及在对象属性上更完整的反射。
5. 2011年6月：ECMAScript标5.1版形式上完全一致于国际标准ISO/IEC 16262:2011。
6. 2015年6月：ECMAScript 2015（ES2015），第 6 版，最早被称作是 ECMAScript 6（ES6），添加了类和模块的语法，其他特性包括迭代器。
7. 2016年6月：ECMAScript 2016（ES2016），第 7 版，多个新的概念和语言特性。
8. 2017年6月：ECMAScript 2017（ES2017），第 8 版，多个新的概念和语言特性。
9. 2018年6月：ECMAScript 2018 （ES2018），第 9 版，包含了异步循环，生成器，新的正则表达式特性和 rest/spread 语法。
10. 2019年6月：ECMAScript 2019 （ES2019），第 10 版。

<a id="markdown-es6与ecmascript-2015的关系" name="es6与ecmascript-2015的关系"></a>
### ES6与ECMAScript 2015的关系

2011年，ECMAScript 5.1版发布后，就开始制定6.0版了。因此，”ES6”这个词的原意，就是指JavaScript语言的下一个版本。

标准委员会最终决定，标准在每年的 6 月份正式发布一次，作为当年的正式版本。

接下来的时间，就在这个版本的基础上做改动，直到下一年的 6 月份，草案就自然变成了新一年的版本。

这样一来，就不需要以前的版本号了，只要用年份标记就可以了。

ES6 的第一个版本，就这样在 2015 年 6 月发布了，正式名称就是《ECMAScript 2015 标准》（简称 ES2015）。

2016 年 6 月，小幅修订的《ECMAScript 2016 标准》（简称 ES2016）如期发布，这个版本可以看作是 ES6.1 版，

因为两者的差异非常小（只新增了数组实例的includes方法和指数运算符），基本上是同一个标准。

因此，ES6 既是一个历史名词，也是一个泛指，含义是 5.1 版以后的 JavaScript 的下一代标准，涵盖了 ES2015、ES2016、ES2017 等等。

<a id="markdown-let和const" name="let和const"></a>
## let和const

<a id="markdown-let基本用法重要" name="let基本用法重要"></a>
### let基本用法（重要）
在ES6之前，我们都是用var关键字声明变量。

无论声明在何处，都会被视为声明在函数的最顶部(不在函数内即在全局作用域的最顶部)。

这就是函数变量提升例如:

```js
for (var i = 0; i < 10; i++) {}
console.log(i);// output: 10

for (let j = 0; j < 10; j++) {}
console.log(j);// output: j is not defined
```

在上面的for循环中，分别用let和var声明了两个变量。

然后在代码块之外调用这两个变量，结果let声明的变量报错，var声明的变量返回了正确的值。

这表明，let声明的变量只在它所在的代码块有效。

---

for循环的计数器，就很适合使用let命令。

```js
var a = [];
for (var i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    };
}
a[6](); // 10
```
上面代码中，变量i是var命令声明的，在全局范围内都有效，所以全局只有一个变量i。

每一次循环，变量i的值都会发生改变，而循环内被赋给数组a的函数内部的console.log(i)，里面的i指向的就是全局的i。

也就是说，所有数组a的成员里面的i，指向的都是同一个i，导致运行时输出的是最后一轮的i的值，也就是 10。

---

```js
var a = [];
for (let i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    };
}
a[6](); // 6
```

上面代码中，变量i是let声明的，当前的i只在本轮循环有效，所以每一次循环的i其实都是一个新的变量，所以最后输出的是6。

<a id="markdown-变量提升" name="变量提升"></a>
### 变量提升
var命令会发生“变量提升”现象，即变量可以在声明之前使用，值为undefined。

这种现象多多少少是有些奇怪的，按照一般的逻辑，变量应该在声明语句之后才可以使用。

为了纠正这种现象，let命令改变了语法行为，它所声明的变量一定要在声明后使用，否则报错。

```js
// var 的情况
console.log(foo); // 输出undefined
var foo = 2;

// let 的情况
console.log(bar); // 报错ReferenceError
let bar = 2;
```

上面代码中，变量foo用var命令声明，会发生变量提升，即脚本开始运行时，变量foo已经存在了，但是没有值，所以会输出undefined。

变量bar用let命令声明，不会发生变量提升。这表示在声明它之前，变量bar是不存在的，这时如果用到它，就会抛出一个错误。

---

只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。

```js
var tmp = 123;

if (true) {
    tmp = 'abc'; // ReferenceError
    let tmp;
}
```

<a id="markdown-块级作用域" name="块级作用域"></a>
### 块级作用域
ES5 只有全局作用域和函数作用域，没有块级作用域，这带来很多不合理的场景。

第一种场景，内层变量可能会覆盖外层变量。

```js
var tmp = new Date();

function f() {
    console.log(tmp);
    if (true) {
        var tmp = 'hello world';
    }
}

f(); // undefined
```

上面代码的原意是，if代码块的外部使用外层的tmp变量，内部使用内层的tmp变量。

但是，函数f执行后，输出结果为undefined，原因在于变量提升，导致内层的tmp变量覆盖了外层的tmp变量。

---

第二种场景，用来计数的循环变量泄露为全局变量。

```js
var s = 'hello';

for (var i = 0; i < s.length; i++) {
    console.log(s[i]);
}

console.log(i); // 5
```

上面代码中，变量i只用来控制循环，但是循环结束后，它并没有消失，泄露成了全局变量。

---

ES6块级作用域，let实际上为 JavaScript 新增了块级作用域。

```js
function f1() {
    let n = 5;
    if (true) {
        let n = 10;
    }
    console.log(n); // 5
}
```
上面的函数有两个代码块，都声明了变量n，运行后输出 5。这表示外层代码块不受内层代码块的影响。

如果两次都使用var定义变量n，最后输出的值才是 10。

<a id="markdown-const命令重要" name="const命令重要"></a>
### const命令（重要）
const声明一个只读的常量。一旦声明，常量的值就不能改变。

```js
const PI = 3.1415;
PI // 3.1415

PI = 3;
// TypeError: Assignment to constant variable.
```

const声明的变量不得改变值，这意味着，const一旦声明变量，就必须立即初始化，不能留到以后赋值。

---

const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动。

对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。

但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指向实际数据的指针，

const只能保证这个指针是固定的（即总是指向另一个固定的地址），至于它指向的数据结构是不是可变的，就完全不能控制了。

因此，将一个对象声明为常量必须非常小心。

```js
const foo = {};

// 为 foo 添加一个属性，可以成功
foo.prop = 123;
foo.prop // 123

// 将 foo 指向另一个对象，就会报错
foo = {}; // TypeError: "foo" is read-only
```

<a id="markdown-区别" name="区别"></a>
### 区别

&nbsp; | var | let | const
-------|-----|-----|------
变量提升 | √ | × | ×
全局变量 | √ | × | ×
重复声明 | √ | × | ×
重新赋值 | √ | √ | ×
块作用域 | × | √ | √
只声明不初始化 | √ | √ | ×

<a id="markdown-字符串扩展" name="字符串扩展"></a>
## 字符串扩展

<a id="markdown-includes-startswith-endswith" name="includes-startswith-endswith"></a>
### includes(), startsWith(), endsWith()
传统上，JavaScript 只有indexOf方法，可以用来确定一个字符串是否包含在另一个字符串中。

ES6 又提供了三种新方法：

* includes()：返回布尔值，表示是否找到了参数字符串。
* startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。
* endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部。


<a id="markdown-repeat" name="repeat"></a>
### repeat()
repeat方法返回一个新字符串，表示将原字符串重复n次。
```js
'x'.repeat(3) // "xxx"
'hello'.repeat(2) // "hellohello"
'na'.repeat(0) // ""
```

<a id="markdown-padstartpadend" name="padstartpadend"></a>
### padStart()，padEnd()
ES2017 引入了字符串补全长度的功能。如果某个字符串不够指定长度，会在头部或尾部补全。

padStart()用于头部补全，padEnd()用于尾部补全。

```js
'x'.padStart(5, 'ab') // 'ababx'
'x'.padStart(4, 'ab') // 'abax'

'x'.padEnd(5, 'ab') // 'xabab'
'x'.padEnd(4, 'ab') // 'xaba'

'2'.padStart(2, '0') // '02'
```

<a id="markdown-模板字符串重要" name="模板字符串重要"></a>
### 模板字符串（重要）
传统的 JavaScript 语言，输出模板通常是这样写的（下面使用了 jQuery 的方法）。

```js
$('#result').append(
  'There are <b>' + basket.count + '</b> ' +
  'items in your basket, ' +
  '<em>' + basket.onSale +
  '</em> are on sale!'
);
```

上面这种写法相当繁琐不方便，ES6 引入了模板字符串解决这个问题。

```js
$('#result').append(`
  There are <b>${basket.count}</b> items
   in your basket, <em>${basket.onSale}</em>
  are on sale!
`);
```

模板字符串（template string）是增强版的字符串，用反引号（`）标识。

它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量。

模板字符串中嵌入变量，需要将变量名写在${}之中。大括号内部可以放入任意的 JavaScript 表达式，可以进行运算，以及引用对象属性。

```js
let x = 1;
let y = 2;

`${x} + ${y} = ${x + y}`
// "1 + 2 = 3"

`${x} + ${y * 2} = ${x + y * 2}`
// "1 + 4 = 5"

let obj = {x: 1, y: 2};
`${obj.x + obj.y}`
// "3"
```

<a id="markdown-forof" name="forof"></a>
## for...of
for...of语句在可迭代对象（包括 Array，Map，Set，String，TypedArray，arguments对象等等）上创建一个迭代循环，

调用自定义迭代钩子，并为每个不同属性的值执行语句。

```js
const arr = ['red', 'green', 'blue'];

for(let v of arr) {
  console.log(v); // red green blue
}

for(let i in arr){
  console.log(i); // 0,1,2
}

```

<a id="markdown-函数扩展" name="函数扩展"></a>
## 函数扩展

<a id="markdown-参数默认值" name="参数默认值"></a>
### 参数默认值
ES6 之前，不能直接为函数的参数指定默认值，只能采用变通的方法。

```js
function log(x, y) {
  y = y || 'World';
  console.log(x, y);
}

log('Hello') // Hello World
log('Hello', 'China') // Hello China
log('Hello', '') // Hello World
```

上面代码检查函数log的参数y有没有赋值，如果没有，则指定默认值为World。

这种写法的缺点在于，如果参数y赋值了，但是对应的布尔值为false，则该赋值不起作用。

就像上面代码的最后一行，参数y等于空字符，结果被改为默认值。

ES6 允许为函数的参数设置默认值，即直接写在参数定义的后面。
```js
// 参数列表 y = 'World'，某些IDE暂时还未支持此语法，如vs2015，但可以运行
function log(x, y = 'World') {
  console.log(x, y);
}

log('Hello') // Hello World
log('Hello', 'China') // Hello China
log('Hello', '') // Hello
```

可以看到，ES6 的写法比 ES5 简洁许多，而且非常自然。下面是另一个例子。

```js
function Point(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

const p = new Point();
p // { x: 0, y: 0 }
```

<a id="markdown-rest参数" name="rest参数"></a>
### rest参数
ES6 引入 rest 参数（形式为...变量名），用于获取函数的多余参数，这样就不需要使用arguments对象了。

rest 参数搭配的变量是一个数组，该变量将多余的参数放入数组中。
```js
function add(...values) {
  let sum = 0;

  for (var i = 0; i < values.length; i++) {
      sum += values[i];
  }

  return sum;
}

add(2, 5, 3) // 10
```
上面代码的add函数是一个求和函数，利用 rest 参数，可以向该函数传入任意数目的参数。

```js
function push(array, ...items) {
  items.forEach(function(item) {
    array.push(item);
    console.log(item);
  });
}

var a = [];
push(a, 1, 2, 3)
```
注意，rest 参数之后不能再有其他参数（即只能是最后一个参数），否则会报错。

<a id="markdown-函数name属性" name="函数name属性"></a>
### 函数name属性

函数的name属性，返回该函数的函数名。
```js
function foo() {}
foo.name // "foo"
```
这个属性早就被浏览器广泛支持，但是直到 ES6，才将其写入了标准。

需要注意的是，ES6 对这个属性的行为做出了一些修改。

如果将一个匿名函数赋值给一个变量，ES5 的name属性，会返回空字符串，而 ES6 的name属性会返回实际的函数名。
```js
var f = function () {};

// ES5
f.name // ""

// ES6
f.name // "f"
```

<a id="markdown-箭头函数重要" name="箭头函数重要"></a>
### 箭头函数（重要）
ES6 允许使用“箭头”（=>）定义函数。同lambda表达式的用法

```js
var f = v => v;

// 等同于
var f = function (v) {
  return v;
};
```

如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分。

```js
var f = () => 5;
// 等同于
var f = function () { return 5 };

var sum = (num1, num2) => num1 + num2;
// 等同于
var sum = function(num1, num2) {
  return num1 + num2;
};
```

如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用return语句返回。

```js
var sum = (num1, num2) => { return num1 + num2; }
```

由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号，否则会报错。

```js
// 报错
let getTempItem = id => { id: id, name: "Temp" };

// 不报错
let getTempItem = id => ({ id: id, name: "Temp" });
// 或者
let getTempItem = id => { return {id: id, name: "Temp"}; };
```

如果箭头函数只有一行语句，且不需要返回值，可以采用下面的写法，就不用写大括号了。

```js
let fn = () => void doesNotReturn();
```

箭头函数的一个用处是简化回调函数。
```js
// 正常函数写法
[1,2,3].map(function (x) {
  return x * x;
});

// 箭头函数写法
[1,2,3].map(x => x * x);
```

<a id="markdown-symbol" name="symbol"></a>
## Symbol
Symbol 是 JavaScript 最新推出的一种基本类型，它被当做对象属性时特别有用，但是有什么是它能做而 String 不能做的呢？

JavaScript的一些特性：

JavaScript 有两种值类型，一种是 基本类型 （primitives），一种是 对象类型 （objects，包含 function 类型），

基本类型包括数字 number （包含 integer，float，Infinity，NaN）,布尔值 boolean，字符串 string，undefined，null，尽管 typeof null === 'object'，null 仍然是一个基本类型。

基本类型的值是不可变的，当然了，存放基本类型值得变量是可以被重新分配的，例如：

```js
let x = 1; 
x++;
```

变量 x 就被重新分配值了，但是你并没有改变原来的1.

一些语言，例如 c 语言有引用传递和值传递的概念，JavaScript 也有类似的概念，尽管它传递的数据类型需要推断。

<a id="markdown-js中函数传参" name="js中函数传参"></a>
### JS中函数传参
当你给一个 function 传值的时候，重新分配值并不会修改该方法调用时的参数值。

然而，假如你修改一个非基本类型的值，修改值也会影响原来的值。

```js
// 参数为基本类型
function add(val) {
    val = val + 1;
}

let x = 1;
add(x);
console.log(x); // 1

// 参数为非基本类型
function modifyObj(val) {
    val.prop = val.prop + 1;
}
let obj = { prop: 1 };
modifyObj(obj);
console.log(obj.prop); // 2
```

<a id="markdown-值相等" name="值相等"></a>
### 值相等

基本类型一样的值永远相等（除了奇怪的 NaN ），看看这里：

```js
const first = "abc" + "def";
const second = "ab" + "cd" + "ef";
console.log(first === second); // true
```

然而，非基本类型的值即使内容一样，但也不相等，看看这里：
```js
const obj1 = { name: "jack" };
const obj2 = { name: "jack" };
console.log(obj1 === obj2); // false
// 但是属性name本身是基本类型，所以相等
console.log(obj1.name === obj2.name); // true
```

<a id="markdown-symbol-作为对象的属性" name="symbol-作为对象的属性"></a>
### symbol 作为对象的属性
对象扮演了一个 JavaScript 语言的基本角色，它们被到处使用，它们常被用在键值对的存储。

在 symbol 诞生之前，对象的键只能是字符串。

假如我们试着使用一个非字符串当做对象的键，就会被转换为字符串，如下所示：

```js
const obj = {};
obj.foo = 'foo';
obj['bar'] = 'bar';
obj[2] = 2;
obj[{}] = 'someobj';

console.log(obj);
//output: { '2': 2, foo: 'foo', bar: 'bar','[object Object]': 'someobj' }
```

symbol 作为对象key值的案例：

```js
const obj = {};
const sym = Symbol();
obj[sym] = 'symbol property';
obj.baseProp = 'base property';
console.log(obj); // { norProp: 'base property' }
console.log(sym in obj); // true
console.log(obj[sym]); // symbol property
// Object.keys() 并没有返回 symbol
console.log(Object.keys(obj)); // ['baseProp']
```

<a id="markdown-阻止对象名冲突" name="阻止对象名冲突"></a>
### 阻止对象名冲突
在不知道对象原有属性名的情况下，扩展对象属性很有用。

当两个不同的库要读取对象的一些原始属性时，或许它们都想要类似的标识符。

如果只是简单的使用字符串 id 作为 key，这将会有很大的风险，因为它们的 key 完全有可能相同。

```js
function lib1tag(obj) {
  obj.id = 42;
}
function lib2tag(obj) {
  obj.id = 369;
}
```

通过使用 symbol，不同的库在初始化的时候生成其所需的 symbol，然后就可以在对象上任意赋值。

```js
const library1property = Symbol('lib1');
function lib1tag(obj) {
  obj[library1property] = 42;
}

const library2property = Symbol('lib2');
function lib2tag(obj) {
  obj[library2property] = 369;
}
```

假如我们使用 symbol 作为属性名，json 的输出将不会包含 symbol属性。

```js
const obj = {};
obj[Symbol()] = 1;
obj.zhName = '张三';

console.log(Object.keys(obj)); // ["zhName"]
console.log(Reflect.ownKeys(obj)); // ["zhName", Symbol()]
console.log(JSON.stringify(obj)); // {"zhName":"张三"}
```

JavaScript 支持 symbol，并不意味着 json 规范也会跟着修改。

json 只允许字符串作为 key，JavaScript 并没有试图让 json 输出 symbol。


<a id="markdown-对象新增用法" name="对象新增用法"></a>
## 对象新增用法

<a id="markdown-属性的简洁表示法" name="属性的简洁表示法"></a>
### 属性的简洁表示法
ES6 允许直接写入变量和函数，作为对象的属性和方法。这样的书写更加简洁。
```js
function people(name, age) {
    return {
        name,
        age
    };
}

// 等同于

function people(name, age) {
    return {
        name: name,
        age: age
    };
}
```

除了属性简写，方法也可以简写。

```js
const o = {
  method() {
    return "Hello!";
  }
};

// 等同于

const o = {
  method: function() {
    return "Hello!";
  }
};
```

下面是一个实际的例子。
```js
let birth = '2000/01/01';

const Person = {

  name: '张三',

  //等同于birth: birth
  birth,

  // 等同于hello: function ()...
  hello() { console.log('我的名字是', this.name); }

};
```

<a id="markdown-属性的遍历" name="属性的遍历"></a>
### 属性的遍历
ES6 一共有 5 种方法可以遍历对象的属性。

```js
let obj = { name: 'jack', age: 12 };
let sym = Symbol('syName');
obj[sym] = 'unique name';
```

- for...in

for...in循环遍历对象自身的和继承的可枚举属性（不含 Symbol 属性）。

```js
for (let pitem in obj) {
    console.log(pitem);
}
// name
// age
```

- Object.keys(obj)

Object.keys返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）的键名。

```js
console.log(Object.keys(obj));// ["name", "age"]
```

- Object.getOwnPropertyNames(obj)

Object.getOwnPropertyNames返回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）的键名。

```js
console.log(Object.getOwnPropertyNames(obj));// ["name", "age"]
```

- Object.getOwnPropertySymbols(obj)

Object.getOwnPropertySymbols返回一个数组，包含对象自身的所有 Symbol 属性的键名。

```js
console.log(Object.getOwnPropertySymbols(obj));// [Symbol(syName)]
```

- Reflect.ownKeys(obj)

Reflect.ownKeys返回一个数组，包含对象自身的所有键名，不管键名是 Symbol 或字符串，也不管是否可枚举。

```js
console.log(Reflect.ownKeys(obj));// ["name", "age", Symbol(syName)]
```

<a id="markdown-解构" name="解构"></a>
### 解构
```js
//对象
const people = {
    name: 'lux',
    age: 20
}
const { name, age } = people
console.log(`${name} --- ${age}`)

// 等同于 ES5中写法
const people = {
    name: 'lux',
    age: 20
}
const name = people.name
const age = people.age
console.log(name + ' --- ' + age)
```

数组的解构是同样的：
```js
//数组
const color = ['red', 'blue']
const [first, second] = color
console.log(first) //'red'
console.log(second) //'blue'
```

<a id="markdown-objectis" name="objectis"></a>
### Object.is()
ES5 比较两个值是否相等，只有两个运算符：相等运算符（==）和严格相等运算符（===）。

它们都有缺点，前者会自动转换数据类型，后者的NaN不等于自身，以及+0等于-0。

JavaScript 缺乏一种运算，在所有环境中，只要两个值是一样的，它们就应该相等。

ES6 提出“Same-value equality”（同值相等）算法，用来解决这个问题。

Object.is就是部署这个算法的新方法。

它用来比较两个值是否严格相等，与严格比较运算符（===）的行为基本一致。

```js
Object.is('foo', 'foo')
// true
Object.is({}, {})
// false
```

不同之处只有两个：一是+0不等于-0，二是NaN等于自身。

```js
+0 === -0 //true
NaN === NaN // false

Object.is(+0, -0) // false
Object.is(NaN, NaN) // true
```

<a id="markdown-objectassign" name="objectassign"></a>
### Object.assign()
Object.assign方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）。

```js
const target = { a: 1 };

const source1 = { b: 2 };
const source2 = { c: 3 };

Object.assign(target, source1, source2);
target // {a:1, b:2, c:3}
```

Object.assign方法的第一个参数是目标对象，后面的参数都是源对象。

注意，如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性。

```js
const target = { a: 1, b: 1 };

const source1 = { b: 2, c: 2 };
const source2 = { c: 3 };

Object.assign(target, source1, source2);
target // {a:1, b:2, c:3}
```

<a id="markdown-class基本用法" name="class基本用法"></a>
## Class基本用法

<a id="markdown-类的由来重要" name="类的由来重要"></a>
### 类的由来（重要）
JavaScript 语言中，生成实例对象的传统方法是通过构造函数。下面是一个例子：

```js
function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function () {
  return '(' + this.x + ', ' + this.y + ')';
};

var p = new Point(1, 2);
```

上面这种写法跟传统的面向对象语言（比如 C++ 和 Java）差异很大，很容易让新学习这门语言的程序员感到困惑。

ES6 提供了更接近传统语言的写法，引入了 Class（类）这个概念，作为对象的模板。

通过class关键字，可以定义类。

基本上，ES6 的class可以看作只是一个语法糖，它的绝大部分功能，ES5 都可以做到，

新的class写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已。

上面的代码用 ES6 的class改写，就是下面这样。

```js
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}
```

ES6 的类，完全可以看作构造函数的另一种写法。

```js
class Point {
  // ...
}

typeof Point // "function"
Point === Point.prototype.constructor // true
```

构造函数的prototype属性，在 ES6 的“类”上面继续存在。

事实上，类的所有方法都定义在类的prototype属性上面。

```js
class Point {
  constructor() {
    // ...
  }

  toString() {
    // ...
  }

  toValue() {
    // ...
  }
}

// 等同于

Point.prototype = {
  constructor() {},
  toString() {},
  toValue() {},
};
```

<a id="markdown-class表达式" name="class表达式"></a>
### class表达式
与函数一样，类也可以使用表达式的形式定义。
```js
const MyClass = class Me {
  getClassName() {
    return Me.name;
  }
};
```

上面代码使用表达式定义了一个类。

需要注意的是，这个类的名字是Me，但是Me只在 Class 的内部可用，指代当前类。

在 Class 外部，这个类只能用MyClass引用。

```js
let inst = new MyClass();
inst.getClassName() // Me
Me.name // ReferenceError: Me is not defined
```

<a id="markdown-不存在提升" name="不存在提升"></a>
### 不存在提升
类不存在变量提升（hoist），这一点与 ES5 完全不同。

```js
new Foo(); // ReferenceError
class Foo {}
```

上面代码中，Foo类使用在前，定义在后，这样会报错，因为 ES6 不会把类的声明提升到代码头部。

<a id="markdown-name封装" name="name封装"></a>
### name封装
由于本质上，ES6 的类只是 ES5 的构造函数的一层包装，所以函数的许多特性都被Class继承，包括name属性。

```js
class Point {}
Point.name // "Point"
```

name属性总是返回紧跟在class关键字后面的类名。

<a id="markdown-this指向" name="this指向"></a>
### this指向
类的方法内部如果含有this，它默认指向类的实例。

但是，必须非常小心，一旦单独使用该方法，很可能报错。

```js
class Logger {
  printName(name = 'there') {
    this.print(`Hello ${name}`);
  }

  print(text) {
    console.log(text);
  }
}

const logger = new Logger();
const { printName } = logger;// 对象解构，printName即单独的方法
printName(); // TypeError: Cannot read property 'print' of undefined
```

上面代码中，printName方法中的this，默认指向Logger类的实例。

但是，如果将这个方法提取出来单独使用，this会指向该方法运行时所在的环境。

由于 class 内部是严格模式，所以 this 实际指向的是undefined，从而导致找不到print方法而报错。

<a id="markdown-静态方法" name="静态方法"></a>
### 静态方法
类相当于实例的原型，所有在类中定义的方法，都会被实例继承。

如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。

```js
class Foo {
  static classMethod() {
    return 'hello';
  }
}

Foo.classMethod() // 'hello'

var foo = new Foo();
foo.classMethod()
// TypeError: foo.classMethod is not a function
```
上面代码中，Foo类的classMethod方法前有static关键字，表明该方法是一个静态方法，

可以直接在Foo类上调用（Foo.classMethod()），而不是在Foo类的实例上调用。

如果在实例上调用静态方法，会抛出一个错误，表示不存在该方法。

注意，如果静态方法包含this关键字，这个this指的是类，而不是实例。

```js
class Foo {
  static bar() {
    this.baz();
  }
  static baz() {
    console.log('hello');
  }
  baz() {
    console.log('world');
  }
}

Foo.bar() // hello
```

上面代码中，静态方法bar调用了this.baz，这里的this指的是Foo类，而不是Foo的实例，等同于调用Foo.baz。

另外，从这个例子还可以看出，静态方法可以与非静态方法重名。

<a id="markdown-实例属性" name="实例属性"></a>
### 实例属性
实例属性除了定义在constructor()方法里面的this上面，也可以定义在类的最顶层。
```js
class IncreasingCounter {
  constructor() {
    this._count = 0;
  }
  get value() {
    console.log('Getting the current value!');
    return this._count;
  }
  increment() {
    this._count++;
  }
}
```

上面代码中，实例属性this._count定义在constructor()方法里面。

另一种写法是，这个属性也可以定义在类的最顶层，其他都不变。
```js
class IncreasingCounter {
  _count = 0;
  get value() {
    console.log('Getting the current value!');
    return this._count;
  }
  increment() {
    this._count++;
  }
}
```

上面代码中，实例属性_count与取值函数value()和increment()方法，处于同一个层级。这时，不需要在实例属性前面加上this。

这种新写法的好处是，所有实例对象自身的属性都定义在类的头部，看上去比较整齐，一眼就能看出这个类有哪些实例属性。

<a id="markdown-静态属性" name="静态属性"></a>
### 静态属性
静态属性指的是 Class 本身的属性，即Class.propName，而不是定义在实例对象（this）上的属性。

```js
class Foo {
}

Foo.prop = 1;
Foo.prop // 1
```

上面的写法为Foo类定义了一个静态属性prop。

目前，只有这种写法可行，因为 ES6 明确规定，Class 内部只有静态方法，没有静态属性。

现在有一个提案提供了类的静态属性，写法是在实例属性法的前面，加上static关键字。
```js
// 老写法
class Foo {
  // ...
}
Foo.prop = 1;

// 新写法
class Foo {
  static prop = 1;
}
```

<a id="markdown-私有方法" name="私有方法"></a>
### 私有方法
私有方法和私有属性，是只能在类的内部访问的方法和属性，外部不能访问。

这是常见需求，有利于代码的封装，但 ES6 不提供，只能通过变通方法模拟实现。

一种做法是在命名上加以区别。
```js
class Widget {

  // 公有方法
  foo (baz) {
    this._bar(baz);
  }

  // 私有方法
  _bar(baz) {
    return this.snaf = baz;
  }

  // ...
}
```

上面代码中，_bar方法前面的下划线，表示这是一个只限于内部使用的私有方法。

但是，这种命名是不保险的，在类的外部，还是可以调用到这个方法。

另一种方法就是索性将私有方法移出模块，因为模块内部的所有方法都是对外可见的。
```js
class Widget {
  constructor(){
    
  }
  foo () {
    bar.call(this);
  }
  
}

// 通过模块化引用，除当前文档，无法访问该函数
function bar() {
  consolo.log('私有方法');
}
```

上面代码中，foo是公开方法，内部调用了bar.call(this)。

这使得bar实际上成为了当前模块的私有方法。

<a id="markdown-私有属性" name="私有属性"></a>
### 私有属性
目前，有一个提案，为class加了私有属性。方法是在属性名之前，使用#表示。

```js
class IncreasingCounter {
  #count = 0;
  get value() {
    console.log('Getting the current value!');
    return this.#count;
  }
  increment() {
    this.#count++;
  }
}
```

上面代码中，#count就是私有属性，只能在类的内部使用（this.#count）。如果在类的外部使用，就会报错。
```js
const counter = new IncreasingCounter();
counter.#count // 报错
counter.#count = 42 // 报错
```
上面代码在类的外部，读取私有属性，就会报错。

<a id="markdown-class的继承" name="class的继承"></a>
### Class的继承
Class 可以通过extends关键字实现继承，这比 ES5 的通过修改原型链实现继承，要清晰和方便很多。

```js
class Point {
    x = 0;
    y = 0;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class ColorPoint extends Point {
    constructor(x, y, color='white') {
        super(x, y); //不可省略，并且要在constructor中第一行调用
        this.color = color;
    }
}
```
子类必须在constructor方法中调用super方法，否则新建实例时会报错。

这是因为子类自己的this对象，必须先通过父类的构造函数完成塑造，

得到与父类同样的实例属性和方法，然后再对其进行加工，加上子类自己的实例属性和方法。

如果不调用super方法，子类就得不到this对象。

下面是生成子类实例的代码。
```js
let cp = new ColorPoint(25, 8, 'green');

cp instanceof ColorPoint // true
cp instanceof Point // true
```

上面代码中，实例对象cp同时是ColorPoint和Point两个类的实例，这与 ES5 的行为完全一致。

最后，父类的静态方法，也会被子类继承。
```js
class A {
  static hello() {
    console.log('hello world');
  }
}

class B extends A {
}

B.hello()  // hello world
```
上面代码中，hello()是A类的静态方法，B继承A，也继承了A的静态方法。

<a id="markdown-promise-对象" name="promise-对象"></a>
## Promise 对象
Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。

所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。

Promise对象有以下两个特点:
1. 对象的状态不受外界影响。Promise对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）。
2. 一旦状态改变，就不会再变，任何时候都可以得到这个结果。Promise对象的状态改变，只有两种可能：从pending变为fulfilled和从pending变为rejected。

```js
new Promise((resolve, reject) => {
  resolve('success')
  // 无效，状态不能再次改变
  reject('reject')
})
```

有了Promise对象，就可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数。

此外，Promise对象提供统一的接口，使得控制异步操作更加容易。

Promise也有一些缺点。
* 首先，无法取消Promise，一旦新建它就会立即执行，无法中途取消。
* 其次，如果不设置回调函数，Promise内部抛出的错误，不会反应到外部。
* 第三，当处于pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。

<a id="markdown-基本用法" name="基本用法"></a>
### 基本用法
Promise构造函数接受一个函数作为参数，该函数的两个参数分别是resolve和reject。

* resolve函数的作用是，将Promise对象的状态从“未完成”变为“成功”（即从 pending 变为 resolved），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；
* reject函数的作用是，将Promise对象的状态从“未完成”变为“失败”（即从 pending 变为 rejected），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。

```js
let p = new Promise(function (resolve, reject) {
    // 异步操作，用setTimeOut模拟
    setTimeout(() => {
        console.log('执行完成');
        resolve('数据1');
    }, 2000);
});
p.then(function (data) {
    console.log('then:' + data);
});
/*
延迟2s输出结果：
执行完成
then:数据1
*/
```

Promise 新建后就会立即执行。

<a id="markdown-promiseprototypethen" name="promiseprototypethen"></a>
### Promise.prototype.then()
Promise 也很好地解决了回调地狱的问题，例如：

```js
ajax(url, () => {
    // 处理逻辑
    ajax(url1, () => {
        // 处理逻辑
        ajax(url2, () => {
            // 处理逻辑
        })
    })
})
```

ajax的请求有多层依赖关系，依赖越多，回调越复杂。

Promise实例具有then方法，也就是说，then方法是定义在原型对象Promise.prototype上的。

then方法的第一个参数是resolved状态的回调函数，第二个参数（可选）是rejected状态的回调函数。

```js
function runAsync1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('异步任务1');
            resolve('异步获取的数据1');
        }, 2000);
    });
}
function runAsync2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('异步任务2');
            resolve('异步获取的数据2');
        }, 3000);
    });
}
function runAsync3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('异步任务3');
            resolve('异步获取的数据3');
        }, 2000);
    });
}

// 设置心跳任务
let heartClick = setInterval(() => {
    console.log('==========心跳==========');
}, 1000);

runAsync1()
    .then((data) => {
        console.log('async1 then :' + data);
        return runAsync2();
    })
    .then((data) => {
        console.log('async2 then: ' + data);
        return runAsync3();
        //return '直接返回数据也可以！';
    })
    .then((data) => {
        console.log('async3 then: ' + data);
        clearInterval(heartClick);//清除心跳任务
    })
```

采用链式的then，可以指定一组按照次序调用的回调函数。

这时，前一个回调函数，有可能返回的还是一个Promise对象（即有异步操作），这时后一个回调函数，就会等待该Promise对象的状态发生变化，才会被调用。

<a id="markdown-promiseprototypecatch" name="promiseprototypecatch"></a>
### Promise.prototype.catch()
reject的作用就是把Promise的状态置为rejected，这样我们在then中就能捕捉到，然后执行“失败”情况的回调。

```js
function getAsyncNumber() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.ceil(Math.random() * 10);
            if (num <= 5) {
                resolve(num);
            } else {
                reject('数字太大了');
            }
        }, 2000);
    });
}

getAsyncNumber()
    .then((data) => {
        console.log('success:' + data);
        //cnosole.log('console写错了，故意引发异常');
    }, (err) => {
        console.error('fail:' + err);
    });
```

then方法可以接受两个参数，第一个对应resolve的回调，第二个对应reject的回调。

这种写法并不推荐，如果【resolve回调】中发生异常无法进行处理。

Promise.prototype.catch方法是.then(null, rejection)或.then(undefined, rejection)的别名，用于指定发生错误时的回调函数。

针对上例的修改:
```js
getAsyncNumber()
    .then((data) => {
        console.log('success:' + data);
        cnosole.log('console写错了，故意引发异常');
    })
    .catch((err) => {
        console.log('fail:' + err);
    });
```

效果和写在then的第二个参数里面一样。

不过它还有另外一个作用：在执行resolve的回调（也就是上面then中的第一个参数）时，

如果抛出异常了（代码出错了），那么并不会报错卡死js，而是会进到这个catch方法中。

<a id="markdown-promiseprototypefinally" name="promiseprototypefinally"></a>
### Promise.prototype.finally()
finally方法用于指定不管 Promise 对象最后状态如何，都会执行的操作。

```js
promise
.then(result => {···})
.catch(error => {···})
.finally(() => {···});
```

以前面获取数字举例，不论【resolve】/【reject】，都将进入finally回调：

```js
getAsyncNumber()
    .then((data) => {
        console.log('success:' + data);
        cnosole.log('console写错了，故意引发异常');
    })
    .catch((err) => {
        console.log('fail:' + err);
    })
    .finally(() => {
        console.log('运行完成');
    });
```

<a id="markdown-promiseall" name="promiseall"></a>
### Promise.all()
Promise.all()方法用于将多个 Promise 实例，包装成一个新的 Promise 实例。

```js
const p = Promise.all([p1, p2, p3]);
```

Promise的all方法提供了并行执行异步操作的能力，并且在所有异步操作执行完后才执行回调。

我们仍旧使用上面定义好的runAsync1、runAsync2、runAsync3这三个函数，看下面的例子：

```js
Promise
    .all([runAsync1(), runAsync2(), runAsync3()])
    .then((results) => {
        console.log(results);
    });
```

用Promise.all来执行，all接收一个数组参数，里面的值最终都算返回Promise对象。

这样，三个异步操作的并行执行的，等到它们都执行完后才会进到then里面。

all会把所有异步操作的结果放进一个数组中传给then，就是上面的results。

<a id="markdown-结合ajax的promise" name="结合ajax的promise"></a>
### 结合ajax的Promise
TODO 补充案例

<a id="markdown-module-模块" name="module-模块"></a>
## Module 模块
ES6 在语言标准的层面上，实现了模块功能，而且实现得相当简单，完全可以取代 CommonJS 和 AMD 规范，成为浏览器和服务器通用的模块解决方案。

ES6 模块的设计思想是尽量的静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的变量。

CommonJS 和 AMD 模块，都只能在运行时确定这些东西。比如，CommonJS 模块就是对象，输入时必须查找对象属性。

```js
// CommonJS模块
let { stat, exists, readFile } = require('fs');

// 等同于
let _fs = require('fs');
let stat = _fs.stat;
let exists = _fs.exists;
let readfile = _fs.readfile;
```

上面代码的实质是整体加载fs模块（即加载fs的所有方法），生成一个对象（_fs），然后再从这个对象上面读取 3 个方法。

这种加载称为“运行时加载”，因为只有运行时才能得到这个对象，导致完全没办法在编译时做“静态优化”。

```js
// ES6模块
import { stat, exists, readFile } from 'fs';
```

上面代码的实质是从fs模块加载 3 个方法，其他方法不加载。

这种加载称为“编译时加载”或者静态加载，即 ES6 可以在编译时就完成模块加载，效率要比 CommonJS 模块的加载方式高。

<a id="markdown-export和import" name="export和import"></a>
### export和import
export命令用于规定模块的对外接口，import命令用于输入其他模块提供的功能。

一个模块就是一个独立的文件。该文件内部的所有变量，外部无法获取。

如果你希望外部能够读取模块内部的某个变量，就必须使用export关键字输出该变量。

下面是一个 JS 文件，里面使用export命令输出变量。

```js
// profile.js
export var firstName = 'Michael';
export var lastName = 'Jackson';
export var year = 1958;
```





---

参考引用：

[ECMAScript 6 入门-阮一峰](http://es6.ruanyifeng.com/#docs/intro)

[es6常用的语法](https://blog.csdn.net/itzhongzi/article/details/73330681)

[大白话讲解Promise](https://www.cnblogs.com/lvdabao/p/es6-promise-1.html)

[从ES6到ES10的新特性万字大总结（不得不收藏）](https://mp.weixin.qq.com/s?__biz=MzUxOTQ5ODYzOQ==&mid=2247498014&idx=6&sn=df491e34feebedc072b0ceea3f67f8ae&chksm=f9fa07fece8d8ee8e729149c66e97c25415322a3181029576186a73015d3b3936bb8203c6ad7&scene=0&xtrack=1&key=4fbe20007a5be0afb103fb1f0ba27eed1711a55b6bd0e29d4289b521790f0c2fc5a00a32ec2032fe90735bf925ec8dac002364cf8bd4f249cbc229c8bae424a3546b720604b1d6b301f990c4717d6b09&ascene=1&uin=Mjg4Njc3MzE1&devicetype=Windows+10&version=62070158&lang=zh_CN&exportkey=AZHhVlagkPNs4uE1p7gHSFk%3D&pass_ticket=yMJa9mJ%2FmOlJdthl%2BXcSF1%2FHTtNJjm7nkSSyQ29KgOPCuLNsSXHSYU8M2ME6W7aC)

[Symbol 的作用](https://juejin.im/post/5ca762f3e51d4536da6c5624)

