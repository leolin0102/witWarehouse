const webpack = require('webpack');

module.exports = {
    // 入口
    entry: "./app.js",
    // 输出的文件名
    output: {
        filename: 'app.bundle.js'
    },
    plugins:[
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
};
