# 孕期呵护 Vue3 + Vite 拆分版

这是从单 HTML 安全迁移出的 Vue3 项目。

## 启动

```bash
npm install
npm run dev
```

浏览器打开终端中显示的地址，通常是：

```text
http://localhost:5173/
```

## 当前迁移策略

为保障原应用画面和功能尽量不变，第一阶段采用“LegacyShell 安全承载”：

- 原页面主体：`src/legacy/body.html`
- 原 CSS：`src/assets/css/style-01.css` 等
- 原 JS：`src/legacy/js/legacy-xx.js`
- Vue 入口：`src/main.js`
- 路由：`src/router/index.js`
- 状态管理：`src/stores/`

## 后续维护建议

后续可以逐步把 `src/legacy/body.html` 中的功能模块迁移为真正的 Vue 组件，例如：

- `src/views/GoodPregnancyPlan.vue`：好孕计划
- `src/views/GoodPregnancyDaily.vue`：好孕日报
- `src/views/Checkup.vue`：产检提醒
- `src/views/Weight.vue`：体重记录
- `src/views/Music.vue`：胎教音乐
- `src/views/AI.vue`：脐宝AI

## 上架前注意

原 HTML 中如包含 Coze Token、外部链接、统计脚本或第三方 SDK，正式发布前建议改为环境变量或服务端配置，避免直接暴露。
