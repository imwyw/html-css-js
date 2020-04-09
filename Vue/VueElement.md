<!-- TOC -->

- [结合ElementUI](#结合elementui)
    - [环境](#环境)
    - [初体验](#初体验)
        - [路由登录组件](#路由登录组件)
        - [使用ElementUI组件](#使用elementui组件)

<!-- /TOC -->

<a id="markdown-结合elementui" name="结合elementui"></a>
# 结合ElementUI

<a id="markdown-环境" name="环境"></a>
## 环境

新建文件夹 【hello_element】，执行以下命令：

```bash
# 使用webpack模板初始化 elementui 项目
vue init webpack hello_element

# 安装 ElementUI 组件依赖
npm i element-ui -D

# 安装 axios和vue-axios插件
npm i axios vue-axios -D

# 运行测试环境
npm run dev
```

<a id="markdown-初体验" name="初体验"></a>
## 初体验

<a id="markdown-路由登录组件" name="路由登录组件"></a>
### 路由登录组件
在【src】中新增文件夹【views】，添加文件【Login.vue】，作为登录视图：

```html
<template>
  <h1>Login....</h1>
</template>

<script>
export default { name: "Login" };
</script>

<style>
</style>
```

修改【router】文件夹下默认生成的【index.js】文件，内容如下：

```js
import Vue from 'vue'
import Router from 'vue-router'

// 导入刚刚创建的vue组件
import Login from '@/views/Login'

Vue.use(Router)

// 导出默认路由对象
export default new Router({
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: Login
    }
  ]
})

```

访问地址 `http://localhost:xxxx/#/login` ，可以看到 `Login` 组件已被路由加载至页面。

<a id="markdown-使用elementui组件" name="使用elementui组件"></a>
### 使用ElementUI组件

在【main.js】中导入 ElementUI 组件，代码如下：

```js
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 导入 ElementUI 模块
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 导入 axios 模块
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(VueAxios, axios);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // 由 ElementUI 进行渲染
  render: h => h(App)
})
```

修改【Login.vue】组件，内容如下：

```html
<template>
  <el-form ref="form" :model="loginForm" label-width="80px">
    <el-form-item label="用户名：">
      <el-input v-model="loginForm.userid"></el-input>
    </el-form-item>
    <el-form-item label="密码：">
      <el-input type="password" v-model="loginForm.pwd"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">登录</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        userid: "",
        pwd: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log(this.$data.loginForm);
    }
  }
};
</script>
```

如上，简单的在 Vue 项目中应用了 ElementUI 组件。






















