# Javascript
## 什么是Javascript？
面向Web的编程语言，所有的现代浏览器包含pc端、移动端均有Javascript解释器。

现代浏览器已经做到编译js，直接生成机器代码

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

更多了解可以关注 阿里大神阮一峰的博客：
> http://javascript.ruanyifeng.com/