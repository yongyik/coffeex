import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { getDictionary } from "@/i18n/get-dictionary";
import { getLocaleOrNotFound } from "@/i18n/request";
import { createPageMetadata } from "@/lib/metadata";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = getLocaleOrNotFound((await params).locale);
  return createPageMetadata(locale, "privacy");
}

export default async function PrivacyPage({ params }: PageProps) {
  const locale = getLocaleOrNotFound((await params).locale);
  const dictionary = getDictionary(locale);

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-24 text-amber-50 lg:px-8">
      <article className="rounded-3xl border border-amber-500/50 bg-[url('/images/bg1.webp')] bg-cover bg-center p-6 shadow-lg lg:p-10">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-amber-200">
          {dictionary.privacy.badge}
        </p>
        <h1 className="mt-3 text-4xl font-bold lg:text-5xl">
          {dictionary.privacy.title}
        </h1>
        <p className="mt-4 text-sm text-amber-50/70">
          {dictionary.privacy.updated}
        </p>

        <div className="mt-8 space-y-8 leading-8 text-amber-50/85">
          {dictionary.privacy.sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl font-bold text-amber-100">
                {section.title}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-3">
                  {paragraph}
                </p>
              ))}
              {section.bullets ? (
                <ul className="mt-3 list-disc space-y-2 pl-6">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}

          <section>
            <h2 className="text-2xl font-bold text-amber-100">
              {dictionary.privacy.contactTitle}
            </h2>
            <p className="mt-3">{dictionary.privacy.contactIntro}</p>
            <div className="mt-4 rounded-2xl border border-amber-50/20 bg-black/25 p-4">
              <p>{dictionary.footer.phone}：{siteConfig.phone}</p>
              <p>{dictionary.footer.email}：{siteConfig.email}</p>
              <p>{dictionary.footer.address}：{siteConfig.address}</p>
            </div>
            <p className="mt-4 text-sm text-amber-50/70">
              {dictionary.privacy.fictionalNotice}
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
