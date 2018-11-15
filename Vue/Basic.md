<!-- TOC -->

- [基本使用](#基本使用)
    - [实例](#实例)
        - [数据与方法](#数据与方法)
        - [实例生命周期钩子](#实例生命周期钩子)
        - [生命周期图示](#生命周期图示)
    - [模板语法](#模板语法)
        - [插值](#插值)
            - [文本](#文本)
            - [原始HTML](#原始html)
            - [属性](#属性)
            - [JS表达式](#js表达式)
        - [指令](#指令)
            - [参数](#参数)
            - [修饰符](#修饰符)
            - [缩写](#缩写)
    - [计算属性和侦听器](#计算属性和侦听器)
        - [基础例子](#基础例子)
            - [计算属性缓存vs方法](#计算属性缓存vs方法)
            - [计算属性和侦听属性](#计算属性和侦听属性)
            - [计算属性的setter](#计算属性的setter)
        - [侦听器](#侦听器)

<!-- /TOC -->

<a id="markdown-基本使用" name="基本使用"></a>
# 基本使用

<a id="markdown-实例" name="实例"></a>
## 实例
每个 Vue 应用都是通过用 Vue 函数创建一个新的 Vue 实例开始的：

```js
var vm = new Vue({
  // 选项
})
```

虽然没有完全遵循 MVVM 模型，但是 Vue 的设计也受到了它的启发。因此在文档中经常会使用 vm (ViewModel 的缩写) 这个变量名表示 Vue 实例。

<a id="markdown-数据与方法" name="数据与方法"></a>
### 数据与方法
当一个 Vue 实例被创建时，它向 Vue 的响应式系统中加入了其 data 对象中能找到的所有的属性。

当这些属性的值发生改变时，视图将会产生“响应”，即匹配更新为新的值。

```js
// 我们的数据对象
var data = { a: 1 }

// 该对象被加入到一个 Vue 实例中
var vm = new Vue({
  data: data
})

// 获得这个实例上的属性
// 返回源数据中对应的字段
vm.a == data.a // => true

// 设置属性也会影响到原始数据
vm.a = 2
data.a // => 2

// ……反之亦然
data.a = 3
vm.a // => 3
```

当这些数据改变时，视图会进行重渲染。

值得注意的是只有当实例被创建时 data 中存在的属性才是响应式的。也就是说如果你添加一个新的属性，比如：

```js
//对 b 的改动将不会触发任何视图的更新。
vm.b = 'hi'
```

这里唯一的例外是使用 Object.freeze()，这会阻止修改现有的属性，也意味着响应系统无法再追踪变化。

```html
<div id="app">
    <p>{{ name }}</p>
    <!-- 这里的 `name` 不会更新！ -->
    <button v-on:click="name = 'lucy'">Change it</button>
</div>

<script>
    var obj = {
        name: 'jack'
    }

    Object.freeze(obj)

    new Vue({
        el: '#app',
        data: obj
    })
</script>
```

除了数据属性，Vue 实例还暴露了一些有用的实例属性与方法。它们都有前缀 $，以便与用户定义的属性区分开来。例如：

```html
<div id="app">
    <fieldset><input type="text" v-model="name" /></fieldset>
    <fieldset>
    <span>{{ name }}</span>
    </fieldset>
    <fieldset><button v-on:click="show">获取数据</button></fieldset>
</div>

<script>
    var obj = { name: "jack", age: 12 };
    var vm = new Vue({
    el: "#app",
    data: obj,
    methods: {
        show: function() {
        console.info("current name:" + vm.name);
        }
    }
    });

    vm.$data === obj; // => true
    vm.$el === document.getElementById("app"); // => true

    // $watch 是一个实例方法
    vm.$watch("name", function(newValue, oldValue) {
    // 这个回调将在 `vm.name` 改变后调用
    console.info("old:" + oldValue + ",new:" + newValue);
    });
</script>
```

<a id="markdown-实例生命周期钩子" name="实例生命周期钩子"></a>
### 实例生命周期钩子
每个 Vue 实例在被创建时都要经过一系列的初始化过程。

例如，需要设置数据监听、编译模板、将实例挂载到 DOM 并在数据变化时更新 DOM 等。

同时在这个过程中也会运行一些叫做生命周期钩子的函数，这给了用户在不同阶段添加自己的代码的机会。

比如 created 钩子可以用来在一个实例被创建之后执行代码：
```js
new Vue({
  data: {
    a: 1
  },
  created: function () {
    // `this` 指向 vm 实例
    console.log('a is: ' + this.a)
  }
})
// => "a is: 1"
```

也有一些其它的钩子，在实例生命周期的不同阶段被调用，如 mounted、updated 和 destroyed。

生命周期钩子的 this 上下文指向调用它的 Vue 实例。

<a id="markdown-生命周期图示" name="生命周期图示"></a>
### 生命周期图示
下图展示了实例的生命周期。你不需要立马弄明白所有的东西，不过随着你的不断学习和使用，它的参考价值会越来越高。

![](..\assets\Vue\lifecycle.png)

<a id="markdown-模板语法" name="模板语法"></a>
## 模板语法
Vue.js 使用了基于 HTML 的模板语法，允许开发者声明式地将 DOM 绑定至底层 Vue 实例的数据。

所有 Vue.js 的模板都是合法的 HTML ，所以能被遵循规范的浏览器和 HTML 解析器解析。

<a id="markdown-插值" name="插值"></a>
### 插值

<a id="markdown-文本" name="文本"></a>
#### 文本
数据绑定最常见的形式就是使用“Mustache”语法 (双大括号) 的文本插值：

```html
<span>Message: {{ msg }}</span>
```
Mustache 标签将会被替代为对应数据对象上 msg 属性的值。无论何时，绑定的数据对象上 msg 属性发生了改变，插值处的内容都会更新。

<a id="markdown-原始html" name="原始html"></a>
#### 原始HTML
双大括号会将数据解释为普通文本，而非 HTML 代码。为了输出真正的 HTML，你需要使用 v-html 指令：

```html
<div id="app">
    <p>Using mustaches: {{ rawHtml }}</p>
    <p>Using v-html directive: <span v-html="rawHtml"></span></p>
</div>

<script>
    var obj = {
        rawHtml: '<span style="color:red">this should be red.</span>',
    };
    var vm = new Vue({
        el: "#app",
        data: obj
    });
</script>
```

这个 span 的内容将会被替换成为属性值 rawHtml，直接作为 HTML——会忽略解析属性值中的数据绑定。

<a id="markdown-属性" name="属性"></a>
#### 属性
Mustache 语法不能作用在 HTML 属性上，遇到这种情况应该使用 v-bind 指令：
```html
<div v-bind:id="dynamicId"></div>
```

<a id="markdown-js表达式" name="js表达式"></a>
#### JS表达式
迄今为止，在我们的模板中，我们一直都只绑定简单的属性键值。

但实际上，对于所有的数据绑定，Vue.js 都提供了完全的 JavaScript 表达式支持。

```html
{{ number + 1 }}

{{ ok ? 'YES' : 'NO' }}

{{ message.split('').reverse().join('') }}

<div v-bind:id="'list-' + id"></div>
```

这些表达式会在所属 Vue 实例的数据作用域下作为 JavaScript 被解析。有个限制就是，每个绑定都只能包含单个表达式，所以下面的例子都不会生效。
```html
<!-- 这是语句，不是表达式 -->
{{ var a = 1 }}

<!-- 流控制也不会生效，请使用三元表达式 -->
{{ if (ok) { return message } }}
```

> 模板表达式都被放在沙盒中，只能访问全局变量的一个白名单，如 Math 和 Date 。你不应该在模板表达式中试图访问用户定义的全局变量。

<a id="markdown-指令" name="指令"></a>
### 指令
指令 (Directives) 是带有 v- 前缀的特殊属性。

指令属性的值预期是单个 JavaScript 表达式 (v-for 是例外情况，稍后我们再讨论)。

指令的职责是，当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM。

回顾我们在介绍中看到的例子：
```html
<div id="app">
    <fieldset><button v-on:click="change">切换显示</button></fieldset>
    <!-- v-if 指令将根据表达式 seen 的值的真假来插入/移除 <p> 元素。 -->
    <p v-if="seen">现在你看到我了</p>

</div>

<script>
    var obj = {
        seen: true,
    };
    var vm = new Vue({
        el: "#app",
        data: obj,
        methods: {
            change: function () {
                vm.seen = !vm.seen;
            }
        }
    });
</script>
```

<a id="markdown-参数" name="参数"></a>
#### 参数
一些指令能够接收一个“参数”，在指令名称之后以冒号表示。

例如，v-bind 指令可以用于响应式地更新 HTML 属性：

```html
<a v-bind:href="url">...</a>
```
在这里 href 是参数，告知 v-bind 指令将该元素的 href 属性与表达式 url 的值绑定。

<a id="markdown-修饰符" name="修饰符"></a>
#### 修饰符
修饰符 (Modifiers) 是以半角句号 . 指明的特殊后缀，用于指出一个指令应该以特殊方式绑定。

例如，.prevent 修饰符告诉 v-on 指令对于触发的事件调用 event.preventDefault()：

```html
<!-- 取消 submit 默认动作 -->
<form v-on:submit.prevent="onSubmit">...</form>
```

<a id="markdown-缩写" name="缩写"></a>
#### 缩写

Vue.js 为 v-bind 和 v-on 这两个最常用的指令，提供了特定简写：
```html
<!-- 完整语法 -->
<a v-bind:href="url">...</a>

<!-- 缩写 -->
<a :href="url">...</a>
```

```html
<!-- 完整语法 -->
<a v-on:click="doSomething">...</a>

<!-- 缩写 -->
<a @click="doSomething">...</a>
```

它们看起来可能与普通的 HTML 略有不同，但` : 与 @ `对于特性名来说都是合法字符，在所有支持 Vue.js 的浏览器都能被正确地解析。

<a id="markdown-计算属性和侦听器" name="计算属性和侦听器"></a>
## 计算属性和侦听器
模板内的表达式非常便利，但是设计它们的初衷是用于简单运算的。

在模板中放入太多的逻辑会让模板过重且难以维护。例如：

```html
<div id="example">
  {{ message.split('').reverse().join('') }}
</div>
```
在这个地方，模板不再是简单的声明式逻辑。

你必须看一段时间才能意识到，这里是想要显示变量 message 的翻转字符串。

所以，对于任何复杂逻辑，你都应当使用计算属性。

<a id="markdown-基础例子" name="基础例子"></a>
### 基础例子
```html
<div id="example">
    <p>Original message: "{{ message }}"</p>
    <p>Computed reversed message: "{{ reversedMessage }}"</p>
</div>

<script>
    var vm = new Vue({
        el: '#example',
        data: {
            message: 'Hello'
        },
        //computed 表示计算
        computed: {
            // 计算属性的 getter
            reversedMessage: function () {
                // `this` 指向 vm 实例
                return this.message.split('').reverse().join('')
            }
        }
    })
</script>
```

这里我们声明了一个计算属性 reversedMessage。我们提供的函数将用作属性 vm.reversedMessage 的 getter 函数：
```js
console.log(vm.reversedMessage) // => 'olleH'
vm.message = 'Goodbye'
console.log(vm.reversedMessage) // => 'eybdooG'
```
你可以打开浏览器的控制台，自行修改例子中的 vm。vm.reversedMessage 的值始终取决于 vm.message 的值。

你可以像绑定普通属性一样在模板中绑定计算属性。

Vue 知道 vm.reversedMessage 依赖于 vm.message，因此当 vm.message 发生改变时，所有依赖 vm.reversedMessage 的绑定也会更新。

而且最妙的是我们已经以声明的方式创建了这种依赖关系：计算属性的 getter 函数是没有副作用 (side effect) 的，这使它更易于测试和理解。

<a id="markdown-计算属性缓存vs方法" name="计算属性缓存vs方法"></a>
#### 计算属性缓存vs方法
你可能已经注意到我们可以通过在表达式中调用方法来达到同样的效果：

```html
<div id="example">
    <p>Original message: "{{ message }}"</p>
    <p>Reversed message: "{{ reversedMessage() }}"</p>
</div>

<script>
    var vm = new Vue({
        el: '#example',
        data: {
            message: 'Hello'
        },
        // 在组件中定义方法
        methods: {
            reversedMessage: function () {
                return this.message.split('').reverse().join('')
            }
        }
    })
</script>
```
同样的反转显示我们可以使用一个方法而不是一个计算属性。两种方式的最终结果确实是完全相同的。

然而，**不同的是计算属性是基于它们的依赖进行缓存的**。只在相关依赖发生改变时它们才会重新求值。

这就意味着只要 message 还没有发生改变，多次访问 reversedMessage 计算属性会立即返回之前的计算结果，而不必再次执行函数。

在下面的案例中，计算属性和调用方法同样可以显示当前的时间
```html
<div id="example">
    <p>计算属性: "{{ compuNow }}"</p>
    <p>调用方法: "{{ metNow() }}"</p>
</div>

<script>
    var vm = new Vue({
        el: '#example',
        data: {
            message: 'Hello'
        },
        //computed 表示计算
        computed: {
            // 计算属性的 getter
            compuNow: function () {
                return (new Date()).toLocaleString();
            }
        },
        // 方法
        methods: {
            metNow: function () {
                return (new Date()).toLocaleString();
            }
        }
    })
</script>
```

在浏览器js控制台进行多次调用计算属性和方法发现，计算属性每次显示的为缓存，调用方法则会每次执行函数内容。

![](..\assets\Vue\computed-function.png)

<a id="markdown-计算属性和侦听属性" name="计算属性和侦听属性"></a>
#### 计算属性和侦听属性

Vue 提供了一种更通用的方式来观察和响应 Vue 实例上的数据变动：侦听属性。

当你有一些数据需要随着其它数据变动而变动时，你很容易滥用 watch——特别是如果你之前使用过 AngularJS。

然而，通常更好的做法是使用计算属性而不是命令式的 watch 回调。细想一下这个例子：

```html
<div id="example">
    <fieldset><input type="text" v-model="firstName" /></fieldset>
    <fieldset><input type="text" v-model="lastName" /></fieldset>
    <fieldset><span>FullName:{{ fullName }}</span></fieldset>
</div>

<script>
    var vm = new Vue({
        el: '#example',
        data: {
            firstName: 'money',
            lastName: 'zhang',
            fullName: 'money zhang'
        },
        watch: {
            // 监听firstName属性编号
            firstName: function (nv, ov) {
                this.fullName = nv + ' ' + this.lastName;
            },
            // 监听lastName属性编号
            lastName: function (nv, ov) {
                this.fullName = this.firstName + ' ' + nv;
            }
        }
    })
</script>
```

将它与计算属性的版本进行比较：
```html
<div id="example">
    <fieldset><input type="text" v-model="firstName" /></fieldset>
    <fieldset><input type="text" v-model="lastName" /></fieldset>
    <fieldset><span>FullName:{{ fullName }}</span></fieldset>
</div>

<script>
    var vm = new Vue({
        el: '#example',
        data: {
            firstName: 'money',
            lastName: 'zhang',
        },
        computed: {
            // fullName为计算属性，依赖于firstName和lastName
            fullName: function () {
                return this.firstName + ' ' + this.lastName;
            }
        }
    })
</script>
```

<a id="markdown-计算属性的setter" name="计算属性的setter"></a>
#### 计算属性的setter

计算属性默认只有 getter ，不过在需要时你也可以提供一个 setter ：

```html
<div id="example">
    <fieldset><input type="text" v-model="firstName" /></fieldset>
    <fieldset><input type="text" v-model="lastName" /></fieldset>
    <fieldset><input type="text" v-model="fullName" /></fieldset>
    <fieldset><span>FullName:{{ fullName }}</span></fieldset>
</div>

<script>
    var vm = new Vue({
        el: '#example',
        data: {
            firstName: 'money',
            lastName: 'zhang',
        },
        computed: {
            // fullName为计算属性，依赖于firstName和lastName
            fullName: {
                // getter
                get: function () {
                    return this.firstName + ' ' + this.lastName;
                },
                // setter
                set: function (val) {
                    var names = val.split(' ');
                    if (names.length > 1) {
                        this.firstName = names[0];
                        this.lastName = names[1];
                    }
                }
            },
        }
    })
</script>
```

<a id="markdown-侦听器" name="侦听器"></a>
### 侦听器

虽然计算属性在大多数情况下更合适，但有时也需要一个自定义的侦听器。

这就是为什么 Vue 通过 watch 选项提供了一个更通用的方法，来响应数据的变化。

当需要在数据变化时执行异步或开销较大的操作时，这个方式是最有用的。

