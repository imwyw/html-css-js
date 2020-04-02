<!-- TOC -->

- [Axios](#axios)
    - [示例](#示例)
        - [执行 GET 请求](#执行-get-请求)
        - [执行 POST 请求](#执行-post-请求)
        - [axios.all()](#axiosall)
        - [axios API](#axios-api)
        - [请求配置](#请求配置)
        - [响应结构](#响应结构)
    - [全局配置](#全局配置)
    - [拦截器](#拦截器)
    - [综合案例](#综合案例)
        - [全局跨域设置](#全局跨域设置)
        - [后端API控制器](#后端api控制器)
        - [基于Vue的前端Axios交互](#基于vue的前端axios交互)

<!-- /TOC -->

<a id="markdown-axios" name="axios"></a>
# Axios

```html
<!-- cdn服务 -->
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

<script src="https://cdn.bootcss.com/axios/0.19.0-beta.1/axios.min.js"></script>
```

Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。

目前主流的 Vue 项目，都选择 axios 来完成 ajax 请求。

拥有以下特点：
* 从浏览器中创建 XMLHttpRequests
* 从 node.js 创建 http 请求
* 支持 Promise API
* 拦截请求和响应
* 转换请求数据和响应数据
* 取消请求
* 自动转换 JSON 数据
* 客户端支持防御 XSRF

<a id="markdown-示例" name="示例"></a>
## 示例

<a id="markdown-执行-get-请求" name="执行-get-请求"></a>
### 执行 GET 请求

```js
// 为给定 ID 的 user 创建请求
axios.get('/user?ID=12345')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

<a id="markdown-执行-post-请求" name="执行-post-请求"></a>
### 执行 POST 请求

```js
axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

<a id="markdown-axiosall" name="axiosall"></a>
### axios.all()
执行多个并发请求，这一点相比较于jQuery很强大，比如某一个ajax请求依赖于多个ajax请求，由于异步的特性，很不好处理先后关系。

使用axios.all()可以进行多个并发请求

```js
function getUserAccount() {
  return axios.get('/user/12345');
}

function getUserPermissions() {
  return axios.get('/user/12345/permissions');
}

axios.all([getUserAccount(), getUserPermissions()])
  .then(axios.spread(function (acct, perms) {
    // 两个请求现在都执行完成
  }));
```

<a id="markdown-axios-api" name="axios-api"></a>
### axios API
可以通过向 axios 传递相关配置来创建请求，这一点很像 jQuery 的 $.ajax()

```js
// 发送 POST 请求
axios({
  method: 'post',
  url: '/user/12345',
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone'
  }
});
```

```js
// 发送 GET 请求（默认的方法）
axios('/user/12345');
```

<a id="markdown-请求配置" name="请求配置"></a>
### 请求配置
这些是创建请求时可以用的配置选项。只有 url 是必需的。如果没有指定 method，请求将默认使用 get 方法。

```js
{
  // `url` 是用于请求的服务器 URL
  url: '/user',

  // `method` 是创建请求时使用的方法
  method: 'get', // 默认是 get

  // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
  // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
  baseURL: 'https://some-domain.com/api/',

  // `transformRequest` 允许在向服务器发送前，修改请求数据
  // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
  // 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
  transformRequest: [function (data) {
    // 对 data 进行任意转换处理

    return data;
  }],

  // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
  transformResponse: [function (data) {
    // 对 data 进行任意转换处理

    return data;
  }],

  // `headers` 是即将被发送的自定义请求头
  headers: {'X-Requested-With': 'XMLHttpRequest'},

  // `params` 是即将与请求一起发送的 URL 参数
  // 必须是一个无格式对象(plain object)或 URLSearchParams 对象
  params: {
    ID: 12345
  },

  // `paramsSerializer` 是一个负责 `params` 序列化的函数
  // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
  paramsSerializer: function(params) {
    return Qs.stringify(params, {arrayFormat: 'brackets'})
  },

  // `data` 是作为请求主体被发送的数据
  // 只适用于这些请求方法 'PUT', 'POST', 和 'PATCH'
  // 在没有设置 `transformRequest` 时，必须是以下类型之一：
  // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
  // - 浏览器专属：FormData, File, Blob
  // - Node 专属： Stream
  data: {
    firstName: 'Fred'
  },

  // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
  // 如果请求话费了超过 `timeout` 的时间，请求将被中断
  timeout: 1000,

  // `withCredentials` 表示跨域请求时是否需要使用凭证
  withCredentials: false, // 默认的

  // `adapter` 允许自定义处理请求，以使测试更轻松
  // 返回一个 promise 并应用一个有效的响应 (查阅 [response docs](#response-api)).
  adapter: function (config) {
    /* ... */
  },

  // `auth` 表示应该使用 HTTP 基础验证，并提供凭据
  // 这将设置一个 `Authorization` 头，覆写掉现有的任意使用 `headers` 设置的自定义 `Authorization`头
  auth: {
    username: 'janedoe',
    password: 's00pers3cret'
  },

  // `responseType` 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
  responseType: 'json', // 默认的

  // `xsrfCookieName` 是用作 xsrf token 的值的cookie的名称
  xsrfCookieName: 'XSRF-TOKEN', // default

  // `xsrfHeaderName` 是承载 xsrf token 的值的 HTTP 头的名称
  xsrfHeaderName: 'X-XSRF-TOKEN', // 默认的

  // `onUploadProgress` 允许为上传处理进度事件
  onUploadProgress: function (progressEvent) {
    // 对原生进度事件的处理
  },

  // `onDownloadProgress` 允许为下载处理进度事件
  onDownloadProgress: function (progressEvent) {
    // 对原生进度事件的处理
  },

  // `maxContentLength` 定义允许的响应内容的最大尺寸
  maxContentLength: 2000,

  // `validateStatus` 定义对于给定的HTTP 响应状态码是 resolve 或 reject  promise 。如果 `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，promise 将被 resolve; 否则，promise 将被 rejecte
  validateStatus: function (status) {
    return status >= 200 && status < 300; // 默认的
  },

  // `maxRedirects` 定义在 node.js 中 follow 的最大重定向数目
  // 如果设置为0，将不会 follow 任何重定向
  maxRedirects: 5, // 默认的

  // `httpAgent` 和 `httpsAgent` 分别在 node.js 中用于定义在执行 http 和 https 时使用的自定义代理。允许像这样配置选项：
  // `keepAlive` 默认没有启用
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),

  // 'proxy' 定义代理服务器的主机名称和端口
  // `auth` 表示 HTTP 基础验证应当用于连接代理，并提供凭据
  // 这将会设置一个 `Proxy-Authorization` 头，覆写掉已有的通过使用 `header` 设置的自定义 `Proxy-Authorization` 头。
  proxy: {
    host: '127.0.0.1',
    port: 9000,
    auth: : {
      username: 'mikeymike',
      password: 'rapunz3l'
    }
  },

  // `cancelToken` 指定用于取消请求的 cancel token
  // （查看后面的 Cancellation 这节了解更多）
  cancelToken: new CancelToken(function (cancel) {
  })
}
```

<a id="markdown-响应结构" name="响应结构"></a>
### 响应结构
某个请求的响应包含以下信息，即then方法回调参数

```js
{
  // `data` 由服务器提供的响应
  data: {},

  // `status` 来自服务器响应的 HTTP 状态码
  status: 200,

  // `statusText` 来自服务器响应的 HTTP 状态信息
  statusText: 'OK',

  // `headers` 服务器响应的头
  headers: {},

  // `config` 是为请求提供的配置信息
  config: {}
}
```

使用 then 时，你将接收下面这样的响应：

```js
axios.get('/user/12345')
  .then(function(response) {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  });
```

<a id="markdown-全局配置" name="全局配置"></a>
## 全局配置
你可以指定将被用在各个请求的配置默认值

```js
// 全局的 axios 默认值
axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
```

<a id="markdown-拦截器" name="拦截器"></a>
## 拦截器

在请求或响应被 then 或 catch 处理前拦截它们。

```js
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
```

<a id="markdown-综合案例" name="综合案例"></a>
## 综合案例
结合 ASP.NET Core WebAPI，实现产品的基本 CRUD 操作。

<a id="markdown-全局跨域设置" name="全局跨域设置"></a>
### 全局跨域设置
新增的 WebAPI 项目需要支持跨域，修改 【Startup】类中 `ConfigureServices()` 和 `Configure()`

```cs
public void ConfigureServices(IServiceCollection services)
{
    services.AddControllers();

    // 注入跨域设置
    services.AddCors(opt =>
    {
        // 增加全局跨域规则，global_cors 是规则名称，UseCors需要使用到
        opt.AddPolicy("global_cors", cor =>
        {
            // 允许所有来源的 CORS 请求和任何方案（http 或 https）
            cor.AllowAnyHeader().AllowAnyOrigin().AllowAnyMethod();
        });
    });
}

public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
{
    if (env.IsDevelopment())
    {
        app.UseDeveloperExceptionPage();
    }

    // 按照规则名称应用跨域规则
    app.UseCors("global_cors");

    app.UseRouting();

    app.UseAuthorization();

    app.UseEndpoints(endpoints =>
    {
        endpoints.MapControllers();
    });
}
```

<a id="markdown-后端api控制器" name="后端api控制器"></a>
### 后端API控制器
基于微软官网的 Product 案例，新增对应的 CRUD 接口

```cs
public class Product
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Category { get; set; }
    public decimal Price { get; set; }
}

[Route("api/[controller]/[action]")]
[ApiController]
public class ProductController : ControllerBase
{
    static IList<Product> products = new List<Product>()
    {
        new Product { Id = 1, Name = "Tomato Soup", Category = "Groceries", Price = 1 },
        new Product { Id = 2, Name = "Yo-yo", Category = "Toys", Price = 3.75M },
        new Product { Id = 3, Name = "Hammer", Category = "Hardware", Price = 16.99M }
    };

    [HttpGet]
    public IList<Product> GetProducts(int? id)
    {
        if (id.HasValue)
        {
            return products.Where(t => t.Id == id.Value).ToList();
        }
        else
        {
            return products;
        }
    }

    /// <summary>
    /// [FromBody] 需要 content-type:application/json
    /// </summary>
    /// <param name="entity"></param>
    /// <returns></returns>
    [HttpPost]
    public bool AddProduct(Product entity)
    {
        // Id 值不允许重复
        if (products.Count(t => t.Id == entity.Id) > 0)
        {
            return false;
        }
        products.Add(entity);
        return true;
    }

    /// <summary>
    /// [FromBody] 需要 content-type:application/json
    /// </summary>
    /// <param name="entity"></param>
    /// <returns></returns>
    [HttpPost]
    public bool UpdateProduct([FromBody]Product entity)
    {
        var updateEntity = products.FirstOrDefault(t => t.Id == entity.Id);
        if (null != updateEntity)
        {
            updateEntity.Name = entity.Name;
            updateEntity.Category = entity.Category;
            updateEntity.Price = entity.Price;
            return true;
        }
        else
        {
            return false;
        }
    }

    [HttpGet]
    public bool RemoveProduct(int? id)
    {
        if (id.HasValue)
        {
            var prod = products.FirstOrDefault(t => t.Id == id.Value);
            if (null == prod)
            {
                return false;
            }
            products.Remove(prod);
            return true;
        }
        else
        {
            return false;
        }
    }
}
```

<a id="markdown-基于vue的前端axios交互" name="基于vue的前端axios交互"></a>
### 基于Vue的前端Axios交互

```html
<body>
    <div id="app">
        <div>
            <label>产品编号：</label>
            <input type="text" v-model="newProduct.id" :disabled="isEdit">
        </div>
        <div>
            <label>产品名称：</label>
            <input type="text" v-model="newProduct.name">
        </div>
        <div>
            <label>产品分类：</label>
            <input type="text" v-model="newProduct.category">
        </div>
        <div>
            <label>产品价格：</label>
            <input type="number" v-model="newProduct.price">
        </div>
        <button @click="addProduct">新增</button>
        <button @click="saveProduct">保存</button>
        <hr>
        <button @click="getProductList">显示产品</button>
        <hr>
        <ul>
            <li v-for="(item,index) in products">
                类别： {{item.category}}，名称：{{item.name}}
                <button @click="bindProduct2View($event,item)">修改</button>
                <button @click="removeProduct($event,item.id)">移除</button>
            </li>
        </ul>
    </div>

    <script src="../node_modules/vue/dist/vue.js"></script>
    <script src="../node_modules/vue-router/dist/vue-router.js"></script>
    <script src="../node_modules/axios/dist/axios.js"></script>

    <script>
        // 全局配置，设置基础 url
        axios.defaults.baseURL = 'http://localhost:5000/api';

        var vm = new Vue({
            el: '#app',
            data() {
                return {
                    // 当前新增的产品信息
                    newProduct: {
                        id: null,
                        name: '',
                        category: '',
                        price: null
                    },
                    products: [],
                    isEdit: false
                };
            },
            computed: {
                // 经过处理的 product 对象，与后端类型统一，应该可以通过后端统一处理 TODO！
                postProduct() {
                    this.newProduct.id = parseInt(this.newProduct.id);
                    this.newProduct.price = parseFloat(this.newProduct.price);
                    return this.newProduct;
                }
            },
            created() {
                this.getProductList();
            },
            methods: {
                addProduct() {
                    this.isEdit = false;
                    this.newProduct.id = null;
                    this.newProduct.name = '';
                    this.newProduct.category = '';
                    this.newProduct.price = null;
                },
                getProductList(e) {
                    axios.get('/product/GetProducts')
                        .then(res => {
                            this.products = res.data;
                        })
                        .catch(err => {
                            console.error(err);
                        })
                },
                saveProduct() {
                    let url = this.isEdit ? '/product/UpdateProduct' : '/product/AddProduct';

                    if (this.newProduct.id) {
                        axios.post(url, this.postProduct)
                            .then(res => {
                                this.getProductList();
                                this.isEdit = true;
                            })
                            .catch(err => {
                                console.error(err);
                            })
                    }
                },
                bindProduct2View(e, prod) {
                    this.isEdit = true;
                    this.newProduct = prod;
                },
                removeProduct(e, id) {
                    axios.get(`/product/RemoveProduct?id=${id}`, null)
                        .then(res => {
                            this.getProductList();
                        })
                        .catch(err => {
                            console.error(err);
                        })
                }
            }
        })
    </script>
</body>
```

---

以上为常见配置，其余配置详见中文文档

> https://www.kancloud.cn/yunye/axios/234845

> http://axios-js.com/zh-cn/docs/index.html

