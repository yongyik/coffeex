import Link from "next/link";
import { siteConfig } from "@/config/site";
import { getLocalizedPath } from "@/i18n/config";
import type { Dictionary, Locale } from "@/i18n/types";
import { getWhatsAppUrl } from "@/lib/whatsapp";

interface FooterProps {
  locale: Locale;
  dictionary: Dictionary["footer"];
}

export function Footer({ locale, dictionary }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = getWhatsAppUrl(locale);
  const footerLinks = [
    {
      title: dictionary.navigation,
      links: [
        { label: dictionary.nav.home, href: getLocalizedPath(locale) },
        { label: dictionary.nav.about, href: getLocalizedPath(locale, "/about") },
        { label: dictionary.nav.menu, href: getLocalizedPath(locale, "/menu") },
        { label: dictionary.nav.contact, href: getLocalizedPath(locale, "/contact") },
      ],
    },
    {
      title: dictionary.otherPages,
      links: [
        { label: dictionary.privacy, href: getLocalizedPath(locale, "/privacy") },
      ],
    },
  ];

  return (
    <footer className="z-10 border-t bg-[url('/images/footer-bg.webp')] bg-cover bg-center text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]">
          <div>
            <Link href={getLocalizedPath(locale)} className="inline-flex items-center gap-2">
              <div className="flex size-10 items-center justify-center rounded-xl bg-white text-sm font-bold text-stone-950">
                M
              </div>
              <span className="text-lg font-bold tracking-tight">
                {locale === "zh"
                  ? `${siteConfig.nameZh} ${siteConfig.name}`
                  : siteConfig.name}
              </span>
            </Link>

            <p className="mt-4 max-w-md text-sm leading-7 text-stone-300">
              {siteConfig.description[locale]}
            </p>

            <div className="mt-5 space-y-2 text-sm text-stone-300">
              <p>
                {dictionary.phone}：
                <a href={`tel:${siteConfig.phoneHref}`} className="hover:text-white">
                  {siteConfig.phone}
                </a>
              </p>
              <p>
                {dictionary.email}：
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                  {siteConfig.email}
                </a>
              </p>
              <p>
                {dictionary.address}：
                <Link
                  href={`${getLocalizedPath(locale, "/contact")}#location`}
                  className="hover:text-white"
                >
                  {siteConfig.address}
                </Link>
              </p>
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h2 className="text-sm font-semibold text-white">{group.title}</h2>
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
            <h2 className="text-sm font-semibold text-white">
              {dictionary.contactUs}
            </h2>
            <p className="mt-4 text-sm font-medium text-stone-200">
              {dictionary.businessHours}
            </p>
            <div className="mt-2 space-y-1 text-sm text-stone-300">
              {siteConfig.businessHours.map((item) => (
                <p key={item.day.en}>
                  {item.day[locale]}：{item.time[locale]}
                </p>
              ))}
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-stone-950 transition hover:bg-stone-200"
            >
              {dictionary.whatsapp}
            </a>

            <p className="mt-3 text-sm text-stone-300">
              {dictionary.instagram}：{siteConfig.instagramHandle}
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-stone-400 md:flex-row md:items-center md:justify-between">
          <p>
            © {currentYear} {siteConfig.name}. {dictionary.copyright}
          </p>
          <p>{siteConfig.portfolioNotice[locale]}</p>
        </div>
      </div>
    </footer>
  );
}
