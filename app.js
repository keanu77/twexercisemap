// ============ DATA (從運動部 dataset 24375 提取) ============
const rankingData = {
  7100: [
    ["連江縣", 82.2],
    ["臺北市", 81.1],
    ["新竹市", 80.7],
    ["高雄市", 79.6],
    ["桃園市", 78.8],
    ["臺中市", 78.2],
    ["澎湖縣", 77.9],
    ["金門縣", 76.5],
    ["新北市", 76.4],
    ["南投縣", 75.7],
    ["基隆市", 75.6],
    ["宜蘭縣", 75.0],
    ["花蓮縣", 74.8],
    ["嘉義市", 74.7],
    ["苗栗縣", 74.5],
    ["彰化縣", 74.3],
    ["新竹縣", 74.2],
    ["屏東縣", 74.0],
    ["臺東縣", 72.4],
    ["雲林縣", 70.9],
    ["臺南市", 70.8],
    ["嘉義縣", 69.3],
  ],
  7230: [
    ["連江縣", 66.8],
    ["臺北市", 65.6],
    ["高雄市", 63.4],
    ["澎湖縣", 63.1],
    ["新竹市", 61.8],
    ["嘉義市", 61.7],
    ["金門縣", 61.6],
    ["宜蘭縣", 61.5],
    ["桃園市", 60.2],
    ["花蓮縣", 60.2],
    ["臺中市", 59.8],
    ["臺東縣", 59.0],
    ["基隆市", 58.4],
    ["新北市", 58.3],
    ["苗栗縣", 58.2],
    ["南投縣", 57.5],
    ["新竹縣", 57.4],
    ["屏東縣", 57.3],
    ["臺南市", 56.5],
    ["彰化縣", 56.4],
    ["雲林縣", 54.5],
    ["嘉義縣", 53.3],
  ],
  7330: [
    ["連江縣", 53.0],
    ["花蓮縣", 51.9],
    ["臺北市", 51.1],
    ["金門縣", 50.9],
    ["宜蘭縣", 50.8],
    ["臺東縣", 50.1],
    ["澎湖縣", 49.7],
    ["嘉義市", 49.1],
    ["屏東縣", 47.4],
    ["南投縣", 47.4],
    ["桃園市", 47.3],
    ["高雄市", 47.2],
    ["新竹市", 46.3],
    ["新竹縣", 44.5],
    ["苗栗縣", 44.2],
    ["新北市", 43.7],
    ["嘉義縣", 43.6],
    ["雲林縣", 43.3],
    ["臺南市", 43.0],
    ["臺中市", 42.8],
    ["彰化縣", 42.5],
    ["基隆市", 42.0],
  ],
  7333: [
    ["花蓮縣", 40.8],
    ["宜蘭縣", 39.8],
    ["連江縣", 39.4],
    ["臺北市", 39.2],
    ["澎湖縣", 38.8],
    ["嘉義市", 38.8],
    ["金門縣", 38.6],
    ["臺東縣", 38.5],
    ["屏東縣", 37.1],
    ["高雄市", 37.0],
    ["新竹市", 36.1],
    ["南投縣", 35.5],
    ["桃園市", 35.4],
    ["嘉義縣", 35.1],
    ["新竹縣", 34.2],
    ["臺南市", 34.0],
    ["基隆市", 34.0],
    ["新北市", 32.7],
    ["臺中市", 32.6],
    ["苗栗縣", 32.4],
    ["彰化縣", 32.1],
    ["雲林縣", 31.9],
  ],
};
const overallByLevel = { 7100: 76.6, 7230: 59.7, 7330: 45.7, 7333: 35.0 };
const counties = [
  "花蓮縣",
  "宜蘭縣",
  "連江縣",
  "臺北市",
  "澎湖縣",
  "嘉義市",
  "金門縣",
  "臺東縣",
  "屏東縣",
  "高雄市",
  "新竹市",
  "南投縣",
  "桃園市",
  "嘉義縣",
  "新竹縣",
  "臺南市",
  "基隆市",
  "新北市",
  "臺中市",
  "苗栗縣",
  "彰化縣",
  "雲林縣",
];
const years = [
  "102",
  "103",
  "104",
  "105",
  "106",
  "107",
  "108",
  "109",
  "110",
  "111",
  "112",
];
const trendData = {
  南投縣: [19.19, 26.05, 27.9, 33.91, 33.5, 33.3, 34.4, 33.9, 34.8, 35.1, 35.5],
  嘉義市: [
    21.42, 29.93, 25.94, 35.27, 38.1, 37.1, 37.9, 39.7, 37.7, 38.2, 38.8,
  ],
  嘉義縣: [
    22.14, 25.12, 24.34, 30.75, 29.0, 31.4, 30.2, 32.6, 33.5, 33.7, 35.1,
  ],
  基隆市: [
    24.49, 24.55, 23.11, 31.92, 32.8, 33.0, 33.8, 33.1, 33.6, 33.1, 34.0,
  ],
  宜蘭縣: [
    23.56, 25.72, 25.57, 33.72, 32.6, 33.9, 36.1, 39.4, 37.5, 37.6, 39.8,
  ],
  屏東縣: [
    25.82, 23.65, 27.17, 33.44, 30.8, 34.5, 35.6, 34.1, 34.9, 35.2, 37.1,
  ],
  彰化縣: [27.53, 25.68, 28.6, 33.16, 32.9, 38.4, 34.2, 31.5, 30.4, 30.5, 32.1],
  整體: [31.3, 33.0, 33.4, 33.0, 33.2, 33.5, 33.6, 33.0, 33.9, 34.0, 35.0],
  新北市: [
    25.56, 24.29, 23.53, 30.61, 35.0, 32.5, 32.2, 30.1, 31.7, 31.8, 32.7,
  ],
  新竹市: [
    22.57, 24.27, 26.92, 31.59, 33.6, 33.7, 35.0, 34.6, 35.6, 35.3, 36.1,
  ],
  新竹縣: [23.02, 21.69, 23.56, 29.4, 31.7, 30.8, 32.5, 31.9, 33.8, 33.8, 34.2],
  桃園市: [
    23.85, 26.12, 26.97, 31.72, 30.6, 29.4, 32.6, 32.4, 34.3, 34.5, 35.4,
  ],
  澎湖縣: [29.35, 28.7, 29.65, 35.53, 35.7, 32.2, 33.2, 36.8, 36.5, 36.6, 38.8],
  臺中市: [
    24.68, 27.96, 30.83, 34.34, 34.2, 33.1, 31.4, 33.5, 32.3, 32.5, 32.6,
  ],
  臺北市: [24.56, 28.71, 25.5, 35.82, 34.6, 37.2, 38.0, 37.0, 37.7, 37.4, 39.2],
  臺南市: [24.47, 25.7, 26.39, 32.36, 32.9, 32.0, 30.3, 30.4, 32.3, 32.7, 34.0],
  臺東縣: [26.62, 30.52, 26.9, 36.21, 35.3, 36.5, 36.3, 33.6, 37.5, 38.1, 38.5],
  花蓮縣: [28.91, 28.68, 30.47, 35.8, 34.4, 40.5, 39.4, 36.3, 40.3, 40.1, 40.8],
  苗栗縣: [26.14, 22.74, 26.6, 33.18, 31.9, 32.8, 33.0, 33.1, 32.4, 31.8, 32.4],
  連江縣: [
    29.82, 26.82, 25.65, 36.86, 32.5, 41.0, 40.9, 37.8, 36.6, 37.7, 39.4,
  ],
  金門縣: [
    27.79, 23.89, 33.27, 32.04, 34.0, 31.3, 31.9, 33.6, 36.5, 36.9, 38.6,
  ],
  雲林縣: [28.45, 24.09, 31.7, 32.12, 29.0, 29.3, 29.7, 30.0, 30.1, 30.4, 31.9],
  高雄市: [24.67, 28.1, 27.36, 34.33, 33.1, 34.5, 35.3, 34.1, 35.9, 36.3, 37.0],
};
const sportsByYear = {
  112: [
    ["散步/走路/健走", 57.07],
    ["慢跑", 18.67],
    ["爬山", 12.27],
    ["騎自行車", 10.73],
    ["在家健身訓練", 10.7],
    ["伸展操/瑜珈", 9.4],
    ["羽球", 9.1],
    ["籃球", 8.63],
    ["上民間健身房", 5.23],
    ["游泳", 4.7],
    ["有氧舞蹈", 2.87],
    ["武術類", 2.6],
    ["桌球", 2.5],
    ["排球", 1.9],
    ["上國民運動中心", 1.77],
    ["公園/社區運動器材", 1.6],
    ["棒球", 1.3],
    ["民俗/土風舞", 0.83],
    ["網球", 0.73],
    ["高爾夫", 0.6],
  ],
  111: [
    ["散步/走路/健走", 61.93],
    ["爬山", 17.83],
    ["慢跑", 16.9],
    ["騎自行車", 14.37],
    ["在家健身訓練", 12.8],
    ["羽球", 11.4],
    ["籃球", 9.47],
    ["伸展操/瑜珈", 6.6],
    ["上民間健身房", 6.1],
    ["游泳", 5.1],
    ["桌球", 3.2],
    ["公園/社區運動器材", 2.7],
    ["武術類", 2.6],
    ["上國民運動中心", 2.43],
    ["有氧舞蹈", 2.23],
    ["排球", 2.07],
    ["棒球", 1.9],
    ["網球", 0.93],
    ["高爾夫", 0.9],
    ["民俗/土風舞", 0.87],
  ],
  110: [
    ["散步/走路/健走", 34.57],
    ["慢跑", 11.83],
    ["爬山", 5.7],
    ["羽球", 5.5],
    ["游泳", 3.63],
    ["騎自行車", 3.27],
    ["伸展操/瑜珈", 3.13],
    ["籃球", 3.03],
    ["桌球", 1.1],
    ["有氧舞蹈", 0.47],
    ["排球", 0.43],
    ["棒球", 0.3],
    ["網球", 0.1],
  ],
  109: [
    ["散步/走路/健走", 33.37],
    ["慢跑", 14.73],
    ["爬山", 5.23],
    ["游泳", 4.9],
    ["籃球", 3.73],
    ["騎自行車", 3.47],
    ["伸展操/瑜珈", 3.2],
    ["羽球", 3.1],
    ["桌球", 0.83],
    ["有氧舞蹈", 0.8],
    ["網球", 0.2],
    ["棒球", 0.2],
    ["排球", 0.2],
  ],
  108: [
    ["散步/走路/健走", 32.1],
    ["慢跑", 14.0],
    ["游泳", 6.87],
    ["爬山", 4.83],
    ["籃球", 3.87],
    ["騎自行車", 3.83],
    ["伸展操/瑜珈", 3.23],
    ["羽球", 2.9],
    ["有氧舞蹈", 0.9],
    ["桌球", 0.6],
    ["棒球", 0.4],
    ["排球", 0.2],
    ["網球", 0.07],
  ],
  107: [
    ["散步/走路/健走", 54.0],
    ["慢跑", 23.07],
    ["爬山", 12.1],
    ["騎自行車", 10.37],
    ["籃球", 10.1],
    ["伸展操/瑜珈", 8.73],
    ["游泳", 7.2],
    ["羽球", 4.7],
    ["有氧舞蹈", 2.57],
    ["桌球", 1.47],
    ["排球", 1.27],
    ["棒球", 0.9],
    ["網球", 0.77],
  ],
};

