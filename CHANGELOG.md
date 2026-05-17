# Changelog

本檔記錄「臺灣運動地圖」（twexercisemap）專案的演進。

---

## [1.0.0] — 2026-05-17 ~ 2026-05-18 · 首版上線

### Session 概述

從零打造一個展示運動部「運動城市調查」開放資料的互動式視覺化網站，並完成雙平台部署（Cloudflare Pages + Vercel）、SEO/AEO 優化、A+ 級資安強化。最終上線網址 https://twexercisemap.sportsmedicine.tw/。

---

### 🎯 Phase 1 · 資料探索與專案初始化

**Commit `623c211`** — 建立臺灣運動地圖互動式儀表板
- 透過 TwinkleAI Open Data MCP 從運動部 dataset 24375 取得 40,669 筆問卷資料
- 整合民國 102–112 年（2013–2023）、22 縣市、4 種運動強度（7100/7230/7330/7333）
- 建立 4 大互動分頁：
  - 縣市排名（含 4 種強度切換）
  - 歷年趨勢（多縣市對比）
  - 熱門運動 Top 20
  - 強度漏斗（全國 vs 縣市）
- 6 種互動：KPI 卡跳分頁、分組快選、自動播放、點長條開抽屜、搜尋過濾、鍵盤快捷鍵

**Commit `f35b02b`** — Meta tags 與 .gitignore

---

### 🏗 Phase 2 · 雙平台部署準備

**Commit `17131de`** — Tailwind CDN → 本地 build
- 從 cdn.tailwindcss.com（700KB Play CDN）改為本地編譯
- 編譯後 CSS 僅 16KB（**↓ 98%**）
- 消除 production 警告，首屏延遲縮短 ~200ms

**Commit `4d18e4e`** — Cloudflare Pages 部署支援
- 加入 `_headers`、`_redirects`、`wrangler.toml`
- 與既有 `vercel.json` 並存，可雙平台部署

---

### 🎨 Phase 3 · UI/UX 精修

**Commit `58ab151`** — 強度按鈕中文化
- 7100 / 7230 / 7330 / 7333 → 有運動 / 每週3+次 / 加30分鐘 / 規律運動
- 圖表下方新增分級說明卡片
- 移除「醫療免責」項目

**Commit `316cce9`** — 移除「資料維度」KPI 卡片
- KPI 由 4 欄改 3 欄（橘/紫/綠）

**Commit `f30189e`** — 歷年排名動畫
- 新增紫色控制面板與「播放歷年動畫」按鈕
- 可選擇任一縣市追蹤其 102–112 年排名變化
- 動畫每 1.1 秒前進一年，cubicInOut 平滑過渡
- 標題刪除句號

**Commit `3aa983d`** — Tailwind responsive variants 修復
- 修復過期 CSS 缺少 `@media` queries 的 bug
- KPI 改 `sm:grid-cols-3`，640px 即橫排
- 播放鍵改 inline-style 確保視覺穩定
- CSS 加 `?v=20260518` 版本參數

---

### 🔍 Phase 4 · SEO / AEO 全面優化

**Commit `b406729`** — SEO/AEO 第一波
- 完整 meta tags：description、keywords、author、robots、canonical、hreflang
- 完整 Open Graph + Twitter Card
- SVG 內嵌 favicon + apple-touch-icon（橘紫漸層 logo）
- JSON-LD 結構化資料：WebSite + Organization + Dataset + FAQPage
- `robots.txt`：明確 allow 10+ AI 爬蟲（GPTBot、ChatGPT-User、PerplexityBot、ClaudeBot、Google-Extended 等）
- `llms.txt`：給 AI 引擎讀的結構化摘要
- `sitemap.xml`
- skip-link、`<main>` 語意標籤
- 列印用樣式

**Commit `2e33c34`** — SEO/AEO 第二波
- 自動生成 1200×630 OG 預覽圖（Chrome headless 渲染）
- 加入 Cloudflare Web Analytics 與 GA4 註解區塊
- 加入 Google / Bing 搜尋引擎驗證 meta 區塊
- README 加入完整 GSC/Bing/CFWA/GA4 設定步驟

---

### 👤 Phase 5 · 製作者標示

**Commit `e501858`** — 加入作者署名
- 頁尾新增漸層卡片：運動醫學科 · 吳易澄醫師
- 連結至 https://blog.sportsmedicine.tw/
- JSON-LD 更新為 Person schema（含 jobTitle、affiliation）

**Commit `dbd2fa9`** — 精簡頁尾
- 刪除「聯新國際醫院」副標
- 刪除「造訪部落格」按鈕（連結改 attached 在醫師名）

---

### 📊 Phase 6 · 分析工具上線

**Commit `22e8674`** — Cloudflare Web Analytics 啟用
- token 填入並啟用 beacon.js
- 無 cookie、自動 GDPR 合規

---

### 🎁 Phase 7 · 內容收合

**Commit `e04b9ab`** — About this Project 改摺疊式
- 主頁面更簡潔（從 600px → 60px 高度）
- SEO/AEO 無影響（`<details>` 內容在 DOM，JSON-LD FAQ 保留）

---

### 🛡 Phase 8 · 資安強化（B → A+）

**Commit `7218432`** — 第一輪資安強化
- 新增 HSTS（2 年 + preload）
- 新增完整 Content-Security-Policy（CSP）
- 新增 COOP + CORP 跨來源隔離
- 擴充 Permissions-Policy 至 9 項權限封鎖
- ECharts CDN 加 SHA-384 SRI 完整性驗證
- 消除重複 headers
- Mozilla Observatory：**B (75)**

**Commit `8096949`** — 第二輪資安強化
- 抽離 1000+ 行 inline `<script>` 至 `app.js`
- CSP 移除 script-src 的 `'unsafe-inline'`
- Mozilla Observatory：**A+ (115/100)** 🏆

---

## 📈 最終成果摘要

| 面向 | 成果 |
|------|------|
| **資料量** | 40,669 筆問卷 × 22 縣市 × 11 年 × 4 強度 |
| **互動圖表** | 4 大分頁、6+ 種互動模式 |
| **載入效能** | Tailwind 700KB → 16KB（98% 減少）|
| **資安等級** | Mozilla Observatory **A+ (115)** |
| **SEO/AEO** | JSON-LD（Dataset + FAQ）、llms.txt、10+ AI 爬蟲 allow |
| **部署平台** | Cloudflare Pages（主）+ Vercel（備）|
| **網域** | twexercisemap.sportsmedicine.tw（綁定完成）|
| **總 commits** | 16 |

---

## 🔗 連結

- 上線網址：https://twexercisemap.sportsmedicine.tw/
- GitHub：https://github.com/keanu77/twexercisemap
- 原始資料：[運動部 dataset 24375](https://data.gov.tw/dataset/24375)
- 製作者：[運動醫學科 · 吳易澄醫師](https://blog.sportsmedicine.tw/)
