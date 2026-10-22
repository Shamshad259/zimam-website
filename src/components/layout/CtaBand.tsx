import { Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { RedAccentLine } from "@/components/ui/RedAccentLine";

/** Pre-footer "Have a project in mind?" band. Hidden on /contact and division pages by CtaBandGate. */
export function CtaBand() {
  const t = useTranslations("cta");
  const c = useTranslations("common");
  return (
    <section className="relative isolate overflow-hidden bg-white">
      <div
        aria-hidden="true"
        className="diagonal-start absolute inset-y-0 inset-e-0 -z-10 hidden w-1/3 bg-navy/[0.04] md:block"
      />
      <Container className="flex flex-col items-start gap-8 py-14 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="font-heading text-2xl font-extrabold uppercase text-navy sm:text-3xl rtl:tracking-normal">
            {t("title")}
          </h2>
          <RedAccentLine className="my-4" />
          <p className="text-base leading-relaxed text-muted">{t("text")}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href="/contact" size="lg">
            {c("requestQuote")}
          </Button>
          <Button href={`tel:${site.primaryPhone.tel}`} external variant="outline-navy" size="lg">
            <Phone aria-hidden="true" className="size-4" />
            {c("callUs")}
          </Button>
        </div>
      </Container>
    </section>
  );
}
