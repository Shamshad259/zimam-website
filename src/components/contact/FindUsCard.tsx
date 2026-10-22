import { useTranslations } from "next-intl";
import { site } from "@/data/site";

export function FindUsCard() {
  const t = useTranslations("contact");

  return (
    <section className="overflow-hidden rounded-xl bg-white shadow-card">
      <h2 className="px-6 pb-4 pt-6 font-heading text-xl font-bold text-navy sm:px-8 sm:pt-8">
        {t("findUsTitle")}
      </h2>
      <iframe
        title={t("mapTitle")}
        src={site.mapEmbedUrl}
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        className="block h-80 w-full border-0"
      />
    </section>
  );
}
