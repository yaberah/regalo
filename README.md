# regalo
Salon web page using nextjs

## ローカル環境
vercelで構築

```
$ yarn dev
```
で```.env.development.local```の環境変数を利用できる。

## プレビューデプロイ
```
$ vercel deploy
```
## 本番デプロイ
```
$ vercel --prod
```

## 環境変数

ローカル環境で
.env.development.local
を作成

- MICROCMS_API_TOKEN
- GOOGLE_API_KEY
- INSTAGRAM_ACCEASS_TOKEN
上記3つのsecret keyを設定する
（本番の環境変数はVercel上で行う）
