# 臺灣運動地圖

從 22 縣市運動參與資料，看見臺灣人的運動習慣與城市差異。

互動式視覺化儀表板，基於運動部「運動城市調查各縣市規律運動現況」開放資料（dataset 24375，民國 102–112 年）。

## 功能

- **縣市排名** — 22 縣市運動人口比例，支援 4 種強度定義切換、分組快選、自動播放動畫
- **歷年趨勢** — 規律運動比例 102–112 年走勢，可勾選最多 8 個縣市對比
- **熱門運動** — Top 20 運動項目排行 + 歷年趨勢，可切換年份
- **強度漏斗** — 全國 vs 任選縣市的「有運動 → 規律運動」流失分析
- **縣市詳情抽屜** — 點任一條形圖開啟，含四強度卡片與迷你趨勢
- **鍵盤快捷鍵** — `1-4` 切分頁 / `←→` 切強度 / `Space` 播放 / `Esc` 關閉

## 技術棧

- **HTML + Vanilla JS**（單一 `index.html`）
- **Tailwind CSS v3**（local build，16 KB minified）
- **ECharts 5.5**（via jsDelivr CDN）
- **字體**：Fira Sans / Fira Code（介面 + 數字）+ Noto Sans TC（中文）

## 本地開發

```bash
npm install
npm run dev        # watch Tailwind
# 用瀏覽器開啟 index.html
```

## 部署

本專案同時支援 **Vercel** 與 **Cloudflare Pages**，配置檔已備好，依需求擇一即可。

### Option A：Vercel

```bash
npx vercel         # 互動式部署
# 或：推上 GitHub 後從 vercel.com import repo
```

`vercel.json` 已設定 build command、cache headers、安全 headers。

### Option B：Cloudflare Pages（台灣 edge 速度較快、頻寬無上限）

1. 前往 [dash.cloudflare.com](https://dash.cloudflare.com/) → Workers & Pages → Create → Pages
2. Connect to Git → 選 `keanu77/twexercisemap`
3. Build 設定：
   - **Framework preset**: None
   - **Build command**: `npm run build`
   - **Build output directory**: `.`（根目錄）
   - **Root directory**: `/`
   - **Node version**: `20`（在 Environment variables 加 `NODE_VERSION=20`）
4. Save and Deploy

`_headers`、`_redirects`、`wrangler.toml` 已備好，Cloudflare 會自動套用。

### CLI 部署 Cloudflare（選用）

```bash
npm install -g wrangler
wrangler login
npm run build
wrangler pages deploy . --project-name=twexercisemap
```

## SEO / AEO / Analytics 設定

### Google Search Console 註冊（提交 sitemap）

1. 前往 [Google Search Console](https://search.google.com/search-console)
2. 新增資源 → 選 **URL 前置字元** → 填 `https://twexercisemap.sportsmedicine.tw/`
3. 驗證方式選 **HTML 標記** → 複製 `content="..."` 那串驗證碼
4. 打開 `index.html`，找到註解 `<!-- Google Search Console: -->`，把驗證碼填入並取消註解
5. Commit + push 後回 GSC 點 **驗證**
6. 驗證成功後到 **Sitemap** 頁籤，提交 `sitemap.xml`

### Bing Webmaster Tools（同步加入，多一個流量來源）

1. 前往 [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. 用 Google 帳號登入後可一鍵匯入已驗證的網站
3. 或手動加入並用 `msvalidate.01` meta tag 驗證（HTML 中已有註解預留）

### Cloudflare Web Analytics（推薦，無 cookie、不影響效能）

1. 進 [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Analytics & Logs → Web Analytics**
2. 點 **Add a site** → 輸入 `twexercisemap.sportsmedicine.tw`
3. 複製產生的 JavaScript snippet 中的 `data-cf-beacon` token
4. 打開 `index.html`，找到 Cloudflare Web Analytics 註解區塊，把 token 填入並取消註解
5. Commit + push 後 24 小時內可在 dashboard 看到流量

### Google Analytics 4（選用，更詳細的使用者行為分析）

1. 前往 [Google Analytics](https://analytics.google.com/) 建立 GA4 屬性
2. 取得 Measurement ID（格式 `G-XXXXXXXXXX`）
3. 在 `index.html` 找到 GA4 註解區塊，將 ID 填入（兩處）並取消註解

⚠️ **隱私建議**：Cloudflare Web Analytics 因無 cookie 不需要 cookie consent banner；GA4 則需依 GDPR 提供 opt-out。

## 資料來源

[運動部「運動城市調查各縣市規律運動現況」](https://data.gov.tw/dataset/24375) · 政府資料開放授權條款 v1.0

資料透過 [TwinkleAI Open Data MCP](https://api.twinkleai.tw/mcp/) 取得。

## 授權

程式碼採 MIT 授權。資料引用請註明原始來源（運動部）。
