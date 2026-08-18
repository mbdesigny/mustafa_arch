// Astro i18n helper: translate dictionary keys.
// The current locale is set once per request by each page via setLocale(),
// so components can simply call t(key) without threading the locale around.
import { t as tRaw, dictionary } from "./dictionary";

export type Locale = "en" | "fr" | "ar";

export const allLocales: Locale[] = ["en", "fr", "ar"];

/** Human-readable locale names: localeNames[targetLocale][uiLocale]. */
export const localeNames: Record<Locale, Record<Locale, string>> = {
  en: { en: "English", fr: "Fran\u00e7ais", ar: "\u0627\u0644\u0639\u0631\u0628\u064a\u0629" },
  fr: { en: "Anglais", fr: "Fran\u00e7ais", ar: "Arabe" },
  ar: { en: "\u0627\u0644\u0625\u0646\u062c\u0644\u064a\u0632\u064a\u0629", fr: "\u0627\u0644\u0641\u0631\u0646\u0633\u064a\u0629", ar: "\u0627\u0644\u0639\u0631\u0628\u064a\u0629" },
};

export const isRTL = (locale: string) => locale === "ar";

/** Set the active locale for the current rendering context. */
export function setLocale(locale: Locale): void {
  currentLocale = locale;
}

let currentLocale: Locale = "en";

export function t(key: string): string {
  return tRaw(key, currentLocale);
}

export function tFor(key: string, locale: Locale): string {
  return tRaw(key, locale);
}

export { dictionary };
