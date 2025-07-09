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

const tabMenu = `
<div className="tabmenu">
  <ul>
    ${regions.map(region => `<li><a href="/${region.path}">${region.name}</a></li>`).join('\n')}
  </ul>
</div>
`;

regions.forEach(region => {
  const filePath = path.join(__dirname, 'pages', `${region.path}.js`);
  if (!fs.existsSync(filePath)) {
    console.log(`❌ 파일 없음: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf-8');

  // ✅ Head 내용 생성
  const headTag = `
      <Head>
        <title>${region.name}웨딩박람회 일정 안내 | 2025년 최신 업데이트</title>
        <meta name="description" content="${region.name} 지역의 2025년 최신 웨딩박람회 일정과 장소, 혜택을 한눈에 확인하세요." />
        <meta name="keywords" content="${region.name} 웨딩박람회, ${region.name} 결혼박람회, ${region.name} 스드메" />
        <link rel="canonical" href="https://wdkor.co.kr/${region.path}" />
        <meta property="og:title" content="${region.name}웨딩박람회 일정 안내 | 2025년 최신 업데이트" />
        <meta property="og:description" content="${region.name} 지역의 2025년 최신 웨딩박람회 일정과 장소, 혜택을 한눈에 확인하세요." />
        <meta property="og:url" content="https://wdkor.co.kr/${region.path}" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              "name": "${region.name}웨딩박람회",
              "startDate": "2025-01-01",
              "location": {
                "@type": "Place",
                "name": "${region.name} 웨딩박람회 장소"
              },
              "description": "${region.name} 지역의 2025년 최신 웨딩박람회 일정과 장소, 혜택을 한눈에 확인하세요.",
              "url": "https://wdkor.co.kr/${region.path}"
            })
          }}
        />
      </Head>
`;

  // ✅ Head 바깥에 있는 경우 제거 (비정상 Head)
  content = content.replace(/<Head>[\s\S]*?<\/Head>/, '');

  // ✅ 함수 안의 리턴 안쪽에 Head 삽입
  content = content.replace(
    /return\s*\(\s*<>/,
    `return (\n    <>\n${headTag}`
  );

  // ✅ tabmenu 수정
  content = content.replace(/<div className="tabmenu">[\s\S]*?<\/div>/, tabMenu);

  // ✅ h1 자동 정리
  content = content.replace(/<h1>.*?<\/h1>/, `<h1>${region.name}웨딩박람회 일정 안내</h1>`);

  // ✅ 필터 조건 자동화
  content = content.replace(/\.filter\(\(row\) => row\[0\] === '.*?'\)/, `.filter((row) => row[0] === '${region.name}')`);

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`✅ ${region.name} 파일 자동화 완료`);
});

console.log('\n🎉 모든 지역 SEO 자동화 + Head 위치 보정 완료');
