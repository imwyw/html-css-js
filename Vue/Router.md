<!-- TOC -->

- [路由](#路由)
    - [hash 属性](#hash-属性)
    - [vue-router](#vue-router)
        - [简单案例](#简单案例)
    - [动态路由](#动态路由)
        - [路由传参](#路由传参)
        - [路由参数的监听](#路由参数的监听)
        - [捕获所有路由](#捕获所有路由)
    - [命名路由](#命名路由)
    - [嵌套路由](#嵌套路由)

<!-- /TOC -->

<a id="markdown-路由" name="路由"></a>
# 路由
Single Page Application

<a id="markdown-hash-属性" name="hash-属性"></a>
## hash 属性
hash 属性是一个可读可写的字符串，该字符串是 URL 的锚部分（从 # 号开始的部分）。

```js
location.hash
```

当一个窗口的 hash （URL 中 # 后面的部分）改变时就会触发 hashchange 事件。

```js
window.onhashchange=function(){}
```

利用这两点就可以实现基于锚点跳转的路由，非常简单

```html
<body>
    <header>
        <a href="#/login">登录</a>
        <a href="#/register">注册</a>
    </header>
    <div id="app"></div>

    <script>
        var divapp = document.querySelector('#app');

        window.onhashchange = function () {
            console.log(location.hash);
            switch (location.hash) {
                case '#/login':
                    divapp.innerHTML = '<h4>开始登录</h4>'
                    break;
                case '#/register':
                    divapp.innerHTML = '<h4>注册新账号</h4>'
                    break;
                default:
                    break;
            }
        }
    </script>
</body>
```

<a id="markdown-vue-router" name="vue-router"></a>
## vue-router
Vue Router 是 Vue.js 官方的路由管理器。

它和 Vue.js 的核心深度集成，让构建单页面应用变得易如反掌。

<a id="markdown-简单案例" name="简单案例"></a>
### 简单案例

```html
<body>
    <div id="app">
        <h1>hello vue router</h1>
        <div>
            <!-- 使用 router-link 组件来导航. -->
            <!-- 通过传入 `to` 属性指定链接. -->
            <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
            <router-link to="/login">开始登录</router-link>
            <router-link to="/register">没有账号？点我注册</router-link>
        </div>

        <!-- 路由出口 -->
        <!-- 路由匹配到的组件将渲染在这里 -->
        <router-view></router-view>
    </div>

    <!-- 1、引用vue组件 -->
    <script src="../node_modules/vue/dist/vue.js"></script>
    <!-- 2、引用vue-router组件，依赖于vue组件 -->
    <script src="../node_modules/vue-router/dist/vue-router.js"></script>

    <script>
        // 1、定义路由组件
        const Login = {
            template: `<h4>我是登录页面</h4>`,
        };
        const Register = {
            template: `<h4>我是注册页面</h4>`,
        };

        // 2、定义路由
        const routes = [
            { path: '/login', component: Login },
            { path: '/register', component: Register },
        ];

        // 3、创建 router 对象，配置routes
        var router = new VueRouter({
            routes// 相当于 routes:routes
        });

        var vm = new Vue({
            el: '#app',
            router: router,
        })
    </script>
</body>
```

<a id="markdown-动态路由" name="动态路由"></a>
## 动态路由

<a id="markdown-路由传参" name="路由传参"></a>
### 路由传参

例如有一个局部组件 `User` ，针对不同的用户id需要有不同的数据展现。

在 `vue-router` 的路由路径中使用“动态路径参数”(dynamic segment) 来达到这个效果：

```html
<body>
    <div id="app">
        <router-link to="/user/jack123">用户</router-link>
        <router-view></router-view>
    </div>

    <script src="../node_modules/vue/dist/vue.js"></script>
    <script src="../node_modules/vue-router/dist/vue-router.js"></script>

    <script>
        const User = {
            template: `<div>this is User info {{$route.params.id}}</div>`
        };

        var router = new VueRouter({
            routes: [
                // 动态路径参数 以冒号开头,:id 表示参数
                { path: '/user/:id', component: User },
            ]
        });

        var vm = new Vue({
            el: '#app',
            router: router,
        })
    </script>
</body>
```

一个“路径参数”使用冒号 : 标记。

当匹配到一个路由时，参数值会被设置到 `this.$route.params`，可以在每个组件内使用。

你可以在一个路由中设置多段“路径参数”，对应的值都会设置到 $route.params 中。例如：

模式 | 匹配路径 | $route.params
---|------|--------------
`/user/:username` | `/user/evan` | `{ username: 'evan' }`
`/user/:username/post/:post_id` | `/user/evan/post/123` | `{ username: 'evan', post_id: '123' }`

同样的，也可以在组件中通过 `created` 钩子访问参数，修改上例中 User 组件如下：

```js
const User = {
    template: `<div>this is User info {{$route.params.id}}</div>`,
    created() {
        console.log(this.$route.params);
    }
};
```

<a id="markdown-路由参数的监听" name="路由参数的监听"></a>
### 路由参数的监听

当使用路由参数时，例如从 /user/123 导航到 /user/124 ，原来的组件实例会被复用。

因为两个路由都渲染同个组件，比起销毁再创建，复用则显得更加高效。

不过，这也意味着组件的生命周期钩子不会再被调用。

复用组件时，想对路由参数的变化作出响应的话，你可以简单地 watch (监测变化) $route 对象，修改 User 组件如下：

```js
const User = {
    template: `<div>this is User info {{$route.params.id}}</div>`,
    created() {
        // 由于组件复用，修改路由传参，created钩子仅仅只会调用一次
        console.log(this.$route.params);
    },
    watch: {
        $route(to, from) {
            // 监听路由参数的变化，组件复用时
            console.log(`from:${from.params.id},to:${to.params.id}`);
        }
    }
};
```

<a id="markdown-捕获所有路由" name="捕获所有路由"></a>
### 捕获所有路由
常规参数只会匹配被 / 分隔的 URL 片段中的字符。如果想匹配任意路径，我们可以使用通配符 (*)：

```js
{
  // 会匹配所有路径
  path: '*'
}
{
  // 会匹配以 `/user-` 开头的任意路径
  path: '/user-*'
}
```

当使用通配符路由时，请确保路由的顺序是正确的，也就是说含有通配符的路由应该放在最后。

路由 `{ path: '*' }` 通常用于客户端 404 错误。

```html
<body>
    <div id="app">
        <router-link to="/user/jack123">用户1</router-link>
        <router-link to="/user/lucy123">用户2</router-link>
        <router-link to="/error/xxxx">错误的链接-测试</router-link>
        <router-link to="/about/xxxx">错误的链接-测试</router-link>
        <router-view></router-view>
    </div>

    <script src="../node_modules/vue/dist/vue.js"></script>
    <script src="../node_modules/vue-router/dist/vue-router.js"></script>

    <script>
        const User = {
            template: `<div>this is User info {{$route.params.id}}</div>`,
        };
        const NotFound = {
            template: `<h1>你访问的页面好像不在地球。。。。</h1>`
        };

        var router = new VueRouter({
            routes: [
                // 动态路径参数 以冒号开头,:id 表示参数
                { path: '/user/:id', component: User },
                { path: '*', component: NotFound }
            ]
        });

        var vm = new Vue({
            el: '#app',
            router: router,
        })
    </script>
</body>
```

<a id="markdown-命名路由" name="命名路由"></a>
## 命名路由
有时候，通过一个名称来标识一个路由显得更方便一些，特别是在链接一个路由，或者是执行一些跳转的时候。

你可以在创建 Router 实例的时候，在 routes 配置中给某个路由设置名称。

```html
<body>
    <div id="app">
        <!-- 使用bind绑定属性的值，并使用对象方式赋值 -->
        <router-link :to="{name:'rUser',params:{id:'jack123'}}">用户1</router-link>
        <router-link to="/user/lucy123">用户2</router-link>
        <router-view></router-view>
    </div>

    <script src="../node_modules/vue/dist/vue.js"></script>
    <script src="../node_modules/vue-router/dist/vue-router.js"></script>

    <script>
        const User = {
            template: `<div>this is User info {{$route.params.id}}</div>`,
        };

        var router = new VueRouter({
            routes: [
                // 动态路径参数 以冒号开头,:id 表示参数
                { path: '/user/:id', name: 'rUser', component: User },
            ]
        });

        var vm = new Vue({
            el: '#app',
            router: router,
        })
    </script>
</body>
```

<a id="markdown-嵌套路由" name="嵌套路由"></a>
## 嵌套路由

实际生活中的应用界面，通常由多层嵌套的组件组合而成。

同样地，URL 中各段动态路径也按某种结构对应嵌套的各层组件

比如 [掘金](https://www.juejin.im) 网站的分层导航就是基于 Vue 路由嵌套 实现的。

```html
<body>
    <div id="app">
        <router-link :to="{name:'home'}">首页</router-link>
        <router-link :to="{name:'manager'}">管理</router-link>
        <hr>
        <router-view></router-view>
    </div>

    <script src="../node_modules/vue/dist/vue.js"></script>
    <script src="../node_modules/vue-router/dist/vue-router.js"></script>

    <script>
        // Home 和 Manager是一级导航的路由
        const Home = {
            template: `
            <div>
                <router-link to="/home/music">音乐</router-link>
                <router-link to="/home/movie">影视</router-link>
                <hr>
                <router-view></router-view>
            </div>
            `,
        };
        const Manager = {
            template: `
            <div>
                <router-link to="/manager/config-personal">个人设置</router-link>
                <router-link to="/manager/update-pwd">修改密码</router-link>
                <hr>
                <router-view></router-view>
            </div>
            `
        };

        // 以下 4个 为二级导航的路由
        const Music = {
            template: `<div>this is music</div>`
        };
        const Movie = {
            template: `<div>this is movie</div>`
        };
        const Personal = {
            template: `<div>this is 个人信息</div>`
        };
        const Password = {
            template: `<div>this is 密码更新</div>`
        };

        var router = new VueRouter({
            routes: [
                {
                    path: '/home', name: 'home', component: Home,
                    children: [
                        { path: 'music', component: Music },
                        { path: 'movie', component: Movie },
                    ]
                },
                {
                    path: '/manager', name: 'manager', component: Manager,
                    children: [
                        { path: 'config-personal', component: Personal },
                        { path: 'update-pwd', component: Password },
                    ]
                }
            ]
        });

        var vm = new Vue({
            el: '#app',
            router: router,
        })
    </script>
</body>
```