const topSports10 = sportsByYear["112"].slice(0, 10).map((d) => d[0]);
const sportsYears = ["107", "108", "109", "110", "111", "112"];
const sportsTrendData = {};
topSports10.forEach((sport) => {
  sportsTrendData[sport] = sportsYears.map((y) => {
    const row = (sportsByYear[y] || []).find((r) => r[0] === sport);
    return row ? row[1] : null;
  });
});

// ============ Chart instances ============
const charts = {};

// Shared echarts theme tokens
const AX = {
  color: "#94a3b8",
  fontFamily: 'Fira Sans, "Noto Sans TC", sans-serif',
  fontSize: 11.5,
};
const SPLIT_LINE = { lineStyle: { color: "#f1f5f9", type: "dashed" } };
const TOOLTIP_BASE = {
  backgroundColor: "rgba(15,23,42,.92)",
  borderColor: "transparent",
  textStyle: {
    color: "#fff",
    fontFamily: 'Fira Sans, "Noto Sans TC", sans-serif',
    fontSize: 12,
  },
  extraCssText:
    "box-shadow:0 8px 24px rgba(0,0,0,.18);border-radius:8px;padding:8px 12px;",
};

// County grouping for quick filter
const GROUPS = {
  all: counties,
  metro: ["臺北市", "新北市", "桃園市", "臺中市", "臺南市", "高雄市"],
  east: ["花蓮縣", "宜蘭縣", "臺東縣", "澎湖縣", "金門縣", "連江縣"],
  top5: null, // dynamic, computed by level
  bottom5: null,
};
let currentGroup = "all";
let currentLevel = "7333";

