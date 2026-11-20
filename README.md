# 進度管理_冠竹

## 上線（一次）
1. GitHub 新建 repo，上傳 `index.html`、`data.js`
2. Settings → Pages → Branch 選 `main` / `root` → Save
3. 約 1 分鐘後網址：`https://<帳號>.github.io/<repo名稱>/`，傳給對方

## 日常更新
在 GitHub 打開 `data.js` → 鉛筆圖示編輯 → Commit changes，約 1 分鐘後網頁更新。

- 進度：`progress` 改 `0`→`1`
- 待辦完成：`done: false` → `true`
- 已給錢：`paid: false` → `true`
- 新增會議／待辦／給錢：複製一筆 `{ ... },` 貼上修改
- 記得改 `updated` 日期

## 注意
免費帳號的 GitHub Pages 需要 public repo，任何人知道網址就看得到（含金額）。
