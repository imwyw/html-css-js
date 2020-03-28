<!-- TOC -->

- [组件](#组件)
    - [全局组件](#全局组件)
        - [组件复用](#组件复用)
        - [组件Data](#组件data)
    - [局部组件](#局部组件)
    - [组件通信](#组件通信)
        - [组件的传值](#组件的传值)
        - [单个根元素](#单个根元素)
        - [监听子组件事件](#监听子组件事件)
        - [组件上 v-model](#组件上-v-model)
        - [插槽替换内容](#插槽替换内容)
    - [生命周期](#生命周期)

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

当构建一个 `<button-counter>` 组件时，你的模板最终会包含的东西远不止一个元素：

Vue对于组件有限制，每个组件必须只有一个根元素，必须将元素包裹在某个容器中：

```html
<body>
    <div id="app">
        <button-counter v-for="(item,index) in btns" :title="item.title" :msg="item.msg"></button-counter>
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
            // 多个传参对应多个 prop
            props: ['title', 'msg'],
            // 需要有一个根元素
            template: `
            <div>
                <h4>{{msg}}</h4>
                <button @click="count++">click me {{count}} times，【{{title}}】</button>
            </div>
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

<a id="markdown-监听子组件事件" name="监听子组件事件"></a>
### 监听子组件事件

上述按钮的示例中，如果需要在按钮上绑定事件，触发父组件中的某些处理方法，这就需要在父组件中监听子组件的事件

```html
<body>
    <div id="app">
        <button-counter v-for="(item,index) in btns" :title="item.title" :msg="item.msg" v-on:cus-event="show">
        </button-counter>
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
            props: ['title', 'msg'],
            template: `
            <div>
                <h4>{{msg}}</h4>
                <button v-on:click="$emit('cus-event')">【{{title}}】</button>
            </div>
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
            },
            methods: {
                show() {
                    console.log('调用了 父组件中处理方法');
                },
            }
        });
    </script>
</body>
```

上述示例中，父级组件中监听自定义事件 `cus-event` ，

子组件中通过内建的 `$emit` 方法 并传入事件名称来触发自定义事件。

在事件处理时，还可以将参数抛出做处理。

修改全局组件 `template` button部分，增加 `title` 传参：

```html
<div>
    <h4>{{msg}}</h4>
    <button v-on:click="$emit('cus-event',title)">【{{title}}】</button>
</div>
```

修改父组件中自定义事件处理方法，增加参数：

```js
show(arg) {
    console.log('调用了 父组件中处理方法');
    console.log(arg);
}
```

如上，子组件的数据通过自定义事件传递到了父组件。

<a id="markdown-组件上-v-model" name="组件上-v-model"></a>
### 组件上 v-model
子组件上绑定了数据属性 `searchText`，通过子组件 `prop` 接收处理

绑定了事件 `getValue`，通过子组件中内建 `$emit` 方法进行处理

```html
<body>
    <div id="app">
        <customer-input :value="searchText" @inp="getValue"></customer-input>
    </div>

    <script>
        // 组件的创建，需要在 创建vm对象前
        Vue.component('customer-input', {
            // data 必须是一个函数，返回对象
            data: function () {
                return {
                }
            },
            props: ['value'],
            template: `
                <input type="text" :value="value" @input="$emit('inp',$event.target.value)" />
            `
        })
        var vm = new Vue({
            el: '#app',
            data() {
                return {
                    searchText: ''
                };
            },
            methods: {
                getValue(arg) {
                    console.log(arg);
                    this.searchText = arg;
                }
            }
        });
    </script>
</body>
```

自定义事件也可以用于创建支持 v-model 的自定义输入组件。

可以将上述案例中 `customer-input` 修改如下：

```html
<customer-input v-model="searchText"></customer-input>
```

并且可以移除vue对象methods中定义的 `getValue` 方法，仍然可以实现和子组件视图的双向绑定。

<a id="markdown-插槽替换内容" name="插槽替换内容"></a>
### 插槽替换内容

向子组件中传递内容，将 `alert-box` 标签中内容替换到组件模板的 `slot` 标签处

```html
<body>
    <div id="app">
        <alert-box>
            something bad happened.
        </alert-box>
    </div>

    <script>
        // 组件的创建，需要在 创建vm对象前
        Vue.component('alert-box', {
            template: `
            <div>
                <strong>Error!</strong>
                <slot></slot>
            </div>
            `
        })
        var vm = new Vue({
            el: '#app',
        });
    </script>
</body>
```

`slot` 标签相当于插槽，将父级调用的内容替换至插槽位置，目前我们只需要了解这些即可。

<a id="markdown-生命周期" name="生命周期"></a>
## 生命周期
TODO....





























