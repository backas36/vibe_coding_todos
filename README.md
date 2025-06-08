# Vibe Coding Todos

一個簡潔、現代化的待辦清單（Todo List）應用，使用 React + TypeScript + Vite 開發，支援本地儲存、無障礙設計，並可一鍵部署到 GitHub Pages。

## 主要功能

- 新增、編輯、刪除待辦事項
- 標記任務為已完成/未完成
- 篩選（全部 / 進行中 / 已完成）
- 一鍵清除所有已完成任務
- 本地儲存（localStorage）自動保存
- 無障礙設計（ARIA、鍵盤操作、skip link）
- 響應式設計，支援手機與桌面
- 一鍵部署到 GitHub Pages

## 安裝與啟動

1. 下載或 clone 此專案
2. 安裝依賴（需先安裝 [pnpm](https://pnpm.io/)）
   ```bash
   pnpm install
   ```
3. 啟動本地開發伺服器
   ```bash
   pnpm run dev
   ```
4. 開啟瀏覽器訪問 http://localhost:5173

## 部署到 GitHub Pages

1. 確認 `vite.config.ts` 的 `base` 設定為 `/vibe_coding_todos/`
2. 執行 build 與 deploy
   ```bash
   pnpm run build
   pnpm run deploy
   ```
3. 到 GitHub repo → Settings → Pages，選擇 `gh-pages` 分支
4. 訪問 https://backas36.github.io/vibe_coding_todos

## 技術棧

- React 19 + TypeScript
- Vite
- Tailwind CSS
- pnpm
- gh-pages

## 未來增強

- 支援多主題（深色模式）
- 任務拖曳排序
- 多清單/分類
- 雲端同步

## 已知問題與限制

- 僅支援現代瀏覽器（建議 Chrome/Firefox/Safari/Edge）
- 本地儲存僅限單一瀏覽器，不支援多裝置同步
- GitHub Pages 部署需正確設定 base 路徑

## 使用者指南

1. 輸入任務內容並按 Enter 或點擊新增
2. 點擊任務左側可切換完成狀態
3. 點擊編輯圖示可修改內容，刪除圖示可移除任務
4. 上方可切換「全部 / 進行中 / 已完成」篩選
5. 有已完成任務時，會出現「清除已完成」按鈕
6. 支援鍵盤 Tab/Enter/Escape 操作，並有 skip link 提升無障礙

---

如有建議或問題，歡迎提 issue！
