const path = require("path");
const fs = require("fs");

function makeFileConfig(dirPath) {
    dirPath = path.resolve(__dirname, dirPath);
    if (!fs.existsSync(dirPath) || !fs.statSync(dirPath).isDirectory()) {
        console.error("目录不存在:", dirPath);
        return;
    }
    let config = {};

    function readDir(dir) {
        fs.readdirSync(dir).forEach((file) => {
            const fullPath = path.join(dir, file);
            if (fs.statSync(fullPath).isFile()) {
                if (path.extname(file).toLowerCase() === ".json") {
                    let str = fs.readFileSync(fullPath, "utf8");
                    try {
                        let data = JSON.parse(str);
                        for (let key in data) {
							let relPath = path.relative(dirPath, fullPath).replace(/\\/g, "/").replace(/\.json$/i, "");
                            config[key] = relPath;
                        }
                    } catch (e) {
                        console.error("JSON 解析错误:", fullPath, e.message);
                        return;
                    }
                }
            } else if (fs.statSync(fullPath).isDirectory()) {
                readDir(fullPath);
            }
        });
    }

	readDir(dirPath);

    fs.writeFileSync(dirPath+ ".json", JSON.stringify(config, null, 4), "utf8");
    console.log("已生成配置文件:", path.join(dirPath, ".json"));
    return config;
}

//任务列表的路径
//quests_icons/QuestLineIcon/${quest.quest}.png
//echat的图标路径
//quests_icons/QuestIcon/608.png

if (require.main === module) {
    // 示例：node tools/MakeFileConfig.js ../bin/version/280/quests_icons
    const folder = process.argv[2];
    if (!folder) {
        console.log("用法: node tools/MakeFileConfig.js <图片文件夹路径>");
        process.exit(1);
    }
    makeFileConfig(folder);
}
