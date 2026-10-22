import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { RedAccentLine } from "@/components/ui/RedAccentLine";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function WelcomeSection() {
  const t = useTranslations("home.welcome");
  const c = useTranslations("common");

  return (
    <section className="bg-white py-20 lg:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="relative isolate ms-0 me-4 pb-4 sm:me-6 sm:pb-6">
            <div
              aria-hidden="true"
              className="absolute bottom-0 -inset-e-4 -z-10 size-3/4 bg-navy sm:-inset-e-6"
            />
            <div
              aria-hidden="true"
              className="absolute -top-3 -inset-s-3 -z-10 h-24 w-24 border-s-4 border-t-4 border-signal"
            />
            <div className="relative aspect-[4/3] overflow-hidden shadow-card">
              <Image
                src="/images/profile/atmosphere/switchgear-hall.webp"
                alt={t("imageAlt")}
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <SectionTitle label={t("label")} title={t("title")} />
          <RedAccentLine className="my-6" />
          <p className="text-lg font-medium leading-relaxed text-ink">{t("p1")}</p>
          <p className="mt-4 leading-relaxed text-muted">{t("p2")}</p>
          <Button href="/about" variant="navy" className="mt-8">
            {c("aboutUs")}
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
