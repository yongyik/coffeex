import type { Metadata } from "next";
import "../globals.css";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { siteConfig } from "@/config/site";
import { defaultLocale, isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { createCafeJsonLd } from "@/lib/metadata";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: { index: true, follow: true },
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale: localeParam } = await params;
  const locale = isLocale(localeParam) ? localeParam : defaultLocale;
  const dictionary = getDictionary(locale);
  const structuredData = createCafeJsonLd(locale);

  return (
    <html lang={locale === "zh" ? "zh-CN" : "en-MY"} className="h-full antialiased">
      <body className="flex min-h-full flex-col text-amber-50">
        <a href="#main-content" className="skip-link">
          {dictionary.common.skipToContent}
        </a>

        <div
          aria-hidden="true"
          className="fixed inset-0 z-0 bg-[url('/images/site-bg.webp')] bg-cover bg-center"
        />
        <div aria-hidden="true" className="fixed inset-0 z-0 bg-black/40" />

        <Header locale={locale} dictionary={dictionary.header} />
        <main
          id="main-content"
          tabIndex={-1}
          className="relative z-10 min-h-screen"
        >
          {children}
        </main>
        <div className="relative z-10">
          <Footer locale={locale} dictionary={dictionary.footer} />
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
