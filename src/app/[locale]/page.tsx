import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ChairmanQuote } from "@/components/home/ChairmanQuote";
import { ClientsStrip } from "@/components/home/ClientsStrip";
import { DivisionsSection } from "@/components/home/DivisionsSection";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { HomeHero } from "@/components/home/HomeHero";
import { SectorsSection } from "@/components/home/SectorsSection";
import { WelcomeSection } from "@/components/home/WelcomeSection";
import { WhyChoose } from "@/components/home/WhyChoose";

export async function generateMetadata({ params }: PageProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.home" });
  return { title: t("title"), description: t("description") };
}

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <WelcomeSection />
      <DivisionsSection />
      <SectorsSection />
      <FeaturedProjects />
      <WhyChoose />
      <ClientsStrip />
      <ChairmanQuote />
    </>
  );
}
