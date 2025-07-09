const fs = require('fs');
const path = require('path');

const regions = [
  { name: '서울', path: 'seoul-wedding-fair' },
  { name: '경기', path: 'gyeonggi-wedding-fair' },
  { name: '인천', path: 'incheon-wedding-fair' },
  { name: '부산', path: 'busan-wedding-fair' },
  { name: '대전', path: 'daejeon-wedding-fair' },
  { name: '전라도', path: 'jeolla-wedding-fair' },
  { name: '광주', path: 'gwangju-wedding-fair' },
  { name: '울산', path: 'ulsan-wedding-fair' },
  { name: '일산', path: 'ilsan-wedding-fair' },
  { name: '수원', path: 'suwon-wedding-fair' },
];

regions.forEach(region => {
  const filePath = path.join(__dirname, 'pages', `${region.path}.js`);
  if (!fs.existsSync(filePath)) {
    console.log(`❌ 파일 없음: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf-8');

  // ✅ 이미 <div className="container"> 가 있는지 검사
  if (!content.includes('<div className="container">')) {
    // 삽입
    content = content.replace(/<main>/, '<main>\n  <div className="container">');
    content = content.replace(/(<InternalLinks\s*\/>)/, `$1\n  </div>`);
    console.log(`✅ 구조 삽입됨: ${region.path}.js`);
  } else {
    console.log(`⚠️ 이미 구조 삽입됨 (패스): ${region.path}.js`);
  }

  fs.writeFileSync(filePath, content, 'utf-8');
});

console.log('\n🎉 구조 자동화 완료 (중복 삽입 방지 포함)');
