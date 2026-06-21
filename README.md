# reeds

REEDS 實驗教育機構網站與籌備工作檢核表。

## 網站

- GitHub Pages: https://aa9792.github.io/reeds/
- GitHub repo: https://github.com/aa9792/reeds

## 主要檔案

- `index.html`: GitHub Pages 入口網頁。
- `reeds .html`: 本機備份版網頁。
- `reeds-hero-exploration.png`: 首頁主視覺。
- `騎士精神.png`: REEDS 騎士精神圖像。
- `outputs/reeds_checklist/睿思實驗教育機構_115-116籌備工作檢核表.xlsx`: 籌備工作檢核表 Excel。
- `google-apps-script/reeds-sheet-api.gs`: 讓網頁讀寫 Google Sheet 的 Apps Script API。

## Google Sheet 同步設定

目前已建立 Google Sheet：

https://docs.google.com/spreadsheets/d/10rzQQQj-BYZ1hJAilPTVlDyfUYfuJKj1RwUtIv9a2pA

網站要能同步打勾與備註，需要先部署 Apps Script：

1. 開啟上面的 Google Sheet。
2. 點選 `擴充功能` → `Apps Script`。
3. 將 `google-apps-script/reeds-sheet-api.gs` 的內容貼進 Apps Script 編輯器。
4. 點選 `部署` → `新增部署作業`。
5. 類型選擇 `網頁應用程式`。
6. `執行身分` 選擇 `我`。
7. `誰可以存取` 選擇 `任何人`。
8. 部署後複製 Web App URL。
9. 回到 `index.html`，把 `PREP_SHEET_API_URL` 的空字串換成 Web App URL。
10. Commit 並 push，等待 GitHub Pages 更新。

未設定 `PREP_SHEET_API_URL` 時，網站仍可使用，但檢核狀態只會暫存在個人瀏覽器。
