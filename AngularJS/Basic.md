<!-- TOC -->

- [Basic](#basic)
    - [表达式{{}}](#表达式)
    - [指令](#指令)
        - [数据绑定ng-app、ng-init、ng-model、ng-bind](#数据绑定ng-appng-initng-modelng-bind)
        - [重复元素ng-repeat](#重复元素ng-repeat)
    - [ng-model模型](#ng-model模型)
    - [Scope作用域](#scope作用域)
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
Scope(作用域) 是应用在 HTML (视图) 和 JavaScript (控制器)之间的纽带。
Scope 是一个对象，有可用的方法和属性。
Scope 可应用在视图和控制器上。

当你在 AngularJS 创建控制器时，你可以将 $scope 对象当作一个参数传递:

当在控制器中添加 $scope 对象时，视图 (HTML) 可以获取了这些属性。
视图中，你不需要添加 $scope 前缀, 只需要添加属性名即可，如： {{carname}}。

<a id="markdown-表单验证" name="表单验证"></a>
## 表单验证

```html

```


参考引用：

[菜鸟教程](http://www.runoob.com/angularjs/angularjs-directives.html)