function getFilteredRanking(level, group) {
  const raw = rankingData[level];
  if (group === "all") return raw;
  if (group === "top5") return raw.slice(0, 5);
  if (group === "bottom5") return raw.slice(-5);
  const allowed = GROUPS[group] || counties;
  return raw.filter((r) => allowed.includes(r[0]));
}

// ============ Chart 1: Ranking ============
function renderRanking(level = currentLevel, group = currentGroup) {
  currentLevel = level;
  currentGroup = group;
  const data = getFilteredRanking(level, group).slice().reverse();
  const overall = overallByLevel[level];
  const opt = {
    grid: { left: 80, right: 90, top: 20, bottom: 20 },
    tooltip: {
      ...TOOLTIP_BASE,
      trigger: "axis",
      axisPointer: {
        type: "shadow",
        shadowStyle: { color: "rgba(255,107,53,.08)" },
      },
      formatter: (p) =>
        `<b>${p[0].name}</b><br/><span style="font-family:Fira Code,monospace;font-weight:600">${p[0].value}%</span>`,
    },
    xAxis: {
      type: "value",
      axisLabel: { ...AX, formatter: "{value}%" },
      splitLine: SPLIT_LINE,
      axisLine: { show: false },
      axisTick: { show: false },
    },
    yAxis: {
      type: "category",
      data: data.map((d) => d[0]),
      axisLabel: {
        color: "#334155",
        fontWeight: 600,
        fontSize: 12,
        fontFamily: AX.fontFamily,
      },
      axisLine: { show: false },
      axisTick: { show: false },
    },
    series: [
      {
        type: "bar",
        data: data.map((d) => ({
          value: d[1],
          itemStyle: {
            color:
              d[1] >= overall
                ? new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    { offset: 0, color: "#ff6b35" },
                    { offset: 1, color: "#f43f5e" },
                  ])
                : new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    { offset: 0, color: "#c4b5fd" },
                    { offset: 1, color: "#a78bfa" },
                  ]),
            borderRadius: [0, 8, 8, 0],
          },
        })),
        label: {
          show: true,
          position: "right",
          formatter: "{c}%",
          color: "#334155",
          fontWeight: 600,
          fontFamily: "Fira Code, monospace",
          fontSize: 11.5,
        },
        markLine: {
          symbol: "none",
          lineStyle: { color: "#1877f2", type: "dashed", width: 1.5 },
          label: {
            formatter: `全國 ${overall}%`,
            color: "#fff",
            fontWeight: 700,
            backgroundColor: "#1877f2",
            padding: [4, 8],
            borderRadius: 4,
            fontFamily: AX.fontFamily,
            fontSize: 11,
          },
          data: [{ xAxis: overall }],
        },
        barWidth: "60%",
        animationDelay: (i) => i * 25,
      },
    ],
  };
  if (!charts.ranking) {
    charts.ranking = echarts.init(document.getElementById("chart-ranking"));
    charts.ranking.on("click", (params) => {
      if (params.componentType === "series") openDrawer(params.name);
    });
    charts.ranking.getZr().on("mousemove", () => {
      document.getElementById("chart-ranking").style.cursor = "pointer";
    });
  }
  charts.ranking.setOption(opt, true);
}

// ============ Chart 2: Trend ============
let selectedCounties = ["整體", "臺北市", "花蓮縣", "臺中市", "雲林縣"];
const palette = [
  "#0f172a",
  "#ff6b35",
  "#7c4dff",
  "#2eb872",
  "#1877f2",
  "#f43f5e",
  "#f59e0b",
  "#06b6d4",
];

function renderCountyPicker() {
  const picker = document.getElementById("county-picker");
  picker.innerHTML = "";
  ["整體", ...counties].forEach((c, i) => {
    const checked = selectedCounties.includes(c);
    const idx = ["整體", ...counties].indexOf(c);
    const color = palette[selectedCounties.indexOf(c) % palette.length];
    const el = document.createElement("label");
    el.className = `checkbox-pill px-3 py-1.5 rounded-full text-xs font-semibold border bg-white`;
    el.style.cssText = checked
      ? `background-color:${color};border-color:${color};color:#fff;box-shadow:0 2px 8px ${color}55`
      : "border-color:#e2e8f0;color:#475569";
    el.innerHTML = `<input type="checkbox" data-county="${c}" ${checked ? "checked" : ""}><span>${c}</span>`;
    picker.appendChild(el);
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const idx = selectedCounties.indexOf(c);
      if (idx >= 0) selectedCounties.splice(idx, 1);
      else if (selectedCounties.length < 8) selectedCounties.push(c);
      else return;
      renderCountyPicker();
      renderTrend();
    });
  });
}

