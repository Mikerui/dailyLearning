var webpack = require('webpack');
module.exports = {
    mode: 'development', // 开发模式不压缩代码，方便调试
    entry: __dirname+'/js/index.js', // 入口文件
    output: {
        path: __dirname+'/dist',
        filename: 'bundle.[hash].js'
    },
    module: {
        loaders: [
            {test: /\.less$/, use: ["style-loader", "css-loader", "less-loader","postcss-loader"]},
            {test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192'},
            {test: /\.svg/, loader: 'svg-url-loader'}
        ]
    }
};