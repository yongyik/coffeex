# Morning Oak Coffee

晨木咖啡（Morning Oak Coffee）是一个为虚构 Mont Kiara 独立咖啡店制作的双语言官网作品集案例。项目重点展示在既有视觉设计上继续开发：保留深色图片背景、木纹和咖啡豆纹理、Swiper 推荐饮品轮播与菜单弹窗，并补齐响应式、无障碍、SEO 和中英文内容架构。

> 本网站为虚构作品集案例，仅用于展示。
>
> This is a fictional portfolio project created for demonstration purposes.

## 项目背景与目标

虚构客户希望访客可以快速了解品牌、查看菜单、浏览空间与团队，并通过电话或 WhatsApp 完成座位、活动或合作咨询。网站不包含数据库、后台、登录、购物车、在线点餐或付款功能。

原有视觉以深色咖啡馆氛围、真实咖啡图片和纹理背景为核心。本次开发保留全部主要背景和现有 Swiper 实现，没有改成纯色、渐变或静态商品网格。

## 语言路由

网站支持简体中文和 English，主要内容由服务端集中式 TypeScript 字典提供：

- 中文：`/zh`、`/zh/menu`、`/zh/about`、`/zh/contact`、`/zh/privacy`
- English：`/en`、`/en/menu`、`/en/about`、`/en/contact`、`/en/privacy`
- `/` 默认跳转到 `/zh`
- `/menu`、`/about`、`/contact`、`/privacy` 会跳转到相应中文页面
- Header 的语言切换会保留当前页面；菜单商品锚点也会一并保留

翻译配置位于 `src/i18n/`。菜单的双语言商品资料集中在 `src/data/menu.ts`，品牌、地址、营业时间与联系方式集中在 `src/config/site.ts`。

## 主要功能

- 保留原有 Hero、图片背景、入口图片与 Framer Motion 动画
- Hero 提供当前语言的菜单与 WhatsApp 行动按钮
- Swiper 推荐饮品轮播支持分页、触摸、键盘、自动播放暂停/继续及 `prefers-reduced-motion`
- 轮播商品会直接定位到对应语言菜单中的稳定商品锚点
- Sticky 菜单分类导航、当前分类状态和手机横向滚动
- 双语言菜单名称、说明、标签、选项、过敏原与详情弹窗
- 弹窗支持 Escape、遮罩关闭、焦点限制、滚动锁定与焦点返回
- About 品牌故事、图片 alt 和团队介绍完整双语言
- Contact 表单提供双语言字段、验证错误与 WhatsApp 预填信息
- 电话使用 `tel:`，WhatsApp 使用独立链接，不会混用
- Google Map、双语言隐私说明和 locale 404 页面
- 双语言 Metadata、Open Graph、canonical、hreflang、JSON-LD、sitemap 与 robots

## WhatsApp 流程

联系表单在浏览器中验证姓名、联系电话、咨询类型和留言，然后根据当前语言生成 WhatsApp 预填信息。内容通过 `encodeURIComponent` 编码并打开 WhatsApp，不会提交或保存到本项目的服务器或数据库。

## 技术栈

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Swiper 12
- `next/image`、Metadata API 与 JSON-LD

## 本地运行

```bash
npm install
npm run dev
```

打开 `http://localhost:3000`，根路径会跳转至中文首页。

## 环境变量

复制 `.env.example` 为 `.env.local`，并设置最终线上网址：

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

该值用于 canonical、Open Graph URL、JSON-LD、robots 和 sitemap。未设置时使用明确的开发 fallback：`http://localhost:3000`。

## 质量检查与 Production Build

```bash
npm run lint
npx tsc --noEmit
npm run build
npm run start
```

## 图片压缩脚本

项目中的图片主要为 WebP。`npm run compress-images` 支持 `.jpg`、`.jpeg`、`.png` 和 `.webp`，默认最大宽度为 1600px、WebP 质量为 82，并输出到系统临时目录 `coffeex-images-optimized`，不会覆盖 `public/images` 原图，也不会在构建时自动执行。

可选环境变量：

- `IMAGE_OUTPUT_DIR`：自定义输出目录，必须位于 `public/images` 之外
- `IMAGE_QUALITY`：60–95
- `IMAGE_MAX_WIDTH`：640–3000

## 部署

可部署到支持 Next.js 的平台，例如 Vercel。部署时设置 `NEXT_PUBLIC_SITE_URL`，再使用平台默认的 `npm run build`。

- Demo URL：尚未部署
- GitHub：https://github.com/yongyik/coffeex

## 截图

正式整理作品集时，可将桌面端与手机端截图放入 `docs/screenshots/`，并在此处加入预览。

## 后续可改善内容

- 接入经过授权的真实社交账号和正式域名
- 为作品集补充 Lighthouse 报告与真实设备截图
- 如未来菜单规模扩大，可考虑内容管理系统；当前静态数据更适合此案例规模
