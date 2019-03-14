<!-- TOC -->

- [ES6](#es6)
    - [历史背景](#历史背景)
        - [ECMAScript和JavaScript的关系](#ecmascript和javascript的关系)
        - [ES6与ECMAScript 2015的关系](#es6与ecmascript-2015的关系)
    - [let和const](#let和const)
        - [let基本用法](#let基本用法)
        - [变量提升](#变量提升)
        - [块级作用域](#块级作用域)
        - [const命令](#const命令)
    - [字符串扩展](#字符串扩展)
        - [includes(), startsWith(), endsWith()](#includes-startswith-endswith)
        - [repeat()](#repeat)
        - [padStart()，padEnd()](#padstartpadend)
        - [模板字符串](#模板字符串)
    - [函数扩展](#函数扩展)
        - [参数默认值](#参数默认值)
        - [rest参数](#rest参数)
        - [函数name属性](#函数name属性)
        - [箭头函数](#箭头函数)
    - [对象扩展](#对象扩展)
        - [属性的简洁表示法](#属性的简洁表示法)
        - [属性的遍历](#属性的遍历)
        - [解构](#解构)
    - [class](#class)
        - [类的由来](#类的由来)
        - [class表达式](#class表达式)

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

<a id="markdown-const命令" name="const命令"></a>
### const命令
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

但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指向实际数据的指针，const只能保证这个指针是固定的（即总是指向另一个固定的地址），至于它指向的数据结构是不是可变的，就完全不能控制了。因此，将一个对象声明为常量必须非常小心。

```js
const foo = {};

// 为 foo 添加一个属性，可以成功
foo.prop = 123;
foo.prop // 123

// 将 foo 指向另一个对象，就会报错
foo = {}; // TypeError: "foo" is read-only
```

<a id="markdown-字符串扩展" name="字符串扩展"></a>
## 字符串扩展

<a id="markdown-includes-startswith-endswith" name="includes-startswith-endswith"></a>
### includes(), startsWith(), endsWith()
传统上，JavaScript 只有indexOf方法，可以用来确定一个字符串是否包含在另一个字符串中。ES6 又提供了三种新方法。

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

<a id="markdown-模板字符串" name="模板字符串"></a>
### 模板字符串
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

  for (var val of values) {
    sum += val;
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

<a id="markdown-箭头函数" name="箭头函数"></a>
### 箭头函数
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

<a id="markdown-对象扩展" name="对象扩展"></a>
## 对象扩展

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

- for...in

for...in循环遍历对象自身的和继承的可枚举属性（不含 Symbol 属性）。

- Object.keys(obj)

Object.keys返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）的键名。

- Object.getOwnPropertyNames(obj)

Object.getOwnPropertyNames返回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）的键名。

- Object.getOwnPropertySymbols(obj)

Object.getOwnPropertySymbols返回一个数组，包含对象自身的所有 Symbol 属性的键名。

- Reflect.ownKeys(obj)

Reflect.ownKeys返回一个数组，包含对象自身的所有键名，不管键名是 Symbol 或字符串，也不管是否可枚举。


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

<a id="markdown-class" name="class"></a>
## class
<a id="markdown-类的由来" name="类的由来"></a>
### 类的由来
JavaScript 语言中，生成实例对象的传统方法是通过构造函数。下面是一个例子。

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

ES6 提供了更接近传统语言的写法，引入了 Class（类）这个概念，作为对象的模板。通过class关键字，可以定义类。

基本上，ES6 的class可以看作只是一个语法糖，它的绝大部分功能，ES5 都可以做到，

新的class写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已。上面的代码用 ES6 的class改写，就是下面这样。

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

构造函数的prototype属性，在 ES6 的“类”上面继续存在。事实上，类的所有方法都定义在类的prototype属性上面。

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

---

参考引用：

[ECMAScript 6 入门-阮一峰](http://es6.ruanyifeng.com/#docs/intro)

[es6常用的语法](https://blog.csdn.net/itzhongzi/article/details/73330681)
