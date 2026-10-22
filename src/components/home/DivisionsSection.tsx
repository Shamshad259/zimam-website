import { useTranslations } from "next-intl";
import { DivisionCardGrid } from "@/components/services/DivisionCardGrid";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function DivisionsSection() {
  const t = useTranslations("home.divisions");

  return (
    <section className="bg-mist py-20 lg:py-28">
      <Container>
        <Reveal>
          <SectionTitle label={t("label")} title={t("title")} />
        </Reveal>
        <div className="mt-12">
          <DivisionCardGrid />
        </div>
      </Container>
    </section>
  );
}
