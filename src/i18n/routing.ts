import { defineRouting } from "next-intl/routing";

// Phase 1 is English-only. Arabic ("ar") is wired for RTL (see `localeDirection`)
// but is switched on in the Arabic phase by adding it to `locales` and creating
// messages/ar.json.
export const routing = defineRouting({
  locales: ["en"],
  defaultLocale: "en",
  localePrefix: "always",
});

export type Locale = (typeof routing.locales)[number];

export const localeDirection = (locale: string): "ltr" | "rtl" =>
  locale === "ar" ? "rtl" : "ltr";
