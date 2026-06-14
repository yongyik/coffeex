import { siteConfig } from "@/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "隐私政策",
  description:
    "了解 MyCoffee 如何收集、使用、保存和保护你通过网站、WhatsApp、Email 或联系表单提供的个人资料。",

  alternates: {
    canonical: "/privacy",
  },

  openGraph: {
    title: `隐私政策 | ${siteConfig.name}`,
    description:
      "了解 MyCoffee 的个人资料收集、使用、保存、第三方服务与联系方式政策。",
    url: "/privacy",
  },
};

const lastUpdated = "2026年6月14日";

export default function PrivacyPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-24 text-amber-50 lg:px-8">
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
              当你通过本网站联系 Mycoffee 时，我们可能会收集你主动提供的资料，
              例如姓名、电话号码、Email、留言内容，以及你想咨询的服务或菜单内容。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-amber-100">
              2. 我们如何使用这些资料
            </h2>
            <p className="mt-3">我们收集资料的目的包括：</p>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>回复你的询问或预订请求。</li>
              <li>通过 WhatsApp、电话或 Email 与你联系。</li>
              <li>提供菜单、营业时间、店铺地址或活动资讯。</li>
              <li>改善我们的网站内容和顾客体验。</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-amber-100">
              3. WhatsApp 与第三方服务
            </h2>
            <p className="mt-3">
              本网站可能会使用 WhatsApp 链接，让你可以直接发送信息给我们。
              当你点击 WhatsApp 链接后，你将离开本网站，并使用 WhatsApp
              的服务。该服务的资料处理方式将依照 WhatsApp 自身的隐私政策。
            </p>

            <p className="mt-3">
              如果本网站嵌入 Google Map，Google
              可能会根据其服务政策处理相关数据，
              例如地图加载、位置显示或浏览器相关资讯。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-amber-100">4. 资料保存</h2>
            <p className="mt-3">
              我们只会在合理需要的时间内保存你的资料，例如用于回复你的询问、
              处理预订、客户服务或必要的业务记录。若资料已不再需要，我们会尽量删除
              或停止使用相关资料。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-amber-100">5. 资料分享</h2>
            <p className="mt-3">
              我们不会出售你的个人资料。除非是为了回复你的询问、提供服务、
              遵守法律要求，或获得你的同意，否则我们不会随意向第三方分享你的个人资料。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-amber-100">
              6. 网站 Cookies
            </h2>
            <p className="mt-3">
              本网站可能会使用基本的 Cookies 或浏览器技术，以维持网站正常运作、
              改善浏览体验或分析网站使用情况。你可以通过浏览器设定管理或关闭
              Cookies。
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
    </main>
  );
}
