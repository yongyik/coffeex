# Morning Oak Coffee

晨木咖啡（Morning Oak Coffee）是一个面向独立咖啡店的响应式官网作品集案例。项目保留木纹、咖啡豆纹理、深色咖啡馆氛围与图片叙事，并以真实可操作的菜单浏览和 WhatsApp 联系流程展示小型商业网站的完整实现。

> This is a fictional portfolio project created for demonstration purposes.

## 项目目标

- 在手机、平板与桌面端提供稳定一致的浏览体验
- 让访客快速查看菜单、品牌故事、营业资料与店铺位置
- 通过 WhatsApp 完成座位、活动、菜单或合作询问，不引入后台和数据库
- 提供基础 SEO、结构化资料、键盘操作与无障碍支持

## 页面与功能

- `/`：Hero、推荐饮品 Swiper 轮播，以及故事、空间和团队图片入口
- `/about`：品牌故事、店内环境图片与团队介绍
- `/menu`：分类导航、商品卡片、MYR 价格与可键盘操作的详情弹窗
- `/contact`：联系资料、营业时间、Google Map，以及 WhatsApp 询问表单
- `/privacy`：说明表单与第三方服务的资料处理方式
- 全站：响应式 Header、移动菜单、Footer、favicon、metadata、Open Graph、JSON-LD、sitemap 与 robots

轮播保留分页、触摸滑动与自动播放，并支持键盘操作和 `prefers-reduced-motion`。商品弹窗支持 Escape、点击遮罩关闭、焦点限制、关闭后焦点返回及背景滚动锁定。

## WhatsApp 联系流程

访客填写姓名、联系电话、咨询类型、希望日期、人数和留言后，浏览器会使用 `encodeURIComponent` 生成预填消息并打开 WhatsApp。表单不会提交到本项目的服务器或数据库。

## 技术栈

- Next.js 16（App Router）
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Swiper 12
- `next/image` 与 Metadata API

## 本地运行

```bash
npm install
npm run dev
```

打开 `http://localhost:3000`。

## 质量检查与 Production Build

```bash
npm run lint
npx tsc --noEmit
npm run build
npm run start
```

如需在部署环境使用正式网址，请设置 `NEXT_PUBLIC_SITE_URL`，用于 canonical、Open Graph、sitemap 与结构化资料。

## 部署

项目可部署到支持 Next.js 的平台，例如 Vercel。连接 Git 仓库、设置 `NEXT_PUBLIC_SITE_URL` 后执行默认的 `npm run build` 即可。

- Demo URL：—
- GitHub URL：—
