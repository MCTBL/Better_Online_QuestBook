const fs = require('fs');
const path = require('path');

// 获取命令行参数
const targetFolder = process.argv[2];
const outputFolder = process.argv[3];

if (!targetFolder || !outputFolder) {
    console.error('请提供目标文件夹名字和输出文件夹路径');
    process.exit(1);
}

// 获取输出文件名
const outputFileName = path.basename(targetFolder) + '.json';
const outputPath = path.join(outputFolder, outputFileName);

// 读取目标文件夹中的所有JSON文件
fs.readdir(targetFolder, (err, files) => {
    if (err) {
        console.error('无法读取目标文件夹:', err);
        process.exit(1);
    }

    const jsonFiles = files.filter(file => path.extname(file) === '.json');
    const mergedData = {};

    jsonFiles.forEach(file => {
        const filePath = path.join(targetFolder, file);
        const fileData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        const fileNameWithoutExt = path.basename(file, '.json');
        mergedData[fileNameWithoutExt] = fileData;
    });

    // 将合并后的数据写入输出路径
    fs.writeFileSync(outputPath, JSON.stringify(mergedData, null, 2), 'utf8');
    console.log('JSON文件已成功合并并输出到:', outputPath);
});

// 运行命令
// node tools/PackJson.js ./bin/version/272/quest_json  ./bin/version/272