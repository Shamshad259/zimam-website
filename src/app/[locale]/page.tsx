import { ChairmanQuote } from "@/components/home/ChairmanQuote";
import { ClientsStrip } from "@/components/home/ClientsStrip";
import { DivisionsSection } from "@/components/home/DivisionsSection";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { HomeHero } from "@/components/home/HomeHero";
import { SectorsSection } from "@/components/home/SectorsSection";
import { WelcomeSection } from "@/components/home/WelcomeSection";
import { WhyChoose } from "@/components/home/WhyChoose";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  return pageMetadata(locale, "home", "/", { absoluteTitle: true });
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
