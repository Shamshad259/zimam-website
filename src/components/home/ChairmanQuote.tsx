import { ArrowRight, Quote } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";
import { RedAccentLine } from "@/components/ui/RedAccentLine";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ZimamWatermark } from "@/components/ui/ZimamWatermark";

export function ChairmanQuote() {
  const t = useTranslations("home.chairman");

  return (
    <section className="relative isolate overflow-hidden bg-navy py-20 text-white lg:py-28">
      <ZimamWatermark className="-bottom-8 inset-s-0 text-[24vw]" />
      <Container>
        <Reveal className="max-w-4xl">
          <SectionTitle label={t("label")} title={t("title")} tone="light" size="md" />
          <Quote
            aria-hidden="true"
            className="mt-10 size-14 text-signal rtl:-scale-x-100"
            fill="currentColor"
            strokeWidth={0}
          />
          <blockquote className="mt-4 text-xl font-light leading-relaxed sm:text-2xl lg:text-3xl lg:leading-snug">
            {t("quote")}
          </blockquote>
          <RedAccentLine className="mt-8" />
          <p className="mt-5 text-sm font-semibold uppercase tracking-wider text-white/80 rtl:tracking-normal">
            {t("attribution")}
          </p>
          <Link
            href="/about"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white hover:text-signal rtl:tracking-normal"
          >
            {t("readMore")}
            <ArrowRight
              aria-hidden="true"
              className="size-4 transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1 motion-reduce:transition-none"
            />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
