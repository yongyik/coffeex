import Link from "next/link";
import { siteConfig } from "@/config/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const footerLinks = [
  {
    title: "网站导航",
    links: [
      {
        label: "首页",
        href: "/",
      },
      {
        label: "关于我们",
        href: "/about",
      },
      {
        label: "菜单",
        href: "/menu",
      },
      {
        label: "联系我们",
        href: "/contact",
      },
    ],
  },
  {
    title: "其他页面",
    links: [
      {
        label: "隐私政策",
        href: "/privacy",
      },
    ],
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = getWhatsAppUrl();

  return (
    <footer className=" z-10 border-t bg-[url('/images/footer-bg.webp')] bg-cover bg-center text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-2">
              <div className="flex size-10 items-center justify-center rounded-xl bg-white text-sm font-bold text-stone-950">
                {siteConfig.name.charAt(0)}
              </div>

              <span className="text-lg font-bold tracking-tight">
                {siteConfig.name}
              </span>
            </Link>

            <p className="mt-4 max-w-md text-sm leading-7 text-stone-300">
              {siteConfig.description}
            </p>

            <div className="mt-5 space-y-2 text-sm text-stone-300">
              <p>
                电话：
                <a
                  href={`tel:${siteConfig.phone.replace(/[\s-]/g, "")}`}
                  className="hover:text-white"
                >
                  {siteConfig.phone}
                </a>
              </p>
              <p>
                Email：
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-white"
                >
                  {siteConfig.email}
                </a>
              </p>
              <p>
                地址：
                <Link href="/contact#location" className="hover:text-white">
                  {siteConfig.address}
                </Link>
              </p>
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h2 className="text-sm font-semibold text-white">
                {group.title}
              </h2>

              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-stone-300 transition hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h2 className="text-sm font-semibold text-white">联系我们</h2>

            <p className="mt-4 text-sm leading-7 text-stone-300">
              想预订座位、询问菜单、活动包场或合作，可以直接通过 WhatsApp 联系我们。
            </p>

            <div className="mt-4 space-y-1 text-sm text-stone-300">
              {siteConfig.businessHours.map((item) => (
                <p key={item.day}>
                  {item.day}：{item.time}
                </p>
              ))}
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-stone-950 transition hover:bg-stone-200"
            >
              WhatsApp 咨询
            </a>

            {siteConfig.social.instagram ? (
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="mt-3 block text-sm text-stone-300 underline underline-offset-4 transition hover:text-white"
              >
                Instagram：@morningoakcoffee
              </a>
            ) : null}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-stone-400 md:flex-row md:items-center md:justify-between">
          <p>
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>

          <p>
            This is a fictional portfolio project created for demonstration
            purposes.
          </p>
        </div>
      </div>
    </footer>
  );
}
