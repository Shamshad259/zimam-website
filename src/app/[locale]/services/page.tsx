import { useTranslations } from "next-intl";
import { DivisionCardGrid } from "@/components/services/DivisionCardGrid";
import { Container } from "@/components/ui/Container";
import { PageBanner } from "@/components/ui/PageBanner";
import { RedAccentLine } from "@/components/ui/RedAccentLine";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: PageProps<"/[locale]/services">) {
  const { locale } = await params;
  return pageMetadata(locale, "services");
}

export default function ServicesPage() {
  const b = useTranslations("pageBanner.services");
  const t = useTranslations("servicesPage");

  return (
    <>
      <PageBanner
        image="/images/profile/atmosphere/switchgear-hall.webp"
        alt={b("imageAlt")}
        label={b("label")}
        title={b("title")}
      />
      <section className="bg-mist py-20 lg:py-28">
        <Container>
          <Reveal className="max-w-3xl">
            <SectionTitle label={t("label")} title={t("title")} />
            <RedAccentLine className="my-6" />
            <p className="text-lg leading-relaxed text-muted">{t("intro")}</p>
          </Reveal>
          <div className="mt-12">
            <DivisionCardGrid />
          </div>
        </Container>
      </section>
    </>
  );
}
