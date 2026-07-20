import "server-only";

import { notFound } from "next/navigation";
import { isLocale } from "./config";
import type { Locale } from "./types";

export function getLocaleOrNotFound(value: string): Locale {
  if (!isLocale(value)) {
    notFound();
  }

  return value;
}
