import { readyLocales, siteUrl } from "@/data/site";

export const isReadyLocale = (locale: string) => readyLocales.includes(locale);

/** Locale-prefixed path; "/" becomes "/en". */
export const localePath = (locale: string, path: string) =>
  `/${locale}${path === "/" ? "" : path}`;

export const absoluteUrl = (path: string) => `${siteUrl}${path}`;

/** hreflang map for the ready locales plus x-default (-> English). */
export function languageAlternates(path: string): Record<string, string> {
  return {
    ...Object.fromEntries(readyLocales.map((l) => [l, localePath(l, path)])),
    "x-default": localePath("en", path),
  };
}

export const ogLocale = (locale: string) => (locale === "ar" ? "ar_SA" : "en_US");

/** Static branded share image (1200x630) in /public. */
export const ogImage = { url: "/og/zimam-og.png", width: 1200, height: 630 } as const;
