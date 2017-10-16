<!-- TOC -->

- [Javascript](#javascript)
    - [什么是Javascript？](#什么是javascript)
    - [实验环境](#实验环境)

<!-- /TOC -->
# Javascript
## 什么是Javascript？
JavaScript 是世界上最流行的编程语言。

面向Web的编程语言，所有的现代浏览器包含pc端、移动端均有Javascript解释器。

现代浏览器已经做到编译js，直接生成机器代码

JavaScript的核心语法部分相当精简，只包括两个部分：基本的语法构造（比如操作符、控制结构、语句）和标准库（就是一系列具有各种功能的对象比如Array、Date、Math等）。除此之外，各种宿主环境提供额外的API（即只能在该环境使用的接口），以便JavaScript调用。以浏览器为例，它提供的额外API可以分成三大类。

- 浏览器控制类：操作浏览器
- DOM类：操作网页的各种元素
- Web类：实现互联网的各种功能

如果宿主环境是服务器，则会提供各种操作系统的API，比如文件操作API、网络通信API等等。这些你都可以在Node环境中找到。

## 实验环境
只要电脑上安装了 浏览器，我们就可以借助浏览器进行js代码的编写。

此处我们统一使用google chrome浏览器进行演示，操作方法：

1. 在chrome浏览器中，直接通过快捷键【F12】或者【Ctrl+Shift+I】调用"开发者工具"。
2. 在chrome浏览器中，页面上右键选择"检查"或者通过"菜单"-"更多工具"-"开发者工具"选项均可。

当然，最快最常用的是直接F12即可！

下面的示例代码可以粘贴到控制台窗口（Console）进行执行：
``` js
function sayHello(yourName) {
  console.log('Hello ' + yourName);
}

sayHello('薛之谦')
// Hello 薛之谦
```

参考引用：

[阮一峰 JavaScript 标准参考教程](http://javascript.ruanyifeng.com/)