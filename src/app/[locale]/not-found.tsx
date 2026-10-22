import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { RedAccentLine } from "@/components/ui/RedAccentLine";
import { ZimamWatermark } from "@/components/ui/ZimamWatermark";

export default function NotFound() {
  const t = useTranslations("notFound");
  const c = useTranslations("common");

  return (
    <section className="relative isolate flex min-h-[70vh] items-center overflow-hidden bg-navy py-24 text-white">
      <div
        aria-hidden="true"
        className="diagonal-accent absolute inset-0 -z-10 bg-royal/60"
      />
      <ZimamWatermark className="-bottom-10 inset-s-0 text-[26vw]" />
      <Container>
        <p className="font-heading text-sm font-bold uppercase tracking-[0.3em] text-signal rtl:tracking-normal">
          {t("label")}
        </p>
        <h1 className="mt-4 font-heading text-4xl font-extrabold uppercase leading-tight sm:text-6xl rtl:tracking-normal">
          {t("title")}
        </h1>
        <RedAccentLine className="my-6" />
        <p className="max-w-xl text-lg leading-relaxed text-white/85">{t("text")}</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Button href="/" size="lg">
            {t("home")}
          </Button>
          <Button href="/contact" variant="outline-white" size="lg">
            {c("requestQuote")}
          </Button>
        </div>
      </Container>
    </section>
  );
}
