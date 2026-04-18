# 🇺🇸 US Sentiment Screener · Daily Dashboard

미국장 개장 60분 전, 여론·수급 시그널을 한 눈에 보는 로컬 웹 대시보드

---

## 🚀 빠른 시작

1. **이 폴더 전체를 프로젝트 안에 복사하세요:**
   ```
   돈벌기 프로젝트/us_sentiment_screener/dashboard/
       ├─ index.html
       ├─ README.md
       └─ data/
           └─ feed.js              ← 파이프라인이 매일 덮어쓰는 파일
   ```

   > ℹ️ `data/manifest.json` 과 `data_*.json` 은 스키마 참고용으로만 남겨둔 레거시 파일이에요. 삭제해도 무방합니다.

2. **더블클릭으로 `index.html` 열기** → 다크모드 트레이딩룸 대시보드가 뜹니다.

3. **샘플 데이터가 먼저 보여요.** 월~금 21:30 KST 자동 실행 후부터 실제 데이터로 교체됩니다.

---

## 📂 폴더 구조

```
dashboard/
├─ index.html         ← 대시보드 (단일 파일, 수정 불필요)
└─ data/
   └─ feed.js         ← 모든 리포트 데이터 (스케줄 태스크가 매일 덮어쓰기)
```

**왜 `.json` 이 아니라 `.js`?** 브라우저가 file:// 프로토콜에서 `fetch()` 를 차단해요. `<script>` 태그는 허용되므로 JS 파일로 데이터를 싣습니다. 덕분에 **로컬 서버 없이 `index.html` 더블클릭만으로** 동작합니다.

---

## 🧩 구성 요소

| 섹션 | 내용 |
|------|------|
| **Market Mood** | 강세/중립/약세 + 100점 스코어 |
| **Claude 판단 순위 Top 5** | 티커 + 한 줄 근거 + 핵심 시그널 3개 |
| **4분면 매트릭스** | 여론 × 수급 산점도 (히든 엣지/핫스팟/과열/관망) |
| **섹터 히트맵** | 강도별 색상, 종목 수 표시 |
| **히든 엣지** | 여론↓ 수급↑ 종목 |
| **과열 주의** | 피크 위험 종목 |
| **TOP 20 카드** | 티커 + 총점 + Reddit/News/Trends/Options 4개 바 |
| **진입 루틴 타임라인** | KST/ET 병기, 주요 시각 하이라이트 |
| **과거 리포트 히스토리** | 사이드바에서 날짜 클릭해 비교 |

---

## 🔄 자동 업데이트 흐름

```
[월~금 21:30 KST]
  ↓
스케줄 태스크 `us-daily-sentiment-screener` 실행
  ↓
1) collect_*.py × 4 (Reddit, News, Trends, Options)
2) score.py → cache/screener_ranked.csv
3) Markdown 리포트 → reports/REPORT_YYYYMMDD.md
4) feed.js 덮어쓰기 → dashboard/data/feed.js (최근 30일 보관)
5) Notion DB 업로드
  ↓
브라우저 새로고침 → 최신 데이터 자동 로드
```

---

## 🎨 디자인 특징

- **다크모드 트레이딩룸 스타일** — 검정 배경, 네온 그린/레드
- **JetBrains Mono** 폰트로 티커 표시 (정렬 깔끔)
- **Chart.js** 기반 4분면 산점도 (티커 라벨 표시)
- **반응형** — 1400px 이상에서 4컬럼, 그 이하는 자동 축소
- 서버 불필요, 외부 의존성은 CDN 폰트 + Chart.js만

---

## 🛠️ 수동 테스트

파이프라인이 아직 안 돌았어도 대시보드 UI를 볼 수 있어요:

- `data/feed.js` 없으면 → 내장 샘플 데이터로 PREVIEW 표시
- `data/feed.js` 있으면 → `manifest.reports[0]` (최신) 자동 로드
- 사이드바에서 과거 날짜 클릭 → `archive["YYYY-MM-DD"]` 에서 꺼내 렌더링

---

## 💡 팁

- 브라우저 **북마크 바에 index.html 추가**해두면 원클릭 접근
- 크롬/Edge의 **"앱으로 설치"** (주소창 → ⊕) 기능 쓰면 별도 창으로 관리
- 파이프라인 실패한 날은 manifest에 엔트리 추가 안 되므로 대시보드가 이전 날짜를 계속 보여줌

---

## 🔧 커스터마이즈

| 바꾸고 싶은 것 | 어디서 |
|--------------|-------|
| 색상 팔레트 | `index.html` 상단 `:root` CSS 변수 |
| 점수 가중치 (매트릭스 축) | `renderMatrix()` 함수의 `sentiment`/`flow` 계산식 |
| 히스토리 최대 개수 | `renderHistory()` 의 `.slice(0, 30)` |
| 루틴 타임라인 기본값 | 스케줄 태스크 프롬프트의 `routine_timeline` 예시 |

필요하면 언제든 수정 요청주세요!
