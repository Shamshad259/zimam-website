import { useTranslations } from "next-intl";
import { AboutOverview } from "@/components/about/AboutOverview";
import { ChairmanMessage } from "@/components/about/ChairmanMessage";
import { CoreValues } from "@/components/about/CoreValues";
import { RegistrationBlock } from "@/components/about/RegistrationBlock";
import { VisionMission } from "@/components/about/VisionMission";
import { PageBanner } from "@/components/ui/PageBanner";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: PageProps<"/[locale]/about">) {
  const { locale } = await params;
  return pageMetadata(locale, "about");
}

export default function AboutPage() {
  const t = useTranslations("pageBanner.about");
  return (
    <>
      <PageBanner
        image="/images/profile/atmosphere/riyadh-skyline-day.webp"
        alt={t("imageAlt")}
        title={t("title")}
      />
      <AboutOverview />
      <ChairmanMessage />
      <VisionMission />
      <CoreValues />
      <RegistrationBlock />
    </>
  );
}