function renderTrend() {
  const opt = {
    grid: { left: 50, right: 30, top: 40, bottom: 40 },
    tooltip: { ...TOOLTIP_BASE, trigger: "axis" },
    legend: {
      top: 0,
      type: "scroll",
      textStyle: { color: "#475569", fontFamily: AX.fontFamily, fontSize: 12 },
    },
    xAxis: {
      type: "category",
      data: years.map((y) => `${y}年`),
      axisLabel: AX,
      axisLine: { lineStyle: { color: "#e2e8f0" } },
      axisTick: { show: false },
    },
    yAxis: {
      type: "value",
      min: 18,
      max: 45,
      axisLabel: { ...AX, formatter: "{value}%" },
      splitLine: SPLIT_LINE,
      axisLine: { show: false },
      axisTick: { show: false },
    },
    series: selectedCounties.map((c, i) => ({
      name: c,
      type: "line",
      data: trendData[c] || [],
      smooth: true,
      symbol: "circle",
      symbolSize: 7,
      lineStyle: {
        width: c === "整體" ? 4 : 2.5,
        color: palette[i % palette.length],
      },
      itemStyle: { color: palette[i % palette.length] },
      emphasis: { focus: "series", lineStyle: { width: 4 } },
    })),
  };
  if (!charts.trend)
    charts.trend = echarts.init(document.getElementById("chart-trend"));
  charts.trend.setOption(opt, true);
}

// ============ Chart 3: Sports (Year-switchable) ============
function renderSports(year = "112") {
  const raw = sportsByYear[year] || [];
  const data = raw.slice(0, 20).slice().reverse();
  const opt = {
    grid: { left: 130, right: 80, top: 10, bottom: 20 },
    tooltip: {
      ...TOOLTIP_BASE,
      trigger: "axis",
      axisPointer: {
        type: "shadow",
        shadowStyle: { color: "rgba(46,184,114,.08)" },
      },
      formatter: (p) =>
        `<b>${p[0].name}</b><br/><span style="font-family:Fira Code,monospace;font-weight:600">${p[0].value}%</span>`,
    },
    xAxis: {
      type: "value",
      axisLabel: { ...AX, formatter: "{value}%" },
      splitLine: SPLIT_LINE,
      axisLine: { show: false },
      axisTick: { show: false },
    },
    yAxis: {
      type: "category",
      data: data.map((d) => d[0]),
      axisLabel: {
        color: "#334155",
        fontWeight: 500,
        fontSize: 12,
        fontFamily: AX.fontFamily,
      },
      axisLine: { show: false },
      axisTick: { show: false },
    },
    series: [
      {
        type: "bar",
        data: data.map((d, i) => {
          const tier = i >= 15 ? 0 : i >= 10 ? 1 : i >= 5 ? 2 : 3;
          const colors = [
            ["#ff6b35", "#f43f5e"],
            ["#a855f7", "#7c4dff"],
            ["#3b82f6", "#1877f2"],
            ["#34d399", "#2eb872"],
          ];
          return {
            value: d[1],
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                { offset: 0, color: colors[tier][0] },
                { offset: 1, color: colors[tier][1] },
              ]),
              borderRadius: [0, 8, 8, 0],
            },
          };
        }),
        label: {
          show: true,
          position: "right",
          formatter: "{c}%",
          color: "#334155",
          fontWeight: 600,
          fontFamily: "Fira Code, monospace",
          fontSize: 11.5,
        },
        barWidth: "65%",
        animationDelay: (i) => i * 20,
      },
    ],
  };
  if (!charts.sports)
    charts.sports = echarts.init(document.getElementById("chart-sports"));
  charts.sports.setOption(opt, true);
}

// ============ Chart 3b: Sports Trend ============
let selectedSports = [
  "散步/走路/健走",
  "慢跑",
  "爬山",
  "騎自行車",
  "在家健身訓練",
  "籃球",
];
const sportsPalette = [
  "#ff6b35",
  "#7c4dff",
  "#2eb872",
  "#1877f2",
  "#f43f5e",
  "#06b6d4",
  "#f59e0b",
  "#a855f7",
  "#10b981",
  "#0ea5e9",
];

function renderSportsPicker() {
  const picker = document.getElementById("sports-picker");
  picker.innerHTML = "";
  topSports10.forEach((sport, i) => {
    const checked = selectedSports.includes(sport);
    const color = sportsPalette[i];
    const el = document.createElement("label");
    el.className = `checkbox-pill px-3 py-1.5 rounded-full text-xs font-semibold border bg-white`;
    el.style.cssText = checked
      ? `background-color:${color};border-color:${color};color:#fff;box-shadow:0 2px 8px ${color}55`
      : "border-color:#e2e8f0;color:#475569";
    el.innerHTML = `<input type="checkbox" data-sport="${sport}" ${checked ? "checked" : ""}><span>${sport}</span>`;
    picker.appendChild(el);
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const idx = selectedSports.indexOf(sport);
      if (idx >= 0) selectedSports.splice(idx, 1);
      else if (selectedSports.length < 8) selectedSports.push(sport);
      else return;
      renderSportsPicker();
      renderSportsTrend();
    });
  });
}

