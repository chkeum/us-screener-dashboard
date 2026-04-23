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
