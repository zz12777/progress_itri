// 只需修改這個檔案
// 進度：1 = 冠竹完成，0 = 待完成（順序對應 stages）
// 給錢：paid true = 已給，false = 待給

const DATA = {
  updated: "2026-11-20",

  stages: ["報告初版完成", "提供AI工具候選", "廠商選定AI工具", "前半報告上傳網頁", "後半報告填寫完畢"],

  vendors: [
    { name: "當歸小舖", progress: [1, 1, 1, 1, 0] },
    { name: "恆源",     progress: [1, 1, 1, 1, 0] },
    { name: "老獵人",   progress: [0, 0, 0, 0, 0] },
    { name: "京旺",     progress: [0, 0, 0, 0, 0] },
    { name: "鼎珍食品", progress: [0, 0, 0, 0, 0] }
  ],

  // vendor 填廠商名稱 = 計入該廠商線上會議次數；填 "內部" = 不計入
  meetings: [
    {
      date: "2026-11-20",
      vendor: "內部",
      hours: 1,
      notes: [
        "京旺、老獵人前半上傳網頁",
        "提供3個AI工具給鼎珍食品挑選",
        "給冠竹 $2,000"
      ]
    }
  ],

  todos: [
    { date: "2026-11-20", vendor: "京旺",     item: "前半報告上傳網頁",   done: false },
    { date: "2026-11-20", vendor: "老獵人",   item: "前半報告上傳網頁",   done: false },
    { date: "2026-11-20", vendor: "鼎珍食品", item: "提供3個AI工具候選", done: false }
  ],

  payments: [
    { date: "2026-07-17", vendor: "當歸小舖",    item: "前半", amount: 1000, paid: true },
    { date: "2026-10-03", vendor: "恆源",        item: "前半", amount: 1000, paid: true },
    { date: "2026-11-20", vendor: "京旺、老獵人", item: "前半", amount: 2000, paid: false }
  ]
};
