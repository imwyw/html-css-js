<!-- TOC -->

- [提升](#提升)
    - [定时器](#定时器)
        - [setTimeout()](#settimeout)
        - [setInterval()](#setinterval)
        - [clearTimeout()，clearInterval()](#cleartimeoutclearinterval)
    - [HTML5 本地存储 localStorage](#html5-本地存储-localstorage)
        - [什么是 HTML 本地存储？](#什么是-html-本地存储)
        - [HTML 本地存储对象](#html-本地存储对象)
        - [localStorage 对象](#localstorage-对象)
            - [对象的保存](#对象的保存)
        - [sessionStorage 对象](#sessionstorage-对象)
    - [音频](#音频)
    - [视频](#视频)

<!-- /TOC -->
<a id="markdown-提升" name="提升"></a>
# 提升
<a id="markdown-定时器" name="定时器"></a>
## 定时器
JavaScript提供定时执行代码的功能，叫做定时器（timer），主要由setTimeout()和setInterval()这两个函数来完成。它们向任务队列添加定时任务。

<a id="markdown-settimeout" name="settimeout"></a>
### setTimeout()
setTimeout函数用来指定某个函数或某段代码，在多少毫秒之后执行。它返回一个整数，表示定时器的编号，以后可以用来取消这个定时器。

```js
//setTimeout函数接受两个参数，第一个参数func|code是将要推迟执行的函数名或者一段代码，第二个参数delay是推迟执行的毫秒数。
var timerId = setTimeout(func|code, delay);
```

```js
//语句需要以字符串形式出现，因为引擎内部使用eval函数，将字符串转为代码。此方式不做推荐
setTimeout('alert("TimeOut")', 2000);

//推荐这种方式，以函数名方式传参
setTimeout(f, 2000);

function f() {
    alert('TimeOut');
}
```

<a id="markdown-setinterval" name="setinterval"></a>
### setInterval()
setInterval函数的用法与setTimeout完全一致，区别仅仅在于setInterval指定某个任务每隔一段时间就执行一次，也就是无限次的定时执行。
```js
//每隔2s打印一次当前时间
setInterval(f, 2000);

function f() {
    console.log(new Date());
}
```

<a id="markdown-cleartimeoutclearinterval" name="cleartimeoutclearinterval"></a>
### clearTimeout()，clearInterval()
setTimeout和setInterval函数，都返回一个表示计数器编号的整数值，将该整数传入clearTimeout和clearInterval函数，就可以取消对应的定时器。

```js
var id1 = setTimeout(f,1000);
var id2 = setInterval(f,1000);

clearTimeout(id1);
clearInterval(id2);
```

<a id="markdown-html5-本地存储-localstorage" name="html5-本地存储-localstorage"></a>
## HTML5 本地存储 localStorage
<a id="markdown-什么是-html-本地存储" name="什么是-html-本地存储"></a>
### 什么是 HTML 本地存储？
通过本地存储（Local Storage），web 应用程序能够在用户浏览器中对数据进行本地的存储。

在 HTML5 之前，应用程序数据只能存储在 cookie 中，包括每个服务器请求。

本地存储则更安全，并且可在不影响网站性能的前提下将大量数据存储于本地。

与 cookie 不同，存储限制要大得多（至少5MB），并且信息不会被传输到服务器，所有页面均可以访问。

<a id="markdown-html-本地存储对象" name="html-本地存储对象"></a>
### HTML 本地存储对象
HTML 本地存储提供了两个在客户端存储数据的对象：
* window.localStorage - 存储没有截止日期的数据
* window.sessionStorage - 针对一个 session 来存储数据（当关闭浏览器标签页时数据会丢失）

<a id="markdown-localstorage-对象" name="localstorage-对象"></a>
### localStorage 对象
localStorage 对象存储的是没有截止日期的数据。

当浏览器被关闭时数据不会被删除，在下一天、周或年中，都是可用的。

名称/值对始终存储为字符串。如果需要请记得把它们转换为其他格式！

```js
// 存储
localStorage.setItem("lastname", "Gates");
// 取回
document.getElementById("result").innerHTML = localStorage.getItem("lastname");

// 存储  这种写法和上面也是等效的
localStorage.lastname = "Gates";

//删除
localStorage.removeItem("lastname");
```

下面的例子对用户点击按钮的次数进行计数。在代码中，值字符串被转换为数值，依次对计数进行递增：
```js
if (localStorage.clickcount) {
    localStorage.clickcount = Number(localStorage.clickcount) + 1;
} else {
    localStorage.clickcount = 1;
}
document.getElementById("result").innerHTML = "您已经点击这个按钮 " +
localStorage.clickcount + " 次。";
```

<a id="markdown-对象的保存" name="对象的保存"></a>
#### 对象的保存
由于只能保存字符串的关系，在保存对象需要进行一步转换，转换为json字符串
```js
//定义对象
var obj = {
    name: '狗子',
    age: 1,
    isSwiming: true,
    sayHi: function () {
        console.log('汪汪汪');
    }
};
//序列化为字符串，保存到localStorage
localStorage.dog = JSON.stringify(obj);

//获取并转换为对象
var newObj = JSON.parse(localStorage.dog);
```

<a id="markdown-sessionstorage-对象" name="sessionstorage-对象"></a>
### sessionStorage 对象
sessionStorage 对象等同 localStorage 对象，不同之处在于只对一个 session 存储数据。
如果用户关闭具体的浏览器标签页，数据也会被删除。

下例在当前 session 中对用户点击按钮进行计数：
```js
if (sessionStorage.clickcount) {
    sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
} else {
    sessionStorage.clickcount = 1;
}
document.getElementById("result").innerHTML = "在本 session 中，您已经点击这个按钮 " +
sessionStorage.clickcount + " 次。";
```

参考引用：

[w3school HTML 本地存储](http://www.w3school.com.cn/html/html5_webstorage.asp)

<a id="markdown-音频" name="音频"></a>
## 音频

```html
<audio src="../resource/xxx.mp3" controls="controls"></audio>
```

`<audio>`标签属性：

属性 | 值 | 描述
---|---|---
autoplay | autoplay | 如果出现该属性，则音频在就绪后马上播放。
controls | controls | 如果出现该属性，则向用户显示控件，比如播放按钮。
loop | loop | 如果出现该属性，则每当音频结束时重新开始播放。
preload | preload | 如果出现该属性，则音频在页面加载时进行加载，并预备播放。如果使用 "autoplay"，则忽略该属性。
src | url | 要播放的音频的 URL。

<a id="markdown-视频" name="视频"></a>
## 视频

```html
<audio src="../resource/xxx.mp4" controls="controls"></audio>
```

HTML5 中的新属性：

属性 | 值 | 描述
---|---|---
autoplay | autoplay | 如果出现该属性，则视频在就绪后马上播放。
controls | controls | 如果出现该属性，则向用户显示控件，比如播放按钮。
height | pixels | 设置视频播放器的高度。
loop | loop | 如果出现该属性，则当媒介文件完成播放后再次开始播放。
muted | muted | 规定视频的音频输出应该被静音。
poster | URL | 规定视频下载时显示的图像，或者在用户点击播放按钮前显示的图像。
preload | preload |  如果出现该属性，则视频在页面加载时进行加载，并预备播放。如果使用 "autoplay"，则忽略该属性。
src | url | 要播放的视频的 URL。
width | pixels | 设置视频播放器的宽度。



参考引用：

[w3school HTML 5 音频](http://www.w3school.com.cn/html5/html_5_audio.asp)