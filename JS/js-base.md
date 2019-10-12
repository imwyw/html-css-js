<!-- TOC -->

- [基础](#基础)
    - [语法](#语法)
        - [声明 var](#声明-var)
        - [变量](#变量)
        - [标识符](#标识符)
    - [数据类型](#数据类型)
        - [数值](#数值)
            - [精度问题](#精度问题)
            - [一个特殊的值 NaN](#一个特殊的值-nan)
            - [parseInt()](#parseint)
            - [parseFloat()](#parsefloat)
            - [Number()](#number)
        - [字符串](#字符串)
            - [length](#length)
            - [转义字符(`\`)](#转义字符\)
        - [函数function](#函数function)
            - [调用函数时的括号()](#调用函数时的括号)
            - [return](#return)
            - [作用域](#作用域)
        - [对象object](#对象object)
            - [属性(property)](#属性property)
            - [对象属性](#对象属性)
            - [in运算符](#in运算符)
            - [for...in](#forin)
            - [数组](#数组)
        - [布尔值boolean](#布尔值boolean)
        - [null和undefined](#null和undefined)
        - [数据类型-强制转换](#数据类型-强制转换)
            - [Number](#number)
            - [String](#string)
            - [Boolean](#boolean)
        - [数据类型-自动转换](#数据类型-自动转换)
            - [自动转换为布尔值](#自动转换为布尔值)
            - [自动转换为字符串](#自动转换为字符串)
            - [自动转换为数值](#自动转换为数值)
            - [自动转换规则](#自动转换规则)
    - [条件语句](#条件语句)
        - [if...else...](#ifelse)
        - [switch](#switch)
        - [三元运算符](#三元运算符)
    - [循环语句](#循环语句)
        - [while](#while)
        - [do...while](#dowhile)
        - [for](#for)
        - [break和continue](#break和continue)
    - [严格模式](#严格模式)
        - [为什么使用严格模式](#为什么使用严格模式)
        - [严格模式中的变化](#严格模式中的变化)
            - [全局变量声明](#全局变量声明)
            - [禁止this关键字指向全局对象](#禁止this关键字指向全局对象)
            - [禁止删除变量](#禁止删除变量)
            - [对象不能有重名的属性](#对象不能有重名的属性)
            - [函数不能有重名的参数](#函数不能有重名的参数)

<!-- /TOC -->
<a id="markdown-基础" name="基础"></a>
# 基础

<a id="markdown-语法" name="语法"></a>
## 语法

<a id="markdown-声明-var" name="声明-var"></a>
### 声明 var

语句(statement)以分号结尾，一个分号就表示一个语句结束。

一行也可以写多个语句，并不影响浏览器的编译，但是这样并不便于维护和调试，所以建议每一句独立一行！

``` js
var name = "华安";
var age = 123;
```

上例中是两个简单的赋值语句。

关键字var是声明变量，变量名称叫name，等号后面的"华安"是一个字符串，将一个字符串赋值给name变量。

<a id="markdown-变量" name="变量"></a>
### 变量

`var name = "华安";`

对于上面的声明赋值，实际我们做了两个操作，等价于

``` js
var name;
name = "华安";
```

还有一些声明写法：

``` js
//这样的写法也是可以的
var name,age,sex;
```

```js
//弱类型的体现，变量a的类型并没有限制
var a = "大王叫我来巡山";
a = 123;
a = null;
a = function(){};
```

<a id="markdown-标识符" name="标识符"></a>
### 标识符

标识符（identifier）是用来识别具体对象的一个名称。最常见的标识符就是变量名，以及后面要提到的函数名。

JavaScript语言的标识符对大小写敏感，所以a和A是两个不同的标识符。

标识符有一套命名规则，不符合规则的就是非法标识符。JavaScript引擎遇到非法标识符，就会报错。

简单说，标识符命名规则如下：

- 第一个字符，可以是任意Unicode字母（包括英文字母和其他语言的字母），以及美元符号（$）和下划线（_）。
- 第二个字符及后面的字符，除了Unicode字母、美元符号和下划线，还可以用数字0-9。

这些都是合法的命名：

```js
arg0
_tmp
$elem
π
```

不合法的命名：

```js
1a  // 第一个字符不能是数字
23  // 同上
***  // 标识符不能包含星号
a+b  // 标识符不能包含加号
-d  // 标识符不能包含减号或连词线
```

> JavaScript有一些保留字，不能用作标识符：arguments、break、case、catch、class、const、continue、debugger、default、delete、do、else、enum、eval、export、extends、false、finally、for、function、if、implements、import、in、instanceof、interface、let、new、null、package、private、protected、public、return、static、super、switch、this、throw、true、try、typeof、var、void、while、with、yield。


<a id="markdown-数据类型" name="数据类型"></a>
## 数据类型

JavaScript 语言的每一个值，都属于某一种数据类型。

JavaScript的数据类型，共有六种。前三种：数值、字符串和布尔值属于**原始类型**，意味不可再细分。

1. 数值（number）：整数和小数（比如1和3.14）
2. 字符串（string）：字符组成的文本（比如”Hello World”）
3. 布尔值（boolean）：true（真）和false（假）两个特定值
4. undefined：表示“未定义”或不存在，即由于目前没有定义，所以此处暂时没有任何值
5. null：表示无值，即此处的值就是“无”的状态。
6. 对象（object）：各种值组成的集合

typeof可以返回一个变量的数据类型，可以帮助我们检查值的类型。

```js
/*
1.原始类型
*/
typeof 123;//number
typeof NaN;//number
typeof "华安";//string
typeof true;//boolean

/*
2.方法（函数）
*/
function sayHello(){};//定义了一个空方法
typeof sayHello;//function

/*
3.undefined
*/
typeof undefined;//undefined
//变量unvar并未声明或声明了并未进行赋值操作
typeof unvar;//undefined

/*
4.object
除上面三种情况外，其余都是object类型
*/
typeof window;
typeof null;
typeof [];
typeof {};

```

<a id="markdown-数值" name="数值"></a>
### 数值

JavaScript内部，所有数字都是以64位浮点数形式储存，即使整数也是如此。所以，1与1.0是相同的，是同一个数。

<a id="markdown-精度问题" name="精度问题"></a>
#### 精度问题

**由于浮点数不是精确的值，所以涉及小数的比较和运算要特别小心。**

```js
var a = 0.3 / 0.1;
var b = (0.3 - 0.2) == (0.2 - 0.1);
```

针对以上情况，可以使用以下方法解决：

对于小数，前端出现问题的几率还是很多的，尤其在一些电商网站涉及到金额等数据。

解决方式：把小数放到位整数（乘倍数），再缩小回原来倍数（除倍数）

```js
// 0.1 + 0.2
(0.1*10 + 0.2*10) / 10 == 0.3 // true
```

封装为一个对象：
```js
/**
 * floatObj 包含加减乘除四个方法，能确保浮点数运算不丢失精度
 *
 * 我们知道计算机编程语言里浮点数计算会存在精度丢失问题（或称舍入误差），其根本原因是二进制和实现位数限制有些数无法有限表示
 * 以下是十进制小数对应的二进制表示
 *      0.1 >> 0.0001 1001 1001 1001…（1001无限循环）
 *      0.2 >> 0.0011 0011 0011 0011…（0011无限循环）
 * 计算机里每种数据类型的存储是一个有限宽度，比如 JavaScript 使用 64 位存储数字类型，因此超出的会舍去。舍去的部分就是精度丢失的部分。
 *
 * ** method **
 *  add / subtract / multiply /divide
 *
 * ** explame **
 *  0.1 + 0.2 == 0.30000000000000004 （多了 0.00000000000004）
 *  0.2 + 0.4 == 0.6000000000000001  （多了 0.0000000000001）
 *  19.9 * 100 == 1989.9999999999998 （少了 0.0000000000002）
 *
 * floatObj.add(0.1, 0.2) >> 0.3
 * floatObj.multiply(19.9, 100) >> 1990
 *
 */
var floatObj = function() {
    
    /*
     * 判断obj是否为一个整数
     */
    function isInteger(obj) {
        return Math.floor(obj) === obj;
    }
    
    /*
     * 将一个浮点数转成整数，返回整数和倍数。如 3.14 >> 314，倍数是 100
     * @param floatNum {number} 小数
     * @return {object}
     *   {times:100, num: 314}
     */
    function toInteger(floatNum) {
        var ret = {times: 1, num: 0};
        var isNegative = floatNum < 0;
        if (isInteger(floatNum)) {
            ret.num = floatNum;
            return ret;
        }
        var strfi  = floatNum + '';
        var dotPos = strfi.indexOf('.');
        var len    = strfi.substr(dotPos+1).length;
        var times  = Math.pow(10, len);
        var intNum = parseInt(Math.abs(floatNum) * times + 0.5, 10);
        ret.times  = times;
        if (isNegative) {
            intNum = -intNum;
        }
        ret.num = intNum;
        return ret;
    }
    
    /*
     * 核心方法，实现加减乘除运算，确保不丢失精度
     * 思路：把小数放大为整数（乘），进行算术运算，再缩小为小数（除）
     *
     * @param a {number} 运算数1
     * @param b {number} 运算数2
     * @param digits {number} 精度，保留的小数点数，比如 2, 即保留为两位小数
     * @param op {string} 运算类型，有加减乘除（add/subtract/multiply/divide）
     *
     */
    function operation(a, b, digits, op) {
        var o1 = toInteger(a);
        var o2 = toInteger(b);
        var n1 = o1.num;
        var n2 = o2.num;
        var t1 = o1.times;
        var t2 = o2.times;
        var max = t1 > t2 ? t1 : t2;
        var result = null;
        switch (op) {
            case 'add':
                if (t1 === t2) { // 两个小数位数相同
                    result = n1 + n2;
                } else if (t1 > t2) { // o1 小数位 大于 o2
                    result = n1 + n2 * (t1 / t2);
                } else { // o1 小数位 小于 o2
                    result = n1 * (t2 / t1) + n2;
                }
                return result / max;
            case 'subtract':
                if (t1 === t2) {
                    result = n1 - n2;
                } else if (t1 > t2) {
                    result = n1 - n2 * (t1 / t2);
                } else {
                    result = n1 * (t2 / t1) - n2;
                }
                return result / max;
            case 'multiply':
                result = (n1 * n2) / (t1 * t2);
                return result;
            case 'divide':
                result = (n1 / n2) * (t2 / t1);
                return result;
        }
    }
    
    // 加减乘除的四个接口
    function add(a, b, digits) {
        return operation(a, b, digits, 'add');
    }
    function subtract(a, b, digits) {
        return operation(a, b, digits, 'subtract');
    }
    function multiply(a, b, digits) {
        return operation(a, b, digits, 'multiply');
    }
    function divide(a, b, digits) {
        return operation(a, b, digits, 'divide');
    }
    
    // exports
    return {
        add: add,
        subtract: subtract,
        multiply: multiply,
        divide: divide
    };
}();
```

特别说明，toFixed四舍五入方法，但是在js中使用的时候也会奇葩的出现不四舍五入的情况：
```js
1.335.toFixed(2);//1.33，而不是1.34
```

toFixed的修复如下

```js
// toFixed 修复
function toFixed(num, s) {
    var times = Math.pow(10, s);
    var des = num * times + 0.5;
    des = parseInt(des, 10) / times;
    return des + '';
}
```

参考引用：

[JavaScript数字精度丢失问题总结](http://www.cnblogs.com/snandy/p/4943138.html)

<a id="markdown-一个特殊的值-nan" name="一个特殊的值-nan"></a>
#### 一个特殊的值 NaN

NaN：特殊值，表示非数字，主要出现字符串转换为数值和非法的计算时。

```js
var a = 1 + undefined;
var b = 0 / 0;
var c = Math.sqrt(-1);
```

- NaN不等于任何值，包括它本身。这个很重要，是js中唯一不等于自身的值。
- NaN与任何数（包括它自己）的运算，得到的都是NaN。

如何判断NaN？

```js
var a = isNaN(1 + undefined);
var b = isNaN(123);
var c = isNaN("9527");
var d = isNaN("华安");

//利用上面说到的不等于自身的特点，这个方法才靠谱！
function extIsNaN(value) {
    return value !== value;
}
```

<a id="markdown-parseint" name="parseint"></a>
#### parseInt()

parseInt方法用于将字符串转为整数。

字符串转为整数的时候，过滤字符串前导空格后，然后一个个字符依次转换，

如果遇到不能转为数字的字符，就不再进行下去，返回已经转好的部分。

所以，第一个字符无法成功转换的时候，就返回我们前面说的NaN。

```js
parseInt("123");
parseInt("       123");
parseInt("1        23");
parseInt("1.23");
parseInt("0.123");
parseInt("a123");
parseInt("123abc");
parseInt("");
```

<a id="markdown-parsefloat" name="parsefloat"></a>
#### parseFloat()

parseFloat方法用于将一个字符串转为浮点数。

同parseInt类似，过滤字符串前导空格后，按照科学计数法进行转换，

如果字符串包含不能转为浮点数的字符，则不再进行往后转换，返回已经转好的部分。

<a id="markdown-number" name="number"></a>
#### Number()

Number方法用于将字符串转换为数值，不同是过滤前导空格后，

如果发生无法转换的情况直接返回NaN，而不是像parseInt/parseFloat一样返回已经转换好的部分。

```js
parseFloat(true)  // NaN
Number(true) // 1

parseFloat(null) // NaN
Number(null) // 0

parseFloat('') // NaN
Number('') // 0

parseFloat('123.45#') // 123.45
Number('123.45#') // NaN
```

<a id="markdown-字符串" name="字符串"></a>
### 字符串

字符串就是零个或多个排在一起的字符，放在单引号或双引号之中。

如果要在单引号字符串的内部，使用单引号（或者在双引号字符串的内部，使用双引号），

就必须在内部的单引号（或者双引号）前面加上反斜杠(`\`)，用来转义。

```js
var str = 'this is 【双引号】 \"双引号\"';
var str2 = 'this is 【单引号】 \'双引号\'';
```

由于HTML语言的属性值使用双引号，所以很多项目约定JavaScript语言的字符串只使用单引号，本教程就遵守这个约定。

当然，只使用双引号也完全可以。重要的是，坚持使用一种风格，不要两种风格混合。

字符串默认只能写在一行内，分成多行将会报错。

拼接字符串：连接运算符（+）可以连接多个单行字符串，将长字符串拆成多行书写，输出的时候也是单行。

```js
var str = '你关心的，' + '才是头条。'
    + '头条有你更精彩!';
```

<a id="markdown-length" name="length"></a>
#### length
```js
var str = 'amazing';
str.length;//7
str.length = 0;
str.length;//7
```

<a id="markdown-转义字符\" name="转义字符\"></a>
#### 转义字符(`\`)

反斜杠（\）在字符串内有特殊含义，用来表示一些特殊字符，所以又称为转义符。

需要用反斜杠转义的特殊字符，主要有下面这些：

- \0 null（\u0000）
- \b 后退键（\u0008）
- \f 换页符（\u000C）
- \n 换行符（\u000A）
- \r 回车键（\u000D）
- \t 制表符（\u0009）
- \v 垂直制表符（\u000B）
- \' 单引号（\u0027）
- \" 双引号（\u0022）
- \ 反斜杠（\u005C）

上面这些字符前面加上反斜杠，都表示特殊含义。

<a id="markdown-函数function" name="函数function"></a>
### 函数function
函数就是一段可以反复调用的代码块。函数还能接受输入的参数，不同的参数会返回不同的值。

声明一个函数常用的两种方法：
1. function命令

function命令声明的代码区块，就是一个函数。

function命令后面是函数名，函数名后面是一对圆括号，里面是传入函数的参数。函数体放在大括号里面。
```js
function print(s) {
  alert(s);
}
```
上面的代码命名了一个print函数，以后使用print()这种形式，就可以调用相应的代码。这叫做函数的声明（Function Declaration）。

2. 函数表达式

除了用function命令声明函数，还可以采用变量赋值的写法。
```js
var print = function(s){
    alert(s);
}
```
这种写法将一个匿名函数赋值给变量。

这时，这个匿名函数又称函数表达式（Function Expression），因为赋值语句的等号右侧只能放表达式。

<a id="markdown-调用函数时的括号" name="调用函数时的括号"></a>
#### 调用函数时的括号()
调用函数时，要使用圆括号运算符。圆括号之中，可以加入函数的参数。
```js
function add(x, y) {
  return x + y;
}
add(1, 1) // 2
```
上面代码中，函数名后面紧跟一对圆括号，就会调用这个函数。

<a id="markdown-return" name="return"></a>
#### return
函数体内部的return语句，表示返回。

JavaScript引擎遇到return语句，就直接返回return后面的那个表达式的值，后面即使还有语句，也不会得到执行。

也就是说，return语句所带的那个表达式，就是函数的返回值。

return语句不是必需的，如果没有的话，该函数就不返回任何值，或者说返回undefined。

```js
funciton getBookName(){
    return '男人来自火星，女人来自金星';
    //因为return的关系，后面的语句无效
    return '再写啥也没用了';
}
```

<a id="markdown-作用域" name="作用域"></a>
#### 作用域
作用域（scope）指的是变量存在的范围。

Javascript只有两种作用域：

一种是全局作用域，变量在整个程序中一直存在，所有地方都可以读取；

另一种是函数作用域，变量只在函数内部存在。

在函数外部声明的变量就是全局变量（global variable），它可以在函数内部读取。

```js
var v = 1;

function f(){
  console.log(v);
}

f()
// 1
```

上面的代码表明，函数f内部可以读取全局变量v。

在函数内部定义的变量，外部无法读取，称为“局部变量”（local variable）。
```js
function f(){
  var v = 1;
}

v // ReferenceError: v is not defined
```
上面代码中，变量v在函数内部定义，所以是一个局部变量，函数之外就无法读取。

<a id="markdown-对象object" name="对象object"></a>
### 对象object

一个最简单的对象

```js
var obj = {};
typeof obj;//object
```

<a id="markdown-属性property" name="属性property"></a>
#### 属性(property)

```js
var marsMan = {
    name : '火星人',
    age : 123,
    ships : ['银河系飞船','半人马飞船','双子座飞船'],
    saveEarth : function(){
        alert('地球要爆炸了，我来拯救地球了！');
    },
    marsWife : {
        name : '火星人的老婆',
        age : 321,
        // ........
    },
};
```

对于上述例子，对象的属性可以是三种基本类型，也可以是复杂类型如数组Array、方法function和对象object。

- name 字符串
- age 数值
- ships 数组
- saveEarth 方法
- marsWife 对象

<a id="markdown-对象属性" name="对象属性"></a>
#### 对象属性
对象属性访问有两种方法，点语法(.)和方括号([])。

请注意，如果使用方括号运算符，属性名必须放在引号里面，否则会被当作变量处理。

但是，数字键可以不加引号，因为会被当作字符串处理。

```js
var earthMan = {
    name : 'Javascript'
};
//对于name属性的获取，以下两种语法效果是一样的
earthMan.name;//Javascript
earthMan['name'];//Javascript

//对于新属性newName的设置也是类似的
earthMan.newName = 'JS';
earthMan['newName'] = 'JS';

//使用方括号运算符可以使用数值或者包含空格的字符串作为属性名称
earthMan[1.2] = '小数属性';
earthMan['空 格'] = '我的属性名称有空格';

//方括号运算符中可以是表达式，对于上例中两个特殊属性名称
earthMan[1+0.2];//小数属性
earthMan['空 '+'格'];//我的属性名称有空格

//访问一个不存在的属性会返回undefined
earthMan.Count;//undefined

```

<a id="markdown-in运算符" name="in运算符"></a>
#### in运算符
in运算符用于检查对象是否包含某个属性（注意，检查的是属性名称，不是属性的值），如果包含就返回true，否则返回false。

注意！！！ in运算符并不会区分属性是否是继承的属性。

例如，toString方法不是对象o自身的属性，而是继承的属性，hasOwnProperty方法可以说明这一点。

但是，in运算符不能识别，对继承的属性也返回true。

```js
var o = new Object();
o.hasOwnProperty('toString') // false

'toString' in o // true
```

<a id="markdown-forin" name="forin"></a>
#### for...in
for...in循环用来遍历一个对象的全部属性。

有两个使用注意点：
- 它遍历的是对象所有可遍历（enumerable）的属性，会跳过不可遍历的属性
- 它不仅遍历对象自身的属性，还遍历继承的属性。

```js
// name 是 Person 本身的属性
function Person(name) {
  this.name = name;
}

// describe是Person.prototype的属性
Person.prototype.describe = function () {
  return 'Name: '+this.name;
};

var person = new Person('Jane');

// for...in循环会遍历实例自身的属性（name），
// 以及继承的属性（describe）
for (var key in person) {
  console.log(key);
}

var marsMan = {
    name: '火星人', //字符串
    age: 123, //数值
    isSingle: false, //布尔值
    ships: ['银河系飞船', '半人马飞船', '双子座飞船'], //数组
    saveEarth: function () {
        writeLine('地球要爆炸了，我来拯救地球了！');
    },
    marsWife: {
        name: '火星人的老婆',
        age: 321,
        // ........
    },
};
for (var key in marsMan) {
    writeLine('for in遍历对象 属性名称：' + key + '，属性值:' + marsMan[key] );
}
//封装方法，实现换行输出到页面
function writeLine(content) {
    document.write('<br/>' + content);
}
// name
// describe
```
上面代码中，name是对象本身的属性，describe是对象继承的属性，for...in循环的遍历会包括这两者。

如果只想遍历对象本身的属性，可以使用hasOwnProperty方法，在循环内部判断一下是不是自身的属性。

```js
for (var key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(key);
  }
}
// name
```
对象person其实还有其他继承的属性，比如toString。

```js
person.toString()
// "[object Object]"
```
这个toString属性不会被for...in循环遍历到，因为它默认设置为“不可遍历”，详见《标准库》一章的Object对象部分。

一般情况下，都是只想遍历对象自身的属性，所以不推荐使用for...in循环。

<a id="markdown-数组" name="数组"></a>
#### 数组
数组（array）是按次序排列的一组值。每个值的位置都有编号（从0开始），整个数组用方括号表示。其实也是一种特殊的对象。

`var arr = ['a', 'b', 'c'];`

任何类型的数据都是可以放到数组中的：

```js
var arr = [
  {a: 1},
  [1, 2, 3],
  function() {return true;}
];
```

如果数组的元素还是数组，就形成了多维数组。
```js
var a = [[1, 2], [3, 4]];
a[0][1] // 2
a[1][1] // 4
```

**length**
数组的length属性，返回数组的成员数量。
`arr.length;//3`

```js
//循环
for(var i =0;i<arr.length;i++){

}
//循环
for(var key in arr){
    
}
//循环，逆向遍历
var l = arr.lenght;
while(l--){
    console.log(arr[l]);
}
```

<a id="markdown-布尔值boolean" name="布尔值boolean"></a>
### 布尔值boolean

布尔值只有两种值，分别是true和false，代表真和假。

可以返回boolean值的运算符：

- 两元逻辑运算符： && (And)，|| (Or)
- 前置逻辑运算符： ! (Not)
- 相等运算符：===，!==，==，!=
- 比较运算符：>，>=，<，<=

如果JavaScript预期某个位置应该是布尔值，会将该位置上现有的值自动转为布尔值。

转换规则是除了下面六个值被转为false，其他值都视为true。(必须记住！！！)

```js
undefined
null
false
0
NaN
""//（空字符串）
```

<a id="markdown-null和undefined" name="null和undefined"></a>
### null和undefined

null和undefin都可以表示"没有"的意思，if(null)和if(undefined)的结果也是一致的，它们都会被转化为false假值。

null：即是一个不存在的对象的占位符，通过`typeof(null);`测试返回值为object，null还是一个对象，可以理解为一个特殊的对象。

**null表示"没有对象"，即该处不应该有值。**

典型用法：

1. 作为函数的参数，表示该函数的参数不是对象。
2. 作为对象原型链的终点。

**undefined表示"缺少值"，就是此处应该有一个值，但是还没有定义**

典型用法：

1. 变量被声明了，但没有赋值时，就等于undefined。
2. 调用函数时，应该提供的参数没有提供，该参数等于undefined。
3. 对象没有赋值的属性，该属性的值为undefined。
4. 函数没有返回值时，默认返回undefined。

<a id="markdown-数据类型-强制转换" name="数据类型-强制转换"></a>
### 数据类型-强制转换
JavaScript 是一种动态类型语言，变量没有类型限制，可以随时赋予任意值。

<a id="markdown-number" name="number"></a>
#### Number
使用Number函数，可以将任意类型的值转化成数值。

下面分成两种情况讨论，一种是参数是原始类型的值，另一种是参数是对象。
```js
// 数值：转换后还是原来的值
Number(324) // 324

// 字符串：如果可以被解析为数值，则转换为相应的数值
Number('324') // 324

// 字符串：如果不可以被解析为数值，返回NaN
Number('324abc') // NaN

// 空字符串转为0
Number('') // 0

// 布尔值：true 转成1，false 转成0
Number(true) // 1
Number(false) // 0

// undefined：转成 NaN
Number(undefined) // NaN

// null：转成0
Number(null) // 0
```
对象转换规则
```js
Number({a: 1}) // NaN
Number([1, 2, 3]) // NaN
Number([5]) // 5
```
<a id="markdown-string" name="string"></a>
#### String
使用String函数，可以将任意类型的值转化成字符串。转换规则如下。
```js
//原始类型值的转换规则
String(123) // "123"
String('abc') // "abc"
String(true) // "true"
String(undefined) // "undefined"
String(null) // "null"

//对象转换规则
//String方法的参数如果是对象，返回一个类型字符串；如果是数组，返回该数组的字符串形式。
String({a: 1}) // "[object Object]"
String([1, 2, 3]) // "1,2,3"
```
<a id="markdown-boolean" name="boolean"></a>
#### Boolean
使用Boolean函数，可以将任意类型的变量转为布尔值。

它的转换规则相对简单：除了以下六个值的转换结果为false，其他的值全部为true。
```js
undefined
null
-0
0或+0
NaN
''/""（空字符串）
```

<a id="markdown-数据类型-自动转换" name="数据类型-自动转换"></a>
### 数据类型-自动转换
下面介绍自动转换，它是以强制转换为基础的。

遇到以下三种情况时，JavaScript会自动转换数据类型，即转换是自动完成的，对用户不可见。
```js
// 1. 不同类型的数据互相运算
123 + 'abc' // "123abc"

// 2. 对非布尔值类型的数据求布尔值
if ('abc') {
  console.log('hello')
}  // "hello"

// 3. 对非数值类型的数据使用一元运算符（即“+”和“-”）
+ {foo: 'bar'} // NaN
- [1, 2, 3] // NaN
```


<a id="markdown-自动转换为布尔值" name="自动转换为布尔值"></a>
#### 自动转换为布尔值
当JavaScript遇到预期为布尔值的地方（比如if语句的条件部分），就会将非布尔值的参数自动转换为布尔值。

系统内部会自动调用Boolean函数。

因此除了以下六个值，其他都是自动转为true。
```js
undefined
null
-0
0或+0
NaN
''（空字符串）

if(undefined){}
```

<a id="markdown-自动转换为字符串" name="自动转换为字符串"></a>
#### 自动转换为字符串
当JavaScript遇到预期为字符串的地方，就会将非字符串的数据自动转为字符串。系统内部会自动调用String函数。

字符串的自动转换，主要发生在加法运算时。

当一个值为字符串，另一个值为非字符串，则后者转为字符串。

```js
'5' + 1 // '51'
'5' + true // "5true"
'5' + false // "5false"
'5' + {} // "5[object Object]"
'5' + [] // "5"
'5' + function (){} // "5function (){}"
'5' + undefined // "5undefined"
'5' + null // "5null"
```
这种自动转换很容易出错。
```js
var obj = {
  width: '100'
};

obj.width + 20 // "10020"
```

<a id="markdown-自动转换为数值" name="自动转换为数值"></a>
#### 自动转换为数值
当JavaScript遇到预期为数值的地方，就会将参数值自动转换为数值。

系统内部会自动调用Number函数。

除了加法运算符有可能把运算子转为字符串，其他运算符都会把运算子自动转成数值。

```js
'5' - '2' // 3
'5' * '2' // 10
true - 1  // 0
false - 1 // -1
'1' - 1   // 0
'5' * []    // 0
false / '5' // 0
'abc' - 1   // NaN
```

<a id="markdown-自动转换规则" name="自动转换规则"></a>
#### 自动转换规则
在转换不同的数据类型时，相等和不相等操作符遵循下列基本规则：
1. 如果有一个操作数是布尔值，则在比较相等性之前先将其转换为数值——false转换为0，而true转换为1；
2. 如果一个操作数是字符串，另一个操作数是数值，在比较相等性之前先将字符串转换为数值；
3. 如果一个操作数是对象，另一个操作数不是，则调用对象的valueOf()方法，用得到的基本类型值按照前面的规则进行比较；

```js
//空字符串和false进行比较
'' == false;//true，很好理解，空字符串为false，但其实过程很艰辛
'' == 0;//应用规则1，将false -> 0
0 == 0;//应用规则2，将'' -> 0

//非空字符串和true进行比较却出乎意料
'true' == true;//false
'true' == 1;//应用规则1，将true -> 1
NaN == 1;//应用规则2，将'true' -> NaN。NaN连自己都不相等，和数值比较更不相等，所以为false

//特殊
'1' == true;
'1' == 1;
1 == 1;
```

由于自动转换具有不确定性，而且容易出错，建议在预期为布尔值、数值、字符串的地方，

全部使用Boolean、Number和String函数进行显式转换或使用强等(===)进行判断。

<a id="markdown-条件语句" name="条件语句"></a>
## 条件语句

<a id="markdown-ifelse" name="ifelse"></a>
### if...else...

```js
//这样用
//expression 表达式，转换为布尔值
//statement 语句
if (expression){
  statement;
}

if (expression) {
    statement1;
}else {
    statement2;
}

//还可以这样用
if (expression) { statement }

//还能这么处理多种情况
if (expression1) {
    //处理1
}else if(expression2) {
    //处理2
}else if(expression3) {
    //处理3
}else {
    //其他处理
}
```

<a id="markdown-switch" name="switch"></a>
### switch

```js
switch(value) {
    case "":
        break;
    case "":
        break;
    default:
        break;
}
```

<a id="markdown-三元运算符" name="三元运算符"></a>
### 三元运算符

```js
(condition) ? expression1 : expression2;
//等价于
if(condition) {
    expression1;
} else {
    expression2;
}

var age = 123;
var remark = (age>100)? '大于100' : '小于等于100';
remark//大于100
```

<a id="markdown-循环语句" name="循环语句"></a>
## 循环语句

<a id="markdown-while" name="while"></a>
### while

```js
while (condiiton){
  statement;
}

while (false) {
    console.log('先奏后斩');
}

//使用console.log打印0-99
var i = 0;
while (i < 100) {
    console.log(i);
    i++;
}

//请尝试用while和console.log输出 1,3,5,7,9...99

```

<a id="markdown-dowhile" name="dowhile"></a>
### do...while

```js
do {
    statement;
} while(expression);

do {
    document.write('先斩后奏');
} while (false);
```

<a id="markdown-for" name="for"></a>
### for

```js
for (initialize; test; increment) {
  statement;
}
```

- 初始化表达式（initialize）：确定循环的初始值，只在循环开始时执行一次。
- 测试表达式（test）：检查循环条件，只要为真就进行后续操作。
- 递增表达式（increment）：完成后续操作，然后返回上一步，再一次检查循环条件。

<a id="markdown-break和continue" name="break和continue"></a>
### break和continue

- 共同点：都是跳出循环

- 不同点：break跳出后不再执行循环体；continue只结束本轮循环，还会继续循环下去。。。

<a id="markdown-严格模式" name="严格模式"></a>
## 严格模式
JavaScript 严格模式（strict mode）即在严格的条件下运行。

<a id="markdown-为什么使用严格模式" name="为什么使用严格模式"></a>
### 为什么使用严格模式
* 消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为;
* 消除代码运行的一些不安全之处，保证代码运行的安全；
* 提高编译器效率，增加运行速度；
* 为未来新版本的Javascript做好铺垫。

使用`"use strict";`进入严格模式

针对单个脚本：
```html
<script>
    "use strict";
    console.log("这是严格模式。");
</script>
```

针对单个函数：
```html
function strict() {
    "use strict";
    return "这是严格模式。";
}

function notStrict() {
    return "这是正常模式。";
}
```

<a id="markdown-严格模式中的变化" name="严格模式中的变化"></a>
### 严格模式中的变化
<a id="markdown-全局变量声明" name="全局变量声明"></a>
#### 全局变量声明
在正常模式中，如果一个变量没有声明就赋值，默认是全局变量。

严格模式禁止这种用法，全局变量必须显式声明。

```js
"use strict";
v = 1; // 报错，v未声明
for (i = 0; i < 2; i++) { // 报错，i未声明
}
```

因此，严格模式下，变量都必须先用var命令声明，然后再使用。

<a id="markdown-禁止this关键字指向全局对象" name="禁止this关键字指向全局对象"></a>
#### 禁止this关键字指向全局对象
```js
function f() {
    return !this;
}
// 返回false，因为"this"指向全局对象，"!this"就是false

function f() {
    "use strict";
    return !this;
}
// 返回true，因为严格模式下，this的值为undefined，所以"!this"为true。
```

因此，使用构造函数时，如果忘了加new，this不再指向全局对象，而是报错。

<a id="markdown-禁止删除变量" name="禁止删除变量"></a>
#### 禁止删除变量
严格模式下无法删除变量。只有configurable设置为true的对象属性，才能被删除。

```js
"use strict";
var x;
delete x; // 语法错误
var o = Object.create(null, {
    'x': {
        value: 1,
        configurable: true
    }
});
delete o.x; // 删除成功
```

<a id="markdown-对象不能有重名的属性" name="对象不能有重名的属性"></a>
#### 对象不能有重名的属性
正常模式下，如果对象有多个重名属性，最后赋值的那个属性会覆盖前面的值。严格模式下，这属于语法错误。

```js
"use strict";
var o = {
    p: 1,
    p: 2
}; // 语法错误
```

<a id="markdown-函数不能有重名的参数" name="函数不能有重名的参数"></a>
#### 函数不能有重名的参数
正常模式下，如果函数有多个重名的参数，可以用arguments[i]读取。严格模式下，这属于语法错误。

```js
"use strict";
function f(a, a, b) { // 语法错误
    return;
}
```

















---

参考引用：

[阮一峰 JavaScript 标准参考教程](http://javascript.ruanyifeng.com/)

[阮一峰 undefined与null的区别](http://www.ruanyifeng.com/blog/2014/03/undefined-vs-null.html)

