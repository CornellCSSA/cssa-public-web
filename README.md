# cssa-public-web

Cornell CSSA 官网（www.cornellcssa.org）。Vite + React 静态 SPA，部署在 S3 + CloudFront，
基础设施见 [cssa-deployment-cdk](https://github.com/CornellCSSA/cssa-deployment-cdk)。

## 开发

```bash
npm ci
npm run dev      # http://localhost:5174
npm run build    # 类型检查 + 构建到 dist/
```

## 部署

push 到 `main` 即由 `.github/workflows/deploy.yml` 构建并同步到 S3、刷新 CloudFront。
需要在仓库 Variables 里配置 `AWS_ROLE_ARN`、`AWS_REGION`、`S3_BUCKET`、
`CLOUDFRONT_DISTRIBUTION_ID`（取自 CDK 的 `CssaCicd` / `CssaFrontend` 输出）。
