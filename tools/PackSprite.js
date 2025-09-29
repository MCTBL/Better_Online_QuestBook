const sharp = require("sharp");
const path = require("path");
const fs = require("fs");
/**
 * 使用 sharp 打包指定文件夹下所有图片为图集，最大尺寸2048x2048，输出到同级目录，文件名为文件夹名
 * 并导出对应 JSON（含每张图片在图集中的位置和尺寸）
 * @param {string} folderPath 需要打包的图片文件夹绝对路径
 */

const zlib = require("zlib");

/**
 * 输入文件夹路径，将所有图片压缩（默认配置），转为base64，导出同名json，再用zlib压缩为gtbl二进制文件
 * @param {string} folderPath
 */
async function packFolderToBase64Gtbl(folderPath) {
    folderPath = path.resolve(__dirname, folderPath);
    if (!fs.existsSync(folderPath) || !fs.statSync(folderPath).isDirectory()) {
        console.error("文件夹不存在:", folderPath);
        return;
    }
    const folderName = path.basename(folderPath);
    const parentDir = path.dirname(folderPath);
    const outputJson = path.join(parentDir, folderName + ".json");
    const outputGtbl = path.join(parentDir, folderName + ".gtbl");
    // 获取所有图片文件
    const exts = [".png", ".jpg", ".jpeg", ".gif", ".bmp", ".webp"];
    const files = fs
        .readdirSync(folderPath)
        .filter((f) => exts.includes(path.extname(f).toLowerCase()))
        .map((f) => path.join(folderPath, f));
    if (files.length === 0) {
        console.warn("没有找到图片文件:", folderPath);
        return;
    }
    // 压缩并转base64
    const json = {};
    for (const file of files) {
        const name = path.basename(file);
        // 默认配置压缩为png
        const buf = await sharp(file).png({ compressionLevel: 6 }).toBuffer();
        json[name] =  buf.toString("base64");
    }
    fs.writeFileSync(outputJson, JSON.stringify(json, null, 2), "utf8");
    // zlib压缩json
    const gz = zlib.gzipSync(Buffer.from(JSON.stringify(json)));
    fs.writeFileSync(outputGtbl, gz);
    console.log(`已生成: ${outputJson} 以及压缩二进制: ${outputGtbl}`);
}



if (require.main === module) {
    // 示例：node tools/PackSprite.js ../bin/version/280/quests_icons/QuestLineIcon
    const folder = process.argv[2];
    if (!folder) {
        console.log('用法: node tools/PackSprite.js <图片文件夹路径>');
        process.exit(1);
    }
    packFolderToBase64Gtbl(folder);
}

// 导出方法
module.exports = { packFolderToBase64Gtbl };
