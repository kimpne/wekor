// remove-duplicate-header.js
const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'pages');  // Next.js 페이지 경로
const fileList = fs.readdirSync(targetDir);

fileList.forEach((file) => {
  if (file.endsWith('.js')) {
    const filePath = path.join(targetDir, file);
    let content = fs.readFileSync(filePath, 'utf-8');

    const topPattern = /<div className="top">[\s\S]*?<\/div>/;
    const tabmenuPattern = /<div className="tabmenu">[\s\S]*?<\/div>/;

    const newContent = content
      .replace(topPattern, '')  // 'top' 블록 제거
      .replace(tabmenuPattern, '');  // 'tabmenu' 블록 제거

    fs.writeFileSync(filePath, newContent, 'utf-8');
    console.log(`✅ 중복 제거 완료: ${file}`);
  }
});