function renderSportsTrend() {
  const opt = {
    grid: { left: 50, right: 30, top: 40, bottom: 40 },
    tooltip: {
      ...TOOLTIP_BASE,
      trigger: "axis",
      formatter: (params) => {
        const yr = params[0].axisValue;
        const rows = params
          .filter((p) => p.value !== null && p.value !== undefined)
          .sort((a, b) => b.value - a.value)
          .map(
            (p) =>
              `${p.marker} ${p.seriesName}：<span style="font-family:Fira Code,monospace;font-weight:600">${p.value}%</span>`,
          )
          .join("<br/>");
        return `<b>${yr}</b><br/>${rows}`;
      },
    },
    legend: {
      top: 0,
      type: "scroll",
      textStyle: { color: "#475569", fontFamily: AX.fontFamily, fontSize: 12 },
    },
    xAxis: {
      type: "category",
      data: sportsYears.map((y) => `${y}年`),
      axisLabel: AX,
      axisLine: { lineStyle: { color: "#e2e8f0" } },
      axisTick: { show: false },
    },
    yAxis: {
      type: "value",
      axisLabel: { ...AX, formatter: "{value}%" },
      splitLine: SPLIT_LINE,
      axisLine: { show: false },
      axisTick: { show: false },
    },
    series: selectedSports.map((sport, sIdx) => {
      const idx = topSports10.indexOf(sport);
      const color = sportsPalette[idx % sportsPalette.length];
      const series = {
        name: sport,
        type: "line",
        data: sportsTrendData[sport] || [],
        smooth: true,
        connectNulls: true,
        symbol: "circle",
        symbolSize: 8,
        lineStyle: { width: 2.8, color },
        itemStyle: { color },
        emphasis: { focus: "series", lineStyle: { width: 4 } },
      };
      // 在第一條 series 加上 markArea 標註口徑變動年份
      if (sIdx === 0) {
        series.markArea = {
          silent: true,
          itemStyle: { color: "rgba(245, 158, 11, 0.10)" },
          label: {
            show: true,
            position: "top",
            color: "#b45309",
            fontWeight: 700,
            fontSize: 11,
            fontFamily: AX.fontFamily,
            formatter: "問卷口徑變動期",
          },
          data: [[{ name: "口徑變動", xAxis: "108年" }, { xAxis: "110年" }]],
        };
        series.markLine = {
          silent: true,
          symbol: "none",
          lineStyle: { color: "#f59e0b", type: "dashed", width: 1.5 },
          label: {
            formatter: "111 年改口徑",
            color: "#fff",
            fontWeight: 700,
            backgroundColor: "#f59e0b",
            padding: [3, 6],
            borderRadius: 4,
            fontSize: 10,
          },
          data: [{ xAxis: "111年" }],
        };
      }
      return series;
    }),
  };
  if (!charts.sportsTrend)
    charts.sportsTrend = echarts.init(
      document.getElementById("chart-sports-trend"),
    );
  charts.sportsTrend.setOption(opt, true);
}

// ============ Chart 4: Levels (Funnel) ============
function renderLevels(county = "雲林縣") {
  const overall = [
    overallByLevel["7100"],
    overallByLevel["7230"],
    overallByLevel["7330"],
    overallByLevel["7333"],
  ];
  const getCountyVal = (level) => {
    const row = rankingData[level].find((r) => r[0] === county);
    return row ? row[1] : null;
  };
  const countyVals = ["7100", "7230", "7330", "7333"].map(getCountyVal);
  const labels = [
    "7100 有運動",
    "7230 每週≥3次",
    "7330 ≥3次30分",
    "7333 規律運動",
  ];

  const opt = {
    grid: { left: 140, right: 60, top: 40, bottom: 30 },
    tooltip: {
      ...TOOLTIP_BASE,
      trigger: "axis",
      axisPointer: {
        type: "shadow",
        shadowStyle: { color: "rgba(24,119,242,.08)" },
      },
      formatter: (p) =>
        p
          .map(
            (x) =>
              `${x.marker} ${x.seriesName}：<span style="font-family:Fira Code,monospace;font-weight:600">${x.value}%</span>`,
          )
          .join("<br/>"),
    },
    legend: {
      top: 0,
      textStyle: { color: "#475569", fontFamily: AX.fontFamily, fontSize: 12 },
    },
    xAxis: {
      type: "value",
      max: 90,
      axisLabel: { ...AX, formatter: "{value}%" },
      splitLine: SPLIT_LINE,
      axisLine: { show: false },
      axisTick: { show: false },
    },
    yAxis: {
      type: "category",
      data: labels,
      axisLabel: {
        color: "#334155",
        fontWeight: 600,
        fontSize: 12.5,
        fontFamily: AX.fontFamily,
      },
      axisLine: { show: false },
      axisTick: { show: false },
    },
    series: [
      {
        name: "全國",
        type: "bar",
        data: overall,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
            { offset: 0, color: "#60a5fa" },
            { offset: 1, color: "#1877f2" },
          ]),
          borderRadius: [0, 6, 6, 0],
        },
        label: {
          show: true,
          position: "right",
          formatter: "{c}%",
          color: "#1877f2",
          fontWeight: 700,
          fontFamily: "Fira Code, monospace",
          fontSize: 11.5,
        },
        barWidth: "32%",
      },
      {
        name: county,
        type: "bar",
        data: countyVals,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
            { offset: 0, color: "#ff6b35" },
            { offset: 1, color: "#f43f5e" },
          ]),
          borderRadius: [0, 6, 6, 0],
        },
        label: {
          show: true,
          position: "right",
          formatter: "{c}%",
          color: "#f43f5e",
          fontWeight: 700,
          fontFamily: "Fira Code, monospace",
          fontSize: 11.5,
        },
        barWidth: "32%",
      },
    ],
  };
  if (!charts.levels)
    charts.levels = echarts.init(document.getElementById("chart-levels"));
  charts.levels.setOption(opt, true);
}

// ============ Interactions ============
document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    // Stop any running race/play animation before switching tab
    if (typeof stopRace === "function") stopRace({ restore: false });
    if (playTimer) {
      clearInterval(playTimer);
      playTimer = null;
      const pi = document.getElementById("play-icon");
      const pl = document.getElementById("play-label");
      if (pi) pi.innerHTML = '<polygon points="5 3 19 12 5 21 5 3"/>';
      if (pl) pl.textContent = "切換強度";
    }
    document.querySelectorAll(".tab-btn").forEach((b) => {
      b.classList.remove("active");
      b.setAttribute("aria-selected", "false");
    });
    btn.classList.add("active");
    btn.setAttribute("aria-selected", "true");
    const tab = btn.dataset.tab;
    document
      .querySelectorAll(".tab-panel")
      .forEach((p) => p.classList.add("hidden"));
    document.getElementById(`tab-${tab}`).classList.remove("hidden");
    setTimeout(() => {
      if (tab === "map") {
        if (!charts.map) renderMap();
        else charts.map.resize();
      }
      if (tab === "ranking" && charts.ranking) charts.ranking.resize();
      if (tab === "trend" && charts.trend) charts.trend.resize();
      if (tab === "sports") {
        if (charts.sports) charts.sports.resize();
        if (charts.sportsTrend) charts.sportsTrend.resize();
      }
      if (tab === "levels" && charts.levels) charts.levels.resize();
    }, 50);
  });
});

