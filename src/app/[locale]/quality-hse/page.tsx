import { useTranslations } from "next-intl";
import { Certifications } from "@/components/quality/Certifications";
import { PolicyCards } from "@/components/quality/PolicyCards";
import { PageBanner } from "@/components/ui/PageBanner";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: PageProps<"/[locale]/quality-hse">) {
  const { locale } = await params;
  return pageMetadata(locale, "quality", "/quality-hse");
}

export default function QualityHsePage() {
  const t = useTranslations("pageBanner.quality");
  return (
    <>
      <PageBanner
        image="/images/profile/atmosphere/switchgear-hall.webp"
        alt={t("imageAlt")}
        title={t("title")}
      />
      <PolicyCards />
      <Certifications />
    </>
  );
}
