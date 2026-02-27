// tools/FixCacheConfig.js
// 用于修复缓存配置文件

const path = require("path");
const fs = require("fs");

const versionDir = path.resolve(__dirname, "../bin/version");
const cacheConfig = path.resolve(__dirname, "../bin/cache-config.json");

function readVersionFile() {
    let paths = [];

    let readDir = (dir) => {
        const files = fs.readdirSync(dir);
        for (const file of files) {
            const full = path.join(dir, file);
            const stat = fs.statSync(full);
            if (stat.isDirectory()) {
                readDir(full);
            } else if (file.endsWith(".json") || file.endsWith(".gtbl")) {
                paths.push("./version/" + path.relative(versionDir, full).replace(/\\/g, "/"));
            }
        }
    };
    readDir(versionDir);

    return paths;
}

function fixCacheConfig() {
    const paths = readVersionFile();
    let oldConfig = fs.readFileSync(cacheConfig, "utf8");
    let oldObject = JSON.parse(oldConfig);

    oldObject.urlsToCache = oldObject.baseUrlsToCache.concat(paths);

    fs.writeFileSync(cacheConfig, JSON.stringify(oldObject, null, 2), "utf8");
    console.log("已经同步版本目录下的文件到缓存配置中");
}


fixCacheConfig();