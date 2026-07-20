import type { Metadata } from "next";
import { notFoundMessages } from "@/i18n/client-messages";
import "./globals.css";

export const metadata: Metadata = {
  title: "404 | Morning Oak Coffee",
  robots: { index: false, follow: false },
};

function NotFoundPanel({ locale }: { locale: "zh" | "en" }) {
  const dictionary = notFoundMessages[locale];

  return (
    <section
      data-not-found-locale={locale}
      className="w-full max-w-2xl rounded-3xl border border-amber-500/50 bg-[url('/images/bg1.webp')] bg-cover bg-center p-8 text-center shadow-lg lg:p-12"
    >
      <p className="text-sm font-medium uppercase tracking-[0.3em] text-amber-200">
        404
      </p>
      <h1 className="mt-4 text-4xl font-bold lg:text-5xl">
        {dictionary.title}
      </h1>
      <p className="mx-auto mt-5 max-w-xl leading-8 text-amber-50/85">
        {dictionary.description}
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <a
          href={`/${locale}`}
          className="rounded-full bg-amber-100 px-5 py-2.5 font-semibold text-stone-950 transition hover:bg-white"
        >
          {dictionary.home}
        </a>
        <a
          href={`/${locale}/menu`}
          className="rounded-full border border-amber-50/60 bg-black/20 px-5 py-2.5 font-semibold transition hover:bg-amber-50/15 hover:text-amber-100"
        >
          {dictionary.menu}
        </a>
      </div>
    </section>
  );
}

export default function GlobalNotFound() {
  return (
    <html
      lang="zh-CN"
      data-page-locale="zh"
      suppressHydrationWarning
      className="h-full antialiased"
    >
      <head>
        <style>{`
          [data-page-locale="zh"] [data-not-found-locale="en"],
          [data-page-locale="en"] [data-not-found-locale="zh"] { display: none; }
        `}</style>
        <script
          dangerouslySetInnerHTML={{
            __html:
              '(function(){var l=/^\\/en(?:\\/|$)/.test(location.pathname)?"en":"zh";document.documentElement.dataset.pageLocale=l;document.documentElement.lang=l==="en"?"en-MY":"zh-CN";}());',
          }}
        />
      </head>
      <body className="min-h-full text-amber-50">
        <div
          aria-hidden="true"
          className="fixed inset-0 z-0 bg-[url('/images/site-bg.webp')] bg-cover bg-center"
        />
        <div aria-hidden="true" className="fixed inset-0 z-0 bg-black/40" />
        <main className="relative z-10 flex min-h-screen items-center justify-center px-4 py-24">
          <NotFoundPanel locale="zh" />
          <NotFoundPanel locale="en" />
        </main>
      </body>
    </html>
  );
}
