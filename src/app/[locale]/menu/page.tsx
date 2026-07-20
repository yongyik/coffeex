import type { Metadata } from "next";
import MenuPageClient from "@/components/menu/MenuPageClient";
import { getLocalizedMenu } from "@/data/menu";
import { getDictionary } from "@/i18n/get-dictionary";
import { getLocaleOrNotFound } from "@/i18n/request";
import { createPageMetadata } from "@/lib/metadata";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = getLocaleOrNotFound((await params).locale);
  return createPageMetadata(locale, "menu");
}

export default async function MenuPage({ params }: PageProps) {
  const locale = getLocaleOrNotFound((await params).locale);
  const dictionary = getDictionary(locale);

  return (
    <MenuPageClient
      menu={getLocalizedMenu(locale)}
      dictionary={{ menu: dictionary.menu, common: dictionary.common }}
    />
  );
}
