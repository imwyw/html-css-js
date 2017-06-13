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

我们常用的一些声明写法：
``` js
//这样的写法也是可以的
var name,age,sex;
```

### 标识符

### 条件语句

#### if...else...

#### switch

#### 三元运算符


### 循环语句

#### while

#### for

#### break和continue

## 数据类型
typeof可以返回一个变量的数据类型
### 原始类型
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
typeof unvar;//undefined
```
### 其他
其他情况都是返回object
```js

```