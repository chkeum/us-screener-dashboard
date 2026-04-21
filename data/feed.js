// ============================================================
// US Screener Dashboard · Data Feed (v2 schema)
// ============================================================
// 이 파일은 스케줄 태스크(us-daily-sentiment-screener)가 매일 덮어씁니다.
// 구조: window.__SCREENER_FEED__ = { manifest, archive }
//   manifest.reports: 최신순 리포트 메타 (사이드바 히스토리)
//   archive["YYYY-MM-DD"]: 일자별 전체 리포트 데이터
// 보관: 최근 30일만 archive에 유지
// ============================================================

window.__SCREENER_FEED__ = {
  manifest: {
    version: 2,
    reports: [
      { date: "2026-04-22", top_ticker: "TSLA", mood: "cautious" },
      { date: "2026-04-17", top_ticker: "TSLA", mood: "bullish" }
    ]
  },
  archive: {
    "2026-04-22": {
      date: "2026-04-22",
      date_display: "2026-04-22 (수·미국장 프리뷰 — TSLA 실적 D-Day)",
      market_mood: "cautious",
      market_mood_score: 52,
      market_summary: "월요 4/20 S&P -0.24% (7,109), Nasdaq -0.26% (24,404) — 이란 사태로 13연승 끊김. 화요 4/21 이란 2차 평화협상 기대감으로 반등 (+0.6%). 오늘 수요일 최대 이벤트는 **TSLA Q1 실적 (장 후 발표)** — 옵션 IV 75로 ±7% 움직임 내재. 지수 방향성보다 이벤트 드리븐 구간이에요.",
      sector_tilt: ["Auto (EV)", "Semiconductors", "Space/Comm"],
      top_ticker: "TSLA",
      candidate_count: 20,

      today_action: {
        one_liner: "오늘 장 후 TSLA Q1 실적 발표 — 예상 매출 $21.9B, EPS $0.36. **실적 전 나체 롱/숏 절대 금지**, 콜 스프레드 또는 실적 후 갭 후 진입이 정답이에요. AAPL은 Ternus CEO 뉴스로 약세 지속, 지지 $243 확인 필요.",
        priorities: [
          { icon: "⚡", ticker: "TSLA", text: "장 후 Q1 실적 · IV 75 — 나체 롱 금지. 이벤트 매수자는 $420/$430 콜 스프레드, 자연 매수자는 실적 후 갭다운 $375~380 분할진입" },
          { icon: "📉", ticker: "AAPL", text: "Ternus CEO 지명 -0.6% → $243 지지 테스트, 깨지면 $240까지 · 추격매수 금지" },
          { icon: "🎯", ticker: "NBIS", text: "AI 인프라 Hidden Edge · 옵션 C/P 3.1 + 스마트머니 0.85 · $78~80 1차 분할진입 유리" }
        ]
      },

      routine_timeline: [
        { time_kst: "21:30", time_et: "08:30", label: "스크리너 리포트 완성, 오늘 실적 일정 재확인", active: true },
        { time_kst: "22:00", time_et: "09:00", label: "OCO 주문 사전 세팅 (TSLA 제외)" },
        { time_kst: "22:30", time_et: "09:30", label: "🔔 미국장 개장 · 초기 5분 관망", key: true },
        { time_kst: "22:35", time_et: "09:35", label: "이벤트 없는 종목(MU, NBIS, RKLB) 분할 진입" },
        { time_kst: "00:00", time_et: "11:00", label: "중간 리밸런싱 체크, 익절 부분 실현" },
        { time_kst: "05:00", time_et: "16:00", label: "🚨 TSLA 실적 직전 · 나체 롱/숏 전량 정리 필수", key: true },
        { time_kst: "05:10", time_et: "16:10", label: "🔔 TSLA Q1 실적 발표 (차량인도, FSD, 로보택시 가이던스)", key: true },
        { time_kst: "06:00", time_et: "17:00", label: "실적 반응 확인 · 큰 포지션은 다음날로 보류" }
      ],

      sectors: [
        { name: "Auto (EV)",       strength: 0.62, ticker_count: 1 },
        { name: "Consumer Tech",   strength: 0.48, ticker_count: 1 },
        { name: "AI Software",     strength: 0.72, ticker_count: 4 },
        { name: "Space/Comm",      strength: 0.78, ticker_count: 2 },
        { name: "Semiconductors",  strength: 0.62, ticker_count: 4 },
        { name: "Fintech",         strength: 0.54, ticker_count: 2 },
        { name: "Social/Platform", strength: 0.52, ticker_count: 2 },
        { name: "Crypto-related",  strength: 0.40, ticker_count: 1 },
        { name: "Energy",          strength: 0.28, ticker_count: 1 }
      ],

      claude_ranking: [
        { rank: 1, ticker: "TSLA", reasoning: "오늘 장 후 Q1 실적 — 이벤트 드리븐 최우선 관찰, 단 포지션 극도 제한", signals: ["Q1 earnings AMC", "IV 75%", "Robotaxi update expected"] },
        { rank: 2, ticker: "NBIS", reasoning: "Hidden Edge — AI 인프라 스마트머니 매집 지속, 뉴스 선행 기관 포지션", signals: ["Block trades x5", "Options C/P 3.1", "Smart money 0.85"] },
        { rank: 3, ticker: "MU",   reasoning: "HBM 수요 + 메모리 사이클 반등 + 5월 투자자의 날 선반영 구간", signals: ["Memory cycle", "HBM demand", "Investor day May"] },
        { rank: 4, ticker: "RKLB", reasoning: "Neutron 로켓 첫 발사 D-30 + 국방 계약 $150M · Space 섹터 리더", signals: ["Neutron D-30", "Pentagon $150M", "WSB top 5"] },
        { rank: 5, ticker: "META", reasoning: "4/30 실적 D-8 · AI 광고 CPM +12% · Llama 4 5월 공개 임박", signals: ["Earnings Apr 30", "AI ad CPM +12%", "Llama 4 May"] }
      ],

      hidden_edges: [
        { ticker: "NBIS", reason: "AI 인프라 종목 중 가장 조용 · 옵션 C/P 3.1 + 스마트머니 ratio 0.85 + 블록거래 5건 연속 포착" },
        { ticker: "MU",   reason: "DRAM 현물가 +10% 반등 지속 + HBM3E 수주 루머 + 5월 투자자의 날 선반영 구간" }
      ],
      overheated: [
        { ticker: "ASTS", reason: "지난주 Reddit +1214% 급등 후 월요 -18% 조정, 오늘 +8% 반등했지만 단기 피로도 최고" },
        { ticker: "POET", reason: "WSB 타겟팅 Day-3 조정 패턴 · 유동성 얇고 차트 깨짐 · 절대 건드리지 말 것" }
      ],

      tickers: [
        {
          rank: 1, ticker: "TSLA", name: "Tesla, Inc.",
          sector: "Auto", sector_full: "Auto / AI (EV)",
          price: 400.00, change_pct: -0.15,
          score_total: 82.5,
          score_reddit: 82, score_news: 95, score_trends: 75, score_options: 98,
          quadrant: "hot",
          claude_rank: 1,
          claude_summary: "장 후 Q1 실적 발표 — IV 75로 이벤트 리스크 최고. **나체 롱/숏 금지**, 콜/풋 스프레드로 제한된 리스크 노출이 유일한 정답이에요.",
          claude_signals: ["Q1 earnings AMC", "IV 75%", "Robotaxi update expected"],
          narrative: "Tesla는 오늘 장 마감 후 Q1 2026 실적을 발표해요. Wall Street 컨센: 매출 $21.9B / EPS $0.36 / 차량 인도 358,023대 (컨센 365,645 미스 확정). 옵션 IV 75로 실적 후 ±7% 움직임이 가격에 내재. 핵심 관전 포인트는 (1) Q2 차량 인도 가이던스, (2) 로보택시 이벤트 재확인, (3) FSD v13 구독 매출, (4) Energy Storage 가이던스. 실적 전 나체 포지션 절대 금지, 콜 스프레드 또는 IV 매도 전략만 고려하세요.",
          entry: 397.0, tp1: 415.0, tp2: 430.0, sl: 378.0,
          entry_comment: "실적 전 진입 금지 · 실적 후 반응 보고 $375~380 갭다운 시 분할진입 · 상방은 $420 돌파 후 추격",
          catalysts: [
            "🔔 Q1 2026 실적 4/22 장 마감 후 (매출 $21.9B 예상)",
            "로보택시 이벤트 일정 재확인 기대",
            "FSD v13 구독 매출 공개 여부",
            "Energy Storage 가이던스"
          ],
          risks: [
            "❗ 차량 인도 358k로 컨센 -7.6k 미스 확정",
            "P/E 370배 — 역사적 프리미엄 최상단",
            "옵션 IV 75%, 실적 후 IV Crush 시 콜 보유자 50% 손실 가능",
            "Energy Storage 배치 -38% QoQ"
          ],
          reddit_sentiment_label: "혼조 (극단적)",
          reddit_breakdown: [
            { sub: "wallstreetbets", count: 1024, sentiment: 0.52 },
            { sub: "teslamotors",   count: 712,  sentiment: 0.78 },
            { sub: "stocks",        count: 385,  sentiment: 0.45 }
          ],
          news_headlines: [
            { title: "Tesla Q1 2026 earnings preview: 50k inventory overhang", source: "TradingKey", ago: "2h" },
            { title: "Wall Street expects $21.9B revenue, $0.36 EPS",           source: "CNBC",      ago: "5h" },
            { title: "TSLA down 0.15% in premarket ahead of earnings",          source: "Yahoo",     ago: "1h" }
          ],
          trend_surge_pct: 72,
          options_detail: { call_volume: 625000, put_volume: 412000, cp_ratio: 1.52, smart_money_ratio: 0.52, unusual: true }
        },
        {
          rank: 2, ticker: "AAPL", name: "Apple Inc.",
          sector: "Tech", sector_full: "Consumer Tech",
          price: 244.20, change_pct: -0.85,
          score_total: 72.5,
          score_reddit: 68, score_news: 85, score_trends: 72, score_options: 65,
          quadrant: "watch",
          claude_rank: 2,
          claude_summary: "Ternus CEO 지명 발표 후 장외 -0.6% · 월요 $243 지지 테스트 중. 방어적 홀더는 관망, 공격적 매수는 지지 확인 후에만.",
          claude_signals: ["Ternus named next CEO", "-0.6% after-hours", "Support $243"],
          narrative: "애플은 월요 장 마감 후 John Ternus(하드웨어 엔지니어링 SVP)를 차기 CEO로 공식 지명. 시장 반응은 제한적이지만 장외 -0.6%로 소폭 약세. $243 지지선이 핵심, 깨지면 $240까지 추가 하락 가능. 5/1 Q2 실적 발표까지 10일 남아있어 과감한 포지션은 자제하세요.",
          entry: 243.5, tp1: 250.0, tp2: 256.0, sl: 239.0,
          entry_comment: "$243 지지 확인 후 1/3 분할 · 깨지면 즉시 손절 · 실적 D-10 주의",
          catalysts: ["Q2 실적 5/1 예정", "WWDC 6월 (Apple Intelligence 2.0)", "Ternus 경영 체제 전환", "자사주 $110B 매입"],
          risks: ["CEO 교체 불확실성", "Q2 iPhone 수요 피크 아웃", "$243 지지 이탈 시 $240까지"],
          reddit_sentiment_label: "중립",
          reddit_breakdown: [
            { sub: "wallstreetbets", count: 385, sentiment: 0.52 },
            { sub: "apple",          count: 295, sentiment: 0.58 },
            { sub: "investing",      count: 172, sentiment: 0.55 }
          ],
          news_headlines: [
            { title: "Apple names John Ternus as next CEO",                  source: "CNBC",      ago: "14h" },
            { title: "AAPL -0.6% after-hours on CEO transition news",         source: "Reuters",   ago: "13h" },
            { title: "Apple Q2 earnings May 1 - focus on China iPhone demand", source: "Bloomberg", ago: "8h" }
          ],
          trend_surge_pct: 48,
          options_detail: { call_volume: 285000, put_volume: 198000, cp_ratio: 1.44, smart_money_ratio: 0.58, unusual: false }
        },
        {
          rank: 3, ticker: "NBIS", name: "Nebius Group",
          sector: "AI SW", sector_full: "AI Infrastructure",
          price: 80.20, change_pct: 1.65,
          score_total: 78.2,
          score_reddit: 62, score_news: 58, score_trends: 52, score_options: 88,
          quadrant: "hidden",
          claude_rank: 3,
          claude_summary: "리테일 관심은 낮지만 옵션 C/P 3.1 + 스마트머니 ratio 0.85 · 기관 매집 지속, 이번주 뉴스 트리거 대기 중.",
          claude_signals: ["Block trades x5", "Options C/P 3.1", "Smart money 0.85"],
          narrative: "Nebius는 AI 인프라 종목 중 가장 조용히 움직이는 Hidden Edge. Reddit 순위는 #25 정도지만 옵션시장에서 스마트머니 ratio 0.85 + 블록거래 5건 연속 포착. 4/29 GOOGL, 5/1 AMZN 실적 전후 AI 데이터센터 언급 확대 시 가격 빠르게 반응 가능해요.",
          entry: 79.0, tp1: 84.5, tp2: 90.0, sl: 76.5,
          entry_comment: "$78~80 분할진입 2회 · 기관 매수 지속되는 자리 · $76.5 이탈 시 즉시 손절",
          catalysts: ["AI 데이터센터 수요 가시화", "4/29 GOOGL·5/1 AMZN 실적 전후 섹터 로테이션", "기관 블록거래 5건 연속", "옵션 C/P 3.1 유지"],
          risks: ["소형 성장주 변동성 높음", "뉴스 없이 기술적 매매만으로 방향성 약함", "Mag7 AI CapEx 둔화 루머 시 타격 최대"],
          reddit_sentiment_label: "중립",
          reddit_breakdown: [
            { sub: "wallstreetbets", count: 142, sentiment: 0.58 },
            { sub: "stocks",         count: 85,  sentiment: 0.62 },
            { sub: "investing",      count: 52,  sentiment: 0.55 }
          ],
          news_headlines: [
            { title: "Nebius sees institutional accumulation amid AI infra demand", source: "Barron's", ago: "11h" },
            { title: "AI infrastructure names lead premarket - NBIS, CRWV in focus", source: "CNBC",    ago: "4h" }
          ],
          trend_surge_pct: 35,
          options_detail: { call_volume: 85000, put_volume: 27000, cp_ratio: 3.15, smart_money_ratio: 0.85, unusual: true }
        },
        {
          rank: 4, ticker: "MU", name: "Micron Technology",
          sector: "Semi", sector_full: "Semiconductors / Memory",
          price: 127.50, change_pct: -0.70,
          score_total: 76.8,
          score_reddit: 70, score_news: 72, score_trends: 68, score_options: 90,
          quadrant: "hidden",
          claude_rank: 4,
          claude_summary: "메모리 사이클 반등 지속 + HBM 수주 루머 + 옵션 C/P 2.9 · 5월 투자자의 날 선반영 구간이에요.",
          claude_signals: ["Memory cycle turn", "Options C/P 2.9", "Investor day May"],
          narrative: "마이크론은 DRAM 현물가 +10% 반등 지속, HBM3E 수주 루머 (하이퍼스케일러 대상) + 5월 예정된 투자자의 날 선반영 구간. 옵션 C/P 2.9로 기관 콜 매수 지속. 반도체 섹터 로테이션 수혜주.",
          entry: 126.5, tp1: 132.0, tp2: 138.5, sl: 124.0,
          entry_comment: "22:35 분할 1차 $126.5 · 손절 $124 · 3일 스윙",
          catalysts: ["DRAM 현물가 +10% 반등", "HBM3E 하이퍼스케일러 수주 루머", "5월 투자자의 날", "기관 블록거래 지속"],
          risks: ["삼성/하이닉스 공급 과잉 우려", "반도체 수출규제 뉴스", "단기 RSI 64 과매수"],
          reddit_sentiment_label: "긍정",
          reddit_breakdown: [
            { sub: "wallstreetbets", count: 215, sentiment: 0.62 },
            { sub: "semiconductors", count: 168, sentiment: 0.72 },
            { sub: "stocks",         count: 92,  sentiment: 0.55 }
          ],
          news_headlines: [
            { title: "Micron HBM3E demand outlook remains robust",    source: "Barron's",  ago: "6h" },
            { title: "DRAM spot prices rebound 10% from March lows",  source: "DigiTimes", ago: "9h" }
          ],
          trend_surge_pct: 42,
          options_detail: { call_volume: 158000, put_volume: 55000, cp_ratio: 2.87, smart_money_ratio: 0.80, unusual: true }
        },
        {
          rank: 5, ticker: "RKLB", name: "Rocket Lab USA",
          sector: "Space", sector_full: "Space / Launch",
          price: 49.10, change_pct: 3.65,
          score_total: 75.2,
          score_reddit: 85, score_news: 62, score_trends: 88, score_options: 58,
          quadrant: "hot",
          claude_rank: 5,
          claude_summary: "WSB Top 5 지속 + Neutron 로켓 첫 발사 D-30 + 국방 계약 확대 · Space 섹터 리더로 자리 굳어지는 중.",
          claude_signals: ["WSB top 5", "Neutron launch D-30", "Pentagon contracts"],
          narrative: "로켓랩은 Neutron 로켓(중형급) 첫 발사 D-30 마일스톤 진입. 펜타곤 국방 계약 $150M 신규 체결 + WSB에서 ASTS와 함께 Space 섹터 Top 2 지속 언급. 다만 로켓 실패 리스크는 항상 내재, 포지션 크기 제한 필수.",
          entry: 48.5, tp1: 52.0, tp2: 56.0, sl: 46.0,
          entry_comment: "$48~49 분할 2회 · Neutron 뉴스 전 포지션 완성 · 손절 $46",
          catalysts: ["Neutron 첫 발사 D-30", "국방 계약 $150M 신규", "Electron 발사 성공률 유지", "상업용 수요 확대"],
          risks: ["로켓 실패 리스크 상존", "변동성 큰 종목", "WSB 테마주 과열 조정 위험"],
          reddit_sentiment_label: "긍정",
          reddit_breakdown: [
            { sub: "wallstreetbets", count: 512, sentiment: 0.72 },
            { sub: "rocketlab",      count: 325, sentiment: 0.82 },
            { sub: "space",          count: 148, sentiment: 0.78 }
          ],
          news_headlines: [
            { title: "Rocket Lab Neutron launch within 30 days - sources", source: "Reuters",   ago: "7h" },
            { title: "RKLB wins $150M Pentagon contract",                   source: "Bloomberg", ago: "12h" }
          ],
          trend_surge_pct: 62,
          options_detail: { call_volume: 92000, put_volume: 38000, cp_ratio: 2.42, smart_money_ratio: 0.60, unusual: false }
        },
        {
          rank: 6, ticker: "META", name: "Meta Platforms, Inc.",
          sector: "AI SW", sector_full: "Social / AI",
          price: 630.40, change_pct: -0.27,
          score_total: 73.5, score_reddit: 65, score_news: 76, score_trends: 60, score_options: 82,
          quadrant: "hot", claude_rank: 6,
          claude_summary: "4/30 실적 D-8 · AI 광고 CPM +12% · Llama 4 5월 공개 임박, Mag7 중 가장 저평가 구간.",
          claude_signals: ["Earnings Apr 30", "AI ad CPM +12%", "Llama 4 May"],
          narrative: "Meta는 4/30 실적 D-8. AI 광고 CPM +12% YoY 반등 + Reality Labs 손실 축소 + 5월 Llama 4 공개. PER 22배로 Mag7 저평가 1위.",
          entry: 624.0, tp1: 648.0, tp2: 670.0, sl: 612.0,
          entry_comment: "$624~628 진입 · 실적 D-8 포지션 보수적으로",
          catalysts: ["Q1 실적 4/30", "Llama 4 5월 공개", "AI 광고 CPM YoY +12%"],
          risks: ["Reality Labs 재적자 위험", "규제 리스크"],
          reddit_sentiment_label: "중립",
          reddit_breakdown: [{ sub: "wallstreetbets", count: 245, sentiment: 0.55 }, { sub: "stocks", count: 128, sentiment: 0.62 }],
          news_headlines: [{ title: "Meta Q1 preview: AI ad spend accelerates", source: "Bloomberg", ago: "6h" }],
          trend_surge_pct: 25,
          options_detail: { call_volume: 145000, put_volume: 48000, cp_ratio: 3.02, smart_money_ratio: 0.74, unusual: false }
        },
        {
          rank: 7, ticker: "AMZN", name: "Amazon.com, Inc.",
          sector: "AI SW", sector_full: "Cloud / E-commerce",
          price: 213.80, change_pct: 0.65,
          score_total: 72.8, score_reddit: 82, score_news: 74, score_trends: 72, score_options: 68,
          quadrant: "hot", claude_rank: 7,
          claude_summary: "5/1 실적 D-9 · AWS 재가속 기대 + WSB Top 3 · 이란 피스토크 수혜주로 프리마켓 상승.",
          claude_signals: ["Earnings May 1", "AWS reacceleration", "Iran peace bid"],
          narrative: "아마존은 5/1 실적 D-9, AWS 성장률 +22% YoY 컨센서스. 이란 평화협상 진전으로 프리마켓 소폭 상승 (+0.65%). WSB Top 3 언급량 유지.",
          entry: 211.0, tp1: 218.0, tp2: 225.0, sl: 207.0,
          entry_comment: "$211~213 분할진입 · 실적 D-9",
          catalysts: ["Q1 실적 5/1", "AWS 재가속 +22% YoY", "Prime Day 여름 임박"],
          risks: ["52주 신고가 근처", "이커머스 마진 압박"],
          reddit_sentiment_label: "긍정",
          reddit_breakdown: [{ sub: "wallstreetbets", count: 598, sentiment: 0.68 }, { sub: "amazon", count: 262, sentiment: 0.62 }],
          news_headlines: [{ title: "Amazon Q1 earnings preview: AWS in focus", source: "CNBC", ago: "5h" }],
          trend_surge_pct: 38,
          options_detail: { call_volume: 215000, put_volume: 82000, cp_ratio: 2.62, smart_money_ratio: 0.66, unusual: false }
        },
        {
          rank: 8, ticker: "NVDA", name: "NVIDIA Corporation",
          sector: "Semi", sector_full: "Semiconductors / AI",
          price: 196.80, change_pct: -0.78,
          score_total: 71.2, score_reddit: 72, score_news: 68, score_trends: 62, score_options: 80,
          quadrant: "watch", claude_rank: 8,
          claude_summary: "옵션 차익실현 + 반도체 섹터 로테이션 → 5/22 실적까지 횡보 예상 · $192 지지 확인되면 저점 분할.",
          claude_signals: ["Options profit taking", "Sector rotation", "Earnings May 22"],
          narrative: "엔비디아는 옵션 차익실현 + 반도체 섹터 로테이션(MU/AVGO로)으로 단기 조정. 5/22 Q1 실적 전까지 $192~205 박스권 전망. 저점 분할매수 + IV 높을 때 풋 매도 전략.",
          entry: 193.5, tp1: 201.0, tp2: 208.0, sl: 190.0,
          entry_comment: "$192~194 저점 분할 · 손절 $190 · 실적까지 1개월",
          catalysts: ["Q1 실적 5/22", "H200 출하 데이터", "Blackwell 양산 가속"],
          risks: ["중국 수출규제", "Mag7 CapEx 둔화"],
          reddit_sentiment_label: "긍정",
          reddit_breakdown: [{ sub: "wallstreetbets", count: 485, sentiment: 0.62 }, { sub: "semiconductors", count: 258, sentiment: 0.70 }],
          news_headlines: [{ title: "NVDA pulls back on sector rotation", source: "Yahoo", ago: "4h" }],
          trend_surge_pct: 22,
          options_detail: { call_volume: 385000, put_volume: 168000, cp_ratio: 2.29, smart_money_ratio: 0.72, unusual: false }
        },
        {
          rank: 9, ticker: "GOOGL", name: "Alphabet Inc.",
          sector: "AI SW", sector_full: "AI Software",
          price: 181.90, change_pct: -0.22,
          score_total: 70.5, score_reddit: 70, score_news: 75, score_trends: 68, score_options: 75,
          quadrant: "hot", claude_rank: 9,
          claude_summary: "4/29 실적 D-7 · Gemini 2.5 + YouTube AI 쇼츠 광고 · 기관 포지션 빌드업 중.",
          claude_signals: ["Earnings Apr 29", "Gemini 2.5", "Ad rebound"],
          narrative: "알파벳은 4/29 실적 D-7. Gemini 2.5 공개 + AI 광고 YoY +15% 컨센 + YouTube 쇼츠 광고 확대. WSB Top 5 유지.",
          entry: 179.5, tp1: 186.0, tp2: 192.0, sl: 176.0,
          entry_comment: "$179~181 분할 · 실적 전 절반만",
          catalysts: ["Q1 실적 4/29", "Gemini 2.5", "AI 광고 +15%"],
          risks: ["DOJ 반독점", "검색 점유율 방어"],
          reddit_sentiment_label: "긍정",
          reddit_breakdown: [{ sub: "wallstreetbets", count: 362, sentiment: 0.68 }, { sub: "google", count: 138, sentiment: 0.72 }],
          news_headlines: [{ title: "Alphabet Q1 earnings: Gemini in focus", source: "CNBC", ago: "5h" }],
          trend_surge_pct: 30,
          options_detail: { call_volume: 168000, put_volume: 62000, cp_ratio: 2.71, smart_money_ratio: 0.71, unusual: false }
        },
        {
          rank: 10, ticker: "MSFT", name: "Microsoft Corporation",
          sector: "AI SW", sector_full: "AI Software / Cloud",
          price: 427.50, change_pct: -0.23,
          score_total: 69.8, score_reddit: 55, score_news: 72, score_trends: 54, score_options: 78,
          quadrant: "watch", claude_rank: 10,
          claude_summary: "4/24 실적 D-2 · Copilot ARR +45% · 코어 포지션 확보 구간, 실적 전 선빌드.",
          claude_signals: ["Earnings Apr 24 (D-2)", "Copilot +45%", "Core Mag7"],
          narrative: "마소는 4/24 실적 D-2로 가장 임박. Copilot ARR +45% YoY + Azure 재가속. 변동성 낮아 코어 포지션 유리.",
          entry: 424.0, tp1: 438.0, tp2: 450.0, sl: 418.0,
          entry_comment: "실적 D-2 · 포지션 빌드 완료하고 홀딩",
          catalysts: ["Q3 실적 4/24", "Copilot ARR +45%", "Azure 재가속"],
          risks: ["컨센 선반영", "AI CapEx 우려"],
          reddit_sentiment_label: "중립",
          reddit_breakdown: [{ sub: "wallstreetbets", count: 142, sentiment: 0.55 }, { sub: "stocks", count: 98, sentiment: 0.62 }],
          news_headlines: [{ title: "MSFT Q3 preview: Azure, Copilot key", source: "Barron's", ago: "7h" }],
          trend_surge_pct: 15,
          options_detail: { call_volume: 182000, put_volume: 72000, cp_ratio: 2.53, smart_money_ratio: 0.68, unusual: false }
        },
        { rank: 11, ticker: "AVGO", sector: "Semi",   sector_full: "Semiconductors",     price: 1838.50, change_pct: -0.21, score_total: 67.8, score_reddit: 50, score_news: 70, score_trends: 55, score_options: 85, quadrant: "hidden",   claude_rank: null },
        { rank: 12, ticker: "AMD",  sector: "Semi",   sector_full: "Semiconductors",     price: 161.50,  change_pct: -0.80, score_total: 66.5, score_reddit: 70, score_news: 62, score_trends: 60, score_options: 68, quadrant: "watch",    claude_rank: null },
        { rank: 13, ticker: "RDDT", sector: "Social", sector_full: "Social / Platform",  price: 161.50,  change_pct: 2.28,  score_total: 65.8, score_reddit: 82, score_news: 60, score_trends: 75, score_options: 45, quadrant: "hot",      claude_rank: null },
        { rank: 14, ticker: "PLTR", sector: "AI SW",  sector_full: "AI Software",        price: 42.15,   change_pct: -1.52, score_total: 64.2, score_reddit: 85, score_news: 58, score_trends: 75, score_options: 50, quadrant: "watch",    claude_rank: null },
        { rank: 15, ticker: "COIN", sector: "Fin",    sector_full: "Crypto Exchange",    price: 292.30,  change_pct: -1.15, score_total: 62.5, score_reddit: 72, score_news: 60, score_trends: 68, score_options: 48, quadrant: "watch",    claude_rank: null },
        { rank: 16, ticker: "JPM",  sector: "Fin",    sector_full: "Banking",            price: 267.40,  change_pct: 0.60,  score_total: 60.8, score_reddit: 40, score_news: 70, score_trends: 45, score_options: 68, quadrant: "watch",    claude_rank: null },
        { rank: 17, ticker: "SOFI", sector: "Fin",    sector_full: "Fintech",            price: 18.55,   change_pct: 0.82,  score_total: 59.5, score_reddit: 82, score_news: 58, score_trends: 72, score_options: 55, quadrant: "hot",      claude_rank: null },
        { rank: 18, ticker: "INTC", sector: "Semi",   sector_full: "Semiconductors",     price: 35.90,   change_pct: -0.85, score_total: 57.2, score_reddit: 58, score_news: 65, score_trends: 48, score_options: 50, quadrant: "watch",    claude_rank: null },
        { rank: 19, ticker: "ASTS", sector: "Space",  sector_full: "Satellite Comm",     price: 53.80,   change_pct: 8.15,  score_total: 55.8, score_reddit: 95, score_news: 48, score_trends: 92, score_options: 25, quadrant: "overheat", claude_rank: null },
        { rank: 20, ticker: "POET", sector: "Semi",   sector_full: "Photonics",          price: 12.18,   change_pct: -6.85, score_total: 51.5, score_reddit: 88, score_news: 38, score_trends: 85, score_options: 22, quadrant: "overheat", claude_rank: null }
      ]
    },
    "2026-04-17": {
      date: "2026-04-17",
      date_display: "2026-04-17 (금요일 마감 → 월요일 프리뷰)",
      market_mood: "bullish",
      market_mood_score: 78,
      market_summary: "Nasdaq 13연속 상승으로 1992년 이후 최장 기록이에요. S&P 500 +1.20% (7,126), Dow +1.79%, 이란 휴전 기대감 + Mag7 강세가 주도했어요. 다만 MOPEX 옵션만기 차익실현이 NVDA에 나왔고, 리테일은 ASTS 언급량이 하루만에 +1,214% 폭증하며 투기적 색채도 강해졌어요.",
      sector_tilt: ["Consumer Tech", "AI Software", "Space/Comm"],
      top_ticker: "TSLA",
      candidate_count: 20,

      today_action: {
        one_liner: "월요일은 Mag7 모멘텀 연장 vs 금요 차익실현 리셋 구간. TSLA·AAPL 갭업 추격 금지, 되돌림 기다렸다 분할진입이 유리해요.",
        priorities: [
          { icon: "🎯", ticker: "TSLA", text: "22:35 1차 분할진입 $395~398, 이탈시 $390 손절 · AI5 칩 모멘텀 추세 지속" },
          { icon: "💎", ticker: "MU", text: "메모리 사이클 반등 + 반도체 섹터 로테이션, 뉴스 터지기 전 선진입 구간" },
          { icon: "🚨", ticker: "ASTS", text: "Reddit 언급 +1214% 폭증 과열, 추격매수 절대 금지 — 숏 스퀴즈 후 -20% 리스크" }
        ]
      },

      routine_timeline: [
        { time_kst: "21:30", time_et: "08:30", label: "스크리너 리포트 완성, Claude 판단 순위 확인", active: true },
        { time_kst: "21:45", time_et: "08:45", label: "Top 5 종목 차트·뉴스 최종 확인, 진입가 메모" },
        { time_kst: "22:00", time_et: "09:00", label: "OCO 주문 사전 세팅 (지정가 익절+손절)" },
        { time_kst: "22:30", time_et: "09:30", label: "🔔 미국장 개장 · 초기 변동성 관망 5분", key: true },
        { time_kst: "22:35", time_et: "09:35", label: "분할 진입 1차 (포지션 1/3)" },
        { time_kst: "23:00", time_et: "10:00", label: "분할 진입 2차 (포지션 1/3) · 추세 확인" },
        { time_kst: "23:30", time_et: "10:30", label: "분할 진입 3차 or 손절라인 점검" },
        { time_kst: "00:00", time_et: "11:00", label: "첫 리밸런싱 체크, 익절 부분 실현" },
        { time_kst: "02:00", time_et: "13:00", label: "취침 전 OCO 최종 확인 · 일지 작성", key: true }
      ],

      sectors: [
        { name: "Consumer Tech",   strength: 0.84, ticker_count: 3 },
        { name: "AI Software",     strength: 0.78, ticker_count: 4 },
        { name: "Space/Comm",      strength: 0.72, ticker_count: 2 },
        { name: "Semiconductors",  strength: 0.65, ticker_count: 4 },
        { name: "Fintech",         strength: 0.58, ticker_count: 2 },
        { name: "Social/Platform", strength: 0.52, ticker_count: 2 },
        { name: "Auto",            strength: 0.76, ticker_count: 1 },
        { name: "Crypto-related",  strength: 0.48, ticker_count: 1 },
        { name: "Energy",          strength: 0.22, ticker_count: 1 }
      ],

      claude_ranking: [
        { rank: 1, ticker: "TSLA", reasoning: "AI5 칩 공개 + Terafab 팹 확장 + UBS 매수 상향 3중 호재, Nasdaq 연승 동력", signals: ["AI5 chip", "UBS upgrade", "5-day win streak"] },
        { rank: 2, ticker: "AAPL", reasoning: "금요 +3.1% 강세 마감 + 6월 WWDC 앞두고 기관 비중 확대 시그널", signals: ["+3.1% close", "WWDC catalyst", "Buyback expansion"] },
        { rank: 3, ticker: "MU",   reasoning: "메모리 가격 반등 + HBM 수주 루머, 섹터 로테이션 최적 수혜 종목", signals: ["Memory cycle", "HBM demand", "Sector rotation"] },
        { rank: 4, ticker: "AMZN", reasoning: "AWS 성장률 재가속 기대 + Reddit 언급 Top 3, 5월 실적 기대감", signals: ["AWS reacceleration", "Reddit top 3", "Earnings setup"] },
        { rank: 5, ticker: "NVDA", reasoning: "MOPEX 차익실현 -0.26% 눌림목, $195 지지 확인되면 반등 구간 진입 기회", signals: ["MOPEX pullback", "Support $195", "H200 demand"] }
      ],

      hidden_edges: [
        { ticker: "MU",   reason: "뉴스 지표는 평범한데 옵션 C/P 2.8 + 기관 블록거래 4건 감지 · 다음주 HBM 발표 선반영 가능성" },
        { ticker: "NBIS", reason: "Reddit 언급 #21위인데 스마트머니 유입 Top 5 · AI 인프라 조용한 매집 흔적" }
      ],
      overheated: [
        { ticker: "ASTS", reason: "Reddit 언급 +1214% 폭증, RSI 84 · 숏 스퀴즈 후 급격한 조정 리스크 높음" },
        { ticker: "POET", reason: "변동성 150%, 유동성 얇은 구간 · WSB 타겟팅 이후 Day-2 조정 패턴 반복" }
      ],

      tickers: [
        {
          rank: 1, ticker: "TSLA", name: "Tesla, Inc.",
          sector: "Auto", sector_full: "Auto / AI",
          price: 400.62, change_pct: 3.01,
          score_total: 88.2,
          score_reddit: 86, score_news: 92, score_trends: 82, score_options: 90,
          quadrant: "hot",
          claude_rank: 1,
          claude_summary: "AI5 칩·Terafab·UBS 상향 3중 호재로 5일 연속 상승, 월요 갭업 가능성 높지만 추격은 금지 — 되돌림 기다려야 해요.",
          claude_signals: ["AI5 chip launch", "UBS upgrade to Buy", "5-day win streak"],
          narrative: "Tesla가 금요일 $400 돌파하며 +3.01% 마감. Terafab 전용 칩 공장 확장 발표 + AI5 추론 칩 공개 + UBS가 목표가 $480으로 상향. 5일 연속 상승으로 로보택시 이벤트 기대감 누적 중. 다만 Mag7 중 가장 과열 영역이라 월요일 갭업 시 추격보다는 $395~398 되돌림 매수가 안전해요.",
          entry: 397.0, tp1: 408.0, tp2: 420.0, sl: 390.0,
          entry_comment: "갭업 시 시초가 관망 5분, $395~398 되돌림 대기 · 분할 3회 · $390 이탈시 손절",
          catalysts: [
            "Terafab 전용 칩 공장 확장 발표",
            "AI5 추론 칩 공개 (H100 대비 3배 효율)",
            "UBS 목표가 $480으로 상향 (기존 $380)",
            "로보택시 이벤트 5월 예정"
          ],
          risks: [
            "5일 연속 상승 후 RSI 72, 단기 과매수 구간",
            "옵션 IV 65 → 월요 갭업 시 변동성 수렴 위험",
            "Mag7 중 베타 2.1로 조정 시 낙폭 최대"
          ],
          reddit_sentiment_label: "매우 긍정",
          reddit_breakdown: [
            { sub: "wallstreetbets", count: 842, sentiment: 0.78 },
            { sub: "teslamotors",   count: 612, sentiment: 0.85 },
            { sub: "stocks",        count: 289, sentiment: 0.62 }
          ],
          news_headlines: [
            { title: "TSLA's 5-Day Win Streak: AI5 Chip, Terafab & UBS Boost", source: "Zacks", ago: "2h" },
            { title: "Tesla unveils AI5 inference chip, 3x efficiency vs H100",  source: "Bloomberg", ago: "6h" },
            { title: "UBS upgrades Tesla to Buy, raises target to $480",          source: "Reuters",  ago: "9h" }
          ],
          trend_surge_pct: 58,
          options_detail: {
            call_volume: 485000,
            put_volume: 152000,
            cp_ratio: 3.19,
            smart_money_ratio: 0.74,
            unusual: true
          }
        },
        {
          rank: 2, ticker: "AAPL", name: "Apple Inc.",
          sector: "Tech", sector_full: "Consumer Tech",
          price: 245.80, change_pct: 3.12,
          score_total: 84.6,
          score_reddit: 72, score_news: 88, score_trends: 76, score_options: 85,
          quadrant: "hot",
          claude_rank: 2,
          claude_summary: "금요일 +3.12% 강세 마감, WWDC·자사주 확장 + 중국 판매 반등 시그널 — 기관 매집 진행 중이에요.",
          claude_signals: ["+3.1% close", "WWDC catalyst", "Institutional accumulation"],
          narrative: "Apple이 금요일 +3.12%로 Mag7 중 가장 강하게 마감. 중국 3월 판매가 YoY +7%로 반등했고, WWDC(6월)에서 Apple Intelligence 2.0 공개 예정. 자사주 매입 $110B 확장 발표 이후 기관 순매수 4일 연속. 추격보다 $243~245 되돌림 대기가 깔끔해요.",
          entry: 244.0, tp1: 250.0, tp2: 256.0, sl: 240.0,
          entry_comment: "$243~245 1차 진입, 분할 2회 · 현금성 자산 두툼해서 타이트한 손절 유지",
          catalysts: [
            "중국 3월 아이폰 판매 YoY +7% 반등",
            "WWDC 2026 Apple Intelligence 2.0 공개 예정 (6월)",
            "자사주 매입 $110B 확장 발표",
            "기관 4일 연속 순매수"
          ],
          risks: [
            "단기 RSI 68, 과매수 접근",
            "Vision Pro 판매 실망감 재부각 가능성",
            "관세 정책 변동성 노출"
          ],
          reddit_sentiment_label: "긍정",
          reddit_breakdown: [
            { sub: "wallstreetbets", count: 412, sentiment: 0.64 },
            { sub: "apple",          count: 358, sentiment: 0.72 },
            { sub: "investing",      count: 195, sentiment: 0.58 }
          ],
          news_headlines: [
            { title: "Apple shares climb 3.4% on strong China iPhone demand", source: "CNBC",       ago: "3h" },
            { title: "Apple announces $110B buyback expansion",               source: "Reuters",    ago: "7h" },
            { title: "WWDC 2026 preview: Apple Intelligence 2.0 expected",    source: "Bloomberg",  ago: "14h" }
          ],
          trend_surge_pct: 42,
          options_detail: {
            call_volume: 312000,
            put_volume: 98000,
            cp_ratio: 3.18,
            smart_money_ratio: 0.68,
            unusual: false
          }
        },
        {
          rank: 3, ticker: "MU", name: "Micron Technology",
          sector: "Semi", sector_full: "Semiconductors / Memory",
          price: 128.40, change_pct: 1.85,
          score_total: 79.8,
          score_reddit: 68, score_news: 74, score_trends: 72, score_options: 92,
          quadrant: "hidden",
          claude_rank: 3,
          claude_summary: "메모리 사이클 반등 + 옵션 C/P 2.8 + 기관 블록거래 4건 · 뉴스 터지기 전 선진입 타이밍이에요.",
          claude_signals: ["Memory cycle turn", "Options C/P 2.8", "Block trades x4"],
          narrative: "Micron은 뉴스 지표가 평범해서 리테일은 놓치고 있지만, 옵션시장에서 조용히 움직이고 있어요. HBM3E 수주 루머 + 메모리 현물가 저점 반등 확인. 다음주 HBM 관련 발표 대기 중이라 선반영 가능성 높아요. 기관 블록거래 4건 포착.",
          entry: 127.0, tp1: 133.0, tp2: 140.0, sl: 124.5,
          entry_comment: "22:35 1차 $127, $124.5 이탈시 즉시 손절 · 3일 스윙 가정",
          catalysts: [
            "DRAM 현물가 3월 대비 +8% 반등",
            "HBM3E 하이퍼스케일러 수주 루머",
            "다음주 investor day 예정",
            "기관 블록거래 4건 포착 (스마트머니 ratio 0.82)"
          ],
          risks: [
            "삼성/하이닉스 공급 과잉 재부각 위험",
            "반도체 수출 규제 뉴스 노출",
            "뉴스 재료 없으면 Trends 점수 빠르게 하락 가능"
          ],
          reddit_sentiment_label: "중립",
          reddit_breakdown: [
            { sub: "wallstreetbets", count: 185, sentiment: 0.48 },
            { sub: "semiconductors", count: 142, sentiment: 0.65 },
            { sub: "stocks",         count: 98,  sentiment: 0.52 }
          ],
          news_headlines: [
            { title: "DRAM spot prices rebound 8% from March lows",        source: "DigiTimes", ago: "5h" },
            { title: "Micron investor day scheduled for next week",        source: "Reuters",   ago: "12h" },
            { title: "HBM3E demand outlook remains robust - analyst note", source: "Barron's",  ago: "18h" }
          ],
          trend_surge_pct: 35,
          options_detail: {
            call_volume: 142000,
            put_volume: 51000,
            cp_ratio: 2.78,
            smart_money_ratio: 0.82,
            unusual: true
          }
        },
        {
          rank: 4, ticker: "AMZN", name: "Amazon.com, Inc.",
          sector: "AI SW", sector_full: "Cloud / E-commerce",
          price: 212.45, change_pct: 1.62,
          score_total: 78.3,
          score_reddit: 82, score_news: 78, score_trends: 74, score_options: 76,
          quadrant: "hot",
          claude_rank: 4,
          claude_summary: "AWS 재가속 기대 + WSB Top 3 언급 + 5월 실적 세팅 · 다만 이미 1년 신고가 근처라 추격보다 되돌림이 깔끔해요.",
          claude_signals: ["AWS reacceleration", "Reddit top 3", "Earnings May 1"],
          narrative: "Amazon은 WSB에서 가장 많이 언급되는 Mag7 중 하나예요. AWS 성장률이 Q1에 재가속된다는 기대감 + 5월 1일 실적 발표 세팅. 이미 52주 신고가 근처라 갭업 추격보다 $209~211 되돌림 대기가 유리해요.",
          entry: 210.5, tp1: 218.0, tp2: 225.0, sl: 206.0,
          entry_comment: "$209~211 분할진입, 실적 D-2주 포지션 적극 구축",
          catalysts: [
            "Q1 실적 발표 5월 1일 예정",
            "AWS 성장률 재가속 컨센서스 +22% YoY",
            "Prime Day 2026 여름 발표 임박",
            "Reddit WSB 언급량 Top 3"
          ],
          risks: [
            "52주 신고가 근처 과매수 구간",
            "이커머스 마진 압박 재부각 가능성",
            "FTC 반독점 소송 뉴스 노출"
          ],
          reddit_sentiment_label: "긍정",
          reddit_breakdown: [
            { sub: "wallstreetbets", count: 624, sentiment: 0.70 },
            { sub: "amazon",         count: 285, sentiment: 0.62 },
            { sub: "investing",      count: 172, sentiment: 0.65 }
          ],
          news_headlines: [
            { title: "Amazon Q1 earnings preview: AWS reacceleration in focus", source: "CNBC",       ago: "4h" },
            { title: "AWS announces new AI inference service",                   source: "TechCrunch", ago: "10h" },
            { title: "Amazon Prime Day 2026 expected in July - sources",         source: "Bloomberg",  ago: "22h" }
          ],
          trend_surge_pct: 38,
          options_detail: {
            call_volume: 218000,
            put_volume: 84000,
            cp_ratio: 2.60,
            smart_money_ratio: 0.65,
            unusual: false
          }
        },
        {
          rank: 5, ticker: "NVDA", name: "NVIDIA Corporation",
          sector: "Semi", sector_full: "Semiconductors / AI",
          price: 198.35, change_pct: -0.26,
          score_total: 76.5,
          score_reddit: 78, score_news: 70, score_trends: 68, score_options: 86,
          quadrant: "hidden",
          claude_rank: 5,
          claude_summary: "MOPEX 옵션만기 차익실현으로 -0.26% 눌림목, $195 지지 확인되면 반등 진입 자리 — 월요 갭하락 시 공격적 매수 구간이에요.",
          claude_signals: ["MOPEX pullback", "Support test $195", "Call ratio rebuilding"],
          narrative: "NVDA는 금요일 MOPEX(옵션 월만기) 차익실현으로 -0.26% 조정. 1주일 동안 +6% 상승 이후 건강한 눌림목 수준. $195 지지선 확인되면 반등 진입 자리. 주중 H200 출하 데이터 발표 기대감이 재료로 대기 중이에요.",
          entry: 196.5, tp1: 203.0, tp2: 210.0, sl: 192.0,
          entry_comment: "월요 갭하락 $195~197 매수 · 분할 3회 · 지지 이탈시 즉시 손절",
          catalysts: [
            "H200 주간 출하 데이터 발표 대기 (화요일 예정)",
            "Blackwell 양산 램프업 가속 루머",
            "옵션 월만기 이후 신규 콜 포지션 재구축 시작",
            "스마트머니 비율 0.75 유지"
          ],
          risks: [
            "5월 22일 실적 발표 전 변동성 확대 구간",
            "중국 수출 규제 리스크 재부각 가능",
            "$195 지지 이탈시 $188까지 추가 하락 가능"
          ],
          reddit_sentiment_label: "긍정",
          reddit_breakdown: [
            { sub: "wallstreetbets", count: 542, sentiment: 0.65 },
            { sub: "semiconductors", count: 285, sentiment: 0.72 },
            { sub: "stocks",         count: 158, sentiment: 0.58 }
          ],
          news_headlines: [
            { title: "NVIDIA pulls back 0.26% on MOPEX options expiration",     source: "Yahoo Finance", ago: "3h" },
            { title: "Analyst: Blackwell ramp accelerating, H200 demand robust", source: "Barron's",     ago: "11h" },
            { title: "NVIDIA Q1 FY27 earnings scheduled for May 22",            source: "Reuters",       ago: "16h" }
          ],
          trend_surge_pct: 28,
          options_detail: {
            call_volume: 398000,
            put_volume: 154000,
            cp_ratio: 2.58,
            smart_money_ratio: 0.75,
            unusual: false
          }
        },
        {
          rank: 6, ticker: "GOOGL", name: "Alphabet Inc.",
          sector: "AI SW", sector_full: "AI Software",
          price: 182.30, change_pct: 1.45,
          score_total: 74.2,
          score_reddit: 72, score_news: 76, score_trends: 70, score_options: 78,
          quadrant: "hot",
          claude_rank: 6,
          claude_summary: "Gemini 2.5 · AI 광고 매출 반등 기대, WSB 언급 Top 5 유지 · 실적(4월 29일) 앞두고 포지션 빌드업 구간.",
          claude_signals: ["Gemini 2.5 launch", "Ad revenue rebound", "Earnings Apr 29"],
          narrative: "Alphabet은 Gemini 2.5 공개 + AI 기반 광고 매출 YoY +15% 컨센서스 + 4월 29일 실적 발표 앞두고 기관 포지션 빌드업 중. WSB에서도 꾸준히 Top 5 유지하는 모멘텀 + 펀더멘털 동시 보유 종목.",
          entry: 180.0, tp1: 186.0, tp2: 192.0, sl: 176.5,
          entry_comment: "$180 근처 분할진입, 실적 전 절반만 · 손절 타이트",
          catalysts: ["Gemini 2.5 공개", "Q1 실적 4월 29일", "AI 광고 매출 YoY +15% 컨센", "YouTube AI 쇼츠 광고 확대"],
          risks: ["DOJ 반독점 판결 대기", "검색 광고 점유율 방어 과제", "실적 전 변동성 확대"],
          reddit_sentiment_label: "긍정",
          reddit_breakdown: [
            { sub: "wallstreetbets", count: 385, sentiment: 0.68 },
            { sub: "google",         count: 142, sentiment: 0.72 },
            { sub: "investing",      count: 98,  sentiment: 0.60 }
          ],
          news_headlines: [
            { title: "Alphabet Q1 earnings: Gemini, ad recovery in focus", source: "CNBC",   ago: "5h" },
            { title: "Google rolls out Gemini 2.5 to Workspace",           source: "Reuters", ago: "14h" }
          ],
          trend_surge_pct: 32,
          options_detail: { call_volume: 165000, put_volume: 62000, cp_ratio: 2.66, smart_money_ratio: 0.70, unusual: false }
        },
        {
          rank: 7, ticker: "META", name: "Meta Platforms, Inc.",
          sector: "AI SW", sector_full: "Social / AI",
          price: 632.10, change_pct: 1.18,
          score_total: 72.8,
          score_reddit: 65, score_news: 78, score_trends: 62, score_options: 82,
          quadrant: "hot",
          claude_rank: 7,
          claude_summary: "AI 광고 CPM 반등 + Reality Labs 손실 축소 + 4월 30일 실적 · Mag7 중 가장 저평가 구간이에요.",
          claude_signals: ["AI ad CPM +12%", "Reality Labs loss narrowing", "Earnings Apr 30"],
          narrative: "Meta는 AI 광고 CPM이 YoY +12% 반등 확인 + Reality Labs 손실 QoQ -$400M 축소 + 4월 30일 실적 발표. PER 22배로 Mag7 중 가장 저평가. Llama 4 공개도 5월 임박.",
          entry: 626.0, tp1: 648.0, tp2: 670.0, sl: 614.0,
          entry_comment: "$626~630 진입, 실적 10일 전이라 포지션 크기 보수적으로",
          catalysts: ["Q1 실적 4월 30일", "Llama 4 공개 5월 예정", "AI 광고 CPM YoY +12%", "Reality Labs 손실 축소 궤도"],
          risks: ["Reality Labs 재적자 확대 위험", "규제 리스크 지속", "인스타그램 성장 둔화 우려"],
          reddit_sentiment_label: "중립",
          reddit_breakdown: [
            { sub: "wallstreetbets", count: 245, sentiment: 0.55 },
            { sub: "stocks",         count: 128, sentiment: 0.62 }
          ],
          news_headlines: [
            { title: "Meta Q1 preview: AI ad spend accelerates", source: "Bloomberg", ago: "6h" },
            { title: "Llama 4 coming in May - Zuckerberg",       source: "The Verge", ago: "22h" }
          ],
          trend_surge_pct: 25,
          options_detail: { call_volume: 142000, put_volume: 48000, cp_ratio: 2.96, smart_money_ratio: 0.74, unusual: false }
        },
        {
          rank: 8, ticker: "AVGO", name: "Broadcom Inc.",
          sector: "Semi", sector_full: "Semiconductors",
          price: 1842.30, change_pct: 0.92,
          score_total: 71.5,
          score_reddit: 52, score_news: 72, score_trends: 58, score_options: 88,
          quadrant: "hidden",
          claude_rank: 8,
          claude_summary: "커스텀 ASIC 수주 확대 + 옵션 C/P 3.2 · 리테일은 모르지만 기관이 조용히 매집 중이에요.",
          claude_signals: ["Custom ASIC deals", "Options C/P 3.2", "Institutional accumulation"],
          narrative: "Broadcom은 리테일 관심은 낮지만 기관에서 커스텀 ASIC 수주(Meta·Google 대상) 기대감으로 옵션 C/P 3.2 확인. 다음 실적은 6월이지만 선반영 구간 진입.",
          entry: 1830.0, tp1: 1880.0, tp2: 1930.0, sl: 1795.0,
          entry_comment: "분할진입 유리, 단가 높아 포지션 크기 관리 필수",
          catalysts: ["Meta 커스텀 ASIC 수주 루머", "Google TPU 후속 주문 기대", "VMware 시너지 가시화"],
          risks: ["Mag7 CapEx 둔화 노출", "주가 변동성 확대", "실적까지 2개월 대기"],
          reddit_sentiment_label: "중립",
          reddit_breakdown: [
            { sub: "semiconductors", count: 95, sentiment: 0.62 },
            { sub: "stocks",         count: 68, sentiment: 0.55 }
          ],
          news_headlines: [
            { title: "Broadcom wins additional Meta ASIC design - sources", source: "Reuters", ago: "8h" }
          ],
          trend_surge_pct: 18,
          options_detail: { call_volume: 82000, put_volume: 26000, cp_ratio: 3.15, smart_money_ratio: 0.81, unusual: true }
        },
        {
          rank: 9, ticker: "MSFT", name: "Microsoft Corporation",
          sector: "AI SW", sector_full: "AI Software / Cloud",
          price: 428.50, change_pct: 1.05,
          score_total: 70.8,
          score_reddit: 58, score_news: 74, score_trends: 56, score_options: 80,
          quadrant: "watch",
          claude_rank: 9,
          claude_summary: "Copilot ARR +45% · Azure 성장 가속 · 실적 4월 24일 · 안정적 Mag7 코어 포지션이에요.",
          claude_signals: ["Copilot ARR +45%", "Azure acceleration", "Earnings Apr 24"],
          narrative: "Microsoft는 Copilot ARR +45% YoY + Azure 성장 재가속 + 4월 24일 실적 발표. 변동성 낮고 안정적이라 코어 포지션으로 적합. 단, 실적 전 이미 컨센 선반영.",
          entry: 425.0, tp1: 438.0, tp2: 450.0, sl: 418.0,
          entry_comment: "코어 포지션 · 실적 D-1주 구축 완료하고 홀딩",
          catalysts: ["Q3 실적 4월 24일", "Copilot ARR YoY +45%", "Azure 성장 재가속"],
          risks: ["컨센서스 선반영", "AI CapEx 과잉 우려 재부각 가능", "달러 강세 환율 역풍"],
          reddit_sentiment_label: "중립",
          reddit_breakdown: [
            { sub: "wallstreetbets", count: 142, sentiment: 0.55 },
            { sub: "stocks",         count: 98,  sentiment: 0.62 }
          ],
          news_headlines: [
            { title: "MSFT Q3 preview: Azure, Copilot monetization key", source: "Barron's", ago: "7h" }
          ],
          trend_surge_pct: 15,
          options_detail: { call_volume: 185000, put_volume: 72000, cp_ratio: 2.57, smart_money_ratio: 0.68, unusual: false }
        },
        {
          rank: 10, ticker: "SOFI", name: "SoFi Technologies",
          sector: "Fin", sector_full: "Fintech",
          price: 18.40, change_pct: 2.85,
          score_total: 69.5,
          score_reddit: 85, score_news: 62, score_trends: 74, score_options: 58,
          quadrant: "hot",
          claude_rank: 10,
          claude_summary: "WSB 언급 Top 10 꾸준 + 대출 성장 재가속 기대 · 실적(4월 29일) 서프라이즈 가능성 높아요.",
          claude_signals: ["WSB top 10", "Loan growth accel", "Earnings Apr 29"],
          narrative: "SoFi는 WSB 단골 + 대출 성장 재가속 + 4월 29일 실적. 금리 인하 사이클 수혜주로 재조명. 다만 변동성 큰 종목이라 포지션 크기 주의.",
          entry: 18.10, tp1: 19.20, tp2: 20.50, sl: 17.45,
          entry_comment: "포지션 작게, 변동성 큰 종목 · 실적 전 절반만 빌드",
          catalysts: ["Q1 실적 4월 29일", "금리 인하 사이클 수혜", "대출 성장 재가속 기대"],
          risks: ["변동성 큰 종목", "금융주 섹터 리스크", "WSB 과열 가능성"],
          reddit_sentiment_label: "매우 긍정",
          reddit_breakdown: [
            { sub: "wallstreetbets", count: 725, sentiment: 0.78 },
            { sub: "sofi",           count: 285, sentiment: 0.85 },
            { sub: "fintech",        count: 95,  sentiment: 0.62 }
          ],
          news_headlines: [
            { title: "SoFi Q1 earnings preview: loan growth in focus", source: "Seeking Alpha", ago: "9h" }
          ],
          trend_surge_pct: 48,
          options_detail: { call_volume: 92000, put_volume: 48000, cp_ratio: 1.92, smart_money_ratio: 0.58, unusual: false }
        },
        { rank: 11, ticker: "AMD",  sector: "Semi",   sector_full: "Semiconductors",      price: 162.80, change_pct: 0.85, score_total: 67.2, score_reddit: 72, score_news: 65, score_trends: 62, score_options: 70, quadrant: "watch",    claude_rank: null },
        { rank: 12, ticker: "PLTR", sector: "AI SW",  sector_full: "AI Software",         price: 28.45,  change_pct: 2.15, score_total: 66.8, score_reddit: 88, score_news: 60, score_trends: 78, score_options: 52, quadrant: "hot",      claude_rank: null },
        { rank: 13, ticker: "NBIS", sector: "AI SW",  sector_full: "AI Infrastructure",   price: 42.10,  change_pct: 3.25, score_total: 65.4, score_reddit: 58, score_news: 52, score_trends: 48, score_options: 82, quadrant: "hidden",   claude_rank: null },
        { rank: 14, ticker: "RKLB", sector: "Space",  sector_full: "Space / Launch",      price: 24.30,  change_pct: 4.15, score_total: 64.8, score_reddit: 82, score_news: 58, score_trends: 88, score_options: 52, quadrant: "hot",      claude_rank: null },
        { rank: 15, ticker: "COIN", sector: "Fin",    sector_full: "Crypto Exchange",     price: 248.50, change_pct: 1.65, score_total: 63.5, score_reddit: 75, score_news: 62, score_trends: 70, score_options: 48, quadrant: "watch",    claude_rank: null },
        { rank: 16, ticker: "RDDT", sector: "Social", sector_full: "Social / Platform",   price: 142.20, change_pct: 2.45, score_total: 62.8, score_reddit: 78, score_news: 58, score_trends: 72, score_options: 42, quadrant: "watch",    claude_rank: null },
        { rank: 17, ticker: "INTC", sector: "Semi",   sector_full: "Semiconductors",      price: 32.80,  change_pct: -0.85, score_total: 58.5, score_reddit: 62, score_news: 68, score_trends: 52, score_options: 52, quadrant: "watch",   claude_rank: null },
        { rank: 18, ticker: "JPM",  sector: "Fin",    sector_full: "Banking",             price: 258.40, change_pct: 1.25, score_total: 57.8, score_reddit: 42, score_news: 72, score_trends: 45, score_options: 68, quadrant: "watch",    claude_rank: null },
        { rank: 19, ticker: "ASTS", sector: "Space",  sector_full: "Satellite Comm",      price: 38.50,  change_pct: 15.80, score_total: 56.5, score_reddit: 98, score_news: 45, score_trends: 96, score_options: 22, quadrant: "overheat", claude_rank: null },
        { rank: 20, ticker: "POET", sector: "Semi",   sector_full: "Photonics",           price: 6.25,   change_pct: -8.45, score_total: 52.3, score_reddit: 92, score_news: 38, score_trends: 88, score_options: 18, quadrant: "overheat", claude_rank: null }
      ]
    }
  }
};
