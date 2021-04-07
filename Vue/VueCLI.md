<!-- TOC -->

- [Vue CLI](#vue-cli)
  - [Webpack环境初体验](#webpack环境初体验)
    - [项目初始化](#项目初始化)
    - [命令打包](#命令打包)
    - [module 模块使用](#module-模块使用)
    - [build脚本](#build脚本)
    - [webpack.config](#webpackconfig)
  - [VueCLI环境](#vuecli环境)
    - [安装](#安装)
    - [vue-ui](#vue-ui)
    - [vue-cli-service](#vue-cli-service)
    - [nginx部署](#nginx部署)

<!-- /TOC -->

<a id="markdown-vue-cli" name="vue-cli"></a>
# Vue CLI

命令行接口(Command Line Interface - CLI)， 用来对构建(build)进行配置和交互。 

<a id="markdown-webpack环境初体验" name="webpack环境初体验"></a>
## Webpack环境初体验

<a id="markdown-项目初始化" name="项目初始化"></a>
### 项目初始化

```bash
# 默认配置项目
npm init -y
# 安装 Webpack 
npm i webpack -D
# 安装 vue，vue-router，axios 组件
npm i vue vue-router axios -D
```

在当前项目环境中使用 `npx webpack` ，如果是全局安装直接使用 `webpack` 命令即可。

<a id="markdown-命令打包" name="命令打包"></a>
### 命令打包
在项目根路径下创建 【index.html】 静态文件，核心代码如下：

```html
<body>
    <div id="app">
        <ul>
            <li v-for="(item,index) in students" :key="item.name">
                {{item.name}}
            </li>
        </ul>
    </div>
    <script src="./bundle.js"></script>
</body>
```

上面引入的脚本 【bundle.js】 文件现在还没有，我们需要通过打包的方式生成这个文件。

vue对象相关的操作则需要在另一个入口js文件中完成，在项目根路径下新建 【main.js】 文件，代码如下：

```js
// 模块引入的用法
import Vue from './node_modules/vue/dist/vue.js'

var vm = new Vue({
    el: '#app',
    data() {
        return {
            students: [
                { name: 'jack', age: 12 },
                { name: 'lucy', age: 22 },
                { name: 'tony', age: 32 },
            ]
        }
    }
})
```

项目结构如下所示：

![](../assets/vue/sample_webpack_结构.png)

在cmd窗口中进行打包，执行脚本： `npx webpack main.js -o bundle.js`

```
D:\Codes\webpack\04.VueWebpack>npx webpack main.js -o bundle.js
Hash: 736d093d2c4623d69d57
Version: webpack 4.42.1
Time: 3374ms
Built at: 2020-04-01 18:05:57
    Asset     Size  Chunks             Chunk Names
bundle.js  119 KiB       0  [emitted]  main
Entrypoint main = bundle.js
[0] (webpack)/buildin/global.js 472 bytes {0} [built]
[2] ./main.js 374 bytes {0} [built]
[3] ../03.BlogDemo/data.js 114 bytes {0} [built]
    + 4 hidden modules
```

【main.js】表示入口文件， `-o` 命令表示不使用配置文件进行打包，【bundle.js】为打包的输出文件。

打开【index.html】查看效果，调试工具中可以查看【bundle.js】的内容。

参考：[命令行接口](https://webpack.docschina.org/api/cli/#%E6%A8%A1%E5%9D%97%E9%85%8D%E7%BD%AE)

<a id="markdown-module-模块使用" name="module-模块使用"></a>
### module 模块使用
参见 ES6 章节 [Module](../JS/ES6.md#module模块) 部分描述

利用模块化思想，将【main.js】文件中 `students` 数组转移至单独的JS文件中。

项目根路径下新建文件 【test_data.js】，内容如下：

```js
var students = [
    { name: 'jack', age: 12 },
    { name: 'lucy', age: 22 },
    { name: 'tony', age: 32 },
];

// 导出变量 students，可以直接使用 import xxx from './test_data.js' 命令导入
export default students;
```

修改【main.js】文件内容如下：

```js
// 模块引入的用法
import Vue from './node_modules/vue/dist/vue.js'

// 使用 import 命令导入
import students from './test_data'

var vm = new Vue({
    el: '#app',
    data() {
        return {
            // 修改数据源来自 其他 js 文件
            students
        }
    }
})
```

重新执行打包命令 `npx webpack main.js -o bundle.js`

以上，简单实现了模块化应用及打包的操作。

<a id="markdown-build脚本" name="build脚本"></a>
### build脚本
考虑到用 CLI 这种方式来运行本地的 webpack 不是特别方便，我们可以设置一个快捷方式。

在【package.json】配置中新增 `scripts` 配置 `"build":"npx webpack main.js -o bundle.js"` ，如下：

```js
{
  "name": "04.VueWebpack",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build":"npx webpack main.js -o bundle.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "axios": "^0.19.2",
    "vue": "^2.6.11",
    "vue-router": "^3.1.6",
    "webpack": "^4.42.1",
    "webpack-cli": "^3.3.11"
  }
}
```

现在，我们在cmd命令窗口中可以使用命令 `npm run build` 来执行上面的 `build` 配置。

注意，此处的 `build` 名称可以修改，和 `npm run build` 保持一致即可。

<a id="markdown-webpackconfig" name="webpackconfig"></a>
### webpack.config

在实际应用中，关于打包会有很多配置，我们创建一个默认的配置文件 【webpack.config.js】，内容如下：

```js
// 可以理解成 webpack 实现的 export 模块
module.exports = {
    // 入口文件
    entry: './main.js',
    output: {
        // 默认在 根路径下【dist】文件夹为基准
        filename: './bundle.js'
    },
    // 自动监听文件变化，并打包 bundle.js
    watch: true,
}
```

并修改配置文件【package.json】中的【scripts/build】配置: `"build": "webpack"` 

等同于配置： `npx webpack --config webpack.config.js` ，意思是应用配置文件进行打包。

<a id="markdown-vuecli环境" name="vuecli环境"></a>
## VueCLI环境

介绍见官网：

> https://cli.vuejs.org/zh/guide/

首先需要进行全局安装，否则后面初始化项目步骤会有问题。

```bash
npm i -g @vue/cli
```

<a id="markdown-安装" name="安装"></a>
### 安装
 `VueCLI` 工具准备和 `vue-init` 命令桥接工具

```bash
# 全局安装 vue cli 脚手架
npm i -g @vue/cli -D

# 查看版本，显示版本号：@vue/cli 4.x.x
vue --version

# 为了兼容 低版本的vue init 功能，全局安装一个桥接工具
npm i -g @vue/cli-init

```

使用 `VueCLI` 进行项目创建，此处用的是低版本的初始化方式。

在上一级目录中执行以下命令，会以 `webpack` 作为模板生成一个【vuecli_demo】名称的项目。

```bash
# 初始化项目
vue init webpack vuecli_demo
```

关于项目的配置如下：

```bash
? Project name vuecli_demo
? Project description A Vue.js project
? Author
? Vue build standalone      
? Install vue-router? Yes
? Use ESLint to lint your code? No
? Set up unit tests No
? Setup e2e tests with Nightwatch? No
? Should we run `npm install` for you after the project has been created? (recommended) npm

   vue-cli · Generated "vuecli_demo".


# Installing project dependencies ...
# ========================
```

等待安装完成即可。

此处有坑，项目名称【Project name】，可以自己指定，也可直接回车，但必须小写。

按照括号中默认名字（注意这里的名字不能有大写字母，如果有会报错Sorry, name can no longer contain capital letters）

【VueCLI】初始化项目的目录结构如下所示：

目录/文件 | 说明
------|---
build | 项目构建(webpack)相关代码
config | 配置目录，包括端口号等。我们初学可以使用默认的。
node_modules | npm 加载的项目依赖模块
static | 静态资源目录，如图片、字体等。
test | 初始测试目录，可删除
.xxxx文件 | 这些是一些配置文件，包括语法配置，git配置等。
index.html | 首页入口文件，你可以添加一些 meta 信息或统计代码啥的。
package.json | 项目配置文件。
README.md | 项目的说明文档，markdown 格式

其中 src 是开发代码部分：
* assets: 放置一些图片，如logo等。
* components: 目录里面放了一个组件文件，可以不用。
* App.vue: 项目入口文件，我们也可以直接将组件写这里，而不使用 components 目录。
* main.js: 项目的核心文件。

在本地主机上启动web服务，默认端口号是8080，在【config/index.js】的 `port` 配置可以修改端口号

```bash
npm run dev
```

在浏览器中即可通过 `http://localhost:8080` 访问默认主页

<a id="markdown-vue-ui" name="vue-ui"></a>
### vue-ui
你也可以通过 vue ui 命令以图形化界面创建和管理项目：

```
vue ui
```

<a id="markdown-vue-cli-service" name="vue-cli-service"></a>
### vue-cli-service

```
# 构建
npm vue-cli-service build
# 热加载应用
npm vue-cli-service serve
# 审查
npm vue-cli-service inspect
```

<a id="markdown-nginx部署" name="nginx部署"></a>
### nginx部署

`npm run build`生成打包文件，将dist拷贝至服务器：【/opt/kg-ui/】目录

修改【/etc/nginx/nginx.conf】，在http节点中新增配置如下：

```
http  {
    server {
      listen  9000; # 配置端口
      server_name  localhost; # 配置访问地址
      location / {
        root  /opt/kg-ui/dist;
        index  index.html  index.html;
        charset  utf-8;
      }
    }
}
```

执行nginx命令重新加载配置文件

```shell
nginx -s reload
```




