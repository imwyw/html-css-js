// 导入lodash库
import _ from 'lodash';
// 导入样式
import './style.css';

function component() {
    var element = document.createElement('div');

    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    // 添加元素样式
    element.classList.add('hello');

    return element;
}

document.body.appendChild(component());
