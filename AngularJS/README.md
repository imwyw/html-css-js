<!-- TOC -->

- [AngularJS](#angularjs)
    - [hello world](#hello-world)

<!-- /TOC -->

<a id="markdown-angularjs" name="angularjs"></a>
# AngularJS
AngularJS 是JavaScript的 一个框架。它是JavaScript 编写的一个库。是AngularJS为了克服HTML在构建应用上的不足而设计的。HTML是一门很好的为静态文本展示设计的声明式语言，但要构建WEB应用的话它就显得乏力了。 

- official site 
> https://angularjs.org/

- docs

> https://docs.angularjs.org/guide

> http://www.ngnice.com/

> http://www.angularjs.net.cn/tutorial/

> https://angular.cn/

- release
> https://github.com/angular/angular.js/releases

关于angularjs的特点：

1. 数据的双向绑定，这可能是其最激动人心的特性，view层的数据和model层的数据是双向绑定的，其中之一发生更改，另一方会随之变化，而不需要写任何代码；
2. 代码模块化，每个模块的代码独立且拥有自己的作用域，比如model，controller等；
3. 强大的directive，可以将很多功能封装成HTML的tag，属性或者注释等，这大大美化了HTML的结构，增强了可阅读性；
4. 依赖注入，将这种后端语言的设计模式赋予前端代码，这意味着前端的代码可以提高重用性和灵活性，未来的模式可能将大量操作放在客户端，服务端只提供数据来源和其它客户端无法完成的操作；
5. 测试驱动开发，使用angular开发的应用可以很容易地进行单元测试和端对端测试，这解决了传统的js代码难以测试和维护的缺陷。


<a id="markdown-hello-world" name="hello-world"></a>
## hello world
```
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>hello world</title>
    <script src="../Scripts/angular.min.js"></script>
</head>
<!-- ng-app不可缺少，标识angular处理解析的范围 -->
<body ng-app>
    <!-- 两个花括号中是js表达式，在此是一个字符串 -->
    Hello {{'world!!'}}
</body>
</html>
```

AngularJS主要考虑的是构建CRUD（增加Create、查询Retrieve、更新Update、删除Delete）应用。幸运的是，至少90%的WEB应用都是CRUD应用。

如果你要开发的是单页应用，AngularJS就是你的上上之选。Gmail、Google Docs、Twitter和Facebook这样的应用，都很能发挥AngularJS的长处。

但是像游戏开发之类对DOM进行大量操作、又或者单纯需要极高运行速度的应用，就不适合使用AngularJS了。
