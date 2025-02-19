const path = require('path');

module.exports = {
    entry: './bin/js/index.js', // 入口文件
    output: {
        filename: 'bundle.js', // 输出的 bundle 文件名
        path: path.resolve(__dirname, 'bin'), // 输出目录
    },
	mode: 'development', // 开发模式
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
};