const path = require("path");
const fs = require("fs");
const zlib = require("zlib");

/**
 * 遍历目录，生成 key->相对路径 映射，并为每个 json 生成 gtbl 压缩文件
 * @param {string} dirPath 目录路径
 * @returns {object} 配置对象
 */
function makeFileConfig(dirPath) {
    dirPath = path.resolve(__dirname, dirPath);
    if (!fs.existsSync(dirPath) || !fs.statSync(dirPath).isDirectory()) {
        console.error("目录不存在:", dirPath);
        return;
    }
    const config = {};

    /**
     * 生成 gtbl 文件
     * @param {string} jsonPath
     * @param {string} str
     */
    function createGtblFromJson(jsonPath, str) {
        try {
            const gz = zlib.gzipSync(Buffer.from(str));
            const gtblPath = jsonPath.replace(/\.json$/i, ".gtbl");
            fs.writeFileSync(gtblPath, gz);
            console.log(`已生成压缩二进制: ${gtblPath}`);
        } catch (e) {
            console.error("生成 gtbl 失败:", jsonPath, e.message);
        }
    }

    /**
     * 递归遍历目录
     * @param {string} dir
     */
    function readDir(dir) {
        for (const file of fs.readdirSync(dir)) {
            const fullPath = path.join(dir, file);
            const stat = fs.statSync(fullPath);
            if (stat.isFile() && path.extname(file).toLowerCase() === ".json") {
                let str = fs.readFileSync(fullPath, "utf8");
                createGtblFromJson(fullPath, str);
                try {
                    const data = JSON.parse(str);
                    for (const key in data) {
                        // 生成相对路径，兼容多平台
                        const relPath = path
                            .relative(dirPath, fullPath)
                            .replace(/\\/g, "/")
                            .replace(/\.json$/i, "");
                        config[key] = relPath;
                    }
                } catch (e) {
                    console.error("JSON 解析错误:", fullPath, e.message);
                }
            } else if (stat.isDirectory()) {
                readDir(fullPath);
            }
        }
    }

    readDir(dirPath);

    const configPath = dirPath + ".json";
    fs.writeFileSync(configPath, JSON.stringify(config, null, 4), "utf8");
    console.log("已生成配置文件:", configPath);
    return config;
}

// 任务列表的路径
// quests_icons/QuestLineIcon/${quest.quest}.png
// echat的图标路径
// quests_icons/QuestIcon/608.png

if (require.main === module) {
    // 示例：node tools/MakeFileConfig.js ../bin/version/280/quests_icons
    const folder = process.argv[2];
    if (!folder) {
        console.log("用法: node tools/MakeFileConfig.js <图片文件夹路径>");
        process.exit(1);
    }
    makeFileConfig(folder);
}
