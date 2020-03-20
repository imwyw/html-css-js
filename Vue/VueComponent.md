<!-- TOC -->

- [组件](#组件)
    - [组件示例](#组件示例)
        - [组件复用](#组件复用)
        - [组件Data](#组件data)
    - [局部组件](#局部组件)
    - [组件组织](#组件组织)

<!-- /TOC -->

<a id="markdown-组件" name="组件"></a>
# 组件

<a id="markdown-组件示例" name="组件示例"></a>
## 组件示例
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

注意当点击按钮时，每个组件都会各自独立维护它的 count。因为你每用一次组件，就会有一个它的新实例被创建。

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

<a id="markdown-组件组织" name="组件组织"></a>
## 组件组织

通常一个应用会以一棵嵌套的组件树的形式来组织：

![](../assets/Vue/components.png)

例如，你可能会有页头、侧边栏、内容区等组件，每个组件又包含了其它的像导航链接、博文之类的组件。

为了能在模板中使用，这些组件必须先注册以便 Vue 能够识别。

这里有两种组件的注册类型：`全局注册` 和 `局部注册`。

前面 `按钮计数` 的示例就是 Vue.component 全局注册的。
