document.querySelectorAll(".level-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (typeof stopRace === "function") stopRace({ restore: false });
    document
      .querySelectorAll(".level-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderRanking(btn.dataset.level);
  });
});

document
  .getElementById("county-select")
  .addEventListener("change", (e) => renderLevels(e.target.value));
document
  .getElementById("sports-year-select")
  .addEventListener("change", (e) => renderSports(e.target.value));

// ============ Interaction A: KPI cards jump to tab ============
document.querySelectorAll(".kpi-jump").forEach((btn) => {
  btn.style.cursor = "pointer";
  btn.addEventListener("click", () => {
    const tab = btn.dataset.jump;
    const tabBtn = document.querySelector(`.tab-btn[data-tab="${tab}"]`);
    if (tabBtn) {
      tabBtn.click();
      document
        .querySelector(`#tab-${tab}`)
        .scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// ============ Interaction B: Group filter chips ============
document.querySelectorAll(".group-chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    if (typeof stopRace === "function") stopRace({ restore: false });
    document
      .querySelectorAll(".group-chip")
      .forEach((c) => c.classList.remove("active"));
    chip.classList.add("active");
    renderRanking(currentLevel, chip.dataset.group);
  });
});

// ============ Interaction G: Year race animation ============
let raceTimer = null;
let raceYearIdx = 0;
let raceMode = false;
let raceHighlight = "臺北市";

function getRaceFrame(yearIdx) {
  const rows = counties
    .map((c) => {
      const v = (trendData[c] || [])[yearIdx];
      return [c, v == null ? 0 : v];
    })
    .filter((r) => r[1] > 0)
    .sort((a, b) => b[1] - a[1]);
  return rows;
}

function renderRaceFrame(yearIdx) {
  const data = getRaceFrame(yearIdx).slice().reverse();
  const year = years[yearIdx];
  const yearBadge = document.getElementById("race-year");
  if (yearBadge) yearBadge.textContent = year;
  // Find rank of highlighted county
  const sorted = getRaceFrame(yearIdx);
  const rankIdx = raceHighlight
    ? sorted.findIndex((r) => r[0] === raceHighlight)
    : -1;

  const opt = {
    grid: { left: 80, right: 110, top: 20, bottom: 20 },
    tooltip: {
      ...TOOLTIP_BASE,
      trigger: "axis",
      axisPointer: { type: "shadow" },
      formatter: (p) =>
        `<b>${p[0].name}</b><br/><span style="font-family:Fira Code,monospace;font-weight:600">${p[0].value}%</span>`,
    },
    xAxis: {
      type: "value",
      axisLabel: { ...AX, formatter: "{value}%" },
      splitLine: SPLIT_LINE,
      axisLine: { show: false },
      axisTick: { show: false },
    },
    yAxis: {
      type: "category",
      data: data.map((d) => d[0]),
      axisLabel: {
        fontSize: 12,
        fontFamily: AX.fontFamily,
        formatter: (val) =>
          val === raceHighlight ? `{hi|★ ${val}}` : `{normal|${val}}`,
        rich: {
          hi: {
            color: "#7c4dff",
            fontWeight: 800,
            fontFamily: AX.fontFamily,
            fontSize: 12.5,
          },
          normal: {
            color: "#334155",
            fontWeight: 500,
            fontFamily: AX.fontFamily,
            fontSize: 12,
          },
        },
      },
      axisLine: { show: false },
      axisTick: { show: false },
    },
    series: [
      {
        type: "bar",
        data: data.map((d) => {
          const isHighlight = d[0] === raceHighlight;
          const isDimmed = raceHighlight && !isHighlight;
          return {
            value: d[1],
            itemStyle: {
              color: isHighlight
                ? new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    { offset: 0, color: "#7c4dff" },
                    { offset: 1, color: "#a855f7" },
                  ])
                : isDimmed
                  ? new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                      { offset: 0, color: "#e2e8f0" },
                      { offset: 1, color: "#cbd5e1" },
                    ])
                  : new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                      { offset: 0, color: "#ff6b35" },
                      { offset: 1, color: "#f43f5e" },
                    ]),
              borderRadius: [0, 8, 8, 0],
              shadowBlur: isHighlight ? 12 : 0,
              shadowColor: isHighlight ? "rgba(124,77,255,.45)" : "transparent",
            },
            label: {
              show: true,
              position: "right",
              formatter: isHighlight
                ? `{c}% · 第 ${data.length - data.findIndex((x) => x[0] === d[0])} 名`
                : "{c}%",
              color: isHighlight ? "#7c4dff" : isDimmed ? "#94a3b8" : "#334155",
              fontWeight: isHighlight ? 800 : 600,
              fontFamily: "Fira Code, monospace",
              fontSize: isHighlight ? 12.5 : 11,
            },
          };
        }),
        barWidth: "60%",
        animationDuration: 700,
        animationEasing: "cubicInOut",
      },
    ],
    graphic: [
      {
        type: "text",
        right: 30,
        top: 10,
        style: {
          text: `民國 ${year} 年`,
          font: 'bold 26px Fira Sans, "Noto Sans TC", sans-serif',
          fill: "rgba(124,77,255,.15)",
          textAlign: "right",
        },
      },
    ],
  };
  if (!charts.ranking)
    charts.ranking = echarts.init(document.getElementById("chart-ranking"));
  charts.ranking.setOption(opt, true);
}

function stopRace({ restore = true } = {}) {
  if (!raceTimer && !raceMode) return false;
  if (raceTimer) {
    clearInterval(raceTimer);
    raceTimer = null;
  }
  raceMode = false;
  const raceIcon = document.getElementById("race-icon");
  const raceLabel = document.getElementById("race-label");
  const yearBadge = document.getElementById("race-year-badge");
  if (raceIcon) raceIcon.innerHTML = '<polygon points="5 3 19 12 5 21 5 3"/>';
  if (raceLabel) raceLabel.textContent = "播放歷年動畫";
  if (yearBadge) yearBadge.classList.add("hidden");
  if (restore) renderRanking(currentLevel, currentGroup);
  return true;
}

