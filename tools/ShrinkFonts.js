// tools/ShrinkFonts.js
// 用于扫描 bin 目录下所有 .js/.json/.html/.css 文件，统计用到的字符，并对子集化 bin 下所有 woff2 字体

const path = require('path');
const fs = require('fs');
// 不再需要 fonteditor-core，直接用 fontmin 处理 ttf 源文件
const Fontmin = require('fontmin');
const wawoff2 = require('fontmin-wawoff2');

const BIN_DIR = path.resolve(__dirname, '../bin');

// 递归扫描所有目标文件，收集字符
function collectUsedChars(dir, exts, chars = new Set()) {
    for (const file of fs.readdirSync(dir)) {
        const full = path.join(dir, file);
        const stat = fs.statSync(full);
        if (stat.isDirectory()) {
            collectUsedChars(full, exts, chars);
        } else if (exts.includes(path.extname(file).toLowerCase())) {
            const content = fs.readFileSync(full, 'utf8');
            for (const ch of content) chars.add(ch);
        }
    }
    return chars;
}

// 子集化 ttf 源文件，生成精简 woff2 并覆盖 bin 目录下原 woff2 文件
function subsetTtfFontsAndOverwriteWoff2(ttfFiles, usedChars, binDir) {
    // 1. 扫描 bin 下所有 woff2 文件
    const woff2Files = [];
    function findWoff2(dir) {
        for (const file of fs.readdirSync(dir)) {
            const full = path.join(dir, file);
            const stat = fs.statSync(full);
            if (stat.isDirectory()) findWoff2(full);
            else if (file.toLowerCase().endsWith('.woff2')) woff2Files.push(full);
        }
    }
    findWoff2(binDir);
    if (woff2Files.length === 0) {
        console.log('未找到 woff2 字体文件');
        return;
    }
    console.log('将覆盖以下 woff2 文件:');
    woff2Files.forEach(f => console.log('  ' + f));

    // 2. 用第一个 ttf 源文件对子集化所有 woff2（如有多个 ttf 可扩展为匹配同名）
    const text = Array.from(usedChars).join('');
    const ttfPath = ttfFiles[0];
    for (const woff2Path of woff2Files) {
        const fontmin = new Fontmin()
            .src(ttfPath)
            .use(Fontmin.glyph({ text }))
            .use(wawoff2())
            .run((err, files) => {
                if (err) {
                    console.error('字体处理失败:', woff2Path, err.message);
                } else {
                    // 只取 woff2 文件内容覆盖原文件
                    for (const file of files) {
                        if (file.path.endsWith('.woff2')) {
                            fs.writeFileSync(woff2Path, file.contents);
                            console.log('已覆盖字体:', woff2Path);
                        }
                    }
                }
            });
    }
}


function main() {
    const exts = ['.js', '.json', '.html', '.css'];
    const usedChars = collectUsedChars(BIN_DIR, exts);
    if (usedChars.size === 0) {
        console.log('未在 bin 目录下找到任何目标文件或字符');
        return;
    }
    console.log('共收集到字符数:', usedChars.size);
    // 搜索所有 ttf 源文件（如 fonts/*.ttf）
    const fontsDir = path.resolve(__dirname, '../fonts');
    let ttfFiles = [];
    if (fs.existsSync(fontsDir)) {
        ttfFiles = fs.readdirSync(fontsDir)
            .filter(f => f.toLowerCase().endsWith('.ttf'))
            .map(f => path.join(fontsDir, f));
    }
    if (ttfFiles.length === 0) {
        console.log('未找到字体源文件（fonts/*.ttf）');
        return;
    }
    subsetTtfFontsAndOverwriteWoff2(ttfFiles, usedChars, BIN_DIR);
}

if (require.main === module) {
    main();
}
