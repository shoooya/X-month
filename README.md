# 年齢計算アプリ

生年月日を入力すると、今日までの正確な年齢（年・月・日）を計算するWebアプリケーションです。

## 機能

- 生年月日からの正確な年齢計算（年・月・日）
- 生まれてからの総日数を表示
- 日付入力検証（未来の日付は入力不可）
- アニメーション付きの結果表示
- レスポンシブデザイン（スマートフォン対応）
- 美しいグラデーションUI

## デモ

GitHub Pagesで公開中：（デプロイ後にURLが表示されます）

## GitHub Pagesへの自動デプロイ設定

このリポジトリは、mainブランチへのプッシュ時に自動的にGitHub Pagesへデプロイされるように設定されています。

### 初回設定手順

1. GitHubリポジトリの **Settings** → **Pages** に移動
2. **Source** セクションで **GitHub Actions** を選択
3. mainブランチにマージすると自動的にデプロイされます

### 手動デプロイ

必要に応じて、GitHubの **Actions** タブから手動でワークフローを実行できます。

## ローカルでの実行

1. このリポジトリをクローン
```bash
git clone https://github.com/yourusername/X-month.git
cd X-month
```

2. `index.html` をブラウザで開く
   - 直接ファイルを開く
   - またはローカルサーバーを使用（例：`python -m http.server`）

## 技術スタック

- HTML5
- CSS3（Flexbox、アニメーション、グラデーション）
- Vanilla JavaScript（フレームワーク不要）

## ファイル構成

```
.
├── index.html          # メインHTMLファイル
├── style.css           # スタイルシート
├── script.js           # 年齢計算ロジック
├── .github/
│   └── workflows/
│       └── deploy.yml  # GitHub Actions設定
└── README.md           # このファイル
```

## ライセンス

MIT License
