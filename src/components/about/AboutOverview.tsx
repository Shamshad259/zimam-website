import Image from "next/image";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { RedAccentLine } from "@/components/ui/RedAccentLine";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

/** Full company overview. Uses the same copy as the Home welcome section. */
export function AboutOverview() {
  const t = useTranslations("about.overview");
  const w = useTranslations("home.welcome");

  return (
    <section className="bg-white py-20 lg:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <SectionTitle label={t("label")} title={t("title")} />
          <RedAccentLine className="my-6" />
          <p className="text-lg font-medium leading-relaxed text-ink">{w("p1")}</p>
          <p className="mt-4 leading-relaxed text-muted">{w("p2")}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="relative aspect-[4/3] overflow-hidden shadow-card">
            <Image
              src="/images/profile/atmosphere/switchgear-hall.webp"
              alt={w("imageAlt")}
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
