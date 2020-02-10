// Node内置的path模块，用于路径相关操作
const path = require('path');

// 注意是 exports ，带s！！！
module.exports = {
    // 入口
    entry: {
        app: './src/index.js'
    },
    output: {
        // 打包输出的文件名
        filename: 'main.js',
        // 打包输出的绝对路径，__dirname 系统变量，当前根路径，path.resolve 相对路径变绝对路径
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development', // 开发模式，不会混淆压缩打包代码
    module: {
        rules: [
            {
                test: /\.css&/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}