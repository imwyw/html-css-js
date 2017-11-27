<!-- TOC -->

- [Bootstrap](#bootstrap)
    - [OfficialSite](#officialsite)
    - [Basic Template](#basic-template)
    - [初体验](#初体验)

<!-- /TOC -->

<a id="markdown-bootstrap" name="bootstrap"></a>
# Bootstrap
<a id="markdown-officialsite" name="officialsite"></a>
## OfficialSite
> https://getbootstrap.com/docs/3.3/

> http://v3.bootcss.com

<a id="markdown-basic-template" name="basic-template"></a>
## Basic Template
>https://getbootstrap.com/docs/3.3/getting-started/

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- 移动设备需要的声明 -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Bootstrap 101 Template</title>

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
    <h1>Hello, world!</h1>

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
  </body>
</html>
```

<a id="markdown-初体验" name="初体验"></a>
## 初体验
```html
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Bootstrap</title>
    <meta charset="utf-8" />
    <!-- 移动设备需要的声明 -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="Content/bootstrap.min.css" rel="stylesheet" />
    <script src="Scripts/jquery-3.2.1.min.js"></script>
    <script src="Scripts/bootstrap.min.js"></script>
</head>
<body>
    <div class="container">
        <div class="jumbotron">
            <h1>我的第一个 Bootstrap 页面</h1>
            <p>重置窗口大小，查看响应式效果！</p>
        </div>
        <div class="row">
            <div class="col-sm-4">
                <h3>Column 1</h3>
                <p>学的不仅是技术，更是梦想！</p>
                <p>再牛逼的梦想,也抵不住你傻逼似的坚持！</p>
            </div>
            <div class="col-sm-4">
                <h3>Column 2</h3>
                <p>学的不仅是技术，更是梦想！</p>
                <p>再牛逼的梦想,也抵不住你傻逼似的坚持！</p>
            </div>
            <div class="col-sm-4">
                <h3>Column 3</h3>
                <p>学的不仅是技术，更是梦想！</p>
                <p>再牛逼的梦想,也抵不住你傻逼似的坚持！</p>
            </div>
        </div>
    </div>
</body>
</html>
```