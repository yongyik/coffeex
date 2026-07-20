import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { getDictionary } from "@/i18n/get-dictionary";
import { getLanguageAlternates, getLocalizedPath } from "@/i18n/config";
import type { Locale, PageKey } from "@/i18n/types";

const pagePaths: Record<PageKey, string> = {
  home: "",
  menu: "/menu",
  about: "/about",
  contact: "/contact",
  privacy: "/privacy",
};

const pageImages: Record<PageKey, string> = {
  home: "/images/hero-bg1.webp",
  menu: "/images/hero-bg1.webp",
  about: "/images/about/header.webp",
  contact: "/images/contact/header.webp",
  privacy: "/images/hero-bg1.webp",
};

export function createPageMetadata(locale: Locale, page: PageKey): Metadata {
  const dictionary = getDictionary(locale);
  const seo = dictionary.seo[page];
  const path = pagePaths[page];
  const canonical = getLocalizedPath(locale, path);

  return {
    metadataBase: new URL(siteConfig.url),
    title: { absolute: seo.title },
    description: seo.description,
    alternates: {
      canonical,
      languages: getLanguageAlternates(path),
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: canonical,
      siteName: siteConfig.name,
      locale: locale === "zh" ? "zh_CN" : "en_MY",
      alternateLocale: [locale === "zh" ? "en_MY" : "zh_CN"],
      type: "website",
      images: [{ url: pageImages[page], alt: seo.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [pageImages[page]],
    },
  };
}

export function createCafeJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: locale === "zh" ? siteConfig.nameZh : siteConfig.name,
    alternateName: locale === "zh" ? siteConfig.name : siteConfig.nameZh,
    description: siteConfig.description[locale],
    url: `${siteConfig.url}${getLocalizedPath(locale)}`,
    image: `${siteConfig.url}/images/hero-bg1.webp`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: siteConfig.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: "18, Jalan Solaris 3, Mont Kiara",
      postalCode: "50480",
      addressLocality: "Kuala Lumpur",
      addressCountry: "MY",
    },
    openingHoursSpecification: siteConfig.businessHours.map((hours) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: hours.schemaDays,
      opens: hours.opens,
      closes: hours.closes,
    })),
  };
}
