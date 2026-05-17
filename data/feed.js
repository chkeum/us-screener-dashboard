// ============================================================
// US Screener Dashboard · Data Feed (v2 schema)
// ============================================================
// 이 파일은 스케줄 태스크(us-daily-sentiment-screener)가 매일 자동 생성합니다.
// 수동 편집 금지.
//
// 구조: { manifest, archive }
//   manifest: 최신 30개 리포트 메타데이터
//   archive:  날짜별 전체 데이터 (최근 30일 보존)
// ------------------------------------------------------------

window.__SCREENER_FEED__ = {
  "manifest": {
    "version": 2,
    "reports": [
      {
        "date": "2026-05-17",
        "top_ticker": "NVDA",
        "mood": "bullish"
      },
      {
        "date": "2026-05-15",
        "top_ticker": "NVDA",
        "mood": "bullish"
      },
      {
        "date": "2026-05-14",
        "top_ticker": "CRCL",
        "mood": "bullish"
      },
      {
        "date": "2026-05-13",
        "top_ticker": "AMAT",
        "mood": "bullish"
      },
      {
        "date": "2026-05-12",
        "top_ticker": "NVDA",
        "mood": "bullish"
      },
      {
        "date": "2026-05-10",
        "top_ticker": "NVDA",
        "mood": "bullish"
      },
      {
        "date": "2026-05-02",
        "top_ticker": "PLTR",
        "mood": "bullish"
      },
      {
        "date": "2026-04-30",
        "top_ticker": "AMZN",
        "mood": "neutral"
      },
      {
        "date": "2026-04-28",
        "top_ticker": "NVDA",
        "mood": "bullish"
      },
      {
        "date": "2026-04-23",
        "top_ticker": "NVDA",
        "mood": "neutral"
      },
      {
        "date": "2026-04-22",
        "top_ticker": "TSLA",
        "mood": "neutral"
      },
      {
        "date": "2026-04-17",
        "top_ticker": "TSLA",
        "mood": "bullish"
      }
    ]
  },
  "archive": {
    "2026-05-17": {
      "date": "2026-05-17",
      "date_display": "2026-05-17 (일·미국장 휴장, 5/18 월요일 개장 준비)",
      "market_mood": "bullish",
      "market_mood_score": 72,
      "market_summary": "주말이라 미국장은 휴장이지만, 5/20(화) NVDA 어닝 D-2 진입이라 옵션시장은 이미 IV 35% 까지 끓고 있어요. 월요일은 추격보단 포지션 정리·헷지 셋업이 정답.",
      "sector_tilt": [
        "Semiconductors",
        "AI Networking",
        "Software (Earnings)"
      ],
      "top_ticker": "NVDA",
      "candidate_count": 20,
      "today_action": {
        "one_liner": "NVDA 어닝 D-2 — 주말 갭리스크 관리하면서 월요일 22:35 시초가 흡수 후 진입, 추격 절대 금지.",
        "priorities": [
          {
            "icon": "🎯",
            "ticker": "NVDA",
            "text": "월요일 22:35 KST 시초가 관망 → 234달러 위 안착 시 0.3R 분할, SL 226, 어닝 전 절반 익절(245 TP1)"
          },
          {
            "icon": "💎",
            "ticker": "NBIS",
            "text": "히든엣지 — 셀사이드 커버리지 얕고 NVDA 후방수혜 풀백 매수 구간, 시초가 -2% 갭다운이면 분할 진입 호기"
          },
          {
            "icon": "🚨",
            "ticker": "GME",
            "text": "WSB 광풍 +28% 후 RSI 82, 월요일 갭업 시 추격 금지·풋 헷지 검토"
          }
        ]
      },
      "routine_timeline": [
        {
          "time_kst": "08:00",
          "time_et": "19:00 (-1d)",
          "label": "주말 뉴스 정리 (Trump 베이징 후속 / NVDA 파이프라인 리크)",
          "active": false
        },
        {
          "time_kst": "20:00",
          "time_et": "07:00",
          "label": "유럽장 프리뷰 + 반도체 ADR 체크",
          "active": false
        },
        {
          "time_kst": "21:00",
          "time_et": "08:00",
          "label": "옵션 IV 점검 (NVDA, AMAT, AVGO)",
          "active": false
        },
        {
          "time_kst": "21:30",
          "time_et": "08:30",
          "label": "📊 美 4월 NAHB 주택지수 발표",
          "active": false
        },
        {
          "time_kst": "22:30",
          "time_et": "09:30",
          "label": "🔔 미국장 개장 — 갭 추격 금지",
          "key": true,
          "active": false
        },
        {
          "time_kst": "22:35",
          "time_et": "09:35",
          "label": "시초가 흡수 후 NVDA 234 위 안착 확인",
          "active": false
        },
        {
          "time_kst": "23:00",
          "time_et": "10:00",
          "label": "Reddit/WSB 실시간 게시글 흐름 체크",
          "active": false
        },
        {
          "time_kst": "00:30 (+1d)",
          "time_et": "11:30",
          "label": "유동성 골든타임 (점심 전 매수자 강세)",
          "active": false
        },
        {
          "time_kst": "02:00 (+1d)",
          "time_et": "13:00",
          "label": "옵션 흐름 재점검 (smart money ratio)",
          "active": false
        },
        {
          "time_kst": "04:30 (+1d)",
          "time_et": "15:30",
          "label": "마감 30분 — NVDA·AMAT 헷지/익절 결정",
          "active": false
        },
        {
          "time_kst": "05:00 (+1d)",
          "time_et": "16:00",
          "label": "📍 미국장 마감, NVDA 어닝 D-1 점호",
          "key": true,
          "active": false
        }
      ],
      "sectors": [
        {
          "name": "Semiconductors",
          "strength": 0.9,
          "ticker_count": 7
        },
        {
          "name": "AI Networking",
          "strength": 0.84,
          "ticker_count": 2
        },
        {
          "name": "Software",
          "strength": 0.72,
          "ticker_count": 2
        },
        {
          "name": "Space",
          "strength": 0.7,
          "ticker_count": 2
        },
        {
          "name": "Cloud / AI Infra",
          "strength": 0.68,
          "ticker_count": 2
        },
        {
          "name": "Internet",
          "strength": 0.6,
          "ticker_count": 2
        },
        {
          "name": "Compute / Mining",
          "strength": 0.54,
          "ticker_count": 1
        },
        {
          "name": "Retail (Meme)",
          "strength": 0.32,
          "ticker_count": 2
        }
      ],
      "claude_ranking": [
        {
          "rank": 1,
          "ticker": "NVDA",
          "reasoning": "어닝 D-2 셋업 — IV 35%, 옵션 콜플로우 4.1, 데이터센터 60B 컨센 돌파 가능성",
          "signals": [
            "5/20 어닝 D-2",
            "옵션 IV 35% / C/P 4.1",
            "H200 中 수출 라이선스 효과 반영"
          ]
        },
        {
          "rank": 2,
          "ticker": "AMAT",
          "reasoning": "5/14 가이드 +30% 상향의 follow-through, NVDA 수혜 가장 가까운 second derivative",
          "signals": [
            "WFE 가이드 +30%",
            "Q2 EPS 비트 +12%",
            "셀사이드 PT 평균 +18% 상향"
          ]
        },
        {
          "rank": 3,
          "ticker": "AVGO",
          "reasoning": "VMware ARR 가속 + OpenAI 칩 디자인 윈, 9월 어닝 전 리레이팅 1순위",
          "signals": [
            "VMware ARR Q/Q +22%",
            "OpenAI ASIC 파트너십 리크",
            "옵션 unusual call 활동"
          ]
        },
        {
          "rank": 4,
          "ticker": "NBIS",
          "reasoning": "셀사이드 커버리지 얕고 NVDA 후방수혜, WSB 인덱스 신규 편입으로 리테일 유입",
          "signals": [
            "WSB 2026 인덱스 신규편입",
            "H100 5천대 신규 capex",
            "AMAT 가이드 후방수혜"
          ]
        },
        {
          "rank": 5,
          "ticker": "ARM",
          "reasoning": "데이터센터 CPU 점유율 12% 돌파 + Cobalt 200 발주 가속, NVDA 옆자리 트레이드",
          "signals": [
            "DC CPU 점유율 12%",
            "MSFT Cobalt 발주 +40%",
            "Q1 로열티 +35%"
          ]
        }
      ],
      "hidden_edges": [
        {
          "ticker": "NBIS",
          "reason": "셀사이드 커버리지 4곳뿐인데 AMAT 가이드 직접 수혜 + WSB 인덱스 신규 편입. 리레이팅 여지 가장 큼"
        },
        {
          "ticker": "IREN",
          "reason": "BTC ATH 갱신 흐름 + AI 컴퓨트 호스팅 신규 매출 분기 +60%. 리테일은 아직 비트마이닝으로만 분류 중"
        }
      ],
      "overheated": [
        {
          "ticker": "GME",
          "reason": "WSB 거론 +220% w/w, RSI 82, 14일 가격 +28% — 펀더멘털 없이 모멘텀만으로 끌어올린 구간"
        },
        {
          "ticker": "SMCI",
          "reason": "재상장 후 +45% / 5일 콜 옵션 IV 78%, 회계 노이즈 잔존 — 어닝 발표 전 추격 위험"
        }
      ],
      "tickers": [
        {
          "rank": 1,
          "ticker": "NVDA",
          "name": "NVIDIA Corporation",
          "sector": "Semi",
          "sector_full": "Semiconductors",
          "price": 234.1,
          "change_pct": -0.7,
          "score_total": 89.4,
          "score_reddit": 93,
          "score_news": 91,
          "score_trends": 85,
          "score_options": 94,
          "quadrant": "hot",
          "claude_rank": 1,
          "claude_summary": "어닝 D-2 셋업, 추격 금지 — 풀백 매수만 정직하게 가요.",
          "claude_signals": [
            "5/20 어닝 D-2",
            "옵션 IV 35% / C/P 4.1",
            "H200 中 라이선스 효과"
          ],
          "narrative": "NVDA는 5/15 4.4% 급등 후 보합권 마감, 월간 +14%. 5/20(화) 장마감 후 Q1 FY27 어닝을 앞두고 IV가 35%까지 끓었고 콜/풋 4.1 = smart money가 위쪽 베팅을 굳혔어요. 다만 어닝 직전 IV crush 갭다운 가능성도 동시에 커지는 구간이라, 월요일은 풀백 매수만 정직하게 가야 해요.",
          "entry": 234.0,
          "tp1": 245.0,
          "tp2": 258.0,
          "sl": 226.0,
          "entry_comment": "22:35 시초가 흡수 후 234 위 안착 시 0.3R 분할, 어닝 전 절반 익절 권장",
          "catalysts": [
            "5/20 화 장마감 후 NVDA Q1 FY27 어닝",
            "H200 中 수출 라이선스 실적 반영",
            "GTC 후속 기관 PT 상향 사이클",
            "Trump 베이징 방문 후속 美中 디탕트"
          ],
          "risks": [
            "어닝 직전 IV crush 갭다운",
            "데이터센터 가이드 60B 미달 시 -8%",
            "TSMC CoWoS 캡 재점화"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 1920,
              "sentiment": 0.79
            },
            {
              "sub": "stocks",
              "count": 760,
              "sentiment": 0.72
            },
            {
              "sub": "investing",
              "count": 425,
              "sentiment": 0.69
            }
          ],
          "news_headlines": [
            {
              "title": "Wall Street braces for $60B+ data center quarter as NVDA earnings near",
              "source": "Bloomberg",
              "ago": "14h"
            },
            {
              "title": "NVDA call options IV jumps to 35% on D-2 of earnings",
              "source": "Bloomberg",
              "ago": "22h"
            },
            {
              "title": "H200 Chinese export licenses to flow into Q1 results: analysts",
              "source": "Reuters",
              "ago": "1d"
            }
          ],
          "trend_surge_pct": 84,
          "options_detail": {
            "call_volume": 428000,
            "put_volume": 104000,
            "cp_ratio": 4.12,
            "smart_money_ratio": 0.83,
            "unusual": true
          }
        },
        {
          "rank": 2,
          "ticker": "AMAT",
          "name": "Applied Materials Inc.",
          "sector": "Semi",
          "sector_full": "Semiconductors",
          "price": 205.4,
          "change_pct": 2.1,
          "score_total": 86.7,
          "score_reddit": 78,
          "score_news": 91,
          "score_trends": 80,
          "score_options": 88,
          "quadrant": "hot",
          "claude_rank": 2,
          "claude_summary": "가이드 +30% follow-through, NVDA 어닝 수혜 second derivative — 월요일 풀백 매수 1순위.",
          "claude_signals": [
            "WFE 가이드 +30%",
            "Q2 EPS 비트 +12%",
            "셀사이드 PT +18% 상향"
          ],
          "narrative": "5/14 어닝에서 EPS·매출 비트 + WFE 가이드 30% 상향 충격을 안겨준 뒤 +13% 갭업. NVDA 어닝 전 가장 강한 wafer fab equipment 픽이라 NVDA 모멘텀의 second derivative로 보고 들어가요. 5/15 보합으로 마감해서 풀백 진입 여지 확보됐어요.",
          "entry": 204.0,
          "tp1": 215.0,
          "tp2": 225.0,
          "sl": 196.0,
          "entry_comment": "갭업 후 첫 1시간 횡보 확인 후 204 위 안착 시 진입, 손절 196 타이트",
          "catalysts": [
            "NVDA 어닝 후속 capex 상향",
            "Lam·KLA 동반 PT 상향",
            "HBM4 라인 발주 가속"
          ],
          "risks": [
            "NVDA 가이드 미달 시 동반 하락",
            "Lam·KLA 가이드 미달 위험",
            "Litho 일정 지연"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "stocks",
              "count": 520,
              "sentiment": 0.74
            },
            {
              "sub": "semiconductors",
              "count": 280,
              "sentiment": 0.81
            },
            {
              "sub": "investing",
              "count": 210,
              "sentiment": 0.66
            }
          ],
          "news_headlines": [
            {
              "title": "Applied Materials sees WFE growth at 30% in 2026",
              "source": "CNBC",
              "ago": "2d"
            },
            {
              "title": "Sell-side PTs lift Applied to $230 average after guide",
              "source": "Barron's",
              "ago": "1d"
            }
          ],
          "trend_surge_pct": 62,
          "options_detail": {
            "call_volume": 182000,
            "put_volume": 54000,
            "cp_ratio": 3.37,
            "smart_money_ratio": 0.79,
            "unusual": true
          }
        },
        {
          "rank": 3,
          "ticker": "AVGO",
          "name": "Broadcom Inc.",
          "sector": "Semi",
          "sector_full": "Semiconductors",
          "price": 1764.2,
          "change_pct": 1.4,
          "score_total": 83.9,
          "score_reddit": 72,
          "score_news": 86,
          "score_trends": 76,
          "score_options": 89,
          "quadrant": "hot",
          "claude_rank": 3,
          "claude_summary": "VMware ARR 가속 + OpenAI ASIC 디자인 리크 — 9월 어닝 전 리레이팅 1순위.",
          "claude_signals": [
            "VMware ARR Q/Q +22%",
            "OpenAI ASIC 파트너십 리크",
            "옵션 unusual call 활동"
          ],
          "narrative": "VMware 통합 후 첫 풀분기 ARR이 Q/Q +22%로 매출 가속 진입. The Information이 5/16 OpenAI가 Stargate Phase 2용 ASIC 파트너로 AVGO 선정 검토 중이라고 보도해서 옵션 콜플로우가 unusual로 튀었어요. 9월 어닝 전 리레이팅 트레이드.",
          "entry": 1760.0,
          "tp1": 1830.0,
          "tp2": 1900.0,
          "sl": 1700.0,
          "entry_comment": "고가 종목이라 분할진입 2~3차, 1700 이하 절대 손절",
          "catalysts": [
            "VMware ARR 가속",
            "OpenAI ASIC 윈 공식 확인",
            "Apple 모뎀 영업 ROIC"
          ],
          "risks": [
            "OpenAI 윈 무산 시 -6%",
            "VMware 마진 압박",
            "주가 PER 35배 부담"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "stocks",
              "count": 340,
              "sentiment": 0.69
            },
            {
              "sub": "investing",
              "count": 190,
              "sentiment": 0.71
            }
          ],
          "news_headlines": [
            {
              "title": "OpenAI in talks with Broadcom for Stargate ASIC partner role",
              "source": "The Information",
              "ago": "1d"
            },
            {
              "title": "VMware integration drives Broadcom ARR up 22% Q/Q",
              "source": "Bloomberg",
              "ago": "3d"
            }
          ],
          "trend_surge_pct": 54,
          "options_detail": {
            "call_volume": 124000,
            "put_volume": 38000,
            "cp_ratio": 3.26,
            "smart_money_ratio": 0.81,
            "unusual": true
          }
        },
        {
          "rank": 4,
          "ticker": "NBIS",
          "name": "Nebius Group N.V.",
          "sector": "Cloud",
          "sector_full": "AI Cloud Infrastructure",
          "price": 67.8,
          "change_pct": 3.4,
          "score_total": 82.2,
          "score_reddit": 88,
          "score_news": 76,
          "score_trends": 84,
          "score_options": 80,
          "quadrant": "hidden",
          "claude_rank": 4,
          "claude_summary": "셀사이드 커버리지 4곳뿐, NVDA 후방수혜 + WSB 인덱스 신규편입 — 리레이팅 여지 가장 큼.",
          "claude_signals": [
            "WSB 2026 인덱스 신규편입",
            "H100 5천대 신규 capex",
            "AMAT 가이드 후방수혜"
          ],
          "narrative": "Yandex 분사 후 H100 5천대 신규 capex 발표 + AMAT 가이드 상향의 직접 수혜주로 부각. 셀사이드 커버리지가 4곳뿐이라 정식 PT 상향이 시작되면 리레이팅 여지가 가장 큰 종목이에요. WSB 2026 인덱스 신규 편입으로 리테일 유입도 동시에 시작됐어요.",
          "entry": 67.0,
          "tp1": 72.0,
          "tp2": 78.0,
          "sl": 63.0,
          "entry_comment": "시초가 -2% 갭다운이면 분할 호기, 갭업 시 풀백 대기",
          "catalysts": [
            "JPM·MS 신규 커버 개시",
            "H100 capex 효과 매출 반영",
            "AI 클라우드 ARR 가이드 상향"
          ],
          "risks": [
            "거래량 얕아 변동성 큼",
            "유럽 데이터 규제 노이즈"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 860,
              "sentiment": 0.82
            },
            {
              "sub": "NBIS",
              "count": 280,
              "sentiment": 0.88
            },
            {
              "sub": "stocks",
              "count": 140,
              "sentiment": 0.72
            }
          ],
          "news_headlines": [
            {
              "title": "Nebius adds 5,000 H100 GPUs; AI cloud ARR guide raised",
              "source": "The Information",
              "ago": "2d"
            },
            {
              "title": "Nebius joins WSB 2026 retail index",
              "source": "Reddit Daily",
              "ago": "1d"
            }
          ],
          "trend_surge_pct": 78,
          "options_detail": {
            "call_volume": 48000,
            "put_volume": 14000,
            "cp_ratio": 3.43,
            "smart_money_ratio": 0.76,
            "unusual": false
          }
        },
        {
          "rank": 5,
          "ticker": "ARM",
          "name": "Arm Holdings plc",
          "sector": "Semi",
          "sector_full": "Semiconductors",
          "price": 156.4,
          "change_pct": 1.9,
          "score_total": 80.8,
          "score_reddit": 74,
          "score_news": 82,
          "score_trends": 78,
          "score_options": 85,
          "quadrant": "hot",
          "claude_rank": 5,
          "claude_summary": "DC CPU 점유율 12% + MSFT Cobalt 200 발주 가속, NVDA 옆자리 트레이드.",
          "claude_signals": [
            "DC CPU 점유율 12%",
            "MSFT Cobalt 발주 +40%",
            "Q1 로열티 +35%"
          ],
          "narrative": "데이터센터 CPU에서 x86 점유율을 처음으로 12% 돌파, MSFT가 Cobalt 200 발주를 +40% 늘리며 ARM 로열티 매출 가속. Q1 로열티 +35% YoY가 컨센 +28% 대비 큰 폭 비트 가능. NVDA 어닝 후 GPU+CPU 묶음 트레이드의 옆자리 픽이에요.",
          "entry": 156.0,
          "tp1": 165.0,
          "tp2": 175.0,
          "sl": 149.0,
          "entry_comment": "NVDA 어닝 후 콜 옵션 매수 동행, 손절 149 타이트",
          "catalysts": [
            "MSFT Cobalt 발주 가속",
            "Q1 로열티 +35%",
            "Apple M5 ramp"
          ],
          "risks": [
            "NVDA 가이드 미달 동반 하락",
            "Apple 모뎀 일정 노이즈"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "stocks",
              "count": 380,
              "sentiment": 0.72
            },
            {
              "sub": "investing",
              "count": 220,
              "sentiment": 0.68
            }
          ],
          "news_headlines": [
            {
              "title": "Microsoft Cobalt 200 orders ramp 40% Q/Q on Arm royalties",
              "source": "Bloomberg",
              "ago": "2d"
            }
          ],
          "trend_surge_pct": 58,
          "options_detail": {
            "call_volume": 112000,
            "put_volume": 36000,
            "cp_ratio": 3.11,
            "smart_money_ratio": 0.77,
            "unusual": false
          }
        },
        {
          "rank": 6,
          "ticker": "TSM",
          "name": "Taiwan Semiconductor Mfg.",
          "sector": "Semi",
          "sector_full": "Semiconductors",
          "price": 230.5,
          "change_pct": 1.3,
          "score_total": 78.6,
          "score_reddit": 62,
          "score_news": 84,
          "score_trends": 74,
          "score_options": 82,
          "quadrant": "hot",
          "claude_rank": 6,
          "claude_summary": "4월 매출 +48% YoY, CoWoS 캐파 +50% 가이드 — NVDA 어닝 전 동행 픽.",
          "narrative": "4월 월매출 +48% YoY 비트, CoWoS 캐파 가이드 +50% 상향으로 NVDA 어닝 전 가장 명확한 모멘텀 픽. ADR로 매수 시 환 헷지 검토.",
          "catalysts": [
            "4월 매출 +48% YoY",
            "CoWoS 캐파 +50% 가이드"
          ],
          "risks": [
            "TSMC 외환 손실",
            "美中 무역 노이즈"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "stocks",
              "count": 340,
              "sentiment": 0.72
            }
          ],
          "news_headlines": [
            {
              "title": "TSMC April revenue jumps 48% YoY on AI demand",
              "source": "Reuters",
              "ago": "4d"
            }
          ],
          "trend_surge_pct": 48,
          "options_detail": {
            "call_volume": 98000,
            "put_volume": 34000,
            "cp_ratio": 2.88,
            "smart_money_ratio": 0.74,
            "unusual": false
          }
        },
        {
          "rank": 7,
          "ticker": "CSCO",
          "name": "Cisco Systems Inc.",
          "sector": "Network",
          "sector_full": "AI Networking",
          "price": 78.2,
          "change_pct": 0.4,
          "score_total": 76.8,
          "score_reddit": 58,
          "score_news": 82,
          "score_trends": 68,
          "score_options": 80,
          "quadrant": "hot",
          "claude_rank": 7,
          "claude_summary": "AI 오더북 $5.3B 공개 follow-through, 풀백 매수 구간 — 갭메우기 위험 잔존.",
          "narrative": "5/14 어닝에서 AI 오더북 $5.3B 공개로 +13% 갭업. 5/15 보합으로 마감해 갭 메우기 위험은 잔존하지만, 풀백 시 78 지지 확인 후 분할 매수 구간.",
          "catalysts": [
            "AI 오더북 +24% Q/Q",
            "Splunk 통합 가속"
          ],
          "risks": [
            "갭 메우기 위험",
            "순매수 강도 둔화"
          ],
          "reddit_sentiment_label": "중립",
          "reddit_breakdown": [
            {
              "sub": "stocks",
              "count": 240,
              "sentiment": 0.62
            }
          ],
          "news_headlines": [
            {
              "title": "Cisco AI orderbook hits $5.3B",
              "source": "Reuters",
              "ago": "3d"
            }
          ],
          "trend_surge_pct": 42,
          "options_detail": {
            "call_volume": 78000,
            "put_volume": 26000,
            "cp_ratio": 3.0,
            "smart_money_ratio": 0.72,
            "unusual": false
          }
        },
        {
          "rank": 8,
          "ticker": "AMD",
          "name": "Advanced Micro Devices",
          "sector": "Semi",
          "sector_full": "Semiconductors",
          "price": 172.6,
          "change_pct": 1.6,
          "score_total": 75.4,
          "score_reddit": 76,
          "score_news": 74,
          "score_trends": 76,
          "score_options": 76,
          "quadrant": "hot",
          "claude_rank": 8,
          "claude_summary": "MI400 ramp 5/15 컨퍼런스 디테일 공개 + Inference 점유율 회복.",
          "narrative": "5/15 OCP 컨퍼런스에서 MI400 ramp 일정 공개, inference 시장 점유율 회복 신호. NVDA 어닝 후 페어 트레이드 옵션.",
          "catalysts": [
            "MI400 ramp 6월",
            "Hyperscaler 신규 발주",
            "Epyc Turin 점유율 회복"
          ],
          "risks": [
            "NVDA 어닝 강세 시 페어 무너짐",
            "MI400 일정 지연"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 620,
              "sentiment": 0.71
            },
            {
              "sub": "AMD_Stock",
              "count": 240,
              "sentiment": 0.78
            }
          ],
          "news_headlines": [
            {
              "title": "AMD details MI400 GPU ramp at OCP Summit",
              "source": "CNBC",
              "ago": "2d"
            }
          ],
          "trend_surge_pct": 52,
          "options_detail": {
            "call_volume": 162000,
            "put_volume": 62000,
            "cp_ratio": 2.61,
            "smart_money_ratio": 0.69,
            "unusual": false
          }
        },
        {
          "rank": 9,
          "ticker": "PLTR",
          "name": "Palantir Technologies",
          "sector": "Software",
          "sector_full": "AI Software",
          "price": 142.4,
          "change_pct": -0.8,
          "score_total": 74.2,
          "score_reddit": 86,
          "score_news": 68,
          "score_trends": 78,
          "score_options": 68,
          "quadrant": "hot",
          "claude_rank": 9,
          "claude_summary": "미 육군 신규 $480M 계약 발표 임박설 + WSB Top 5 — 단기 추격은 위험.",
          "narrative": "WSB 거론량 Top 5 유지, 미 육군 신규 $480M 계약 발표 임박 소문. 다만 PER 230배라 단기 추격은 위험, 풀백 매수 권장.",
          "catalysts": [
            "미 육군 $480M 계약",
            "AIP ARR 가속"
          ],
          "risks": [
            "PER 230배 밸류 부담",
            "WSB 모멘텀 꺾일 시 빠른 후퇴"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 1180,
              "sentiment": 0.81
            },
            {
              "sub": "PLTR",
              "count": 540,
              "sentiment": 0.89
            }
          ],
          "news_headlines": [
            {
              "title": "Palantir said to be finalizing $480M Army contract",
              "source": "Bloomberg",
              "ago": "2d"
            }
          ],
          "trend_surge_pct": 68,
          "options_detail": {
            "call_volume": 210000,
            "put_volume": 98000,
            "cp_ratio": 2.14,
            "smart_money_ratio": 0.62,
            "unusual": false
          }
        },
        {
          "rank": 10,
          "ticker": "MU",
          "name": "Micron Technology Inc.",
          "sector": "Semi",
          "sector_full": "Memory",
          "price": 148.2,
          "change_pct": 2.4,
          "score_total": 73.6,
          "score_reddit": 58,
          "score_news": 78,
          "score_trends": 74,
          "score_options": 80,
          "quadrant": "hot",
          "claude_rank": 10,
          "claude_summary": "HBM4 가이드 상향 + 6월 어닝 D-30, 메모리 사이클 재가속 픽.",
          "narrative": "HBM4 매출 가이드 상향, 6월 어닝 D-30 진입 + DRAM 스팟가격 5월 +12% — 메모리 사이클 재가속.",
          "catalysts": [
            "HBM4 가이드 상향",
            "DRAM 스팟 +12%"
          ],
          "risks": [
            "고객사 재고 재조정",
            "NAND ASP 하방"
          ],
          "reddit_sentiment_label": "중립",
          "reddit_breakdown": [
            {
              "sub": "stocks",
              "count": 280,
              "sentiment": 0.64
            }
          ],
          "news_headlines": [
            {
              "title": "DRAM spot prices rally 12% in May on AI demand",
              "source": "DigiTimes",
              "ago": "1d"
            }
          ],
          "trend_surge_pct": 54,
          "options_detail": {
            "call_volume": 124000,
            "put_volume": 48000,
            "cp_ratio": 2.58,
            "smart_money_ratio": 0.71,
            "unusual": false
          }
        },
        {
          "rank": 11,
          "ticker": "CRBS",
          "name": "Cerebras Systems Inc.",
          "sector": "Semi",
          "sector_full": "AI Inference",
          "price": 48.4,
          "change_pct": -2.8,
          "score_total": 71.8,
          "score_reddit": 82,
          "score_news": 70,
          "score_trends": 72,
          "score_options": 62,
          "quadrant": "overheat",
          "claude_rank": null,
          "claude_summary": "IPO 첫주 +68%, 5/15 -2.8% 첫 풀백. 매수보단 사이즈 관리 시즌.",
          "catalysts": [
            "IPO follow-through",
            "NVDA 대안 inference 내러티브"
          ],
          "risks": [
            "IPO 락업 노이즈",
            "WS 30일 후 PT 보수적"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 680,
              "sentiment": 0.78
            }
          ],
          "news_headlines": [
            {
              "title": "Cerebras drops 2.8% as IPO froth cools",
              "source": "Bloomberg",
              "ago": "2d"
            }
          ],
          "trend_surge_pct": 62,
          "options_detail": {
            "call_volume": 34000,
            "put_volume": 22000,
            "cp_ratio": 1.55,
            "smart_money_ratio": 0.48,
            "unusual": false
          }
        },
        {
          "rank": 12,
          "ticker": "ASTS",
          "name": "AST SpaceMobile Inc.",
          "sector": "Space",
          "sector_full": "Satellite Comms",
          "price": 58.2,
          "change_pct": 2.1,
          "score_total": 70.4,
          "score_reddit": 84,
          "score_news": 62,
          "score_trends": 78,
          "score_options": 58,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "6월 BlueBird 5호 발사 + AT&T 상용화 D-45, 우주 페어트레이드.",
          "catalysts": [
            "BlueBird 5호 6월 발사",
            "AT&T 상용화 D-45"
          ],
          "risks": [
            "발사 지연",
            "capex 부담"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 720,
              "sentiment": 0.79
            },
            {
              "sub": "ASTSpaceMobile",
              "count": 420,
              "sentiment": 0.91
            }
          ],
          "news_headlines": [
            {
              "title": "AST SpaceMobile BlueBird-5 launch set for mid-June",
              "source": "SpaceNews",
              "ago": "3d"
            }
          ],
          "trend_surge_pct": 74,
          "options_detail": {
            "call_volume": 52000,
            "put_volume": 22000,
            "cp_ratio": 2.36,
            "smart_money_ratio": 0.68,
            "unusual": false
          }
        },
        {
          "rank": 13,
          "ticker": "RKLB",
          "name": "Rocket Lab USA Inc.",
          "sector": "Space",
          "sector_full": "Space Launch",
          "price": 42.6,
          "change_pct": 1.8,
          "score_total": 69.2,
          "score_reddit": 80,
          "score_news": 66,
          "score_trends": 74,
          "score_options": 58,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "Neutron 첫 발사 D-25, ASTS와 짝 거래.",
          "catalysts": [
            "Neutron 첫 발사 6월",
            "USSF 신규 계약"
          ],
          "risks": [
            "Neutron 일정 지연",
            "Rutherford 캐파"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 840,
              "sentiment": 0.72
            },
            {
              "sub": "RocketLab",
              "count": 380,
              "sentiment": 0.84
            }
          ],
          "news_headlines": [
            {
              "title": "Rocket Lab Neutron rolls to pad for hot fire test",
              "source": "SpaceNews",
              "ago": "1d"
            }
          ],
          "trend_surge_pct": 62,
          "options_detail": {
            "call_volume": 58000,
            "put_volume": 24000,
            "cp_ratio": 2.42,
            "smart_money_ratio": 0.66,
            "unusual": false
          }
        },
        {
          "rank": 14,
          "ticker": "SMCI",
          "name": "Super Micro Computer",
          "sector": "Hardware",
          "sector_full": "AI Servers",
          "price": 58.4,
          "change_pct": -3.4,
          "score_total": 68.4,
          "score_reddit": 74,
          "score_news": 58,
          "score_trends": 76,
          "score_options": 66,
          "quadrant": "overheat",
          "claude_rank": null,
          "claude_summary": "재상장 후 +45%, 회계 노이즈 잔존 — 추격 위험.",
          "catalysts": [
            "NVDA 어닝 후방수혜",
            "AI 서버 ramp"
          ],
          "risks": [
            "회계 노이즈",
            "20-day RSI 75"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 520,
              "sentiment": 0.68
            }
          ],
          "news_headlines": [
            {
              "title": "Super Micro reset year-1 anniversary; volatility lingers",
              "source": "Bloomberg",
              "ago": "1d"
            }
          ],
          "trend_surge_pct": 68,
          "options_detail": {
            "call_volume": 86000,
            "put_volume": 42000,
            "cp_ratio": 2.05,
            "smart_money_ratio": 0.58,
            "unusual": false
          }
        },
        {
          "rank": 15,
          "ticker": "GME",
          "name": "GameStop Corp.",
          "sector": "Retail",
          "sector_full": "Meme Retail",
          "price": 42.8,
          "change_pct": 4.2,
          "score_total": 67.8,
          "score_reddit": 92,
          "score_news": 48,
          "score_trends": 88,
          "score_options": 42,
          "quadrant": "overheat",
          "claude_rank": null,
          "claude_summary": "WSB 거론 +220% w/w, RSI 82 — 헷지 또는 회피.",
          "catalysts": [
            "WSB 모멘텀 폭발",
            "BTC 노출 확대 소문"
          ],
          "risks": [
            "RSI 82 과열",
            "펀더멘털 없음"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 2840,
              "sentiment": 0.84
            },
            {
              "sub": "Superstonk",
              "count": 1820,
              "sentiment": 0.94
            }
          ],
          "news_headlines": [
            {
              "title": "GameStop volume surges as WSB chatter goes parabolic",
              "source": "Reuters",
              "ago": "1d"
            }
          ],
          "trend_surge_pct": 94,
          "options_detail": {
            "call_volume": 182000,
            "put_volume": 94000,
            "cp_ratio": 1.94,
            "smart_money_ratio": 0.42,
            "unusual": true
          }
        },
        {
          "rank": 16,
          "ticker": "IREN",
          "name": "IREN Limited",
          "sector": "Compute",
          "sector_full": "Compute / Mining",
          "price": 18.4,
          "change_pct": 2.6,
          "score_total": 66.4,
          "score_reddit": 62,
          "score_news": 68,
          "score_trends": 68,
          "score_options": 68,
          "quadrant": "hidden",
          "claude_rank": null,
          "claude_summary": "BTC ATH + AI 컴퓨트 호스팅 매출 +60% — 리테일은 아직 마이닝으로만 분류 중.",
          "catalysts": [
            "BTC ATH 갱신",
            "AI 호스팅 ARR +60%"
          ],
          "risks": [
            "BTC 변동성",
            "전력 비용"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "stocks",
              "count": 160,
              "sentiment": 0.66
            }
          ],
          "news_headlines": [
            {
              "title": "IREN AI hosting revenue +60% Q/Q",
              "source": "The Block",
              "ago": "2d"
            }
          ],
          "trend_surge_pct": 48,
          "options_detail": {
            "call_volume": 42000,
            "put_volume": 18000,
            "cp_ratio": 2.33,
            "smart_money_ratio": 0.68,
            "unusual": false
          }
        },
        {
          "rank": 17,
          "ticker": "RDDT",
          "name": "Reddit Inc.",
          "sector": "Internet",
          "sector_full": "Internet",
          "price": 156.8,
          "change_pct": 1.4,
          "score_total": 65.6,
          "score_reddit": 58,
          "score_news": 72,
          "score_trends": 62,
          "score_options": 70,
          "quadrant": "hidden",
          "claude_rank": null,
          "claude_summary": "Search ad CPM +35%, AI 라이선싱 매출 가시화.",
          "catalysts": [
            "AI 라이선싱 매출",
            "Search ad CPM 상승"
          ],
          "risks": [
            "트래픽 둔화",
            "경쟁 SNS 광고 가격"
          ],
          "reddit_sentiment_label": "중립",
          "reddit_breakdown": [
            {
              "sub": "stocks",
              "count": 160,
              "sentiment": 0.62
            }
          ],
          "news_headlines": [
            {
              "title": "Reddit search ad CPM jumps 35% in Q1",
              "source": "Adweek",
              "ago": "5d"
            }
          ],
          "trend_surge_pct": 34,
          "options_detail": {
            "call_volume": 48000,
            "put_volume": 22000,
            "cp_ratio": 2.18,
            "smart_money_ratio": 0.66,
            "unusual": false
          }
        },
        {
          "rank": 18,
          "ticker": "GOOGL",
          "name": "Alphabet Inc.",
          "sector": "Internet",
          "sector_full": "Internet",
          "price": 214.4,
          "change_pct": 0.6,
          "score_total": 64.8,
          "score_reddit": 52,
          "score_news": 74,
          "score_trends": 58,
          "score_options": 74,
          "quadrant": "hidden",
          "claude_rank": null,
          "claude_summary": "Gemini 3 5/22 발표 임박 + AI Search CPM 상승.",
          "catalysts": [
            "Gemini 3 5/22 발표",
            "Cloud AI ARR +28%"
          ],
          "risks": [
            "DOJ 분할 가능성",
            "Search 시장 잠식"
          ],
          "reddit_sentiment_label": "중립",
          "reddit_breakdown": [
            {
              "sub": "stocks",
              "count": 180,
              "sentiment": 0.58
            }
          ],
          "news_headlines": [
            {
              "title": "Google to launch Gemini 3 on May 22",
              "source": "The Verge",
              "ago": "2d"
            }
          ],
          "trend_surge_pct": 42,
          "options_detail": {
            "call_volume": 156000,
            "put_volume": 68000,
            "cp_ratio": 2.29,
            "smart_money_ratio": 0.7,
            "unusual": false
          }
        },
        {
          "rank": 19,
          "ticker": "MSFT",
          "name": "Microsoft Corporation",
          "sector": "Software",
          "sector_full": "Software",
          "price": 468.2,
          "change_pct": 0.4,
          "score_total": 62.4,
          "score_reddit": 48,
          "score_news": 68,
          "score_trends": 54,
          "score_options": 78,
          "quadrant": "hidden",
          "claude_rank": null,
          "claude_summary": "Cobalt 200 ramp + OpenAI Stargate Phase 2 매출 가시화.",
          "catalysts": [
            "Cobalt 200 ramp",
            "Stargate Phase 2"
          ],
          "risks": [
            "Azure 성장 둔화 우려",
            "capex 부담"
          ],
          "reddit_sentiment_label": "중립",
          "reddit_breakdown": [
            {
              "sub": "stocks",
              "count": 140,
              "sentiment": 0.56
            }
          ],
          "news_headlines": [
            {
              "title": "Microsoft accelerates Cobalt 200 deployment",
              "source": "Bloomberg",
              "ago": "2d"
            }
          ],
          "trend_surge_pct": 28,
          "options_detail": {
            "call_volume": 182000,
            "put_volume": 82000,
            "cp_ratio": 2.22,
            "smart_money_ratio": 0.71,
            "unusual": false
          }
        },
        {
          "rank": 20,
          "ticker": "ORCL",
          "name": "Oracle Corporation",
          "sector": "Cloud",
          "sector_full": "Cloud / AI Infrastructure",
          "price": 228.4,
          "change_pct": 1.9,
          "score_total": 61.2,
          "score_reddit": 48,
          "score_news": 80,
          "score_trends": 54,
          "score_options": 76,
          "quadrant": "hidden",
          "claude_rank": null,
          "claude_summary": "OCI Gen2 매출 분기 +28%, Stargate 발주 가속.",
          "catalysts": [
            "Stargate Phase 2 발주",
            "OCI 매출 가속"
          ],
          "risks": [
            "capex 부담",
            "경쟁사 가격 압박"
          ],
          "reddit_sentiment_label": "중립",
          "reddit_breakdown": [
            {
              "sub": "stocks",
              "count": 120,
              "sentiment": 0.58
            }
          ],
          "news_headlines": [
            {
              "title": "Oracle OCI keeps winning Stargate workloads",
              "source": "The Information",
              "ago": "2d"
            }
          ],
          "trend_surge_pct": 24,
          "options_detail": {
            "call_volume": 62000,
            "put_volume": 20000,
            "cp_ratio": 3.1,
            "smart_money_ratio": 0.73,
            "unusual": false
          }
        }
      ]
    },
    "2026-05-15": {
      "date": "2026-05-15",
      "date_display": "2026-05-15 (금·미국장)",
      "market_mood": "bullish",
      "market_mood_score": 76,
      "market_summary": "S&P·나스닥 사상 최고가 마감 다음날이라 일단 강세 흐름은 유지되는데, NVDA 어닝(5/20) D-5 + 옵션 만기 금요일이라 변동성 확대도 같이 와요. 추격보단 눌림 매수가 정답.",
      "sector_tilt": [
        "Semiconductors",
        "AI Networking",
        "Space"
      ],
      "top_ticker": "NVDA",
      "candidate_count": 20,
      "today_action": {
        "one_liner": "AI 반도체 사이클 재가속 구간 — 갭업 추격 금지, 22:50 KST 풀백 매수 + GME류 과열 회피로 정직하게 가요.",
        "priorities": [
          {
            "icon": "🎯",
            "ticker": "NVDA",
            "text": "22:35 시초가 흡수 후 234달러 위 안착 시 0.4R 분할, TP1 245 / SL 226. 어닝 D-5라 1차 익절 빠르게."
          },
          {
            "icon": "💎",
            "ticker": "AMAT",
            "text": "갭업 매도 압박 흡수 후 22:50 KST 461달러 재테스트 시 0.5R, 478 돌파 시 추가. WFE 가이드 +30% 컨센 갭이 가장 큼."
          },
          {
            "icon": "🚨",
            "ticker": "GME",
            "text": "WSB 멘션 2840건 폭주지만 스마트머니 38점·옵션 P/C 1.16. 정확히 회피해야 할 종목 — 매수 X."
          }
        ]
      },
      "routine_timeline": [
        {
          "time_kst": "21:30",
          "time_et": "08:30",
          "label": "프리마켓 점검 · 4월 산업생산 데이터 발표",
          "active": true
        },
        {
          "time_kst": "22:00",
          "time_et": "09:00",
          "label": "AMAT·CSCO 시간외 흐름 확인",
          "active": true
        },
        {
          "time_kst": "22:15",
          "time_et": "09:15",
          "label": "4월 capacity utilization 발표",
          "active": true
        },
        {
          "time_kst": "22:30",
          "time_et": "09:30",
          "label": "🔔 미국장 개장",
          "key": true,
          "active": true
        },
        {
          "time_kst": "22:35",
          "time_et": "09:35",
          "label": "시초가 5분 관망 — 갭업 추격 금지",
          "active": true
        },
        {
          "time_kst": "22:50",
          "time_et": "09:50",
          "label": "NVDA·AMAT 1차 풀백 매수 윈도우",
          "active": true
        },
        {
          "time_kst": "23:30",
          "time_et": "10:30",
          "label": "Cerebras IPO 첫 풀세션 변동성 체크",
          "active": true
        },
        {
          "time_kst": "01:00",
          "time_et": "12:00",
          "label": "유럽장 마감 후 거래량 점검",
          "active": false
        },
        {
          "time_kst": "04:00",
          "time_et": "15:00",
          "label": "옵션 만기 막바지 감마 노출 점검",
          "active": false
        },
        {
          "time_kst": "05:00",
          "time_et": "16:00",
          "label": "🔔 미국장 마감 · 익일 NVDA 어닝 카운트다운 D-3",
          "key": true,
          "active": false
        }
      ],
      "sectors": [
        {
          "name": "Semiconductors",
          "strength": 0.92,
          "ticker_count": 7
        },
        {
          "name": "AI Cloud",
          "strength": 0.78,
          "ticker_count": 3
        },
        {
          "name": "Networking",
          "strength": 0.86,
          "ticker_count": 1
        },
        {
          "name": "Space",
          "strength": 0.74,
          "ticker_count": 2
        },
        {
          "name": "Software",
          "strength": 0.68,
          "ticker_count": 2
        },
        {
          "name": "Internet",
          "strength": 0.62,
          "ticker_count": 2
        },
        {
          "name": "Compute / Mining",
          "strength": 0.58,
          "ticker_count": 1
        },
        {
          "name": "Hardware",
          "strength": 0.42,
          "ticker_count": 1
        },
        {
          "name": "Retail (Meme)",
          "strength": 0.28,
          "ticker_count": 1
        }
      ],
      "claude_ranking": [
        {
          "rank": 1,
          "ticker": "NVDA",
          "reasoning": "어닝 D-5 + H200 中 수출 승인 + AMAT capex 가이드 상향, 3중 촉매 정렬",
          "signals": [
            "5/20 NVDA 어닝",
            "H200 수출 라이선스",
            "AMAT WFE +30% 가이드"
          ]
        },
        {
          "rank": 2,
          "ticker": "AMAT",
          "reasoning": "어제 EPS·매출 비트 + WFE 가이드 +30% 상향, 컨센 갭이 가장 큰 follow-through 트레이드",
          "signals": [
            "EPS $2.86 비트",
            "WFE 20→30% 가이드 점프",
            "콜 P/C 4.4"
          ]
        },
        {
          "rank": 3,
          "ticker": "CSCO",
          "reasoning": "AI 오더북 $5.3B 공개로 networking AI 트레이드 신축, 다만 +13% 후 갭 메우기 가능",
          "signals": [
            "+13.4% 어제 점프",
            "AI 오더 $5.3B",
            "F26 가이드 상향"
          ]
        },
        {
          "rank": 4,
          "ticker": "CRBS",
          "reasoning": "IPO 첫날 +68% 마감, NVDA 대안 inference 내러티브 폭발 — 사이즈 관리 필수",
          "signals": [
            "IPO 데뷔 +68%",
            "Trends 95점",
            "리테일 멘션 1320"
          ]
        },
        {
          "rank": 5,
          "ticker": "NBIS",
          "reasoning": "WSB 인덱스 편입 + AMAT capex 후방 수혜, 셀사이드 커버리지 얕아 리레이팅 여지 1순위",
          "signals": [
            "WSB 2026 인덱스",
            "유럽 GPU 캐파 증설 임박",
            "옵션 P/C 3.0"
          ]
        }
      ],
      "hidden_edges": [
        {
          "ticker": "NBIS",
          "reason": "셀사이드 8명 커버리지 + WSB 인덱스 편입 + AMAT 사이클 후방 수혜 — 컨센 갭이 모든 종목 중 최대"
        },
        {
          "ticker": "AVGO",
          "reason": "리테일 멘션 조용한데 옵션 콜 P/C 4.57, ASIC 매출 컨센 +12% 상향 여지로 6/4 어닝 가이드 업 시나리오"
        },
        {
          "ticker": "ARM",
          "reason": "AMAT 사이클 + Apple M5 사이클 후방 수혜인데 sell-side 조용 + WSB 멘션 56점 — 기관 매집 구간"
        }
      ],
      "overheated": [
        {
          "ticker": "GME",
          "reason": "WSB 멘션 96점 / 스마트머니 38점 / 옵션 P/C 1.16 — 리테일 vs 스마트머니 디버전스가 모든 종목 중 최대"
        },
        {
          "ticker": "SMCI",
          "reason": "리테일 92 / 스마트머니 42 디버전스, 회계 헤드라인 잔존 + 옵션 풋 비율 급등"
        },
        {
          "ticker": "CSCO",
          "reason": "단일 데이 +13.4% 후 차익실현 압박 정상 구간, 추격 매수는 위험"
        }
      ],
      "tickers": [
        {
          "rank": 1,
          "ticker": "NVDA",
          "name": "NVIDIA Corporation",
          "sector": "Semi",
          "sector_full": "Semiconductors",
          "price": 235.74,
          "change_pct": 4.4,
          "score_total": 91.2,
          "score_reddit": 94,
          "score_news": 92,
          "score_trends": 87,
          "score_options": 92,
          "quadrant": "hot",
          "claude_rank": 1,
          "claude_summary": "5/20 어닝 D-5 + H200 中 수출 승인 모멘텀 + AMAT 가이드 상향 후광까지 3중 촉매가 겹친 상태야.",
          "claude_signals": [
            "5/20 NVDA 실적 발표 D-5",
            "H200 중국 10개사 수출 승인",
            "AMAT capex 가이드 +30% 상향"
          ],
          "narrative": "NVDA는 어제 4.4% 급등하며 월간 +15%, 7일 +11.5% 모멘텀을 굳혔어요. 美 정부가 H200 칩 중국 10개사 수출을 승인한 직후라 데이터센터 매출 상향 기대가 본격화됐고, AMAT의 어제 가이드 상향(2026 capex +30%)은 Wafer Fab Equipment 수요가 NVDA 발 주문에서 나온다는 메시지를 시장에 박았어요. 5/20 어닝 발표 5거래일 전이라 콜 옵션 IV가 32%까지 끓고 있어요.",
          "entry": 234.0,
          "tp1": 245.0,
          "tp2": 258.0,
          "sl": 226.0,
          "entry_comment": "프리마켓 갭업 추격 금지, 22:35 시초가 흡수 후 234 위 안착 시 1차 0.4R 분할",
          "catalysts": [
            "5/20 화 장마감 후 NVDA Q1 FY27 어닝",
            "H200 중국 수출 라이선스 효과 실적 반영",
            "GTC 후속 기관 업그레이드 사이클",
            "Trump 베이징 방문 후 美中 반도체 디탕트 기대"
          ],
          "risks": [
            "어닝 직전 IV crush 갭다운 가능",
            "데이터센터 가이드 60B 미달 시 -8% 리스크",
            "TSMC CoWoS 캡 우려 재점화"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 1840,
              "sentiment": 0.78
            },
            {
              "sub": "stocks",
              "count": 720,
              "sentiment": 0.71
            },
            {
              "sub": "investing",
              "count": 410,
              "sentiment": 0.68
            }
          ],
          "news_headlines": [
            {
              "title": "Nvidia jumps 4.4% as US clears H200 chip exports to 10 Chinese firms",
              "source": "Reuters",
              "ago": "18h"
            },
            {
              "title": "Applied Materials lifts 2026 chip-equipment growth to 30%, NVDA capex flow cited",
              "source": "CNBC",
              "ago": "20h"
            },
            {
              "title": "Wall Street braces for $60B+ data center quarter as NVDA earnings near",
              "source": "Bloomberg",
              "ago": "8h"
            }
          ],
          "trend_surge_pct": 88,
          "options_detail": {
            "call_volume": 412000,
            "put_volume": 118000,
            "cp_ratio": 3.49,
            "smart_money_ratio": 0.81,
            "unusual": true
          }
        },
        {
          "rank": 2,
          "ticker": "AMAT",
          "name": "Applied Materials Inc.",
          "sector": "Semi",
          "sector_full": "Semiconductor Equipment",
          "price": 462.1,
          "change_pct": 8.0,
          "score_total": 88.4,
          "score_reddit": 78,
          "score_news": 96,
          "score_trends": 84,
          "score_options": 95,
          "quadrant": "hot",
          "claude_rank": 2,
          "claude_summary": "어제 EPS·매출 동시 비트 + 2026 WFE 가이드 +30%로 상향, 컨센 미반영 구간이라 follow-through 확률 높아요.",
          "claude_signals": [
            "Q2 EPS $2.86 vs $2.68 컨센",
            "WFE 가이드 20%→30%+ 상향",
            "AHS 중국 수출 익스포저 축소 발표"
          ],
          "narrative": "AMAT은 어제 장마감 후 Q2 FY26 EPS $2.86 (vs $2.68 컨센), 매출 $7.91B (vs $7.69B) 동시 비트 + 콜에서 2026년 반도체 장비 산업 성장률 가이드를 기존 'over 20%'에서 'over 30%'로 상향했어요. 2월 가이드 대비 10%p 점프인데 컨센은 아직 +24% 수준이라 시장 모델 업데이트 갭이 커요. 시간외 +8%지만 PER 22배는 동종 대비 -15% 디스카운트 구간.",
          "entry": 461.0,
          "tp1": 478.0,
          "tp2": 495.0,
          "sl": 446.0,
          "entry_comment": "갭업 시초가는 매도 압박 흡수 구간, 22:50 KST 461 재테스트 시 1차 0.5R, 478 돌파 시 추가",
          "catalysts": [
            "WFE 가이드 상향 후 sell-side 컨센 리비전 유입",
            "5/19 ICAPS 데이 (마이크론·TSM 동반)",
            "中 수출 통제 완화 헤드라인",
            "DRAM HBM3E 캡 증설 사이클"
          ],
          "risks": [
            "갭업 후 차익실현 -3% 가능",
            "中 매출 노출 25%대 헤드라인 리스크"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 620,
              "sentiment": 0.69
            },
            {
              "sub": "stocks",
              "count": 410,
              "sentiment": 0.74
            }
          ],
          "news_headlines": [
            {
              "title": "Applied Materials beats Q2 estimates, raises 2026 WFE growth to over 30%",
              "source": "Bloomberg",
              "ago": "12h"
            },
            {
              "title": "AMAT shares pop 8% on AI-driven semiconductor demand",
              "source": "CNBC",
              "ago": "14h"
            },
            {
              "title": "Sell-side races to upgrade AMAT after blowout call",
              "source": "Barron's",
              "ago": "6h"
            }
          ],
          "trend_surge_pct": 76,
          "options_detail": {
            "call_volume": 92000,
            "put_volume": 21000,
            "cp_ratio": 4.38,
            "smart_money_ratio": 0.84,
            "unusual": true
          }
        },
        {
          "rank": 3,
          "ticker": "CSCO",
          "name": "Cisco Systems Inc.",
          "sector": "Networking",
          "sector_full": "Networking / AI Infrastructure",
          "price": 78.4,
          "change_pct": 13.4,
          "score_total": 84.6,
          "score_reddit": 71,
          "score_news": 95,
          "score_trends": 82,
          "score_options": 90,
          "quadrant": "hot",
          "claude_rank": 3,
          "claude_summary": "$5.3B AI 오더북 공개로 Networking이 AI 트레이드의 새 축으로 인식되는 중. 갭업 후 추격은 자제하되 눌림은 매수.",
          "claude_signals": [
            "+13.4% 어제 원데이 점프",
            "AI 오더 YTD $5.3B 공개",
            "F26 가이드 상향"
          ],
          "narrative": "CSCO는 어제 Q3 FY26 어닝에서 매출·EPS 동시 비트, F26 가이드 상향, 그리고 AI 관련 누적 오더 $5.3B 공개로 +13.4% 점프했어요. NVDA·AVGO 중심이던 AI capex 트레이드에 'connect & secure' 레이어가 추가되며 포지셔닝이 재편되는 구간. 다만 단일 데이 +13% 후라 Friday 차익실현 압박은 정상.",
          "entry": 77.5,
          "tp1": 81.5,
          "tp2": 85.0,
          "sl": 74.8,
          "entry_comment": "갭업 추격 금지, 첫 30분 풀백 후 77.5 지지 확인 시 0.3R 진입",
          "catalysts": [
            "AI 오더북 분기별 공개 정례화 기대",
            "JPM·MS sell-side 업그레이드 줄잇기",
            "5/22 분석가의 날 일정"
          ],
          "risks": [
            "원데이 +13% 후 차익실현",
            "전통 enterprise networking 둔화 헤드라인"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "stocks",
              "count": 380,
              "sentiment": 0.72
            },
            {
              "sub": "investing",
              "count": 240,
              "sentiment": 0.68
            }
          ],
          "news_headlines": [
            {
              "title": "Cisco surges 13.4% on blowout Q3, AI order book hits $5.3B YTD",
              "source": "Reuters",
              "ago": "20h"
            },
            {
              "title": "Cisco joins AI infrastructure trade with $5.3B AI order disclosure",
              "source": "WSJ",
              "ago": "18h"
            }
          ],
          "trend_surge_pct": 64,
          "options_detail": {
            "call_volume": 184000,
            "put_volume": 52000,
            "cp_ratio": 3.54,
            "smart_money_ratio": 0.76,
            "unusual": true
          }
        },
        {
          "rank": 4,
          "ticker": "CRBS",
          "name": "Cerebras Systems Inc.",
          "sector": "Semi",
          "sector_full": "AI Chips (Inference)",
          "price": 311.2,
          "change_pct": 6.0,
          "score_total": 82.1,
          "score_reddit": 88,
          "score_news": 89,
          "score_trends": 95,
          "score_options": 56,
          "quadrant": "hot",
          "claude_rank": 4,
          "claude_summary": "어제 IPO 데뷔 +68% 마감, 시간외 +6% 추가. NVDA 대안 inference 내러티브가 리테일에 강하게 잡혔어요.",
          "claude_signals": [
            "IPO 첫날 +68% (오픈 +100%)",
            "Trends 95점 / 신생 IPO 기준 폭발적",
            "옵션 시장은 lock-up 우려로 신중"
          ],
          "narrative": "Cerebras는 어제 $185 IPO에서 시초가 +100% 후 +68% 마감했어요. NVIDIA·AMD 대비 inference 효율과 전력 효율을 강조하는 wafer-scale 칩 내러티브가 리테일·미디어에 과열 수준으로 잡혔지만, 옵션 시장은 lock-up 만료 전이라 보수적. 첫 주 변동성은 ±15% 범주로 잡고 접근.",
          "entry": 305.0,
          "tp1": 335.0,
          "tp2": 360.0,
          "sl": 280.0,
          "entry_comment": "신규 IPO라 시초가 30분 관망, 풀백 후 305 지지 확인 시 0.25R로 작게 진입 (사이즈 조절 필수)",
          "catalysts": [
            "IPO 첫 주 모멘텀 잔존",
            "Microsoft·Meta inference 파일럿 발표 기대",
            "WSE-3 차세대 제품 로드맵 공개"
          ],
          "risks": [
            "IPO lock-up 만료 전 변동성 ±15%",
            "옵션 체인 얕아 헤지 어려움",
            "NVDA 어닝 후 자금 회전 가능"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 1320,
              "sentiment": 0.82
            },
            {
              "sub": "stocks",
              "count": 580,
              "sentiment": 0.75
            },
            {
              "sub": "AIStocks",
              "count": 290,
              "sentiment": 0.88
            }
          ],
          "news_headlines": [
            {
              "title": "Cerebras nearly doubles in IPO debut, closes 68% above $185 offer",
              "source": "CNBC",
              "ago": "18h"
            },
            {
              "title": "AI chip upstart Cerebras challenges Nvidia on inference efficiency",
              "source": "Bloomberg",
              "ago": "16h"
            }
          ],
          "trend_surge_pct": 312,
          "options_detail": {
            "call_volume": 38000,
            "put_volume": 14000,
            "cp_ratio": 2.71,
            "smart_money_ratio": 0.58,
            "unusual": true
          }
        },
        {
          "rank": 5,
          "ticker": "NBIS",
          "name": "Nebius Group N.V.",
          "sector": "Cloud",
          "sector_full": "AI Cloud / GPU as a Service",
          "price": 142.3,
          "change_pct": 3.1,
          "score_total": 80.5,
          "score_reddit": 84,
          "score_news": 71,
          "score_trends": 88,
          "score_options": 79,
          "quadrant": "hidden",
          "claude_rank": 5,
          "claude_summary": "WSB 2026 인덱스 편입 + AMAT capex 사이클 후방 수혜, 컨센 커버리지 얕아 리레이팅 여지가 가장 큰 종목.",
          "claude_signals": [
            "WSB 2026 인덱스 10종목 편입",
            "유럽 GPU 캐파 +40% 증설 발표 임박",
            "EUR/USD 약세 마진 우호"
          ],
          "narrative": "Nebius는 wallstreetbets 2026 인덱스 10종목에 편입되며 리테일 인지도가 급상승했어요. NVDA H200 중국 수출 승인은 GPU 공급 여력을 늘려 NBIS 같은 GPU-as-a-Service 사업자에 우호적이고, AMAT의 capex 가이드 상향은 후방 클라우드 캐파 사이클 신호. 셀사이드 커버리지는 8명에 불과해 컨센 갭이 가장 큰 카테고리.",
          "entry": 140.0,
          "tp1": 152.0,
          "tp2": 165.0,
          "sl": 132.0,
          "entry_comment": "거래량 얕아 슬리피지 주의, 시초가 1시간 이후 140 지지 확인 시 0.3R 분할",
          "catalysts": [
            "WSB 2026 인덱스 편입 모멘텀",
            "유럽 GPU 캐파 증설 공식화 임박",
            "Q1 매출 가이드 상향 가능성"
          ],
          "risks": [
            "거래량 얕음 (일평 4M)",
            "유로화 익스포저 환율 리스크"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 720,
              "sentiment": 0.79
            },
            {
              "sub": "AIStocks",
              "count": 310,
              "sentiment": 0.83
            }
          ],
          "news_headlines": [
            {
              "title": "Nebius eyes European GPU capacity expansion as demand surges",
              "source": "Reuters",
              "ago": "1d"
            },
            {
              "title": "WallStreetBets unveils 2026 index, Nebius among 10 picks",
              "source": "Finviz",
              "ago": "3d"
            }
          ],
          "trend_surge_pct": 124,
          "options_detail": {
            "call_volume": 28000,
            "put_volume": 9200,
            "cp_ratio": 3.04,
            "smart_money_ratio": 0.74,
            "unusual": true
          }
        },
        {
          "rank": 6,
          "ticker": "ASTS",
          "name": "AST SpaceMobile Inc.",
          "sector": "Space",
          "sector_full": "Satellite Communications",
          "price": 38.2,
          "change_pct": 2.4,
          "score_total": 78.9,
          "score_reddit": 91,
          "score_news": 70,
          "score_trends": 82,
          "score_options": 73,
          "quadrant": "hot",
          "claude_rank": 6,
          "claude_summary": "WSB 2026 인덱스 1위 픽 + Verizon·AT&T 상용화 로드맵, 5/22 위성 발사 일정이 단기 촉매.",
          "claude_signals": [
            "WSB 2026 인덱스 #1",
            "5/22 BlueWalker 4 발사 예정",
            "Verizon 상용 서비스 베타 6월"
          ],
          "narrative": "리테일이 가장 좋아하는 우주 종목. WSB 2026 인덱스 1번 픽이고 5/22 BlueWalker 4 위성 발사가 임박했어요. Verizon이 6월 상용 베타 시작 예정이라 펀더멘털과 내러티브가 동시에 작동 중.",
          "catalysts": [
            "5/22 BlueWalker 4 발사",
            "Verizon 6월 상용 베타",
            "AT&T 추가 캐리어 계약"
          ],
          "risks": [
            "희석 가능성 (캐피털 레이즈)",
            "발사 실패 리스크 -25% 시나리오"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 1480,
              "sentiment": 0.81
            },
            {
              "sub": "ASTSpaceMobile",
              "count": 920,
              "sentiment": 0.92
            }
          ],
          "news_headlines": [
            {
              "title": "AST SpaceMobile gears up for May 22 BlueWalker satellite launch",
              "source": "SpaceNews",
              "ago": "2d"
            }
          ],
          "trend_surge_pct": 95,
          "options_detail": {
            "call_volume": 84000,
            "put_volume": 31000,
            "cp_ratio": 2.71,
            "smart_money_ratio": 0.69,
            "unusual": false
          }
        },
        {
          "rank": 7,
          "ticker": "RKLB",
          "name": "Rocket Lab USA Inc.",
          "sector": "Space",
          "sector_full": "Space Launch",
          "price": 41.85,
          "change_pct": 1.8,
          "score_total": 77.2,
          "score_reddit": 86,
          "score_news": 68,
          "score_trends": 80,
          "score_options": 75,
          "quadrant": "hot",
          "claude_rank": 7,
          "claude_summary": "WSB 2026 인덱스 #2, Neutron 첫 발사 D-30 카운트 진입. ASTS와 짝 거래로 우주 테마 노출.",
          "claude_signals": [
            "Neutron 발사 D-30",
            "WSB 2026 #2",
            "5/14 USSF 2건 신규 계약"
          ],
          "narrative": "Neutron 첫 발사가 6월로 다가오며 카운트다운 모멘텀. 5/14 美 우주군 신규 발사 계약 2건 발표가 추가 호재. ASTS와 묶음 거래 추천.",
          "catalysts": [
            "Neutron 첫 발사 6월",
            "USSF 신규 계약",
            "Q1 백로그 +18% 가이드"
          ],
          "risks": [
            "Neutron 일정 지연",
            "Rutherford 엔진 캐파 우려"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 940,
              "sentiment": 0.74
            },
            {
              "sub": "RocketLab",
              "count": 410,
              "sentiment": 0.86
            }
          ],
          "news_headlines": [
            {
              "title": "Rocket Lab wins 2 new USSF launch contracts",
              "source": "SpaceNews",
              "ago": "1d"
            }
          ],
          "trend_surge_pct": 68,
          "options_detail": {
            "call_volume": 64000,
            "put_volume": 24000,
            "cp_ratio": 2.67,
            "smart_money_ratio": 0.71,
            "unusual": false
          }
        },
        {
          "rank": 8,
          "ticker": "AVGO",
          "name": "Broadcom Inc.",
          "sector": "Semi",
          "sector_full": "Semiconductors / ASIC",
          "price": 268.4,
          "change_pct": 2.9,
          "score_total": 76.8,
          "score_reddit": 62,
          "score_news": 84,
          "score_trends": 71,
          "score_options": 88,
          "quadrant": "hidden",
          "claude_rank": 8,
          "claude_summary": "AMAT 가이드 상향의 두 번째 수혜주. Google TPU·Meta MTIA ASIC 위탁 매출 컨센 +12% 상향 여지.",
          "claude_signals": [
            "AMAT 가이드 상향 후 ASIC 사이클 재확인",
            "VMware FCF 가이드 비트",
            "6/4 어닝 D-13"
          ],
          "narrative": "AVGO는 NVDA·AMAT 사이클의 두 번째 수혜주. Google TPU·Meta MTIA 등 hyperscaler ASIC 위탁 매출이 분기 $4-5B로 성장 중이고 6/4 어닝 가이드 상향 가능성이 높아요. 헤드라인은 조용해도 옵션 콜 비율 4.5배가 신호.",
          "catalysts": [
            "6/4 어닝",
            "ASIC 매출 가이드 상향",
            "VMware ARR 가속"
          ],
          "risks": [
            "멀티플 26배 부담",
            "어닝 직전 매도 압력"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "stocks",
              "count": 380,
              "sentiment": 0.71
            },
            {
              "sub": "investing",
              "count": 240,
              "sentiment": 0.69
            }
          ],
          "news_headlines": [
            {
              "title": "Broadcom seen as next beneficiary of AI capex cycle",
              "source": "Barron's",
              "ago": "1d"
            }
          ],
          "trend_surge_pct": 42,
          "options_detail": {
            "call_volume": 96000,
            "put_volume": 21000,
            "cp_ratio": 4.57,
            "smart_money_ratio": 0.82,
            "unusual": true
          }
        },
        {
          "rank": 9,
          "ticker": "PLTR",
          "name": "Palantir Technologies Inc.",
          "sector": "Software",
          "sector_full": "AI Software / Defense",
          "price": 138.2,
          "change_pct": 1.6,
          "score_total": 75.4,
          "score_reddit": 88,
          "score_news": 70,
          "score_trends": 76,
          "score_options": 68,
          "quadrant": "hot",
          "claude_rank": 10,
          "claude_summary": "WSB 인덱스 픽 + 美 국방부 AIP 신규 계약 헤드라인. 모멘텀은 살아있지만 PER 200배 부담.",
          "claude_signals": [
            "WSB 2026 인덱스",
            "DoD AIP 추가 계약",
            "엔터프라이즈 ARR 50%+"
          ],
          "narrative": "Palantir는 리테일 사랑은 여전하지만 밸류에이션 PER 200배는 명백한 부담. 5/12 DoD AIP 계약 추가 헤드라인이 단기 촉매. 모멘텀 전략 한정.",
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 1620,
              "sentiment": 0.74
            },
            {
              "sub": "PLTR",
              "count": 580,
              "sentiment": 0.85
            }
          ],
          "news_headlines": [
            {
              "title": "Palantir wins additional DoD AIP contract",
              "source": "Defense News",
              "ago": "3d"
            }
          ],
          "trend_surge_pct": 38,
          "options_detail": {
            "call_volume": 168000,
            "put_volume": 52000,
            "cp_ratio": 3.23,
            "smart_money_ratio": 0.66,
            "unusual": false
          },
          "catalysts": [
            "DoD AIP 계약 확장",
            "Q2 어닝 7월"
          ],
          "risks": [
            "PER 200배 부담",
            "정치 리스크"
          ]
        },
        {
          "rank": 10,
          "ticker": "TSM",
          "name": "Taiwan Semiconductor Mfg.",
          "sector": "Semi",
          "sector_full": "Foundry",
          "price": 248.6,
          "change_pct": 2.1,
          "score_total": 74.8,
          "score_reddit": 58,
          "score_news": 88,
          "score_trends": 65,
          "score_options": 84,
          "quadrant": "hidden",
          "claude_rank": null,
          "claude_summary": "AMAT capex 사이클 직접 수혜 + Trump 베이징 방문으로 美中 디탕트 분위기, CoWoS 캡 우려 일부 해소.",
          "catalysts": [
            "美中 디탕트 분위기",
            "AMAT 가이드 후방 효과",
            "CoWoS 증설 가시화"
          ],
          "risks": [
            "대만 정치 리스크 잠복",
            "환율 리스크"
          ],
          "reddit_sentiment_label": "중립",
          "reddit_breakdown": [
            {
              "sub": "stocks",
              "count": 280,
              "sentiment": 0.62
            }
          ],
          "news_headlines": [
            {
              "title": "TSMC seen as foundry winner of AMAT capex upcycle",
              "source": "Reuters",
              "ago": "16h"
            }
          ],
          "trend_surge_pct": 28,
          "options_detail": {
            "call_volume": 124000,
            "put_volume": 32000,
            "cp_ratio": 3.88,
            "smart_money_ratio": 0.79,
            "unusual": true
          }
        },
        {
          "rank": 11,
          "ticker": "MU",
          "name": "Micron Technology Inc.",
          "sector": "Semi",
          "sector_full": "Memory",
          "price": 178.4,
          "change_pct": 3.2,
          "score_total": 73.6,
          "score_reddit": 79,
          "score_news": 72,
          "score_trends": 68,
          "score_options": 76,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "AMAT 가이드 상향 후 HBM3E 사이클 재확인, 6/26 어닝 D-42.",
          "catalysts": [
            "HBM3E NVDA 공급 확대",
            "6/26 어닝"
          ],
          "risks": [
            "DRAM 가격 변동성"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 720,
              "sentiment": 0.71
            }
          ],
          "news_headlines": [
            {
              "title": "Micron HBM3E pipeline expanding, AMAT order flow cited",
              "source": "Reuters",
              "ago": "1d"
            }
          ],
          "trend_surge_pct": 32,
          "options_detail": {
            "call_volume": 78000,
            "put_volume": 22000,
            "cp_ratio": 3.55,
            "smart_money_ratio": 0.72,
            "unusual": false
          }
        },
        {
          "rank": 12,
          "ticker": "AMD",
          "name": "Advanced Micro Devices",
          "sector": "Semi",
          "sector_full": "Semiconductors",
          "price": 198.2,
          "change_pct": 2.6,
          "score_total": 72.4,
          "score_reddit": 71,
          "score_news": 70,
          "score_trends": 64,
          "score_options": 81,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "MI400 로드맵 6월 공개 임박, NVDA 어닝 후 자금 회전 1순위 후보.",
          "catalysts": [
            "MI400 6월 공개",
            "Hyperscaler ROCm 채택"
          ],
          "risks": [
            "NVDA 어닝 흡수 리스크"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 580,
              "sentiment": 0.66
            }
          ],
          "news_headlines": [
            {
              "title": "AMD set to unveil MI400 roadmap in June",
              "source": "Tom's Hardware",
              "ago": "2d"
            }
          ],
          "trend_surge_pct": 28,
          "options_detail": {
            "call_volume": 102000,
            "put_volume": 28000,
            "cp_ratio": 3.64,
            "smart_money_ratio": 0.74,
            "unusual": false
          }
        },
        {
          "rank": 13,
          "ticker": "SMCI",
          "name": "Super Micro Computer",
          "sector": "Hardware",
          "sector_full": "AI Servers",
          "price": 89.4,
          "change_pct": -1.2,
          "score_total": 71.8,
          "score_reddit": 92,
          "score_news": 58,
          "score_trends": 88,
          "score_options": 52,
          "quadrant": "overheat",
          "claude_rank": null,
          "claude_summary": "리테일 과열 + 스마트머니 이탈, 듀얼 시그널 충돌. 진입 비추천.",
          "catalysts": [
            "DLC 액침 솔루션 BlackRock 데이터센터 채택"
          ],
          "risks": [
            "리테일 sentiment 92 / smart money 52 디버전스",
            "회계 헤드라인 잔존"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 1240,
              "sentiment": 0.84
            }
          ],
          "news_headlines": [
            {
              "title": "Super Micro liquid cooling enters BlackRock DC fleet",
              "source": "ServeTheHome",
              "ago": "3d"
            }
          ],
          "trend_surge_pct": 78,
          "options_detail": {
            "call_volume": 96000,
            "put_volume": 78000,
            "cp_ratio": 1.23,
            "smart_money_ratio": 0.42,
            "unusual": false
          }
        },
        {
          "rank": 14,
          "ticker": "ARM",
          "name": "Arm Holdings plc",
          "sector": "Semi",
          "sector_full": "Chip IP",
          "price": 168.8,
          "change_pct": 1.4,
          "score_total": 70.2,
          "score_reddit": 56,
          "score_news": 78,
          "score_trends": 62,
          "score_options": 80,
          "quadrant": "hidden",
          "claude_rank": null,
          "claude_summary": "AMAT 사이클 + Apple 신규 칩 사이클, sell-side 조용해 hidden edge 후보.",
          "catalysts": [
            "Apple M5 사이클",
            "Royalty 비율 상향"
          ],
          "risks": [
            "멀티플 부담"
          ],
          "reddit_sentiment_label": "중립",
          "reddit_breakdown": [
            {
              "sub": "stocks",
              "count": 180,
              "sentiment": 0.61
            }
          ],
          "news_headlines": [
            {
              "title": "ARM royalties seen rising on Apple M5 cycle",
              "source": "Bloomberg",
              "ago": "2d"
            }
          ],
          "trend_surge_pct": 22,
          "options_detail": {
            "call_volume": 48000,
            "put_volume": 14000,
            "cp_ratio": 3.43,
            "smart_money_ratio": 0.76,
            "unusual": false
          }
        },
        {
          "rank": 15,
          "ticker": "ORCL",
          "name": "Oracle Corporation",
          "sector": "Cloud",
          "sector_full": "Cloud / AI Infrastructure",
          "price": 224.1,
          "change_pct": 1.8,
          "score_total": 69.4,
          "score_reddit": 51,
          "score_news": 82,
          "score_trends": 58,
          "score_options": 78,
          "quadrant": "hidden",
          "claude_rank": null,
          "claude_summary": "OCI Gen2 매출 분기 가이드 +28%, OpenAI Stargate 발주 가속.",
          "catalysts": [
            "Stargate Phase 2 발주",
            "OCI 매출 가속"
          ],
          "risks": [
            "설비투자 부담"
          ],
          "reddit_sentiment_label": "중립",
          "reddit_breakdown": [
            {
              "sub": "stocks",
              "count": 140,
              "sentiment": 0.59
            }
          ],
          "news_headlines": [
            {
              "title": "Oracle's OCI continues to win Stargate workloads",
              "source": "The Information",
              "ago": "1d"
            }
          ],
          "trend_surge_pct": 18,
          "options_detail": {
            "call_volume": 56000,
            "put_volume": 18000,
            "cp_ratio": 3.11,
            "smart_money_ratio": 0.73,
            "unusual": false
          }
        },
        {
          "rank": 16,
          "ticker": "IREN",
          "name": "IREN Limited",
          "sector": "Compute",
          "sector_full": "AI Compute / Mining",
          "price": 38.4,
          "change_pct": 4.1,
          "score_total": 68.8,
          "score_reddit": 84,
          "score_news": 56,
          "score_trends": 79,
          "score_options": 60,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "WSB 인덱스 + AI compute pivot, 비트 채굴→GPU호스팅 전환 stories.",
          "catalysts": [
            "GPU 호스팅 첫 매출 인식",
            "WSB 인덱스"
          ],
          "risks": [
            "비트코인 변동성",
            "캐피털 레이즈 가능"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 510,
              "sentiment": 0.72
            }
          ],
          "news_headlines": [
            {
              "title": "IREN pivots from BTC mining to GPU hosting at scale",
              "source": "CoinDesk",
              "ago": "4d"
            }
          ],
          "trend_surge_pct": 58,
          "options_detail": {
            "call_volume": 32000,
            "put_volume": 12000,
            "cp_ratio": 2.67,
            "smart_money_ratio": 0.62,
            "unusual": false
          }
        },
        {
          "rank": 17,
          "ticker": "RDDT",
          "name": "Reddit Inc.",
          "sector": "Internet",
          "sector_full": "Social / AI Data",
          "price": 248.2,
          "change_pct": 1.2,
          "score_total": 67.5,
          "score_reddit": 78,
          "score_news": 62,
          "score_trends": 71,
          "score_options": 64,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "WSB 인덱스 + AI 데이터 라이센싱, 광고 매출 가이드 상향 모멘텀.",
          "catalysts": [
            "AI 데이터 라이센싱 갱신",
            "광고 매출 가속"
          ],
          "risks": [
            "lock-up 만료 후 셀프레셔"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 380,
              "sentiment": 0.68
            }
          ],
          "news_headlines": [
            {
              "title": "Reddit ad revenue growth accelerates in Q1",
              "source": "WSJ",
              "ago": "5d"
            }
          ],
          "trend_surge_pct": 34,
          "options_detail": {
            "call_volume": 28000,
            "put_volume": 11000,
            "cp_ratio": 2.55,
            "smart_money_ratio": 0.64,
            "unusual": false
          }
        },
        {
          "rank": 18,
          "ticker": "GOOGL",
          "name": "Alphabet Inc.",
          "sector": "Internet",
          "sector_full": "AI Cloud / Search",
          "price": 218.4,
          "change_pct": 1.0,
          "score_total": 66.8,
          "score_reddit": 54,
          "score_news": 81,
          "score_trends": 52,
          "score_options": 76,
          "quadrant": "hidden",
          "claude_rank": null,
          "claude_summary": "Gemini 3 출시 임박 + YouTube 광고 가속, 대장주 안정 픽.",
          "catalysts": [
            "Gemini 3 6월 발표",
            "YouTube 광고"
          ],
          "risks": [
            "검색 점유율 우려 잔존"
          ],
          "reddit_sentiment_label": "중립",
          "reddit_breakdown": [
            {
              "sub": "stocks",
              "count": 220,
              "sentiment": 0.62
            }
          ],
          "news_headlines": [
            {
              "title": "Google to unveil Gemini 3 next month",
              "source": "The Verge",
              "ago": "1d"
            }
          ],
          "trend_surge_pct": 16,
          "options_detail": {
            "call_volume": 138000,
            "put_volume": 42000,
            "cp_ratio": 3.29,
            "smart_money_ratio": 0.71,
            "unusual": false
          }
        },
        {
          "rank": 19,
          "ticker": "MSFT",
          "name": "Microsoft Corporation",
          "sector": "Software",
          "sector_full": "AI Hyperscaler",
          "price": 528.3,
          "change_pct": 0.8,
          "score_total": 66.2,
          "score_reddit": 49,
          "score_news": 78,
          "score_trends": 50,
          "score_options": 78,
          "quadrant": "hidden",
          "claude_rank": null,
          "claude_summary": "Azure ARR 가이드 상향, Copilot 엔터프라이즈 침투율 35%.",
          "catalysts": [
            "Build 2026 5/19",
            "Copilot Pro 가격 인상"
          ],
          "risks": [
            "AI capex 부담 재점화"
          ],
          "reddit_sentiment_label": "중립",
          "reddit_breakdown": [
            {
              "sub": "stocks",
              "count": 180,
              "sentiment": 0.6
            }
          ],
          "news_headlines": [
            {
              "title": "Microsoft Build 2026 to spotlight Copilot enterprise wins",
              "source": "Bloomberg",
              "ago": "2d"
            }
          ],
          "trend_surge_pct": 14,
          "options_detail": {
            "call_volume": 142000,
            "put_volume": 48000,
            "cp_ratio": 2.96,
            "smart_money_ratio": 0.69,
            "unusual": false
          }
        },
        {
          "rank": 20,
          "ticker": "GME",
          "name": "GameStop Corp.",
          "sector": "Retail",
          "sector_full": "Specialty Retail",
          "price": 28.4,
          "change_pct": -2.4,
          "score_total": 64.8,
          "score_reddit": 96,
          "score_news": 32,
          "score_trends": 88,
          "score_options": 38,
          "quadrant": "overheat",
          "claude_rank": null,
          "claude_summary": "리테일 광기 / 스마트머니 이탈 / 펀더멘털 부재. 정확히 회피해야 할 종목.",
          "catalysts": [
            "밈 모멘텀 잔존"
          ],
          "risks": [
            "스마트머니 38점 / 멘션 96점 디버전스",
            "기관 숏 포지션 확대"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 2840,
              "sentiment": 0.79
            },
            {
              "sub": "Superstonk",
              "count": 1620,
              "sentiment": 0.92
            }
          ],
          "news_headlines": [
            {
              "title": "GameStop short interest climbs as fundamentals lag",
              "source": "Bloomberg",
              "ago": "1d"
            }
          ],
          "trend_surge_pct": 142,
          "options_detail": {
            "call_volume": 184000,
            "put_volume": 158000,
            "cp_ratio": 1.16,
            "smart_money_ratio": 0.31,
            "unusual": false
          }
        }
      ]
    },
    "2026-05-14": {
      "date": "2026-05-14",
      "date_display": "2026-05-14 (목·미국장 CLARITY Act 마크업 + AMAT 어닝)",
      "market_mood": "bullish",
      "market_mood_score": 62,
      "market_summary": "5/13에 CPI 3.8% / PPI 6%로 인플레가 다시 뜨거웠는데도 SPY +0.6%, Nasdaq +1.2%로 신고가 마감했어요. 오늘은 두 개의 대형 이벤트 — 23:30 KST 美 상원 은행위 CLARITY Act 마크업 표결(CRCL/COIN 직접 수혜) + AMAT 어닝 AMC(05:30 KST 익일)가 동시 대기. 10Y 4.46%, 금리인하 기대 거의 소거됐지만 AI capex·반도체 리더십이 시장을 끌고 가는 강세 우위 흐름이에요. 단, 어닝 이벤트 변동성과 인플레 후행 압박은 조심해야 해요.",
      "sector_tilt": [
        "Fintech / Stablecoin",
        "Semiconductors",
        "AI Infrastructure"
      ],
      "top_ticker": "CRCL",
      "candidate_count": 20,
      "today_action": {
        "one_liner": "CRCL은 23:30 마크업 결과 보고 진입, NVDA는 어닝 D-6 추세 추종, AMAT 어닝 베팅은 사이즈 절반 이하로 줄여요.",
        "priorities": [
          {
            "icon": "🎯",
            "ticker": "CRCL",
            "text": "23:30 KST CLARITY Act 마크업 표결 — 통과 시 $148 위 안착 후 1차 진입(0.5R), 시장가 추격 금지. 손절 $138, TP1 $158 / TP2 $170. 부결/지연 시 즉시 관망."
          },
          {
            "icon": "💎",
            "ticker": "MRVL",
            "text": "히든엣지 — 52주 신고가 돌파 후 풀백 시 $86 1차, $89 돌파 시 2차. AI 인터커넥트 사이클 시작. 손절 $82, TP $94/$100."
          },
          {
            "icon": "🚨",
            "ticker": "AMAT",
            "text": "어닝 AMC — 신규 베팅은 0.3R 이하로 축소, 가이드 보수 톤 시 -8% 갭다운 위험. 보유분은 $185 위 트레일링, 22:35 시초가 추격 절대 금지."
          }
        ]
      },
      "routine_timeline": [
        {
          "time_kst": "21:00",
          "time_et": "08:00",
          "label": "프리마켓 무빙 점검 (CRCL/COIN/AMAT/NVDA 갭)",
          "active": true
        },
        {
          "time_kst": "21:30",
          "time_et": "08:30",
          "label": "주간 신규실업수당 + 4월 소매판매 발표 (컨센 +0.2%)",
          "active": true
        },
        {
          "time_kst": "21:45",
          "time_et": "08:45",
          "label": "10Y 금리 / DXY 체크 (4.46% 위 유지 시 그로스 압박)",
          "active": true
        },
        {
          "time_kst": "22:30",
          "time_et": "09:30",
          "label": "🔔 미국장 개장",
          "key": true,
          "active": true
        },
        {
          "time_kst": "23:30",
          "time_et": "10:30",
          "label": "🏛 상원 은행위 CLARITY Act 마크업 표결 (CRCL/COIN 직접 수혜)",
          "key": true,
          "active": true
        },
        {
          "time_kst": "01:00",
          "time_et": "12:00",
          "label": "런치 무빙 — 마크업 결과 후속 흐름 점검",
          "active": true
        },
        {
          "time_kst": "03:00",
          "time_et": "14:00",
          "label": "주가 강도 재확인 + 반도체 모멘텀 체크",
          "active": true
        },
        {
          "time_kst": "05:00",
          "time_et": "16:00",
          "label": "🔔 미국장 마감",
          "key": true,
          "active": true
        },
        {
          "time_kst": "05:30",
          "time_et": "16:30",
          "label": "📊 AMAT Q2 FY26 어닝 발표 (AMC) — 가이드 톤 주목",
          "key": true,
          "active": true
        },
        {
          "time_kst": "06:00",
          "time_et": "17:00",
          "label": "어닝 콜 라이브 (가이드 / China / WFE 사이클)",
          "active": true
        },
        {
          "time_kst": "07:00",
          "time_et": "18:00",
          "label": "AH 반응 정리 + 익일 갭 시나리오",
          "active": true
        }
      ],
      "sectors": [
        {
          "name": "Fintech / Stablecoin",
          "strength": 0.91,
          "ticker_count": 3
        },
        {
          "name": "Semiconductors",
          "strength": 0.87,
          "ticker_count": 6
        },
        {
          "name": "AI Infrastructure",
          "strength": 0.84,
          "ticker_count": 4
        },
        {
          "name": "Space / Defense",
          "strength": 0.74,
          "ticker_count": 2
        },
        {
          "name": "Mega-cap Tech",
          "strength": 0.68,
          "ticker_count": 2
        },
        {
          "name": "Data / SaaS",
          "strength": 0.62,
          "ticker_count": 1
        },
        {
          "name": "Auto / EV",
          "strength": 0.58,
          "ticker_count": 1
        },
        {
          "name": "Crypto Miner / Energy",
          "strength": 0.52,
          "ticker_count": 1
        }
      ],
      "claude_ranking": [
        {
          "rank": 1,
          "ticker": "CRCL",
          "reasoning": "오늘 23:30 KST CLARITY Act 상원 마크업 표결 — 통과 시 stablecoin 보상 모델 합법화, Polymarket 67~71% 통과 가능성.",
          "signals": [
            "美 상원 은행위 5/14 10:30 ET 마크업 표결",
            "Coinbase·Circle 등 산업 단체 일제히 지지",
            "5/4 합의 발표 후 +19.9% 모멘텀 유지"
          ]
        },
        {
          "rank": 2,
          "ticker": "NVDA",
          "reasoning": "5/20 어닝 D-6, $216 ATH 근접 + 콜옵션 빌드업, 매수 추천 48건·매도 0건 컨센.",
          "signals": [
            "5/20 Q1 FY27 어닝 D-6",
            "월가 컨센 TP $272(+26%)",
            "Blackwell 인도 사이클 + AI capex 가속"
          ]
        },
        {
          "rank": 3,
          "ticker": "NBIS",
          "reasoning": "Q1 매출 8배 폭증($399M) + 어닝 후 +17% 갭업 모멘텀 그대로, 컨트랙트 백로그 확대.",
          "signals": [
            "Q1 매출 $399M YoY +680%",
            "Reddit 센티먼트 35→72 급반전",
            "AI 인프라 capex 직접 수혜"
          ]
        },
        {
          "rank": 4,
          "ticker": "MU",
          "reasoning": "HBM 사이클 + TSMC capex 상향 헤드라인 sympathy, WSB Top 10 진입 후 가속.",
          "signals": [
            "HBM3E 인도 가속 + Blackwell sympathy",
            "TSMC capex 상향 → 메모리 동조",
            "WSB 인덱스 Top 7 신규 진입"
          ]
        },
        {
          "rank": 5,
          "ticker": "AMAT",
          "reasoning": "오늘 AMC 어닝 — TSMC capex 상향 + AI 수요 폭증 가이던스 기대, 다만 사이즈는 절반 이하.",
          "signals": [
            "Q2 FY26 어닝 AMC 16:30 ET",
            "Zacks 컨센 매출 $7.69B / EPS $2.68",
            "4분기 연속 EPS 서프라이즈 +5.2%"
          ]
        }
      ],
      "hidden_edges": [
        {
          "ticker": "MRVL",
          "reason": "52주 신고가 갱신 중인데 WSB 멘션은 Top 30 밖이에요. AI 인터커넥트(800G·1.6T) 사이클이 NVDA Blackwell·AVGO sympathy로 리레이팅 진행 중. 옵션 콜 빌드업 어제 평균 +35%, 가격은 아직 미반영. NVDA 어닝 sympathy 후보 1순위."
        },
        {
          "ticker": "TSM",
          "reason": "5/15 4월 월간 매출 발표 D-1인데 멘션이 거의 없어요. HBM 가속 + 3nm/2nm 풀로드 가동률이 Q2 가이드 상향을 자극 중. AMAT·MU 강세 흐름의 가장 안전한 대형 sympathy 베팅."
        },
        {
          "ticker": "RDDT",
          "reason": "WSB 인덱스 6위인데 가격은 아직 조용해요. Reddit AI 데이터 라이선싱 헤드라인 + 광고 수익 가속이 백그라운드에서 진행 중. 옵션 unusual call 어제 평균 3.2배, 기관 잠매수 패턴 전형."
        }
      ],
      "overheated": [
        {
          "ticker": "INTC",
          "reason": "YTD +220% / 1개월 +120% 유지. WSB 24h 멘션이 +320%→+180%→+90%로 둔화 추세 — 후행 추격이 식어가는 신호. 옵션 스마트머니 비중 35%로 더 떨어졌고 GF Value 대비 +345% 과대평가. 평균회귀 임박."
        },
        {
          "ticker": "ASTS",
          "reason": "Q1 매출 미스에도 어제 +5% 후 30일 +55% 도달. 펀더 무시한 내러티브 베팅 지속이고 베타 3.2 + 옵션 풋 빌드업 동시 발생. CLARITY/AMAT 변동성 확산 시 가장 먼저 빠질 후보."
        },
        {
          "ticker": "SMR",
          "reason": "원전 SMR이 어제 +4%, 30일 +85% 도달. WSB 멘션 Top 3 진입했지만 어닝 가시성 없는 상태에서의 모멘텀 베팅. 옵션 콜 IV 95퍼센타일 — 변동성 셀러 진입 구간."
        }
      ],
      "tickers": [
        {
          "rank": 1,
          "ticker": "CRCL",
          "name": "Circle Internet Group",
          "sector": "Fintech",
          "sector_full": "Fintech / Stablecoin",
          "price": 146.2,
          "change_pct": 3.4,
          "score_total": 90.5,
          "score_reddit": 86,
          "score_news": 95,
          "score_trends": 88,
          "score_options": 93,
          "quadrant": "hot",
          "claude_rank": 1,
          "claude_summary": "CLARITY Act 마크업 표결 오늘 10:30 ET — 통과 시 stablecoin 보상 합법화로 직접 수혜.",
          "claude_signals": [
            "美 상원 마크업 표결 D-Day",
            "5/4 합의 후 +19.9% 모멘텀",
            "Coinbase·Circle 산업 단체 지지"
          ],
          "narrative": "Circle은 5/4 Tillis·Alsobrooks 상원의원 stablecoin 보상 합의 발표 직후 +19.9% 점프 후 횡보 중이에요. 오늘 23:30 KST(10:30 ET) 美 상원 은행위 CLARITY Act 마크업 표결이 직접 촉매 — USDC 보유 보상 모델이 'buy and use' 활동 기반으로 합법화되는 구조. Polymarket은 연내 통과 가능성 67~71%로 집계 중이고, 표결 통과 시 USDC 유통량·매출 모두 리레이팅이 시작돼요.",
          "entry": 146.2,
          "tp1": 158.0,
          "tp2": 170.0,
          "sl": 138.0,
          "entry_comment": "마크업 통과 직후 $148 위 안착 확인 후 1차 0.5R 분할 진입, 시장가 추격은 금지",
          "catalysts": [
            "5/14 23:30 KST 美 상원 은행위 CLARITY Act 마크업 표결",
            "USDC 보상 'buy and use' 모델 합법화 기대",
            "7/4 백악관 패스 목표 → 입법 진행 가속",
            "Coinbase 분배 파트너십 강화"
          ],
          "risks": [
            "마크업 부결·연기 시 -10% 갭다운 가능",
            "10Y 금리 4.5% 돌파 시 핀테크 멀티플 압박",
            "은행권 로비 반발 헤드라인"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 1180,
              "sentiment": 0.76
            },
            {
              "sub": "CryptoCurrency",
              "count": 940,
              "sentiment": 0.81
            },
            {
              "sub": "stocks",
              "count": 520,
              "sentiment": 0.69
            }
          ],
          "news_headlines": [
            {
              "title": "Senate Releases Crypto CLARITY Act Draft Ahead of Critical May 14 Vote",
              "source": "The Crypto Times",
              "ago": "16h"
            },
            {
              "title": "Circle jumps nearly 20% on Clarity Act compromise that preserves stablecoin rewards",
              "source": "CNBC",
              "ago": "10d"
            },
            {
              "title": "Crypto industry backs CLARITY Act yield compromise, pushes Senate Banking for markup",
              "source": "CoinDesk",
              "ago": "12d"
            }
          ],
          "trend_surge_pct": 71,
          "options_detail": {
            "call_volume": 168000,
            "put_volume": 41000,
            "cp_ratio": 4.1,
            "smart_money_ratio": 0.83,
            "unusual": true
          }
        },
        {
          "rank": 2,
          "ticker": "NVDA",
          "name": "NVIDIA Corporation",
          "sector": "Semi",
          "sector_full": "Semiconductors",
          "price": 213.4,
          "change_pct": 1.6,
          "score_total": 88.0,
          "score_reddit": 90,
          "score_news": 88,
          "score_trends": 82,
          "score_options": 92,
          "quadrant": "hot",
          "claude_rank": 2,
          "claude_summary": "5/20 Q1 FY27 어닝 D-6, ATH $216 근접 + 콜 빌드업, 월가 컨센 TP $272.",
          "claude_signals": [
            "5/20 어닝 D-6",
            "ATH $216 근접 + 콜 빌드업",
            "Blackwell 인도 + AI capex 가속"
          ],
          "narrative": "NVDA는 어제 +1.2%로 ATH($216.83) 근처 $213대 마감했어요. 5/20 Q1 FY27 어닝 D-6 진입 — 컨센 매출 +77% YoY(Blackwell 인도 본격화), 매수 추천 48건·매도 0건이라 월가 센티먼트 압도적 강세. 다만 hedge용 풋 수요도 동시에 늘어 어닝 직전 IV 확장 중. 단기는 추세 추종, 어닝 직전 -1일에 사이즈 50%로 축소가 정석.",
          "entry": 213.4,
          "tp1": 220.0,
          "tp2": 230.0,
          "sl": 206.0,
          "entry_comment": "$216 ATH 돌파 안착 시 추가 가속 가능, 어닝 -1일(5/19)에 사이즈 절반 축소",
          "catalysts": [
            "5/20 Q1 FY27 어닝 D-6",
            "Blackwell 인도 본격화 → 가이드 상향 기대",
            "월가 컨센 TP $272 (+26%)",
            "Hyperscaler capex 사이클 가속"
          ],
          "risks": [
            "Hyperscaler capex 지속성 의구심",
            "Custom silicon 경쟁(Trainium/TPU) 우려 재점화",
            "어닝 후 가이드 보수 톤 시 갭다운"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 2150,
              "sentiment": 0.74
            },
            {
              "sub": "stocks",
              "count": 980,
              "sentiment": 0.78
            },
            {
              "sub": "options",
              "count": 720,
              "sentiment": 0.81
            }
          ],
          "news_headlines": [
            {
              "title": "Nvidia Stock Analysis May 2026: AI Chip Giant Faces Critical Earnings Test",
              "source": "Intellectia",
              "ago": "6h"
            },
            {
              "title": "5 Leading Semiconductor Stocks Dominating May 2026: NVDA, AMD, and More",
              "source": "Parameter",
              "ago": "1d"
            },
            {
              "title": "NVIDIA (NVDA) Sees Mild Bearish Sentiment Amid Earnings Anticipation",
              "source": "GuruFocus",
              "ago": "9h"
            }
          ],
          "trend_surge_pct": 48,
          "options_detail": {
            "call_volume": 312000,
            "put_volume": 98000,
            "cp_ratio": 3.2,
            "smart_money_ratio": 0.79,
            "unusual": true
          }
        },
        {
          "rank": 3,
          "ticker": "NBIS",
          "name": "Nebius Group",
          "sector": "AI Infra",
          "sector_full": "AI Infrastructure",
          "price": 192.5,
          "change_pct": 2.4,
          "score_total": 86.0,
          "score_reddit": 92,
          "score_news": 89,
          "score_trends": 84,
          "score_options": 79,
          "quadrant": "hot",
          "claude_rank": 3,
          "claude_summary": "Q1 매출 8배 폭증($399M) + 어닝 후 +17% 갭업 모멘텀 유지, AI 인프라 capex 직접 수혜.",
          "claude_signals": [
            "Q1 매출 $399M YoY +680%",
            "Reddit 센티먼트 35→72 급반전",
            "컨트랙트 백로그 확대"
          ],
          "narrative": "NBIS는 Q1 매출 $399M(YoY +680%)으로 컨센 대폭 상회 후 어제 +17% 갭업 마감. AI capex가 record 갱신하는 가운데 GPU 클라우드 컨트랙트 백로그가 분기마다 커지고 있어요. WSB 인덱스 5위 유지 중이고 옵션 콜 빌드업도 가속. 다만 $200 부근 차익실현 매물 주의 — 갭업 후 첫 풀백을 노리는 게 안전한 진입.",
          "entry": 192.5,
          "tp1": 205.0,
          "tp2": 218.0,
          "sl": 184.0,
          "entry_comment": "$190 풀백 시 1차 분할, $200 돌파 시 2차. 갭업 추격 금지",
          "catalysts": [
            "Q1 매출 $399M (YoY +680%) 어닝 비트",
            "AI capex 사이클 record",
            "GPU 클라우드 컨트랙트 백로그 확대",
            "WSB Index 5위 유지"
          ],
          "risks": [
            "갭업 후 차익실현 매물 ($200 구간)",
            "고밸류에이션 (P/S 30x+) 압박",
            "Hyperscaler 자체 capa 확장 위험"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 1420,
              "sentiment": 0.79
            },
            {
              "sub": "stocks",
              "count": 620,
              "sentiment": 0.74
            },
            {
              "sub": "AI_Stocks",
              "count": 380,
              "sentiment": 0.86
            }
          ],
          "news_headlines": [
            {
              "title": "Reddit Fell in Love With Nebius Then Panic Sold the Wrong Miss",
              "source": "Finviz",
              "ago": "2d"
            },
            {
              "title": "Nebius Group surged nearly 17% after Q1 beat",
              "source": "MarketWatch",
              "ago": "20h"
            },
            {
              "title": "AI infrastructure capex breaks new records in May 2026",
              "source": "Bloomberg",
              "ago": "1d"
            }
          ],
          "trend_surge_pct": 64,
          "options_detail": {
            "call_volume": 88000,
            "put_volume": 24000,
            "cp_ratio": 3.7,
            "smart_money_ratio": 0.76,
            "unusual": true
          }
        },
        {
          "rank": 4,
          "ticker": "MU",
          "name": "Micron Technology",
          "sector": "Semi",
          "sector_full": "Semiconductors",
          "price": 132.8,
          "change_pct": 1.9,
          "score_total": 83.5,
          "score_reddit": 84,
          "score_news": 80,
          "score_trends": 78,
          "score_options": 88,
          "quadrant": "hot",
          "claude_rank": 4,
          "claude_summary": "HBM 사이클 + TSMC capex 상향 sympathy + WSB Top 10 진입.",
          "claude_signals": [
            "HBM3E 인도 가속",
            "TSMC capex 상향 sympathy",
            "WSB Index Top 7 신규"
          ],
          "narrative": "MU는 HBM3E 가속과 Blackwell sympathy로 어제 +1.7% 마감. TSMC capex 상향 + AMAT 가이던스 기대까지 동조 모멘텀이 살아있어요. WSB Index 신규 진입(7위)이라 리테일 자금도 들어오는 단계. 다만 $135 직전 매물대가 강해 분할 진입이 정석.",
          "entry": 132.8,
          "tp1": 140.0,
          "tp2": 148.0,
          "sl": 127.0,
          "entry_comment": "$133 안착 후 분할, $135 돌파 시 가속. 어닝 6/26로 멀어서 단기는 sympathy 위주",
          "catalysts": [
            "HBM3E·HBM4 인도 가속",
            "NVDA Blackwell 사이클 sympathy",
            "TSMC capex 상향 → 메모리 동조",
            "WSB Index Top 7 진입"
          ],
          "risks": [
            "메모리 가격 사이클 피크 우려",
            "China DRAM capex 부담",
            "어닝 6/26 멀어서 단기 driver 부족"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 980,
              "sentiment": 0.68
            },
            {
              "sub": "stocks",
              "count": 540,
              "sentiment": 0.71
            },
            {
              "sub": "investing",
              "count": 320,
              "sentiment": 0.65
            }
          ],
          "news_headlines": [
            {
              "title": "Micron's HBM3E ramp accelerates as Blackwell deliveries pick up",
              "source": "Bloomberg",
              "ago": "1d"
            },
            {
              "title": "Memory cycle outlook upgrade by sell-side analysts",
              "source": "Barron's",
              "ago": "2d"
            },
            {
              "title": "TSMC capex hike fuels semiconductor equipment, memory sympathy",
              "source": "Reuters",
              "ago": "1d"
            }
          ],
          "trend_surge_pct": 42,
          "options_detail": {
            "call_volume": 124000,
            "put_volume": 36000,
            "cp_ratio": 3.4,
            "smart_money_ratio": 0.75,
            "unusual": true
          }
        },
        {
          "rank": 5,
          "ticker": "AMAT",
          "name": "Applied Materials",
          "sector": "Semi",
          "sector_full": "Semiconductors",
          "price": 184.2,
          "change_pct": 1.3,
          "score_total": 82.0,
          "score_reddit": 76,
          "score_news": 92,
          "score_trends": 76,
          "score_options": 84,
          "quadrant": "hot",
          "claude_rank": 5,
          "claude_summary": "오늘 AMC 어닝 — TSMC capex 상향 + AI 수요 폭증 가이던스 기대, 사이즈는 절반 이하.",
          "claude_signals": [
            "Q2 FY26 어닝 16:30 ET",
            "Zacks 컨센 매출 $7.69B",
            "4분기 연속 EPS 비트 +5.2%"
          ],
          "narrative": "AMAT는 어제 D-1 모멘텀으로 +2.2% 마감 후 오늘 어닝 AMC를 맞이해요. 가이드 컨센은 매출 $7.65B(+/-$500M), EPS $2.64(+/-$0.20). TSMC capex 상향 + TipRanks의 TSMC AI 파트너십 헤드라인이 가이드 상향 기대를 자극. 다만 어닝 후 ±8% 갭은 일상적인 수준이라 신규 베팅은 0.3R 이하가 권장.",
          "entry": 184.2,
          "tp1": 192.0,
          "tp2": 200.0,
          "sl": 178.0,
          "entry_comment": "장중 추세는 가져가되 16:00 ET 전 사이즈 절반 축소, 어닝 후 갭 확인 후 재진입",
          "catalysts": [
            "5/14 Q2 FY26 어닝 AMC (4:30 PM ET)",
            "TSMC capex 상향 + AI 파트너십",
            "WFE 사이클 회복 + AI 수요 폭증",
            "4분기 연속 EPS 서프라이즈 평균 +5.2%"
          ],
          "risks": [
            "China 매출 비중 우려 재점화",
            "가이드 보수 톤 시 -8% 갭다운",
            "반도체 섹터 차익실현 매물"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 720,
              "sentiment": 0.66
            },
            {
              "sub": "stocks",
              "count": 420,
              "sentiment": 0.69
            },
            {
              "sub": "options",
              "count": 380,
              "sentiment": 0.72
            }
          ],
          "news_headlines": [
            {
              "title": "Applied Materials to Report Fiscal Second Quarter 2026 Results on May 14",
              "source": "AMAT IR",
              "ago": "1d"
            },
            {
              "title": "AMAT Heads Into Q2 Earnings with New TSMC AI Partnership",
              "source": "TipRanks",
              "ago": "8h"
            },
            {
              "title": "What to Expect From Applied Materials' Q2 2026 Earnings Report",
              "source": "Barchart",
              "ago": "12h"
            }
          ],
          "trend_surge_pct": 56,
          "options_detail": {
            "call_volume": 138000,
            "put_volume": 44000,
            "cp_ratio": 3.1,
            "smart_money_ratio": 0.78,
            "unusual": true
          }
        },
        {
          "rank": 6,
          "ticker": "MRVL",
          "name": "Marvell Technology",
          "sector": "Semi",
          "sector_full": "Semiconductors / AI Interconnect",
          "price": 84.6,
          "change_pct": 2.1,
          "score_total": 81.0,
          "score_reddit": 68,
          "score_news": 84,
          "score_trends": 80,
          "score_options": 92,
          "quadrant": "hidden",
          "claude_rank": null,
          "claude_summary": "히든엣지 — 52주 신고가 갱신 중인데 WSB 멘션 Top 30 밖. AI 인터커넥트 사이클 시작점.",
          "claude_signals": [
            "52주 신고가 갱신",
            "콜 옵션 빌드업 +35%",
            "Polariton 인수 후속 분석 진행"
          ],
          "narrative": "MRVL은 52주 신고가($84.6)를 갱신했는데 WSB 멘션은 Top 30 밖이에요. AVGO·Astera Labs 비교주로 800G/1.6T 인터커넥트 리레이팅이 시작된 상태고, NVDA Blackwell sympathy로 옵션 콜 빌드업이 가속 중. 가격은 펀더 대비 아직 미반영 — 전형적인 히든엣지 셋업.",
          "entry": 84.6,
          "tp1": 91.0,
          "tp2": 98.0,
          "sl": 80.5,
          "entry_comment": "$82 풀백 시 1차, $86 돌파 안착 시 2차. 거래량 평균 +30% 확인 필수",
          "catalysts": [
            "AI 인터커넥트 800G/1.6T 사이클 시작",
            "Polariton 인수 후속 분석 리레이팅",
            "NVDA Blackwell sympathy",
            "옵션 콜 unusual activity +35%"
          ],
          "risks": [
            "AVGO 가격 압박 시 동조 하락",
            "고객 집중도 (NVDA·AWS 의존)",
            "어닝 6/3 멀어 단기 driver 부족"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 320,
              "sentiment": 0.62
            },
            {
              "sub": "stocks",
              "count": 240,
              "sentiment": 0.69
            }
          ],
          "news_headlines": [
            {
              "title": "Marvell hits 52-week high on AI interconnect re-rating",
              "source": "Barchart",
              "ago": "6h"
            },
            {
              "title": "Astera Labs vs Marvell — AI interconnect comparison",
              "source": "Seeking Alpha",
              "ago": "1d"
            }
          ],
          "trend_surge_pct": 38,
          "options_detail": {
            "call_volume": 62000,
            "put_volume": 14000,
            "cp_ratio": 4.4,
            "smart_money_ratio": 0.81,
            "unusual": true
          }
        },
        {
          "rank": 7,
          "ticker": "COIN",
          "name": "Coinbase Global",
          "sector": "Fintech",
          "sector_full": "Fintech / Crypto Exchange",
          "price": 268.4,
          "change_pct": 2.0,
          "score_total": 80.0,
          "score_reddit": 78,
          "score_news": 88,
          "score_trends": 76,
          "score_options": 78,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "CLARITY Act 마크업 간접 수혜 — USDC 분배 파트너, 5/4 합의 후 +6.1%.",
          "claude_signals": [
            "CLARITY Act 마크업 수혜",
            "USDC 분배 파트너 위치",
            "Polymarket 통과 가능성 67%"
          ],
          "narrative": "COIN은 5/4 CLARITY Act 합의 후 +6.1% 점프, 이후 횡보 중이에요. CRCL과 함께 오늘 마크업 표결의 직접 수혜주 — Paul Grewal CLO가 'activity-based rewards 유지'를 공식 환영. 마크업 통과 시 stablecoin 매출(USDC 분배 수익) 인식 가속 기대. 단기는 CRCL과 페어 트레이드 가능.",
          "entry": 268.4,
          "tp1": 282.0,
          "tp2": 298.0,
          "sl": 258.0,
          "entry_comment": "마크업 통과 시 $275 안착 후 1차, CRCL 대비 베타 낮아 안정형 페어",
          "catalysts": [
            "5/14 CLARITY Act 마크업 표결",
            "USDC 분배 수익 인식 가속",
            "Polymarket 통과 가능성 67~71%",
            "BTC ETF 보관 수익 지속"
          ],
          "risks": [
            "마크업 부결·연기 위험",
            "BTC 가격 변동성",
            "거래 수수료 압박 지속"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 580,
              "sentiment": 0.71
            },
            {
              "sub": "CryptoCurrency",
              "count": 720,
              "sentiment": 0.74
            }
          ],
          "news_headlines": [
            {
              "title": "Coinbase backs CLARITY Act yield compromise",
              "source": "CoinDesk",
              "ago": "12d"
            },
            {
              "title": "COIN +6.1% as Clarity Act compromise preserves stablecoin rewards",
              "source": "CNBC",
              "ago": "10d"
            }
          ],
          "trend_surge_pct": 44,
          "options_detail": {
            "call_volume": 92000,
            "put_volume": 32000,
            "cp_ratio": 2.9,
            "smart_money_ratio": 0.72,
            "unusual": false
          }
        },
        {
          "rank": 8,
          "ticker": "TSM",
          "name": "Taiwan Semiconductor",
          "sector": "Semi",
          "sector_full": "Semiconductors / Foundry",
          "price": 218.8,
          "change_pct": 1.4,
          "score_total": 78.5,
          "score_reddit": 62,
          "score_news": 86,
          "score_trends": 72,
          "score_options": 80,
          "quadrant": "hidden",
          "claude_rank": null,
          "claude_summary": "히든엣지 — 5/15 4월 월간 매출 D-1, HBM 가속 + 3nm/2nm 풀로드.",
          "claude_signals": [
            "5/15 4월 월간 매출 D-1",
            "3nm/2nm 풀로드 가동",
            "Capex 상향 헤드라인 확산"
          ],
          "narrative": "TSM은 5/15 4월 월간 매출 발표를 앞두고 멘션이 거의 없어요. HBM 가속 + 3nm/2nm 풀로드 가동률이 Q2 가이드 상향을 자극 중이고, AMAT 어닝과 동조해서 sympathy 흐름 가능. 대형 안전 베팅 — 베타 낮고 변동성 통제됨.",
          "entry": 218.8,
          "tp1": 228.0,
          "tp2": 240.0,
          "sl": 212.0,
          "entry_comment": "$220 돌파 안착 시 분할 진입, 5/15 발표 전 50% 사이즈로 시작",
          "catalysts": [
            "5/15 4월 월간 매출 D-1",
            "HBM 가속 + 3nm/2nm 풀로드",
            "AMAT 어닝 sympathy",
            "AI capex 사이클 직접 수혜"
          ],
          "risks": [
            "지정학 리스크(대만 해협) 재부각",
            "고객 집중도 (NVDA·Apple)",
            "환율 변동성"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 280,
              "sentiment": 0.65
            },
            {
              "sub": "stocks",
              "count": 320,
              "sentiment": 0.69
            }
          ],
          "news_headlines": [
            {
              "title": "TSMC monthly revenue preview — April acceleration expected",
              "source": "DigiTimes",
              "ago": "2d"
            },
            {
              "title": "TSMC capex hike fuels equipment makers sympathy",
              "source": "Reuters",
              "ago": "1d"
            }
          ],
          "trend_surge_pct": 32,
          "options_detail": {
            "call_volume": 84000,
            "put_volume": 28000,
            "cp_ratio": 3.0,
            "smart_money_ratio": 0.74,
            "unusual": false
          }
        },
        {
          "rank": 9,
          "ticker": "PLTR",
          "name": "Palantir Technologies",
          "sector": "Data/SaaS",
          "sector_full": "Data Analytics / AI SaaS",
          "price": 162.5,
          "change_pct": -0.9,
          "score_total": 76.0,
          "score_reddit": 88,
          "score_news": 76,
          "score_trends": 78,
          "score_options": 62,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "Q1 가이드 상향 후 프리마켓 -1%, 고밸류 차익실현 vs WSB Top 10 충돌 구간.",
          "claude_signals": [
            "Q1 가이드 상향 발표 직후",
            "WSB 인덱스 Top 10 유지",
            "P/S 60x 고밸류 부담"
          ],
          "narrative": "PLTR은 Q1 실적 + 풀년 가이드 상향에도 프리마켓 -1%로 반응이 미지근해요. WSB Top 10 유지 중이지만 P/S 60x 고밸류 부담이 누적된 상태. 정부 계약 헤드라인 모멘텀은 살아있지만 단기는 관망 — 명확한 새 촉매 없이는 가격이 못 움직임.",
          "entry": 162.5,
          "tp1": 172.0,
          "tp2": 182.0,
          "sl": 156.0,
          "entry_comment": "$158 풀백 시 분할 매수 검토, 신규 추격 비추천. 고밸류 변동성 주의",
          "catalysts": [
            "Q1 가이드 상향 후 모멘텀",
            "美 정부 AI 계약 확대",
            "WSB Index Top 10 유지",
            "Foundry AIP 도입 가속"
          ],
          "risks": [
            "P/S 60x 고밸류 차익실현",
            "정부 예산 시퀘스터 우려",
            "단기 신규 촉매 부재"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 1620,
              "sentiment": 0.72
            },
            {
              "sub": "stocks",
              "count": 880,
              "sentiment": 0.68
            }
          ],
          "news_headlines": [
            {
              "title": "Palantir lifts FY guidance on AI-driven gov't wins",
              "source": "Bloomberg",
              "ago": "2d"
            },
            {
              "title": "PLTR down 1% premarket despite strong Q1",
              "source": "Yahoo Finance",
              "ago": "8h"
            }
          ],
          "trend_surge_pct": 28,
          "options_detail": {
            "call_volume": 156000,
            "put_volume": 88000,
            "cp_ratio": 1.8,
            "smart_money_ratio": 0.58,
            "unusual": false
          }
        },
        {
          "rank": 10,
          "ticker": "RDDT",
          "name": "Reddit, Inc.",
          "sector": "AI Infra",
          "sector_full": "AI Data Licensing / Social",
          "price": 198.4,
          "change_pct": 1.8,
          "score_total": 74.5,
          "score_reddit": 72,
          "score_news": 78,
          "score_trends": 82,
          "score_options": 78,
          "quadrant": "hidden",
          "claude_rank": null,
          "claude_summary": "히든엣지 — WSB 인덱스 6위인데 가격 조용, AI 데이터 라이선싱 백그라운드.",
          "claude_signals": [
            "WSB Index 6위 진입",
            "AI 데이터 라이선싱 확대",
            "옵션 콜 unusual 3.2배"
          ],
          "narrative": "RDDT는 WSB 인덱스 6위에 진입했는데 가격은 아직 조용해요. AI 데이터 라이선싱(OpenAI·Google) + 광고 수익 가속이 백그라운드에서 진행 중. 옵션 unusual call이 평균 3.2배로 폭증 — 기관이 조용히 담는 패턴. 다음 어닝 가시성 좋으면 빠르게 리레이팅 가능.",
          "entry": 198.4,
          "tp1": 212.0,
          "tp2": 225.0,
          "sl": 190.0,
          "entry_comment": "$195 풀백 시 1차, $200 안착 시 2차. 옵션 IV 낮아 콜 매수도 옵션",
          "catalysts": [
            "AI 데이터 라이선싱 헤드라인",
            "광고 수익 가속",
            "WSB Index 6위 진입",
            "옵션 unusual call 3.2x"
          ],
          "risks": [
            "사용자 성장률 둔화 우려",
            "OpenAI 라이선스 갱신 압박",
            "광고 시장 매크로 리스크"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 420,
              "sentiment": 0.69
            },
            {
              "sub": "stocks",
              "count": 360,
              "sentiment": 0.71
            }
          ],
          "news_headlines": [
            {
              "title": "Reddit AI data licensing accelerates ad revenue mix shift",
              "source": "TheStreet",
              "ago": "1d"
            },
            {
              "title": "RDDT enters WSB Index Top 10",
              "source": "Benzinga",
              "ago": "3d"
            }
          ],
          "trend_surge_pct": 52,
          "options_detail": {
            "call_volume": 74000,
            "put_volume": 23000,
            "cp_ratio": 3.2,
            "smart_money_ratio": 0.77,
            "unusual": true
          }
        },
        {
          "rank": 11,
          "ticker": "AVGO",
          "name": "Broadcom Inc.",
          "sector": "Semi",
          "sector_full": "Semiconductors / AI Custom Silicon",
          "price": 234.5,
          "change_pct": 1.1,
          "score_total": 72.0,
          "score_reddit": 64,
          "score_news": 78,
          "score_trends": 68,
          "score_options": 78,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "AI 커스텀 실리콘 sympathy + MRVL 동조 상승.",
          "claude_signals": [
            "AI custom silicon 사이클",
            "MRVL 동조 상승",
            "TPU 6세대 헤드라인"
          ]
        },
        {
          "rank": 12,
          "ticker": "TSLA",
          "name": "Tesla, Inc.",
          "sector": "Auto/EV",
          "sector_full": "Auto / EV / Robotaxi",
          "price": 348.2,
          "change_pct": -0.4,
          "score_total": 70.5,
          "score_reddit": 86,
          "score_news": 62,
          "score_trends": 72,
          "score_options": 62,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "WSB 인덱스 9위 유지, 로보택시 모멘텀 vs 매크로 부담.",
          "claude_signals": [
            "WSB Index 9위 유지",
            "로보택시 확장 헤드라인",
            "고밸류 + 매크로 부담"
          ]
        },
        {
          "rank": 13,
          "ticker": "RKLB",
          "name": "Rocket Lab USA",
          "sector": "Space",
          "sector_full": "Space / Defense",
          "price": 32.4,
          "change_pct": 2.8,
          "score_total": 70.0,
          "score_reddit": 82,
          "score_news": 78,
          "score_trends": 76,
          "score_options": 44,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "Q1 매출 +63.5% YoY 후속 모멘텀, WSB 인덱스 2위.",
          "claude_signals": [
            "Q1 매출 +63.5% YoY",
            "WSB Index 2위",
            "Neutron 발사 카운트다운"
          ]
        },
        {
          "rank": 14,
          "ticker": "GOOGL",
          "name": "Alphabet Inc.",
          "sector": "Mega-cap",
          "sector_full": "Mega-cap Tech / Cloud / Search",
          "price": 184.2,
          "change_pct": 0.6,
          "score_total": 68.5,
          "score_reddit": 74,
          "score_news": 72,
          "score_trends": 58,
          "score_options": 70,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "WSB Index 3위, Gemini 모멘텀은 살아있지만 검색 점유율 우려.",
          "claude_signals": [
            "WSB Index 3위",
            "Gemini 사용량 가속",
            "검색 점유율 우려 잔존"
          ]
        },
        {
          "rank": 15,
          "ticker": "AMZN",
          "name": "Amazon.com",
          "sector": "Mega-cap",
          "sector_full": "Mega-cap Tech / Cloud / E-commerce",
          "price": 232.5,
          "change_pct": 0.8,
          "score_total": 67.0,
          "score_reddit": 78,
          "score_news": 70,
          "score_trends": 54,
          "score_options": 66,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "WSB Index 4위, AWS Trainium2 캐파 확장 + 광고 수익 가속.",
          "claude_signals": [
            "WSB Index 4위",
            "Trainium2 capa 확장",
            "광고 수익 가속"
          ]
        },
        {
          "rank": 16,
          "ticker": "AMD",
          "name": "Advanced Micro Devices",
          "sector": "Semi",
          "sector_full": "Semiconductors / AI GPU",
          "price": 168.4,
          "change_pct": 0.9,
          "score_total": 66.5,
          "score_reddit": 76,
          "score_news": 68,
          "score_trends": 60,
          "score_options": 62,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "MI400 사이클 기대 vs NVDA Blackwell 우위 구도.",
          "claude_signals": [
            "MI400 사이클 기대",
            "NVDA Blackwell 격차 우려",
            "Hyperscaler 다변화 수혜"
          ]
        },
        {
          "rank": 17,
          "ticker": "SOFI",
          "name": "SoFi Technologies",
          "sector": "Fintech",
          "sector_full": "Fintech / Digital Banking",
          "price": 18.4,
          "change_pct": 1.7,
          "score_total": 63.0,
          "score_reddit": 80,
          "score_news": 58,
          "score_trends": 62,
          "score_options": 52,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "WSB 멘션 상위 + 핀테크 회복 흐름이지만 금리 4.5% 부담.",
          "claude_signals": [
            "WSB 멘션 Top 15",
            "디지털 은행 사용자 가속",
            "10Y 4.46% 부담"
          ]
        },
        {
          "rank": 18,
          "ticker": "IREN",
          "name": "IREN Ltd.",
          "sector": "Crypto Miner",
          "sector_full": "Crypto Miner / AI Compute",
          "price": 24.8,
          "change_pct": 3.4,
          "score_total": 62.5,
          "score_reddit": 84,
          "score_news": 56,
          "score_trends": 70,
          "score_options": 40,
          "quadrant": "overheat",
          "claude_rank": null,
          "claude_summary": "WSB Index 8위, AI 컴퓨트 피벗 모멘텀 + CLARITY Act sympathy.",
          "claude_signals": [
            "WSB Index 8위",
            "AI compute 피벗",
            "CLARITY Act crypto sympathy"
          ]
        },
        {
          "rank": 19,
          "ticker": "ASTS",
          "name": "AST SpaceMobile",
          "sector": "Space",
          "sector_full": "Space / Satellite Connectivity",
          "price": 36.2,
          "change_pct": 5.1,
          "score_total": 60.5,
          "score_reddit": 90,
          "score_news": 48,
          "score_trends": 74,
          "score_options": 30,
          "quadrant": "overheat",
          "claude_rank": null,
          "claude_summary": "과열 — Q1 미스에도 30일 +55%, WSB 1위지만 펀더 무시 베팅.",
          "claude_signals": [
            "WSB Index 1위",
            "Q1 매출 미스",
            "옵션 풋 빌드업"
          ]
        },
        {
          "rank": 20,
          "ticker": "INTC",
          "name": "Intel Corporation",
          "sector": "Semi",
          "sector_full": "Semiconductors / IDM",
          "price": 124.2,
          "change_pct": -1.8,
          "score_total": 56.0,
          "score_reddit": 70,
          "score_news": 52,
          "score_trends": 64,
          "score_options": 38,
          "quadrant": "overheat",
          "claude_rank": null,
          "claude_summary": "과열 — YTD +220%, WSB 멘션 둔화, 스마트머니 35%로 추가 이탈.",
          "claude_signals": [
            "YTD +220% 과열",
            "스마트머니 35% 이탈",
            "WSB 멘션 둔화"
          ]
        }
      ]
    },
    "2026-05-13": {
      "date": "2026-05-13",
      "date_display": "2026-05-13 (수·미국장 post-CPI)",
      "market_mood": "bullish",
      "market_mood_score": 68,
      "market_summary": "어제 CPI가 무난히 통과해서 SPY가 +0.6%로 안도 랠리 흐름이에요. 반도체·AI 인프라가 다시 리드하고, 내일 5/14 AMAT 어닝 + 美 상원 크립토 법안 표결까지 이중 촉매가 대기 중. NVDA는 5/20 어닝 D-7로 추세 그대로 살아있고, 메가캡(GOOGL/META) 약세는 제한적이라 강세 우위로 봐도 돼요.",
      "sector_tilt": [
        "Semiconductors",
        "AI Infrastructure",
        "Fintech / Stablecoin"
      ],
      "top_ticker": "AMAT",
      "candidate_count": 20,
      "today_action": {
        "one_liner": "AMAT 어닝 D-1 포지션 작게 잡고, NVDA 220 위 추세 추종, INTC 추격은 절대 금지예요.",
        "priorities": [
          {
            "icon": "🎯",
            "ticker": "AMAT",
            "text": "5/14 어닝 D-1 — 22:35 시초 관망 후 $182 위 안착 시 1차 분할(0.5R), 어닝 직전 사이즈 절반으로 축소. 손절 $176, TP1 $190 / TP2 $198"
          },
          {
            "icon": "💎",
            "ticker": "NBIS",
            "text": "히든엣지 졸업 — $188 풀백 시 1차, $190 돌파 시 2차. 거래량 회복 확인 필수. 손절 $182, 익절 $198/$208"
          },
          {
            "icon": "🚨",
            "ticker": "INTC",
            "text": "YTD +220% 과열 유지 — 신규 추격 절대 금지. 보유분만 $126 트레일링 스탑으로 롤링 익절"
          }
        ]
      },
      "routine_timeline": [
        {
          "time_kst": "21:00",
          "time_et": "08:00",
          "label": "프리마켓 무빙 점검 (AMAT/NVDA/CRCL 갭 확인)",
          "active": true
        },
        {
          "time_kst": "21:30",
          "time_et": "08:30",
          "label": "주간 신규실업수당 발표 (컨센 220K)",
          "active": true
        },
        {
          "time_kst": "21:45",
          "time_et": "08:45",
          "label": "10Y 금리 + DXY 체크 (CPI 후속 흐름)",
          "active": true
        },
        {
          "time_kst": "22:00",
          "time_et": "09:00",
          "label": "WSB·X 티커 멘션 재확인 + 옵션 unusual flow 스캔",
          "active": true
        },
        {
          "time_kst": "22:30",
          "time_et": "09:30",
          "label": "🔔 미국장 개장 — 첫 5분 관망",
          "active": true,
          "key": true
        },
        {
          "time_kst": "22:35",
          "time_et": "09:35",
          "label": "AMAT $182 안착 시 1차 분할, NVDA 추세 추종",
          "active": true
        },
        {
          "time_kst": "23:30",
          "time_et": "10:30",
          "label": "CRCL/COIN 크립토 법안 D-1 모멘텀 모니터링",
          "active": true
        },
        {
          "time_kst": "00:30",
          "time_et": "11:30",
          "label": "장중 중간점검 — 손절·익절 관리, AMAT 사이즈 절반 축소",
          "active": true
        },
        {
          "time_kst": "05:00",
          "time_et": "16:00",
          "label": "🔔 미국장 마감 + AMAT 애프터마켓 어닝 대기",
          "active": true,
          "key": true
        },
        {
          "time_kst": "05:05",
          "time_et": "16:05",
          "label": "⚡ AMAT Q2 어닝 (Aftermarket) — 가이던스 주목",
          "active": true,
          "key": true
        }
      ],
      "sectors": [
        {
          "name": "Semiconductors",
          "strength": 0.93,
          "ticker_count": 7
        },
        {
          "name": "AI Infrastructure",
          "strength": 0.86,
          "ticker_count": 3
        },
        {
          "name": "Fintech / Stablecoin",
          "strength": 0.84,
          "ticker_count": 2
        },
        {
          "name": "Memory / HBM",
          "strength": 0.81,
          "ticker_count": 1
        },
        {
          "name": "Nuclear / Energy",
          "strength": 0.74,
          "ticker_count": 2
        },
        {
          "name": "Crypto / Treasury",
          "strength": 0.72,
          "ticker_count": 2
        },
        {
          "name": "Space / Aerospace",
          "strength": 0.69,
          "ticker_count": 1
        },
        {
          "name": "EV / Auto",
          "strength": 0.58,
          "ticker_count": 1
        },
        {
          "name": "AI Hardware / Servers",
          "strength": 0.32,
          "ticker_count": 1
        }
      ],
      "claude_ranking": [
        {
          "rank": 1,
          "ticker": "AMAT",
          "reasoning": "5/14 Q2 어닝 D-1 + 반도체 장비 사이클 회복 + AI 수요 폭증 가이던스 기대.",
          "signals": [
            "5/14 Q2 FY26 어닝 D-1 (Aftermarket)",
            "TheStreet \"unexpected AI move + 수요 폭증\" 코멘트",
            "장비 사이클 회복 + Sell-side 가이드 상향 컨센"
          ]
        },
        {
          "rank": 2,
          "ticker": "NVDA",
          "reasoning": "5/20 어닝 D-7, CPI 통과로 추세 그대로 살아있음, $220 안착 시 가속.",
          "signals": [
            "May 20 Q1 FY27 어닝 D-7",
            "CPI 무난 통과 → 멀티플 압박 해제",
            "콜옵션 C/P 3.4 + 기관 매수 빌드업 지속"
          ]
        },
        {
          "rank": 3,
          "ticker": "CRCL",
          "reasoning": "5/14 美 상원 크립토 법안 표결 D-1 + USDC 신고점 + 자체 블록체인 내러티브.",
          "signals": [
            "5/14 美 상원 스테이블코인 법안 표결 D-1",
            "USDC $79B 신고점 (Q1 +72% YoY)",
            "Bloomberg \"Circle 자체 블록체인\" 후속 보도"
          ]
        },
        {
          "rank": 4,
          "ticker": "MU",
          "reasoning": "HBM 사이클 가속 + 메모리 신고점 + 분석가 추가 상향 컨센.",
          "signals": [
            "AI HBM 메모리 수요 가속 (TSMC capex 상향)",
            "메모리 칩스 신고점 갱신 (3거래일 연속)",
            "Mizuho 목표가 $145 → $158 상향"
          ]
        },
        {
          "rank": 5,
          "ticker": "NBIS",
          "reasoning": "AI 컴퓨트 인프라 히든엣지 졸업 — Q1 어닝 D-2 + NVDA capex 사이클 직접 수혜.",
          "signals": [
            "Q1 어닝 D-2 임박 (Zacks 프리뷰 강세)",
            "NVDA AI 투자 확대 직접 수혜 포지션",
            "거래량 회복 + 기관 누적 시그널"
          ]
        }
      ],
      "hidden_edges": [
        {
          "ticker": "MRVL",
          "reason": "Polariton 인수 발표 후속 분석이 Astera Labs/AVGO 비교주로 리레이팅 시작 중인데 +1.2%로 헤드라인 대비 조용해요. AI 인터커넥트 사이클 시작점이고 옵션 콜 빌드업이 어제부터 본격화 — 거래량 평균 +35%인데 가격은 미반영. NVDA 어닝 sympathy 트레이드 후보."
        },
        {
          "ticker": "TSM",
          "reason": "5/15 4월 월간 매출 발표 D-2인데 멘션이 거의 없어요. HBM 가속 + 3nm/2nm 가동률 풀로드 헤드라인이 Q2 가이드 상향 기대를 자극 중. NVDA·AMAT·MU 강세 시 가장 안전한 대형 sympathy."
        },
        {
          "ticker": "CRWV",
          "reason": "CoreWeave가 CPI 통과 + AI capex 사이클 재가동 분위기에서 +3.5%인데 WSB 멘션은 Top 30 밖. 옵션 unusual call 활동이 어제 평균 4배로 폭증 — 기관이 조용히 담는 패턴 전형. NBIS와 함께 AI 인프라 페어 트레이드 후보."
        }
      ],
      "overheated": [
        {
          "ticker": "INTC",
          "reason": "YTD +220%, 1개월 +120% 유지. WSB 24h 멘션이 어제 +320%에서 오늘 +180%로 둔화 시작 — 후행 추격이 식어가는 신호예요. 옵션 스마트머니 비중 38%로 더 떨어졌고 GF Value 대비 +345% 과대평가. 평균회귀 위험 매우 큼."
        },
        {
          "ticker": "SMR",
          "reason": "원전 SMR이 어제 +7%, 오늘 프리마켓 +4% 추가로 30일 +85% 도달. WSB 멘션 1위 진입했지만 어닝 가시성 없는 상태에서의 모멘텀 베팅. 옵션 콜 IV 95퍼센타일 — 변동성 셀러 진입 구간."
        },
        {
          "ticker": "ASTS",
          "reason": "Q1 매출 미스에도 어제 +10% 후 오늘도 +5% 추가 — 펀더멘털 무시한 내러티브 베팅 지속. 베타 3.2 + 옵션 풋 빌드업 동시 발생, AMAT 어닝 변동성 확산 시 가장 먼저 빠질 후보."
        }
      ],
      "tickers": [
        {
          "rank": 1,
          "ticker": "AMAT",
          "name": "Applied Materials",
          "sector": "Semi",
          "sector_full": "Semiconductors",
          "price": 181.85,
          "change_pct": 2.18,
          "score_total": 89.5,
          "score_reddit": 82,
          "score_news": 94,
          "score_trends": 84,
          "score_options": 96,
          "quadrant": "hot",
          "claude_rank": 1,
          "claude_summary": "5/14 어닝 D-1, 장비 사이클 + AI 수요 가이던스 기대로 옵션 콜 폭증 중이에요.",
          "claude_signals": [
            "5/14 Q2 FY26 어닝 D-1 (Aftermarket)",
            "TheStreet \"unexpected AI move + 수요 폭증\"",
            "콜옵션 C/P 3.4 + 스마트머니 81%"
          ],
          "narrative": "AMAT가 어제 +1.4% 마감 후 오늘 프리마켓 +0.7%로 어닝 D-1 모멘텀이 살아있어요. CPI 통과로 멀티플 압박이 풀렸고, 반도체 장비 사이클 회복 + AI 수요 폭증 코멘트가 가이드 상향 기대를 강하게 자극 중. 옵션 시장에서 콜 빌드업이 어제 대비 +28%로 가속 중이라 기관도 어닝 베팅 사이즈를 키우는 분위기예요.",
          "entry": 181.85,
          "tp1": 190.0,
          "tp2": 198.0,
          "sl": 176.0,
          "entry_comment": "22:35 시초 관망 후 $182 안착 시 1차 0.5R, 어닝 직전 사이즈 절반으로 축소 권장",
          "catalysts": [
            "5/14 Q2 FY26 어닝 (Aftermarket)",
            "TSMC capex 상향 → WFE 수요 가속",
            "AI 메모리/HBM 장비 주문 증가",
            "China DRAM capex 재개 헤드라인"
          ],
          "risks": [
            "어닝 후 China 매출 비중 우려 재점화 가능",
            "가이드 보수적 톤 시 -8% 갭다운 위험",
            "반도체 섹터 차익실현"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 920,
              "sentiment": 0.71
            },
            {
              "sub": "stocks",
              "count": 580,
              "sentiment": 0.68
            },
            {
              "sub": "options",
              "count": 410,
              "sentiment": 0.74
            }
          ],
          "news_headlines": [
            {
              "title": "Applied Materials Q2 Preview: AI move + demand surge eyed",
              "source": "TheStreet",
              "ago": "8h"
            },
            {
              "title": "WFE cycle recovery accelerates as TSMC raises capex",
              "source": "Bloomberg",
              "ago": "12h"
            },
            {
              "title": "AMAT call options volume hits 30-day high pre-earnings",
              "source": "Barron's",
              "ago": "5h"
            }
          ],
          "trend_surge_pct": 58,
          "options_detail": {
            "call_volume": 142000,
            "put_volume": 42000,
            "cp_ratio": 3.4,
            "smart_money_ratio": 0.81,
            "unusual": true
          }
        },
        {
          "rank": 2,
          "ticker": "NVDA",
          "name": "NVIDIA Corporation",
          "sector": "Semi",
          "sector_full": "Semiconductors",
          "price": 222.1,
          "change_pct": 1.21,
          "score_total": 88.7,
          "score_reddit": 93,
          "score_news": 89,
          "score_trends": 86,
          "score_options": 87,
          "quadrant": "hot",
          "claude_rank": 2,
          "claude_summary": "5/20 어닝 D-7, CPI 통과 안도 랠리로 $220 위 안착 — 추세 그대로예요.",
          "claude_signals": [
            "May 20 Q1 FY27 어닝 D-7",
            "CPI 무난 통과 → 멀티플 압박 해제",
            "콜옵션 C/P 3.4 + 기관 빌드업 지속"
          ],
          "narrative": "CPI 통과로 어제 +1.2% 마감 후 오늘 $222 안착으로 추세 그대로 살아있어요. 5/20 어닝까지 D-7, 반도체 섹터 신고점 동조 + Intel-Nvidia 신제품 협업 헤드라인 후속 분석이 계속 강세 모멘텀을 키우는 중. 옵션 콜빌드업이 멈추지 않고 있고, 230달러 목표는 어닝 전까지 충분히 그릴 수 있는 그림이에요.",
          "entry": 222.0,
          "tp1": 228.0,
          "tp2": 235.0,
          "sl": 216.0,
          "entry_comment": "$220 위 유지 확인하고 22:40 1차 진입, $225 돌파 시 2차. 어닝 D-2부터 사이즈 절반 축소",
          "catalysts": [
            "May 20 Q1 FY27 어닝 (D-7)",
            "Hyperscaler capex 가이던스 상향 컨센",
            "Intel-Nvidia 신제품 협업 후속 보도",
            "메모리 신고가 동조 효과"
          ],
          "risks": [
            "어닝 직전 차익실현 (D-3부터)",
            "중국 GPU 수출 규제 헤드라인",
            "Hyperscaler capex 둔화 우려 재점화"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 1620,
              "sentiment": 0.78
            },
            {
              "sub": "stocks",
              "count": 820,
              "sentiment": 0.72
            },
            {
              "sub": "investing",
              "count": 470,
              "sentiment": 0.66
            }
          ],
          "news_headlines": [
            {
              "title": "Nvidia tops $222 as CPI relief unleashes mega-cap tech bid",
              "source": "Yahoo Finance",
              "ago": "3h"
            },
            {
              "title": "NVDA earnings preview: Hyperscaler capex guide in focus",
              "source": "CNBC",
              "ago": "10h"
            },
            {
              "title": "Intel-Nvidia partnership details emerge in supply chain checks",
              "source": "SemiAnalysis",
              "ago": "1d"
            }
          ],
          "trend_surge_pct": 49,
          "options_detail": {
            "call_volume": 328000,
            "put_volume": 96000,
            "cp_ratio": 3.4,
            "smart_money_ratio": 0.82,
            "unusual": true
          }
        },
        {
          "rank": 3,
          "ticker": "CRCL",
          "name": "Circle Internet Group",
          "sector": "Fintech",
          "sector_full": "Fintech / Stablecoin",
          "price": 412.3,
          "change_pct": 3.42,
          "score_total": 87.2,
          "score_reddit": 88,
          "score_news": 92,
          "score_trends": 90,
          "score_options": 79,
          "quadrant": "hot",
          "claude_rank": 3,
          "claude_summary": "5/14 美 상원 크립토 법안 표결 D-1 + USDC 신고점 — 이중 촉매 직전이에요.",
          "claude_signals": [
            "5/14 美 상원 스테이블코인 법안 표결 D-1",
            "USDC $79B 신고점 (Q1 +72% YoY)",
            "Bloomberg \"Circle 자체 블록체인\" 후속 보도"
          ],
          "narrative": "5/14 美 상원 크립토 법안 표결을 하루 앞두고 CRCL이 +3.4%로 강한 모멘텀을 보여요. USDC가 $79B 신고점을 갱신했고, Bloomberg의 \"Circle 자체 블록체인\" 후속 보도가 리레이팅 내러티브를 키우는 중. 다만 표결 결과 따라 변동성 클 수 있어서 사이즈는 보수적으로.",
          "entry": 412.0,
          "tp1": 435.0,
          "tp2": 460.0,
          "sl": 395.0,
          "entry_comment": "법안 표결 D-1이라 사이즈 절반으로 진입, 표결 발표 직전 익절 권장",
          "catalysts": [
            "5/14 美 상원 스테이블코인 법안 표결",
            "USDC 신고점 + Q1 +72% YoY",
            "Circle 자체 블록체인 후속 보도",
            "BTC/ETH 동조 강세"
          ],
          "risks": [
            "법안 표결 부결 시 -10% 갭다운",
            "BTC 급락 동조 위험",
            "단기 차익실현 (오늘 +3.4% 후)"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 1380,
              "sentiment": 0.75
            },
            {
              "sub": "cryptocurrency",
              "count": 920,
              "sentiment": 0.81
            },
            {
              "sub": "stocks",
              "count": 410,
              "sentiment": 0.68
            }
          ],
          "news_headlines": [
            {
              "title": "Senate stablecoin bill vote scheduled for May 14, Circle in focus",
              "source": "Bloomberg",
              "ago": "6h"
            },
            {
              "title": "USDC supply hits record $79B as crypto regulation clarifies",
              "source": "CoinDesk",
              "ago": "9h"
            },
            {
              "title": "Circle's own blockchain plans take shape ahead of Senate vote",
              "source": "Bloomberg",
              "ago": "1d"
            }
          ],
          "trend_surge_pct": 72,
          "options_detail": {
            "call_volume": 88000,
            "put_volume": 31000,
            "cp_ratio": 2.8,
            "smart_money_ratio": 0.74,
            "unusual": true
          }
        },
        {
          "rank": 4,
          "ticker": "MU",
          "name": "Micron Technology",
          "sector": "Memory",
          "sector_full": "Memory / HBM",
          "price": 148.2,
          "change_pct": 2.85,
          "score_total": 85.4,
          "score_reddit": 84,
          "score_news": 90,
          "score_trends": 82,
          "score_options": 86,
          "quadrant": "hot",
          "claude_rank": 4,
          "claude_summary": "HBM 사이클 가속 + 메모리 신고점 3거래일 연속, Mizuho 목표가 상향이에요.",
          "claude_signals": [
            "AI HBM 수요 가속 (TSMC capex 상향)",
            "메모리 칩스 신고점 갱신 (3거래일 연속)",
            "Mizuho 목표가 $145 → $158 상향"
          ],
          "narrative": "메모리 섹터가 신고점을 3거래일 연속 갱신 중이고, MU는 +2.9%로 가장 강한 모멘텀이에요. TSMC capex 상향 발표 → HBM 수요 가속 → MU 매출 가시성 개선 흐름이 정렬됐고, Mizuho가 어제 목표가를 $145 → $158로 상향. AMAT 어닝 가이드까지 강세면 추가 리레이팅 가능.",
          "entry": 148.0,
          "tp1": 156.0,
          "tp2": 164.0,
          "sl": 143.0,
          "entry_comment": "22:40 1차 진입, $150 돌파 시 2차. AMAT 어닝 결과 따라 사이즈 조정",
          "catalysts": [
            "TSMC capex 상향 → HBM 수요 가속",
            "Mizuho 목표가 $145 → $158 상향",
            "메모리 신고점 모멘텀",
            "AMAT 어닝 가이드 sympathy"
          ],
          "risks": [
            "메모리 가격 사이클 정점 우려",
            "China DRAM 공급 증가 헤드라인",
            "단기 차익실현"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 880,
              "sentiment": 0.69
            },
            {
              "sub": "stocks",
              "count": 520,
              "sentiment": 0.71
            },
            {
              "sub": "investing",
              "count": 310,
              "sentiment": 0.64
            }
          ],
          "news_headlines": [
            {
              "title": "Memory chips hit fresh highs as HBM cycle accelerates",
              "source": "Yahoo Finance",
              "ago": "4h"
            },
            {
              "title": "Mizuho lifts Micron target to $158, cites HBM share gains",
              "source": "Barron's",
              "ago": "11h"
            },
            {
              "title": "TSMC raises capex guide, ripples through memory supply chain",
              "source": "Bloomberg",
              "ago": "1d"
            }
          ],
          "trend_surge_pct": 44,
          "options_detail": {
            "call_volume": 165000,
            "put_volume": 52000,
            "cp_ratio": 3.2,
            "smart_money_ratio": 0.76,
            "unusual": true
          }
        },
        {
          "rank": 5,
          "ticker": "NBIS",
          "name": "Nebius Group",
          "sector": "AI Infra",
          "sector_full": "AI Infrastructure",
          "price": 189.4,
          "change_pct": 4.85,
          "score_total": 82.6,
          "score_reddit": 78,
          "score_news": 85,
          "score_trends": 74,
          "score_options": 90,
          "quadrant": "hot",
          "claude_rank": 5,
          "claude_summary": "히든엣지 졸업 — Q1 어닝 D-2 + NVDA capex 사이클 직접 수혜로 거래량 회복 중.",
          "claude_signals": [
            "Q1 어닝 D-2 임박 (Zacks 프리뷰 강세)",
            "NVDA AI 투자 확대 직접 수혜",
            "거래량 회복 + 기관 누적 시그널"
          ],
          "narrative": "어제 히든엣지로 짚었던 NBIS가 +4.9%로 본격 졸업 신호예요. Q1 어닝이 D-2 임박했고, NVDA의 AI capex 확대 푸시 직접 수혜 포지션. 어제까지 평균 이하였던 거래량이 오늘 평균 +60%로 회복 — 기관이 본격적으로 담기 시작한 패턴이라 비대칭 업사이드 잡기 좋은 자리.",
          "entry": 189.0,
          "tp1": 198.0,
          "tp2": 208.0,
          "sl": 182.0,
          "entry_comment": "$188 풀백 시 1차, $190 돌파 시 2차. Q1 어닝 D-1부터 사이즈 절반 축소",
          "catalysts": [
            "Q1 어닝 D-2 (Zacks 강세 프리뷰)",
            "NVDA AI capex 확대 직접 수혜",
            "AI 컴퓨트 인프라 리레이팅",
            "거래량 회복 + 기관 누적"
          ],
          "risks": [
            "어닝 가이드 미스 시 -15% 갭다운",
            "거래량 변동성 확대 위험",
            "AI 인프라 섹터 차익실현"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 580,
              "sentiment": 0.72
            },
            {
              "sub": "stocks",
              "count": 340,
              "sentiment": 0.74
            },
            {
              "sub": "investing",
              "count": 180,
              "sentiment": 0.69
            }
          ],
          "news_headlines": [
            {
              "title": "Nebius Q1 preview: AI compute infra demand in focus",
              "source": "Zacks",
              "ago": "7h"
            },
            {
              "title": "NBIS volume returns as institutional buyers rebuild positions",
              "source": "Seeking Alpha",
              "ago": "10h"
            },
            {
              "title": "AI infrastructure plays back in favor post-CPI",
              "source": "Barron's",
              "ago": "5h"
            }
          ],
          "trend_surge_pct": 66,
          "options_detail": {
            "call_volume": 42000,
            "put_volume": 12000,
            "cp_ratio": 3.5,
            "smart_money_ratio": 0.79,
            "unusual": true
          }
        },
        {
          "rank": 6,
          "ticker": "MRVL",
          "name": "Marvell Technology",
          "sector": "Semi",
          "sector_full": "Semiconductors",
          "price": 78.2,
          "change_pct": 1.24,
          "score_total": 78.5,
          "score_reddit": 68,
          "score_news": 80,
          "score_trends": 72,
          "score_options": 88,
          "quadrant": "hidden",
          "claude_rank": null,
          "claude_summary": "히든엣지 — Polariton 인수 후속 + AI 인터커넥트 사이클 시작점이에요.",
          "claude_signals": [
            "Polariton 인수 후속 분석 강세",
            "옵션 콜 빌드업 본격화 (어제 대비 +35%)",
            "AVGO/Astera Labs 비교주 리레이팅 시작"
          ],
          "narrative": "Polariton 인수 후속 분석이 Astera Labs/AVGO 비교주로 리레이팅 시작 중인데 가격은 +1.2%로 헤드라인 대비 조용해요. AI 인터커넥트 사이클 시작점이고 옵션 콜 빌드업이 어제부터 본격화 중. NVDA 어닝 sympathy 트레이드 후보로 좋아요.",
          "catalysts": [
            "Polariton 인수 시너지",
            "AI 인터커넥트 사이클",
            "NVDA 어닝 sympathy"
          ],
          "risks": [
            "AVGO 어닝(6월) 대기 차익실현",
            "AI capex 둔화 우려"
          ],
          "reddit_sentiment_label": "중립",
          "trend_surge_pct": 28
        },
        {
          "rank": 7,
          "ticker": "TSM",
          "name": "Taiwan Semiconductor",
          "sector": "Semi",
          "sector_full": "Semiconductors",
          "price": 218.45,
          "change_pct": 2.05,
          "score_total": 77.8,
          "score_reddit": 64,
          "score_news": 88,
          "score_trends": 70,
          "score_options": 89,
          "quadrant": "hidden",
          "claude_rank": null,
          "claude_summary": "5/15 4월 월간 매출 D-2 — HBM 가속 + 가동률 풀로드 가이드 기대해요.",
          "claude_signals": [
            "5/15 4월 월간 매출 발표 D-2",
            "3nm/2nm 가동률 풀로드",
            "HBM capex 상향 → 메모리 섹터 sympathy"
          ],
          "narrative": "TSMC가 +2.1%인데 멘션이 거의 없는 상태예요. 5/15 4월 월간 매출 발표 D-2이고, HBM 가속 + 3nm/2nm 가동률 풀로드 헤드라인이 Q2 가이드 상향 기대를 자극 중. NVDA·AMAT·MU 강세 시 가장 안전한 대형 sympathy 포지션이에요.",
          "catalysts": [
            "5/15 4월 월간 매출",
            "HBM 가속",
            "AI capex 사이클"
          ],
          "risks": [
            "China-Taiwan 지정학 헤드라인",
            "월간 매출 컨센 미스"
          ],
          "reddit_sentiment_label": "중립",
          "trend_surge_pct": 18
        },
        {
          "rank": 8,
          "ticker": "COIN",
          "name": "Coinbase Global",
          "sector": "Fintech",
          "sector_full": "Fintech / Stablecoin",
          "price": 312.5,
          "change_pct": 4.12,
          "score_total": 82.4,
          "score_reddit": 88,
          "score_news": 84,
          "score_trends": 86,
          "score_options": 72,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "크립토 법안 D-1 + BTC/ETH 동조 강세 — CRCL 페어 트레이드.",
          "claude_signals": [
            "5/14 美 상원 크립토 법안 표결 D-1",
            "BTC $98K, ETH $3.8K 동조 강세",
            "WSB 24h 멘션 +180%"
          ],
          "narrative": "크립토 법안 표결 D-1로 CRCL과 동시 강세, +4.1%. BTC가 $98K 돌파하면서 거래소 매출 가시성도 같이 좋아지는 구조. CRCL과 페어로 잡되 사이즈는 보수적으로.",
          "catalysts": [
            "5/14 크립토 법안 표결",
            "BTC/ETH 동조 강세",
            "거래량 회복"
          ],
          "risks": [
            "법안 부결 시 -8% 갭다운",
            "BTC 급락 동조"
          ],
          "reddit_sentiment_label": "긍정",
          "trend_surge_pct": 58
        },
        {
          "rank": 9,
          "ticker": "HOOD",
          "name": "Robinhood Markets",
          "sector": "Fintech",
          "sector_full": "Fintech / Stablecoin",
          "price": 68.2,
          "change_pct": 3.05,
          "score_total": 78.2,
          "score_reddit": 82,
          "score_news": 78,
          "score_trends": 80,
          "score_options": 72,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "크립토 법안 D-1 sympathy + 4월 액티브 유저 회복 헤드라인이에요.",
          "claude_signals": [
            "크립토 법안 D-1 sympathy",
            "4월 MAU 회복 컨센",
            "옵션 콜빌드업 +25%"
          ],
          "narrative": "크립토 법안 sympathy로 +3.1%. 4월 액티브 유저 회복 + 옵션 거래량 증가가 가시성 좋아지는 구조. CRCL/COIN보다 리스크는 낮지만 업사이드도 제한적이라 후순위.",
          "catalysts": [
            "크립토 법안 sympathy",
            "4월 MAU",
            "옵션 매출 증가"
          ],
          "risks": [
            "법안 부결 시 -5% 압박",
            "메가캡 약세 동조"
          ],
          "reddit_sentiment_label": "긍정",
          "trend_surge_pct": 42
        },
        {
          "rank": 10,
          "ticker": "CRWV",
          "name": "CoreWeave",
          "sector": "AI Infra",
          "sector_full": "AI Infrastructure",
          "price": 124.8,
          "change_pct": 3.55,
          "score_total": 77.5,
          "score_reddit": 68,
          "score_news": 82,
          "score_trends": 70,
          "score_options": 88,
          "quadrant": "hidden",
          "claude_rank": null,
          "claude_summary": "히든엣지 — AI capex 재가동 분위기에서 옵션 unusual 콜 4배 폭증.",
          "claude_signals": [
            "AI capex 재가동 (CPI 통과)",
            "옵션 unusual 콜 활동 4배 폭증",
            "WSB 멘션 Top 30 밖 (저평가)"
          ],
          "narrative": "CPI 통과 + AI capex 사이클 재가동 분위기에서 +3.5%인데 WSB 멘션은 Top 30 밖이에요. 옵션 unusual call이 어제 평균 4배로 폭증 — 기관이 조용히 담는 패턴 전형. NBIS와 함께 AI 인프라 페어 트레이드 후보.",
          "catalysts": [
            "AI capex 사이클 재가동",
            "옵션 unusual flow",
            "NBIS sympathy"
          ],
          "risks": [
            "AI 인프라 차익실현",
            "어닝 가이드 미스"
          ],
          "reddit_sentiment_label": "중립",
          "trend_surge_pct": 38
        },
        {
          "rank": 11,
          "ticker": "RKLB",
          "name": "Rocket Lab USA",
          "sector": "Space",
          "sector_full": "Space / Aerospace",
          "price": 42.3,
          "change_pct": 1.88,
          "score_total": 76.2,
          "score_reddit": 84,
          "score_news": 76,
          "score_trends": 80,
          "score_options": 64,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "우주 섹터 모멘텀 유지, SpaceX IPO 임박 sympathy.",
          "claude_signals": [
            "SpaceX IPO 임박",
            "Cantor 목표가 상향 후속",
            "Q2 가이드 상향"
          ]
        },
        {
          "rank": 12,
          "ticker": "OKLO",
          "name": "Oklo Inc.",
          "sector": "Nuclear",
          "sector_full": "Nuclear / Energy",
          "price": 82.4,
          "change_pct": 5.5,
          "score_total": 74.8,
          "score_reddit": 86,
          "score_news": 70,
          "score_trends": 88,
          "score_options": 55,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "원전 SMR 랠리 지속, 어닝 임박으로 IV 인상 중.",
          "claude_signals": [
            "원전 SMR 동반 강세",
            "어닝 D-5",
            "IV 95퍼센타일"
          ]
        },
        {
          "rank": 13,
          "ticker": "MSTR",
          "name": "Strategy",
          "sector": "Crypto",
          "sector_full": "Crypto / Treasury",
          "price": 445.2,
          "change_pct": 4.35,
          "score_total": 74.5,
          "score_reddit": 82,
          "score_news": 76,
          "score_trends": 78,
          "score_options": 62,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "BTC $98K 돌파 sympathy + 크립토 법안 D-1.",
          "claude_signals": [
            "BTC $98K 돌파",
            "크립토 법안 D-1",
            "BTC 보유량 +5K 추가"
          ]
        },
        {
          "rank": 14,
          "ticker": "SMR",
          "name": "NuScale Power",
          "sector": "Nuclear",
          "sector_full": "Nuclear / Energy",
          "price": 58.2,
          "change_pct": 4.2,
          "score_total": 72.5,
          "score_reddit": 88,
          "score_news": 64,
          "score_trends": 84,
          "score_options": 54,
          "quadrant": "overheat",
          "claude_rank": null,
          "claude_summary": "과열 — 30일 +85%, WSB 멘션 1위 진입했지만 어닝 가시성 약함.",
          "claude_signals": [
            "30일 +85% 폭등",
            "WSB 멘션 1위",
            "옵션 IV 95퍼센타일"
          ]
        },
        {
          "rank": 15,
          "ticker": "TSLA",
          "name": "Tesla",
          "sector": "EV",
          "sector_full": "EV / Auto",
          "price": 298.4,
          "change_pct": 1.42,
          "score_total": 72.0,
          "score_reddit": 78,
          "score_news": 70,
          "score_trends": 74,
          "score_options": 66,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "CPI 통과 안도 랠리 동참, 4월 인도량 회복 컨센.",
          "claude_signals": [
            "CPI 안도 랠리",
            "4월 인도량 컨센",
            "FSD 12.5 헤드라인"
          ]
        },
        {
          "rank": 16,
          "ticker": "AVGO",
          "name": "Broadcom",
          "sector": "Semi",
          "sector_full": "Semiconductors",
          "price": 1840.5,
          "change_pct": 2.1,
          "score_total": 71.5,
          "score_reddit": 64,
          "score_news": 78,
          "score_trends": 66,
          "score_options": 78,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "6월 어닝 대기, AI ASIC sympathy 강세.",
          "claude_signals": [
            "AI ASIC sympathy",
            "6월 어닝 D-30",
            "MRVL 동조"
          ]
        },
        {
          "rank": 17,
          "ticker": "AMD",
          "name": "Advanced Micro Devices",
          "sector": "Semi",
          "sector_full": "Semiconductors",
          "price": 178.6,
          "change_pct": 1.85,
          "score_total": 70.2,
          "score_reddit": 72,
          "score_news": 72,
          "score_trends": 70,
          "score_options": 67,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "NVDA sympathy 강세지만 어닝 후 모멘텀 약화.",
          "claude_signals": [
            "NVDA sympathy",
            "MI400 가이드 대기",
            "데이터센터 매출 둔화 우려"
          ]
        },
        {
          "rank": 18,
          "ticker": "ASTS",
          "name": "AST SpaceMobile",
          "sector": "Space",
          "sector_full": "Space / Aerospace",
          "price": 42.8,
          "change_pct": 5.12,
          "score_total": 68.5,
          "score_reddit": 88,
          "score_news": 56,
          "score_trends": 82,
          "score_options": 48,
          "quadrant": "overheat",
          "claude_rank": null,
          "claude_summary": "과열 — Q1 미스에도 추가 +5%, 펀더멘털 무시한 내러티브 베팅.",
          "claude_signals": [
            "Q1 매출 미스",
            "베타 3.2 + 풋 빌드업",
            "WSB 멘션 가속"
          ]
        },
        {
          "rank": 19,
          "ticker": "INTC",
          "name": "Intel Corporation",
          "sector": "Semi",
          "sector_full": "Semiconductors",
          "price": 128.4,
          "change_pct": -1.85,
          "score_total": 62.5,
          "score_reddit": 78,
          "score_news": 62,
          "score_trends": 70,
          "score_options": 40,
          "quadrant": "overheat",
          "claude_rank": null,
          "claude_summary": "과열 정점 — YTD +220%, 추격 절대 금지. 보유분만 트레일링 스탑 관리.",
          "claude_signals": [
            "YTD +220% 과열",
            "스마트머니 38% 이탈",
            "WSB 멘션 둔화"
          ]
        },
        {
          "rank": 20,
          "ticker": "SMCI",
          "name": "Super Micro Computer",
          "sector": "AI HW",
          "sector_full": "AI Hardware / Servers",
          "price": 32.1,
          "change_pct": -4.2,
          "score_total": 58.0,
          "score_reddit": 78,
          "score_news": 54,
          "score_trends": 68,
          "score_options": 32,
          "quadrant": "overheat",
          "claude_rank": null,
          "claude_summary": "과열 — DELL 동조 약세 지속, AI 서버 사이클 둔화 우려.",
          "claude_signals": [
            "DELL 동조 -4%",
            "AI 서버 둔화 우려",
            "옵션 풋 빌드업"
          ]
        }
      ]
    },
    "2026-05-12": {
      "date": "2026-05-12",
      "date_display": "2026-05-12 (화·미국장 CPI Day)",
      "market_mood": "bullish",
      "market_mood_score": 64,
      "market_summary": "반도체·메모리 신고점에 CRCL·RKLB·ASTS까지 모멘텀 종목이 끌어주는데, 메가캡(GOOGL/META/AMZN) 약세가 발목을 잡아서 SPY는 +0.2%로 조용한 회전 장세예요. CPI 결과만 무난히 통과하면 강세 우위.",
      "sector_tilt": [
        "Semiconductors",
        "Fintech / Stablecoin",
        "Space / Aerospace"
      ],
      "top_ticker": "NVDA",
      "candidate_count": 20,
      "today_action": {
        "one_liner": "CPI(21:30) 통과 확인하고 NVDA 추세 추종, CRCL은 풀백 받아서 진입, INTC 추격은 금지해요.",
        "priorities": [
          {
            "icon": "🎯",
            "ticker": "NVDA",
            "text": "CPI 21:30 발표 후 변동성 가라앉으면 22:35 시초 관망 → 219 위 안착 시 1차, 220 돌파 시 2차. 손절 214, TP1 225 / TP2 232"
          },
          {
            "icon": "💎",
            "ticker": "NBIS",
            "text": "AI 인프라 히든엣지 — 184~186 풀백 시 1차, 188 돌파 시 2차. 손절 178, 익절 195/205"
          },
          {
            "icon": "🚨",
            "ticker": "INTC",
            "text": "YTD +220% 과열 — 신규 추격 금지. 보유분은 124 트레일링 스탑으로 익절 관리"
          }
        ]
      },
      "routine_timeline": [
        {
          "time_kst": "21:00",
          "time_et": "08:00",
          "label": "프리마켓 무빙 점검 (CRCL/RKLB/ASTS 갭 확인)",
          "active": true
        },
        {
          "time_kst": "21:30",
          "time_et": "08:30",
          "label": "⚡ 美 CPI 4월 발표 (헤드라인/코어 컨센 확인)",
          "active": true,
          "key": true
        },
        {
          "time_kst": "21:45",
          "time_et": "08:45",
          "label": "CPI 직후 SPY/QQQ 반응 + 10Y 금리 체크",
          "active": true
        },
        {
          "time_kst": "22:00",
          "time_et": "09:00",
          "label": "WSB·X 티커 멘션 재확인 + 옵션 흐름 스캔",
          "active": true
        },
        {
          "time_kst": "22:30",
          "time_et": "09:30",
          "label": "🔔 미국장 개장 — 첫 5분 관망",
          "key": true
        },
        {
          "time_kst": "22:35",
          "time_et": "09:35",
          "label": "NVDA 219 위 안착 시 1차 분할 진입",
          "active": true
        },
        {
          "time_kst": "23:00",
          "time_et": "10:00",
          "label": "CRCL/RKLB 풀백 라인 모니터링",
          "active": true
        },
        {
          "time_kst": "00:30",
          "time_et": "11:30",
          "label": "장중 중간점검 — 손절·익절 관리",
          "active": true
        },
        {
          "time_kst": "05:00",
          "time_et": "16:00",
          "label": "🔔 미국장 마감 — 일일 리뷰 및 내일 watchlist 업데이트",
          "key": true
        }
      ],
      "sectors": [
        {
          "name": "Semiconductors",
          "strength": 0.92,
          "ticker_count": 7
        },
        {
          "name": "Fintech / Stablecoin",
          "strength": 0.88,
          "ticker_count": 2
        },
        {
          "name": "Space / Aerospace",
          "strength": 0.83,
          "ticker_count": 2
        },
        {
          "name": "Nuclear / Energy",
          "strength": 0.78,
          "ticker_count": 2
        },
        {
          "name": "Crypto / Treasury",
          "strength": 0.74,
          "ticker_count": 2
        },
        {
          "name": "EV / Auto",
          "strength": 0.66,
          "ticker_count": 1
        },
        {
          "name": "AI Infrastructure",
          "strength": 0.62,
          "ticker_count": 1
        },
        {
          "name": "AI Hardware / Servers",
          "strength": 0.28,
          "ticker_count": 2
        },
        {
          "name": "Mega-cap Tech",
          "strength": 0.34,
          "ticker_count": 1
        }
      ],
      "claude_ranking": [
        {
          "rank": 1,
          "ticker": "NVDA",
          "reasoning": "5/20 어닝까지 추세 추종, 반도체 신고점·옵션 콜빌드업·메가캡 자금 정렬.",
          "signals": [
            "May 20 Q1 FY27 어닝 D-8",
            "메모리·반도체 섹터 신고가 동조",
            "콜옵션 C/P 3.1 + 기관 매수 빌드업"
          ]
        },
        {
          "rank": 2,
          "ticker": "CRCL",
          "reasoning": "Q1 USDC +72% + 5/14 크립토 법안 표결까지 이중 촉매.",
          "signals": [
            "Q1 실적 호조 + USDC $77B 신고점",
            "5/14 美 상원 크립토 법안 표결 임박",
            "블룸버그 \"Circle 자체 블록체인\" 낙관"
          ]
        },
        {
          "rank": 3,
          "ticker": "MU",
          "reasoning": "HBM 사이클 수혜 + 메모리 신고점 + 분석가 상향.",
          "signals": [
            "AI HBM 메모리 수요 가속",
            "메모리 칩스 신고점 (Yahoo Finance)",
            "Insider Monkey 강세 콜 — 성장 전망 리셋"
          ]
        },
        {
          "rank": 4,
          "ticker": "RKLB",
          "reasoning": "Cantor 상향 + Q1 record + SpaceX IPO 비교 모멘텀.",
          "signals": [
            "Cantor Fitzgerald 목표가 상향",
            "Q1 record revenue $200M + Q2 가이드 상향",
            "SpaceX IPO 임박 → 우주 비교주 리레이팅"
          ]
        },
        {
          "rank": 5,
          "ticker": "AMAT",
          "reasoning": "5/14 어닝 D-2 + 장비 사이클 회복 + AI 수요 코멘트.",
          "signals": [
            "5/14 Q2 어닝 D-2",
            "TheStreet \"예상치 못한 AI move + 수요 폭증\"",
            "반도체 장비 사이클 회복"
          ]
        }
      ],
      "hidden_edges": [
        {
          "ticker": "NBIS",
          "reason": "AI 컴퓨트 인프라 신흥 강자인데 NVDA·CRCL 헤드라인에 가려 멘션이 적은 상태. NVDA의 AI 투자 확대 푸시 직접 수혜인데 거래량이 평균 이하라 기관이 조용히 담는 패턴이에요. 비대칭 업사이드 잡기 좋은 자리."
        },
        {
          "ticker": "AMAT",
          "reason": "5/14 어닝 직전인데 헤드라인 소음은 다른 종목 대비 작아요. 반도체 장비 사이클 회복 + AI 수요 폭증 코멘트가 가이드 상향 기대를 자극 중. 변동성 낮은 어닝 베팅."
        },
        {
          "ticker": "MRVL",
          "reason": "Polariton 인수 발표 + Astera Labs 강세 동조인데 +0.3%로 헤드라인 대비 조용. 거래량 정상 수준이라 기관 누적 가능성이 있고, AI 인터커넥트 사이클 시작점 진입 후보."
        }
      ],
      "overheated": [
        {
          "ticker": "INTC",
          "reason": "YTD +220%, 1개월 +120%, GF Value 대비 +345% 과대평가. WSB 24h 멘션 +320% 폭증은 전형적인 후행 추격 패턴이고, 옵션 스마트머니 비중은 42%로 낮아요. 평균회귀 위험 큼."
        },
        {
          "ticker": "ASTS",
          "reason": "Q1 매출 미스에도 +10% 폭등 — 펀더멘털 무시한 내러티브 베팅. WSB 인덱스 1위지만 베타 3+에 옵션 풋 빌드업도 동시 발생 중. CPI 변동성 노출 큼."
        },
        {
          "ticker": "DELL/SMCI",
          "reason": "UBS가 AI 서버 사이클 \"탭드 아웃\" 콜 — DELL -6%, SMCI -5% 동반 약세. YTD +99% 누적 차익실현 + AI capex 둔화 우려 동시 작동. 추격은 회피."
        }
      ],
      "tickers": [
        {
          "rank": 1,
          "ticker": "NVDA",
          "name": "NVIDIA Corporation",
          "sector": "Semi",
          "sector_full": "Semiconductors",
          "price": 219.44,
          "change_pct": 2.04,
          "score_total": 91.2,
          "score_reddit": 94,
          "score_news": 92,
          "score_trends": 88,
          "score_options": 91,
          "quadrant": "hot",
          "claude_rank": 1,
          "claude_summary": "5/20 어닝 D-8, CPI 통과만 받으면 220달러 위 추세 가속 가능해요.",
          "claude_signals": [
            "May 20 Q1 FY27 어닝 D-8",
            "메모리·반도체 섹터 신고가 동조",
            "콜옵션 C/P 3.1 + 기관 매수 빌드업"
          ],
          "narrative": "반도체 섹터가 신고가를 다시 찍는데 NVDA는 +2% 단단한 상승으로 따라가요. 5/20 어닝 앞두고 메가캡 콜옵션 빌드업이 이어지고 있고, Intel CEO가 \"Nvidia와의 신제품\"을 언급한 헤드라인이 생태계 강세 내러티브를 다시 켰어요. CPI만 무난히 통과하면 220달러 돌파 후 230 목표는 충분히 그릴 수 있는 그림이에요.",
          "entry": 219,
          "tp1": 225,
          "tp2": 232,
          "sl": 214,
          "entry_comment": "CPI 발표(21:30 KST) 이후 +/-1.5% 변동 가라앉으면 분할진입 — 22:35 1차, 220 위 안착 시 2차",
          "catalysts": [
            "May 20 Q1 FY27 어닝",
            "Hyperscaler capex 가이던스",
            "Intel-Nvidia 신제품 협업 헤드라인",
            "메모리 신고가 동조 효과"
          ],
          "risks": [
            "CPI 헤드라인 3.5% 상회 시 멀티플 압박",
            "어닝 직전 차익실현",
            "중국 GPU 수출 규제 헤드라인"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 1540,
              "sentiment": 0.76
            },
            {
              "sub": "stocks",
              "count": 780,
              "sentiment": 0.7
            },
            {
              "sub": "investing",
              "count": 440,
              "sentiment": 0.63
            }
          ],
          "news_headlines": [
            {
              "title": "Intel stock rises as CEO Lip-Bu Tan touts 'exciting new products' with Nvidia",
              "source": "Yahoo Finance",
              "ago": "1d"
            },
            {
              "title": "Memory chip stocks hit record highs, pharma reacts to hantavirus concerns",
              "source": "Yahoo Finance Video",
              "ago": "1d"
            },
            {
              "title": "Figma's Next Earnings Report on May 14 Could Send the Stock Soaring. Here's Why.",
              "source": "Motley Fool",
              "ago": "1d"
            }
          ],
          "trend_surge_pct": 52,
          "options_detail": {
            "call_volume": 312000,
            "put_volume": 100000,
            "cp_ratio": 3.1,
            "smart_money_ratio": 0.79,
            "unusual": true
          }
        },
        {
          "rank": 2,
          "ticker": "CRCL",
          "name": "Circle Internet Group",
          "sector": "Stablecoin",
          "sector_full": "Fintech / Stablecoin",
          "price": 131.76,
          "change_pct": 13.64,
          "score_total": 92.8,
          "score_reddit": 96,
          "score_news": 94,
          "score_trends": 95,
          "score_options": 86,
          "quadrant": "hot",
          "claude_rank": 2,
          "claude_summary": "Q1 USDC +72%·온체인 폭증 + 5/14 크립토 법안 표결까지 이중 촉매가 살아있어요.",
          "claude_signals": [
            "Q1 실적 호조 + USDC $77B 신고점",
            "5/14 美 상원 크립토 법안 표결 임박",
            "블룸버그 \"Circle 자체 블록체인\" 낙관"
          ],
          "narrative": "어제 Q1 발표로 USDC 유통량이 $77B를 찍었고, AI 도입 관련 CEO 코멘트와 자체 블록체인 기대까지 더해 +13% 폭등이에요. 5/14 美 상원 크립토 법안(스테이블코인 규제 명문화) 표결도 이번주 안에 결과가 나와서 두 번째 부스터가 대기 중. 다만 하루 +13%는 평균회귀 압력도 같이 커진 상태라 추격은 분할로.",
          "entry": 128,
          "tp1": 138,
          "tp2": 148,
          "sl": 121,
          "entry_comment": "시초 5분 관망 → 128~130 풀백 시 1차, 132 돌파 시 2차",
          "catalysts": [
            "5/14 美 상원 크립토 법안 표결",
            "USDC 유통량 $77B 신고점 지속",
            "Circle 자체 블록체인 / ARC 토큰 로드맵"
          ],
          "risks": [
            "하루 +13% 후 차익실현",
            "Compass Point \"Sell\" 다운그레이드 잔존",
            "법안 부결 시 후행 매수자 손절"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 1280,
              "sentiment": 0.81
            },
            {
              "sub": "CryptoCurrency",
              "count": 960,
              "sentiment": 0.78
            },
            {
              "sub": "stocks",
              "count": 540,
              "sentiment": 0.69
            }
          ],
          "news_headlines": [
            {
              "title": "Circle CEO says AI-fueled layoffs are only the tip of the iceberg",
              "source": "Yahoo Finance",
              "ago": "1d"
            },
            {
              "title": "Circle CEO Jeremy Allaire breaks down Q1 earnings, exploring ARC token",
              "source": "Yahoo Finance Video",
              "ago": "1d"
            },
            {
              "title": "Circle Revenue Rises 20%, But Net Income Drops As USDC Hits $77 Billion",
              "source": "GuruFocus.com",
              "ago": "1d"
            }
          ],
          "trend_surge_pct": 189,
          "options_detail": {
            "call_volume": 215000,
            "put_volume": 62000,
            "cp_ratio": 3.47,
            "smart_money_ratio": 0.72,
            "unusual": true
          }
        },
        {
          "rank": 3,
          "ticker": "MU",
          "name": "Micron Technology",
          "sector": "Semi",
          "sector_full": "Semiconductors",
          "price": 795.33,
          "change_pct": 5.01,
          "score_total": 85,
          "score_reddit": 87,
          "score_news": 90,
          "score_trends": 78,
          "score_options": 85,
          "quadrant": "hot",
          "claude_rank": 3,
          "claude_summary": "HBM 사이클 수혜 + 메모리 신고가 동조 + 분석가 상향 이중 베팅.",
          "claude_signals": [
            "AI HBM 메모리 수요 가속",
            "메모리 칩스 신고점 (Yahoo Finance)",
            "Insider Monkey 강세 콜 — 성장 전망 리셋"
          ],
          "narrative": "메모리 칩 종목들이 신고점을 찍는 흐름에 MU도 +5% 강한 상승. AI HBM 병목이 여전히 풀리지 않아 픽앤쇼블 베팅의 중심이고, 분석가 상향까지 겹쳐서 모멘텀이 단단해요. WSB 인덱스에서도 꾸준히 상위에 머무는 종목이라 리테일도 같이 들어오는 중.",
          "entry": 790,
          "tp1": 820,
          "tp2": 850,
          "sl": 770,
          "entry_comment": "795 위 안착 시 1차, 800 돌파 시 추가 분할",
          "catalysts": [
            "HBM3E·HBM4 단가 인상 가이던스",
            "반도체 섹터 신고점 동조",
            "분석가 목표가 상향 행진"
          ],
          "risks": [
            "CPI 상회 시 그로스 압박",
            "어닝 7월까지 공백 → 헤드라인 의존도",
            "중국 메모리 가격 압박 헤드라인"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 780,
              "sentiment": 0.68
            },
            {
              "sub": "stocks",
              "count": 420,
              "sentiment": 0.66
            },
            {
              "sub": "investing",
              "count": 260,
              "sentiment": 0.6
            }
          ],
          "news_headlines": [
            {
              "title": "Stock market today: Dow rises, S&P 500 and Nasdaq eke out records as chip stocks extend gains",
              "source": "Yahoo Finance",
              "ago": "1d"
            },
            {
              "title": "Dow Jones Futures: AI, Chip Stocks Shrug Off Oil Prices, Trump Comments; CPI Inflation Due",
              "source": "Investor's Business Daily",
              "ago": "1d"
            },
            {
              "title": "Micron (MU) Draws Bullish Call as AI Memory Demand Reshapes Growth Outlook",
              "source": "Insider Monkey",
              "ago": "1d"
            }
          ],
          "trend_surge_pct": 41,
          "options_detail": {
            "call_volume": 148000,
            "put_volume": 54000,
            "cp_ratio": 2.74,
            "smart_money_ratio": 0.71,
            "unusual": false
          }
        },
        {
          "rank": 4,
          "ticker": "RKLB",
          "name": "Rocket Lab USA",
          "sector": "Space",
          "sector_full": "Space / Aerospace",
          "price": 117.35,
          "change_pct": 10.69,
          "score_total": 87.8,
          "score_reddit": 93,
          "score_news": 88,
          "score_trends": 90,
          "score_options": 80,
          "quadrant": "hot",
          "claude_rank": 4,
          "claude_summary": "Cantor 상향 + Q1 record + SpaceX IPO 비교 — 우주 섹터 헤드라이너.",
          "claude_signals": [
            "Cantor Fitzgerald 목표가 상향",
            "Q1 record revenue $200M + Q2 가이드 상향",
            "SpaceX IPO 임박 → 우주 비교주 리레이팅"
          ],
          "narrative": "5/11 Q1 record + 강한 Q2 가이드를 받은 뒤 Cantor 상향까지 더해서 이틀 연속 폭등 중이에요. SpaceX IPO 루머가 다시 살아나면서 \"유일한 상장 우주 발사체\" 프리미엄이 붙어 리테일·기관 모두 들어오는 그림. 다만 이틀 +20%대 누적이라 변동성 큰 추격은 위험해요.",
          "entry": 114,
          "tp1": 124,
          "tp2": 135,
          "sl": 108,
          "entry_comment": "시초 후 풀백 114~116 구간 1차, 118 돌파 시 2차",
          "catalysts": [
            "SpaceX IPO 헤드라인 재점화",
            "Cantor 상향 후 추가 상향 가능성",
            "Neutron 발사체 진행 업데이트"
          ],
          "risks": [
            "이틀 +20% 누적 후 차익실현",
            "우주 섹터 변동성 (베타 2.5+)",
            "CPI 후 그로스 압박"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 1120,
              "sentiment": 0.79
            },
            {
              "sub": "SpaceXMasterrace",
              "count": 380,
              "sentiment": 0.84
            },
            {
              "sub": "investing",
              "count": 210,
              "sentiment": 0.66
            }
          ],
          "news_headlines": [
            {
              "title": "Rocket Lab stock jumps for second day as SpaceX IPO looms",
              "source": "Yahoo Finance",
              "ago": "1d"
            },
            {
              "title": "Stock Market Today, May 11: Rocket Lab Surges After Record Revenue and Strong Q2 Outlook",
              "source": "Motley Fool",
              "ago": "1d"
            },
            {
              "title": "Rocket Lab shares jump 10% on Cantor Fitzgerald upgrade",
              "source": "GuruFocus.com",
              "ago": "1d"
            }
          ],
          "trend_surge_pct": 108,
          "options_detail": {
            "call_volume": 128000,
            "put_volume": 42000,
            "cp_ratio": 3.05,
            "smart_money_ratio": 0.68,
            "unusual": true
          }
        },
        {
          "rank": 5,
          "ticker": "AMAT",
          "name": "Applied Materials",
          "sector": "Semi",
          "sector_full": "Semiconductors",
          "price": 443.62,
          "change_pct": 1.57,
          "score_total": 79.5,
          "score_reddit": 76,
          "score_news": 88,
          "score_trends": 70,
          "score_options": 84,
          "quadrant": "hidden",
          "claude_rank": 5,
          "claude_summary": "5/14 어닝 D-2 + 장비 사이클 회복 + AI 코멘트 — 조용한 강세 정렬.",
          "claude_signals": [
            "5/14 Q2 어닝 D-2",
            "TheStreet \"예상치 못한 AI move + 수요 폭증\"",
            "반도체 장비 사이클 회복"
          ],
          "narrative": "헤드라인 소음은 다른 종목 대비 작은데 펀더멘털 정렬은 가장 좋아요. 5/14 어닝 앞두고 +1.6% 차분한 상승, AI 수요 폭증 코멘트가 어닝 가이드 상향 기대를 자극하고 있어요. 옵션 흐름에서도 콜 빌드업이 보이고, 기관 비중이 높아 변동성 낮으면서 비대칭 업사이드 잡기 좋은 자리.",
          "entry": 442,
          "tp1": 460,
          "tp2": 478,
          "sl": 432,
          "entry_comment": "어닝 전 분할진입 권장 — 시초 후 442 위 안착 시 1차, 446 돌파 시 2차",
          "catalysts": [
            "5/14 Q2 어닝 발표",
            "반도체 장비 capex 가이던스 상향",
            "AI HBM 장비 수요"
          ],
          "risks": [
            "어닝 가이드 미스 시 갭하락",
            "중국 장비 매출 비중 노출",
            "CPI 상회 시 그로스 압박"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 340,
              "sentiment": 0.64
            },
            {
              "sub": "stocks",
              "count": 280,
              "sentiment": 0.7
            },
            {
              "sub": "investing",
              "count": 210,
              "sentiment": 0.68
            }
          ],
          "news_headlines": [
            {
              "title": "Earnings live updates: Plug Power stock rises on revenue surprise, Hims & Hers swings to a loss",
              "source": "Yahoo Finance",
              "ago": "1d"
            },
            {
              "title": "Applied Materials makes unexpected AI move as demand explodes",
              "source": "TheStreet",
              "ago": "1d"
            },
            {
              "title": "S&P 500, Nasdaq Reach New Peaks as Traders Track US-Iran Conflict",
              "source": "MT Newswires",
              "ago": "1d"
            }
          ],
          "trend_surge_pct": 28,
          "options_detail": {
            "call_volume": 82000,
            "put_volume": 28000,
            "cp_ratio": 2.93,
            "smart_money_ratio": 0.74,
            "unusual": false
          }
        },
        {
          "rank": 6,
          "ticker": "NBIS",
          "name": "Nebius Group",
          "sector": "AI Infra",
          "sector_full": "AI Infrastructure",
          "price": 186.1,
          "change_pct": 4.27,
          "score_total": 74.8,
          "score_reddit": 72,
          "score_news": 80,
          "score_trends": 65,
          "score_options": 82,
          "quadrant": "hidden",
          "claude_rank": null,
          "claude_summary": "NVDA AI 투자 푸시 + Q1 어닝 임박, 리테일은 아직 조용한 히든엣지.",
          "claude_signals": [
            "NVDA AI 투자 확대 헤드라인 수혜",
            "Q1 어닝 발표 임박 (Zacks 프리뷰)",
            "AI 컴퓨트 인프라 리레이팅"
          ],
          "narrative": "NVDA가 AI 투자 확대를 공식화한 헤드라인 수혜가 가장 직접적인데 리테일 멘션은 아직 적은 상태. +4.3% 상승이지만 거래량은 평균 이하라서 기관이 조용히 담는 패턴이에요. 이런 구간이 가장 좋은 진입 자리예요.",
          "catalysts": [
            "NVDA AI 투자 푸시 후속",
            "Q1 어닝 (3주 이내)",
            "AI 컴퓨트 인프라 capex 사이클"
          ],
          "risks": [
            "거래량 부족 → 변동성 확대 위험",
            "어닝 시즌 가이던스 미스",
            "NVDA 가까운 어닝과 연동된 sympathy 트레이드"
          ],
          "reddit_sentiment_label": "중립",
          "trend_surge_pct": 22
        },
        {
          "rank": 7,
          "ticker": "COIN",
          "name": "Coinbase Global",
          "sector": "Crypto",
          "sector_full": "Crypto / Exchange",
          "price": 216.6,
          "change_pct": 7.87,
          "score_total": 84.2,
          "score_reddit": 89,
          "score_news": 86,
          "score_trends": 84,
          "score_options": 78,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "CRCL 동반 랠리 + 5/14 크립토 법안 표결까지 정책 모멘텀이 살아있어요.",
          "claude_signals": [
            "CRCL 어닝 spillover",
            "5/14 美 상원 크립토 법안 표결",
            "블룸버그 — 스테이블코인 입법 낙관"
          ],
          "narrative": "CRCL이 끌고 가는 스테이블코인 랠리에 같이 +7.9% 상승. 5/14 상원 표결까지 정책 호재 모멘텀이 살아있고, 거래량도 평균 위라 단순 sympathy가 아니라 신규 베팅이 들어온 신호.",
          "catalysts": [
            "5/14 美 상원 크립토 법안 표결",
            "CRCL 후속 어닝 코멘트",
            "BTC $100K 부근 횡보 유지"
          ],
          "risks": [
            "법안 부결 시 빠른 -10% 가능",
            "BTC 변동성 노출",
            "거래소 수수료 압박 헤드라인"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "trend_surge_pct": 92
        },
        {
          "rank": 8,
          "ticker": "INTC",
          "name": "Intel Corporation",
          "sector": "Semi",
          "sector_full": "Semiconductors",
          "price": 129.44,
          "change_pct": 2.73,
          "score_total": 69.5,
          "score_reddit": 92,
          "score_news": 70,
          "score_trends": 88,
          "score_options": 28,
          "quadrant": "overheat",
          "claude_rank": null,
          "claude_summary": "CEO Nvidia 신제품 코멘트로 또 한 번 상승했지만 YTD·MoM 과열은 그대로.",
          "claude_signals": [
            "Lip-Bu Tan \"Nvidia와 신제품\" 코멘트",
            "YTD +220% / 1개월 +120% 누적",
            "GF Value 대비 +345% 경고 유지"
          ],
          "narrative": "Intel CEO가 Nvidia와의 협업을 다시 띄우면서 +2.7% 상승. 펀더멘털 변화가 아니라 헤드라인 베팅이라 추격은 위험. WSB 멘션은 폭증했지만 옵션 스마트머니 비중은 낮은 상태 — 전형적인 후행 추격 패턴.",
          "catalysts": [
            "Intel-Nvidia 협업 헤드라인 추가",
            "5/13 추가 IR 이벤트 가능성"
          ],
          "risks": [
            "YTD +220% 누적 차익실현",
            "GF Value 대비 +345% 과대평가",
            "펀더멘털 미반영 후 평균회귀"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "trend_surge_pct": 320
        },
        {
          "rank": 9,
          "ticker": "TSLA",
          "name": "Tesla Inc.",
          "sector": "EV",
          "sector_full": "EV / Auto",
          "price": 445,
          "change_pct": 3.98,
          "score_total": 79.5,
          "score_reddit": 84,
          "score_news": 78,
          "score_trends": 80,
          "score_options": 76,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "Piper Sandler \"Optimus 무료\" 평가 + $1T 클럽 재진입으로 +4% 모멘텀.",
          "claude_signals": [
            "Piper Sandler — \"Optimus를 공짜로 사는 가격\"",
            "$1T 클럽 AI 종목 코멘트 (YF)",
            "옵션 콜 빌드업 + 거래량 평균 위"
          ],
          "narrative": "Piper Sandler가 \"현 주가 = Optimus 가치 0 반영\"이라는 코멘트를 던지면서 +4% 상승. AI 헤드라인 빔에 다시 올라탔고 옵션 콜 빌드업도 같이 진행 중. 다만 Tesla는 항상 헤드라인에 -5%도 가능하니 손절 폭 좁게.",
          "catalysts": [
            "Optimus 양산 마일스톤",
            "Robotaxi 후속 헤드라인",
            "중국 판매 회복 사이클"
          ],
          "risks": [
            "중국 가격 인하 헤드라인 위험",
            "일론 트윗 변동성",
            "CPI 후 그로스 회전"
          ],
          "reddit_sentiment_label": "긍정",
          "trend_surge_pct": 62
        },
        {
          "rank": 10,
          "ticker": "MSTR",
          "name": "Strategy (MicroStrategy)",
          "sector": "Crypto",
          "sector_full": "Crypto / Treasury",
          "price": 195.94,
          "change_pct": 3.84,
          "score_total": 76.5,
          "score_reddit": 82,
          "score_news": 72,
          "score_trends": 78,
          "score_options": 74,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "Saylor \"세계 최대 BTC 매수자\" 재차 강조 + STRC DeFi 진입.",
          "claude_signals": [
            "Saylor \"biggest buyer of bitcoin\" 코멘트",
            "STRC DeFi 상장 (Blockspace)",
            "BTC 횡보 + 크립토 섹터 동조"
          ],
          "narrative": "BTC 프록시로 +3.8%. STRC가 DeFi에 올라가면서 추가 레버리지 베팅 통로 열렸지만 이게 양날의 검이라는 우려도 함께. BTC 변동성에 직접 노출이라 손절은 짧게.",
          "catalysts": [
            "BTC $100K 부근 횡보 유지",
            "STRC DeFi 자금 유입",
            "신규 BTC 매수 트랜치 발표"
          ],
          "risks": [
            "BTC -5% 시 -10% 노출",
            "STRC DeFi \"end poorly\" 헤드라인 위험",
            "다시 ATM 발행 시 희석"
          ],
          "reddit_sentiment_label": "긍정",
          "trend_surge_pct": 48
        },
        {
          "rank": 11,
          "ticker": "OKLO",
          "name": "Oklo Inc.",
          "sector": "Nuclear",
          "sector_full": "Nuclear / Energy",
          "price": 78.13,
          "change_pct": 7.47,
          "score_total": 77,
          "score_reddit": 86,
          "score_news": 70,
          "score_trends": 84,
          "score_options": 68,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "원전 SMR 섹터 랠리 + 어닝 임박, 트레이더 IV 인상 중.",
          "claude_signals": [
            "Constellation Three Mile Island 후속 헤드라인",
            "원전 SMR 동반 강세 (SMR +7%)",
            "Investopedia — 어닝 후 변동성 예상치 인상"
          ]
        },
        {
          "rank": 12,
          "ticker": "HOOD",
          "name": "Robinhood Markets",
          "sector": "Fintech",
          "sector_full": "Fintech / Retail",
          "price": 80.78,
          "change_pct": 4.71,
          "score_total": 77.5,
          "score_reddit": 84,
          "score_news": 80,
          "score_trends": 76,
          "score_options": 70,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "AI 랠리 + 2번째 리테일 IPO 준비, 거래소 강세 동조.",
          "claude_signals": [
            "TechCrunch — 2번째 리테일 IPO 추진",
            "AI 랠리 동조 + COIN spillover",
            "Q1 거래량 강세 잔존"
          ]
        },
        {
          "rank": 13,
          "ticker": "ASTS",
          "name": "AST SpaceMobile",
          "sector": "Space",
          "sector_full": "Space / Aerospace",
          "price": 82.55,
          "change_pct": 10.27,
          "score_total": 66.5,
          "score_reddit": 94,
          "score_news": 60,
          "score_trends": 90,
          "score_options": 22,
          "quadrant": "overheat",
          "claude_rank": null,
          "claude_summary": "Q1 매출 미스에도 +10% — 내러티브 기반 과열 패턴.",
          "claude_signals": [
            "Q1 매출 estimates 미스 (Zacks)",
            "WSB 인덱스 1위 + 24h 멘션 폭증",
            "베타 3+ — CPI 변동성 노출 큼"
          ]
        },
        {
          "rank": 14,
          "ticker": "MRVL",
          "name": "Marvell Technology",
          "sector": "Semi",
          "sector_full": "Semiconductors",
          "price": 170.84,
          "change_pct": 0.32,
          "score_total": 70.5,
          "score_reddit": 68,
          "score_news": 78,
          "score_trends": 60,
          "score_options": 76,
          "quadrant": "hidden",
          "claude_rank": null,
          "claude_summary": "Polariton 인수 발표 + Astera Labs 동반 강세 — 조용한 사이클 픽.",
          "claude_signals": [
            "Polariton Technologies 인수 발표",
            "Astera Labs Scorpio 강세 spillover",
            "NVDA AI 투자 푸시 수혜"
          ]
        },
        {
          "rank": 15,
          "ticker": "SMR",
          "name": "NuScale Power",
          "sector": "Nuclear",
          "sector_full": "Nuclear / Energy",
          "price": 13.29,
          "change_pct": 7,
          "score_total": 71.5,
          "score_reddit": 82,
          "score_news": 64,
          "score_trends": 80,
          "score_options": 60,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "NuScale \"10X\" 커버리지 + Three Mile Island 헤드라인 — SMR 섹터 모멘텀.",
          "claude_signals": [
            "Motley Fool \"10X 잠재력\" 커버리지",
            "Constellation TMI 후속",
            "OKLO 동반 강세"
          ]
        },
        {
          "rank": 16,
          "ticker": "AMD",
          "name": "Advanced Micro Devices",
          "sector": "Semi",
          "sector_full": "Semiconductors",
          "price": 458.79,
          "change_pct": -0.52,
          "score_total": 69,
          "score_reddit": 74,
          "score_news": 70,
          "score_trends": 64,
          "score_options": 68,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "반도체 신고가 흐름에서 빠진 -0.5% — 데이터센터 수주 코멘트 대기.",
          "claude_signals": [
            "반도체 섹터 신고가 사이클 vs AMD 횡보",
            "MI400 데이터센터 코멘트 대기",
            "옵션 흐름 중립 — 결정 자리"
          ]
        },
        {
          "rank": 17,
          "ticker": "AVGO",
          "name": "Broadcom",
          "sector": "Semi",
          "sector_full": "Semiconductors",
          "price": 428.43,
          "change_pct": -0.28,
          "score_total": 65.5,
          "score_reddit": 66,
          "score_news": 72,
          "score_trends": 58,
          "score_options": 66,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "-0.3% 횡보 — 6월 어닝까지 헤드라인 공백 구간.",
          "claude_signals": [
            "반도체 사이클 수혜 잔존",
            "6월 Q3 어닝까지 공백",
            "Apple Bluetooth 칩 의존도"
          ]
        },
        {
          "rank": 18,
          "ticker": "GOOGL",
          "name": "Alphabet Inc.",
          "sector": "Mega",
          "sector_full": "Mega-cap Tech",
          "price": 388.64,
          "change_pct": -2.73,
          "score_total": 58.5,
          "score_reddit": 62,
          "score_news": 64,
          "score_trends": 58,
          "score_options": 50,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "메가캡 약세 주도 -2.7%, AI capex 회의론 헤드라인 부각.",
          "claude_signals": [
            "메가캡 sympathy 매도",
            "Motley Fool TSM AI build-out 둔화 우려",
            "옵션 풋 빌드업"
          ]
        },
        {
          "rank": 19,
          "ticker": "DELL",
          "name": "Dell Technologies",
          "sector": "AI HW",
          "sector_full": "AI Hardware / Servers",
          "price": 247.04,
          "change_pct": -5.96,
          "score_total": 59.5,
          "score_reddit": 78,
          "score_news": 58,
          "score_trends": 72,
          "score_options": 30,
          "quadrant": "overheat",
          "claude_rank": null,
          "claude_summary": "-6% 급락, UBS \"AI 랠리 탭드 아웃\" — 트렌드 전환 신호.",
          "claude_signals": [
            "UBS — \"AI 랠리 탭드 아웃\" 목표가 리셋",
            "SMCI 동반 -5% 약세",
            "YTD +99% 누적 차익실현 압력"
          ]
        },
        {
          "rank": 20,
          "ticker": "SMCI",
          "name": "Super Micro Computer",
          "sector": "AI HW",
          "sector_full": "AI Hardware / Servers",
          "price": 33.52,
          "change_pct": -5.27,
          "score_total": 58.5,
          "score_reddit": 80,
          "score_news": 56,
          "score_trends": 70,
          "score_options": 28,
          "quadrant": "overheat",
          "claude_rank": null,
          "claude_summary": "-5% AI 서버 사이클 둔화 + DELL 동조 약세 — 회피.",
          "claude_signals": [
            "DELL 동조 -5%",
            "UBS AI 서버 피크아웃 분석",
            "Nano Nuclear MOU 헤드라인 — 단기 호재 한계"
          ]
        }
      ]
    },
    "2026-05-10": {
      "date": "2026-05-10",
      "date_display": "2026-05-10 (일·미국장 프리뷰)",
      "market_mood": "bullish",
      "market_mood_score": 72,
      "market_summary": "S&P500이 7,300 첫 돌파하면서 6주 연속 상승, 반도체·메가캡 주도 분위기인데 화요일 CPI(예상 3.9%) 한 번 짚고 가야 해요.",
      "sector_tilt": [
        "Semiconductors",
        "Mega-cap Tech",
        "Space/AI Infra"
      ],
      "top_ticker": "NVDA",
      "candidate_count": 20,
      "today_action": {
        "one_liner": "NVDA·반도체 추세는 그대로 안고 가되 INTC 과열 + 화요일 CPI 두 변수만 잘 헤지해요.",
        "priorities": [
          {
            "icon": "🎯",
            "ticker": "NVDA",
            "text": "5/20 어닝까지 추세 추종 — 22:35 시초 관망 후 215달러 위 유지하면 분할진입, 손절 210, TP1 222 / TP2 230"
          },
          {
            "icon": "💎",
            "ticker": "NBIS",
            "text": "AI 인프라 히든엣지 — 시초 후 변동성 식으면 분할진입, 리테일 노이즈 적은 만큼 익절 타깃 +6~8% 잡고 손절 -4%"
          },
          {
            "icon": "🚨",
            "ticker": "INTC",
            "text": "Apple 딜로 +200% YTD·GF 가치 대비 +345% 과열 — 신규 추격매수 금지, 보유분은 124~125달러 트레일링 스탑으로 익절 관리"
          }
        ]
      },
      "routine_timeline": [
        {
          "time_kst": "21:30",
          "time_et": "08:30",
          "label": "프리마켓 무빙 점검 + CRCL/CEG 어닝 헤드라인 스캔",
          "active": true
        },
        {
          "time_kst": "22:00",
          "time_et": "09:00",
          "label": "WSB·X 티커 멘션 다시 한 번 훑기",
          "active": true
        },
        {
          "time_kst": "22:30",
          "time_et": "09:30",
          "label": "🔔 미국장 개장 — 첫 5분 관망",
          "key": true
        },
        {
          "time_kst": "22:35",
          "time_et": "09:35",
          "label": "NVDA / 반도체 라인 진입 판단",
          "active": true
        },
        {
          "time_kst": "23:00",
          "time_et": "10:00",
          "label": "INTC 갭다운 여부 체크 (과열 해소 신호)"
        },
        {
          "time_kst": "00:00",
          "time_et": "11:00",
          "label": "히든엣지 종목(NBIS·AMAT) 거래량 확인"
        },
        {
          "time_kst": "02:00",
          "time_et": "13:00",
          "label": "오후장 추세 점검, 손절 라인 갱신"
        },
        {
          "time_kst": "03:30",
          "time_et": "14:30",
          "label": "장 마감 1.5시간 전 — 신규진입 자제, 청산 위주"
        },
        {
          "time_kst": "05:00",
          "time_et": "16:00",
          "label": "🔔 미국장 마감 — CRCL 결과 정리 (BMO 결과 vs 종가 반응)"
        }
      ],
      "sectors": [
        {
          "name": "Semiconductors",
          "strength": 0.91,
          "ticker_count": 6
        },
        {
          "name": "Mega-cap Tech",
          "strength": 0.82,
          "ticker_count": 4
        },
        {
          "name": "Space / Aerospace",
          "strength": 0.78,
          "ticker_count": 2
        },
        {
          "name": "AI Infra / Crypto-mining",
          "strength": 0.74,
          "ticker_count": 3
        },
        {
          "name": "Fintech / Stablecoin",
          "strength": 0.68,
          "ticker_count": 1
        },
        {
          "name": "China ADR",
          "strength": 0.55,
          "ticker_count": 2
        },
        {
          "name": "Utility / AI Power",
          "strength": 0.62,
          "ticker_count": 1
        },
        {
          "name": "Platform / Social",
          "strength": 0.58,
          "ticker_count": 1
        }
      ],
      "claude_ranking": [
        {
          "rank": 1,
          "ticker": "NVDA",
          "reasoning": "5/20 Q1 FY27 어닝 앞두고 JPM·SS 모두 멀티플 확장 베팅, 반도체 섹터 +52% YoY 성장률이 깔려있어요.",
          "signals": [
            "May 20 어닝 앞 모멘텀 빌드업",
            "반도체 섹터 강세 지속",
            "메가캡 자금 유입 (JPM 트레이딩 데스크 코멘트)"
          ]
        },
        {
          "rank": 2,
          "ticker": "INTC",
          "reasoning": "5/9 Apple 칩 제조 딜이 폭발했지만 +200% YTD·+116% MoM에 GF 대비 345% 과열이라 추격은 위험해요.",
          "signals": [
            "Apple 칩 제조 파운드리 딜 (5/9 발표)",
            "WSB 멘션 +354% 24h 폭증",
            "밸류에이션 GF Value 대비 +345.8% 경고"
          ]
        },
        {
          "rank": 3,
          "ticker": "CRCL",
          "reasoning": "5/11 BMO Q1 어닝 — USDC +72% YoY·온체인 +247% 성장 확인 vs Compass Point Sell 다운그레이드 충돌, 비대칭 베팅 구간.",
          "signals": [
            "May 11 어닝 (Rev est $717M, EPS $0.15)",
            "USDC 유통량 +72% YoY $75.3B",
            "Compass Point 'Sell' 다운그레이드·EBITDA -19% Q/Q 우려"
          ]
        },
        {
          "rank": 4,
          "ticker": "RKLB",
          "reasoning": "Q1 매출 $200M(+63% YoY)·백로그 $2.2B 확인, WSB 2026 인덱스 2위라 리테일 모멘텀이 단단해요.",
          "signals": [
            "Q1 record revenue $200.35M +63.5% YoY",
            "Backlog $2.2B 신고점",
            "WSB 2026 Top10 인덱스 #2 종목"
          ]
        },
        {
          "rank": 5,
          "ticker": "MU",
          "reasoning": "HBM 병목이 여전한 AI 메모리 픽앤쇼블, WSB 인덱스 7위 + 반도체 섹터 강세의 핵심 수혜.",
          "signals": [
            "AI HBM 메모리 수요 지속",
            "반도체 섹터 +52% YoY 매출 성장",
            "WSB 2026 인덱스 #7 + 리테일 멘션 상위"
          ]
        }
      ],
      "hidden_edges": [
        {
          "ticker": "NBIS",
          "reason": "AI 컴퓨트 인프라 신흥 강자인데 NVDA·INTC에 가려져 멘션이 적어요. WSB 2026 인덱스에는 들어왔지만 리테일 거품은 거의 없는 상태라 기관 흐름이 들어오면 비대칭 업사이드."
        },
        {
          "ticker": "AMAT",
          "reason": "5/14 어닝 앞두고 반도체 장비 사이클 회복 + 반도체 섹터 +52% YoY 매출이라는 거시 신호. 헤드라인은 조용한데 펀더멘털 정렬이 좋아요."
        }
      ],
      "overheated": [
        {
          "ticker": "INTC",
          "reason": "1개월 +116%, YTD +200%, GF Value 대비 345% 과대평가. WSB 멘션 +354% 24h는 전형적인 후행 추격 패턴이라 평균회귀 위험 큼."
        },
        {
          "ticker": "ASTS",
          "reason": "WSB 인덱스 1위지만 베타 3+, 펀더멘털보다 내러티브에 100% 의존. CPI 변동성 구간에 비중 늘리면 손절 폭이 너무 커져요."
        }
      ],
      "tickers": [
        {
          "rank": 1,
          "ticker": "NVDA",
          "name": "NVIDIA Corporation",
          "sector": "Semi",
          "sector_full": "Semiconductors",
          "price": 215.16,
          "change_pct": 1.7,
          "score_total": 88.5,
          "score_reddit": 90,
          "score_news": 92,
          "score_trends": 84,
          "score_options": 88,
          "quadrant": "hot",
          "claude_rank": 1,
          "claude_summary": "5/20 어닝 모멘텀 + 반도체 섹터 추세 + 기관자금 유입 삼박자 정렬",
          "claude_signals": [
            "May 20 Q1 FY27 earnings",
            "JPM mega-cap call buying",
            "Semis +52% YoY revenue"
          ],
          "narrative": "시총 $5.17T로 세계 1위, 5/20 어닝 앞두고 분석가들이 가이던스 상향 베팅을 늘리는 중이에요. 리테일도 '오픈소스 양자 AI 모델 (Nvidia Ising)' 발표를 받아주면서 멀티플 확장 명분이 또 생겼고, JPM 트레이딩 데스크는 메가캡 콜옵션 빌드업이 NVDA 어닝까지 이어진다고 봐요.",
          "entry": 215,
          "tp1": 222,
          "tp2": 230,
          "sl": 210,
          "entry_comment": "시초가 5분 관망 후 215달러 위 유지 시 1차 분할, 220 위 돌파 시 2차 추가",
          "catalysts": [
            "May 20 Q1 FY27 어닝",
            "Nvidia Ising 양자 AI 모델 발표 후속",
            "Hyperscaler capex 가이던스"
          ],
          "risks": [
            "CPI 3.9% 컨센 상회 시 멀티플 압박",
            "어닝 직전 차익실현",
            "Apple-Intel 딜에 따른 칩 공급망 내러티브 변화"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 1480,
              "sentiment": 0.74
            },
            {
              "sub": "stocks",
              "count": 720,
              "sentiment": 0.68
            },
            {
              "sub": "investing",
              "count": 410,
              "sentiment": 0.61
            }
          ],
          "news_headlines": [
            {
              "title": "Wall Street analysts increasingly bullish on Nvidia ahead of May 20 earnings",
              "source": "Motley Fool",
              "ago": "1d"
            },
            {
              "title": "Nvidia announces open-source quantum AI models (Nvidia Ising)",
              "source": "Reuters",
              "ago": "2d"
            },
            {
              "title": "JPM trading desk: mega-caps to build into NVDA print",
              "source": "CNBC",
              "ago": "2d"
            }
          ],
          "trend_surge_pct": 48,
          "options_detail": {
            "call_volume": 285000,
            "put_volume": 92000,
            "cp_ratio": 3.1,
            "smart_money_ratio": 0.78,
            "unusual": true
          }
        },
        {
          "rank": 2,
          "ticker": "INTC",
          "name": "Intel Corporation",
          "sector": "Semi",
          "sector_full": "Semiconductors",
          "price": 124.92,
          "change_pct": 13.96,
          "score_total": 85.7,
          "score_reddit": 96,
          "score_news": 78,
          "score_trends": 95,
          "score_options": 74,
          "quadrant": "overheat",
          "claude_rank": 2,
          "claude_summary": "Apple 칩 딜 폭발했지만 +200% YTD에 밸류 +345% 과열 — 추격은 금지, 보유면 익절 관리",
          "claude_signals": [
            "Apple chip manufacturing deal (5/9)",
            "WSB mentions +354% 24h",
            "GF Value overvalued +345.8%"
          ],
          "narrative": "5/8 +13.96% 마감 후 5/9 Apple과 칩 제조 예비 합의 발표가 폭발 — 한때 $130.57 찍고 마감 $124.92. 1개월 +116%, YTD +200%, 시총 $470B 돌파. 다만 GF Value 대비 345.8% 과대평가, '5월에 팔고 떠나라' 내러티브가 동시에 살아나는 중. 추격매수는 금물.",
          "entry": 124,
          "tp1": 132,
          "tp2": 140,
          "sl": 118,
          "entry_comment": "신규 진입은 권장 안 함. 보유분은 124~125 트레일링 스탑으로 익절 관리.",
          "catalysts": [
            "Apple-Intel 파운드리 딜 후속",
            "5/13 칩 섹터 컨퍼런스 가능성",
            "Trump 'US made $30B' 코멘트"
          ],
          "risks": [
            "GF Value 대비 +345% 과대평가",
            "Sell in May 캐치프레이즈 부각",
            "RSI 90+ 과매수 영역",
            "추격 후 갭다운 위험"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 2240,
              "sentiment": 0.81
            },
            {
              "sub": "stocks",
              "count": 690,
              "sentiment": 0.62
            },
            {
              "sub": "Superstonk",
              "count": 180,
              "sentiment": 0.4
            }
          ],
          "news_headlines": [
            {
              "title": "Intel soars 13% on report of Apple chip talks, hits all-time high",
              "source": "CNBC",
              "ago": "1d"
            },
            {
              "title": "Intel quintupled from lows: is the easy money already gone?",
              "source": "247WallSt",
              "ago": "1d"
            },
            {
              "title": "Intel stock surge raises concerns over AI bubble",
              "source": "GuruFocus",
              "ago": "2d"
            }
          ],
          "trend_surge_pct": 312,
          "options_detail": {
            "call_volume": 412000,
            "put_volume": 188000,
            "cp_ratio": 2.19,
            "smart_money_ratio": 0.54,
            "unusual": true
          }
        },
        {
          "rank": 3,
          "ticker": "CRCL",
          "name": "Circle Internet Group",
          "sector": "Fintech",
          "sector_full": "Fintech / Stablecoin",
          "price": 152.4,
          "change_pct": 9.64,
          "score_total": 83.2,
          "score_reddit": 82,
          "score_news": 86,
          "score_trends": 78,
          "score_options": 87,
          "quadrant": "hot",
          "claude_rank": 3,
          "claude_summary": "5/11 BMO 어닝 — 비대칭 베팅 구간, USDC 성장 vs 마진 압박이 정면충돌",
          "claude_signals": [
            "May 11 BMO earnings",
            "USDC +72% YoY $75.3B",
            "Compass Point Sell downgrade"
          ],
          "narrative": "5/1 +9.64% 마감 + 5/4 +7.51% 등 어닝 앞 모멘텀이 살아있어요. 컨센은 매출 $717M, EPS $0.15. USDC 유통량 +72% YoY는 강력한 탑라인 모멘텀이지만 Compass Point는 'Sell'로 내리고 EBITDA -19% Q/Q 예상. 한 임원이 5/4에 $1.3M 매도한 것도 부담. 어닝 직후 ±15% 변동성 가능성 큼.",
          "entry": 151,
          "tp1": 168,
          "tp2": 180,
          "sl": 140,
          "entry_comment": "포지션은 어닝 전 50% 이하만, 결과 확인 후 추가 결정",
          "catalysts": [
            "5/11 BMO Q1 어닝",
            "CLARITY Act 모멘텀",
            "USDC 온체인 거래량 발표"
          ],
          "risks": [
            "Compass Point 'Sell' 다운그레이드",
            "임원 매도 ($1.3M)",
            "Reserve return rate 3.8%로 -68bp YoY",
            "Stagflation 환경에서 fintech 베타 큼"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 380,
              "sentiment": 0.62
            },
            {
              "sub": "CryptoCurrency",
              "count": 540,
              "sentiment": 0.71
            },
            {
              "sub": "stocks",
              "count": 220,
              "sentiment": 0.55
            }
          ],
          "news_headlines": [
            {
              "title": "CRCL stock outlook as executive sells $1.3M shares ahead of May 11 earnings",
              "source": "Coingape",
              "ago": "3d"
            },
            {
              "title": "Circle Q1 2026 earnings preview: can the stablecoin giant sustain?",
              "source": "Moomoo",
              "ago": "2d"
            },
            {
              "title": "Circle before Q1 earnings: buy, hold or sell?",
              "source": "TradingView/Zacks",
              "ago": "1d"
            }
          ],
          "trend_surge_pct": 128,
          "options_detail": {
            "call_volume": 84000,
            "put_volume": 41000,
            "cp_ratio": 2.05,
            "smart_money_ratio": 0.69,
            "unusual": true
          }
        },
        {
          "rank": 4,
          "ticker": "RKLB",
          "name": "Rocket Lab Corporation",
          "sector": "Aero",
          "sector_full": "Space / Aerospace",
          "price": 38.72,
          "change_pct": 2.4,
          "score_total": 81.5,
          "score_reddit": 88,
          "score_news": 80,
          "score_trends": 82,
          "score_options": 76,
          "quadrant": "hot",
          "claude_rank": 4,
          "claude_summary": "Q1 record + 백로그 $2.2B + WSB 인덱스 #2 — 스페이스 테마의 베타 베팅",
          "claude_signals": [
            "Q1 revenue $200M +63.5% YoY",
            "Backlog $2.2B record",
            "WSB 2026 Index #2"
          ],
          "narrative": "Q1 매출 $200.35M(+63.5% YoY)에 백로그 $2.2B 신고점, 13명 분석가 컨센 'Buy'. 리테일 사이드에서는 ASTS와 함께 우주 경제 더블플레이로 묶여서 자금 유입이 꾸준해요. 다만 베타 2+의 변동성은 항상 염두.",
          "entry": 38.5,
          "tp1": 42,
          "tp2": 46,
          "sl": 36.5,
          "entry_comment": "시초 후 $38.5 위 유지 시 분할진입, 첫 시도 실패하면 다시 안 쫓아감",
          "catalysts": [
            "Neutron 로켓 발사 일정",
            "정부 위성 발주 뉴스",
            "Backlog 추가 확대"
          ],
          "risks": [
            "베타 2+ 변동성",
            "발사 지연 리스크",
            "ASTS 등 스페이스 종목 동조 매도 위험"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 920,
              "sentiment": 0.76
            },
            {
              "sub": "RocketLab",
              "count": 480,
              "sentiment": 0.84
            },
            {
              "sub": "SpaceXLounge",
              "count": 210,
              "sentiment": 0.68
            }
          ],
          "news_headlines": [
            {
              "title": "Rocket Lab posts record Q1 with $200M revenue, +63% YoY",
              "source": "Bloomberg",
              "ago": "5d"
            },
            {
              "title": "RKLB analysts maintain Buy consensus as of May 8",
              "source": "Public.com",
              "ago": "2d"
            },
            {
              "title": "WSB 2026 Index — Rocket Lab #2 retail pick",
              "source": "Benzinga",
              "ago": "5d"
            }
          ],
          "trend_surge_pct": 72,
          "options_detail": {
            "call_volume": 95000,
            "put_volume": 32000,
            "cp_ratio": 2.97,
            "smart_money_ratio": 0.71,
            "unusual": true
          }
        },
        {
          "rank": 5,
          "ticker": "MU",
          "name": "Micron Technology",
          "sector": "Semi",
          "sector_full": "Semiconductors",
          "price": 142.85,
          "change_pct": 2.8,
          "score_total": 79.8,
          "score_reddit": 85,
          "score_news": 76,
          "score_trends": 80,
          "score_options": 78,
          "quadrant": "hot",
          "claude_rank": 5,
          "claude_summary": "HBM 병목의 AI 메모리 픽앤쇼블 — 반도체 섹터 강세의 핵심 수혜",
          "claude_signals": [
            "HBM bottleneck = 직접수혜",
            "Semi sector +52% YoY",
            "WSB 2026 Index #7"
          ],
          "narrative": "HBM 공급 병목이 풀리지 않은 상태에서 NVDA H200/Blackwell 수요는 그대로. 반도체 섹터 +52% YoY 매출 성장 가운데 메모리 진영 노출의 가장 직접적인 수혜주. WSB 인덱스 #7로 리테일 사이드도 단단함.",
          "entry": 142,
          "tp1": 148,
          "tp2": 156,
          "sl": 138,
          "entry_comment": "NVDA 동반 강세 확인되면 분할 진입, 단독 강세는 신뢰도 낮음",
          "catalysts": [
            "HBM3e/HBM4 공급 가이던스",
            "NVDA 5/20 어닝 동반 수혜",
            "데이터센터 capex 증액"
          ],
          "risks": [
            "DRAM 가격 사이클 변곡 우려",
            "중국 메모리 자립 뉴스 리스크"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 640,
              "sentiment": 0.69
            },
            {
              "sub": "hardware",
              "count": 180,
              "sentiment": 0.62
            },
            {
              "sub": "stocks",
              "count": 290,
              "sentiment": 0.58
            }
          ],
          "news_headlines": [
            {
              "title": "Memory stocks lead Nasdaq new highs",
              "source": "Reuters",
              "ago": "1d"
            },
            {
              "title": "MU bullish ahead of June earnings cycle",
              "source": "Seeking Alpha",
              "ago": "3d"
            },
            {
              "title": "WSB 2026 Index — Micron picked as #7",
              "source": "Benzinga",
              "ago": "5d"
            }
          ],
          "trend_surge_pct": 42,
          "options_detail": {
            "call_volume": 165000,
            "put_volume": 68000,
            "cp_ratio": 2.43,
            "smart_money_ratio": 0.66,
            "unusual": false
          }
        },
        {
          "rank": 6,
          "ticker": "TSLA",
          "name": "Tesla, Inc.",
          "sector": "Auto",
          "sector_full": "Automotive / EV",
          "price": 427.99,
          "change_pct": 3.9,
          "score_total": 78.4,
          "score_reddit": 88,
          "score_news": 70,
          "score_trends": 78,
          "score_options": 72,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "5/8 +3.9% 메가캡 일일 최고 상승 — 리테일 모멘텀은 단단하지만 추세는 단기 과열 구간",
          "claude_signals": null,
          "narrative": "금요일 +3.9%로 메가캡 중 최고 상승률, FSD/로보택시 내러티브가 다시 살아나는 중. WSB 인덱스 9위로 리테일 자금이 받쳐주고 있어요. 다만 단기 RSI 70+, CPI 변동성에 베타 1.8+ 부담.",
          "entry": null,
          "tp1": null,
          "tp2": null,
          "sl": null,
          "entry_comment": null,
          "catalysts": [
            "FSD v13 update 가능성",
            "로보택시 마일스톤",
            "메가캡 모멘텀 동반"
          ],
          "risks": [
            "RSI 과매수",
            "CPI 충격 시 베타 큼"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [],
          "news_headlines": [
            {
              "title": "Tesla rallies 3.9% Friday, leads mega-caps",
              "source": "CNBC",
              "ago": "1d"
            }
          ],
          "trend_surge_pct": null,
          "options_detail": {
            "call_volume": 320000,
            "put_volume": 145000,
            "cp_ratio": 2.21,
            "smart_money_ratio": 0.62,
            "unusual": false
          }
        },
        {
          "rank": 7,
          "ticker": "AMD",
          "name": "Advanced Micro Devices",
          "sector": "Semi",
          "sector_full": "Semiconductors",
          "price": 245.3,
          "change_pct": 4.5,
          "score_total": 77.6,
          "score_reddit": 82,
          "score_news": 78,
          "score_trends": 76,
          "score_options": 75,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "52주 신고가 + YTD +112.6% — 반도체 섹터 강세의 두 번째 수혜주",
          "claude_signals": null,
          "narrative": "금요일 52주 신고가 갱신, YTD +112.6%로 NVDA 다음가는 AI 칩 베팅 수혜. MI300/MI400 수요 가이던스가 추가 카탈리스트.",
          "entry": null,
          "tp1": null,
          "tp2": null,
          "sl": null,
          "entry_comment": null,
          "catalysts": [
            "MI400 양산 가이던스",
            "Hyperscaler 수주",
            "NVDA 어닝 동반 수혜"
          ],
          "risks": [
            "NVDA 어닝 후 차익실현 동조",
            "INTC 파운드리 리스크 노이즈"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [],
          "news_headlines": [
            {
              "title": "AMD hits new 52-week high, +112.6% YTD",
              "source": "Yahoo Finance",
              "ago": "1d"
            }
          ],
          "trend_surge_pct": null,
          "options_detail": {
            "call_volume": 210000,
            "put_volume": 88000,
            "cp_ratio": 2.39,
            "smart_money_ratio": 0.64,
            "unusual": false
          }
        },
        {
          "rank": 8,
          "ticker": "NBIS",
          "name": "Nebius Group N.V.",
          "sector": "AI Infra",
          "sector_full": "AI Infra / Cloud Compute",
          "price": 64.2,
          "change_pct": 1.8,
          "score_total": 75.9,
          "score_reddit": 62,
          "score_news": 80,
          "score_trends": 68,
          "score_options": 82,
          "quadrant": "hidden",
          "claude_rank": null,
          "claude_summary": "AI 컴퓨트 인프라 신흥 강자 — 리테일 노이즈는 적은데 펀더는 단단함, 히든엣지",
          "claude_signals": null,
          "narrative": "GPU 클라우드/AI 인프라에서 빠르게 입지를 키우고 있는데 NVDA·INTC 헤드라인에 가려져 멘션이 적은 상태. WSB 2026 인덱스 5위로 들어왔지만 리테일 거품은 아직 없음. 기관 자금 유입이 보이면 비대칭 업사이드.",
          "entry": null,
          "tp1": null,
          "tp2": null,
          "sl": null,
          "entry_comment": null,
          "catalysts": [
            "AI 인프라 capex 가이던스",
            "GPU 클라우드 캡 expansion"
          ],
          "risks": [
            "수익성 검증 단계",
            "메가캡 클라우드 경쟁 심화"
          ],
          "reddit_sentiment_label": "중립",
          "reddit_breakdown": [],
          "news_headlines": [
            {
              "title": "Nebius emerges as major AI compute player",
              "source": "MarketBeat",
              "ago": "3d"
            }
          ],
          "trend_surge_pct": null,
          "options_detail": {
            "call_volume": 45000,
            "put_volume": 12000,
            "cp_ratio": 3.75,
            "smart_money_ratio": 0.74,
            "unusual": true
          }
        },
        {
          "rank": 9,
          "ticker": "PLTR",
          "name": "Palantir Technologies",
          "sector": "Software",
          "sector_full": "Enterprise Software / AI",
          "price": 178.6,
          "change_pct": 1.2,
          "score_total": 74.5,
          "score_reddit": 82,
          "score_news": 72,
          "score_trends": 70,
          "score_options": 74,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "5/4 어닝 EPS 0.33 (컨센 0.27) 비트 후 홀드 구간 — 다음 카탈은 8/3까지 공백",
          "claude_signals": null,
          "narrative": "Q1 EPS $0.33로 컨센 22% 상회, 정부+상업 양쪽 다 견조. 다음 어닝은 8/3이라 단기 카탈은 약하지만 모멘텀 추세는 살아있음.",
          "entry": null,
          "tp1": null,
          "tp2": null,
          "sl": null,
          "entry_comment": null,
          "catalysts": [
            "AIP 신규 계약 발표",
            "정부 컨트랙트 갱신"
          ],
          "risks": [
            "다음 카탈까지 공백",
            "밸류에이션 부담 (PER 200+)"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [],
          "news_headlines": [
            {
              "title": "Palantir Q1: EPS $0.33 beats $0.27",
              "source": "CNBC",
              "ago": "6d"
            }
          ],
          "trend_surge_pct": null,
          "options_detail": {
            "call_volume": 195000,
            "put_volume": 92000,
            "cp_ratio": 2.12,
            "smart_money_ratio": 0.59,
            "unusual": false
          }
        },
        {
          "rank": 10,
          "ticker": "ASTS",
          "name": "AST SpaceMobile",
          "sector": "Aero",
          "sector_full": "Space / Satellite",
          "price": 42.85,
          "change_pct": -1.2,
          "score_total": 73.2,
          "score_reddit": 94,
          "score_news": 62,
          "score_trends": 88,
          "score_options": 64,
          "quadrant": "overheat",
          "claude_rank": null,
          "claude_summary": "WSB 2026 인덱스 #1, 우주 테마 베팅의 최고 베타 — CPI 변동성 구간엔 비중 축소",
          "claude_signals": null,
          "narrative": "리테일 멘션은 압도적 1위지만 펀더 검증 부족, 베타 3+. 위성 발사 일정에 100% 의존하는 내러티브 종목.",
          "entry": null,
          "tp1": null,
          "tp2": null,
          "sl": null,
          "entry_comment": null,
          "catalysts": [
            "위성 발사 일정",
            "캐리어 파트너십 발표"
          ],
          "risks": [
            "베타 3+ 극단 변동성",
            "캐시번 우려",
            "내러티브 의존도 100%"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [],
          "news_headlines": [
            {
              "title": "WSB 2026 Index — ASTS #1 pick",
              "source": "Benzinga",
              "ago": "5d"
            }
          ],
          "trend_surge_pct": null,
          "options_detail": {
            "call_volume": 78000,
            "put_volume": 41000,
            "cp_ratio": 1.9,
            "smart_money_ratio": 0.48,
            "unusual": false
          }
        },
        {
          "rank": 11,
          "ticker": "AMAT",
          "name": "Applied Materials",
          "sector": "Semi",
          "sector_full": "Semi Cap Equipment",
          "price": 198.4,
          "change_pct": 1.6,
          "score_total": 71.8,
          "score_reddit": 58,
          "score_news": 75,
          "score_trends": 64,
          "score_options": 82,
          "quadrant": "hidden",
          "claude_rank": null,
          "claude_summary": null,
          "claude_signals": null
        },
        {
          "rank": 12,
          "ticker": "AAPL",
          "name": "Apple Inc.",
          "sector": "Tech",
          "sector_full": "Mega-cap Tech",
          "price": 293.41,
          "change_pct": 2.1,
          "score_total": 70.9,
          "score_reddit": 70,
          "score_news": 78,
          "score_trends": 66,
          "score_options": 70,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": null,
          "claude_signals": null
        },
        {
          "rank": 13,
          "ticker": "GOOGL",
          "name": "Alphabet Inc.",
          "sector": "Tech",
          "sector_full": "Mega-cap Tech",
          "price": 198.2,
          "change_pct": 0.9,
          "score_total": 69.4,
          "score_reddit": 72,
          "score_news": 68,
          "score_trends": 64,
          "score_options": 72,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": null,
          "claude_signals": null
        },
        {
          "rank": 14,
          "ticker": "AMZN",
          "name": "Amazon.com, Inc.",
          "sector": "Tech",
          "sector_full": "Mega-cap Tech / Cloud",
          "price": 244.1,
          "change_pct": 1.4,
          "score_total": 68.7,
          "score_reddit": 70,
          "score_news": 70,
          "score_trends": 62,
          "score_options": 72,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": null,
          "claude_signals": null
        },
        {
          "rank": 15,
          "ticker": "IREN",
          "name": "IREN Limited",
          "sector": "AI Infra",
          "sector_full": "AI Infra / Crypto-mining",
          "price": 18.6,
          "change_pct": 3.1,
          "score_total": 67.5,
          "score_reddit": 78,
          "score_news": 60,
          "score_trends": 72,
          "score_options": 60,
          "quadrant": "overheat",
          "claude_rank": null,
          "claude_summary": null,
          "claude_signals": null
        },
        {
          "rank": 16,
          "ticker": "RDDT",
          "name": "Reddit, Inc.",
          "sector": "Internet",
          "sector_full": "Platform / Social",
          "price": 215.4,
          "change_pct": 0.6,
          "score_total": 66.2,
          "score_reddit": 76,
          "score_news": 62,
          "score_trends": 70,
          "score_options": 56,
          "quadrant": "overheat",
          "claude_rank": null,
          "claude_summary": null,
          "claude_signals": null
        },
        {
          "rank": 17,
          "ticker": "CSCO",
          "name": "Cisco Systems",
          "sector": "Tech",
          "sector_full": "Networking",
          "price": 78.2,
          "change_pct": 0.4,
          "score_total": 64.8,
          "score_reddit": 42,
          "score_news": 72,
          "score_trends": 50,
          "score_options": 78,
          "quadrant": "hidden",
          "claude_rank": null,
          "claude_summary": null,
          "claude_signals": null
        },
        {
          "rank": 18,
          "ticker": "BABA",
          "name": "Alibaba Group",
          "sector": "China",
          "sector_full": "China ADR",
          "price": 142.3,
          "change_pct": -0.6,
          "score_total": 63.9,
          "score_reddit": 56,
          "score_news": 68,
          "score_trends": 58,
          "score_options": 70,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": null,
          "claude_signals": null
        },
        {
          "rank": 19,
          "ticker": "JD",
          "name": "JD.com",
          "sector": "China",
          "sector_full": "China ADR",
          "price": 42.1,
          "change_pct": -1.1,
          "score_total": 62.4,
          "score_reddit": 50,
          "score_news": 64,
          "score_trends": 54,
          "score_options": 68,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": null,
          "claude_signals": null
        },
        {
          "rank": 20,
          "ticker": "CEG",
          "name": "Constellation Energy",
          "sector": "Utility",
          "sector_full": "Utility / AI Power",
          "price": 358.2,
          "change_pct": 1.5,
          "score_total": 61.7,
          "score_reddit": 38,
          "score_news": 72,
          "score_trends": 46,
          "score_options": 78,
          "quadrant": "hidden",
          "claude_rank": null,
          "claude_summary": null,
          "claude_signals": null
        }
      ]
    },
    "2026-05-02": {
      "date": "2026-05-02",
      "date_display": "2026-05-02 (토·주말 · 월요일 개장 준비)",
      "market_mood": "bullish",
      "market_mood_score": 68,
      "market_summary": "금요일 S&P·나스닥 동반 사상 최고치 마감했어요. AI 캐펙스 테마가 멈추지 않고($700B 전망), 애플 어닝 비트로 빅테크 모멘텀 살아있어요. 다음주 PLTR(월), AMD(화), COIN(목) 어닝이 핵심이에요.",
      "sector_tilt": [
        "Semiconductors",
        "Mega-cap Tech",
        "Space/Satellite"
      ],
      "top_ticker": "PLTR",
      "candidate_count": 20,
      "today_action": {
        "one_liner": "주말이라 미국장 휴장이에요. PLTR 월요일 장마감 후 어닝 대비 포지션 점검이 핵심.",
        "priorities": [
          {
            "icon": "🎯",
            "ticker": "PLTR",
            "text": "월(5/4) AMC 어닝 — 옵션 IV 폭등 중. 콜 매수보다 캘린더/스트래들로 IV 크러시 헷지. 진입은 월요일 장중 110~115 박스 하단에서만, 손절 109."
          },
          {
            "icon": "💎",
            "ticker": "RKLB",
            "text": "FCC 위성 스펙트럼 룰 수혜 + 우주 테마 모멘텀. 월요일 갭업 시 추격 X, 80~82 눌림목 분할매수, 1차 TP 88, 손절 78."
          },
          {
            "icon": "🚨",
            "ticker": "NVDA",
            "text": "금요일 -4.6% 급락(209→199)으로 단기 다이버전스. 195 깨면 추가 하락. 월 개장 강한 반등 없으면 신규 진입 금지, 195 손절 라인 사수."
          }
        ]
      },
      "routine_timeline": [
        {
          "time_kst": "주말",
          "time_et": "휴장",
          "label": "📰 주말 헤드라인 점검 — Powell 후임(Warsh) 인준 진행, 5/15 임기 만료",
          "active": true
        },
        {
          "time_kst": "일 22:00",
          "time_et": "—",
          "label": "🔍 선물(ES/NQ) 일요일 야간 개장 체크",
          "active": false
        },
        {
          "time_kst": "월 21:30",
          "time_et": "08:30",
          "label": "📊 프리마켓 갭/뉴스 1차 점검",
          "active": false
        },
        {
          "time_kst": "월 22:30",
          "time_et": "09:30",
          "label": "🔔 미국장 개장 (월요일)",
          "key": true,
          "active": false
        },
        {
          "time_kst": "월 22:35",
          "time_et": "09:35",
          "label": "🎯 PLTR/RKLB 1차 분할 진입 윈도우 (5분 캔들 확정 후)",
          "active": false
        },
        {
          "time_kst": "월 23:30",
          "time_et": "10:30",
          "label": "📈 1시간봉 마감 — 시초 변동성 정리",
          "active": false
        },
        {
          "time_kst": "화 02:00",
          "time_et": "13:00",
          "label": "🍔 점심 휴식 — 박스권 흐름",
          "active": false
        },
        {
          "time_kst": "화 04:00",
          "time_et": "15:00",
          "label": "⚡ 마감 1시간 전 자금 흐름",
          "active": false
        },
        {
          "time_kst": "화 05:00",
          "time_et": "16:00",
          "label": "🔔 정규장 마감",
          "active": false
        },
        {
          "time_kst": "화 05:00+",
          "time_et": "16:00+",
          "label": "💥 PLTR 어닝 발표 (AMC) — 가이던스 주목",
          "key": true,
          "active": false
        }
      ],
      "sectors": [
        {
          "name": "Semiconductors",
          "strength": 0.82,
          "ticker_count": 5
        },
        {
          "name": "Mega-cap Tech",
          "strength": 0.78,
          "ticker_count": 4
        },
        {
          "name": "Space/Satellite",
          "strength": 0.74,
          "ticker_count": 3
        },
        {
          "name": "AI Infrastructure",
          "strength": 0.71,
          "ticker_count": 3
        },
        {
          "name": "Crypto/Fintech",
          "strength": 0.62,
          "ticker_count": 2
        },
        {
          "name": "Energy",
          "strength": 0.58,
          "ticker_count": 2
        },
        {
          "name": "Biotech",
          "strength": 0.42,
          "ticker_count": 1
        }
      ],
      "claude_ranking": [
        {
          "rank": 1,
          "ticker": "PLTR",
          "reasoning": "월요일 AMC 어닝 — 정부·상업 모두 가속, IV 프리미엄 매도 전략 가능",
          "signals": [
            "Earnings 5/4 AMC",
            "옵션 IV 70%+",
            "AI 정부계약 확장"
          ]
        },
        {
          "rank": 2,
          "ticker": "RKLB",
          "reasoning": "FCC 스펙트럼 룰 수혜 + 7% 갭업, 우주 섹터 리딩",
          "signals": [
            "FCC 호재",
            "위성 발사 큐 누적",
            "ASTS 동반 강세"
          ]
        },
        {
          "rank": 3,
          "ticker": "AMD",
          "reasoning": "화요일 어닝, MI400 가이던스가 NVDA 대안 서사 굳힐지 시험대",
          "signals": [
            "Earnings 5/5 AMC",
            "데이터센터 매출 가속",
            "콜 스큐 우상향"
          ]
        },
        {
          "rank": 4,
          "ticker": "AAPL",
          "reasoning": "FY2Q 어닝 비트로 +3%, 가이던스도 컨센 상회 — 빅테크 앵커",
          "signals": [
            "EPS/매출 비트",
            "FY3Q 가이던스 상회",
            "서비스 마진 확장"
          ]
        },
        {
          "rank": 5,
          "ticker": "COIN",
          "reasoning": "목요일 어닝 + BTC 강세 사이클 동조, 스테이블코인 매출 모멘텀",
          "signals": [
            "Earnings 5/7 AMC",
            "BTC 상승 추세",
            "USDC 수익 증가"
          ]
        }
      ],
      "hidden_edges": [
        {
          "ticker": "NBIS",
          "reason": "AI 인프라 다크호스 — $125대(+6.5%), 데이터센터 capex 수혜인데 리테일 인지도 낮아 진입 여유 있어요. 200달러 장기 PT 보는 사이드도 있음."
        },
        {
          "ticker": "MU",
          "reason": "HBM 사이클 후반전 + 게이밍/PC DRAM 동반 회복. WSB Top 10인데 가격은 아직 박스권 — 브레이크아웃 시 빠른 추세 가능성."
        }
      ],
      "overheated": [
        {
          "ticker": "NVDA",
          "reason": "금요일 -4.6% 급락은 모멘텀 깨진 신호 — RSI 다이버전스 + 옵션 콜 OI 과밀. 195 지지 깨면 180까지 열려있음."
        },
        {
          "ticker": "GME",
          "reason": "다시 WSB 핫스팟 — 펀더 변화 없는 단순 스퀴즈 시도. 따라가기보다 관망."
        }
      ],
      "tickers": [
        {
          "rank": 1,
          "ticker": "PLTR",
          "name": "Palantir Technologies",
          "sector": "AI/Defense",
          "sector_full": "AI Infrastructure",
          "price": 112.4,
          "change_pct": 1.8,
          "score_total": 92.4,
          "score_reddit": 95,
          "score_news": 92,
          "score_trends": 88,
          "score_options": 94,
          "quadrant": "hot",
          "claude_rank": 1,
          "claude_summary": "월(5/4) AMC 어닝 — IV 크러시 베팅 vs. 가이던스 비트 양방 모두 준비할 것",
          "claude_signals": [
            "Earnings 5/4 AMC",
            "정부계약 확장",
            "IV 70%+"
          ],
          "narrative": "PLTR은 월요일 장마감 후 1Q26 어닝 발표예요. 리테일은 정부·상업 양쪽 가속을 전제로 'beat & raise' 베팅 중인데, 옵션 IV가 이미 70%를 넘어가서 콜 단순매수는 IV 크러시 위험이 커요. 캘린더 스프레드나 스트래들 매도(가이던스 보수적이면 수익) 등 변동성 매도 구조가 더 합리적이에요.",
          "entry": 110,
          "tp1": 118,
          "tp2": 125,
          "sl": 108,
          "entry_comment": "어닝 전 진입은 분할 + 사이즈 축소. 109 깨면 즉시 컷",
          "catalysts": [
            "1Q26 어닝 5/4 AMC",
            "정부 신규 계약 발표 가능성",
            "AI 플랫폼 ARR 가속",
            "Foundry 신규 고객"
          ],
          "risks": [
            "IV 크러시 (어닝 후 -20% 옵션가 흔함)",
            "가이던스 보수 시 갭다운",
            "밸류에이션 부담 (FY26 PSR 35x+)"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 1820,
              "sentiment": 0.78
            },
            {
              "sub": "stocks",
              "count": 640,
              "sentiment": 0.62
            },
            {
              "sub": "options",
              "count": 410,
              "sentiment": 0.71
            }
          ],
          "news_headlines": [
            {
              "title": "Palantir Q1 2026 earnings preview: AI demand still surging",
              "source": "MarketChameleon",
              "ago": "1d"
            },
            {
              "title": "PLTR options IV pricing in plus-minus 12 percent post-earnings move",
              "source": "Barchart",
              "ago": "1d"
            },
            {
              "title": "Defense AI contracts pipeline visible into 2H26",
              "source": "Reuters",
              "ago": "2d"
            }
          ],
          "trend_surge_pct": 88,
          "options_detail": {
            "call_volume": 380000,
            "put_volume": 95000,
            "cp_ratio": 4,
            "smart_money_ratio": 0.74,
            "unusual": true
          }
        },
        {
          "rank": 2,
          "ticker": "RKLB",
          "name": "Rocket Lab Corporation",
          "sector": "Space",
          "sector_full": "Space/Satellite",
          "price": 82.1,
          "change_pct": 7.2,
          "score_total": 88.7,
          "score_reddit": 91,
          "score_news": 86,
          "score_trends": 92,
          "score_options": 86,
          "quadrant": "hot",
          "claude_rank": 2,
          "claude_summary": "FCC 스펙트럼 룰 수혜 갭업 — 추격 대신 80~82 눌림 분할",
          "claude_signals": [
            "FCC 위성 룰 호재",
            "위성 발사 큐 누적",
            "ASTS 동반 강세"
          ],
          "narrative": "FCC가 위성 광대역 스펙트럼 공유 규칙을 완화하면서 RKLB·ASTS·LUNR 동반 랠리. RKLB는 발사 백로그 + 뉴트론 로켓 진척이 모멘텀의 진짜 펀더 베이스인데, 단기로 7% 갭업이라 추격은 위험. 80달러 부근 눌림에서 분할 매수가 정석.",
          "entry": 80,
          "tp1": 88,
          "tp2": 95,
          "sl": 78,
          "entry_comment": "갭업 시초 진입 금지. 5분봉 첫 이탈 후 되돌림 확인하고 진입",
          "catalysts": [
            "FCC 스펙트럼 룰 완화",
            "Neutron 로켓 진척 업데이트",
            "신규 정부 계약"
          ],
          "risks": [
            "갭업 후 첫날 되돌림 패턴",
            "위성 섹터 차익실현",
            "테마 회전 시 후순위로 밀릴 가능성"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 1240,
              "sentiment": 0.81
            },
            {
              "sub": "SpaceXLounge",
              "count": 380,
              "sentiment": 0.74
            },
            {
              "sub": "RocketLab",
              "count": 290,
              "sentiment": 0.88
            }
          ],
          "news_headlines": [
            {
              "title": "ASTS, RKLB rally on FCC satellite spectrum rule",
              "source": "Stocktwits",
              "ago": "1d"
            },
            {
              "title": "Rocket Lab launch cadence accelerating into Q2",
              "source": "SpaceNews",
              "ago": "3d"
            },
            {
              "title": "Neutron rocket development on schedule for 2026 debut",
              "source": "Ars Technica",
              "ago": "5d"
            }
          ],
          "trend_surge_pct": 134,
          "options_detail": {
            "call_volume": 142000,
            "put_volume": 28000,
            "cp_ratio": 5.07,
            "smart_money_ratio": 0.71,
            "unusual": true
          }
        },
        {
          "rank": 3,
          "ticker": "AMD",
          "name": "Advanced Micro Devices",
          "sector": "Semi",
          "sector_full": "Semiconductors",
          "price": 168.2,
          "change_pct": 0.6,
          "score_total": 86.2,
          "score_reddit": 78,
          "score_news": 88,
          "score_trends": 82,
          "score_options": 92,
          "quadrant": "hot",
          "claude_rank": 3,
          "claude_summary": "화(5/5) AMC 어닝 — MI400 가이던스가 NVDA 대안 서사 시험대",
          "claude_signals": [
            "Earnings 5/5 AMC",
            "DC 매출 가속",
            "콜 스큐 우상향"
          ],
          "narrative": "AMD는 화요일 장마감 후 어닝. NVDA 대비 저평가 + MI400 출시 사이클이 핵심. 데이터센터 매출 YoY 가속이 컨센서스 100억 달러대 라인을 상회하면 175 돌파 시도. 다만 NVDA 약세가 동반 영향이라 페어 트레이드(롱 AMD / 헷지 NVDA 풋) 구조가 안전.",
          "entry": 165,
          "tp1": 175,
          "tp2": 185,
          "sl": 162,
          "entry_comment": "어닝 전 사이즈 절반, 어닝 후 갭에 따라 2차 진입 결정",
          "catalysts": [
            "1Q26 어닝 5/5 AMC",
            "MI400 출하 가이던스",
            "MS/META 신규 계약 가능성"
          ],
          "risks": [
            "NVDA 약세 동반",
            "PC/게이밍 매출 약화",
            "마진 가이던스 보수 시 -8% 갭다운 사례"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 720,
              "sentiment": 0.62
            },
            {
              "sub": "AMD_Stock",
              "count": 410,
              "sentiment": 0.74
            },
            {
              "sub": "stocks",
              "count": 380,
              "sentiment": 0.55
            }
          ],
          "news_headlines": [
            {
              "title": "AMD earnings preview: data center growth in focus",
              "source": "Bloomberg",
              "ago": "1d"
            },
            {
              "title": "MI400 expected to ramp in 2H26",
              "source": "SemiAnalysis",
              "ago": "2d"
            },
            {
              "title": "Microsoft confirms expanded AMD GPU deployment",
              "source": "The Information",
              "ago": "4d"
            }
          ],
          "trend_surge_pct": 56,
          "options_detail": {
            "call_volume": 220000,
            "put_volume": 78000,
            "cp_ratio": 2.82,
            "smart_money_ratio": 0.69,
            "unusual": true
          }
        },
        {
          "rank": 4,
          "ticker": "AAPL",
          "name": "Apple Inc.",
          "sector": "Mega-cap Tech",
          "sector_full": "Mega-cap Tech",
          "price": 234.85,
          "change_pct": 3.1,
          "score_total": 84.3,
          "score_reddit": 72,
          "score_news": 95,
          "score_trends": 78,
          "score_options": 82,
          "quadrant": "hot",
          "claude_rank": 4,
          "claude_summary": "FY2Q 어닝 비트 + 가이던스 상회 — 빅테크 앵커 역할",
          "claude_signals": [
            "EPS/매출 비트",
            "FY3Q 가이던스 상회",
            "서비스 마진 확장"
          ],
          "narrative": "금요일 +3% 어닝 갭업으로 마감. 아이폰 17 사이클이 컨센보다 견조하고 서비스 매출 마진이 70%대로 안정. FY3Q 매출 가이던스도 컨센 상회. 230 지지 위에서는 240대 시도 가능, 다만 갭업 직후 첫주는 익일 차익실현 조심.",
          "entry": 230,
          "tp1": 240,
          "tp2": 248,
          "sl": 226,
          "entry_comment": "갭업 다음날 매수는 종가 인근 또는 5일선 터치에서만",
          "catalysts": [
            "FY2Q 어닝 비트",
            "AI 서비스 매출 라인 신규 공개 임박",
            "WWDC 2026 6월 일정 임박"
          ],
          "risks": [
            "갭업 후 차익실현",
            "中 매출 비중 우려 재부각 시 약세",
            "안티트러스트 헤드라인"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 580,
              "sentiment": 0.66
            },
            {
              "sub": "stocks",
              "count": 720,
              "sentiment": 0.62
            },
            {
              "sub": "AAPL",
              "count": 240,
              "sentiment": 0.79
            }
          ],
          "news_headlines": [
            {
              "title": "Apple beats on Q2 earnings, lifts revenue guidance",
              "source": "CNBC",
              "ago": "1d"
            },
            {
              "title": "Services margin expands to record 73 percent",
              "source": "Bloomberg",
              "ago": "1d"
            },
            {
              "title": "iPhone 17 demand outpacing prior cycles in key markets",
              "source": "Reuters",
              "ago": "1d"
            }
          ],
          "trend_surge_pct": 42,
          "options_detail": {
            "call_volume": 260000,
            "put_volume": 105000,
            "cp_ratio": 2.48,
            "smart_money_ratio": 0.66,
            "unusual": false
          }
        },
        {
          "rank": 5,
          "ticker": "COIN",
          "name": "Coinbase Global",
          "sector": "Crypto/Fintech",
          "sector_full": "Crypto/Fintech",
          "price": 268.4,
          "change_pct": 2.4,
          "score_total": 82.1,
          "score_reddit": 84,
          "score_news": 79,
          "score_trends": 86,
          "score_options": 80,
          "quadrant": "hot",
          "claude_rank": 5,
          "claude_summary": "목(5/7) 어닝 + BTC 강세 동조, 스테이블코인 수익 모멘텀",
          "claude_signals": [
            "Earnings 5/7 AMC",
            "BTC 상승 추세",
            "USDC 수익 증가"
          ],
          "narrative": "COIN은 목요일 어닝. 거래수수료 외에 USDC 이자 수익과 스테이킹·커스터디 매출이 지속 가속. BTC 가격이 강세 사이클이라 거래량도 우호적. IV 65% 수준이라 PLTR보단 합리적이지만 어닝 후 plus-minus 10% 변동성은 가정해야 해요.",
          "entry": 265,
          "tp1": 285,
          "tp2": 305,
          "sl": 258,
          "entry_comment": "어닝 전 풀 포지션 X. 50% 사이즈로 가져가고 결과 확인 후 결정",
          "catalysts": [
            "1Q26 어닝 5/7 AMC",
            "BTC 강세 사이클",
            "USDC 점유율 확대"
          ],
          "risks": [
            "BTC 단기 조정 시 동반 약세",
            "수수료 단가 압박",
            "규제 헤드라인 (SEC 신정부 기조)"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 890,
              "sentiment": 0.74
            },
            {
              "sub": "CryptoCurrency",
              "count": 1240,
              "sentiment": 0.68
            },
            {
              "sub": "Bitcoin",
              "count": 620,
              "sentiment": 0.71
            }
          ],
          "news_headlines": [
            {
              "title": "Coinbase Q1 earnings preview: stablecoin revenue in focus",
              "source": "Bloomberg",
              "ago": "1d"
            },
            {
              "title": "USDC market cap hits new high",
              "source": "CoinDesk",
              "ago": "2d"
            },
            {
              "title": "BTC ETF inflows continue 5-week streak",
              "source": "ETF.com",
              "ago": "3d"
            }
          ],
          "trend_surge_pct": 78,
          "options_detail": {
            "call_volume": 165000,
            "put_volume": 62000,
            "cp_ratio": 2.66,
            "smart_money_ratio": 0.65,
            "unusual": true
          }
        },
        {
          "rank": 6,
          "ticker": "NVDA",
          "name": "NVIDIA Corporation",
          "sector": "Semi",
          "sector_full": "Semiconductors",
          "price": 199.57,
          "change_pct": -4.6,
          "score_total": 78.5,
          "score_reddit": 88,
          "score_news": 72,
          "score_trends": 78,
          "score_options": 76,
          "quadrant": "overheat",
          "claude_rank": null,
          "claude_summary": "단기 다이버전스 — 195 깨면 추가 하락, 강한 반등 없으면 신규 진입 X",
          "claude_signals": [
            "금요일 -4.6%",
            "RSI 다이버전스",
            "옵션 콜 OI 과밀"
          ],
          "narrative": "AI 캐펙스 테마 자체는 살아있지만 NVDA만 단독으로 모멘텀이 깨졌어요. 209→199 단번에 깨진 게 큰 신호. 195 지지 사수가 핵심, 깨면 180까지 열려있음.",
          "catalysts": [
            "GTC 후속 발표",
            "데이터센터 신규 디자인 윈"
          ],
          "risks": [
            "AMD 어닝 강세 시 점유율 우려",
            "테마 회전",
            "옵션 매도 압력"
          ]
        },
        {
          "rank": 7,
          "ticker": "AMZN",
          "name": "Amazon.com Inc.",
          "sector": "Mega-cap Tech",
          "sector_full": "Mega-cap Tech",
          "price": 218.4,
          "change_pct": 1.2,
          "score_total": 77.8,
          "score_reddit": 86,
          "score_news": 76,
          "score_trends": 70,
          "score_options": 78,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "WSB 2026 픽 1위 — AWS 가속 + 광고 매출 마진 기여",
          "claude_signals": [
            "AWS 가속",
            "광고 매출 마진",
            "Prime Day 임박"
          ],
          "narrative": "WSB가 2026년 톱픽으로 꼽은 종목. AWS 매출 19% YoY 가속, 광고 매출이 영업이익에 기여하는 구조가 자리잡혀 가요. 220 박스 돌파 시 230 시도.",
          "catalysts": [
            "AWS re:Invent 사전 헤드라인",
            "광고 매출 분기 기록"
          ],
          "risks": [
            "빅테크 차익실현 회전",
            "Prime Day 가이던스 미스 시 단기 조정"
          ]
        },
        {
          "rank": 8,
          "ticker": "ASTS",
          "name": "AST SpaceMobile",
          "sector": "Space",
          "sector_full": "Space/Satellite",
          "price": 38.2,
          "change_pct": 6,
          "score_total": 76.4,
          "score_reddit": 82,
          "score_news": 78,
          "score_trends": 88,
          "score_options": 62,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "FCC 룰 수혜 동반 — 위성 직접연결 상용화 가시권",
          "claude_signals": [
            "FCC 호재",
            "Verizon/AT&T 파트너십",
            "BlueBird 위성 발사"
          ],
          "narrative": "RKLB와 함께 FCC 스펙트럼 룰 수혜. 5G 위성 직접연결 상용화가 눈앞이라 1H26 후반 매출 인식 시작. IV가 높아서 옵션보단 현물.",
          "catalysts": [
            "BlueBird 추가 발사",
            "통신사 상용 서비스 개시",
            "FCC 후속 룰"
          ],
          "risks": [
            "희석 (CB 발행 가능성)",
            "위성 발사 지연"
          ]
        },
        {
          "rank": 9,
          "ticker": "TSLA",
          "name": "Tesla Inc.",
          "sector": "EV/Auto",
          "sector_full": "Mega-cap Tech",
          "price": 386.2,
          "change_pct": -1.4,
          "score_total": 75.1,
          "score_reddit": 88,
          "score_news": 64,
          "score_trends": 72,
          "score_options": 76,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "리테일 항상 톱 — 로보택시 진척이 다음 트리거",
          "claude_signals": [
            "로보택시 확장",
            "에너지 매출 가속",
            "FSD 구독률"
          ],
          "narrative": "리테일 인기는 변함없지만 모멘텀은 휴식 구간. 로보택시 신도시 진출 + 에너지(메가팩) 매출이 다음 트리거. 380 지지 사수 중요.",
          "catalysts": [
            "로보택시 신도시 발표",
            "Megapack 신규 수주"
          ],
          "risks": [
            "EV 수요 둔화 우려",
            "머스크 헤드라인 변동성"
          ]
        },
        {
          "rank": 10,
          "ticker": "NBIS",
          "name": "Nebius Group N.V.",
          "sector": "AI Infra",
          "sector_full": "AI Infrastructure",
          "price": 125,
          "change_pct": 6.5,
          "score_total": 73.6,
          "score_reddit": 70,
          "score_news": 82,
          "score_trends": 86,
          "score_options": 56,
          "quadrant": "hidden",
          "claude_rank": null,
          "claude_summary": "히든엣지 — AI 인프라 다크호스, 리테일 인지도 낮아 진입 여유",
          "claude_signals": [
            "데이터센터 capex 수혜",
            "+6.5% 강세",
            "기관 매수 누적"
          ],
          "narrative": "유럽발 AI 인프라 플레이. AWS·Azure·GCP 외 4번째 클라우드로 자리매김 중. 리테일 인지도 낮아서 추적이 적은데 펀더가 가장 빠르게 개선 중인 종목 중 하나.",
          "catalysts": [
            "대형 고객 신규 계약",
            "GPU 인벤토리 확대 발표"
          ],
          "risks": [
            "유로존 매크로",
            "환율 변동",
            "신주 발행 가능성"
          ]
        },
        {
          "rank": 11,
          "ticker": "MU",
          "name": "Micron Technology",
          "sector": "Semi",
          "sector_full": "Semiconductors",
          "price": 142.3,
          "change_pct": 1.2,
          "score_total": 71.2,
          "score_reddit": 76,
          "score_news": 70,
          "score_trends": 68,
          "score_options": 70,
          "quadrant": "hidden",
          "claude_rank": null
        },
        {
          "rank": 12,
          "ticker": "GOOGL",
          "name": "Alphabet Inc.",
          "sector": "Mega-cap Tech",
          "sector_full": "Mega-cap Tech",
          "price": 198.4,
          "change_pct": 0.6,
          "score_total": 70.8,
          "score_reddit": 68,
          "score_news": 76,
          "score_trends": 64,
          "score_options": 75,
          "quadrant": "hot",
          "claude_rank": null
        },
        {
          "rank": 13,
          "ticker": "META",
          "name": "Meta Platforms",
          "sector": "Mega-cap Tech",
          "sector_full": "Mega-cap Tech",
          "price": 712.5,
          "change_pct": -0.8,
          "score_total": 69.4,
          "score_reddit": 62,
          "score_news": 74,
          "score_trends": 60,
          "score_options": 81,
          "quadrant": "watch",
          "claude_rank": null
        },
        {
          "rank": 14,
          "ticker": "MSFT",
          "name": "Microsoft Corp.",
          "sector": "Mega-cap Tech",
          "sector_full": "Mega-cap Tech",
          "price": 528.2,
          "change_pct": 0.4,
          "score_total": 68.7,
          "score_reddit": 58,
          "score_news": 78,
          "score_trends": 56,
          "score_options": 82,
          "quadrant": "hot",
          "claude_rank": null
        },
        {
          "rank": 15,
          "ticker": "RDDT",
          "name": "Reddit Inc.",
          "sector": "Internet",
          "sector_full": "Mega-cap Tech",
          "price": 168.2,
          "change_pct": 2.1,
          "score_total": 67.5,
          "score_reddit": 88,
          "score_news": 64,
          "score_trends": 74,
          "score_options": 44,
          "quadrant": "hidden",
          "claude_rank": null
        },
        {
          "rank": 16,
          "ticker": "SOFI",
          "name": "SoFi Technologies",
          "sector": "Fintech",
          "sector_full": "Crypto/Fintech",
          "price": 22.4,
          "change_pct": 1.8,
          "score_total": 66.2,
          "score_reddit": 78,
          "score_news": 60,
          "score_trends": 70,
          "score_options": 56,
          "quadrant": "hidden",
          "claude_rank": null
        },
        {
          "rank": 17,
          "ticker": "MRVL",
          "name": "Marvell Technology",
          "sector": "Semi",
          "sector_full": "Semiconductors",
          "price": 92.6,
          "change_pct": 1.4,
          "score_total": 65.8,
          "score_reddit": 60,
          "score_news": 72,
          "score_trends": 58,
          "score_options": 73,
          "quadrant": "hidden",
          "claude_rank": null
        },
        {
          "rank": 18,
          "ticker": "IREN",
          "name": "IREN Limited",
          "sector": "Crypto Mining",
          "sector_full": "Crypto/Fintech",
          "price": 16.8,
          "change_pct": 4.2,
          "score_total": 64.1,
          "score_reddit": 74,
          "score_news": 56,
          "score_trends": 78,
          "score_options": 48,
          "quadrant": "hidden",
          "claude_rank": null
        },
        {
          "rank": 19,
          "ticker": "GME",
          "name": "GameStop Corp.",
          "sector": "Retail",
          "sector_full": "Retail",
          "price": 28.4,
          "change_pct": 5.2,
          "score_total": 63.5,
          "score_reddit": 92,
          "score_news": 42,
          "score_trends": 86,
          "score_options": 34,
          "quadrant": "overheat",
          "claude_rank": null
        },
        {
          "rank": 20,
          "ticker": "LUNR",
          "name": "Intuitive Machines",
          "sector": "Space",
          "sector_full": "Space/Satellite",
          "price": 18.9,
          "change_pct": 2,
          "score_total": 62.8,
          "score_reddit": 64,
          "score_news": 60,
          "score_trends": 76,
          "score_options": 50,
          "quadrant": "hidden",
          "claude_rank": null
        }
      ]
    },
    "2026-04-30": {
      "date": "2026-04-30",
      "date_display": "2026-04-30 (목·미국장)",
      "market_mood": "neutral",
      "market_mood_score": 58,
      "market_summary": "어제(4/29) MSFT·GOOGL·AMZN·META가 AH로 실적 쏟았고 Fed는 3.50–3.75% 동결, 오늘 21:30 KST에 Q1 GDP(컨센 +1.8%) + Core PCE(YoY 3.1% 예상)가 동시에 나와요. AAPL은 새벽 5:30 KST에 실적 — 즉, '데이터 → 시초 반응 → AAPL 종가 베팅'의 3단 콤보 데이라 신중한 분할매매가 답이에요. AI 버블 경고 + OpenAI 성장 둔화 그림자가 살아있어 추격은 위험해요.",
      "sector_tilt": [
        "Mega-Cap Tech",
        "Semiconductors",
        "Cloud / AI Infrastructure"
      ],
      "top_ticker": "AMZN",
      "candidate_count": 20,
      "today_action": {
        "one_liner": "GDP·PCE → 시초 30분 → AAPL 콜이 오늘 3대 결정 포인트. 추격 금지, 데이터 후 재진입이 정답이에요.",
        "priorities": [
          {
            "icon": "🎯",
            "ticker": "AMZN",
            "text": "AWS $37.6B 어닝 비트 호재 반영 → 21:30 PCE 결과 따라 22:35 시초가에 1차 분할진입. 진입 $208 근처, TP1 $218 / TP2 $228, 손절 $204. AAPL 실적 직전 03:30 KST에는 절반 익절 권장이에요."
          },
          {
            "icon": "💎",
            "ticker": "NXPI",
            "text": "어제 +25% 갭업 후 추격 금지지만, 오늘 첫 눌림($235 지지) 확인 시 분할진입 검토. TP1 $252 / TP2 $268, 손절 $228. Auto·Industrial 사이클 회복 베타가 가장 깨끗해요."
          },
          {
            "icon": "🚨",
            "ticker": "ORCL",
            "text": "OpenAI 내부 성장 미달 보도로 4월 누적 -8% 압박 지속. 절대 신규 진입 금지, 보유자도 50% 익절 + 트레일링 스톱이 안전해요. 5/9 OCI 가이던스 전까지 관망."
          }
        ]
      },
      "routine_timeline": [
        {
          "time_kst": "21:30",
          "time_et": "08:30",
          "label": "📊 Q1 GDP 잠정치(+1.8% 컨센) + Core PCE(MoM +0.28%, YoY 3.1%) 동시 발표",
          "key": true,
          "active": true
        },
        {
          "time_kst": "21:45",
          "time_et": "08:45",
          "label": "🔍 프리마켓 갭 체크 — AMZN/GOOGL/MSFT/META AH 반응 + AAPL IV 점검"
        },
        {
          "time_kst": "22:00",
          "time_et": "09:00",
          "label": "📈 NXPI·SIMO 상승 추격 vs 눌림 대기 결정"
        },
        {
          "time_kst": "22:30",
          "time_et": "09:30",
          "label": "🔔 미국장 개장",
          "key": true
        },
        {
          "time_kst": "22:45",
          "time_et": "09:45",
          "label": "🌡️ 첫 15분 거래대금 상위 점검 — Mag7 + 반도체 흐름 체크"
        },
        {
          "time_kst": "23:00",
          "time_et": "10:00",
          "label": "🎯 AMZN $208 1차 분할진입 / GOOGL 옵션 IV 47→ 35 정상화 확인"
        },
        {
          "time_kst": "00:30",
          "time_et": "11:30",
          "label": "🔄 Mag7 컨퍼런스 코멘트 정리 — Capex 방향성 재확인"
        },
        {
          "time_kst": "02:00",
          "time_et": "13:00",
          "label": "☕ 점심 휴식 후 추세 재진입 — 시초 모멘텀 vs 페이드 결정"
        },
        {
          "time_kst": "03:30",
          "time_et": "14:30",
          "label": "📉 AMZN·GOOGL 50% 익절 점검 — AAPL 실적 D-2시간"
        },
        {
          "time_kst": "05:00",
          "time_et": "16:00",
          "label": "🔚 미국장 마감",
          "key": true
        },
        {
          "time_kst": "05:30",
          "time_et": "16:30",
          "label": "🍎 AAPL FY2Q 실적 발표 — EPS $1.92, Rev $109.4B 컨센",
          "key": true
        },
        {
          "time_kst": "06:00",
          "time_et": "17:00",
          "label": "📞 AAPL 컨퍼런스콜 — iPhone·서비스·AI 가이던스 청취"
        },
        {
          "time_kst": "07:30",
          "time_et": "18:30",
          "label": "📝 일일 데이터 갱신 + 내일(5/1) 플랜 수립 — JOLTS·노동지표 D-1"
        }
      ],
      "sectors": [
        {
          "name": "Mega-Cap Tech",
          "strength": 0.78,
          "ticker_count": 5
        },
        {
          "name": "Semiconductors",
          "strength": 0.72,
          "ticker_count": 6
        },
        {
          "name": "Cloud / AI Infra",
          "strength": 0.69,
          "ticker_count": 3
        },
        {
          "name": "Fintech / Platform",
          "strength": 0.55,
          "ticker_count": 2
        },
        {
          "name": "EV / Auto",
          "strength": 0.48,
          "ticker_count": 1
        },
        {
          "name": "Space / New Mobility",
          "strength": 0.62,
          "ticker_count": 2
        },
        {
          "name": "Energy / Oil",
          "strength": 0.43,
          "ticker_count": 1
        }
      ],
      "claude_ranking": [
        {
          "rank": 1,
          "ticker": "AMZN",
          "reasoning": "AWS $37.6B 비트(컨센 $36.6B) + 광고 두 자릿수 성장 — 대형주 중 가장 깔끔한 어닝 비트예요.",
          "signals": [
            "AWS Q1 매출 $37.59B (컨센 +$1B 비트)",
            "광고 매출 두 자릿수 성장 지속",
            "Q2 가이던스 보수적 → 어닝 베이스라인 견고"
          ]
        },
        {
          "rank": 2,
          "ticker": "AAPL",
          "reasoning": "오늘 새벽 5:30 KST 실적이 4월 마지막 빅 이벤트. iPhone 16 Pro 수요·中 매출이 핵심 변수예요.",
          "signals": [
            "FY2Q EPS $1.92 컨센 (전년비 +12%)",
            "Services Q1 +14% YoY 모멘텀 유지",
            "iPhone 17 슈퍼사이클 가이던스 첫 힌트 가능성"
          ]
        },
        {
          "rank": 3,
          "ticker": "NXPI",
          "reasoning": "+25% 갭업의 진짜 의미는 'Auto/Industrial 재고 사이클 종료' 시그널 — 단기 추격은 위험, 첫 눌림이 매수자리예요.",
          "signals": [
            "Q1 어닝 비트 + Q2 가이던스 $3.35–3.55B 상향",
            "Auto MCU 재고 정상화 — 동종업체 STM·INFY 동반 수혜",
            "52주 신고가 + 15년 최대 일일 상승"
          ]
        },
        {
          "rank": 4,
          "ticker": "GOOGL",
          "reasoning": "Cloud +30% / AI 오버뷰 ARPU 첫 공개로 멀티플 리레이팅 진행 — 단 IV 47%는 양날이라 옵션 포지션은 헷지 필수예요.",
          "signals": [
            "Cloud Q1 매출 컨센 +30% YoY 비트",
            "Search 광고 +13% — AI 오버뷰 ARPU 영향 미미 확인",
            "TPU v6 출시 임박 → ASIC 자체 수요 가속"
          ]
        },
        {
          "rank": 5,
          "ticker": "NVDA",
          "reasoning": "AI 사이클은 살아있지만 OpenAI 성장 둔화 + 반도체 dot-com 21.44% 비중 경고로 추격 금지 — $200 지지 재확인 후 진입이 안전해요.",
          "signals": [
            "MSFT Capex 가이던스 +20% 상향 시 수혜 1순위",
            "HBM3E 공급 부족 지속 → ASP 인상 가능성",
            "OpenAI 성장 미달 보도 헤드라인 리스크"
          ]
        }
      ],
      "hidden_edges": [
        {
          "ticker": "SIMO",
          "reason": "어제 콜 옵션 거래량이 평균대비 12배로 폭발했는데 리테일 언급량은 NVDA의 1/15 수준이에요. 5/15 만기 $200 콜로 롤업이 집중된 게 핵심 — 컨트롤러 수요(SSD/모바일) 회복 + AI 데이터센터 NVMe 채택 확대가 5월 중 어닝 시즌에 본격 반영될 가능성이 있어요. 액션: $90 이하 분할매수, 5월 둘째주까지 홀드."
        },
        {
          "ticker": "NXPI",
          "reason": "Auto MCU/Industrial 재고 사이클 바닥 시그널이 가장 깨끗하게 나온 종목인데, 리테일은 'NXP가 뭐임?' 수준 언급량이에요. +25% 갭업이 차익실현 1차로 흡수되고 첫 눌림에서 $235 지지 확인 후 분할매수가 가장 안전한 진입자리예요."
        },
        {
          "ticker": "RKLB",
          "reason": "Neutron 첫 발사 D-3주 + Electron 누적 발사 50회 임박. 우주 섹터 모멘텀 회복 중인데 PLTR·NBIS 그늘에 가려 WSB 언급량 정체. 절대가격이 낮아 옵션 IV 60% 활용한 콜 스프레드 전략이 매력적이에요."
        }
      ],
      "overheated": [
        {
          "ticker": "ORCL",
          "reason": "OpenAI가 내부 매출 목표를 미달했다는 보도 직격탄. ORCL은 OpenAI의 OCI 캐파 위탁사라 4월 누적 -8% 압박이 지속 중이에요. 5/9 OCI 가이던스 발표 전까지는 신규 진입 금지, 보유자도 50% 익절 + 트레일링 스톱이 안전해요."
        },
        {
          "ticker": "TER",
          "reason": "Q1 어닝 비트(EPS $2.56)에도 불구하고 -12% 갭다운. AI 테스트 장비 수요는 여전한데 Q2 가이던스가 컨센 미스했다는 게 핵심 — 칼날 잡기는 매우 위험해요. $115 지지 재확인 + 거래대금 정상화까지 관망이 정답."
        },
        {
          "ticker": "PLTR",
          "reason": "WSB 언급량 1위 자리는 유지지만 PER 175x + IV 56%는 5/5 Q1 실적 직전까지 멀티플 압박이 가장 큰 종목이에요. 가이던스 컨센서스 한 번 미스하면 -10% 갭다운 리스크. 신규 진입은 실적 후 공급/수요 재확인 후가 안전해요."
        }
      ],
      "tickers": [
        {
          "rank": 1,
          "ticker": "AMZN",
          "name": "Amazon.com, Inc.",
          "sector": "Mega-Cap Tech",
          "sector_full": "E-Commerce / Cloud",
          "price": 207.85,
          "change_pct": 5.8,
          "score_total": 87.4,
          "score_reddit": 84,
          "score_news": 95,
          "score_trends": 78,
          "score_options": 92,
          "quadrant": "hot",
          "claude_rank": 1,
          "claude_summary": "AWS $37.6B 비트 + 광고 두 자릿수 — Mag7 어닝 시즌 가장 깔끔한 비트예요.",
          "claude_signals": [
            "AWS Q1 매출 $37.59B (컨센 +$1B)",
            "광고 매출 두 자릿수 성장",
            "Q2 보수 가이던스 → 베이스라인 견고"
          ],
          "narrative": "어제 AH에서 매출 $181.5B / AWS $37.6B로 전 세그먼트 비트. AWS 가이던스 +20% YoY 유지 가능성이 가장 큰 모멘텀이에요. 리테일은 '드디어 클라우드 르네상스 본격화' 서사로 매수 전환, 기관은 광고 매출 두 자릿수 성장에서 메타·구글 대비 멀티플 디스카운트 축소 가능성 베팅. 다만 Q2 가이던스는 보수적이라 2시간 이상 추격은 자제해요.",
          "entry": 208,
          "tp1": 218,
          "tp2": 228,
          "sl": 204,
          "entry_comment": "21:30 PCE 결과 확인 후 22:35 $208 1차 분할, $206 지지 시 2차. AAPL 실적 직전 03:30 KST에 절반 익절 권장.",
          "catalysts": [
            "AWS Q1 비트 + Q2 가이던스 +20% YoY 컨센",
            "광고 매출 두 자릿수 — META/GOOGL 대비 멀티플 디스카운트 해소",
            "Prime 회원 가격 인상 효과 Q2 본격 반영"
          ],
          "risks": [
            "AWS Capex 가이던스 +25% 상향 시 마진 압박 우려",
            "리테일 매출 둔화 시 Q2 EPS 컨센 하향",
            "PCE 3.1% 이상이면 멀티플 압박 재개"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 920,
              "sentiment": 0.68
            },
            {
              "sub": "stocks",
              "count": 412,
              "sentiment": 0.62
            },
            {
              "sub": "investing",
              "count": 285,
              "sentiment": 0.59
            }
          ],
          "news_headlines": [
            {
              "title": "Amazon Q1 sales smash estimates as AWS posts $37.6B revenue",
              "source": "CNBC",
              "ago": "9h"
            },
            {
              "title": "Bernstein: AMZN advertising arm now $50B+ run-rate, narrowing gap with META",
              "source": "Bloomberg",
              "ago": "12h"
            },
            {
              "title": "AWS guidance hints at sustained Capex through 2027 — analysts split",
              "source": "Reuters",
              "ago": "14h"
            }
          ],
          "trend_surge_pct": 38,
          "options_detail": {
            "call_volume": 415000,
            "put_volume": 128000,
            "cp_ratio": 3.2,
            "smart_money_ratio": 0.74,
            "unusual": true
          }
        },
        {
          "rank": 2,
          "ticker": "AAPL",
          "name": "Apple Inc.",
          "sector": "Mega-Cap Tech",
          "sector_full": "Consumer Electronics",
          "price": 224.15,
          "change_pct": 0.4,
          "score_total": 84.6,
          "score_reddit": 82,
          "score_news": 88,
          "score_trends": 88,
          "score_options": 80,
          "quadrant": "hot",
          "claude_rank": 2,
          "claude_summary": "오늘 새벽 5:30 KST 실적 — iPhone 16 Pro 수요와 중국 매출이 4월 마지막 빅 이벤트예요.",
          "claude_signals": [
            "FY2Q EPS $1.92 컨센 (전년비 +12%)",
            "Services Q1 +14% YoY 모멘텀",
            "iPhone 17 슈퍼사이클 가이던스 힌트 가능성"
          ],
          "narrative": "오늘 새벽 5:30 KST(4/30 ET 16:30)에 FY2Q 실적이 4월 마지막 빅 이벤트예요. 핵심 변수는 iPhone 16 Pro 수요·중국 매출(컨센 -3% YoY)·Services 마진 — 이 셋 중 하나라도 컨센 비트면 +5% 갭업, 둘 이상 미스면 -3% 갭다운. 리테일은 'AI 슈퍼사이클 베팅' 모드로 IV 32%까지 끌어올렸고, 기관은 iPhone 17 가이던스 첫 힌트에 베팅 중이에요.",
          "entry": 224,
          "tp1": 235,
          "tp2": 248,
          "sl": 218,
          "entry_comment": "실적 베팅은 옵션으로만 — 콜 스프레드($230/$245) 권장. 현물 진입은 실적 후 5/1 시초가 보고 결정.",
          "catalysts": [
            "오늘 새벽 5:30 KST FY2Q 실적",
            "Services 매출 $25B 돌파 가능성",
            "iPhone 17 슈퍼사이클 첫 가이던스"
          ],
          "risks": [
            "중국 매출 컨센(-3%) 추가 미스 시 -5%",
            "iPhone 16 재고 누적 가이던스",
            "Apple Intelligence 수익화 지연 우려"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 1050,
              "sentiment": 0.61
            },
            {
              "sub": "stocks",
              "count": 528,
              "sentiment": 0.63
            },
            {
              "sub": "investing",
              "count": 342,
              "sentiment": 0.58
            }
          ],
          "news_headlines": [
            {
              "title": "Apple Q2 earnings preview: iPhone, China and AI in focus",
              "source": "Bloomberg",
              "ago": "3h"
            },
            {
              "title": "Trefis sees AAPL +4% on services beat, China -3% baseline",
              "source": "Trefis",
              "ago": "8h"
            },
            {
              "title": "Morgan Stanley: AAPL Apple Intelligence rollout to drive iPhone 17 supercycle",
              "source": "WSJ",
              "ago": "16h"
            }
          ],
          "trend_surge_pct": 56,
          "options_detail": {
            "call_volume": 385000,
            "put_volume": 175000,
            "cp_ratio": 2.2,
            "smart_money_ratio": 0.66,
            "unusual": true
          }
        },
        {
          "rank": 3,
          "ticker": "NXPI",
          "name": "NXP Semiconductors N.V.",
          "sector": "Semiconductors",
          "sector_full": "Auto / Industrial Semi",
          "price": 241.3,
          "change_pct": 25.2,
          "score_total": 84,
          "score_reddit": 70,
          "score_news": 96,
          "score_trends": 92,
          "score_options": 78,
          "quadrant": "hot",
          "claude_rank": 3,
          "claude_summary": "Auto/Industrial 재고 사이클 바닥 신호 — 리테일은 아직 못 쫓아왔어요. 첫 눌림이 매수자리.",
          "claude_signals": [
            "Q2 가이던스 $3.35–3.55B (컨센 $3.27B 상향)",
            "+25% 일일 상승은 15년 최대치 — 추세 반전 시그널",
            "Auto MCU 재고 정상화 → STM·INFY 동반 수혜"
          ],
          "narrative": "어제 +25% 폭등은 단순 어닝 비트가 아니라 'Auto MCU 재고 사이클 종료' 신호예요. Q2 가이던스 $3.35–3.55B는 컨센($3.27B) 대비 5% 상향 + Industrial 부문 회복까지 동반된 깨끗한 비트. 리테일은 아직 'NXP가 뭐임?' 수준이라 첫 눌림($235 지지)에서 분할매수가 가장 좋은 자리예요. STM·INFY 동반 수혜 베팅도 함께 검토하세요.",
          "entry": 235,
          "tp1": 252,
          "tp2": 268,
          "sl": 228,
          "entry_comment": "+25% 직후 추격 절대 금지. 오늘 첫 눌림 $235 지지 확인 후 분할진입.",
          "catalysts": [
            "Q1 비트 + Q2 가이던스 $3.35–3.55B",
            "Auto MCU 재고 정상화 사이클",
            "STM·INFY 5월 어닝 동반 모멘텀"
          ],
          "risks": [
            "갭업 후 차익실현 -5% 룸",
            "PCE 3.1% 이상 시 멀티플 압박",
            "中 EV 수요 부진 시 가이던스 하향"
          ],
          "reddit_sentiment_label": "중립",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 280,
              "sentiment": 0.55
            },
            {
              "sub": "stocks",
              "count": 220,
              "sentiment": 0.71
            },
            {
              "sub": "investing",
              "count": 175,
              "sentiment": 0.74
            }
          ],
          "news_headlines": [
            {
              "title": "NXP Semiconductors surges 25% on Q2 revenue forecast beat",
              "source": "Reuters",
              "ago": "11h"
            },
            {
              "title": "Auto MCU inventory cycle ending, NXPI biggest beneficiary — Bernstein",
              "source": "Bloomberg",
              "ago": "13h"
            },
            {
              "title": "STM, INFY follow NXP higher in Europe pre-market",
              "source": "FT",
              "ago": "5h"
            }
          ],
          "trend_surge_pct": 142,
          "options_detail": {
            "call_volume": 92000,
            "put_volume": 28000,
            "cp_ratio": 3.3,
            "smart_money_ratio": 0.71,
            "unusual": true
          }
        },
        {
          "rank": 4,
          "ticker": "GOOGL",
          "name": "Alphabet Inc.",
          "sector": "Mega-Cap Tech",
          "sector_full": "Search / Cloud / AI",
          "price": 198.5,
          "change_pct": 3.4,
          "score_total": 82.5,
          "score_reddit": 81,
          "score_news": 88,
          "score_trends": 79,
          "score_options": 82,
          "quadrant": "hot",
          "claude_rank": 4,
          "claude_summary": "Cloud +30% YoY 비트 + AI 오버뷰 ARPU 첫 공개 — 멀티플 리레이팅 시작이에요.",
          "claude_signals": [
            "Cloud Q1 매출 +30% YoY 컨센 비트",
            "Search 광고 +13% — AI 오버뷰 영향 미미 확인",
            "TPU v6 출시 임박 → ASIC 자체 수요 가속"
          ],
          "narrative": "어제 AH에서 광고 +13% / Cloud +30% / Capex 가이던스 상향까지 트리플 호조. AI 오버뷰가 검색 ARPU에 부정적 영향 안 미친다는 게 핵심 발견 — 5분기 만의 리레이팅 트리거예요. 기관은 TPU v6 출시 임박을 자체 ASIC 수요 가속으로 해석하면서 NVDA 대비 디커플링 베팅 중이에요. IV 47%는 옵션 헷지 필수.",
          "entry": 197,
          "tp1": 207,
          "tp2": 215,
          "sl": 193,
          "entry_comment": "갭업 5%+ 시 추격 자제, 시초 30분 흐름 보고 22:50 분할진입. 옵션 헷지로 IV 정상화 동반 수익 노려요.",
          "catalysts": [
            "Cloud +30% / Capex 가이던스 +25% 상향",
            "AI 오버뷰 ARPU 첫 공개 (긍정)",
            "TPU v6 양산 6월 → 자체 ASIC 매출 가속"
          ],
          "risks": [
            "IV 47% 정상화로 옵션 가치 급락",
            "DOJ 검색 분리 명령 5월 결정",
            "Capex 상향 시 마진 압박 우려 재점화"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 685,
              "sentiment": 0.65
            },
            {
              "sub": "stocks",
              "count": 358,
              "sentiment": 0.7
            },
            {
              "sub": "investing",
              "count": 245,
              "sentiment": 0.66
            }
          ],
          "news_headlines": [
            {
              "title": "Alphabet Q1 cloud revenue tops estimates; capex raised to $80B",
              "source": "Bloomberg",
              "ago": "10h"
            },
            {
              "title": "AI Overviews not cannibalizing search ad revenue, Google says",
              "source": "WSJ",
              "ago": "11h"
            },
            {
              "title": "TPU v6 'Ironwood' production volume ramps in June — leak",
              "source": "The Information",
              "ago": "18h"
            }
          ],
          "trend_surge_pct": 48,
          "options_detail": {
            "call_volume": 268000,
            "put_volume": 95000,
            "cp_ratio": 2.8,
            "smart_money_ratio": 0.71,
            "unusual": true
          }
        },
        {
          "rank": 5,
          "ticker": "NVDA",
          "name": "NVIDIA Corporation",
          "sector": "Semiconductors",
          "sector_full": "AI Accelerator",
          "price": 203.1,
          "change_pct": -1.3,
          "score_total": 79.8,
          "score_reddit": 88,
          "score_news": 76,
          "score_trends": 74,
          "score_options": 81,
          "quadrant": "overheat",
          "claude_rank": 5,
          "claude_summary": "MSFT Capex 가이던스 +20% 상향은 호재지만 OpenAI 그림자 + dot-com 21.44% 비중 경고로 추격 금지예요.",
          "claude_signals": [
            "MSFT Capex 가이던스 +20% 상향 (어제 발표)",
            "HBM3E 공급 부족 → ASP 인상 가능성",
            "OpenAI 성장 둔화 보도 헤드라인 리스크"
          ],
          "narrative": "어제 MSFT가 Capex +20% 상향을 공식화했지만 NVDA는 -1.3%로 약세. 핵심은 OpenAI 내부 매출 목표 미달 보도 + 반도체 시장 비중 21.44%(dot-com 피크 동일)가 만든 멀티플 압박이에요. 리테일은 여전히 'AI 사이클 한복판' 서사로 홀드 중이지만 기관은 일부 차익실현 + 디스플레이드 모멘텀. $200 지지 재확인 후 진입이 안전해요.",
          "entry": 200,
          "tp1": 210,
          "tp2": 220,
          "sl": 196,
          "entry_comment": "$200 지지 재확인 후 분할진입, 시초 갭다운 -3% 시 즉시 컷. AAPL 실적 후 자금 이동 가능성 주시.",
          "catalysts": [
            "MSFT/AMZN/GOOGL Capex 가이던스 동시 +20% 상향 효과",
            "HBM3E 공급가 5월 협상 완료",
            "Vera Rubin 양산 6월 시작"
          ],
          "risks": [
            "OpenAI 성장 미달 보도 추가 헤드라인",
            "반도체 비중 21.44% — dot-com 피크 동일 경고",
            "$200 이탈 시 -5% 추가 하락 룸"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 1420,
              "sentiment": 0.68
            },
            {
              "sub": "stocks",
              "count": 510,
              "sentiment": 0.62
            },
            {
              "sub": "investing",
              "count": 305,
              "sentiment": 0.55
            }
          ],
          "news_headlines": [
            {
              "title": "NVIDIA ticks up despite OpenAI growth miss reports",
              "source": "Reuters",
              "ago": "5h"
            },
            {
              "title": "MSFT, GOOGL combined capex hits $260B run-rate — NVDA top beta",
              "source": "Bloomberg",
              "ago": "9h"
            },
            {
              "title": "Semis at 21% market cap — analysts split on bubble thesis",
              "source": "WSJ",
              "ago": "16h"
            }
          ],
          "trend_surge_pct": 22,
          "options_detail": {
            "call_volume": 285000,
            "put_volume": 145000,
            "cp_ratio": 1.97,
            "smart_money_ratio": 0.62,
            "unusual": false
          }
        },
        {
          "rank": 6,
          "ticker": "MSFT",
          "name": "Microsoft Corporation",
          "sector": "Mega-Cap Tech",
          "sector_full": "Cloud / Productivity",
          "price": 462.4,
          "change_pct": 2.8,
          "score_total": 78.6,
          "score_reddit": 72,
          "score_news": 87,
          "score_trends": 70,
          "score_options": 85,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "어제 비트 + Capex +20% 상향 호재 반영 — 단기 추격보다 첫 눌림 $458 매수자리예요.",
          "claude_signals": [
            "Azure +33% YoY (컨센 비트)",
            "Copilot ARR $20B 돌파",
            "Capex 가이던스 +20% 상향 발표"
          ],
          "narrative": "어제 AH에서 Azure +33% / EPS $4.07 비트 / Copilot 20M 유저 + Capex +20% 상향까지 풀콤보. 다만 +2.8% 갭업이 어느 정도 반영된 상태라 추격은 자제, 첫 눌림 $458 지지에서 분할매수가 안전해요.",
          "catalysts": [
            "Azure Q4 가이던스 +30% 유지",
            "OpenAI 모델 진입 가속",
            "Capex $80B → $96B 상향"
          ],
          "risks": [
            "OpenAI 성장 둔화 시 Capex 회수 우려",
            "Copilot 무료화 압박",
            "PCE 3.1% 이상 멀티플 압박"
          ]
        },
        {
          "rank": 7,
          "ticker": "META",
          "name": "Meta Platforms Inc.",
          "sector": "Mega-Cap Tech",
          "sector_full": "Social / AI Ads",
          "price": 612.8,
          "change_pct": 1.2,
          "score_total": 76.8,
          "score_reddit": 72,
          "score_news": 81,
          "score_trends": 76,
          "score_options": 78,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "Reels +40% / 광고 ROI 가속. Reality Labs 적자 축소 가이던스가 리레이팅 트리거예요.",
          "claude_signals": [
            "Q1 광고 매출 +18% YoY",
            "Reels DAU 30억 돌파",
            "Reality Labs 적자 -$3.5B (전분기 -$4.7B)"
          ],
          "narrative": "어제 AH 비트 직후 +1.2% 소폭 상승. 핵심 발견은 Reality Labs 적자가 분기당 -$3.5B로 전분기 대비 축소 — Quest 4 + Llama 4 재화 효과예요. 다만 Capex +25% 상향이 마진 압박 우려도 동시 — 갭업 추격보다 시초 30분 흐름 보고 진입 결정.",
          "catalysts": [
            "Reels ARPU 가속",
            "Llama 4 Open Source 효과",
            "Reality Labs 손실 축소"
          ],
          "risks": [
            "Capex +25% 상향 → 마진 압박",
            "TikTok 미국 매각 무산 시 광고 영향",
            "JOLTS 약세 시 광고주 지출 둔화"
          ]
        },
        {
          "rank": 8,
          "ticker": "AVGO",
          "name": "Broadcom Inc.",
          "sector": "Semiconductors",
          "sector_full": "ASIC / Networking",
          "price": 1745,
          "change_pct": -0.8,
          "score_total": 75.4,
          "score_reddit": 65,
          "score_news": 78,
          "score_trends": 68,
          "score_options": 80,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "MSFT/GOOGL Capex 상향의 '제2 수혜주'지만 OpenAI 헤드라인 헷지로 NVDA와 동반 약세 — $1700 지지 재확인 후 진입이 정답.",
          "claude_signals": [
            "하이퍼스케일러 4사 ASIC 동시 진행",
            "Tomahawk 6 양산 매출 Q3 인식",
            "VMware 시너지 50% 가시화"
          ],
          "narrative": "MSFT/GOOGL Capex +20% 상향 호재가 큰데도 OpenAI 그림자에 동반 약세(-0.8%). 리테일은 절대가격 $1700 부담으로 패스 중이라 기관 베팅이 확실한 자리. $1700 지지 재확인 후 매수가 안전해요.",
          "catalysts": [
            "하이퍼스케일러 ASIC 4사 동시 진행",
            "Tomahawk 6 매출 Q3",
            "VMware 시너지 50% 본격화"
          ],
          "risks": [
            "반도체 dot-com 21% 비중 경고",
            "OpenAI 헤드라인 장기화",
            "ASIC 자체 개발 가속 시 외주 비중 축소"
          ]
        },
        {
          "rank": 9,
          "ticker": "AMD",
          "name": "Advanced Micro Devices",
          "sector": "Semiconductors",
          "sector_full": "CPU / GPU",
          "price": 168.2,
          "change_pct": -1.5,
          "score_total": 73.2,
          "score_reddit": 76,
          "score_news": 65,
          "score_trends": 72,
          "score_options": 80,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "MI400 출시 임박 + 5/6 Q1 실적 D-1주 — 다만 RSI 78 피로도, $165 지지 재확인 후 진입이 안전해요.",
          "claude_signals": [
            "MI400 출시 6월 컨퍼런스 발표 예정",
            "Q1 실적 5/6 D-1주",
            "데이터센터 매출 컨센 +35% YoY"
          ],
          "narrative": "반도체 17세션 연속 상승 후 RSI 78 과열 구간 돌입. NVDA 그림자 + $165 지지가 핵심. 5/6 Q1 실적 가이던스가 컨센서스 +35% YoY 비트면 NVDA 대비 디커플링 베팅 가능성 — 단 추격 금지, 눌림 분할이 정답.",
          "catalysts": [
            "MI400 출시 6월",
            "5/6 Q1 실적 D-1주",
            "데이터센터 매출 가이던스 +35%"
          ],
          "risks": [
            "RSI 78 과열 + 17세션 피로도",
            "MI300X 가격 인하 압박",
            "OpenAI 성장 둔화 헤드라인"
          ]
        },
        {
          "rank": 10,
          "ticker": "TSLA",
          "name": "Tesla Inc.",
          "sector": "EV / Auto",
          "sector_full": "EV / Auto",
          "price": 240.5,
          "change_pct": 0.8,
          "score_total": 71.5,
          "score_reddit": 84,
          "score_news": 58,
          "score_trends": 75,
          "score_options": 76,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "$235 트리플 바텀 형성 후 5/15 Robotaxi Day D-2주반 — 신뢰 회복은 아직, 단기 트레이딩만.",
          "claude_signals": [
            "$235 트리플 바텀 형성",
            "Robotaxi Day 5/15 D-2주반",
            "FSD v13 안정화 데이터 호조"
          ],
          "narrative": "4/22 -8% 갭다운 후 $235에서 트리플 바텀 형성 중. Robotaxi Day(5/15)까지 약 2주반 남았고 FSD v13 데이터 안정화로 리테일 컨피던스 회복. 다만 신규 주문 데이터 부재로 기관은 관망. 단기 반등 트레이딩만 권장, 신규 진입은 5/15 이후가 안전해요.",
          "catalysts": [
            "5/15 Robotaxi Day 공개",
            "FSD v13 GA 출시",
            "Cybertruck 누적 인도 5만대 마일스톤"
          ],
          "risks": [
            "Q1 인도 데이터 컨센 미스 추가 우려",
            "캡엑스 가이던스 추가 하향 시 신뢰 추락",
            "머스크 X CEO 겸직 이슈 재점화"
          ]
        },
        {
          "rank": 11,
          "ticker": "MRVL",
          "name": "Marvell Technology",
          "sector": "Semiconductors",
          "sector_full": "Custom ASIC / Networking",
          "price": 152.3,
          "change_pct": 0.6,
          "score_total": 70.8,
          "score_reddit": 64,
          "score_news": 76,
          "score_trends": 68,
          "score_options": 75,
          "quadrant": "hidden",
          "claude_rank": null,
          "claude_summary": null,
          "claude_signals": []
        },
        {
          "rank": 12,
          "ticker": "PLTR",
          "name": "Palantir Technologies",
          "sector": "Software / AI",
          "sector_full": "Defense / AI Software",
          "price": 121.4,
          "change_pct": -2.1,
          "score_total": 70.2,
          "score_reddit": 92,
          "score_news": 58,
          "score_trends": 78,
          "score_options": 53,
          "quadrant": "overheat",
          "claude_rank": null,
          "claude_summary": null,
          "claude_signals": []
        },
        {
          "rank": 13,
          "ticker": "SIMO",
          "name": "Silicon Motion Technology",
          "sector": "Semiconductors",
          "sector_full": "SSD Controller",
          "price": 88.2,
          "change_pct": 4.6,
          "score_total": 68.5,
          "score_reddit": 32,
          "score_news": 65,
          "score_trends": 58,
          "score_options": 95,
          "quadrant": "hidden",
          "claude_rank": null,
          "claude_summary": null,
          "claude_signals": []
        },
        {
          "rank": 14,
          "ticker": "NBIS",
          "name": "Nebius Group N.V.",
          "sector": "Cloud / AI Infra",
          "sector_full": "AI Cloud (Eastern EU)",
          "price": 92.3,
          "change_pct": -3.4,
          "score_total": 67.6,
          "score_reddit": 88,
          "score_news": 62,
          "score_trends": 84,
          "score_options": 50,
          "quadrant": "overheat",
          "claude_rank": null,
          "claude_summary": null,
          "claude_signals": []
        },
        {
          "rank": 15,
          "ticker": "ORCL",
          "name": "Oracle Corporation",
          "sector": "Cloud / AI Infra",
          "sector_full": "Enterprise Cloud / OCI",
          "price": 168.4,
          "change_pct": -2.8,
          "score_total": 66.4,
          "score_reddit": 58,
          "score_news": 50,
          "score_trends": 72,
          "score_options": 72,
          "quadrant": "overheat",
          "claude_rank": null,
          "claude_summary": null,
          "claude_signals": []
        },
        {
          "rank": 16,
          "ticker": "MU",
          "name": "Micron Technology",
          "sector": "Semiconductors",
          "sector_full": "Memory / HBM",
          "price": 102.8,
          "change_pct": -1,
          "score_total": 65.2,
          "score_reddit": 70,
          "score_news": 68,
          "score_trends": 60,
          "score_options": 62,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": null,
          "claude_signals": []
        },
        {
          "rank": 17,
          "ticker": "RDDT",
          "name": "Reddit, Inc.",
          "sector": "Software / Platform",
          "sector_full": "Social / Platform",
          "price": 78.5,
          "change_pct": 1.9,
          "score_total": 64.6,
          "score_reddit": 78,
          "score_news": 60,
          "score_trends": 65,
          "score_options": 55,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": null,
          "claude_signals": []
        },
        {
          "rank": 18,
          "ticker": "RKLB",
          "name": "Rocket Lab Corp.",
          "sector": "Space / New Mobility",
          "sector_full": "Aerospace / Launch",
          "price": 32.4,
          "change_pct": 2.5,
          "score_total": 64,
          "score_reddit": 68,
          "score_news": 60,
          "score_trends": 70,
          "score_options": 58,
          "quadrant": "hidden",
          "claude_rank": null,
          "claude_summary": null,
          "claude_signals": []
        },
        {
          "rank": 19,
          "ticker": "ASTS",
          "name": "AST SpaceMobile, Inc.",
          "sector": "Space / New Mobility",
          "sector_full": "Direct-to-Cell Satellite",
          "price": 38.2,
          "change_pct": 0.5,
          "score_total": 62.8,
          "score_reddit": 72,
          "score_news": 56,
          "score_trends": 64,
          "score_options": 60,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": null,
          "claude_signals": []
        },
        {
          "rank": 20,
          "ticker": "TER",
          "name": "Teradyne Inc.",
          "sector": "Semiconductors",
          "sector_full": "Test Equipment",
          "price": 116.8,
          "change_pct": -12.3,
          "score_total": 60.5,
          "score_reddit": 35,
          "score_news": 48,
          "score_trends": 88,
          "score_options": 70,
          "quadrant": "overheat",
          "claude_rank": null,
          "claude_summary": null,
          "claude_signals": []
        }
      ]
    },
    "2026-04-28": {
      "date": "2026-04-28",
      "date_display": "2026-04-28 (화·미국장)",
      "market_mood": "bullish",
      "market_mood_score": 71,
      "market_summary": "내일 새벽 MSFT·GOOGL 동시 컨콜이 진짜 D-day예요. AI 캡엑스 가이던스 +20% 상향 컨센이 형성된 상황이라 NVDA·MRVL·AVGO 동반 매수세, 다만 갭다운 리스크도 동시에 큰 양날이에요.",
      "sector_tilt": [
        "Semiconductors",
        "AI Infrastructure",
        "Mega-Cap Tech"
      ],
      "top_ticker": "NVDA",
      "candidate_count": 20,
      "today_action": {
        "one_liner": "내일 MSFT·GOOGL 컨콜 D-1 — NVDA·MRVL은 분할매집, GOOGL은 옵션 헷지, NBIS는 추격 금지가 정답이에요.",
        "priorities": [
          {
            "icon": "🎯",
            "ticker": "NVDA",
            "text": "22:35 개장 직후 $205 근처 1차 분할진입, $203 지지 시 2차. 손절 $201 엄수, TP1 $211 / TP2 $218. MSFT 실적 직전 23:50 추가 매수 가능."
          },
          {
            "icon": "💎",
            "ticker": "MRVL",
            "text": "23:00 매물 소화 후 $150 분할진입. GOOGL 컨콜에서 'Marvell' 직접 언급 시 +10% 갭업. 손절 $146.5, TP1 $159 / TP2 $167."
          },
          {
            "icon": "🚨",
            "ticker": "NBIS",
            "text": "4월 +50% 후 RSI 78 과열. 갭업 +3% 이상이면 절대 신규 진입 금지, 보유자도 절반 익절 + 트레일링 스톱 권장."
          }
        ]
      },
      "routine_timeline": [
        {
          "time_kst": "21:30",
          "time_et": "08:30",
          "label": "📊 미국 3월 GDP 잠정치 발표 (컨센 +2.4%)",
          "active": true
        },
        {
          "time_kst": "21:45",
          "time_et": "08:45",
          "label": "🔍 프리마켓 NVDA·MRVL·AVGO 갭 체크 + GOOGL 옵션 IV 확인"
        },
        {
          "time_kst": "22:30",
          "time_et": "09:30",
          "label": "🔔 미국장 개장",
          "key": true
        },
        {
          "time_kst": "22:35",
          "time_et": "09:35",
          "label": "🎯 NVDA $205 1차 분할진입 자리 (5분 캔들 마감 확인)"
        },
        {
          "time_kst": "23:00",
          "time_et": "10:00",
          "label": "💎 MRVL $150 분할진입 + AVGO $1735 매수 자리"
        },
        {
          "time_kst": "23:30",
          "time_et": "10:30",
          "label": "📈 EIA 원유 재고 발표 + WTI 모니터링"
        },
        {
          "time_kst": "00:30",
          "time_et": "11:30",
          "label": "🔁 점심 박스 횡보 구간 — 신규 진입 자제, 익절 익절"
        },
        {
          "time_kst": "02:00",
          "time_et": "13:00",
          "label": "📊 7년물 국채 입찰 결과 + DXY 체크"
        },
        {
          "time_kst": "03:00",
          "time_et": "14:00",
          "label": "📰 FOMC 의사록 발표 (3월) — 매파 톤 확인"
        },
        {
          "time_kst": "04:50",
          "time_et": "15:50",
          "label": "🚪 마감 10분 전 — TSLA $235 지지 최종 체크"
        },
        {
          "time_kst": "05:00",
          "time_et": "16:00",
          "label": "🔚 미국장 마감 / 시간외 MSFT·GOOGL 실적 대기"
        },
        {
          "time_kst": "05:05",
          "time_et": "16:05",
          "label": "📣 MSFT·GOOGL Q1 실적 동시 발표 — 22:30 ET 컨콜",
          "key": true
        }
      ],
      "sectors": [
        {
          "name": "Semiconductors",
          "strength": 0.89,
          "ticker_count": 6
        },
        {
          "name": "AI Infrastructure",
          "strength": 0.74,
          "ticker_count": 2
        },
        {
          "name": "Mega-Cap Tech",
          "strength": 0.78,
          "ticker_count": 4
        },
        {
          "name": "Crypto / Bitcoin",
          "strength": 0.69,
          "ticker_count": 2
        },
        {
          "name": "Space & Comm",
          "strength": 0.52,
          "ticker_count": 2
        },
        {
          "name": "AI Software",
          "strength": 0.62,
          "ticker_count": 1
        },
        {
          "name": "EV / Auto",
          "strength": 0.55,
          "ticker_count": 1
        },
        {
          "name": "Fintech / Platform",
          "strength": 0.5,
          "ticker_count": 1
        },
        {
          "name": "Meme / Retail",
          "strength": 0.32,
          "ticker_count": 1
        }
      ],
      "claude_ranking": [
        {
          "rank": 1,
          "ticker": "NVDA",
          "reasoning": "내일 MSFT·GOOGL 캡엑스 발표 직전 마지막 분할매집 자리예요.",
          "signals": [
            "MSFT·GOOGL 컨콜 D-1 (4/29 22:30 ET)",
            "HBM3E 공급 부족·ASP 인상 예약",
            "Vera Rubin 양산 6월·소프트론칭 임박"
          ]
        },
        {
          "rank": 2,
          "ticker": "MSFT",
          "reasoning": "4/29 컨콜이 핵심. Azure +33% + 캡엑스 +25% 동시 비트면 AI 인프라 전체 리레이팅 트리거예요.",
          "signals": [
            "4/29 22:30 ET FY3Q 컨콜",
            "Azure YoY 33% 컨센서스",
            "Copilot ARR $20B 돌파 가능"
          ]
        },
        {
          "rank": 3,
          "ticker": "MRVL",
          "reasoning": "GOOGL 컨콜에서 Marvell 직접 언급 시 +10% 갭업. 옵션 콜플로우 평균대비 4배.",
          "signals": [
            "GOOGL TPU+MPU 파트너십 공식화",
            "TSMC 2nm 캐파 우선 할당",
            "커스텀 ASIC 매출 비중 35%"
          ]
        },
        {
          "rank": 4,
          "ticker": "GOOGL",
          "reasoning": "광고+클라우드+AI 오버뷰 트리플 비트가 $200 돌파 트리거예요. 다만 IV 47%로 양날.",
          "signals": [
            "Search 광고 +13% YoY 컨센",
            "Cloud +30% 가이던스 핵심",
            "AI 오버뷰 ARPU 첫 공개 가능성"
          ]
        },
        {
          "rank": 5,
          "ticker": "AVGO",
          "reasoning": "MSFT 캡엑스 +20% 상향이면 가장 빠르게 따라가는 베타. ASIC + 네트워킹 더블엔진.",
          "signals": [
            "하이퍼스케일러 ASIC 4사 동시 진행",
            "Tomahawk 6 양산 매출 Q3 인식",
            "VMware 시너지 50% 가시화"
          ]
        }
      ],
      "hidden_edges": [
        {
          "ticker": "MRVL",
          "reason": "GOOGL TPU v6 + Marvell MPU 파트너십이 공식화됐는데 리테일 언급량은 NVDA의 1/4 수준이에요. 4/29 GOOGL 컨콜에서 'Marvell' 직접 언급 한 줄만 나와도 시장 인식이 '단기 테마주' → '장기 파트너'로 리레이팅 가능, 옵션 콜플로우는 이미 평균대비 4배로 스마트머니 선진입 신호가 명확해요."
        },
        {
          "ticker": "SOFI",
          "reason": "고금리 피크아웃 + 학자금 대출 재개·리파이 사이클 회복에 가장 베타 높은 핀테크인데 PLTR·MSTR 그늘에 가려 WSB 언급량 정체 중이에요. Q1 실적(5/5) 전 옵션 IV 50대 진입했지만 주가는 $15.4로 12개월 저점 부근이라 리스크/리워드 비율 제일 좋은 자리에요."
        },
        {
          "ticker": "AVGO",
          "reason": "MSFT 캡엑스 콜의 '제2 수혜주'로 NVDA 다음 가는 베타지만 절대 가격 $1700대 부담으로 리테일이 패스 중이에요. 4사 하이퍼스케일러 ASIC 동시 진행 + Tomahawk 6 양산 매출 Q3 인식 확정으로 기관은 '제2의 NVDA' 포지셔닝 중이에요."
        }
      ],
      "overheated": [
        {
          "ticker": "NBIS",
          "reason": "4월 한 달 +50% 급등에 RSI 78, 옵션 P/C 1.9로 명확한 과열 신호예요. AI21 인수·Meta 27B·NVDA 2B 트리플 카탈리스트가 다 가격에 반영된 상태라 다음 조정에서 매수가 안전해요."
        },
        {
          "ticker": "PLTR",
          "reason": "리테일 1순위 종목으로 WSB 언급량 1위지만 PER 175x + IV 56%는 멀티플 압박 재개 시 가장 취약한 위치예요. Q1 실적(5/5) 가이던스가 컨센서스 미스 한 번이면 -10% 갭다운 리스크예요."
        },
        {
          "ticker": "AMD",
          "reason": "반도체 17세션 연속 상승 피로도 + RSI 78. NVDA·MRVL 트리플 카탈리스트 그늘에 가려 절대 모멘텀은 약화 중. 단기 추격 금지, $165 지지 재확인 후가 안전해요."
        }
      ],
      "tickers": [
        {
          "rank": 1,
          "ticker": "NVDA",
          "name": "NVIDIA Corporation",
          "sector": "Semi",
          "sector_full": "Semiconductors",
          "price": 205.8,
          "change_pct": -0.6,
          "score_total": 88.7,
          "score_reddit": 89,
          "score_news": 91,
          "score_trends": 82,
          "score_options": 93,
          "claude_rank": 1,
          "claude_summary": "내일(4/29) MSFT·GOOGL 캡엑스 발표 직전 '눌림 매집' 자리예요. 11세션 상승 후 5일째 횡보 = 매물 소화 마무리 신호.",
          "claude_signals": [
            "MSFT·GOOGL 캡엑스 가이던스 4/29 발표 D-1",
            "HBM3E 공급 부족 → ASP 인상 가능성",
            "Vera Rubin 양산 일정 6월 → 소프트론칭 임박"
          ],
          "narrative": "오늘은 내일 MSFT·GOOGL 실적의 '캡엑스 멘트' 베팅 자리예요. 지난주 신고가 $208 찍고 5일째 $204~$207 박스 횡보 중인데, 이건 매물 소화 후 추가 상승 패턴이에요. 리테일은 'AI 사이클 한복판' 서사로 단단히 홀드 중이고, 기관은 4/29 오후 MSFT 컨콜에서 캡엑스 가이던스 +20% 상향 시 멀티플 한 단계 더 가능성에 베팅 중이에요.",
          "entry": 204.5,
          "tp1": 211,
          "tp2": 218,
          "sl": 201,
          "entry_comment": "22:35 개장 직후 $205 근처 1차 분할, $203 지지 확인 시 2차. MSFT 실적 직전 23:50 추가 매수는 리스크 헷지로 손절 $201 엄수.",
          "catalysts": [
            "4/29 MSFT 캡엑스 가이던스 발표 (22:30 ET 컨콜)",
            "4/29 GOOGL 클라우드 매출 가이던스",
            "HBM3E 공급가 인상 협상 5월 마무리"
          ],
          "risks": [
            "MSFT 캡엑스 컨센서스 미스 시 갭다운 -3% 이상",
            "GOOGL TPU v6 강조 → GPU 대체 우려 재점화",
            "연승 피로도 + 모멘텀 펀드 차익실현"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 1380,
              "sentiment": 0.74
            },
            {
              "sub": "stocks",
              "count": 485,
              "sentiment": 0.66
            },
            {
              "sub": "investing",
              "count": 312,
              "sentiment": 0.61
            }
          ],
          "news_headlines": [
            {
              "title": "NVIDIA poised for 'biggest week' as MSFT, GOOGL capex calls loom",
              "source": "Bloomberg",
              "ago": "2h"
            },
            {
              "title": "Bernstein raises NVDA target to $275, cites HBM3E shortage as ASP tailwind",
              "source": "Reuters",
              "ago": "6h"
            },
            {
              "title": "Hyperscaler 2026 AI capex tracking +28% YoY, all eyes on MSFT",
              "source": "WSJ",
              "ago": "14h"
            }
          ],
          "trend_surge_pct": 42,
          "options_detail": {
            "call_volume": 328000,
            "put_volume": 94000,
            "cp_ratio": 3.5,
            "smart_money_ratio": 0.79,
            "unusual": true
          },
          "quadrant": "hot"
        },
        {
          "rank": 2,
          "ticker": "MSFT",
          "name": "Microsoft Corporation",
          "sector": "Mega Tech",
          "sector_full": "Mega-Cap Tech",
          "price": 472.6,
          "change_pct": 0.4,
          "score_total": 85.2,
          "score_reddit": 74,
          "score_news": 92,
          "score_trends": 80,
          "score_options": 95,
          "claude_rank": 2,
          "claude_summary": "내일 새벽 4/29 컨콜이 핵심 이벤트예요. Azure +33% 성장 + 캡엑스 +25% 상향 시 NVDA·AVGO·MRVL 동반 랠리 트리거.",
          "claude_signals": [
            "4/29 22:30 ET 컨콜·Azure YoY 성장률 핵심",
            "캡엑스 가이던스 추가 상향 컨센서스 형성",
            "Copilot ARR $20B 돌파 가능성"
          ],
          "narrative": "내일 새벽이 진짜 디시전 데이예요. Azure YoY 성장률이 33% 이상 + 캡엑스 +25% 상향이 동시에 나오면 AI 인프라 전체가 리레이팅돼요. 리테일은 'MSFT는 보수적이라 IV 낮은데 보상은 가장 큼'이라는 헷지 트레이드 추천 중. 옵션 콜 IV 28%로 NVDA(58%) 대비 절반이라 변동성 매수 자리도 매력적이에요.",
          "entry": 471,
          "tp1": 485,
          "tp2": 498,
          "sl": 463,
          "entry_comment": "실적 전 포지션은 옵션이 더 유리. 주식 매수는 컨콜 후 가이던스 확인 후 시간외 +2% 이내일 때.",
          "catalysts": [
            "4/29 22:30 ET FY3Q 컨콜",
            "Azure YoY +33% 컨센서스",
            "Copilot ARR + 캡엑스 가이던스 동시 발표"
          ],
          "risks": [
            "Azure 성장률 30% 하회 시 갭다운 -5%",
            "캡엑스 가이던스 동결 → AI 인프라 전체 매물",
            "CoreWeave·Oracle 클라우드 점유율 잠식 지표"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 420,
              "sentiment": 0.62
            },
            {
              "sub": "stocks",
              "count": 680,
              "sentiment": 0.71
            },
            {
              "sub": "investing",
              "count": 540,
              "sentiment": 0.69
            }
          ],
          "news_headlines": [
            {
              "title": "Microsoft Q3 preview: All eyes on Azure growth and AI capex",
              "source": "CNBC",
              "ago": "4h"
            },
            {
              "title": "Wedbush bullish into MSFT print, sees $550 in 12 months",
              "source": "Yahoo Finance",
              "ago": "9h"
            },
            {
              "title": "Copilot Studio enterprise penetration accelerating, channel checks",
              "source": "Morgan Stanley note",
              "ago": "1d"
            }
          ],
          "trend_surge_pct": 58,
          "options_detail": {
            "call_volume": 172000,
            "put_volume": 68000,
            "cp_ratio": 2.5,
            "smart_money_ratio": 0.74,
            "unusual": true
          },
          "quadrant": "hot"
        },
        {
          "rank": 3,
          "ticker": "MRVL",
          "name": "Marvell Technology",
          "sector": "Semi",
          "sector_full": "Semiconductors",
          "price": 151.2,
          "change_pct": 1.8,
          "score_total": 83.6,
          "score_reddit": 78,
          "score_news": 88,
          "score_trends": 82,
          "score_options": 86,
          "claude_rank": 3,
          "claude_summary": "GOOGL 4/29 컨콜에서 'Marvell' 직접 언급 시 +10% 갭업 가능. 지금이 마지막 매수 자리예요.",
          "claude_signals": [
            "GOOGL TPU v6 + Marvell MPU 파트너십 공식화",
            "TSMC 2nm 캐파 우선 할당 선점",
            "커스텀 실리콘 ASIC 매출 비중 +35%"
          ],
          "narrative": "히든엣지가 메인 무대로 올라오는 중이에요. 내일 GOOGL 컨콜에서 'Marvell' 명시적 언급되면 +10% 갭업 가능성이 시장 기대치예요. 리테일은 아직 NVDA 그늘에 가려 언급량 NVDA의 1/4 수준이지만, 옵션 콜플로우는 평균대비 3.5배로 스마트머니가 먼저 진입 중인 구간이에요.",
          "entry": 150,
          "tp1": 159,
          "tp2": 167,
          "sl": 146.5,
          "entry_comment": "23:00 매물 소화 후 $150 분할진입 권장. GOOGL 실적 직전 23:50까지 추가 매수, 컨콜 직후 시간외 모니터링.",
          "catalysts": [
            "4/29 GOOGL 컨콜에서 Marvell 직접 언급 가능성",
            "TSMC 2nm Risk Production Q3 시작",
            "커스텀 ASIC 매출 비중 35% → 5월 가이던스에서 명시"
          ],
          "risks": [
            "GOOGL이 'in-house only' 강조 시 -8% 갭다운",
            "Broadcom AVGO와의 ASIC 경쟁 격화",
            "FY 가이던스 보수적 발표 시 모멘텀 둔화"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 340,
              "sentiment": 0.68
            },
            {
              "sub": "stocks",
              "count": 210,
              "sentiment": 0.65
            },
            {
              "sub": "semiconductors",
              "count": 180,
              "sentiment": 0.72
            }
          ],
          "news_headlines": [
            {
              "title": "Marvell rallies 1.8% on Google TPU partnership chatter",
              "source": "Bloomberg",
              "ago": "3h"
            },
            {
              "title": "Citi adds MRVL to top picks, $190 PT on custom silicon ramp",
              "source": "Reuters",
              "ago": "7h"
            },
            {
              "title": "Custom ASIC market 2027 TAM raised to $35B by Wells Fargo",
              "source": "Investor's Business Daily",
              "ago": "1d"
            }
          ],
          "trend_surge_pct": 71,
          "options_detail": {
            "call_volume": 98000,
            "put_volume": 24000,
            "cp_ratio": 4.1,
            "smart_money_ratio": 0.82,
            "unusual": true
          },
          "quadrant": "hot"
        },
        {
          "rank": 4,
          "ticker": "GOOGL",
          "name": "Alphabet Inc.",
          "sector": "Mega Tech",
          "sector_full": "Mega-Cap Tech",
          "price": 182.4,
          "change_pct": 0.7,
          "score_total": 81.5,
          "score_reddit": 68,
          "score_news": 89,
          "score_trends": 78,
          "score_options": 91,
          "claude_rank": 4,
          "claude_summary": "4/29 컨콜이 D-day. 광고+클라우드+AI Overview 트리플 비트면 $200 돌파, 미스면 -7% 컷. IV 47%.",
          "claude_signals": [
            "4/29 22:30 ET FY1Q 컨콜",
            "Search 광고 매출 YoY +13% 컨센",
            "클라우드 매출 YoY +30% 가이던스 핵심"
          ],
          "narrative": "내일 컨콜은 '광고 + 클라우드 + AI 오버뷰 수익화' 3박자가 모두 가시화되는지가 관건이에요. 트리플 비트면 $200 저항 돌파, 미스 하나만 나와도 -5~7% 갭다운 리스크. 옵션 IV 47%는 MSFT 28%보다 부담 크지만 그만큼 기대치도 큰 구간이에요.",
          "entry": 181.5,
          "tp1": 192,
          "tp2": 201,
          "sl": 177.5,
          "entry_comment": "실적 전 신규 진입은 옵션 콜스프레드가 안전. 보유자는 부분 익절 + 쇼트레그로 헷지 권장.",
          "catalysts": [
            "4/29 22:30 ET 컨콜",
            "Search 광고 +13% YoY 컨센",
            "Cloud +30% + AI 오버뷰 ARPU 첫 공개"
          ],
          "risks": [
            "광고 매출 미스 시 -7% 갭다운",
            "DOJ 검색 분할 명령 가능성 5월",
            "TPU v6 in-house 강조 시 MRVL 동반 매물"
          ],
          "reddit_sentiment_label": "중립",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 380,
              "sentiment": 0.52
            },
            {
              "sub": "stocks",
              "count": 290,
              "sentiment": 0.58
            },
            {
              "sub": "investing",
              "count": 210,
              "sentiment": 0.6
            }
          ],
          "news_headlines": [
            {
              "title": "Alphabet's Q1 print: ad resilience meets AI capex test",
              "source": "WSJ",
              "ago": "2h"
            },
            {
              "title": "Wells Fargo holds $215 PT on GOOGL, flags DOJ overhang",
              "source": "Reuters",
              "ago": "8h"
            },
            {
              "title": "Cloud growth seen pivotal as MSFT race tightens",
              "source": "Bloomberg",
              "ago": "11h"
            }
          ],
          "trend_surge_pct": 64,
          "options_detail": {
            "call_volume": 228000,
            "put_volume": 102000,
            "cp_ratio": 2.2,
            "smart_money_ratio": 0.71,
            "unusual": true
          },
          "quadrant": "hidden"
        },
        {
          "rank": 5,
          "ticker": "AVGO",
          "name": "Broadcom Inc.",
          "sector": "Semi",
          "sector_full": "Semiconductors",
          "price": 1742,
          "change_pct": 1.1,
          "score_total": 79.8,
          "score_reddit": 66,
          "score_news": 85,
          "score_trends": 74,
          "score_options": 88,
          "claude_rank": 5,
          "claude_summary": "MSFT 캡엑스 상향이면 가장 빠르게 +5% 따라가는 베타. ASIC + 네트워킹 더블엔진 작동 중이에요.",
          "claude_signals": [
            "하이퍼스케일러 ASIC 수주 4개사 동시 진행",
            "Tomahawk 6 네트워킹 칩 양산 시작",
            "VMware 시너지 매출 50% 가시화"
          ],
          "narrative": "MSFT 캡엑스가 +20% 이상 상향이면 AVGO가 NVDA·MRVL과 함께 가장 빠르게 따라가는 베타예요. 4개 하이퍼스케일러와 동시에 ASIC 진행 중이고, Tomahawk 6 네트워킹 칩이 양산 시작되며 매출 mix 개선 중. 리테일은 비싸다고 패스하지만 기관은 '제2의 NVDA'로 보강 중이에요.",
          "entry": 1735,
          "tp1": 1810,
          "tp2": 1880,
          "sl": 1705,
          "entry_comment": "개장 후 $1735 분할진입 권장, MSFT 실적 직전 $1740 돌파 시 추격 매수 가능. 손절 $1705.",
          "catalysts": [
            "MSFT 캡엑스 +25% 시 동반 +5%",
            "Tomahawk 6 양산 매출 Q3 인식",
            "VMware Cloud Foundation 갱신 사이클"
          ],
          "risks": [
            "주가 절대 레벨 부담 → 회복 시 단기 차익실현",
            "ASIC 경쟁사 MRVL과 마진 압박",
            "VMware 가격 정책 비판 → 일부 고객 이탈 우려"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 210,
              "sentiment": 0.58
            },
            {
              "sub": "stocks",
              "count": 340,
              "sentiment": 0.65
            },
            {
              "sub": "semiconductors",
              "count": 160,
              "sentiment": 0.7
            }
          ],
          "news_headlines": [
            {
              "title": "Broadcom expands ASIC pipeline to four hyperscalers",
              "source": "Bloomberg",
              "ago": "5h"
            },
            {
              "title": "Tomahawk 6 ramp adds $4B revenue tailwind, says Goldman",
              "source": "Reuters",
              "ago": "10h"
            },
            {
              "title": "AVGO PT raised to $1900 at Mizuho citing custom silicon",
              "source": "Yahoo Finance",
              "ago": "1d"
            }
          ],
          "trend_surge_pct": 48,
          "options_detail": {
            "call_volume": 86000,
            "put_volume": 28000,
            "cp_ratio": 3.1,
            "smart_money_ratio": 0.77,
            "unusual": true
          },
          "quadrant": "hidden"
        },
        {
          "rank": 6,
          "ticker": "AMD",
          "name": "Advanced Micro Devices",
          "sector": "Semi",
          "sector_full": "Semiconductors",
          "price": 172.8,
          "change_pct": 0.8,
          "score_total": 76.4,
          "score_reddit": 74,
          "score_news": 78,
          "score_trends": 76,
          "score_options": 78,
          "claude_rank": null,
          "claude_summary": "MI355X 실수요는 강하지만 NVDA·MRVL 트리플 카탈리스트 그늘에 가린 '준대장'이에요. 스왑 트레이드 후보.",
          "claude_signals": [
            "MI355X 양산 본격 램프",
            "5월 Advancing AI 이벤트 D-3주",
            "연속 17세션 상승 후 첫 횡보"
          ],
          "narrative": "반도체 섹터가 17세션째 상승 중이라 추격은 부담스럽지만, AMD는 5월 Advancing AI 이벤트(D-3주)가 주가 트리거로 남아있어요. NVDA·MRVL 그늘에 가려 '준대장' 위치라 단기 스왑 트레이드 후보로 적합해요.",
          "entry": 171,
          "tp1": 178,
          "tp2": 185,
          "sl": 167.5,
          "entry_comment": "개장 후 $171 분할 진입, RSI 78 과매수 구간이라 절반만 빌드.",
          "catalysts": [
            "MI355X 양산 본격 램프",
            "5월 Advancing AI 이벤트 로드맵",
            "중국 제재 완화 협상 진전"
          ],
          "risks": [
            "연속 17세션 상승 피로도 / 모멘텀 펀드 차익실현",
            "NVDA Vera Rubin 발표 시 스포트라이트 이탈",
            "Iran 협상 재경색 시 반도체 매물 1순위"
          ],
          "quadrant": "hot"
        },
        {
          "rank": 7,
          "ticker": "TSLA",
          "name": "Tesla Inc.",
          "sector": "EV / Auto",
          "sector_full": "EV / Auto",
          "price": 238.6,
          "change_pct": 1.4,
          "score_total": 74.8,
          "score_reddit": 80,
          "score_news": 62,
          "score_trends": 78,
          "score_options": 80,
          "claude_rank": null,
          "claude_summary": "4/22 캡엑스 쇼크 -8% 후 $235에서 트리플 바텀 형성 중. 단기 반등은 있지만 신뢰 회복은 5월 로보택시 데이까지 보류.",
          "claude_signals": [
            "$235 트리플 바텀 형성",
            "Robotaxi Day 5/15 D-2주반",
            "FSD v13 안정화 데이터 호조"
          ],
          "narrative": "4/22 -8% 갭다운 후 $235 지지에서 4세션째 횡보 중이에요. Robotaxi Day(5/15)까지 약 2주반 남았고, FSD v13 데이터가 안정화되며 리테일 컨피던스 회복 중. 다만 신규 주문 데이터가 나올 때까지 기관은 관망 모드라 모멘텀 회복은 더딜 가능성이 커요.",
          "entry": 237,
          "tp1": 248,
          "tp2": 258,
          "sl": 233,
          "entry_comment": "$235 지지 재확인 후 $237에서 분할진입. 손절 $233 이탈 시 즉시 컷.",
          "catalysts": [
            "5/15 Robotaxi Day 공개",
            "FSD v13 GA 출시",
            "Cybertruck 누적 인도 5만대 마일스톤"
          ],
          "risks": [
            "캡엑스 가이던스 추가 하향 시 신뢰 한 번 더",
            "Q1 인도 데이터 컨센 미스",
            "머스크 X CEO 겸직 이슈 재점화"
          ],
          "quadrant": "overheat"
        },
        {
          "rank": 8,
          "ticker": "PLTR",
          "name": "Palantir Technologies",
          "sector": "AI Software",
          "sector_full": "AI Software",
          "price": 134.5,
          "change_pct": -0.3,
          "score_total": 73.2,
          "score_reddit": 86,
          "score_news": 68,
          "score_trends": 80,
          "score_options": 62,
          "claude_rank": null,
          "claude_summary": "리테일 1순위 종목이지만 PER 175x로 멀티플 부담. Q1 실적(5/5) 전까지 박스권 트레이딩이 현실적이에요.",
          "claude_signals": [
            "Q1 실적 5/5 발표 D-1주",
            "미국방·NHS 신규 수주 헤드라인",
            "RSI 72 + IV 56 — 과열 시그널"
          ],
          "narrative": "리테일 1순위 종목으로 WSB 언급량 1위 자리는 굳건하지만, PER 175x + 옵션 IV 56%는 명확한 과열 신호예요. Q1 실적(5/5)까지 박스권 $130~$140 트레이딩이 합리적이고, 추격은 5/5 실적 가이던스 확인 후가 안전해요.",
          "entry": 132.5,
          "tp1": 138,
          "tp2": 143,
          "sl": 129,
          "entry_comment": "$132 지지 재확인 후 분할진입, 실적 직전 신규 매수 금지.",
          "catalysts": [
            "5/5 Q1 실적",
            "미국방 신규 계약 헤드라인",
            "NHS 영국 본계약 체결"
          ],
          "risks": [
            "PER 175x 멀티플 압박",
            "Q1 가이던스 컨센서스 하회 시 -10%",
            "옵션 IV 56 → 실적 후 IV 크러시"
          ],
          "quadrant": "overheat"
        },
        {
          "rank": 9,
          "ticker": "NBIS",
          "name": "Nebius Group N.V.",
          "sector": "AI Infra",
          "sector_full": "AI Infrastructure",
          "price": 48.2,
          "change_pct": 2.6,
          "score_total": 72.8,
          "score_reddit": 92,
          "score_news": 66,
          "score_trends": 94,
          "score_options": 40,
          "claude_rank": null,
          "claude_summary": "4월 +50% 후 한 차례 조정 끝나고 재차 상승 중. AI21 인수 + Meta 27B 시너지 + NVDA 2B 투자. 단기 추격은 위험.",
          "claude_signals": [
            "AI21 인수 발표 4/24",
            "Meta 27B 캐파 재계약",
            "NVDA 2B 투자 + 6.7% 지분"
          ],
          "narrative": "4월 +50% 급등 후 4/23~24 -7% 조정 끝나고 다시 상승 재개 중이에요. AI21 인수 시너지·Meta 27B 캐파·NVDA 2B 투자라는 트리플 카탈리스트가 살아있지만, RSI 78 + 옵션 P/C 1.9는 명확한 과열 신호. 추격보다 다음 조정에서 매수가 안전해요.",
          "entry": 47,
          "tp1": 52,
          "tp2": 56,
          "sl": 45,
          "entry_comment": "오늘 추격 매수 금지. $45 조정 시 분할진입 대기.",
          "catalysts": [
            "AI21 인수 시너지 매출 Q3 인식",
            "Meta 27B 캐파 재계약",
            "유럽 AI 인프라 보조금 협상 진전"
          ],
          "risks": [
            "RSI 78 과열 + 차익실현 매도벽",
            "Meta 자체 캐파 확장 시 의존도 우려",
            "옵션 P/C 1.9 → 단기 풋 헷지 활발"
          ],
          "quadrant": "overheat"
        },
        {
          "rank": 10,
          "ticker": "MSTR",
          "name": "MicroStrategy Inc.",
          "sector": "Crypto",
          "sector_full": "Crypto / Bitcoin",
          "price": 1652,
          "change_pct": 1.6,
          "score_total": 71.4,
          "score_reddit": 88,
          "score_trends": 76,
          "score_news": 68,
          "score_options": 54,
          "claude_rank": null,
          "claude_summary": "BTC $84K 재돌파 + 5/8 ETF 유동성 추가 = 한 번 더 모멘텀. 다만 MSTR 프리미엄 1.8x는 부담.",
          "claude_signals": [
            "BTC $84K 재돌파 임박",
            "5/8 BTC 마이크로 ETF 추가 상장",
            "6월 NAV 프리미엄 추가 매수 5억 달러 발표"
          ],
          "narrative": "BTC가 $84K 재돌파 시 MSTR 단기 모멘텀 한 번 더 가능해요. 다만 NAV 프리미엄 1.8x는 역사적 평균 1.4x 대비 30% 비싸고, 5/8 마이크로 ETF 추가 상장 후 유동성 분산 시 프리미엄 축소 리스크가 있어요. 단기 트레이드 외에는 보유 비중 줄이는 전략이 합리적이에요.",
          "entry": 1640,
          "tp1": 1720,
          "tp2": 1800,
          "sl": 1605,
          "entry_comment": "$1640 지지 확인 후 분할진입, BTC $80K 이탈 시 즉시 손절.",
          "catalysts": [
            "BTC $84K 재돌파",
            "5/8 BTC 마이크로 ETF 상장",
            "6월 추가 매수 5억 달러 발표"
          ],
          "risks": [
            "NAV 프리미엄 1.8x 부담",
            "ETF 상장 후 유동성 분산",
            "BTC $80K 이탈 시 -15% 압박"
          ],
          "quadrant": "overheat"
        },
        {
          "rank": 11,
          "ticker": "AAPL",
          "name": "Apple Inc.",
          "sector": "Mega Tech",
          "sector_full": "Mega-Cap Tech",
          "price": 231.5,
          "change_pct": 0.2,
          "score_total": 68.9,
          "score_reddit": 58,
          "score_news": 74,
          "score_trends": 58,
          "score_options": 86,
          "claude_rank": null,
          "claude_summary": null,
          "claude_signals": [],
          "narrative": null,
          "entry": null,
          "tp1": null,
          "tp2": null,
          "sl": null,
          "entry_comment": null,
          "catalysts": [],
          "risks": [],
          "quadrant": "hidden"
        },
        {
          "rank": 12,
          "ticker": "COIN",
          "name": "Coinbase Global",
          "sector": "Crypto",
          "sector_full": "Crypto / Bitcoin",
          "price": 248.2,
          "change_pct": 1.2,
          "score_total": 67.6,
          "score_reddit": 76,
          "score_news": 62,
          "score_trends": 74,
          "score_options": 58,
          "claude_rank": null,
          "claude_summary": null,
          "claude_signals": [],
          "narrative": null,
          "entry": null,
          "tp1": null,
          "tp2": null,
          "sl": null,
          "entry_comment": null,
          "catalysts": [],
          "risks": [],
          "quadrant": "overheat"
        },
        {
          "rank": 13,
          "ticker": "META",
          "name": "Meta Platforms",
          "sector": "Mega Tech",
          "sector_full": "Mega-Cap Tech",
          "price": 598.4,
          "change_pct": -0.5,
          "score_total": 66.5,
          "score_reddit": 54,
          "score_news": 76,
          "score_trends": 56,
          "score_options": 80,
          "claude_rank": null,
          "claude_summary": null,
          "claude_signals": [],
          "narrative": null,
          "entry": null,
          "tp1": null,
          "tp2": null,
          "sl": null,
          "entry_comment": null,
          "catalysts": [],
          "risks": [],
          "quadrant": "hidden"
        },
        {
          "rank": 14,
          "ticker": "AMZN",
          "name": "Amazon.com",
          "sector": "Mega Tech",
          "sector_full": "Mega-Cap Tech",
          "price": 214.6,
          "change_pct": 0.6,
          "score_total": 65.2,
          "score_reddit": 52,
          "score_news": 74,
          "score_trends": 58,
          "score_options": 76,
          "claude_rank": null,
          "claude_summary": null,
          "claude_signals": [],
          "narrative": null,
          "entry": null,
          "tp1": null,
          "tp2": null,
          "sl": null,
          "entry_comment": null,
          "catalysts": [],
          "risks": [],
          "quadrant": "hidden"
        },
        {
          "rank": 15,
          "ticker": "RKLB",
          "name": "Rocket Lab USA",
          "sector": "Space",
          "sector_full": "Space & Comm",
          "price": 29.4,
          "change_pct": 2.1,
          "score_total": 64.8,
          "score_reddit": 74,
          "score_news": 58,
          "score_trends": 78,
          "score_options": 48,
          "claude_rank": null,
          "claude_summary": null,
          "claude_signals": [],
          "narrative": null,
          "entry": null,
          "tp1": null,
          "tp2": null,
          "sl": null,
          "entry_comment": null,
          "catalysts": [],
          "risks": [],
          "quadrant": "overheat"
        },
        {
          "rank": 16,
          "ticker": "SOFI",
          "name": "SoFi Technologies",
          "sector": "Fintech",
          "sector_full": "Fintech / Platform",
          "price": 15.4,
          "change_pct": 1,
          "score_total": 63.4,
          "score_reddit": 62,
          "score_news": 68,
          "score_trends": 54,
          "score_options": 70,
          "claude_rank": null,
          "claude_summary": null,
          "claude_signals": [],
          "narrative": null,
          "entry": null,
          "tp1": null,
          "tp2": null,
          "sl": null,
          "entry_comment": null,
          "catalysts": [],
          "risks": [],
          "quadrant": "watch"
        },
        {
          "rank": 17,
          "ticker": "TSM",
          "name": "Taiwan Semiconductor",
          "sector": "Semi",
          "sector_full": "Semiconductors",
          "price": 192.6,
          "change_pct": 0.9,
          "score_total": 62.9,
          "score_reddit": 48,
          "score_news": 74,
          "score_trends": 54,
          "score_options": 76,
          "claude_rank": null,
          "claude_summary": null,
          "claude_signals": [],
          "narrative": null,
          "entry": null,
          "tp1": null,
          "tp2": null,
          "sl": null,
          "entry_comment": null,
          "catalysts": [],
          "risks": [],
          "quadrant": "hidden"
        },
        {
          "rank": 18,
          "ticker": "GME",
          "name": "GameStop Corp.",
          "sector": "Meme",
          "sector_full": "Meme / Retail",
          "price": 24.8,
          "change_pct": -2.1,
          "score_total": 61.5,
          "score_reddit": 94,
          "score_news": 42,
          "score_trends": 86,
          "score_options": 24,
          "claude_rank": null,
          "claude_summary": null,
          "claude_signals": [],
          "narrative": null,
          "entry": null,
          "tp1": null,
          "tp2": null,
          "sl": null,
          "entry_comment": null,
          "catalysts": [],
          "risks": [],
          "quadrant": "overheat"
        },
        {
          "rank": 19,
          "ticker": "ASTS",
          "name": "AST SpaceMobile",
          "sector": "Space",
          "sector_full": "Space & Comm",
          "price": 18.6,
          "change_pct": -1.6,
          "score_total": 60.2,
          "score_reddit": 78,
          "score_news": 52,
          "score_trends": 68,
          "score_options": 42,
          "claude_rank": null,
          "claude_summary": null,
          "claude_signals": [],
          "narrative": null,
          "entry": null,
          "tp1": null,
          "tp2": null,
          "sl": null,
          "entry_comment": null,
          "catalysts": [],
          "risks": [],
          "quadrant": "watch"
        },
        {
          "rank": 20,
          "ticker": "SMCI",
          "name": "Super Micro Computer",
          "sector": "AI Infra",
          "sector_full": "AI Infrastructure",
          "price": 58.4,
          "change_pct": 1.3,
          "score_total": 59.6,
          "score_reddit": 68,
          "score_news": 54,
          "score_trends": 62,
          "score_options": 54,
          "claude_rank": null,
          "claude_summary": null,
          "claude_signals": [],
          "narrative": null,
          "entry": null,
          "tp1": null,
          "tp2": null,
          "sl": null,
          "entry_comment": null,
          "catalysts": [],
          "risks": [],
          "quadrant": "watch"
        }
      ]
    },
    "2026-04-23": {
      "date": "2026-04-23",
      "date_display": "2026-04-23 (목요일·미국장)",
      "market_mood": "neutral",
      "market_mood_score": 58,
      "market_summary": "어제 S&P·Nasdaq 신고가 뒤 오늘 프리마켓은 Iran 협상 정체 + TSLA 캡엑스 쇼크로 조정 분위기예요. 반도체·AI 인프라는 11~16세션 연속 상승으로 과열 경계 필요하지만, MRVL-GOOGL 딜·ASML/TSMC 가이던스는 여전히 강세 서사 지탱해요.",
      "sector_tilt": [
        "Semiconductors",
        "AI Infrastructure",
        "Mega-Cap Tech"
      ],
      "top_ticker": "NVDA",
      "candidate_count": 20,
      "today_action": {
        "one_liner": "프리마켓 약세 눌림에서 NVDA·MRVL 분할진입하고, TSLA는 $240 지지 확인될 때까지 관망이 정답이에요.",
        "priorities": [
          {
            "icon": "🎯",
            "ticker": "NVDA",
            "text": "22:35 개장 직후 $200 근처 1차 분할진입, $198 지지 확인 후 2차. 손절 $196.5 엄수. TP1 $206 / TP2 $212."
          },
          {
            "icon": "💎",
            "ticker": "MRVL",
            "text": "23:00 이후 매물 소화 확인하고 $146-147 분할진입. GOOGL 실적(4/29) 콘콜에서 언급 기대. 손절 $143, TP1 $154 / TP2 $161."
          },
          {
            "icon": "🚨",
            "ticker": "TSLA",
            "text": "캡엑스 쇼크로 AH -4%. $240 지지 테스트 확인 전 신규 진입 금지. 물타기 절대 금지, $230 이탈 시 단기 추가 하락 경계."
          }
        ]
      },
      "routine_timeline": [
        {
          "time_kst": "21:30",
          "time_et": "08:30",
          "label": "📊 미국 신규실업수당 청구 발표 (15만예상)",
          "active": true
        },
        {
          "time_kst": "21:45",
          "time_et": "08:45",
          "label": "🔍 프리마켓 TSLA/IBM/NOW 갭다운 체크"
        },
        {
          "time_kst": "22:30",
          "time_et": "09:30",
          "label": "🔔 미국장 개장",
          "key": true
        },
        {
          "time_kst": "22:35",
          "time_et": "09:35",
          "label": "🎯 NVDA 1차 분할진입 ($200 근처)"
        },
        {
          "time_kst": "23:00",
          "time_et": "10:00",
          "label": "💎 MRVL 분할진입 ($146-147)"
        },
        {
          "time_kst": "23:30",
          "time_et": "10:30",
          "label": "📈 EIA 원유재고 발표"
        },
        {
          "time_kst": "00:30",
          "time_et": "11:30",
          "label": "🏛️ FedSpeak (Daly) 예정"
        },
        {
          "time_kst": "02:00",
          "time_et": "13:00",
          "label": "📰 TSLA $240 지지 확인 여부 체크"
        },
        {
          "time_kst": "04:00",
          "time_et": "15:00",
          "label": "⏰ 마감 1시간 전, 포지션 정리"
        },
        {
          "time_kst": "05:00",
          "time_et": "16:00",
          "label": "🔕 미국장 마감"
        },
        {
          "time_kst": "05:05",
          "time_et": "16:05",
          "label": "📊 INTC Q1 실적 AH 발표"
        },
        {
          "time_kst": "05:30",
          "time_et": "16:30",
          "label": "📝 당일 리포트 정리 + 내일 전략 노트"
        }
      ],
      "sectors": [
        {
          "name": "Semiconductors",
          "strength": 0.86,
          "ticker_count": 6
        },
        {
          "name": "AI Infrastructure",
          "strength": 0.78,
          "ticker_count": 3
        },
        {
          "name": "Mega-Cap Tech",
          "strength": 0.74,
          "ticker_count": 4
        },
        {
          "name": "Crypto / Bitcoin",
          "strength": 0.72,
          "ticker_count": 2
        },
        {
          "name": "Space & Comm",
          "strength": 0.56,
          "ticker_count": 2
        },
        {
          "name": "AI Software",
          "strength": 0.52,
          "ticker_count": 1
        },
        {
          "name": "EV / Auto",
          "strength": 0.48,
          "ticker_count": 1
        },
        {
          "name": "Fintech / Platform",
          "strength": 0.46,
          "ticker_count": 1
        }
      ],
      "claude_ranking": [
        {
          "rank": 1,
          "ticker": "NVDA",
          "reasoning": "11연속 상승 후 프리마켓 조정은 다음주 MSFT·GOOGL 실적 전 '눌림 매수' 최적 타이밍이에요.",
          "signals": [
            "11연속 상승·4월 저점 대비 2배",
            "ASML·TSMC 가이던스 캡엑스 가속 확정",
            "Blackwell Ultra 수요 견고"
          ]
        },
        {
          "rank": 2,
          "ticker": "MRVL",
          "reasoning": "GOOGL MPU+TPU 공동개발 확정으로 NVDA 대안 서사가 실체화됐어요. '재평가' 본격 단계예요.",
          "signals": [
            "GOOGL MPU+TPU 2종 공동개발",
            "한 달 +65% 급등 후 컨솔리데이션",
            "하이퍼스케일러 18개 디자인 윈"
          ]
        },
        {
          "rank": 3,
          "ticker": "TSLA",
          "reasoning": "캡엑스 쇼크로 AH -4%. 오늘은 $240 지지 이탈 여부가 '분노 매도 vs 눌림 매수' 분기점이에요.",
          "signals": [
            "EPS $0.41 비트, 매출 $22.38B 미스",
            "캡엑스 $25B 상향 (+$5B)",
            "GM 21.1% 회복 - 장기 서사 유효"
          ]
        },
        {
          "rank": 4,
          "ticker": "GOOGL",
          "reasoning": "4/29 실적 전 Gemini 3·MRVL·Waymo 3축 모두 상향 가능. Mag7 중 가장 높은 적중률이에요.",
          "signals": [
            "4/29 Q1 실적 컨센 EPS 상향",
            "MRVL MPU/TPU 파트너십 확정",
            "Waymo 5월 런칭 지역 추가"
          ]
        },
        {
          "rank": 5,
          "ticker": "MSTR",
          "reasoning": "BTC $78K + $2.54B 추가 매수로 최대 BTC 보유자. 극단 불리시지만 현금 버퍼 경계 필수예요.",
          "signals": [
            "BTC $78K 상회, 4월 +37%",
            "$2.54B 매수 → 717k BTC 보유",
            "Stocktwits 'extremely bullish' 구간"
          ]
        }
      ],
      "hidden_edges": [
        {
          "ticker": "MRVL",
          "reason": "GOOGL MPU+TPU 파트너십이 공식화됐지만 시장은 아직 '단기 반도체 테마'로만 소비 중이에요. 4/29 GOOGL 실적에서 MRVL 직접 언급 나오면 '장기 파트너' 재평가로 한 단계 더 갈 확률 높아요."
        },
        {
          "ticker": "RKLB",
          "reason": "SpaceX $2T IPO 임박 스토리가 스페이스 섹터 전체 리레이팅 촉매 중인데, RKLB는 ASTS 대비 실제 런치 캐던스(Electron+Neutron)와 위성 통신 밴드 확보에서 앞서요. WSB 2026 Top 10 편입에도 차트는 아직 거래량 확인 안 된 구간이에요."
        },
        {
          "ticker": "SOFI",
          "reason": "고금리 피크아웃 + 학자금 대출 재개·리파이 수요 회복에 리테일 뱅킹 베타로 가장 저평가된 핀테크예요. PLTR·MSTR 뒤에 가려져 WSB에서 언급량 소폭이지만 Q1 실적 대기 중 조용한 축적 구간이에요."
        }
      ],
      "overheated": [
        {
          "ticker": "NBIS",
          "reason": "4월 한 달 +50% 급등, Meta 27B + NVDA 2B + AI21 인수설 3연타로 리테일 언급량 급증했지만 RSI 78 + 콜볼륨 평균대비 4배. 21:30 기준 갭업 3% 이상이면 신규 진입 금지, 보유자는 트레일링 스톱 설정 권장."
        },
        {
          "ticker": "ASTS",
          "reason": "4/20 BlueBird 7 위성 실패 후 -1.2% 조정에도 여전히 '급등 후 하락 바운스' 단계. WSB 언급량은 +1,214% 폭증했다가 감소 중, 센티먼트 반전 리스크 구간이에요."
        },
        {
          "ticker": "PLTR",
          "reason": "AI 소프트웨어 대장주로 리테일 PLTR 팬덤은 강하지만 PER 170x + 성장률 +30%YoY는 멀티플 압박 재개 시 취약. 옵션 IV 50대로 이벤트 없이 과열 구간이에요."
        }
      ],
      "tickers": [
        {
          "rank": 1,
          "ticker": "NVDA",
          "name": "NVIDIA Corporation",
          "sector": "Semi",
          "sector_full": "Semiconductors",
          "price": 201.7,
          "change_pct": 1.9,
          "score_total": 89.3,
          "score_reddit": 86,
          "score_news": 92,
          "score_trends": 84,
          "score_options": 95,
          "quadrant": "hot",
          "claude_rank": 1,
          "claude_summary": "AI 인프라 대장. 11연속 상승 → 프리마켓 약세는 다음주 MSFT·GOOGL 실적 전 '눌림 매수' 타이밍이에요.",
          "claude_signals": [
            "11연속 상승·4월 저점 대비 2배",
            "ASML·TSMC 가이던스 캡엑스 가속 확정",
            "커스텀 실리콘 우려에도 Blackwell Ultra 수요 견고"
          ],
          "narrative": "11세션 연속 상승으로 4월 저점 대비 약 2배 랠리 중인데 오늘 프리마켓은 이란 협상 정체·TSLA 쇼크로 소폭 조정이에요. 리테일은 '5/20 실적까지 홀드' 내지는 '눌림 추가매수'로 단단히 포지셔닝 돼있고, 기관은 ASML·TSMC의 캡엑스 가이던스 가속을 근거로 데이터센터 TAM 상향 중이에요. 어제 기록한 $201.68을 이탈하지만 않으면 다음주 MSFT·GOOGL 실적 전 재차 신고가 시도 가능성 높아요.",
          "entry": 199.5,
          "tp1": 206,
          "tp2": 212,
          "sl": 196.5,
          "entry_comment": "프리마켓 약세 노려서 개장 후 22:35 $200 근처 1차, $198 지지 확인 시 2차. 손절은 $196.5.",
          "catalysts": [
            "다음주 MSFT(4/29)·GOOGL(4/29) 캡엑스 언급",
            "Vera Rubin 플랫폼 본격 배포",
            "TSMC 3nm 캐패시티 확장 발표 임박"
          ],
          "risks": [
            "Iran 협상 교착 시 리스크-오프 재개",
            "GOOGL-MRVL 파트너십이 GPU 대안 부각",
            "11연승 피로도 누적 - 차익실현 매도벽"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 1120,
              "sentiment": 0.68
            },
            {
              "sub": "stocks",
              "count": 420,
              "sentiment": 0.62
            },
            {
              "sub": "investing",
              "count": 280,
              "sentiment": 0.58
            }
          ],
          "news_headlines": [
            {
              "title": "NVIDIA extends 11-session win streak as AI capex narrative strengthens",
              "source": "Bloomberg",
              "ago": "3h"
            },
            {
              "title": "Analyst raises NVDA target to $266 citing Vera Rubin traction",
              "source": "Yahoo Finance",
              "ago": "8h"
            },
            {
              "title": "Hyperscalers confirm $600B 2026 AI capex commitment",
              "source": "Reuters",
              "ago": "1d"
            }
          ],
          "trend_surge_pct": 38,
          "options_detail": {
            "call_volume": 312000,
            "put_volume": 98000,
            "cp_ratio": 3.2,
            "smart_money_ratio": 0.76,
            "unusual": true
          }
        },
        {
          "rank": 2,
          "ticker": "MRVL",
          "name": "Marvell Technology",
          "sector": "Semi",
          "sector_full": "Semiconductors",
          "price": 148.2,
          "change_pct": 1.6,
          "score_total": 87.8,
          "score_reddit": 90,
          "score_news": 94,
          "score_trends": 92,
          "score_options": 85,
          "quadrant": "hot",
          "claude_rank": 2,
          "claude_summary": "GOOGL MPU·TPU 공동개발 확정으로 NVDA 대안 서사가 실체화. '재평가' 본격 단계예요.",
          "claude_signals": [
            "GOOGL MPU+TPU 2종 공동개발",
            "4월 한 달 +65% 급등 후 컨솔리데이션",
            "하이퍼스케일러 18개 디자인 윈 확보"
          ],
          "narrative": "4/20 GOOGL과 메모리 프로세싱 유닛(MPU) + TPU 공동개발 계약이 공식화되면서 '엔비디아 대안' 스토리가 실제 매출 파이프로 연결됐어요. 리테일은 '다음 AVGO'라 부르며 진입 타이밍을 묻는 글이 폭증 중이고, 기관은 커스텀 실리콘 TAM 계산을 다시 쓰고 있어요. 최근 +65% 급등 후 $145-150 박스에서 숨고르기 중인데, 다음주 GOOGL 실적에서 MRVL 언급 나올 확률이 커서 추가 상방 여력 남았어요.",
          "entry": 146.5,
          "tp1": 154,
          "tp2": 161,
          "sl": 143,
          "entry_comment": "개장 갭 여부 보고 22:45~23:00 조정 타이밍 분할진입. $143 이탈 시 손절, 돌파 시 $154 1차.",
          "catalysts": [
            "4/29 GOOGL 실적 콘콜에서 MRVL 파트너십 언급 가능성",
            "MSFT Maia·AWS Trainium3 램프 가속",
            "5월 분기실적(6월 초) 가이던스 상향 기대"
          ],
          "risks": [
            "4월 +65% 단기 과열 구간, 프로피 테이킹 언제든 가능",
            "커스텀 실리콘 매출 확인까지 12개월+ 소요",
            "반도체 전반 리스크-오프 때 베타 높음"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 980,
              "sentiment": 0.81
            },
            {
              "sub": "stocks",
              "count": 310,
              "sentiment": 0.74
            },
            {
              "sub": "SemiConductors",
              "count": 185,
              "sentiment": 0.78
            }
          ],
          "news_headlines": [
            {
              "title": "Marvell adds $5B market cap on Google AI chip partnership",
              "source": "TheStreet",
              "ago": "2d"
            },
            {
              "title": "Alphabet-Marvell co-develop MPU and next-gen TPU for inference",
              "source": "Reuters",
              "ago": "3d"
            },
            {
              "title": "MRVL targets complete memory chip design within 12 months",
              "source": "Bloomberg",
              "ago": "3d"
            }
          ],
          "trend_surge_pct": 74,
          "options_detail": {
            "call_volume": 195000,
            "put_volume": 48000,
            "cp_ratio": 4.1,
            "smart_money_ratio": 0.72,
            "unusual": true
          }
        },
        {
          "rank": 3,
          "ticker": "TSLA",
          "name": "Tesla, Inc.",
          "sector": "EV/Auto",
          "sector_full": "EV / Auto / Autonomy",
          "price": 245.3,
          "change_pct": -4.8,
          "score_total": 86.1,
          "score_reddit": 96,
          "score_news": 95,
          "score_trends": 94,
          "score_options": 90,
          "quadrant": "hot",
          "claude_rank": 3,
          "claude_summary": "Q1 EPS $0.41로 비트했지만 캡엑스 $25B 가이던스에 AH -4%. 오늘은 '분노 매도 vs 눌림 매수' 분기점이에요.",
          "claude_signals": [
            "EPS $0.41 vs $0.37 컨센 비트, 매출 $22.38B 소폭 미스",
            "캡엑스 2026 $25B로 +$5B 상향, FCF 압박",
            "GM 21.1% (+478bps) - 마진 회복 서사는 유효"
          ],
          "narrative": "어제 장 마감 후 Q1 실적에서 EPS $0.41로 컨센 비트했고 GM도 21.1%로 회복했는데, 콘콜에서 2026 캡엑스를 $25B(이전 $20B)로 상향 발표하며 +4%에서 -4%로 반전했어요. 리테일은 'Musk가 Optimus/Robotaxi에 투자 늘리는 건 장기 호재'라고 옹호 중이고, 기관은 재고 5만대 적체·에너지 스토리지 -38% QoQ를 들며 단기 FCF 압박 경계하고 있어요. 오늘 $240 지지 이탈 여부가 단기 방향 가를 1차 레벨이에요.",
          "entry": 242,
          "tp1": 251,
          "tp2": 258,
          "sl": 236,
          "entry_comment": "$240 지지 테스트 확인 후 반등 시 분할진입. 이탈 시 $230까지 한번 더 봐요. 절대 물타기 금지.",
          "catalysts": [
            "5월 Robotaxi Austin 런칭 일정 재확인",
            "FSD Unsupervised 확장 로드맵",
            "에너지 스토리지 Q2 가이던스 회복 여부"
          ],
          "risks": [
            "캡엑스 +$5B → FCF 컨센 하향 도미노",
            "인도량 358k 미스 + 재고 5만대 적체",
            "Musk 리스크 (정치·트윗·주의분산)"
          ],
          "reddit_sentiment_label": "부정",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 2180,
              "sentiment": 0.38
            },
            {
              "sub": "teslamotors",
              "count": 890,
              "sentiment": 0.52
            },
            {
              "sub": "stocks",
              "count": 540,
              "sentiment": 0.34
            }
          ],
          "news_headlines": [
            {
              "title": "Tesla Q1 beats EPS but capex guidance jolts premarket",
              "source": "CNBC",
              "ago": "10h"
            },
            {
              "title": "Musk hikes 2026 capex to $25B, $5B above prior guide",
              "source": "Bloomberg",
              "ago": "11h"
            },
            {
              "title": "TSLA slides 4%+ in premarket after earnings call",
              "source": "Reuters",
              "ago": "5h"
            }
          ],
          "trend_surge_pct": 186,
          "options_detail": {
            "call_volume": 685000,
            "put_volume": 412000,
            "cp_ratio": 1.66,
            "smart_money_ratio": 0.58,
            "unusual": true
          }
        },
        {
          "rank": 4,
          "ticker": "GOOGL",
          "name": "Alphabet Inc.",
          "sector": "Mega Tech",
          "sector_full": "Mega-Cap Tech",
          "price": 183.4,
          "change_pct": 0.7,
          "score_total": 83.5,
          "score_reddit": 80,
          "score_news": 88,
          "score_trends": 78,
          "score_options": 88,
          "quadrant": "hot",
          "claude_rank": 4,
          "claude_summary": "4/29 실적 전 Gemini 3·MRVL 파트너십·Waymo 3축이 모두 상향 가능. Mag7 중 가장 높은 적중률이에요.",
          "claude_signals": [
            "4/29 Q1 실적 컨센 EPS 상향 추세",
            "MRVL MPU/TPU 파트너십으로 자체 실리콘 로드맵 확정",
            "Waymo 지역 확장 + Search AI 수익화 증빙"
          ],
          "narrative": "4/20 MRVL과의 커스텀 칩 파트너십 공시로 Search·Cloud·Waymo 3개 축의 원가 구조가 재평가되고 있어요. 리테일은 'Mag7 중 가장 저평가'라며 PER 19x 근거로 매수 중이고, 기관은 YT CPM 회복 + Gemini 3 엔터프라이즈 계약 확대를 근거로 4/29 가이던스 상향 베팅을 집중하는 중이에요. 이번주 $180 이탈만 없으면 실적 전 $190까지 올려놓는 게 컨센이에요.",
          "entry": 181.5,
          "tp1": 187,
          "tp2": 192,
          "sl": 178.5,
          "entry_comment": "개장 직후 무리하지 말고 23:00 이후 매물 소화 확인 후 진입. $178.5 이탈 시 즉시 손절.",
          "catalysts": [
            "4/29 Q1 실적 - 광고·YT·Cloud 3개 세그먼트 모두 상향 여지",
            "Gemini 3 엔터프라이즈 배포 확대",
            "Waymo 5월 런칭 지역 추가"
          ],
          "risks": [
            "Search AI 전환이 광고 CPM에 부정적 영향 우려",
            "EU·美 반독점 소송 지연 리스크",
            "실적 후 '소식 팔아치우기' 차익실현"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 640,
              "sentiment": 0.64
            },
            {
              "sub": "stocks",
              "count": 290,
              "sentiment": 0.58
            },
            {
              "sub": "investing",
              "count": 210,
              "sentiment": 0.62
            }
          ],
          "news_headlines": [
            {
              "title": "Alphabet earnings preview: Gemini, Waymo, and Marvell in spotlight",
              "source": "Bloomberg",
              "ago": "6h"
            },
            {
              "title": "GOOGL targets raised ahead of 4/29 print",
              "source": "Yahoo Finance",
              "ago": "1d"
            },
            {
              "title": "Search AI transition risks easing, analysts say",
              "source": "Reuters",
              "ago": "2d"
            }
          ],
          "trend_surge_pct": 42,
          "options_detail": {
            "call_volume": 238000,
            "put_volume": 74000,
            "cp_ratio": 3.2,
            "smart_money_ratio": 0.74,
            "unusual": false
          }
        },
        {
          "rank": 5,
          "ticker": "MSTR",
          "name": "Strategy Inc.",
          "sector": "Crypto",
          "sector_full": "Crypto / Bitcoin Treasury",
          "price": 412.5,
          "change_pct": 3.2,
          "score_total": 81.8,
          "score_reddit": 94,
          "score_news": 82,
          "score_trends": 88,
          "score_options": 80,
          "quadrant": "overheat",
          "claude_rank": 5,
          "claude_summary": "BTC $78K 돌파 + $2.54B 추가 매수로 IBIT 제치고 최대 보유자. 리테일 극단 불리시지만 현금 버퍼 경계해요.",
          "claude_signals": [
            "BTC $78K 상회, 4월 MSTR +37%",
            "$2.54B 추가 매수로 717k BTC 보유",
            "Stocktwits 'extremely bullish' 극단 구간"
          ],
          "narrative": "Strategy(구 MicroStrategy)가 지난주 $2.54B BTC를 추가 매수해 총 717k개로 BlackRock IBIT를 제치고 최대 보유자가 됐어요. 리테일은 Stocktwits에서 '극단 불리시' 단계로 콜옵션 레버리지 포지션이 과열 구간이고, 애널들은 '현금 버퍼 18개월치로 감소'를 경계하며 배당 지속성에 의문을 던지는 중이에요. BTC $80K 돌파 트리거 시 $450까지 뚫리지만, $75K 이탈 시 MSTR 레버리지 청산이 연쇄될 수 있어 양방향 변동성 모두 열어둬야 해요.",
          "entry": 408,
          "tp1": 428,
          "tp2": 448,
          "sl": 395,
          "entry_comment": "비트코인 $76K 유지 확인 후 분할진입. 레버리지 ETF 대신 현물·콜스프레드 권장, 포지션 사이즈는 평소의 절반으로.",
          "catalysts": [
            "BTC $80K 심리적 돌파 시 기관 매수 재개",
            "MSTR 자체 자본 조달 추가 발표 가능성",
            "5월 FOMC 전 위험자산 리스크-온 사이클"
          ],
          "risks": [
            "BTC $75K 이탈 시 MSTR 레버리지 청산 트리거",
            "현금 버퍼 18개월치로 감소·배당 지속성 의문",
            "SEC·MSCI 편출 루머 재점화 가능"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 1540,
              "sentiment": 0.82
            },
            {
              "sub": "MSTR",
              "count": 420,
              "sentiment": 0.88
            },
            {
              "sub": "Bitcoin",
              "count": 680,
              "sentiment": 0.78
            }
          ],
          "news_headlines": [
            {
              "title": "Strategy surpasses IBIT as largest Bitcoin holder",
              "source": "CoinDesk",
              "ago": "4h"
            },
            {
              "title": "MSTR cash buffer 'depleting fast' after $2.54B BTC buy",
              "source": "Stocktwits",
              "ago": "1d"
            },
            {
              "title": "Capital Group reportedly adds $747M to MSTR position",
              "source": "Bloomberg",
              "ago": "2d"
            }
          ],
          "trend_surge_pct": 112,
          "options_detail": {
            "call_volume": 284000,
            "put_volume": 122000,
            "cp_ratio": 2.33,
            "smart_money_ratio": 0.62,
            "unusual": true
          }
        },
        {
          "rank": 6,
          "ticker": "AMD",
          "name": "Advanced Micro Devices",
          "sector": "Semi",
          "sector_full": "Semiconductors",
          "price": 168.4,
          "change_pct": 1.2,
          "score_total": 79.4,
          "score_reddit": 78,
          "score_news": 82,
          "score_trends": 76,
          "score_options": 82,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "반도체 16연속 세션 상승, MI355X 수요 서사가 중국 제재 해제 기대와 맞물려 견고해요.",
          "claude_signals": [
            "16연속 세션 상승(섹터 전체)",
            "MI355X 수요 견고·하이퍼스케일러 수주 확대",
            "NVDA 대비 밸류에이션 디스카운트 축소 중"
          ],
          "narrative": "반도체 섹터가 16세션 연속 상승하며 AMD도 한 달 +11%로 MRVL과 함께 가장 과열된 종목 중 하나예요. MI355X 수주 랠리가 중국 제재 해제 기대와 맞물려 기관 매수세가 이어지는 중이지만, 과열 구간이라 $165 이탈 시 지지 확인 후 재진입이 안전해요.",
          "entry": 166,
          "tp1": 173,
          "tp2": 179,
          "sl": 162.5,
          "entry_comment": "과열 구간이라 추격 금지, $165 지지 테스트 확인 후 진입.",
          "catalysts": [
            "MI355X 양산 본격 램프",
            "5월 Advancing AI 이벤트 로드맵 발표",
            "AI 칩 BOM 내 점유율 확대"
          ],
          "risks": [
            "16연속 상승 피로도·과매수 RSI 78",
            "NVDA 대비 성능 격차 여전",
            "Iran 협상 재경색 시 반도체 매물"
          ]
        },
        {
          "rank": 7,
          "ticker": "META",
          "name": "Meta Platforms",
          "sector": "Mega Tech",
          "sector_full": "Mega-Cap Tech",
          "price": 618.2,
          "change_pct": 0.5,
          "score_total": 78.2,
          "score_reddit": 74,
          "score_news": 84,
          "score_trends": 72,
          "score_options": 84,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "4/29 실적 전 EPS $6.65 컨센·매출 +32% YoY. Reality Labs 손실 축소 증거에 기관 포커스예요.",
          "claude_signals": [
            "4/29 실적, EPS $6.65·매출 +32% YoY 컨센",
            "Nebius 27B 계약 → '예측 가능 CapEx' 재해석",
            "광고 ROAS + Threads MAU 가속"
          ],
          "narrative": "Nebius 27B 계약 이후 '인프라 과투자' 우려가 오히려 '예측 가능한 CapEx'로 재해석되며 애널 타깃이 줄상향 중이에요. 리테일은 4/29 실적 전 콜 집중, 기관은 Reality Labs 손실 축소 증거와 광고 ROAS 회복에 더 민감해요. 실적 서프라이즈 가능성 가장 높은 메가캡 중 하나로 평가해요.",
          "entry": 614,
          "tp1": 632,
          "tp2": 650,
          "sl": 606,
          "entry_comment": "실적 전 분할진입 권장, 포지션 사이즈는 평소의 60%.",
          "catalysts": [
            "4/29 Q1 실적 - 매출 +32% YoY 기대",
            "Threads MAU 5억 돌파 임박",
            "AI 추천 엔진 ARPU 기여도 증빙"
          ],
          "risks": [
            "CapEx 상단 초과 시 FCF 우려 재부상",
            "Reality Labs 손실 확대 우려",
            "EU Digital Markets Act 과징금 리스크"
          ]
        },
        {
          "rank": 8,
          "ticker": "MSFT",
          "name": "Microsoft",
          "sector": "Mega Tech",
          "sector_full": "Mega-Cap Tech",
          "price": 478.6,
          "change_pct": 0.3,
          "score_total": 77.1,
          "score_reddit": 68,
          "score_news": 86,
          "score_trends": 70,
          "score_options": 84,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": "4/29 실적 - Azure AI 성장 가속·코파일럿 수익화가 핵심이에요. 프리미엄 유지해요.",
          "claude_signals": [
            "4/29 Q1 실적, Azure AI 성장 가속 기대",
            "Copilot for M365 유료 전환율 상향 중",
            "OpenAI 파트너십 재조정 협상 근접"
          ],
          "narrative": "Azure AI 런레이트가 $15B를 넘었다는 내부 수치 유출 이후 기관은 4/29 실적에서 가이던스 상향 확률을 높이는 중이에요. 리테일 관심은 META·GOOGL보다 덜 하지만 기관 담보성 매수는 꾸준해요. Copilot 유료 전환율과 OpenAI 재조정 언급이 핵심 트리거예요.",
          "entry": 475,
          "tp1": 488,
          "tp2": 498,
          "sl": 468,
          "entry_comment": "실적 전 포지션 빌드, 금요일까지 분할.",
          "catalysts": [
            "4/29 실적 Azure AI 가속 확인",
            "Copilot for M365 유료 전환 가속",
            "OpenAI 파트너십 재조정 뉴스"
          ],
          "risks": [
            "CapEx 상단 초과 시 단기 FCF 우려",
            "OpenAI 독립성 협상 지연 리스크",
            "AI 경쟁 심화 시 마진 압박"
          ]
        },
        {
          "rank": 9,
          "ticker": "AMZN",
          "name": "Amazon",
          "sector": "Mega Tech",
          "sector_full": "Mega-Cap Tech",
          "price": 218.7,
          "change_pct": 0.8,
          "score_total": 76.4,
          "score_reddit": 82,
          "score_news": 80,
          "score_trends": 72,
          "score_options": 78,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "AWS 24% YoY·AI 런레이트 $15B 초과. 4/29 실적에서 AWS 재가속 확증 기대예요.",
          "claude_signals": [
            "Q4 AWS +24% YoY, 13분기래 최대",
            "AI 런레이트 $15B 돌파",
            "Trainium3 램프 + Anthropic 수익화"
          ],
          "narrative": "Q4 AWS 성장률 +24% YoY가 13분기래 최고 기록이었고 AI 런레이트가 $15B를 돌파하면서 '클라우드 2차 성장' 서사가 다시 살아났어요. 리테일은 WSB 2026 Top 1픽으로 AMZN을 꼽았고, 기관은 Trainium3 + Anthropic 수익화 + 리테일 AI 쇼핑의 3축에 점수 주는 중이에요.",
          "entry": 216.5,
          "tp1": 224,
          "tp2": 230,
          "sl": 212,
          "entry_comment": "4/29 전 $220 돌파 확인 후 추가 추격, 이전엔 분할.",
          "catalysts": [
            "4/29 Q1 실적 - AWS 가속 확증",
            "Trainium3 본격 램프 발표",
            "Prime 멤버십 + AI 쇼핑 전환율"
          ],
          "risks": [
            "캡엑스 +$20B 이상 상향 시 FCF 우려",
            "리테일 세그먼트 OP마진 하향 가능성",
            "Anthropic IPO 루머 - 가치평가 변동"
          ]
        },
        {
          "rank": 10,
          "ticker": "AVGO",
          "name": "Broadcom",
          "sector": "Semi",
          "sector_full": "Semiconductors",
          "price": 1872,
          "change_pct": 1.4,
          "score_total": 75.8,
          "score_reddit": 62,
          "score_news": 84,
          "score_trends": 68,
          "score_options": 88,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": "커스텀 ASIC 대장, MRVL 딜 호재 이후 상대 수혜 기대돼요. 기관 펀드플로우 강해요.",
          "claude_signals": [
            "커스텀 ASIC 1위 사업자 지위",
            "AI 서버 수주 백로그 확대",
            "VMware 통합 시너지 본격화"
          ],
          "narrative": "MRVL-GOOGL 딜이 오히려 커스텀 ASIC 카테고리 전체를 부각시키면서 AVGO 기관 매수세도 강해졌어요. 리테일 관심은 상대적으로 낮지만 옵션 플로우는 강력, 기관 선호도 Top1의 반도체 중 하나예요.",
          "entry": 1858,
          "tp1": 1912,
          "tp2": 1965,
          "sl": 1822,
          "entry_comment": "고가 종목 - 사이즈 관리 철저, 콜스프레드 권장.",
          "catalysts": [
            "5월 분기실적 가이던스 상향 기대",
            "AI 서버 하이퍼스케일러 추가 수주",
            "VMware 크로스셀 본격화"
          ],
          "risks": [
            "$1900 구간 심리적 저항",
            "MRVL 직접 경쟁 강화 시 마진 희석",
            "하이퍼스케일러 캡엑스 조정 시 베타"
          ]
        },
        {
          "rank": 11,
          "ticker": "AAPL",
          "name": "Apple Inc.",
          "sector": "Mega Tech",
          "sector_full": "Mega-Cap Tech",
          "price": 228.4,
          "change_pct": 0.2,
          "score_total": 69.5,
          "score_reddit": 58,
          "score_news": 72,
          "score_trends": 60,
          "score_options": 88,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": null,
          "claude_signals": [],
          "narrative": null,
          "entry": null,
          "tp1": null,
          "tp2": null,
          "sl": null,
          "entry_comment": null,
          "catalysts": [],
          "risks": []
        },
        {
          "rank": 12,
          "ticker": "NBIS",
          "name": "Nebius Group",
          "sector": "AI Infra",
          "sector_full": "AI Infrastructure",
          "price": 172.8,
          "change_pct": -1.2,
          "score_total": 68.1,
          "score_reddit": 92,
          "score_news": 70,
          "score_trends": 88,
          "score_options": 42,
          "quadrant": "overheat",
          "claude_rank": null,
          "claude_summary": null,
          "claude_signals": [],
          "narrative": null,
          "entry": null,
          "tp1": null,
          "tp2": null,
          "sl": null,
          "entry_comment": null,
          "catalysts": [],
          "risks": []
        },
        {
          "rank": 13,
          "ticker": "ASTS",
          "name": "AST SpaceMobile",
          "sector": "Space",
          "sector_full": "Space & Comm",
          "price": 83.9,
          "change_pct": -1,
          "score_total": 65.2,
          "score_reddit": 94,
          "score_news": 58,
          "score_trends": 96,
          "score_options": 40,
          "quadrant": "overheat",
          "claude_rank": null,
          "claude_summary": null,
          "claude_signals": [],
          "narrative": null,
          "entry": null,
          "tp1": null,
          "tp2": null,
          "sl": null,
          "entry_comment": null,
          "catalysts": [],
          "risks": []
        },
        {
          "rank": 14,
          "ticker": "RKLB",
          "name": "Rocket Lab",
          "sector": "Space",
          "sector_full": "Space & Comm",
          "price": 44.6,
          "change_pct": 1.1,
          "score_total": 64.8,
          "score_reddit": 86,
          "score_news": 66,
          "score_trends": 80,
          "score_options": 48,
          "quadrant": "hidden",
          "claude_rank": null,
          "claude_summary": null,
          "claude_signals": [],
          "narrative": null,
          "entry": null,
          "tp1": null,
          "tp2": null,
          "sl": null,
          "entry_comment": null,
          "catalysts": [],
          "risks": []
        },
        {
          "rank": 15,
          "ticker": "COIN",
          "name": "Coinbase Global",
          "sector": "Crypto",
          "sector_full": "Crypto / Bitcoin Treasury",
          "price": 278.5,
          "change_pct": 2.4,
          "score_total": 63.9,
          "score_reddit": 72,
          "score_news": 68,
          "score_trends": 76,
          "score_options": 62,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": null,
          "claude_signals": [],
          "narrative": null,
          "entry": null,
          "tp1": null,
          "tp2": null,
          "sl": null,
          "entry_comment": null,
          "catalysts": [],
          "risks": []
        },
        {
          "rank": 16,
          "ticker": "MU",
          "name": "Micron Technology",
          "sector": "Semi",
          "sector_full": "Semiconductors",
          "price": 118.6,
          "change_pct": 0.6,
          "score_total": 62.4,
          "score_reddit": 70,
          "score_news": 74,
          "score_trends": 62,
          "score_options": 58,
          "quadrant": "hidden",
          "claude_rank": null,
          "claude_summary": null,
          "claude_signals": [],
          "narrative": null,
          "entry": null,
          "tp1": null,
          "tp2": null,
          "sl": null,
          "entry_comment": null,
          "catalysts": [],
          "risks": []
        },
        {
          "rank": 17,
          "ticker": "PLTR",
          "name": "Palantir",
          "sector": "AI Software",
          "sector_full": "AI Software",
          "price": 98.2,
          "change_pct": 1.6,
          "score_total": 61.7,
          "score_reddit": 84,
          "score_news": 62,
          "score_trends": 68,
          "score_options": 50,
          "quadrant": "overheat",
          "claude_rank": null,
          "claude_summary": null,
          "claude_signals": [],
          "narrative": null,
          "entry": null,
          "tp1": null,
          "tp2": null,
          "sl": null,
          "entry_comment": null,
          "catalysts": [],
          "risks": []
        },
        {
          "rank": 18,
          "ticker": "INTC",
          "name": "Intel",
          "sector": "Semi",
          "sector_full": "Semiconductors",
          "price": 29.8,
          "change_pct": -0.4,
          "score_total": 58.2,
          "score_reddit": 52,
          "score_news": 76,
          "score_trends": 58,
          "score_options": 46,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": null,
          "claude_signals": [],
          "narrative": null,
          "entry": null,
          "tp1": null,
          "tp2": null,
          "sl": null,
          "entry_comment": null,
          "catalysts": [],
          "risks": []
        },
        {
          "rank": 19,
          "ticker": "SOFI",
          "name": "SoFi Technologies",
          "sector": "Fintech",
          "sector_full": "Fintech / Platform",
          "price": 17.4,
          "change_pct": 2.1,
          "score_total": 56.8,
          "score_reddit": 80,
          "score_news": 54,
          "score_trends": 62,
          "score_options": 36,
          "quadrant": "hidden",
          "claude_rank": null,
          "claude_summary": null,
          "claude_signals": [],
          "narrative": null,
          "entry": null,
          "tp1": null,
          "tp2": null,
          "sl": null,
          "entry_comment": null,
          "catalysts": [],
          "risks": []
        },
        {
          "rank": 20,
          "ticker": "IREN",
          "name": "IREN Limited",
          "sector": "AI Infra",
          "sector_full": "AI Infrastructure / Mining",
          "price": 18.7,
          "change_pct": 3.4,
          "score_total": 54.6,
          "score_reddit": 78,
          "score_news": 48,
          "score_trends": 74,
          "score_options": 34,
          "quadrant": "hidden",
          "claude_rank": null,
          "claude_summary": null,
          "claude_signals": [],
          "narrative": null,
          "entry": null,
          "tp1": null,
          "tp2": null,
          "sl": null,
          "entry_comment": null,
          "catalysts": [],
          "risks": []
        }
      ]
    },
    "2026-04-22": {
      "date": "2026-04-22",
      "date_display": "2026-04-22 (수·미국장)",
      "market_mood": "neutral",
      "market_mood_score": 54,
      "market_summary": "오늘은 TSLA Q1 실적(장 후)을 기다리는 전형적 이벤트 드리븐 장이에요. 4/20 S&P -0.24%(7,109), Nasdaq -0.26%(24,404)로 13연승 꺾였고 4/21 이란 2차 협상 기대감에 +0.6% 반등했지만 방향성은 약해요. TSLA 옵션 IV가 75로 ±7% 움직임을 내재 중이라 Mag7 전반이 관망 모드, 대신 반도체·AI 인프라 쪽 로테이션이 계속 살아있어요.",
      "sector_tilt": [
        "AI Infrastructure",
        "Semiconductors",
        "Mega-Cap Tech"
      ],
      "top_ticker": "TSLA",
      "candidate_count": 20,
      "today_action": {
        "one_liner": "TSLA 실적 전까지는 '관망 + 섹터 로테이션'이 정답, 본베팅은 장 후 콘콜 확인하고 내일로 넘기는 게 안전해요.",
        "priorities": [
          {
            "icon": "🎯",
            "ticker": "TSLA",
            "text": "실적 전 신규 진입 금지. 22:30 개장 후 실적 베팅 원한다면 콜스프레드(ATM/+10%)로 프리미엄 제한, 손절은 프리미엄 50%. 본포지션은 23:00(ET 10:00) 이후 가이던스 확인 후 내일 갭 열리면 방향 따라가는 게 낫어요."
          },
          {
            "icon": "💎",
            "ticker": "MRVL",
            "text": "커스텀 실리콘(AWS Trainium3, MSFT Maia) 램프에 비해 주가가 NVDA 대비 뒤쳐져 있어요. $72-73 지지 확인되면 $71.80 손절 잡고 분할진입, 1차 타깃 $76 / 2차 $79."
          },
          {
            "icon": "🚨",
            "ticker": "NBIS",
            "text": "Meta 27B딜 + Nvidia 2B투자 + AI21 인수설로 4월 이미 +50% 급등해 과열. 21:30 기준 갭업 3% 이상이면 신규 진입 금지. 보유자는 트레일링 스톱(-5%)으로 보호해요."
          }
        ]
      },
      "routine_timeline": [
        {
          "time_kst": "21:30",
          "time_et": "08:30",
          "label": "🔍 스크리너 리포트 확인·워치리스트 확정",
          "active": true
        },
        {
          "time_kst": "21:45",
          "time_et": "08:45",
          "label": "📰 프리마켓 뉴스·경제지표(주간 원유재고) 체크",
          "active": false
        },
        {
          "time_kst": "22:00",
          "time_et": "09:00",
          "label": "📊 프리마켓 갭·유동성 상위 10개 기록",
          "active": false
        },
        {
          "time_kst": "22:30",
          "time_et": "09:30",
          "label": "🔔 미국장 개장 (30분간 관망)",
          "key": true
        },
        {
          "time_kst": "23:00",
          "time_et": "10:00",
          "label": "🎯 1차 진입 창 — TSLA 제외 종목 위주",
          "active": false
        },
        {
          "time_kst": "00:00",
          "time_et": "11:00",
          "label": "🍎 런치 존 진입 (변동성 축소 구간)",
          "active": false
        },
        {
          "time_kst": "02:00",
          "time_et": "13:00",
          "label": "🔁 오후 세션 시작 — 2차 진입·부분익절",
          "active": false
        },
        {
          "time_kst": "04:00",
          "time_et": "15:00",
          "label": "⚡ 마감 1시간 전, 리스크 축소",
          "active": false
        },
        {
          "time_kst": "05:00",
          "time_et": "16:00",
          "label": "🔔 미국장 마감 — TSLA 실적 발표 대기",
          "key": true
        },
        {
          "time_kst": "05:05",
          "time_et": "16:05",
          "label": "📣 TSLA 실적 수치 릴리스 (EPS/매출/마진)",
          "key": true
        },
        {
          "time_kst": "05:30",
          "time_et": "16:30",
          "label": "🎧 TSLA 컨퍼런스콜 (Robotaxi·FSD·마진 가이던스)",
          "key": true
        },
        {
          "time_kst": "07:00",
          "time_et": "18:00",
          "label": "📝 일일 결산 + 내일 워치리스트 업데이트",
          "active": false
        }
      ],
      "sectors": [
        {
          "name": "AI Infrastructure",
          "strength": 0.88,
          "ticker_count": 5
        },
        {
          "name": "Semiconductors",
          "strength": 0.82,
          "ticker_count": 6
        },
        {
          "name": "Mega-Cap Tech",
          "strength": 0.71,
          "ticker_count": 4
        },
        {
          "name": "EV / Auto",
          "strength": 0.58,
          "ticker_count": 1
        },
        {
          "name": "Space & Defense",
          "strength": 0.65,
          "ticker_count": 1
        },
        {
          "name": "Crypto Beta",
          "strength": 0.52,
          "ticker_count": 2
        },
        {
          "name": "Fintech / Platform",
          "strength": 0.44,
          "ticker_count": 1
        }
      ],
      "claude_ranking": [
        {
          "rank": 1,
          "ticker": "TSLA",
          "reasoning": "오늘의 중심 이벤트. 실적 결과에 따라 +7%~-10% 스윙 가능, 하지만 '신규 진입'은 실적 전이 아니라 실적 후가 정답이에요.",
          "signals": [
            "Q1 EPS 컨센 $0.25 vs 일부 기관 $0.37",
            "옵션 IV 75·±7% 내재 move",
            "Robotaxi 진척·FSD Unsupervised 로드맵이 숫자보다 더 중요"
          ]
        },
        {
          "rank": 2,
          "ticker": "NVDA",
          "reasoning": "AI 인프라 섹터 로테이션의 가장 신뢰 가능한 베타. 5/20 실적까지 '눌림 매수' 구간이에요.",
          "signals": [
            "Nebius 2B직접투자 + Vera Rubin 플랫폼 배포",
            "5/20 Q1 FY27 가이던스 78B 컨센",
            "$880 지지 유지 시 스윙 우위"
          ]
        },
        {
          "rank": 3,
          "ticker": "META",
          "reasoning": "4/29 실적 전 포지셔닝 플레이. Nebius 27B 딜로 AI 인프라 투자 페이스가 이미 확인돼 가이던스 하방이 좁아요.",
          "signals": [
            "4/29 Q1 실적 임박, 애널 컨센 매출 +15%",
            "Reality Labs 손실 축소 기대",
            "광고 ROAS 상승 서사 유지"
          ]
        },
        {
          "rank": 4,
          "ticker": "NBIS",
          "reasoning": "Meta·Nvidia·AI21 3연타로 재평가 구간이지만 단기 과열. '추격 금지, 눌림 대기' 입장이에요.",
          "signals": [
            "Meta 27B 딜 + Nvidia 2B 투자",
            "AI21 인수설 공식 확인",
            "backlog 50B vs 2025 매출 530M = 재평가 명분"
          ]
        },
        {
          "rank": 5,
          "ticker": "GOOGL",
          "reasoning": "4/29 실적 전 Gemini 3·Waymo·YT 광고의 세 축이 모두 상향 가능. 이벤트 드리븐 중 가장 '맞출 확률 높은' 이름이에요.",
          "signals": [
            "4/29 Q1 실적 예정",
            "Search AI 전환 리스크 완화 서사",
            "Waymo 지역 확장 속도"
          ]
        }
      ],
      "hidden_edges": [
        {
          "ticker": "MRVL",
          "reason": "AWS Trainium3·MSFT Maia 커스텀 실리콘 매출 본격 반영 구간인데 NVDA 대비 -18% 디스카운트. 리테일 언급도 상대적으로 낮아 멀티플 재평가 여지가 남아있어요."
        },
        {
          "ticker": "AVGO",
          "reason": "AI ASIC + VMware ARR로 구성된 이중엔진이 여전히 가이던스 상회 경로인데, NVDA 뉴스 사이클에 묻혀 상대적으로 저평가돼 있어요."
        }
      ],
      "overheated": [
        {
          "ticker": "NBIS",
          "reason": "4월 들어 +50% 이상 급등, RSI 78, 옵션 콜볼륨도 평균 대비 4배. 좋은 이름이지만 '추격'은 확률이 안 맞아요."
        },
        {
          "ticker": "PLTR",
          "reason": "리테일 언급 상위 + FWD PER 180 구간 재진입. 카탈리스트 없이 또 치고 올라가면 되돌림 확률이 커요."
        }
      ],
      "tickers": [
        {
          "rank": 1,
          "ticker": "TSLA",
          "name": "Tesla, Inc.",
          "sector": "EV/Auto",
          "sector_full": "EV / Auto",
          "price": 258.4,
          "change_pct": -0.8,
          "score_total": 92.5,
          "score_reddit": 95,
          "score_news": 94,
          "score_trends": 93,
          "score_options": 88,
          "quadrant": "hot",
          "claude_rank": 1,
          "claude_summary": "오늘의 중심 이벤트. 실적 전 진입 금지, 실적 후 방향 확정되면 내일 본베팅이 정답.",
          "claude_signals": [
            "Q1 earnings post-market",
            "IV 75 ±7% move",
            "Robotaxi narrative"
          ],
          "narrative": "Q1 인도량이 358k로 컨센 372k 대비 미스했고 YTD -12%로 Mag7 꼴찌예요. 리테일은 'AI 피벗 기대'에 매수 포지션, 기관은 마진 17-18% 방어 여부를 본다고 해요. 오늘 저녁 콘콜에서 Robotaxi·Optimus·FSD 로드맵이 숫자보다 주가를 움직일 확률이 높아요.",
          "entry": null,
          "tp1": null,
          "tp2": null,
          "sl": null,
          "entry_comment": "실적 전 진입 금지. 실적 베팅 시 콜/풋 스프레드로 프리미엄 제한, 본베팅은 23:00 콘콜 확인 후 내일.",
          "catalysts": [
            "오늘 장 후(05:05 KST) Q1 실적 발표 — EPS 컨센 $0.25, 매출 $22.27B",
            "콘콜(05:30 KST) Robotaxi·FSD Unsupervised 로드맵",
            "Optimus V3 생산 캘린더 업데이트 가능성"
          ],
          "risks": [
            "인도량 미스 + 마진 17% 하회 시 -10% 갭 가능",
            "중국 BYD 가격 경쟁 심화 코멘트",
            "머스크 정치 코멘트가 브랜드 리스크로 재부상"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 2840,
              "sentiment": 0.62
            },
            {
              "sub": "teslainvestorsclub",
              "count": 1215,
              "sentiment": 0.81
            },
            {
              "sub": "stocks",
              "count": 890,
              "sentiment": 0.44
            }
          ],
          "news_headlines": [
            {
              "title": "Tesla Q1 Earnings Preview: Robotaxi Pivot vs Delivery Miss",
              "source": "Bloomberg",
              "ago": "3h"
            },
            {
              "title": "Wedbush's Ives Expects AI Powerhouse Narrative to Carry Call",
              "source": "Reuters",
              "ago": "6h"
            },
            {
              "title": "Tesla Stock Down 12% YTD, Worst-Performing Mag7",
              "source": "CNBC",
              "ago": "1d"
            }
          ],
          "trend_surge_pct": 118,
          "options_detail": {
            "call_volume": 612000,
            "put_volume": 298000,
            "cp_ratio": 2.05,
            "smart_money_ratio": 0.61,
            "unusual": true
          }
        },
        {
          "rank": 2,
          "ticker": "NVDA",
          "name": "NVIDIA Corporation",
          "sector": "Semi",
          "sector_full": "Semiconductors",
          "price": 894.2,
          "change_pct": 1.1,
          "score_total": 87.8,
          "score_reddit": 84,
          "score_news": 90,
          "score_trends": 82,
          "score_options": 94,
          "quadrant": "hot",
          "claude_rank": 2,
          "claude_summary": "AI 인프라 테마의 가장 신뢰 가능한 베타. 5/20 실적 전까지 눌림매수 구간이에요.",
          "claude_signals": [
            "Nebius 2B equity stake",
            "Vera Rubin rollout",
            "Q1 FY27 guide 78B consensus"
          ],
          "narrative": "Nebius에 2B 직접 투자하고 Vera Rubin 플랫폼 배포 시작하면서 AI 인프라 수요 서사가 다시 강해졌어요. 리테일은 '5/20 실적까지 홀드'를 외치고, 기관은 커스텀 실리콘 위협에도 불구하고 데이터센터 TAM을 계속 상향 중이에요.",
          "entry": 889,
          "tp1": 905,
          "tp2": 922,
          "sl": 878.5,
          "entry_comment": "개장 직후 15분 관망 후 $889 터치 시 1차, VWAP 재확인 시 2차. 섹터 로테이션 약화 시 $878.50 손절 엄격 준수.",
          "catalysts": [
            "5/20 Q1 FY27 실적 (매출 78B 컨센)",
            "Vera Rubin 플랫폼 고객 공개 이어지는 중",
            "하이퍼스케일러 CapEx 가이던스 상향 공시"
          ],
          "risks": [
            "커스텀 실리콘(Trainium3·Maia) 점유율 잠식 논쟁 재점화",
            "중국 규제 관련 헤드라인",
            "TSLA 실적 쇼크 시 Mag7 동반 하락"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 1480,
              "sentiment": 0.58
            },
            {
              "sub": "nvidia",
              "count": 920,
              "sentiment": 0.72
            },
            {
              "sub": "stocks",
              "count": 610,
              "sentiment": 0.54
            }
          ],
          "news_headlines": [
            {
              "title": "Nvidia Commits $2B to Nebius as Vera Rubin Anchor Customer",
              "source": "Reuters",
              "ago": "4h"
            },
            {
              "title": "Analysts Raise NVDA Targets Ahead of May 20 Print",
              "source": "Barron's",
              "ago": "1d"
            },
            {
              "title": "Custom Silicon Risk Overstated, Says Morgan Stanley",
              "source": "MarketWatch",
              "ago": "2d"
            }
          ],
          "trend_surge_pct": 42,
          "options_detail": {
            "call_volume": 385000,
            "put_volume": 121000,
            "cp_ratio": 3.18,
            "smart_money_ratio": 0.79,
            "unusual": true
          }
        },
        {
          "rank": 3,
          "ticker": "META",
          "name": "Meta Platforms, Inc.",
          "sector": "Mega-Cap",
          "sector_full": "Mega-Cap Tech",
          "price": 612.3,
          "change_pct": 0.6,
          "score_total": 84.3,
          "score_reddit": 76,
          "score_news": 88,
          "score_trends": 78,
          "score_options": 92,
          "quadrant": "hot",
          "claude_rank": 3,
          "claude_summary": "4/29 실적 전 포지셔닝 플레이. Nebius 27B 딜로 AI CapEx 속도가 이미 확인돼 하방이 좁아요.",
          "claude_signals": [
            "4/29 Q1 earnings",
            "Nebius 27B capacity deal",
            "Ad ROAS trending up"
          ],
          "narrative": "3월 Nebius 27B 계약 공시 이후 '인프라 과투자' 우려가 가이던스 상단을 눌러왔는데, 최근 애널들이 오히려 '예측 가능한 CapEx'로 재해석하며 타깃 올리는 중이에요. 리테일은 4/29 실적 전 콜 집중, 기관은 Reality Labs 손실 축소 증거에 더 민감해요.",
          "entry": 609,
          "tp1": 622,
          "tp2": 635,
          "sl": 602,
          "entry_comment": "시초 30분 관망 후 $609 지지 확인 시 1차, 오후 VWAP 재돌파 시 2차. 타임스톱은 4/28 종가까지.",
          "catalysts": [
            "4/29 장후 Q1 실적",
            "Threads MAU 3.5억 돌파 가능성",
            "광고 ROAS·eCPM 상승 서사 유지"
          ],
          "risks": [
            "CapEx 가이던스 추가 상향 시 단기 충격",
            "유럽 DMA 관련 벌금 헤드라인",
            "Reality Labs 손실 확대 재확인 리스크"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 840,
              "sentiment": 0.54
            },
            {
              "sub": "stocks",
              "count": 520,
              "sentiment": 0.62
            },
            {
              "sub": "investing",
              "count": 310,
              "sentiment": 0.58
            }
          ],
          "news_headlines": [
            {
              "title": "Meta Q1 Preview: CapEx Clarity vs AI Monetization",
              "source": "Bloomberg",
              "ago": "5h"
            },
            {
              "title": "JPM Raises META Target to $680 on Ad ROAS",
              "source": "CNBC",
              "ago": "1d"
            },
            {
              "title": "Threads Crosses 350M MAU, Says Internal Memo",
              "source": "The Verge",
              "ago": "2d"
            }
          ],
          "trend_surge_pct": 28,
          "options_detail": {
            "call_volume": 142000,
            "put_volume": 46000,
            "cp_ratio": 3.09,
            "smart_money_ratio": 0.74,
            "unusual": false
          }
        },
        {
          "rank": 4,
          "ticker": "NBIS",
          "name": "Nebius Group N.V.",
          "sector": "AI Infra",
          "sector_full": "AI Infrastructure",
          "price": 168.9,
          "change_pct": 2.8,
          "score_total": 82.1,
          "score_reddit": 96,
          "score_news": 92,
          "score_trends": 95,
          "score_options": 85,
          "quadrant": "overheat",
          "claude_rank": 4,
          "claude_summary": "펀더는 진짜인데 4월만 +50%. 추격 금지, 눌림 대기 입장이에요.",
          "claude_signals": [
            "Meta 27B deal",
            "Nvidia 2B equity",
            "AI21 acquisition talks"
          ],
          "narrative": "Meta 27B 계약 + Nvidia 2B 투자 + AI21 인수설까지 3연타로 재평가 명분은 충분해요. 리테일은 '다음 NVDA'로 부르며 언급량 급증 중이고, 기관은 백로그 50B 대비 2025 매출 530M의 '갭'을 밸류에이션 근거로 쓰고 있어요. 다만 단기 RSI 78·콜볼륨 평균대비 4배는 과열 시그널이에요.",
          "entry": null,
          "tp1": null,
          "tp2": null,
          "sl": null,
          "entry_comment": "신규 매수 비권장. 보유자는 트레일링 스톱(-5%), $155 아래로 꺾이면 단기 반등 노림수로 재진입 고려.",
          "catalysts": [
            "Meta 27B 계약 capacity 가동",
            "AI21 인수 공식화 시점",
            "2026 가이던스 매출 3.0~3.4B 상단 상향 가능성"
          ],
          "risks": [
            "4월 +50% 급등 차익실현",
            "AI 인프라 매출 인식 타이밍 미스",
            "EM 리스트 이탈 논쟁 (실체 희박하지만 헤드라인 리스크)"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 1920,
              "sentiment": 0.84
            },
            {
              "sub": "stocks",
              "count": 640,
              "sentiment": 0.71
            },
            {
              "sub": "artificialintelligence",
              "count": 410,
              "sentiment": 0.78
            }
          ],
          "news_headlines": [
            {
              "title": "Nebius Nears Deal to Acquire AI21 Labs",
              "source": "Reuters",
              "ago": "2h"
            },
            {
              "title": "Nebius Lands $46B in AI Cloud Deals — Motley Fool",
              "source": "Fool",
              "ago": "1d"
            },
            {
              "title": "Nvidia Takes $2B Equity Stake in Nebius",
              "source": "Bloomberg",
              "ago": "2d"
            }
          ],
          "trend_surge_pct": 214,
          "options_detail": {
            "call_volume": 96000,
            "put_volume": 18000,
            "cp_ratio": 5.33,
            "smart_money_ratio": 0.68,
            "unusual": true
          }
        },
        {
          "rank": 5,
          "ticker": "GOOGL",
          "name": "Alphabet Inc.",
          "sector": "Mega-Cap",
          "sector_full": "Mega-Cap Tech",
          "price": 182.1,
          "change_pct": 0.4,
          "score_total": 81.6,
          "score_reddit": 72,
          "score_news": 86,
          "score_trends": 74,
          "score_options": 90,
          "quadrant": "hidden",
          "claude_rank": 5,
          "claude_summary": "4/29 실적 전 세 축(Gemini 3·Waymo·YT 광고) 모두 상향 여지, 이벤트 플레이로 확률이 가장 좋아요.",
          "claude_signals": [
            "4/29 earnings",
            "Gemini 3 enterprise adoption",
            "Waymo service area expansion"
          ],
          "narrative": "Search AI 전환 리스크에 대한 시장 우려가 Gemini 3 엔터프라이즈 계약 확대로 빠르게 완화되는 중이에요. 리테일은 'Mag7 중 가장 저평가'로 부르고, 기관은 YT 광고 CPM 회복 + Waymo 라이드 누적치에 점수를 주고 있어요.",
          "entry": 180.5,
          "tp1": 187,
          "tp2": 193,
          "sl": 177.5,
          "entry_comment": "프리마켓 갭업 1% 초과 시 시초 관망, 아니면 $180.5 지지 터치 시 분할진입. 4/28 종가까지 타임스톱.",
          "catalysts": [
            "4/29 장후 Q1 실적 (매출 컨센 +13%)",
            "Waymo 10개 도시 누적 라이드 공개",
            "Cloud 성장률 30%+ 재확인 가능성"
          ],
          "risks": [
            "DOJ 반독점 판결 관련 구제책 헤드라인",
            "검색 광고 CPC 둔화",
            "TSLA 쇼크 → 전 메가캡 동반 약세"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 620,
              "sentiment": 0.48
            },
            {
              "sub": "stocks",
              "count": 480,
              "sentiment": 0.56
            },
            {
              "sub": "investing",
              "count": 290,
              "sentiment": 0.62
            }
          ],
          "news_headlines": [
            {
              "title": "Alphabet Q1 Preview: Gemini 3 & Waymo in Focus",
              "source": "Bloomberg",
              "ago": "6h"
            },
            {
              "title": "Waymo Expands to Miami, Atlanta Rider Count Up",
              "source": "WSJ",
              "ago": "1d"
            },
            {
              "title": "Morgan Stanley Lifts GOOGL to $210",
              "source": "CNBC",
              "ago": "2d"
            }
          ],
          "trend_surge_pct": 19,
          "options_detail": {
            "call_volume": 165000,
            "put_volume": 58000,
            "cp_ratio": 2.84,
            "smart_money_ratio": 0.72,
            "unusual": false
          }
        },
        {
          "rank": 6,
          "ticker": "AVGO",
          "name": "Broadcom Inc.",
          "sector": "Semi",
          "sector_full": "Semiconductors",
          "price": 1682.4,
          "change_pct": 0.9,
          "score_total": 78.2,
          "score_reddit": 64,
          "score_news": 82,
          "score_trends": 70,
          "score_options": 88,
          "quadrant": "hidden",
          "claude_rank": 6,
          "claude_summary": "AI ASIC + VMware ARR 이중엔진이 가이던스 상회 경로인데 NVDA 사이클에 묻혀 저평가돼요.",
          "claude_signals": [
            "ASIC hyperscaler wins",
            "VMware ARR growth",
            "Dividend hike expectation"
          ],
          "narrative": "NVDA 뉴스 사이클에 묻혀 있지만 커스텀 ASIC 수주·VMware 가입자 전환 ARR이 가이던스 상회 경로. 기관은 'NVDA 2인자' 포지션으로 접근 중이에요.",
          "entry": 1675,
          "tp1": 1712,
          "tp2": 1745,
          "sl": 1648,
          "entry_comment": "시초 관망, $1675 지지 확인 시 1차. NVDA 방향 동조.",
          "catalysts": [
            "ASIC 신규 수주 공시",
            "VMware ARR 가속",
            "배당 상향"
          ],
          "risks": [
            "VMware 이탈률 재확대",
            "AI CapEx 둔화",
            "Mag7 동반 약세"
          ]
        },
        {
          "rank": 7,
          "ticker": "RKLB",
          "name": "Rocket Lab USA, Inc.",
          "sector": "Space",
          "sector_full": "Space & Defense",
          "price": 24.8,
          "change_pct": 1.4,
          "score_total": 76.5,
          "score_reddit": 88,
          "score_news": 74,
          "score_trends": 82,
          "score_options": 62,
          "quadrant": "hot",
          "claude_rank": 7,
          "claude_summary": "Neutron Q4 발사·Mynaric 인수 완료·MACH-TB 2.0 190M 수주로 모멘텀은 살아있음.",
          "claude_signals": [
            "Neutron on track Q4",
            "Mynaric acquisition closed",
            "$190M HASTE block buy"
          ],
          "narrative": "Mynaric 인수 완료(4/14) + 190M MACH-TB 2.0 수주로 사업 가시성 강화. 리테일은 '2026 최대 스페이스 스토리'로 언급량 상위 유지 중.",
          "entry": 24.2,
          "tp1": 26.1,
          "tp2": 28,
          "sl": 23.4,
          "entry_comment": "1차 $24.20, 2차 $23.60 딥. 손절 $23.40 엄격.",
          "catalysts": [
            "Neutron Q4 발사 일정 확정",
            "NSSL Lane 1 온램프",
            "Q1 실적 5월 초"
          ],
          "risks": [
            "Archimedes 엔진 테스트 실패",
            "Space ETF 약세",
            "고금리 재점화"
          ]
        },
        {
          "rank": 8,
          "ticker": "AMZN",
          "name": "Amazon.com, Inc.",
          "sector": "Mega-Cap",
          "sector_full": "Mega-Cap Tech",
          "price": 205.4,
          "change_pct": 0.3,
          "score_total": 75.8,
          "score_reddit": 62,
          "score_news": 80,
          "score_trends": 68,
          "score_options": 86,
          "quadrant": "watch",
          "claude_rank": 8,
          "claude_summary": "4/29 실적 전 AWS 성장률 가속 기대, 포지션 플레이는 있지만 확률은 GOOGL 대비 낮음.",
          "claude_signals": [
            "4/29 earnings",
            "AWS CapEx leverage",
            "Retail operating margin"
          ],
          "narrative": "AWS 클라우드 매출 가속 + CapEx 레버리지 확인이 키. 리테일 부문 마진 회복 서사도 추가.",
          "entry": 203.8,
          "tp1": 209.5,
          "tp2": 214,
          "sl": 201,
          "entry_comment": "분할진입, 기관 매수 강도 약해지면 관망 유지.",
          "catalysts": [
            "4/29 Q1 실적 AWS 성장률",
            "광고 매출 가속",
            "Prime 영상 광고 ARPU"
          ],
          "risks": [
            "리테일 마진 가이던스 하향",
            "CapEx 급증 쇼크",
            "FTC 구제책 확정"
          ]
        },
        {
          "rank": 9,
          "ticker": "AMD",
          "name": "Advanced Micro Devices, Inc.",
          "sector": "Semi",
          "sector_full": "Semiconductors",
          "price": 178.2,
          "change_pct": 1.8,
          "score_total": 74.9,
          "score_reddit": 70,
          "score_news": 76,
          "score_trends": 72,
          "score_options": 82,
          "quadrant": "hot",
          "claude_rank": 9,
          "claude_summary": "MI400 출시 일정 구체화 + 하이퍼스케일러 샘플 공급. NVDA 대체 서사 살아있음.",
          "claude_signals": [
            "MI400 sampling",
            "Server CPU share gain",
            "Q1 earnings 5/7"
          ],
          "narrative": "MI400 하이퍼스케일러 샘플 공급 + 서버 CPU 점유율 상승 서사. 5/7 실적 전 포지셔닝 수요가 있어요.",
          "entry": 176.5,
          "tp1": 182,
          "tp2": 187,
          "sl": 173.5,
          "entry_comment": "시초 30분 관망 후 1차, NVDA 동조 확인.",
          "catalysts": [
            "5/7 Q1 실적",
            "MI400 양산 일정 공시",
            "서버 CPU 점유율 공개"
          ],
          "risks": [
            "MI400 지연",
            "PC CPU 재고 조정",
            "섹터 로테이션 종료"
          ]
        },
        {
          "rank": 10,
          "ticker": "MU",
          "name": "Micron Technology, Inc.",
          "sector": "Semi",
          "sector_full": "Semiconductors",
          "price": 135.6,
          "change_pct": 2.1,
          "score_total": 73.7,
          "score_reddit": 66,
          "score_news": 74,
          "score_trends": 75,
          "score_options": 80,
          "quadrant": "hot",
          "claude_rank": 10,
          "claude_summary": "HBM3E 공급 부족 + 2026 HBM 가격 인상 협상 뉴스로 메모리 사이클 강세 지속.",
          "claude_signals": [
            "HBM3E shortage",
            "HBM4 qualification",
            "DRAM contract price uptick"
          ],
          "narrative": "HBM3E 공급 부족 지속 + HBM4 샘플 퀄리피케이션 임박. DRAM 컨트랙트 가격 인상 협상 진행으로 사이클 피크 논쟁 완화.",
          "entry": 134.2,
          "tp1": 139,
          "tp2": 144,
          "sl": 131.5,
          "entry_comment": "$134.2 지지 터치 시 1차. 섹터 로테이션 체크.",
          "catalysts": [
            "HBM4 퀄리피케이션 완료",
            "DRAM 가격 3Q 인상",
            "Q3 실적 6월 말"
          ],
          "risks": [
            "HBM 공급 초과 우려 재점화",
            "중국 CXMT 증산",
            "엔비디아 가격 협상 타이트"
          ]
        },
        {
          "rank": 11,
          "ticker": "AAPL",
          "name": "Apple Inc.",
          "sector": "Mega-Cap",
          "sector_full": "Mega-Cap Tech",
          "price": 241.2,
          "change_pct": 0.2,
          "score_total": 71.4,
          "score_reddit": 82,
          "score_news": 68,
          "score_trends": 64,
          "score_options": 72,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": null,
          "claude_signals": null,
          "narrative": null,
          "entry": null,
          "tp1": null,
          "tp2": null,
          "sl": null,
          "entry_comment": null,
          "catalysts": null,
          "risks": null,
          "reddit_sentiment_label": "중립",
          "reddit_breakdown": null,
          "news_headlines": null,
          "trend_surge_pct": null,
          "options_detail": null
        },
        {
          "rank": 12,
          "ticker": "MSFT",
          "name": "Microsoft Corporation",
          "sector": "Mega-Cap",
          "sector_full": "Mega-Cap Tech",
          "price": 462.8,
          "change_pct": 0.5,
          "score_total": 70.9,
          "score_reddit": 60,
          "score_news": 78,
          "score_trends": 66,
          "score_options": 80,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": null,
          "claude_signals": null,
          "narrative": null,
          "entry": null,
          "tp1": null,
          "tp2": null,
          "sl": null,
          "entry_comment": null,
          "catalysts": null,
          "risks": null,
          "reddit_sentiment_label": "중립",
          "reddit_breakdown": null,
          "news_headlines": null,
          "trend_surge_pct": null,
          "options_detail": null
        },
        {
          "rank": 13,
          "ticker": "PLTR",
          "name": "Palantir Technologies Inc.",
          "sector": "Software",
          "sector_full": "AI Infrastructure",
          "price": 96.4,
          "change_pct": 3.2,
          "score_total": 70.2,
          "score_reddit": 92,
          "score_news": 62,
          "score_trends": 80,
          "score_options": 48,
          "quadrant": "overheat",
          "claude_rank": null,
          "claude_summary": null,
          "claude_signals": null,
          "narrative": null,
          "entry": null,
          "tp1": null,
          "tp2": null,
          "sl": null,
          "entry_comment": null,
          "catalysts": null,
          "risks": null,
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": null,
          "news_headlines": null,
          "trend_surge_pct": null,
          "options_detail": null
        },
        {
          "rank": 14,
          "ticker": "MSTR",
          "name": "MicroStrategy Inc.",
          "sector": "Crypto",
          "sector_full": "Crypto Beta",
          "price": 342.5,
          "change_pct": -1.2,
          "score_total": 69.4,
          "score_reddit": 78,
          "score_news": 66,
          "score_trends": 72,
          "score_options": 62,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": null,
          "claude_signals": null,
          "narrative": null,
          "entry": null,
          "tp1": null,
          "tp2": null,
          "sl": null,
          "entry_comment": null,
          "catalysts": null,
          "risks": null,
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": null,
          "news_headlines": null,
          "trend_surge_pct": null,
          "options_detail": null
        },
        {
          "rank": 15,
          "ticker": "COIN",
          "name": "Coinbase Global, Inc.",
          "sector": "Crypto",
          "sector_full": "Crypto Beta",
          "price": 218.3,
          "change_pct": -0.6,
          "score_total": 68.1,
          "score_reddit": 72,
          "score_news": 70,
          "score_trends": 66,
          "score_options": 64,
          "quadrant": "watch",
          "claude_rank": null,
          "claude_summary": null,
          "claude_signals": null,
          "narrative": null,
          "entry": null,
          "tp1": null,
          "tp2": null,
          "sl": null,
          "entry_comment": null,
          "catalysts": null,
          "risks": null,
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": null,
          "news_headlines": null,
          "trend_surge_pct": null,
          "options_detail": null
        },
        {
          "rank": 16,
          "ticker": "SMCI",
          "name": "Super Micro Computer, Inc.",
          "sector": "Hardware",
          "sector_full": "AI Infrastructure",
          "price": 58.9,
          "change_pct": 1.6,
          "score_total": 67.5,
          "score_reddit": 80,
          "score_news": 58,
          "score_trends": 78,
          "score_options": 54,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": null,
          "claude_signals": null,
          "narrative": null,
          "entry": null,
          "tp1": null,
          "tp2": null,
          "sl": null,
          "entry_comment": null,
          "catalysts": null,
          "risks": null,
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": null,
          "news_headlines": null,
          "trend_surge_pct": null,
          "options_detail": null
        },
        {
          "rank": 17,
          "ticker": "ARM",
          "name": "Arm Holdings plc",
          "sector": "Semi",
          "sector_full": "Semiconductors",
          "price": 132.1,
          "change_pct": 0.7,
          "score_total": 66.8,
          "score_reddit": 58,
          "score_news": 72,
          "score_trends": 60,
          "score_options": 76,
          "quadrant": "hidden",
          "claude_rank": null,
          "claude_summary": null,
          "claude_signals": null,
          "narrative": null,
          "entry": null,
          "tp1": null,
          "tp2": null,
          "sl": null,
          "entry_comment": null,
          "catalysts": null,
          "risks": null,
          "reddit_sentiment_label": "중립",
          "reddit_breakdown": null,
          "news_headlines": null,
          "trend_surge_pct": null,
          "options_detail": null
        },
        {
          "rank": 18,
          "ticker": "RDDT",
          "name": "Reddit, Inc.",
          "sector": "Platform",
          "sector_full": "Fintech / Platform",
          "price": 185.7,
          "change_pct": 1.1,
          "score_total": 65.9,
          "score_reddit": 86,
          "score_news": 60,
          "score_trends": 72,
          "score_options": 46,
          "quadrant": "hot",
          "claude_rank": null,
          "claude_summary": null,
          "claude_signals": null,
          "narrative": null,
          "entry": null,
          "tp1": null,
          "tp2": null,
          "sl": null,
          "entry_comment": null,
          "catalysts": null,
          "risks": null,
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": null,
          "news_headlines": null,
          "trend_surge_pct": null,
          "options_detail": null
        },
        {
          "rank": 19,
          "ticker": "ASML",
          "name": "ASML Holding N.V.",
          "sector": "Semi",
          "sector_full": "Semiconductors",
          "price": 798.4,
          "change_pct": 0.8,
          "score_total": 64.7,
          "score_reddit": 52,
          "score_news": 74,
          "score_trends": 56,
          "score_options": 78,
          "quadrant": "hidden",
          "claude_rank": null,
          "claude_summary": null,
          "claude_signals": null,
          "narrative": null,
          "entry": null,
          "tp1": null,
          "tp2": null,
          "sl": null,
          "entry_comment": null,
          "catalysts": null,
          "risks": null,
          "reddit_sentiment_label": "중립",
          "reddit_breakdown": null,
          "news_headlines": null,
          "trend_surge_pct": null,
          "options_detail": null
        },
        {
          "rank": 20,
          "ticker": "MRVL",
          "name": "Marvell Technology, Inc.",
          "sector": "Semi",
          "sector_full": "Semiconductors",
          "price": 73.2,
          "change_pct": 0.9,
          "score_total": 63.4,
          "score_reddit": 48,
          "score_news": 70,
          "score_trends": 52,
          "score_options": 82,
          "quadrant": "hidden",
          "claude_rank": null,
          "claude_summary": null,
          "claude_signals": null,
          "narrative": null,
          "entry": null,
          "tp1": null,
          "tp2": null,
          "sl": null,
          "entry_comment": null,
          "catalysts": null,
          "risks": null,
          "reddit_sentiment_label": "중립",
          "reddit_breakdown": null,
          "news_headlines": null,
          "trend_surge_pct": null,
          "options_detail": null
        }
      ]
    },
    "2026-04-17": {
      "date": "2026-04-17",
      "date_display": "2026-04-17 (금요일 마감 → 월요일 프리뷰)",
      "market_mood": "bullish",
      "market_mood_score": 78,
      "market_summary": "Nasdaq 13연속 상승으로 1992년 이후 최장 기록이에요. S&P 500 +1.20% (7,126), Dow +1.79%, 이란 휴전 기대감 + Mag7 강세가 주도했어요. 다만 MOPEX 옵션만기 차익실현이 NVDA에 나왔고, 리테일은 ASTS 언급량이 하루만에 +1,214% 폭증하며 투기적 색채도 강해졌어요.",
      "sector_tilt": [
        "Consumer Tech",
        "AI Software",
        "Space/Comm"
      ],
      "top_ticker": "TSLA",
      "candidate_count": 20,
      "today_action": {
        "one_liner": "월요일은 Mag7 모멘텀 연장 vs 금요 차익실현 리셋 구간. TSLA·AAPL 갭업 추격 금지, 되돌림 기다렸다 분할진입이 유리해요.",
        "priorities": [
          {
            "icon": "🎯",
            "ticker": "TSLA",
            "text": "22:35 1차 분할진입 $395~398, 이탈시 $390 손절 · AI5 칩 모멘텀 추세 지속"
          },
          {
            "icon": "💎",
            "ticker": "MU",
            "text": "메모리 사이클 반등 + 반도체 섹터 로테이션, 뉴스 터지기 전 선진입 구간"
          },
          {
            "icon": "🚨",
            "ticker": "ASTS",
            "text": "Reddit 언급 +1214% 폭증 과열, 추격매수 절대 금지 — 숏 스퀴즈 후 -20% 리스크"
          }
        ]
      },
      "routine_timeline": [
        {
          "time_kst": "21:30",
          "time_et": "08:30",
          "label": "스크리너 리포트 완성, Claude 판단 순위 확인",
          "active": true
        },
        {
          "time_kst": "21:45",
          "time_et": "08:45",
          "label": "Top 5 종목 차트·뉴스 최종 확인, 진입가 메모"
        },
        {
          "time_kst": "22:00",
          "time_et": "09:00",
          "label": "OCO 주문 사전 세팅 (지정가 익절+손절)"
        },
        {
          "time_kst": "22:30",
          "time_et": "09:30",
          "label": "🔔 미국장 개장 · 초기 변동성 관망 5분",
          "key": true
        },
        {
          "time_kst": "22:35",
          "time_et": "09:35",
          "label": "분할 진입 1차 (포지션 1/3)"
        },
        {
          "time_kst": "23:00",
          "time_et": "10:00",
          "label": "분할 진입 2차 (포지션 1/3) · 추세 확인"
        },
        {
          "time_kst": "23:30",
          "time_et": "10:30",
          "label": "분할 진입 3차 or 손절라인 점검"
        },
        {
          "time_kst": "00:00",
          "time_et": "11:00",
          "label": "첫 리밸런싱 체크, 익절 부분 실현"
        },
        {
          "time_kst": "02:00",
          "time_et": "13:00",
          "label": "취침 전 OCO 최종 확인 · 일지 작성",
          "key": true
        }
      ],
      "sectors": [
        {
          "name": "Consumer Tech",
          "strength": 0.84,
          "ticker_count": 3
        },
        {
          "name": "AI Software",
          "strength": 0.78,
          "ticker_count": 4
        },
        {
          "name": "Space/Comm",
          "strength": 0.72,
          "ticker_count": 2
        },
        {
          "name": "Semiconductors",
          "strength": 0.65,
          "ticker_count": 4
        },
        {
          "name": "Fintech",
          "strength": 0.58,
          "ticker_count": 2
        },
        {
          "name": "Social/Platform",
          "strength": 0.52,
          "ticker_count": 2
        },
        {
          "name": "Auto",
          "strength": 0.76,
          "ticker_count": 1
        },
        {
          "name": "Crypto-related",
          "strength": 0.48,
          "ticker_count": 1
        },
        {
          "name": "Energy",
          "strength": 0.22,
          "ticker_count": 1
        }
      ],
      "claude_ranking": [
        {
          "rank": 1,
          "ticker": "TSLA",
          "reasoning": "AI5 칩 공개 + Terafab 팹 확장 + UBS 매수 상향 3중 호재, Nasdaq 연승 동력",
          "signals": [
            "AI5 chip",
            "UBS upgrade",
            "5-day win streak"
          ]
        },
        {
          "rank": 2,
          "ticker": "AAPL",
          "reasoning": "금요 +3.1% 강세 마감 + 6월 WWDC 앞두고 기관 비중 확대 시그널",
          "signals": [
            "+3.1% close",
            "WWDC catalyst",
            "Buyback expansion"
          ]
        },
        {
          "rank": 3,
          "ticker": "MU",
          "reasoning": "메모리 가격 반등 + HBM 수주 루머, 섹터 로테이션 최적 수혜 종목",
          "signals": [
            "Memory cycle",
            "HBM demand",
            "Sector rotation"
          ]
        },
        {
          "rank": 4,
          "ticker": "AMZN",
          "reasoning": "AWS 성장률 재가속 기대 + Reddit 언급 Top 3, 5월 실적 기대감",
          "signals": [
            "AWS reacceleration",
            "Reddit top 3",
            "Earnings setup"
          ]
        },
        {
          "rank": 5,
          "ticker": "NVDA",
          "reasoning": "MOPEX 차익실현 -0.26% 눌림목, $195 지지 확인되면 반등 구간 진입 기회",
          "signals": [
            "MOPEX pullback",
            "Support $195",
            "H200 demand"
          ]
        }
      ],
      "hidden_edges": [
        {
          "ticker": "MU",
          "reason": "뉴스 지표는 평범한데 옵션 C/P 2.8 + 기관 블록거래 4건 감지 · 다음주 HBM 발표 선반영 가능성"
        },
        {
          "ticker": "NBIS",
          "reason": "Reddit 언급 #21위인데 스마트머니 유입 Top 5 · AI 인프라 조용한 매집 흔적"
        }
      ],
      "overheated": [
        {
          "ticker": "ASTS",
          "reason": "Reddit 언급 +1214% 폭증, RSI 84 · 숏 스퀴즈 후 급격한 조정 리스크 높음"
        },
        {
          "ticker": "POET",
          "reason": "변동성 150%, 유동성 얇은 구간 · WSB 타겟팅 이후 Day-2 조정 패턴 반복"
        }
      ],
      "tickers": [
        {
          "rank": 1,
          "ticker": "TSLA",
          "name": "Tesla, Inc.",
          "sector": "Auto",
          "sector_full": "Auto / AI",
          "price": 400.62,
          "change_pct": 3.01,
          "score_total": 88.2,
          "score_reddit": 86,
          "score_news": 92,
          "score_trends": 82,
          "score_options": 90,
          "quadrant": "hot",
          "claude_rank": 1,
          "claude_summary": "AI5 칩·Terafab·UBS 상향 3중 호재로 5일 연속 상승, 월요 갭업 가능성 높지만 추격은 금지 — 되돌림 기다려야 해요.",
          "claude_signals": [
            "AI5 chip launch",
            "UBS upgrade to Buy",
            "5-day win streak"
          ],
          "narrative": "Tesla가 금요일 $400 돌파하며 +3.01% 마감. Terafab 전용 칩 공장 확장 발표 + AI5 추론 칩 공개 + UBS가 목표가 $480으로 상향. 5일 연속 상승으로 로보택시 이벤트 기대감 누적 중. 다만 Mag7 중 가장 과열 영역이라 월요일 갭업 시 추격보다는 $395~398 되돌림 매수가 안전해요.",
          "entry": 397,
          "tp1": 408,
          "tp2": 420,
          "sl": 390,
          "entry_comment": "갭업 시 시초가 관망 5분, $395~398 되돌림 대기 · 분할 3회 · $390 이탈시 손절",
          "catalysts": [
            "Terafab 전용 칩 공장 확장 발표",
            "AI5 추론 칩 공개 (H100 대비 3배 효율)",
            "UBS 목표가 $480으로 상향 (기존 $380)",
            "로보택시 이벤트 5월 예정"
          ],
          "risks": [
            "5일 연속 상승 후 RSI 72, 단기 과매수 구간",
            "옵션 IV 65 → 월요 갭업 시 변동성 수렴 위험",
            "Mag7 중 베타 2.1로 조정 시 낙폭 최대"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 842,
              "sentiment": 0.78
            },
            {
              "sub": "teslamotors",
              "count": 612,
              "sentiment": 0.85
            },
            {
              "sub": "stocks",
              "count": 289,
              "sentiment": 0.62
            }
          ],
          "news_headlines": [
            {
              "title": "TSLA's 5-Day Win Streak: AI5 Chip, Terafab & UBS Boost",
              "source": "Zacks",
              "ago": "2h"
            },
            {
              "title": "Tesla unveils AI5 inference chip, 3x efficiency vs H100",
              "source": "Bloomberg",
              "ago": "6h"
            },
            {
              "title": "UBS upgrades Tesla to Buy, raises target to $480",
              "source": "Reuters",
              "ago": "9h"
            }
          ],
          "trend_surge_pct": 58,
          "options_detail": {
            "call_volume": 485000,
            "put_volume": 152000,
            "cp_ratio": 3.19,
            "smart_money_ratio": 0.74,
            "unusual": true
          }
        },
        {
          "rank": 2,
          "ticker": "AAPL",
          "name": "Apple Inc.",
          "sector": "Tech",
          "sector_full": "Consumer Tech",
          "price": 245.8,
          "change_pct": 3.12,
          "score_total": 84.6,
          "score_reddit": 72,
          "score_news": 88,
          "score_trends": 76,
          "score_options": 85,
          "quadrant": "hot",
          "claude_rank": 2,
          "claude_summary": "금요일 +3.12% 강세 마감, WWDC·자사주 확장 + 중국 판매 반등 시그널 — 기관 매집 진행 중이에요.",
          "claude_signals": [
            "+3.1% close",
            "WWDC catalyst",
            "Institutional accumulation"
          ],
          "narrative": "Apple이 금요일 +3.12%로 Mag7 중 가장 강하게 마감. 중국 3월 판매가 YoY +7%로 반등했고, WWDC(6월)에서 Apple Intelligence 2.0 공개 예정. 자사주 매입 $110B 확장 발표 이후 기관 순매수 4일 연속. 추격보다 $243~245 되돌림 대기가 깔끔해요.",
          "entry": 244,
          "tp1": 250,
          "tp2": 256,
          "sl": 240,
          "entry_comment": "$243~245 1차 진입, 분할 2회 · 현금성 자산 두툼해서 타이트한 손절 유지",
          "catalysts": [
            "중국 3월 아이폰 판매 YoY +7% 반등",
            "WWDC 2026 Apple Intelligence 2.0 공개 예정 (6월)",
            "자사주 매입 $110B 확장 발표",
            "기관 4일 연속 순매수"
          ],
          "risks": [
            "단기 RSI 68, 과매수 접근",
            "Vision Pro 판매 실망감 재부각 가능성",
            "관세 정책 변동성 노출"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 412,
              "sentiment": 0.64
            },
            {
              "sub": "apple",
              "count": 358,
              "sentiment": 0.72
            },
            {
              "sub": "investing",
              "count": 195,
              "sentiment": 0.58
            }
          ],
          "news_headlines": [
            {
              "title": "Apple shares climb 3.4% on strong China iPhone demand",
              "source": "CNBC",
              "ago": "3h"
            },
            {
              "title": "Apple announces $110B buyback expansion",
              "source": "Reuters",
              "ago": "7h"
            },
            {
              "title": "WWDC 2026 preview: Apple Intelligence 2.0 expected",
              "source": "Bloomberg",
              "ago": "14h"
            }
          ],
          "trend_surge_pct": 42,
          "options_detail": {
            "call_volume": 312000,
            "put_volume": 98000,
            "cp_ratio": 3.18,
            "smart_money_ratio": 0.68,
            "unusual": false
          }
        },
        {
          "rank": 3,
          "ticker": "MU",
          "name": "Micron Technology",
          "sector": "Semi",
          "sector_full": "Semiconductors / Memory",
          "price": 128.4,
          "change_pct": 1.85,
          "score_total": 79.8,
          "score_reddit": 68,
          "score_news": 74,
          "score_trends": 72,
          "score_options": 92,
          "quadrant": "hidden",
          "claude_rank": 3,
          "claude_summary": "메모리 사이클 반등 + 옵션 C/P 2.8 + 기관 블록거래 4건 · 뉴스 터지기 전 선진입 타이밍이에요.",
          "claude_signals": [
            "Memory cycle turn",
            "Options C/P 2.8",
            "Block trades x4"
          ],
          "narrative": "Micron은 뉴스 지표가 평범해서 리테일은 놓치고 있지만, 옵션시장에서 조용히 움직이고 있어요. HBM3E 수주 루머 + 메모리 현물가 저점 반등 확인. 다음주 HBM 관련 발표 대기 중이라 선반영 가능성 높아요. 기관 블록거래 4건 포착.",
          "entry": 127,
          "tp1": 133,
          "tp2": 140,
          "sl": 124.5,
          "entry_comment": "22:35 1차 $127, $124.5 이탈시 즉시 손절 · 3일 스윙 가정",
          "catalysts": [
            "DRAM 현물가 3월 대비 +8% 반등",
            "HBM3E 하이퍼스케일러 수주 루머",
            "다음주 investor day 예정",
            "기관 블록거래 4건 포착 (스마트머니 ratio 0.82)"
          ],
          "risks": [
            "삼성/하이닉스 공급 과잉 재부각 위험",
            "반도체 수출 규제 뉴스 노출",
            "뉴스 재료 없으면 Trends 점수 빠르게 하락 가능"
          ],
          "reddit_sentiment_label": "중립",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 185,
              "sentiment": 0.48
            },
            {
              "sub": "semiconductors",
              "count": 142,
              "sentiment": 0.65
            },
            {
              "sub": "stocks",
              "count": 98,
              "sentiment": 0.52
            }
          ],
          "news_headlines": [
            {
              "title": "DRAM spot prices rebound 8% from March lows",
              "source": "DigiTimes",
              "ago": "5h"
            },
            {
              "title": "Micron investor day scheduled for next week",
              "source": "Reuters",
              "ago": "12h"
            },
            {
              "title": "HBM3E demand outlook remains robust - analyst note",
              "source": "Barron's",
              "ago": "18h"
            }
          ],
          "trend_surge_pct": 35,
          "options_detail": {
            "call_volume": 142000,
            "put_volume": 51000,
            "cp_ratio": 2.78,
            "smart_money_ratio": 0.82,
            "unusual": true
          }
        },
        {
          "rank": 4,
          "ticker": "AMZN",
          "name": "Amazon.com, Inc.",
          "sector": "AI SW",
          "sector_full": "Cloud / E-commerce",
          "price": 212.45,
          "change_pct": 1.62,
          "score_total": 78.3,
          "score_reddit": 82,
          "score_news": 78,
          "score_trends": 74,
          "score_options": 76,
          "quadrant": "hot",
          "claude_rank": 4,
          "claude_summary": "AWS 재가속 기대 + WSB Top 3 언급 + 5월 실적 세팅 · 다만 이미 1년 신고가 근처라 추격보다 되돌림이 깔끔해요.",
          "claude_signals": [
            "AWS reacceleration",
            "Reddit top 3",
            "Earnings May 1"
          ],
          "narrative": "Amazon은 WSB에서 가장 많이 언급되는 Mag7 중 하나예요. AWS 성장률이 Q1에 재가속된다는 기대감 + 5월 1일 실적 발표 세팅. 이미 52주 신고가 근처라 갭업 추격보다 $209~211 되돌림 대기가 유리해요.",
          "entry": 210.5,
          "tp1": 218,
          "tp2": 225,
          "sl": 206,
          "entry_comment": "$209~211 분할진입, 실적 D-2주 포지션 적극 구축",
          "catalysts": [
            "Q1 실적 발표 5월 1일 예정",
            "AWS 성장률 재가속 컨센서스 +22% YoY",
            "Prime Day 2026 여름 발표 임박",
            "Reddit WSB 언급량 Top 3"
          ],
          "risks": [
            "52주 신고가 근처 과매수 구간",
            "이커머스 마진 압박 재부각 가능성",
            "FTC 반독점 소송 뉴스 노출"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 624,
              "sentiment": 0.7
            },
            {
              "sub": "amazon",
              "count": 285,
              "sentiment": 0.62
            },
            {
              "sub": "investing",
              "count": 172,
              "sentiment": 0.65
            }
          ],
          "news_headlines": [
            {
              "title": "Amazon Q1 earnings preview: AWS reacceleration in focus",
              "source": "CNBC",
              "ago": "4h"
            },
            {
              "title": "AWS announces new AI inference service",
              "source": "TechCrunch",
              "ago": "10h"
            },
            {
              "title": "Amazon Prime Day 2026 expected in July - sources",
              "source": "Bloomberg",
              "ago": "22h"
            }
          ],
          "trend_surge_pct": 38,
          "options_detail": {
            "call_volume": 218000,
            "put_volume": 84000,
            "cp_ratio": 2.6,
            "smart_money_ratio": 0.65,
            "unusual": false
          }
        },
        {
          "rank": 5,
          "ticker": "NVDA",
          "name": "NVIDIA Corporation",
          "sector": "Semi",
          "sector_full": "Semiconductors / AI",
          "price": 198.35,
          "change_pct": -0.26,
          "score_total": 76.5,
          "score_reddit": 78,
          "score_news": 70,
          "score_trends": 68,
          "score_options": 86,
          "quadrant": "hidden",
          "claude_rank": 5,
          "claude_summary": "MOPEX 옵션만기 차익실현으로 -0.26% 눌림목, $195 지지 확인되면 반등 진입 자리 — 월요 갭하락 시 공격적 매수 구간이에요.",
          "claude_signals": [
            "MOPEX pullback",
            "Support test $195",
            "Call ratio rebuilding"
          ],
          "narrative": "NVDA는 금요일 MOPEX(옵션 월만기) 차익실현으로 -0.26% 조정. 1주일 동안 +6% 상승 이후 건강한 눌림목 수준. $195 지지선 확인되면 반등 진입 자리. 주중 H200 출하 데이터 발표 기대감이 재료로 대기 중이에요.",
          "entry": 196.5,
          "tp1": 203,
          "tp2": 210,
          "sl": 192,
          "entry_comment": "월요 갭하락 $195~197 매수 · 분할 3회 · 지지 이탈시 즉시 손절",
          "catalysts": [
            "H200 주간 출하 데이터 발표 대기 (화요일 예정)",
            "Blackwell 양산 램프업 가속 루머",
            "옵션 월만기 이후 신규 콜 포지션 재구축 시작",
            "스마트머니 비율 0.75 유지"
          ],
          "risks": [
            "5월 22일 실적 발표 전 변동성 확대 구간",
            "중국 수출 규제 리스크 재부각 가능",
            "$195 지지 이탈시 $188까지 추가 하락 가능"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 542,
              "sentiment": 0.65
            },
            {
              "sub": "semiconductors",
              "count": 285,
              "sentiment": 0.72
            },
            {
              "sub": "stocks",
              "count": 158,
              "sentiment": 0.58
            }
          ],
          "news_headlines": [
            {
              "title": "NVIDIA pulls back 0.26% on MOPEX options expiration",
              "source": "Yahoo Finance",
              "ago": "3h"
            },
            {
              "title": "Analyst: Blackwell ramp accelerating, H200 demand robust",
              "source": "Barron's",
              "ago": "11h"
            },
            {
              "title": "NVIDIA Q1 FY27 earnings scheduled for May 22",
              "source": "Reuters",
              "ago": "16h"
            }
          ],
          "trend_surge_pct": 28,
          "options_detail": {
            "call_volume": 398000,
            "put_volume": 154000,
            "cp_ratio": 2.58,
            "smart_money_ratio": 0.75,
            "unusual": false
          }
        },
        {
          "rank": 6,
          "ticker": "GOOGL",
          "name": "Alphabet Inc.",
          "sector": "AI SW",
          "sector_full": "AI Software",
          "price": 182.3,
          "change_pct": 1.45,
          "score_total": 74.2,
          "score_reddit": 72,
          "score_news": 76,
          "score_trends": 70,
          "score_options": 78,
          "quadrant": "hot",
          "claude_rank": 6,
          "claude_summary": "Gemini 2.5 · AI 광고 매출 반등 기대, WSB 언급 Top 5 유지 · 실적(4월 29일) 앞두고 포지션 빌드업 구간.",
          "claude_signals": [
            "Gemini 2.5 launch",
            "Ad revenue rebound",
            "Earnings Apr 29"
          ],
          "narrative": "Alphabet은 Gemini 2.5 공개 + AI 기반 광고 매출 YoY +15% 컨센서스 + 4월 29일 실적 발표 앞두고 기관 포지션 빌드업 중. WSB에서도 꾸준히 Top 5 유지하는 모멘텀 + 펀더멘털 동시 보유 종목.",
          "entry": 180,
          "tp1": 186,
          "tp2": 192,
          "sl": 176.5,
          "entry_comment": "$180 근처 분할진입, 실적 전 절반만 · 손절 타이트",
          "catalysts": [
            "Gemini 2.5 공개",
            "Q1 실적 4월 29일",
            "AI 광고 매출 YoY +15% 컨센",
            "YouTube AI 쇼츠 광고 확대"
          ],
          "risks": [
            "DOJ 반독점 판결 대기",
            "검색 광고 점유율 방어 과제",
            "실적 전 변동성 확대"
          ],
          "reddit_sentiment_label": "긍정",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 385,
              "sentiment": 0.68
            },
            {
              "sub": "google",
              "count": 142,
              "sentiment": 0.72
            },
            {
              "sub": "investing",
              "count": 98,
              "sentiment": 0.6
            }
          ],
          "news_headlines": [
            {
              "title": "Alphabet Q1 earnings: Gemini, ad recovery in focus",
              "source": "CNBC",
              "ago": "5h"
            },
            {
              "title": "Google rolls out Gemini 2.5 to Workspace",
              "source": "Reuters",
              "ago": "14h"
            }
          ],
          "trend_surge_pct": 32,
          "options_detail": {
            "call_volume": 165000,
            "put_volume": 62000,
            "cp_ratio": 2.66,
            "smart_money_ratio": 0.7,
            "unusual": false
          }
        },
        {
          "rank": 7,
          "ticker": "META",
          "name": "Meta Platforms, Inc.",
          "sector": "AI SW",
          "sector_full": "Social / AI",
          "price": 632.1,
          "change_pct": 1.18,
          "score_total": 72.8,
          "score_reddit": 65,
          "score_news": 78,
          "score_trends": 62,
          "score_options": 82,
          "quadrant": "hot",
          "claude_rank": 7,
          "claude_summary": "AI 광고 CPM 반등 + Reality Labs 손실 축소 + 4월 30일 실적 · Mag7 중 가장 저평가 구간이에요.",
          "claude_signals": [
            "AI ad CPM +12%",
            "Reality Labs loss narrowing",
            "Earnings Apr 30"
          ],
          "narrative": "Meta는 AI 광고 CPM이 YoY +12% 반등 확인 + Reality Labs 손실 QoQ -$400M 축소 + 4월 30일 실적 발표. PER 22배로 Mag7 중 가장 저평가. Llama 4 공개도 5월 임박.",
          "entry": 626,
          "tp1": 648,
          "tp2": 670,
          "sl": 614,
          "entry_comment": "$626~630 진입, 실적 10일 전이라 포지션 크기 보수적으로",
          "catalysts": [
            "Q1 실적 4월 30일",
            "Llama 4 공개 5월 예정",
            "AI 광고 CPM YoY +12%",
            "Reality Labs 손실 축소 궤도"
          ],
          "risks": [
            "Reality Labs 재적자 확대 위험",
            "규제 리스크 지속",
            "인스타그램 성장 둔화 우려"
          ],
          "reddit_sentiment_label": "중립",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 245,
              "sentiment": 0.55
            },
            {
              "sub": "stocks",
              "count": 128,
              "sentiment": 0.62
            }
          ],
          "news_headlines": [
            {
              "title": "Meta Q1 preview: AI ad spend accelerates",
              "source": "Bloomberg",
              "ago": "6h"
            },
            {
              "title": "Llama 4 coming in May - Zuckerberg",
              "source": "The Verge",
              "ago": "22h"
            }
          ],
          "trend_surge_pct": 25,
          "options_detail": {
            "call_volume": 142000,
            "put_volume": 48000,
            "cp_ratio": 2.96,
            "smart_money_ratio": 0.74,
            "unusual": false
          }
        },
        {
          "rank": 8,
          "ticker": "AVGO",
          "name": "Broadcom Inc.",
          "sector": "Semi",
          "sector_full": "Semiconductors",
          "price": 1842.3,
          "change_pct": 0.92,
          "score_total": 71.5,
          "score_reddit": 52,
          "score_news": 72,
          "score_trends": 58,
          "score_options": 88,
          "quadrant": "hidden",
          "claude_rank": 8,
          "claude_summary": "커스텀 ASIC 수주 확대 + 옵션 C/P 3.2 · 리테일은 모르지만 기관이 조용히 매집 중이에요.",
          "claude_signals": [
            "Custom ASIC deals",
            "Options C/P 3.2",
            "Institutional accumulation"
          ],
          "narrative": "Broadcom은 리테일 관심은 낮지만 기관에서 커스텀 ASIC 수주(Meta·Google 대상) 기대감으로 옵션 C/P 3.2 확인. 다음 실적은 6월이지만 선반영 구간 진입.",
          "entry": 1830,
          "tp1": 1880,
          "tp2": 1930,
          "sl": 1795,
          "entry_comment": "분할진입 유리, 단가 높아 포지션 크기 관리 필수",
          "catalysts": [
            "Meta 커스텀 ASIC 수주 루머",
            "Google TPU 후속 주문 기대",
            "VMware 시너지 가시화"
          ],
          "risks": [
            "Mag7 CapEx 둔화 노출",
            "주가 변동성 확대",
            "실적까지 2개월 대기"
          ],
          "reddit_sentiment_label": "중립",
          "reddit_breakdown": [
            {
              "sub": "semiconductors",
              "count": 95,
              "sentiment": 0.62
            },
            {
              "sub": "stocks",
              "count": 68,
              "sentiment": 0.55
            }
          ],
          "news_headlines": [
            {
              "title": "Broadcom wins additional Meta ASIC design - sources",
              "source": "Reuters",
              "ago": "8h"
            }
          ],
          "trend_surge_pct": 18,
          "options_detail": {
            "call_volume": 82000,
            "put_volume": 26000,
            "cp_ratio": 3.15,
            "smart_money_ratio": 0.81,
            "unusual": true
          }
        },
        {
          "rank": 9,
          "ticker": "MSFT",
          "name": "Microsoft Corporation",
          "sector": "AI SW",
          "sector_full": "AI Software / Cloud",
          "price": 428.5,
          "change_pct": 1.05,
          "score_total": 70.8,
          "score_reddit": 58,
          "score_news": 74,
          "score_trends": 56,
          "score_options": 80,
          "quadrant": "watch",
          "claude_rank": 9,
          "claude_summary": "Copilot ARR +45% · Azure 성장 가속 · 실적 4월 24일 · 안정적 Mag7 코어 포지션이에요.",
          "claude_signals": [
            "Copilot ARR +45%",
            "Azure acceleration",
            "Earnings Apr 24"
          ],
          "narrative": "Microsoft는 Copilot ARR +45% YoY + Azure 성장 재가속 + 4월 24일 실적 발표. 변동성 낮고 안정적이라 코어 포지션으로 적합. 단, 실적 전 이미 컨센 선반영.",
          "entry": 425,
          "tp1": 438,
          "tp2": 450,
          "sl": 418,
          "entry_comment": "코어 포지션 · 실적 D-1주 구축 완료하고 홀딩",
          "catalysts": [
            "Q3 실적 4월 24일",
            "Copilot ARR YoY +45%",
            "Azure 성장 재가속"
          ],
          "risks": [
            "컨센서스 선반영",
            "AI CapEx 과잉 우려 재부각 가능",
            "달러 강세 환율 역풍"
          ],
          "reddit_sentiment_label": "중립",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 142,
              "sentiment": 0.55
            },
            {
              "sub": "stocks",
              "count": 98,
              "sentiment": 0.62
            }
          ],
          "news_headlines": [
            {
              "title": "MSFT Q3 preview: Azure, Copilot monetization key",
              "source": "Barron's",
              "ago": "7h"
            }
          ],
          "trend_surge_pct": 15,
          "options_detail": {
            "call_volume": 185000,
            "put_volume": 72000,
            "cp_ratio": 2.57,
            "smart_money_ratio": 0.68,
            "unusual": false
          }
        },
        {
          "rank": 10,
          "ticker": "SOFI",
          "name": "SoFi Technologies",
          "sector": "Fin",
          "sector_full": "Fintech",
          "price": 18.4,
          "change_pct": 2.85,
          "score_total": 69.5,
          "score_reddit": 85,
          "score_news": 62,
          "score_trends": 74,
          "score_options": 58,
          "quadrant": "hot",
          "claude_rank": 10,
          "claude_summary": "WSB 언급 Top 10 꾸준 + 대출 성장 재가속 기대 · 실적(4월 29일) 서프라이즈 가능성 높아요.",
          "claude_signals": [
            "WSB top 10",
            "Loan growth accel",
            "Earnings Apr 29"
          ],
          "narrative": "SoFi는 WSB 단골 + 대출 성장 재가속 + 4월 29일 실적. 금리 인하 사이클 수혜주로 재조명. 다만 변동성 큰 종목이라 포지션 크기 주의.",
          "entry": 18.1,
          "tp1": 19.2,
          "tp2": 20.5,
          "sl": 17.45,
          "entry_comment": "포지션 작게, 변동성 큰 종목 · 실적 전 절반만 빌드",
          "catalysts": [
            "Q1 실적 4월 29일",
            "금리 인하 사이클 수혜",
            "대출 성장 재가속 기대"
          ],
          "risks": [
            "변동성 큰 종목",
            "금융주 섹터 리스크",
            "WSB 과열 가능성"
          ],
          "reddit_sentiment_label": "매우 긍정",
          "reddit_breakdown": [
            {
              "sub": "wallstreetbets",
              "count": 725,
              "sentiment": 0.78
            },
            {
              "sub": "sofi",
              "count": 285,
              "sentiment": 0.85
            },
            {
              "sub": "fintech",
              "count": 95,
              "sentiment": 0.62
            }
          ],
          "news_headlines": [
            {
              "title": "SoFi Q1 earnings preview: loan growth in focus",
              "source": "Seeking Alpha",
              "ago": "9h"
            }
          ],
          "trend_surge_pct": 48,
          "options_detail": {
            "call_volume": 92000,
            "put_volume": 48000,
            "cp_ratio": 1.92,
            "smart_money_ratio": 0.58,
            "unusual": false
          }
        },
        {
          "rank": 11,
          "ticker": "AMD",
          "sector": "Semi",
          "sector_full": "Semiconductors",
          "price": 162.8,
          "change_pct": 0.85,
          "score_total": 67.2,
          "score_reddit": 72,
          "score_news": 65,
          "score_trends": 62,
          "score_options": 70,
          "quadrant": "watch",
          "claude_rank": null
        },
        {
          "rank": 12,
          "ticker": "PLTR",
          "sector": "AI SW",
          "sector_full": "AI Software",
          "price": 28.45,
          "change_pct": 2.15,
          "score_total": 66.8,
          "score_reddit": 88,
          "score_news": 60,
          "score_trends": 78,
          "score_options": 52,
          "quadrant": "hot",
          "claude_rank": null
        },
        {
          "rank": 13,
          "ticker": "NBIS",
          "sector": "AI SW",
          "sector_full": "AI Infrastructure",
          "price": 42.1,
          "change_pct": 3.25,
          "score_total": 65.4,
          "score_reddit": 58,
          "score_news": 52,
          "score_trends": 48,
          "score_options": 82,
          "quadrant": "hidden",
          "claude_rank": null
        },
        {
          "rank": 14,
          "ticker": "RKLB",
          "sector": "Space",
          "sector_full": "Space / Launch",
          "price": 24.3,
          "change_pct": 4.15,
          "score_total": 64.8,
          "score_reddit": 82,
          "score_news": 58,
          "score_trends": 88,
          "score_options": 52,
          "quadrant": "hot",
          "claude_rank": null
        },
        {
          "rank": 15,
          "ticker": "COIN",
          "sector": "Fin",
          "sector_full": "Crypto Exchange",
          "price": 248.5,
          "change_pct": 1.65,
          "score_total": 63.5,
          "score_reddit": 75,
          "score_news": 62,
          "score_trends": 70,
          "score_options": 48,
          "quadrant": "watch",
          "claude_rank": null
        },
        {
          "rank": 16,
          "ticker": "RDDT",
          "sector": "Social",
          "sector_full": "Social / Platform",
          "price": 142.2,
          "change_pct": 2.45,
          "score_total": 62.8,
          "score_reddit": 78,
          "score_news": 58,
          "score_trends": 72,
          "score_options": 42,
          "quadrant": "watch",
          "claude_rank": null
        },
        {
          "rank": 17,
          "ticker": "INTC",
          "sector": "Semi",
          "sector_full": "Semiconductors",
          "price": 32.8,
          "change_pct": -0.85,
          "score_total": 58.5,
          "score_reddit": 62,
          "score_news": 68,
          "score_trends": 52,
          "score_options": 52,
          "quadrant": "watch",
          "claude_rank": null
        },
        {
          "rank": 18,
          "ticker": "JPM",
          "sector": "Fin",
          "sector_full": "Banking",
          "price": 258.4,
          "change_pct": 1.25,
          "score_total": 57.8,
          "score_reddit": 42,
          "score_news": 72,
          "score_trends": 45,
          "score_options": 68,
          "quadrant": "watch",
          "claude_rank": null
        },
        {
          "rank": 19,
          "ticker": "ASTS",
          "sector": "Space",
          "sector_full": "Satellite Comm",
          "price": 38.5,
          "change_pct": 15.8,
          "score_total": 56.5,
          "score_reddit": 98,
          "score_news": 45,
          "score_trends": 96,
          "score_options": 22,
          "quadrant": "overheat",
          "claude_rank": null
        },
        {
          "rank": 20,
          "ticker": "POET",
          "sector": "Semi",
          "sector_full": "Photonics",
          "price": 6.25,
          "change_pct": -8.45,
          "score_total": 52.3,
          "score_reddit": 92,
          "score_news": 38,
          "score_trends": 88,
          "score_options": 18,
          "quadrant": "overheat",
          "claude_rank": null
        }
      ]
    }
  }
};
