import type { Metadata } from "next";
import ContactPageClient from "@/components/contact/ContactPageClient";
import { getDictionary } from "@/i18n/get-dictionary";
import { getLocaleOrNotFound } from "@/i18n/request";
import { createPageMetadata } from "@/lib/metadata";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = getLocaleOrNotFound((await params).locale);
  return createPageMetadata(locale, "contact");
}

export default async function ContactPage({ params }: PageProps) {
  const locale = getLocaleOrNotFound((await params).locale);
  return (
    <ContactPageClient
      locale={locale}
      dictionary={getDictionary(locale).contact}
    />
  );
}
