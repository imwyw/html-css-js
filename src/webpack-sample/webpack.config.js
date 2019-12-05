// Node内置的path模块，用于路径相关操作
const path = require('path');
// 默认将会在 output.path 的目录下创建一个 index.html 文件， 并在这个文件中插入一个 script 标签，标签的 src 为 output.filename。
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
// 用于清理dist文件夹插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); 

module.exports = {
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Output Management'
        })
    ],
    output: {
        filename: '[name].bundle.js',
        // __dirname 系统变量，当前根路径
        path: path.resolve(__dirname, 'dist')
    }
};