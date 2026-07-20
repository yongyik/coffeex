import "server-only";

import { enDictionary } from "./dictionaries/en";
import { zhDictionary } from "./dictionaries/zh";
import type { Dictionary, Locale } from "./types";

const dictionaries: Record<Locale, Dictionary> = {
  zh: zhDictionary,
  en: enDictionary,
};

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
