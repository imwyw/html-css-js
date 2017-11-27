<!-- TOC -->

- [Basic](#basic)
    - [表达式{{}}](#表达式)
    - [指令](#指令)
        - [数据绑定ng-app、ng-init、ng-model、ng-bind](#数据绑定ng-appng-initng-modelng-bind)
        - [重复元素ng-repeat](#重复元素ng-repeat)
    - [ng-model模型](#ng-model模型)
    - [Scope作用域](#scope作用域)
        - [作用范围](#作用范围)
    - [控制器](#控制器)
    - [过滤器](#过滤器)
    - [表单验证](#表单验证)

<!-- /TOC -->
<a id="markdown-basic" name="basic"></a>
# Basic

<a id="markdown-表达式" name="表达式"></a>
## 表达式{{}}
AngularJS 表达式写在双大括号内：{{ expression }}。

AngularJS 表达式 很像 JavaScript 表达式：它们可以包含文字、运算符和变量。

```html
<div ng-app="" ng-init="quantity=1;cost=5">
    <!-- {{}}和ng-bind 都可以显示结果值-->
    <p>总价： {{ quantity * cost }}</p>
    <p><span ng-bind="quantity*cost"></span></p>
</div>
```
但需要注意的是：
1. AngularJS 表达式可以写在 HTML 中。
2. AngularJS 表达式不支持条件判断，循环及异常。
3. AngularJS 表达式支持过滤器。

<a id="markdown-指令" name="指令"></a>
## 指令

<a id="markdown-数据绑定ng-appng-initng-modelng-bind" name="数据绑定ng-appng-initng-modelng-bind"></a>
### 数据绑定ng-app、ng-init、ng-model、ng-bind

1. ng-app=" "  定义angularJS的使用范围；
2. ng-init="变量=值;变量='值'"  初始化变量的值，有多个变量时，中间用分号隔开；
3. ng-model="变量"  定义变量名；
4. ng-bind="变量"  绑定变量名，获取该变量的数据。这里的变量就是第3条的变量名。但是一般都用双重花括号来获取变量的值，比如：{{变量}}。

```html
<!-- 定义ng变量firstName，初始值为John -->
<div ng-app ng-init="firstName='John'">
    <p>在输入框中尝试输入：</p>
    <p>姓名：<input type="text" ng-model="firstName"></p>
    <p>你输入的为： {{ firstName }} </p>
    <input type="text" value="{{firstName}}" disabled="disabled" />
</div>
```
ng-app 指令告诉 AngularJS，`<div>` 元素是 AngularJS 应用程序 的"所有者"。

上面实例中的 {{ firstName }} 表达式是一个 AngularJS 数据绑定表达式。AngularJS 中的数据绑定，同步了 AngularJS 表达式与 AngularJS 数据。{{ firstName }} 是通过 ng-model="firstName" 进行同步。

```html
<!--定义了两个初始值，数量quantity为1，单价price为5-->
<div ng-app="" ng-init="quantity=1;price=5">
    <h2>价格计算器</h2>
    <!--将两个变量绑定到两个文本框-->
    数量： <input type="number" ng-model="quantity">
    价格： <input type="number" ng-model="price">
    <p><b>总价：</b> {{ quantity * price }}</p>
</div>
```

PS:使用 ng-init 不是很常见。通常我们会使用控制器来代替它。

<a id="markdown-重复元素ng-repeat" name="重复元素ng-repeat"></a>
### 重复元素ng-repeat

```html
<div ng-app ng-init="names=['Jani','Hege','Kai']">
    <p>使用 ng-repeat 来循环数组</p>
    <ul>
        <li ng-repeat="x in names">
            {{ x }}
        </li>
    </ul>
</div>
```

```html
<div ng-app ng-init="names=[{name:'Jani',country:'Norway'},{name:'Hege',country:'Sweden'},{name:'Kai',country:'Denmark'}]">
    <p>循环对象：</p>
    <ul>
        <li ng-repeat="x in names">
            {{ x.name + ', ' + x.country }}
        </li>
    </ul>
</div>
```

<a id="markdown-ng-model模型" name="ng-model模型"></a>
## ng-model模型
ng-model 指令用于绑定应用程序数据到 HTML 控制器(input, select, textarea)的值。

```html
<!-- 定义了myApp模块，在加载时会先检测是否有名称为myApp的模块，如果没有则会报错 -->
<div ng-app="myApp" ng-controller="myCtrl">
    名字: <input ng-model="name">
</div>

<script>
    //定义一个模块，名称是myApp，和上面div的ng-app属性值对应
    var app = angular.module('myApp', []);

    //定义一个控制器模块，控制器的名称为myCtrl
    app.controller('myCtrl', function ($scope) {
        $scope.name = "John Doe";
    });
</script>
```

<a id="markdown-scope作用域" name="scope作用域"></a>
## Scope作用域
什么是Scope？ [scope](http://code.angularjs.org/1.0.2/docs/api/ng.$rootScope.Scope) 是一个指向应用model的object。

Scope(作用域) 是应用在 HTML (视图) 和 JavaScript (控制器)之间的纽带。
Scope 是一个对象，有可用的方法和属性。
Scope 可应用在视图和控制器上。

当你在 AngularJS 创建控制器时，你可以将 $scope 对象当作一个参数传递:

当在控制器中添加 $scope 对象时，视图 (HTML) 可以获取了这些属性。
视图中，你不需要添加 $scope 前缀, 只需要添加属性名即可，如： {{carname}}。

```html
<div ng-app="myApp" ng-controller="myCtrl">
    <input ng-model="name">
    <h1>{{greeting}}</h1>
    <button ng-click='sayHello()'>点我</button>
</div>

<script>
    var app = angular.module('myApp', []);
    app.controller('myCtrl', function ($scope) {
        $scope.name = "Runoob";
        $scope.sayHello = function () {
            $scope.greeting = 'Hello ' + $scope.name + '!';
        };
    });
</script>
```

<a id="markdown-作用范围" name="作用范围"></a>
### 作用范围
$rootScope 全局对象的属性可在所有子作用域中访问，子作用域互相无法访问对方的私有变量，这一点与js的函数作用域完全一致。
```html
<p>
    $rootScope 全局对象的属性可在所有子作用域中访问，子作用域互相无法访问对方的私有变量，这一点与js的函数作用域完全一致。
</p>
<form ng-app='myApp'>
    <div ng-controller="myCtrl1">
        {{name +' '+ globalName}}
    </div>
    <div ng-controller="myCtrl2">
        {{name +' '+ globalName}}
    </div>
</form>

<script>
    var app = angular.module('myApp', []);
    // 两个控制器
    app.controller('myCtrl1', ['$scope', '$rootScope', myCtrl1]);
    app.controller('myCtrl2', ['$scope', '$rootScope', myCtrl2]);

    function myCtrl1($scope, $rootScope) {
        $scope.name = 'jack';
        $rootScope.globalName = 'root';
    }

    function myCtrl2($scope, $rootScope) {
        $scope.name = 'white';
        $rootScope.globalName = 'global';
    }
</script>
```

<a id="markdown-控制器" name="控制器"></a>
## 控制器
AngularJS 应用程序被控制器控制。ng-controller 指令定义了应用程序控制器。控制器是 JavaScript 对象，由标准的 JavaScript 对象的构造函数 创建。

```html
<div ng-app="myApp" ng-controller="myCtrl">

    名: <input type="text" ng-model="firstName"><br>
    姓: <input type="text" ng-model="lastName"><br>
    <br>
    姓名: {{firstName + " " + lastName}}

</div>

<script>
    var app = angular.module('myApp', []);
    app.controller('myCtrl', function ($scope) {
        $scope.firstName = "John";
        $scope.lastName = "Doe";
    });
</script>
```

<a id="markdown-过滤器" name="过滤器"></a>
## 过滤器
过滤器可以使用一个管道字符（|）添加到表达式和指令中。AngularJS 过滤器可用于转换数据：

过滤器 | 描述
----|---
currency | 格式化数字为货币格式。
filter | 从数组项中选择一个子集。
lowercase | 格式化字符串为小写。
orderBy | 根据某个表达式排列数组。
uppercase | 格式化字符串为大写。

```html
<div ng-app="myApp" ng-controller="myAction">
    <h4>uppercase，lowercase 大小写转换</h4>
    <p>
        {{'small words' | uppercase}}
        <br />
        {{'THIS IS NEW SHIT!' | lowercase}}
    </p>
    <h4>date 格式化</h4>
    <p>
        {{1511797134424 | date:'yyyy-MM-dd HH:mm:ss'}}
        <br />
        {{ now.valueOf() | date:'yyyy-MM-dd HH:mm:ss'}}
    </p>
    <h4>number 格式化（保留小数）</h4>
    <p>
        {{149016.1945000 | number:2}}
    </p>
    <h4>currency货币格式化</h4>
    <p>
        {{ 250 | currency }}
        <br />
        {{ 250 | currency:"RMB ￥ " }}
    </p>
    <h4>filter查找</h4>
    <p>
        输入过滤器可以通过一个管道字符（|）和一个过滤器添加到指令中，该过滤器后跟一个冒号和一个模型名称。
        filter 过滤器从数组中选择一个子集<br />
        {{ arrNames | filter:{'name':'iphone'} }}
    </p>
    <h4>limitTo 截取</h4>
    <p>
        {{"1234567890" | limitTo :6}} <!--从前面开始截取6位-->
        <br />
        {{"1234567890" | limitTo:-4}}  <!--从后面开始截取4位-->
    </p>
    <h4>orderBy 排序</h4>
    <p>
        降序：<br />
        {{ arrNames | orderBy:'age':true }}
        <br />升序<br />
        {{ arrNames | orderBy:'age' }}
    </p>
</div>

<script>
    var myApp = angular.module('myApp', []);
    myApp.controller('myAction', function ($scope) {
        $scope.now = new Date();
        $scope.arrNames = [
            { "age": 20, "id": 10, "name": "iphone" },
            { "age": 12, "id": 11, "name": "sunm xing" },
            { "age": 44, "id": 12, "name": "test abc" },
        ];

    });
</script>
```

<a id="markdown-表单验证" name="表单验证"></a>
## 表单验证

```html

```


参考引用：

[菜鸟教程](http://www.runoob.com/angularjs/angularjs-directives.html)