function toggleRace() {
  const raceIcon = document.getElementById("race-icon");
  const raceLabel = document.getElementById("race-label");
  const yearBadge = document.getElementById("race-year-badge");
  if (raceTimer) {
    stopRace({ restore: true });
  } else {
    // Start
    raceMode = true;
    raceYearIdx = 0;
    yearBadge.classList.remove("hidden");
    raceIcon.innerHTML =
      '<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>';
    raceLabel.textContent = "暫停";
    renderRaceFrame(raceYearIdx);
    raceTimer = setInterval(() => {
      raceYearIdx = (raceYearIdx + 1) % years.length;
      renderRaceFrame(raceYearIdx);
      if (raceYearIdx === years.length - 1) {
        // Last year — pause at end then stop
        setTimeout(() => {
          if (raceTimer) {
            clearInterval(raceTimer);
            raceTimer = null;
            const ic = document.getElementById("race-icon");
            const lb = document.getElementById("race-label");
            if (ic) ic.innerHTML = '<polygon points="5 3 19 12 5 21 5 3"/>';
            if (lb) lb.textContent = "重播歷年";
          }
        }, 1800);
      }
    }, 1100);
  }
}

document.getElementById("race-play").addEventListener("click", toggleRace);
document.getElementById("race-county").addEventListener("change", (e) => {
  raceHighlight = e.target.value;
  if (raceMode) renderRaceFrame(raceYearIdx);
});

// ============ Interaction C: Auto-play level animation ============
let playTimer = null;
const levels = ["7100", "7230", "7330", "7333"];
function setLevel(l) {
  document
    .querySelectorAll(".level-btn")
    .forEach((b) => b.classList.toggle("active", b.dataset.level === l));
  renderRanking(l, currentGroup);
}
function togglePlay() {
  const playBtn = document.getElementById("play-btn");
  const playIcon = document.getElementById("play-icon");
  const playLabel = document.getElementById("play-label");
  if (playTimer) {
    clearInterval(playTimer);
    playTimer = null;
    playIcon.innerHTML = '<polygon points="5 3 19 12 5 21 5 3"/>';
    playLabel.textContent = "播放";
  } else {
    let i = levels.indexOf(currentLevel);
    playTimer = setInterval(() => {
      i = (i + 1) % levels.length;
      setLevel(levels[i]);
    }, 1600);
    playIcon.innerHTML =
      '<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>';
    playLabel.textContent = "暫停";
  }
}
document.getElementById("play-btn").addEventListener("click", togglePlay);

// ============ Interaction D: County search + clear ============
document.getElementById("county-search").addEventListener("input", (e) => {
  const q = e.target.value.trim();
  document.querySelectorAll("#county-picker .checkbox-pill").forEach((pill) => {
    const text = pill.querySelector("span").textContent;
    pill.style.display = !q || text.includes(q) ? "" : "none";
  });
});
document.getElementById("clear-counties").addEventListener("click", () => {
  selectedCounties = ["整體"];
  renderCountyPicker();
  renderTrend();
});

// ============ Interaction E: Drawer (county detail) ============
const drawer = document.getElementById("drawer");
const drawerMask = document.getElementById("drawer-mask");

function openDrawer(county) {
  if (!trendData[county]) return;
  const series = trendData[county];
  const overall112 = overallByLevel["7333"];
  const cur = series[series.length - 1];
  const base = series[0];
  const change = (cur - base).toFixed(1);
  const rank7333 = rankingData["7333"].findIndex((r) => r[0] === county) + 1;

  document.getElementById("drawer-title").textContent = county;
  document.getElementById("drawer-rank").textContent = rank7333
    ? `7333 規律運動率 全國第 ${rank7333} 名 / 22`
    : "—";

  // KPI grid: 4 levels
  const stats = ["7100", "7230", "7330", "7333"].map((lv) => {
    const row = rankingData[lv].find((r) => r[0] === county);
    return { lv, val: row ? row[1] : null, overall: overallByLevel[lv] };
  });
  document.getElementById("drawer-stats").innerHTML = stats
    .map((s) => {
      const diff = (s.val - s.overall).toFixed(1);
      const positive = s.val >= s.overall;
      return `
      <div class="rounded-xl bg-slate-50 p-3 border border-slate-200">
        <p class="eyebrow text-slate-500 mb-1">${s.lv}</p>
        <p class="num text-xl font-bold text-slate-900">${s.val}<span class="text-sm text-slate-400">%</span></p>
        <p class="text-[11px] mt-0.5 ${positive ? "text-emerald-600" : "text-rose-500"} font-semibold">
          ${positive ? "+" : ""}${diff} vs 全國
        </p>
      </div>`;
    })
    .join("");

  const colorChange = change >= 0 ? "#2eb872" : "#f43f5e";
  const drawerChange = document.getElementById("drawer-change");
  drawerChange.textContent = `${change >= 0 ? "+" : ""}${change} pp`;
  drawerChange.style.color = colorChange;

  // Mini trend chart
  if (!charts.drawer)
    charts.drawer = echarts.init(document.getElementById("drawer-chart"));
  charts.drawer.setOption(
    {
      grid: { left: 35, right: 10, top: 15, bottom: 25 },
      tooltip: { ...TOOLTIP_BASE, trigger: "axis" },
      xAxis: {
        type: "category",
        data: years.map((y) => `${y}`),
        axisLabel: { ...AX, fontSize: 10 },
        axisLine: { lineStyle: { color: "#e2e8f0" } },
        axisTick: { show: false },
      },
      yAxis: {
        type: "value",
        axisLabel: { ...AX, fontSize: 10, formatter: "{value}%" },
        splitLine: SPLIT_LINE,
        axisLine: { show: false },
        axisTick: { show: false },
      },
      series: [
        {
          type: "line",
          data: series,
          smooth: true,
          symbol: "circle",
          symbolSize: 6,
          lineStyle: { width: 3, color: "#ff6b35" },
          itemStyle: { color: "#ff6b35" },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "rgba(255,107,53,.3)" },
              { offset: 1, color: "rgba(255,107,53,0)" },
            ]),
          },
        },
      ],
    },
    true,
  );
  setTimeout(() => charts.drawer.resize(), 100);

  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
  drawerMask.classList.add("open");
}
function closeDrawer() {
  drawer.classList.remove("open");
  drawer.setAttribute("aria-hidden", "true");
  drawerMask.classList.remove("open");
}
document.getElementById("drawer-close").addEventListener("click", closeDrawer);
drawerMask.addEventListener("click", closeDrawer);

