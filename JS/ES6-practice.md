<!-- TOC -->

- [ES6练习](#es6练习)
    - [对象结构赋值](#对象结构赋值)
    - [模板字符串](#模板字符串)
    - [数组求平方](#数组求平方)
    - [类定义](#类定义)

<!-- /TOC -->

<a id="markdown-es6练习" name="es6练习"></a>
# ES6练习

<a id="markdown-对象结构赋值" name="对象结构赋值"></a>
## 对象结构赋值

使用结构赋值，实现两个变量的值的交换（编程题）。

```js
let a = 1;
let b = 2;

let temp = a;
a = b;
b = temp;
```

等价于下面写法

```js
let a = 1;
let b = 2;

// 实现a，b变量的交换
[a,b] = [b,a];
```

<a id="markdown-模板字符串" name="模板字符串"></a>
## 模板字符串
以下代码改用模板字符串方式表达：

```js
let im = "我是";
let name = "王富贵";
let str = "大家好，" + im + name + ",多指教。";
```

等价于

```js
let im = "我是";
let name = "王富贵";
let str = `大家好，${im}${name},多指教。`;
```

<a id="markdown-数组求平方" name="数组求平方"></a>
## 数组求平方
计算出数组 [1,2,3,4] 每一个元素的平方并组成新的数组

```js
var arr = [1, 2, 3, 4];
var newArr = [];
for (let i = 0; i < arr.length; i++) {
    newArr.push(Math.pow(arr[i], 2));
}
console.log(newArr);
```

等价于

```js
var arr = [1, 2, 3, 4];
// js map和箭头函数
var newArr = arr.map((x) => { return Math.pow(x, 2); });
console.log(newArr);
```

<a id="markdown-类定义" name="类定义"></a>
## 类定义

定义一个类Animal，通过传参初始化它的类型，如：“猫科类”。

它有一个实例方法：run，run函数体内容可自行定义。

```js
var Animal = function (type) {
    this.type = type;
    this.run = function () {
        console.log(`${this.type} can run fast`);
    }
}

var a1 = new Animal('小猫');
a1.run();
```

等价于

```js
class Animal {
    constructor(type) {
        this.type = type;
    }
    run() {
        console.log(`${this.type} can run fast`);
    }
}

var a1 = new Animal('小猫');
a1.run();
```

定义一个子类Cat并继承Animal类。初始化Cat类的昵称name和年龄age。

并拥有实例方法eat，eat函数体内容可自行定义。

```js
class Animal {
    constructor(type) {
        this.type = type;
    }
    run() {
        console.log(`${this.type} can run fast`);
    }
}

class Cat extends Animal {
    constructor(name, age) {
        super('小猫');
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log(`${this.name}喜欢吃鱼`);
    }
}

var a1 = new Cat('小花', 2);
a1.run();
a1.eat();
```
