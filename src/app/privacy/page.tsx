import { siteConfig } from "@/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "隐私政策",
  description:
    `了解${siteConfig.nameZh}网站的 WhatsApp 联系表单、Google Map 与第三方服务如何处理资料。`,

  alternates: {
    canonical: "/privacy",
  },

  openGraph: {
    title: `隐私政策 | ${siteConfig.name}`,
    description:
      `了解${siteConfig.nameZh}网站的资料处理、第三方服务与联系方式政策。`,
    url: "/privacy",
    images: ["/images/hero-bg1.webp"],
  },
};

const lastUpdated = "2026年7月20日";

export default function PrivacyPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-24 text-amber-50 lg:px-8">
      <article className="rounded-3xl border border-amber-500/50 bg-[url('/images/bg1.webp')] bg-cover bg-center p-6 shadow-lg lg:p-10">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-amber-200">
          Privacy Policy
        </p>

        <h1 className="mt-3 text-4xl font-bold lg:text-5xl">隐私政策</h1>

        <p className="mt-4 text-sm text-amber-50/70">最后更新：{lastUpdated}</p>

        <div className="mt-8 space-y-8 leading-8 text-amber-50/85">
          <section>
            <h2 className="text-2xl font-bold text-amber-100">
              1. 我们收集的资料
            </h2>
            <p className="mt-3">
              本网站没有后台或数据库。联系表单只会在你的浏览器中整理姓名、电话、
              咨询类型、日期、人数与留言，并在你确认提交后打开 WhatsApp。
              网站本身不会接收或储存这些表单资料。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-amber-100">
              2. 我们如何使用这些资料
            </h2>
            <p className="mt-3">
              当你选择通过 WhatsApp、电话或 Email 联系我们时，你主动提供的资料只会用于：
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>回复你的询问或预订请求。</li>
              <li>通过 WhatsApp、电话或 Email 与你联系。</li>
              <li>提供菜单、营业时间、店铺地址或活动资讯。</li>
              <li>跟进与你本次询问相关的安排。</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-amber-100">
              3. WhatsApp 与第三方服务
            </h2>
            <p className="mt-3">
              本网站使用 WhatsApp 链接，让你可以直接发送信息给我们。
              当你点击 WhatsApp 链接后，你将离开本网站，并使用 WhatsApp
              的服务。该服务的资料处理方式将依照 WhatsApp 自身的隐私政策。
            </p>

            <p className="mt-3">
              本网站嵌入 Google Map，Google 可能会根据其服务政策处理相关数据，
              例如地图加载、位置显示或浏览器相关资讯。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-amber-100">4. 资料保存</h2>
            <p className="mt-3">
              本网站不会保存联系表单内容。通过 WhatsApp、电话或 Email 发送后的资料，
              可能会保留在相应服务或设备中，用于回复询问与跟进安排；相关保存期限受
              业务需要及各服务政策影响。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-amber-100">5. 资料分享</h2>
            <p className="mt-3">
              我们不会出售你主动提供的个人资料。只有当你选择打开 WhatsApp 或 Google
              Map 时，相关资料才会按你的操作交由对应第三方服务处理；法律要求除外。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-amber-100">
              6. 网站 Cookies
            </h2>
            <p className="mt-3">
              本网站目前没有自建分析或广告 Cookies。嵌入的 Google Map
              可能会依照 Google 的政策使用浏览器储存技术。你可以在浏览器设定中管理
              Cookies 与第三方内容权限。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-amber-100">7. 你的权利</h2>
            <p className="mt-3">
              如果你想查询、更正或删除你提供给我们的个人资料，可以通过本网站的联系方式
              与我们联系。我们会在合理范围内协助处理你的请求。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-amber-100">8. 联系我们</h2>
            <p className="mt-3">
              如果你对本隐私政策有任何问题，可以通过以下方式联系我们：
            </p>

            <div className="mt-4 rounded-2xl border border-amber-50/20 bg-black/25 p-4">
              <p>店名：{siteConfig.name}</p>
              <p>电话：{siteConfig.phone}</p>
              <p>Email：{siteConfig.email}</p>
              <p>地址：{siteConfig.address}</p>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}
