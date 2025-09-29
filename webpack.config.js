const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const fs = require("fs");



class DeleteFilesAfterEmitPlugin {
    apply(compiler) {
        compiler.hooks.afterEmit.tap("DeleteFilesAfterEmitPlugin", (compilation) => {
            const filesToDelete = [
                path.resolve(__dirname, "bin", "desktop.js"),
                path.resolve(__dirname, "bin", "desktop.js.map"),
                path.resolve(__dirname, "bin", "desktop.css.map"),
                path.resolve(__dirname, "bin", "mobile.js"),
                path.resolve(__dirname, "bin", "mobile.js.map"),
                path.resolve(__dirname, "bin", "mobile.css.map"),
            ];
            filesToDelete.forEach((file) => {
                if (fs.existsSync(file)) {
                    fs.unlinkSync(file);
                    console.log(`Deleted: ${file}`);
                }
            });
        });
    }
}

module.exports = (env, argv) => ({
    entry: {
        desktop: "./src/css/desktop/index.scss", // desktop.scss 入口
        mobile: "./src/css/mobile/index.scss", // mobile.scss 入口
        bundle: "./src/index.ts", // 主入口文件
    },
    output: {
        filename: "[name].js", // 输出文件名
        path: path.resolve(__dirname, "bin"), // 输出目录
    },
    resolve: {
        extensions: [".ts", ".js"], // 解析的文件扩展名
    },
    devtool: argv.mode === "development" ? "source-map" : false, // 根据模式设置 devtool
    module: {
        rules: [
            {
                test: /\.ts$/, // 匹配所有的 .ts 文件
                use: "ts-loader", // 使用 ts-loader 进行处理
                exclude: /node_modules/, // 排除 node_modules 目录
            },
            {
                test: /\.scss$/, // 匹配所有的 .scss 文件
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css", // 输出的 CSS 文件名
        }),
        new DeleteFilesAfterEmitPlugin(), // 构建后删除指定文件
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, "bin"),
        },
        compress: true,
        port: 9000,
    },
});
