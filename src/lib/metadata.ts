import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { isReadyLocale, languageAlternates, localePath, ogImage, ogLocale } from "@/lib/seo";

/**
 * Full metadata for a page from messages `meta.<key>`: title, description,
 * canonical (always the production domain via metadataBase), hreflang, Open Graph
 * and Twitter card. Locales not in `readyLocales` are noindex/nofollow.
 * Pass `absoluteTitle` for pages whose title must not get the "| ZIMAM ..." suffix.
 */
export async function pageMetadata(
  locale: string,
  key: string,
  path: string,
  { absoluteTitle = false }: { absoluteTitle?: boolean } = {},
): Promise<Metadata> {
  const [t, root] = await Promise.all([
    getTranslations({ locale, namespace: `meta.${key}` }),
    getTranslations({ locale, namespace: "meta.root" }),
  ]);
  const title = t("title");
  const description = t("description");
  const url = localePath(locale, path);
  const shareTitle = absoluteTitle ? title : `${title} | ${root("siteName")}`;
  const ready = isReadyLocale(locale);

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: url,
      ...(ready && { languages: languageAlternates(path) }),
    },
    robots: ready ? undefined : { index: false, follow: false },
    openGraph: {
      type: "website",
      siteName: root("siteName"),
      title: shareTitle,
      description,
      url,
      locale: ogLocale(locale),
      images: [{ ...ogImage, alt: root("ogImageAlt") }],
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description,
      images: [{ url: ogImage.url, alt: root("ogImageAlt") }],
    },
  };
}
