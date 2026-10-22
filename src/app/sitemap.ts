import type { MetadataRoute } from "next";
import { routes } from "@/data/routes";
import { readyLocales } from "@/data/site";
import { absoluteUrl, languageAlternates, localePath } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.flatMap((path) => {
    const languages = Object.fromEntries(
      Object.entries(languageAlternates(path)).map(([lang, p]) => [lang, absoluteUrl(p)]),
    );
    return readyLocales.map((locale) => ({
      url: absoluteUrl(localePath(locale, path)),
      alternates: { languages },
    }));
  });
}
