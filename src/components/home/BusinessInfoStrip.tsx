"use client";

import { useSyncExternalStore } from "react";
import { siteConfig } from "@/config/site";
import type { Dictionary, Locale } from "@/i18n/types";
import { getWhatsAppUrl } from "@/lib/whatsapp";

interface BusinessInfoStripProps {
  locale: Locale;
  dictionary: Dictionary["home"]["businessInfo"];
}

const subscribeToDay = () => () => undefined;
const getBrowserDay = () => new Date().getDay();
const getServerDay = () => 1;

export default function BusinessInfoStrip({
  locale,
  dictionary,
}: BusinessInfoStripProps) {
  const dayOfWeek = useSyncExternalStore(
    subscribeToDay,
    getBrowserDay,
    getServerDay,
  );

  const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
  const hours = siteConfig.businessHours[isWeekend ? 1 : 0].time[locale];

  return (
    <section
      aria-labelledby="business-info-title"
      className="mx-4 rounded-2xl border border-amber-500/40 bg-black/30 px-4 py-5 text-amber-50 shadow-lg sm:mx-6 lg:mx-8"
    >
      <h2 id="business-info-title" className="sr-only">
        {dictionary.heading}
      </h2>
      <ul className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2 lg:grid-cols-5">
        <li className="rounded-xl border border-amber-50/15 bg-amber-50/10 px-4 py-3">
          <span className="block text-xs text-amber-200">{dictionary.today}</span>
          <span className="mt-1 block font-medium">{hours}</span>
        </li>
        <li className="rounded-xl border border-amber-50/15 bg-amber-50/10 px-4 py-3">
          <span className="block text-xs text-amber-200">{dictionary.location}</span>
          <span className="mt-1 block font-medium">{siteConfig.area}</span>
        </li>
        <li className="rounded-xl border border-amber-50/15 bg-amber-50/10 px-4 py-3">
          <a
            href={getWhatsAppUrl(locale)}
            target="_blank"
            rel="noreferrer"
            className="flex min-h-10 items-center font-medium underline decoration-amber-200/60 underline-offset-4 hover:text-amber-200"
          >
            {dictionary.whatsapp}
          </a>
        </li>
        <li className="rounded-xl border border-amber-50/15 bg-amber-50/10 px-4 py-3 font-medium">
          {dictionary.wifi}
        </li>
        <li className="rounded-xl border border-amber-50/15 bg-amber-50/10 px-4 py-3 font-medium sm:col-span-2 lg:col-span-1">
          {dictionary.parking}
        </li>
      </ul>
    </section>
  );
}
