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

### 条件语句
#### if...else...
```js
//这样用
if (expression){
  statement;
}

//还可以这样用
if (expression) { statement }

//还能这么处理多种情况
if (expression) {
    //处理1
}else if(expression) {
    //处理2
}else if(expression) {
    //处理2
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

参考引用 
>http://www.ruanyifeng.com/blog/2014/03/undefined-vs-null.html

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