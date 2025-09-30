const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const fs = require("fs");
const { execSync } = require("child_process");

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
        // new MakeFileConfigPlugin(),
        new ShrinkFontsPlugin(),
    ],

    devServer: {
        static: {
            directory: path.join(__dirname, "bin"),
        },
        compress: true,
        port: 9000,
    },
});

//---------------------插件------------------

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
class ShrinkFontsPlugin {
    apply(compiler) {
        compiler.hooks.afterEmit.tap("ShrinkFontsPlugin", (compilation) => {
            try {
                // 路径根据实际情况调整
                const scriptPath = path.resolve(__dirname, "tools/ShrinkFonts.js");
                execSync(`node "${scriptPath}"`, { stdio: "inherit" });
                console.log("字体子集化已完成");
            } catch (e) {
                console.error("字体子集化失败:", e.message);
            }
        });
    }
}

class MakeFileConfigPlugin {
    apply(compiler) {
        compiler.hooks.afterEmit.tap("MakeFileConfigPlugin", (compilation) => {
            try {
                // 这里指定要生成 config 的目标目录，可根据实际情况调整
                const scriptPath = path.resolve(__dirname, "tools/MakeFileConfig.js");
                // 例如自动处理 bin/version/280/quests_icons 目录
                const targetDir = path.resolve(__dirname, "bin/version/280/quests_icons");
                execSync(`node "${scriptPath}" "${targetDir}"`, { stdio: "inherit" });
                console.log("MakeFileConfig 已完成");
            } catch (e) {
                console.error("MakeFileConfig 失败:", e.message);
            }
        });
    }
}
