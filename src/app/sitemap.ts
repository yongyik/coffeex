import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { getLocalizedPath, locales } from "@/i18n/config";

const pages = [
  { path: "", changeFrequency: "weekly" as const, priority: 1 },
  { path: "/menu", changeFrequency: "weekly" as const, priority: 0.9 },
  { path: "/about", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/contact", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/privacy", changeFrequency: "yearly" as const, priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap((page) =>
    locales.map((locale) => ({
      url: `${siteConfig.url}${getLocalizedPath(locale, page.path)}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: {
        languages: {
          "zh-CN": `${siteConfig.url}${getLocalizedPath("zh", page.path)}`,
          en: `${siteConfig.url}${getLocalizedPath("en", page.path)}`,
        },
      },
    })),
  );
}
