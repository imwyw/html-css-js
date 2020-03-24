<!-- TOC -->

- [组件](#组件)
    - [全局组件](#全局组件)
        - [组件复用](#组件复用)
        - [组件Data](#组件data)
    - [局部组件](#局部组件)
    - [组件通信](#组件通信)
        - [组件的传值](#组件的传值)
        - [单个根元素](#单个根元素)

<!-- /TOC -->

<a id="markdown-组件" name="组件"></a>
# 组件

<a id="markdown-全局组件" name="全局组件"></a>
## 全局组件
组件是可复用的 Vue 实例，且带有一个名字。类似于bootstrap组件下拉框之类的

以下为一个 全局组件 的示例：

```html
<body>
    <div id="app">
        <button-counter></button-counter>
    </div>

    <script>
        // 组件的创建，需要在 创建vm对象前
        Vue.component('button-counter', {
            // data 必须是一个函数，返回对象
            data: function () {
                return {
                    count: 0
                }
            },
            template: `<button @click="count++">click me {{count}} times</button>`
        })
        var vm = new Vue({
            el: '#app',
        });
    </script>
</body>
```

在这个例子中 `<button-counter>` 是组件的名字。

我们可以在一个通过 new Vue 创建的 Vue 根实例中，把这个组件作为自定义元素来使用。

因为组件是可复用的 Vue 实例，所以它们与 new Vue 接收相同的选项，

例如 data、computed、watch、methods 以及生命周期钩子等。

仅有的例外是像 el 这样根实例特有的选项。

<a id="markdown-组件复用" name="组件复用"></a>
### 组件复用

```html
<div id="app">
  <button-counter></button-counter>
  <button-counter></button-counter>
  <button-counter></button-counter>
</div>
```

注意当点击按钮时，每个组件都会各自独立维护它的 count。

因为你每用一次组件，就会有一个它的新实例被创建。

<a id="markdown-组件data" name="组件data"></a>
### 组件Data

当我们定义这个 <button-counter> 组件时，你可能会发现它的 data 并不是像这样直接提供一个对象：

```js
data: {
  count: 0
}
```

取而代之的是，**一个组件的 data 选项必须是一个函数**，因此每个实例可以维护一份被返回对象的独立的拷贝：

```js
data: function () {
  return {
    count: 0
  }
}
```

<a id="markdown-局部组件" name="局部组件"></a>
## 局部组件

```html
<body>
    <div id="app">
        <button-counter></button-counter>
    </div>

    <script>
        var VBtnCount = {
            // data 必须是一个函数，返回对象
            data() {
                return {
                    count: 0
                };
            },
            template: '<button @click="count++">click me {{count}} times</button>'
        }

        var vm = new Vue({
            el: '#app',
            components: {
                'button-counter': VBtnCount
            }
        });
    </script>
</body>
```

<a id="markdown-组件通信" name="组件通信"></a>
## 组件通信

<a id="markdown-组件的传值" name="组件的传值"></a>
### 组件的传值

前面【计数按钮】的示例，作为组件的调用者，如何向组件传入数据展示呢？

Prop 是你可以在组件上注册的一些自定义 attribute。

当一个值传递给一个 prop attribute 的时候，它就变成了那个组件实例的一个属性。

```html
<body>
    <div id="app">
        <button-counter title="标题1" ></button-counter>
        <button-counter title="标题2" ></button-counter>
    </div>

    <script>
        // 组件的创建，需要在 创建vm对象前
        Vue.component('button-counter', {
            // data 必须是一个函数，返回对象
            data: function () {
                return {
                    count: 0
                }
            },
            props: ['title'],
            template: `
            <button @click="count++">click me {{count}} times，【{{title}}】</button>
            `
        })
        var vm = new Vue({
            el: '#app',
        });
    </script>
</body>
```

一个组件默认可以拥有任意数量的 prop，任何值都可以传递给任何 prop。

我们能够在组件实例中访问这个值，就像访问 data 中的值一样。

`v-for` 的优化，使用 `v-bind` 指令进行动态绑定，渲染列表：

```html
<body>
    <div id="app">
        <button-counter v-for="(item,index) in btns" :title="item.title"></button-counter>
    </div>

    <script>
        // 组件的创建，需要在 创建vm对象前
        Vue.component('button-counter', {
            // data 必须是一个函数，返回对象
            data: function () {
                return {
                    count: 0
                }
            },
            props: ['title'],
            template: `
            <button @click="count++">click me {{count}} times，【{{title}}】</button>
            `
        })
        var vm = new Vue({
            el: '#app',
            data() {
                return {
                    btns: [
                        { title: '标题1', msg: '测试1' },
                        { title: '标题2', msg: '测试2' },
                        { title: '标题3', msg: '测试3' },
                    ]
                };
            }
        });
    </script>
</body>
```

<a id="markdown-单个根元素" name="单个根元素"></a>
### 单个根元素








