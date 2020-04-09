<!-- TOC -->

- [Webpack](#webpack)
    - [安装](#安装)
        - [NPM准备](#npm准备)
        - [npm install](#npm-install)
        - [安装webpack](#安装webpack)
        - [基本安装过程](#基本安装过程)
    - [开始](#开始)
    - [配置](#配置)
        - [核心概念](#核心概念)
            - [入口起点](#入口起点)
            - [输出](#输出)
            - [loader](#loader)
            - [插件](#插件)
        - [开始配置](#开始配置)
        - [NPM脚本](#npm脚本)
    - [管理资源](#管理资源)
        - [加载CSS](#加载css)

<!-- /TOC -->


<a id="markdown-webpack" name="webpack"></a>
# Webpack
可以做的事情：
* 代码转换（ES6、Less、Sass）
* 文件优化（压缩、混淆、合并）
* 代码分隔（公共部分）
* 模块合并
* 自动刷新
* 代码校验
* 自动发布

前置知识点：
* Node.js 基础
* npm 使用
* ES6 基础

<a id="markdown-安装" name="安装"></a>
## 安装

<a id="markdown-npm准备" name="npm准备"></a>
### NPM准备
首先安装Node.js，

首先需要对文件执行npm初始化项目：

```node
npm init
```

使用 npm init 指令创建项目描述文件 package.json。

package.json 文件里记录项目的描述信息：项目作者、项目描述、项目依赖哪些包、插件配置信息等等数不清的好处。

* name 项目名称
* version 项目的版本号
* description 项目的描述信息
* entry point 项目的入口文件
* test command 项目启动时脚本命令
* git repository 如果你有 Git 地址，可以将这个项目放到你的 Git 仓库里
* keywords 关键词
* author 作者叫啥
* license 项目要发行的时候需要的证书，平时玩玩忽略它

<a id="markdown-npm-install" name="npm-install"></a>
### npm install

npm install moduleNames：安装Node模块

安装完毕后会产生一个 `node_modules` 目录，其目录下就是安装的各个node模块。

node的安装分为全局模式和本地模式。

一般情况下会以本地模式运行，包会被安装到和你的应用程序代码的本地 `node_modules` 目录下。

在全局模式下，Node包会被安装到Node的安装目录下的 `node_modules` 下。

```bash
# 全局安装
npm install moduleName -g
```

`-S` 或 `--save` 安装包信息将加入到 dependencies（生产阶段的依赖）

`-D` 或 `--save-dev` 安装包信息将加入到 devDependencies（开发阶段的依赖），所以开发阶段一般使用它

```bash
# 当前项目中安装
npm install webpack webpack-cli --save-dev
# 等同于
npm install webpack webpack-cli -D
```

<a id="markdown-安装webpack" name="安装webpack"></a>
### 安装webpack

要安装最新版本或特定版本，请运行以下命令之一：
```bash
npm install --save-dev webpack
npm install --save-dev webpack@<version>
```

如果你使用 webpack 4+ 版本，你还需要安装 CLI。（推荐！！！）
```bash
npm install webpack webpack-cli --save-dev
```

对于大多数项目，我们建议本地安装。

<a id="markdown-基本安装过程" name="基本安装过程"></a>
### 基本安装过程

首先我们创建一个目录，初始化 npm，

然后在本地安装 webpack，接着安装 webpack-cli（此工具用于在命令行中运行 webpack）

```bash
mkdir webpack-demo && cd webpack-demo
npm init -y
npm install webpack webpack-cli --save-dev
npm install lodash --save-dev # Lodash是一个一致性、模块化、高性能的 JavaScript 实用工具库。
```

关于`--save-dev`，当你为你的模块安装一个依赖模块时，正常情况下你得先安装他们（在模块根目录下npm install module-name），

然后连同版本号手动将他们添加到模块配置文件package.json中的依赖里（dependencies）。

--save和--save-dev可以省掉你手动修改package.json文件的步骤。

```bash
npm install moduleName # 安装模块到项目目录下
npm install moduleName --save # --save 的意思是将模块安装到项目目录下，并在package文件的dependencies节点写入依赖。
npm install moduleName --save-dev # --save-dev 的意思是将模块安装到项目目录下，并在package文件的devDependencies节点写入依赖。
```

<a id="markdown-开始" name="开始"></a>
## 开始

在项目根路径下创建【src】文件夹，并在文件夹内新增【index.js】文件：
```js
// 导入lodash库
import _ from 'lodash';

function component() {
  var element = document.createElement('div');

  // Lodash 通过import方式导入
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
```

在项目根路径下创建【dist】文件夹，用于存放输出文件，新增【index.html】文件：
```html
<!doctype html>
<html>

<head>
    <title>起步</title>
</head>

<body>
    <script src="main.js"></script>
</body>

</html>
```

在命令窗口中执行 `npx webpack`，会将我们的脚本作为入口起点，然后 输出 为 main.js，项目结构图如下：

![](../assets/webpack/webpack-npx1.png)

在Chrome浏览器中打开 index.html，如果一切访问都正常，你应该能看到以下文本：'Hello webpack'。（Edge中暂时不行）

**模块**

ES2015 中的 import 和 export 语句已经被标准化。

虽然大多数浏览器还无法支持它们，但是 webpack 却能够提供开箱即用般的支持。

事实上，webpack 在幕后会将代码“转译”，以便旧版本浏览器可以执行。

如果你检查自动生成的 【dist/main.js】文件，你可以看到 webpack 具体如何实现。

<a id="markdown-配置" name="配置"></a>
## 配置
从 webpack v4.0.0 开始，可以不用引入一个配置文件。然而大多数项目会需要很复杂的设置，

这就是为什么 webpack 仍然要支持 配置文件。

当 webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，

其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle。

<a id="markdown-核心概念" name="核心概念"></a>
### 核心概念

在开始前你需要先理解四个核心概念：

* 入口(entry)
* 输出(output)
* loader
* 插件(plugins)

<a id="markdown-入口起点" name="入口起点"></a>
#### 入口起点
入口起点(entry point)指示 webpack 应该使用哪个模块，来作为构建其内部依赖图的开始。

进入入口起点后，webpack 会找出有哪些模块和库是入口起点（直接和间接）依赖的。

可以通过在 webpack 配置中配置 entry 属性，来指定一个入口起点（或多个入口起点）。默认值为 ./src。

<a id="markdown-输出" name="输出"></a>
#### 输出
output 属性告诉 webpack 在哪里输出它所创建的 bundles，以及如何命名这些文件，默认值为 ./dist。

我们通过 output.filename 和 output.path 属性，来告诉 webpack bundle 的名称，以及我们想要 bundle 生成(emit)到哪里。

<a id="markdown-loader" name="loader"></a>
#### loader
loader 让 webpack 能够去处理那些非 JavaScript 文件（webpack 自身只理解 JavaScript）。

在更高层面，在 webpack 的配置中 loader 有两个目标：
1. test 属性，用于标识出应该被对应的 loader 进行转换的某个或某些文件。
2. use 属性，表示进行转换时，应该使用哪个 loader。

```js
const path = require('path');

const config = {
  output: {
    filename: 'my-first-webpack.bundle.js'
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  }
};

module.exports = config;
```

在 webpack 配置中定义 loader 时，要定义在 module.rules 中，而不是 rules。

<a id="markdown-插件" name="插件"></a>
#### 插件

loader 被用于转换某些类型的模块，而插件则可以用于执行范围更广的任务。

想要使用一个插件，你只需要 require() 它，然后把它添加到 plugins 数组中。

```js
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const webpack = require('webpack'); // 用于访问内置插件

const config = {
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
};

module.exports = config;
```

webpack 提供许多开箱可用的插件！插件列表：

> https://www.webpackjs.com/plugins/

<a id="markdown-开始配置" name="开始配置"></a>
### 开始配置

这比在终端(terminal)中手动输入大量命令要高效的多，所以让我们创建一个取代以上使用 CLI 选项方式的配置文件：

根目录下新增【webpack.config.js】配置文件，内容如下：

```js
// Node内置的path模块，用于路径相关操作
const path = require('path');

// 注意是 exports ，带s！！！
module.exports = {
    // 入口
    entry: {
        app: './src/index.js'
    },
    output: {
        // 打包输出的文件名
        filename: 'bundle.js',
        // 打包输出的绝对路径，__dirname 系统变量，当前根路径，path.resolve 相对路径变绝对路径
        path: path.resolve(__dirname, 'dist')
    },
    mode:'development', // 开发模式，不会混淆压缩打包代码
}
```

现在，让我们通过新配置文件再次执行构建：

`npx webpack --config webpack.config.js`

<a id="markdown-npm脚本" name="npm脚本"></a>
### NPM脚本
考虑到用 CLI 这种方式来运行本地的 webpack 不是特别方便，我们可以设置一个快捷方式。

在 package.json 添加一个 npm 脚本【package.json】：
```js
{
  "name": "webpack-demo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "lodash": "^4.17.15",
    "webpack": "^4.41.5",
    "webpack-cli": "^3.3.10"
  }
}
```

`"build": "webpack"`，可以使用 npm run build 命令，来替代我们之前使用的 npx 命令。

使用`"build": "webpack --config webpack.config.js"`进行指定配置的打包命令。


<a id="markdown-管理资源" name="管理资源"></a>
## 管理资源

<a id="markdown-加载css" name="加载css"></a>
### 加载CSS
为了从 JavaScript 模块中 import 一个 CSS 文件，你需要在 module 配置中 安装并添加 style-loader 和 css-loader：

```bash
npm install --save-dev style-loader css-loader
```

修改【webpack.config.js】配置文件，增加对css的处理：

```js
// Node内置的path模块，用于路径相关操作
const path = require('path');

// 注意是 exports ，带s！！！
module.exports = {
    // 入口
    entry: {
        app: './src/index.js'
    },
    output: {
        // 打包输出的文件名
        filename: 'main.js',
        // 打包输出的绝对路径，__dirname 系统变量，当前根路径，path.resolve 相对路径变绝对路径
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development', // 开发模式，不会混淆压缩打包代码
    // 
    module: {
        rules: [
            {
                test: /\.css&/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}
```

webpack 根据正则表达式，来确定应该查找哪些文件，并将其提供给指定的 loader。

在这种情况下，以 .css 结尾的全部文件，都将被提供给 style-loader 和 css-loader。

新增样式文件【src/style.css】：
```css
.hello {
    color: red;
}
```

修改【src/index.js】文件：



---

参考引用：

[Webpack中文](https://www.webpackjs.com/)



