import type { Locale } from "./types";

export const locales = ["zh", "en"] as const satisfies readonly Locale[];
export const defaultLocale: Locale = "zh";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getLocalizedPath(locale: Locale, path = "") {
  const normalizedPath = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${normalizedPath}`;
}

export function replaceLocaleInPath(pathname: string, locale: Locale) {
  const segments = pathname.split("/");

  if (isLocale(segments[1] ?? "")) {
    segments[1] = locale;
    return segments.join("/") || `/${locale}`;
  }

  return getLocalizedPath(locale, pathname);
}

export function getLanguageAlternates(path: string) {
  return {
    "zh-CN": getLocalizedPath("zh", path),
    en: getLocalizedPath("en", path),
  };
}
