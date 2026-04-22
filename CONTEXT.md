# CS Real 專案 CONTEXT

> 每次動手 Claude Code 之前，先確認這份文件是最新的。

---

## 場館基本資訊

| 欄位 | 內容 |
|------|------|
| 正式名稱 | CS Real |
| 舊名（勿作主名） | 城市戰場（可作關鍵字） |
| 類型 | 室內生存遊戲場（Indoor Airsoft Arena） |
| 地址 | 高雄市苓雅區三多四路63號 |
| 位置描述 | 鄰近捷運三多商圈站 |
| 電話 | 07-6119160 |
| 預約系統 | https://csrealbookings.cs-kaohsiung-service.workers.dev/ |
| 戰鬥人格測驗 | https://mindtest.cs-kaohsiung-service.workers.dev/ |
| 營業時間 | 週二、三、四 14:00–22:00；假日 08:00–22:00；週一及連假前後一天公休 |
| 費用方案 | 待補 |

---

## 技術架構

| 項目 | 內容 |
|------|------|
| 網站 Repo | MikeTaiwan/csreal-website |
| 部署平台 | Cloudflare Pages |
| 網站網址 | csreal-website.cs-kaohsiung-service.workers.dev |
| 技術選型 | 純 HTML + CSS + JS，單一 index.html，無框架 |
| 版本控制 | GitHub，main branch 自動部署 |
| 開發環境 | MacBook Pro，Node.js 已裝，Claude Code 已安裝並登入 |

---

## 設計規範

| 項目 | 內容 |
|------|------|
| 背景色 | #0a0a0a 深黑 |
| 主色調 | #4a5c2a 橄欖綠 |
| 文字色 | 白色 |
| 風格 | 軍事硬派，乾淨不花俏 |
| RWD | 桌機 4 欄 → 平板 2 欄 → 手機 1 欄 |

---

## 網站目前區塊結構

1. Nav（固定頂部，捲動後磨砂玻璃效果）
2. Hero（標語：真實城市戰場，就在高雄。入列，作戰。）
3. 關於 About
4. 特色 Features（4 格卡片）
5. 適合族群 Audience
6. **了解你的戰鬥人格**（連結至 mindtest）
7. FAQ（accordion 展開，7 題）
8. CTA Band
9. Footer

---

## GEO 優化關鍵字

**主要關鍵字**
- 高雄生存遊戲
- 高雄室內生存遊戲
- 高雄水彈場
- 三多商圈娛樂
- 高雄團體活動推薦

**長尾關鍵字**
- 高雄哪裡可以玩生存遊戲
- 高雄室內射擊體驗推薦
- 高雄企業團建活動推薦
- 適合大人的高雄娛樂活動
- 高雄捷運三多商圈附近好玩的地方

---

## Schema Markup（JSON-LD）

```json
{
  "@type": "LocalBusiness",
  "name": "CS Real",
  "streetAddress": "三多四路63號",
  "addressLocality": "苓雅區",
  "addressRegion": "高雄市",
  "addressCountry": "TW",
  "telephone": "07-6119160"
}
```

---

## 待辦 / 未來功能

- [ ] 補上費用方案
- [ ] 綁定自訂網域
- [ ] 活動專頁（企業團建、生日慶生）

---

## Claude Skills 清單

| Skill | 用途 |
|-------|------|
| csreal-post-generator | IG / Threads 貼文 |
| csreal-facebook-post | Facebook 貼文 |
| csreal-geo-content | 網站 GEO 內容生成 |

---

_最後更新：2026-04-22_
