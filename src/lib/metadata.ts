import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

/** Title + description for a page from messages `meta.<key>`. */
export async function pageMetadata(locale: string, key: string): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: `meta.${key}` });
  return { title: t("title"), description: t("description") };
}
