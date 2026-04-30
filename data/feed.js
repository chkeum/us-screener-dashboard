// ============================================================
// US Screener Dashboard · Data Feed (v2 schema)
// ============================================================
// 이 파일은 스케줄 태스크(us-daily-sentiment-screener)가 매일 덮어씁니다.
// 구조: window.__SCREENER_FEED__ = { manifest, archive }
//   manifest: 최신 30개 리포트 메타데이터
//   archive:  날짜별 전체 데이터 (최근 30일 보존)
// ------------------------------------------------------------
window.__SCREENER_FEED__ = {
  "manifest": {
    "version": 2,
    "reports": [
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
          "entry": 208.0,
          "tp1": 218.0,
          "tp2": 228.0,
          "sl": 204.0,
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
          "entry": 224.0,
          "tp1": 235.0,
          "tp2": 248.0,
          "sl": 218.0,
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
          "score_total": 84.0,
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
          "entry": 235.0,
          "tp1": 252.0,
          "tp2": 268.0,
          "sl": 228.0,
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
          "entry": 197.0,
          "tp1": 207.0,
          "tp2": 215.0,
          "sl": 193.0,
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
          "entry": 200.0,
          "tp1": 210.0,
          "tp2": 220.0,
          "sl": 196.0,
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
          "price": 1745.0,
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
          "change_pct": -1.0,
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
          "score_total": 64.0,
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
          "tp1": 211.0,
          "tp2": 218.0,
          "sl": 201.0,
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
          "entry": 471.0,
          "tp1": 485.0,
          "tp2": 498.0,
          "sl": 463.0,
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
          "entry": 150.0,
          "tp1": 159.0,
          "tp2": 167.0,
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
          "tp1": 192.0,
          "tp2": 201.0,
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
          "price": 1742.0,
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
          "entry": 1735.0,
          "tp1": 1810.0,
          "tp2": 1880.0,
          "sl": 1705.0,
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
          "entry": 171.0,
          "tp1": 178.0,
          "tp2": 185.0,
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
          "entry": 237.0,
          "tp1": 248.0,
          "tp2": 258.0,
          "sl": 233.0,
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
          "tp1": 138.0,
          "tp2": 143.0,
          "sl": 129.0,
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
          "entry": 47.0,
          "tp1": 52.0,
          "tp2": 56.0,
          "sl": 45.0,
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
          "price": 1652.0,
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
          "entry": 1640.0,
          "tp1": 1720.0,
          "tp2": 1800.0,
          "sl": 1605.0,
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
          "change_pct": 1.0,
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
          "tp1": 206.0,
          "tp2": 212.0,
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
          "tp1": 154.0,
          "tp2": 161.0,
          "sl": 143.0,
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
          "entry": 242.0,
          "tp1": 251.0,
          "tp2": 258.0,
          "sl": 236.0,
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
          "tp1": 187.0,
          "tp2": 192.0,
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
          "entry": 408.0,
          "tp1": 428.0,
          "tp2": 448.0,
          "sl": 395.0,
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
          "entry": 166.0,
          "tp1": 173.0,
          "tp2": 179.0,
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
          "entry": 614.0,
          "tp1": 632.0,
          "tp2": 650.0,
          "sl": 606.0,
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
          "entry": 475.0,
          "tp1": 488.0,
          "tp2": 498.0,
          "sl": 468.0,
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
          "tp1": 224.0,
          "tp2": 230.0,
          "sl": 212.0,
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
          "price": 1872.0,
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
          "entry": 1858.0,
          "tp1": 1912.0,
          "tp2": 1965.0,
          "sl": 1822.0,
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
          "change_pct": -1.0,
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
