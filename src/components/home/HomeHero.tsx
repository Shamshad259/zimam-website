import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { DiagonalHero } from "@/components/ui/DiagonalHero";
import { Reveal } from "@/components/ui/Reveal";

const stripKeys = ["electrical", "mechanical", "telecom", "civil"] as const;

export function HomeHero() {
  const t = useTranslations("home.hero");
  const c = useTranslations("common");

  return (
    <DiagonalHero
      image="/images/profile/atmosphere/riyadh-skyline-dusk.webp"
      alt={t("imageAlt")}
      priority
      className="min-h-[calc(100svh-5rem)] lg:min-h-[calc(100svh-7.5rem)]"
      bottom={
        <div className="relative border-t border-white/15 bg-navy/80 backdrop-blur-sm">
          <Container>
            <ul className="grid grid-cols-2 divide-white/15 sm:grid-cols-4 sm:divide-x">
              {stripKeys.map((key) => (
                <li
                  key={key}
                  className="flex items-center justify-center gap-3 px-4 py-5 font-heading text-xs font-bold uppercase tracking-[0.18em] sm:text-sm rtl:tracking-normal"
                >
                  <span aria-hidden="true" className="hex size-2.5 bg-signal" />
                  {t(`strip.${key}`)}
                </li>
              ))}
            </ul>
          </Container>
        </div>
      }
    >
      <div className="max-w-2xl py-20 lg:py-28">
        <Reveal>
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/85 sm:text-sm rtl:tracking-normal">
            <span aria-hidden="true" className="h-0.5 w-10 bg-signal" />
            {t("label")}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-5 font-heading text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl rtl:tracking-normal">
            {t("title")}
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            {t("subtitle")}
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="/contact" size="lg">
              {c("requestQuote")}
            </Button>
            <Button href="/services" variant="outline-white" size="lg">
              {c("ourServices")}
            </Button>
          </div>
        </Reveal>
      </div>
    </DiagonalHero>
  );
}
