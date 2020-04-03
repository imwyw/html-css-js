<!-- TOC -->

- [Vue CLI](#vue-cli)
    - [Webpack环境初体验](#webpack环境初体验)
        - [项目初始化](#项目初始化)
        - [命令打包](#命令打包)
        - [module 模块使用](#module-模块使用)
        - [build脚本](#build脚本)
        - [webpack.config](#webpackconfig)

<!-- /TOC -->

<a id="markdown-vue-cli" name="vue-cli"></a>
# Vue CLI

命令行接口(Command Line Interface - CLI)， 用来对构建(build)进行配置和交互。 

<a id="markdown-webpack环境初体验" name="webpack环境初体验"></a>
## Webpack环境初体验

<a id="markdown-项目初始化" name="项目初始化"></a>
### 项目初始化

```shell
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