// ============ Interaction F: Keyboard shortcuts ============
document.addEventListener("keydown", (e) => {
  // Ignore when typing in input
  if (["INPUT", "TEXTAREA", "SELECT"].includes(e.target.tagName)) return;
  const tabs = ["map", "ranking", "trend", "sports", "levels"];
  if (["1", "2", "3", "4"].includes(e.key)) {
    const tab = tabs[parseInt(e.key) - 1];
    document.querySelector(`.tab-btn[data-tab="${tab}"]`).click();
  } else if (e.key === "Escape") {
    closeDrawer();
  } else if (
    e.key === " " &&
    document.getElementById("tab-ranking") &&
    !document.getElementById("tab-ranking").classList.contains("hidden")
  ) {
    e.preventDefault();
    togglePlay();
  } else if (
    (e.key === "ArrowLeft" || e.key === "ArrowRight") &&
    !document.getElementById("tab-ranking").classList.contains("hidden")
  ) {
    const idx = levels.indexOf(currentLevel);
    const next =
      e.key === "ArrowLeft"
        ? (idx - 1 + levels.length) % levels.length
        : (idx + 1) % levels.length;
    setLevel(levels[next]);
  }
});

// ============ Chart 0: Choropleth Map ============
async function renderMap() {
  const el = document.getElementById("chart-map");
  const loading = document.getElementById("map-loading");
  if (!el) return;
  try {
    if (!charts._mapData) {
      const res = await fetch("./data/taiwan-counties.geo.json", {
        cache: "force-cache",
      });
      if (!res.ok) throw new Error("Map fetch failed " + res.status);
      charts._mapData = await res.json();
      echarts.registerMap("taiwan", charts._mapData);
    }
    if (loading) loading.style.display = "none";

    const data = rankingData["7333"].map(([name, value]) => ({ name, value }));
    const opt = {
      tooltip: {
        ...TOOLTIP_BASE,
        trigger: "item",
        formatter: (p) => {
          if (p.value == null || isNaN(p.value))
            return `<b>${p.name}</b><br/>無資料`;
          const rank =
            rankingData["7333"].findIndex((r) => r[0] === p.name) + 1;
          return `<b>${p.name}</b><br/><span style="font-family:Fira Code,monospace;font-weight:600">${p.value}%</span> · 第 ${rank} 名`;
        },
      },
      visualMap: {
        left: "left",
        bottom: 20,
        min: 31,
        max: 41,
        text: ["高 (41%)", "低 (31%)"],
        textStyle: {
          color: "#475569",
          fontFamily: AX.fontFamily,
          fontSize: 12,
        },
        calculable: true,
        inRange: {
          color: [
            "#fef3c7",
            "#fdba74",
            "#fb923c",
            "#f97316",
            "#ea580c",
            "#dc2626",
          ],
        },
      },
      series: [
        {
          name: "規律運動率",
          type: "map",
          map: "taiwan",
          roam: true,
          scaleLimit: { min: 0.8, max: 6 },
          aspectScale: 0.92,
          zoom: 1.15,
          itemStyle: {
            borderColor: "#fff",
            borderWidth: 1.2,
            areaColor: "#e2e8f0",
          },
          emphasis: {
            itemStyle: {
              areaColor: "#ff6b35",
              borderColor: "#fff",
              borderWidth: 2,
              shadowBlur: 20,
              shadowColor: "rgba(255,107,53,.45)",
            },
            label: {
              show: true,
              color: "#fff",
              fontWeight: 700,
              fontFamily: AX.fontFamily,
            },
          },
          select: {
            itemStyle: {
              areaColor: "#f43f5e",
              borderColor: "#fff",
              borderWidth: 2,
            },
            label: { show: true, color: "#fff", fontWeight: 700 },
          },
          label: {
            show: true,
            color: "#1e293b",
            fontSize: 10.5,
            fontFamily: AX.fontFamily,
            fontWeight: 600,
            formatter: (p) =>
              p.value != null && !isNaN(p.value)
                ? `${p.name}\n${p.value}%`
                : p.name,
          },
          data,
        },
      ],
    };
    if (!charts.map) {
      charts.map = echarts.init(el);
      charts.map.on("click", (params) => {
        if (params.componentType === "series" && params.name) {
          openDrawer(params.name);
        }
      });
    }
    charts.map.setOption(opt, true);
  } catch (err) {
    if (loading) loading.textContent = "地圖載入失敗，請稍後重新整理。";
    console.error("Map render error:", err);
  }
}

// Populate funnel county dropdown with all 22 counties sorted by 7333 ranking
(function populateCountySelect() {
  const select = document.getElementById("county-select");
  if (!select) return;
  const sorted = rankingData["7333"].slice(); // already sorted desc
  const defaultCounty = "臺中市";
  sorted.forEach(([county], i) => {
    const opt = document.createElement("option");
    opt.value = county;
    opt.textContent = `${county}（第 ${i + 1} 名 · ${sorted[i][1]}%）`;
    if (county === defaultCounty) opt.selected = true;
    select.appendChild(opt);
  });
})();

// Init
renderMap();
renderRanking("7333", "all");
renderCountyPicker();
renderTrend();
renderSports("112");
renderSportsPicker();
renderSportsTrend();
renderLevels("臺中市");

window.addEventListener("resize", () =>
  Object.values(charts).forEach((c) => c && c.resize()),
);
