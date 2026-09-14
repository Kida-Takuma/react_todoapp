# React TodoApp

React 製のシンプルな Todo アプリです。

> **注釈: Create React App から Vite へ移行しました(2026-09)**
>
> このプロジェクトはもともと [Create React App](https://github.com/facebook/create-react-app) (react-scripts) で作成されましたが、以下の理由で [Vite](https://vite.dev/) + [Vitest](https://vitest.dev/) に移行しました。
>
> - **セキュリティ**: react-scripts はメンテナンスが終了しており、内部で使う古い依存パッケージ(webpack-dev-server / jest 27 / svgo など)に起因する脆弱性警告が 65 件(critical 3 件含む)出ていた。`overrides` で個別に抑え込む方法は根本解決にならないため、ビルドツールごと置き換えて **脆弱性 0 件** にした。
> - **公式の非推奨化**: React 公式も CRA を非推奨とし、Vite などへの移行を推奨している。
> - **開発体験**: 開発サーバの起動・HMR が高速。
>
> あわせてパッケージマネージャを npm から **pnpm** に、依存パッケージ(React 19 / uuid 14 / web-vitals 6 など)も最新版に更新しています。

## 必要なもの

- Node.js 22+
- pnpm

## セットアップ

```sh
pnpm install
```

## スクリプト

### `pnpm dev`(または `pnpm start`)

開発モードでアプリを起動します。

### `pnpm test`

Vitest をウォッチモードで起動します。

### `pnpm build`

本番用ビルドを `dist` フォルダに出力します。

### `pnpm preview`

`dist` のビルド成果物をローカルで配信して確認します。
