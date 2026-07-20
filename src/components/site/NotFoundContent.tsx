"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { defaultLocale, getLocalizedPath, isLocale } from "@/i18n/config";
import { notFoundMessages } from "@/i18n/client-messages";
import type { Locale } from "@/i18n/types";

export default function NotFoundContent() {
  const params = useParams<{ locale?: string }>();
  const locale: Locale =
    params.locale && isLocale(params.locale) ? params.locale : defaultLocale;
  const dictionary = notFoundMessages[locale];

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-24 text-amber-50">
      <section className="w-full max-w-2xl rounded-3xl border border-amber-500/50 bg-[url('/images/bg1.webp')] bg-cover bg-center p-8 text-center shadow-lg lg:p-12">
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
          <Link
            href={getLocalizedPath(locale)}
            className="rounded-full bg-amber-100 px-5 py-2.5 font-semibold text-stone-950 transition hover:bg-white"
          >
            {dictionary.home}
          </Link>
          <Link
            href={getLocalizedPath(locale, "/menu")}
            className="rounded-full border border-amber-50/60 bg-black/20 px-5 py-2.5 font-semibold transition hover:bg-amber-50/15 hover:text-amber-100"
          >
            {dictionary.menu}
          </Link>
        </div>
      </section>
    </div>
  );
}
