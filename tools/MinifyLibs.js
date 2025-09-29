const fs = require("fs");
const path = require("path");
const Terser = require("terser");


function minifyLibs(sourcePath, targetPath) {
    sourcePath = path.resolve(__dirname, sourcePath);
    targetPath = path.resolve(__dirname, targetPath);
    if (!fs.existsSync(sourcePath)) {
        console.warn(`Directory not found: ${sourcePath}`);
        return;
    }

    const file = fs.readFileSync(sourcePath, "utf8");
    if (file) {
        Terser.minify(file).then((result) => {
            if (result.code) {
                fs.writeFileSync(targetPath, result.code, "utf8");
                console.log("压缩完成：", targetPath);
            }
        });
    }
}

if (require.main === module) {
    // 示例：node tools/MinifyLibs.js ../bin/libs/echarts.dev.js ../bin/libs/echarts.min.js
    const source = process.argv[2];
    const target = process.argv[3];
    if (!source || !target) {
        console.log("用法: node tools/MinifyLibs.js <源文件路径> <目标文件路径>");
        process.exit(1);
    }

    minifyLibs(source, target);
}

module.exports = minifyLibs;
