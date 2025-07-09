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
    console.log(`❌ 파일 없음: ${region.path}.js`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf-8');

  // ✅ a 태그 누락 닫기 자동 복구
  content = content.replace(/<\/div>\s*<\/main>/g, '</div>\n</a>\n</main>');
  content = content.replace(/<\/div>\s*<\/>\s*\);/g, '</div>\n</a>\n</>\n);');

  // ✅ container div 누락 시 추가
  if (!content.includes('<div className="container">')) {
    content = content.replace(
      /<main>/,
      '<main>\n  <div className="container">'
    );
  }
  if (!content.includes('</div> {/* container */}')) {
    content = content.replace(
      /<InternalLinks \/>/,
      '<InternalLinks />\n  </div> {/* container */}'
    );
  }

  // ✅ main 닫기 누락 시 추가
  if (!content.includes('</main>')) {
    content = content.replace(
      /<\/div> {/* container */}/,
      '</div> {/* container */}\n</main>'
    );
  }

  // ✅ 포맷팅 정리 (너무 많은 공백 제거)
  content = content.replace(/\n{3,}/g, '\n\n');

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`✅ 구조 자동 수정 완료: ${region.path}.js`);
});

console.log('\n🎉 모든 파일 구조 자동 복구 완료 (a 닫기 + container div 정리)');
