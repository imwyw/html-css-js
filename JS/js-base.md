# 基础

## 语法

### 语句(statement)

语句(statement)以分号结尾，一个分号就表示一个语句结束。

一行也可以写多个语句，并不影响浏览器的编译，但是这样并不便于维护和调试，所以建议每一句独立一行！

``` js
var name = "华安";
var age = 123;
```

上例中是两个简单的赋值语句。

关键字var是声明变量，变量名称叫name，等号后面的"华安"是一个字符串，将一个字符串赋值给name变量。

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

### 标识符

标识符（identifier）是用来识别具体对象的一个名称。最常见的标识符就是变量名，以及后面要提到的函数名。JavaScript语言的标识符对大小写敏感，所以a和A是两个不同的标识符。

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


## 数据类型

JavaScript 语言的每一个值，都属于某一种数据类型。JavaScript的数据类型，共有六种。

1. 数值（number）：整数和小数（比如1和3.14）
2. 字符串（string）：字符组成的文本（比如”Hello World”）
3. 布尔值（boolean）：true（真）和false（假）两个特定值
4. undefined：表示“未定义”或不存在，即由于目前没有定义，所以此处暂时没有任何值
5. null：表示无值，即此处的值就是“无”的状态。
6. 对象（object）：各种值组成的集合

**typeof**可以返回一个变量的数据类型，可以帮助我们检查值的类型。

### 原始类型

为啥叫原始类型？因为这三种是最基本的，不可再进行细分了。

数值number、字符串string、布尔值boolean

```js
typeof 123;//number
typeof "华安";//string
typeof true;//boolean
```

#### 数值

JavaScript内部，所有数字都是以64位浮点数形式储存，即使整数也是如此。所以，1与1.0是相同的，是同一个数。

##### 精度问题

** 由于浮点数不是精确的值，所以涉及小数的比较和运算要特别小心。**

```js
var a = 0.3 / 0.1;
var b = (0.3 - 0.2) == (0.2 - 0.1);
```

##### 一个特殊的值 NaN

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

##### parseInt()

parseInt方法用于将字符串转为整数。

字符串转为整数的时候，过滤字符串前导空格后，然后一个个字符依次转换，如果遇到不能转为数字的字符，就不再进行下去，返回已经转好的部分。所以，第一个字符无法成功转换的时候，就返回我们前面说的NaN。

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

##### parseFloat()

parseFloat方法用于将一个字符串转为浮点数。

同parseInt类似，过滤字符串前导空格后，按照科学计数法进行转换，如果字符串包含不能转为浮点数的字符，则不再进行往后转换，返回已经转好的部分。

##### Number()

Number方法用于将字符串转换为数值，不同是过滤前导空格后，如果发生无法转换的情况直接返回NaN，而不是像parseInt/parseFloat一样返回已经转换好的部分。

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

#### 字符串

字符串就是零个或多个排在一起的字符，放在单引号或双引号之中。

如果要在单引号字符串的内部，使用单引号（或者在双引号字符串的内部，使用双引号），就必须在内部的单引号（或者双引号）前面加上反斜杠(`\`)，用来转义。

```js
var str = 'this is 【双引号】 \"双引号\"';
var str2 = 'this is 【单引号】 \'双引号\'';
```

由于HTML语言的属性值使用双引号，所以很多项目约定JavaScript语言的字符串只使用单引号，本教程就遵守这个约定。当然，只使用双引号也完全可以。重要的是，坚持使用一种风格，不要两种风格混合。

字符串默认只能写在一行内，分成多行将会报错。

拼接字符串：连接运算符（+）可以连接多个单行字符串，将长字符串拆成多行书写，输出的时候也是单行。

```js
var str = '你关心的，' + '才是头条。'
    + '头条有你更精彩!';
```

##### length
```js
var str = 'amazing';
str.length;//7
str.length = 0;
str.length;//7
```

##### 转义字符(`\`)

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

### 函数function

```js
function sayHello(){}
typeof sayHello;//function
```

### undefined

```js
//变量unvar并没有用var进行声明
typeof unvar;
typeof undefined;
```

### 对象object

一个最简单的对象

```js
var obj = {};
typeof obj;//object
```

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

对于上述例子，对象的属性可以是三种基本类型，
也可以是复杂类型如数组Array、方法function和对象object。

- name 字符串
- age 数值
- ships 数组
- saveEarth 方法
- marsWife 对象

### 其他

其他情况都是返回object

```js
typeof [];
typeof {};
typeof null;
```

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

### 布尔值boolean

布尔值只有两种值，分别是true和false，代表真和假。

可以返回boolean值的运算符：

- 两元逻辑运算符： && (And)，|| (Or)
- 前置逻辑运算符： ! (Not)
- 相等运算符：===，!==，==，!=
- 比较运算符：>，>=，<，<=

如果JavaScript预期某个位置应该是布尔值，会将该位置上现有的值自动转为布尔值。转换规则是除了下面六个值被转为false，其他值都视为true。

```js
undefined
null
false
0
NaN
""//（空字符串）
```

### 条件语句

#### if...else...

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

#### switch

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

#### 三元运算符

```js
(condition) ? expression1 : expression2;
//等价于
if(condition) {
    expression1;
} else {
    expression2;
}
```

### 循环语句

#### while

```js
while (expression){
  statement;
}
```

#### for

```js
for (initialize; test; increment) {
  statement;
}
```

- 初始化表达式（initialize）：确定循环的初始值，只在循环开始时执行一次。
- 测试表达式（test）：检查循环条件，只要为真就进行后续操作。
- 递增表达式（increment）：完成后续操作，然后返回上一步，再一次检查循环条件。

#### do...while

```js
do {
    statement;
} while(expression);
```

#### break和continue

- 共同点：都是跳出循环

- 不同点：break跳出后不再执行循环体；continue只结束本轮循环，还会继续循环下去。。。


参考引用：

[阮一峰 JavaScript 标准参考教程](http://javascript.ruanyifeng.com/)

[阮一峰 undefined与null的区别](http://www.ruanyifeng.com/blog/2014/03/undefined-vs-null.html)