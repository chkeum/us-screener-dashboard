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
      { date: "2026-04-17", top_ticker: "TSLA", mood: "bullish" }
    ]
  },
  archive: {
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
