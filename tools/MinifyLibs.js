const fs = require("fs");
const path = require("path");
const Terser = require("terser");

// 压缩 bin/libs 目录下所有 js 文件
function minifyLibs(sourcePath,targetPath) {
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

module.exports = minifyLibs;
