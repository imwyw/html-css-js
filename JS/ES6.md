<!-- TOC -->

- [ES6](#es6)
    - [历史背景](#历史背景)
        - [ECMAScript和JavaScript的关系](#ecmascript和javascript的关系)
        - [ES6与ECMAScript 2015的关系](#es6与ecmascript-2015的关系)
    - [let和const](#let和const)
        - [let基本用法](#let基本用法)
        - [变量提升](#变量提升)
        - [块级作用域](#块级作用域)

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

<a id="markdown-es6与ecmascript-2015的关系" name="es6与ecmascript-2015的关系"></a>
### ES6与ECMAScript 2015的关系

2011年，ECMAScript 5.1版发布后，就开始制定6.0版了。因此，”ES6”这个词的原意，就是指JavaScript语言的下一个版本。

标准委员会最终决定，标准在每年的 6 月份正式发布一次，作为当年的正式版本。

接下来的时间，就在这个版本的基础上做改动，直到下一年的 6 月份，草案就自然变成了新一年的版本。

这样一来，就不需要以前的版本号了，只要用年份标记就可以了。

ES6 的第一个版本，就这样在 2015 年 6 月发布了，正式名称就是《ECMAScript 2015 标准》（简称 ES2015）。

2016 年 6 月，小幅修订的《ECMAScript 2016 标准》（简称 ES2016）如期发布，这个版本可以看作是 ES6.1 版，因为两者的差异非常小（只新增了数组实例的includes方法和指数运算符），基本上是同一个标准。

因此，ES6 既是一个历史名词，也是一个泛指，含义是 5.1 版以后的 JavaScript 的下一代标准，涵盖了 ES2015、ES2016、ES2017 等等。

<a id="markdown-let和const" name="let和const"></a>
## let和const

<a id="markdown-let基本用法" name="let基本用法"></a>
### let基本用法
在ES6之前，我们都是用var关键字声明变量。

无论声明在何处，都会被视为声明在函数的最顶部(不在函数内即在全局作用域的最顶部)。这就是函数变量提升例如:

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

for循环的计数器，就很合适使用let命令。

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















---

参考引用：

[ECMAScript 6 入门-阮一峰](http://es6.ruanyifeng.com/#docs/intro)