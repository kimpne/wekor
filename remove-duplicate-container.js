const fs = require('fs');
const path = require('path');

const regions = [
  'seoul-wedding-fair',
  'gyeonggi-wedding-fair',
  'incheon-wedding-fair',
  'busan-wedding-fair',
  'daejeon-wedding-fair',
  'jeolla-wedding-fair',
  'gwangju-wedding-fair',
  'ulsan-wedding-fair',
  'ilsan-wedding-fair',
  'suwon-wedding-fair',
];

regions.forEach(region => {
  const filePath = path.join(__dirname, 'pages', `${region}.js`);
  if (!fs.existsSync(filePath)) {
    console.log(`❌ 파일 없음: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf-8');

  const regex = /<div className="container">[\s\S]*?<\/div>/g;
  const matches = [...content.matchAll(regex)];

  if (matches.length > 1) {
    console.log(`⚠️ 중복 구조 발견: ${region}.js (총 ${matches.length}개)`);

    // 첫 번째만 남기고 나머지 삭제
    const firstMatch = matches[0][0];
    content = content.replace(regex, '');
    content = content.replace('<main>', `<main>\n${firstMatch}\n`);

    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`✅ 중복 제거 완료: ${region}.js`);
  } else {
    console.log(`✅ 중복 없음 (패스): ${region}.js`);
  }
});

console.log('\n🎉 중복 구조 정리 완료');
