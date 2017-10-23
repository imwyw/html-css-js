<!-- TOC -->

- [JavaScript面向对象](#javascript面向对象)
    - [类](#类)
    - [原型prototype](#原型prototype)
    - [继承](#继承)
        - [对象冒充实现继承](#对象冒充实现继承)
            - [call()和apply()](#call和apply)
        - [原型链实现继承](#原型链实现继承)
        - [组合继承](#组合继承)
    - [作用域](#作用域)
        - [作用域链](#作用域链)
        - [没有块级作用域](#没有块级作用域)
        - [未使用var的声明](#未使用var的声明)
    - [闭包](#闭包)
    - [this](#this)

<!-- /TOC -->
# JavaScript面向对象
## 类
所谓“类”就是对象的模板，对象就是“类”的实例。但是，JavaScript 语言的对象体系，不是基于“类”的，而是基于构造函数（constructor）和原型链（prototype）。

```js
//Student类构造函数
var Student = function (name) {
    //this指向类的实例，及对象本身，每一个对象都有Name属性
    this.Name = name;

    //每一个对象都有sayHi方法
    this.sayHi = function () {
        console.log('hello world,' + this.Name);
    }
}

var stu1 = new Student('jack');
var stu2 = new Student('lucy');
stu1.sayHi();
stu2.sayHi();
```

## 原型prototype
JavaScript 的每个对象都继承另一个对象，后者称为“原型”（prototype）对象。只有null除外，它没有自己的原型对象。

原型对象上的所有属性和方法，都能被派生对象共享。这就是 JavaScript 继承机制的基本设计。

使用原型改下上面类的写法：
```js
//Student类构造函数
var Student = function (name) {
    //this指向类的实例，及对象本身，每一个对象都有Name属性
    this.Name = name;

    //实例共享的方法
    Student.prototype.sayHi = function () {
        console.log('hello world,' + this.Name);
    }
    Student.prototype.Name = '中国人';
}

var stu1 = new Student('jack');//hello world,jack
var stu2 = new Student('lucy');//hello world,lucy
stu1.sayHi();
stu2.sayHi();

//打印实例属性，如当前类没有该属性，则按照原型链
console.log(stu1.Name);//jack
//__proto__原型对象
console.log(stu1.__proto__.Name);//中国人
```

对象的属性和方法，有可能是定义在自身，也有可能是定义在它的原型对象。由于原型本身也是对象，又有自己的原型，所以形成了一条原型链（prototype chain）。

如果对象自身和它的原型，都定义了一个同名属性，那么优先读取对象自身的属性，这叫做“覆盖”（overriding）。当原型属性和实例属性冲突时，会以当前实例的属性为主。如上例代码中的Name属性。

## 继承
### 对象冒充实现继承
```js
//多边形类
var Polygon = function (side) {
    //边数
    this.side = side;
    //计算面积
    this.getAreas = function () {
        return 0;
    }
};

//矩形
var Rectangle = function (width, height) {
    //是指将父类的属性和方法一起传给子类作为特权属性和特权方法。
    this.p = Polygon;
    this.p(4);
    //删除p属性，防止通过p属性修改父类结构
    //delete this.p;
    
    this.width = width;
    this.height = height;
    this.getAreas = function () {
        return this.width * this.height;
    }
};

var r = new Rectangle(3, 4);
console.log(r.getAreas());
```

#### call()和apply()
call方法: 
语法：obj.call(thisObj, arg1, arg2, ...);

apply方法： 
语法：obj.apply(thisObj, [arg1, arg2, ...]);

相同点：都是把obj(即this)绑定到thisObj，这时候thisObj具备了obj的属性和方法。或者说thisObj继承了obj的属性和方法。
区别：apply接收的是数组参数，call接收的是连续参数。

```js
//三角形
var Triangle = function (a, b, c) {
    //在当前实例this的基础上调用Polygon的构造函数
    Polygon.call(this, 3);

    this.A = a;
    this.B = b;
    this.C = c;
    this.getAreas = function (a, b, c) {
        //海伦公式求面积
        var hf = (this.A + this.B + this.C) / 2;
        var res = Math.sqrt(hf * (hf - this.A) * (hf - this.B) * (hf - this.C));
        return res;
    }
}
var t = new Triangle(6, 8, 10);
console.log(t.getAreas());
```

关于对象冒充实现继承：

所有的成员方法都是针对this而创建的，也就是所所有的实例都会拥有一份成员方法的副本，这是对内存资源的一种极度浪费。其它的缺陷比如说对象冒充无法继承prototype域的变量和方法就不用提了。

针对上面的例子中，给多边形类Polygon增加原型方法，子类无法继承到原型上的属性。。。
```js
//计算周长，原型方法
Polygon.prototype.getPerimeter = function () {
    return 0;
}
```

### 原型链实现继承
利用了prototype或者说以某种方式覆盖了prototype，从而达到属性方法复制的目的。其实现方式有很多中，可能不同框架多少会有一点区别，但是我们把握住原理，就不会有任何不理解的地方了。

使用原型继承实现上面多边形的例子：
```js
//多边形类
var Polygon = function (side) {
    //边数
    this.side = side;
    //计算面积
    Polygon.prototype.getAreas = function () {
        return 0;
    }

    /*原型继承的不足之处
    实例属性中的数组和对象并不会继承，而是共享了一个内存，在多个实例修改属性时会造成冲突
    */
    this.model = {};
    this.arr = [];
    this.name = '';
};

//矩形
var Rectangle = function (width, height) {
    this.width = width;
    this.height = height;
};
Rectangle.prototype = new Polygon(4);
Rectangle.prototype.getAreas = function () {
    return this.width * this.height;
}

var r = new Rectangle(3, 4);
console.log(r.getAreas());

//三角形
var Triangle = function (a, b, c) {
    this.A = a;
    this.B = b;
    this.C = c;
}
Triangle.prototype = new Polygon(3);
Triangle.prototype.getAreas = function () {
    //海伦公式求面积
    var hf = (this.A + this.B + this.C) / 2;
    var res = Math.sqrt(hf * (hf - this.A) * (hf - this.B) * (hf - this.C));
    return res;
}

var t = new Triangle(6, 8, 10);
console.log(t.getAreas());

r.arr.push(1);
r.name = 'first';
r.model.newProp = '新建属性';

//实例化一个新的矩形，演示原型继承的不足之处
var r2 = new Rectangle(1, 2);
r2.arr.push(2);
r2.name = 'second';

console.log(r.arr);//(2) [1, 2]
console.log(r2.arr);//(2) [1, 2]
console.log(r.name);//first
console.log(r2.name);//second
console.log(r.model);//{newProp: "新建属性"}
console.log(r2.model);//{newProp: "新建属性"}
```

### 组合继承
综合上面两种继承方式，指就是原型链和借用构造函数的技术组合到一起。

```js
//多边形类
var Polygon = function (side) {
    //边数
    this.side = side;
    //计算面积
    Polygon.prototype.getAreas = function () {
        return 0;
    }

    /*原型继承的不足之处
    实例属性中的数组和对象并不会继承，而是共享了一个内存，在多个实例修改属性时会造成冲突
    */
    this.model = {};
    this.arr = [];
    this.name = '';
};

//矩形
var Rectangle = function (width, height) {
    Polygon.call(this, 4);
    this.width = width;
    this.height = height;
};
Rectangle.prototype = new Polygon(4);
Rectangle.prototype.getAreas = function () {
    return this.width * this.height;
}

var r = new Rectangle(3, 4);
console.log(r.getAreas());

r.arr.push(1);
r.name = 'first';
r.model.newProp = '新建属性';

//实例化一个新的矩形
var r2 = new Rectangle(1, 2);
r2.arr.push(2);
r2.name = 'second';

console.log(r.arr); //(2) [1, 2]
console.log(r2.arr); //(2) [1, 2]
console.log(r.name); //first
console.log(r2.name); //second
console.log(r.model); //{newProp: "新建属性"}
console.log(r2.model); //{newProp: "新建属性"}
```

组合继承避免了原型链和借用构造函数的缺点，融合了它们的优点，成为JavaScript中最常用的继承方式。而且instanceof和isPrototypeOf()也能够用于识别基于组合继承创建的对象。

## 作用域
### 作用域链
JavaScript需要查询一个变量x时，首先会查找作用域链的第一个对象，如果以第一个对象没有定义x变量，JavaScript会继续查找有没有定义x变量，如果第二个对象没有定义则会继续查找，以此类推。

```js
//等价于window.num
var num = 1;

function outer() {
    var num = 2;

    function inner() {
        var num = 3;
        console.log(num);
    }
    inner();
}
outer();
```

上述例子中，实际查找过程为：inner->outer->window

### 没有块级作用域
在函数内部，变量是全局的
```js
function test() {
    for (var i = 0; i < 10; i++) {}
    console.log(i);
}
test();//10
```

### 未使用var的声明
```js
function sayHi() {
    var name = 'jack';
}

function sayHello() {
    zhName = 'lucy';
}

sayHi();
sayHello();
console.log(zhName);
console.log(name);
```
观察以上代码，仅zhName可以打印，没有显式的使用var关键字，即经过sayHello()方法的调用后，创建了全局变量zhName，相当于window.zhName。

未使用var关键字定义的变量都是全局变量，这种方式会造成变量污染，容易造成冲突。

## 闭包
首先看懂这个demo，返回的并不是一个结果值，而是一个函数
```js
function test(name) {
    return function (age) {
        console.log('hi,' + name + ' is ' + age);
    }
}
test('jack')(18);
```

如何操作一个函数的内部变量？

```js
function test() {
    var name = 'jack';
}
test();

//如果读取函数test内部变量name
//console.log(test.name?);
```

返回函数本身以访问内部变量：

```js
function test() {
    var name = 'jack';
    //getName和setName对局部变量name依赖，会一直在内存中占用,test()执行完并不会立即回收局部变量name
    return {
        getName: function () {
            return name;
        },
        setName: function (val) {
            name = val;
        }
    };
}
var f = test();

//如果读取函数test内部变量name
console.log(f.getName());
f.setName('lucy');
console.log(f.getName());
```

闭包可以用在许多地方。它的最大用处有两个，一个是前面提到的可以读取函数内部的变量，另一个就是让这些变量的值始终保持在内存中。

```js
var arr = [];

function foo() {
    for (var i = 0; i < 4; i++) {
        arr[i] = function () {
            console.log(i);
        }
    }
}
foo();
arr[0]();//4
arr[1]();//4
arr[2]();//4
arr[3]();//4
```

使用匿名函数的立即执行，把内部函数写在自触发函数中从而避免受闭包影响。
```js
var arr = [];

function foo() {
    for (var i = 0; i < 4; i++) {
        //立即执行的匿名函数
        arr[i] = (function (cur) {
            return function () {
                console.log(cur);
            }
        })(i);
    }
}
foo();
arr[0]();//0
arr[1]();//1
arr[2]();//2
arr[3]();//3
```

## this
```js
//全局范围 this->window
console.log(this);

//函数的直接调用 this->window
function foo() {
    console.log(this);
}
foo();

//对象方法的调用，指向当前的对象
var obj = {
    test: function () {
        console.log(this);
    }
};
obj.test();

//构造函数，函数内部的this指向新创建的实例
function Student() {
    this.name = '';
    this.test = function () {
        console.log(this);
    }
}
var stu = new Student();
stu.test();

```