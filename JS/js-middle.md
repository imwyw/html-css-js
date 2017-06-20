# 提升
## HTML5 本地存储 localStorage
### 什么是 HTML 本地存储？
通过本地存储（Local Storage），web 应用程序能够在用户浏览器中对数据进行本地的存储。
在 HTML5 之前，应用程序数据只能存储在 cookie 中，包括每个服务器请求。
本地存储则更安全，并且可在不影响网站性能的前提下将大量数据存储于本地。
与 cookie 不同，存储限制要大得多（至少5MB），并且信息不会被传输到服务器。
本地存储经由起源地（origin）（经由域和协议）。所有页面，从起源地，能够存储和访问相同的数据。

### HTML 本地存储对象
HTML 本地存储提供了两个在客户端存储数据的对象：
* window.localStorage - 存储没有截止日期的数据
* window.sessionStorage - 针对一个 session 来存储数据（当关闭浏览器标签页时数据会丢失）

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

## 音频
### Web 上的音频
直到现在，仍然不存在一项旨在网页上播放音频的标准。
今天，大多数音频是通过插件（比如 Flash）来播放的。然而，并非所有浏览器都拥有同样的插件。
HTML5 规定了一种通过 audio 元素来包含音频的标准方法。
audio 元素能够播放声音文件或者音频流。

### 如何工作
```html
<audio src="song.ogg" controls="controls">
</audio>
```

`<audio>`标签属性：

属性 | 值 | 描述
---|---|---
autoplay | autoplay | 如果出现该属性，则音频在就绪后马上播放。
controls | controls | 如果出现该属性，则向用户显示控件，比如播放按钮。
loop | loop | 如果出现该属性，则每当音频结束时重新开始播放。
preload | preload | 
如果出现该属性，则音频在页面加载时进行加载，并预备播放。
如果使用 "autoplay"，则忽略该属性。
src | url | 要播放的音频的 URL。



参考引用：

[w3school HTML 5 音频](http://www.w3school.com.cn/html5/html_5_audio.asp)