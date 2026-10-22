import { useTranslations } from "next-intl";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";

export function RegistrationBlock() {
  const t = useTranslations("about.registration");

  return (
    <section className="bg-mist py-14">
      <Container>
        <div className="flex flex-col items-center justify-center gap-4 border-y-2 border-navy/10 py-8 text-center sm:flex-row sm:gap-10">
          <h2 className="font-heading text-sm font-extrabold uppercase tracking-[0.2em] text-navy rtl:tracking-normal">
            {t("title")}
          </h2>
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm font-semibold text-ink">
            <li>
              {t("cr")} <bdi dir="ltr">{site.cr}</bdi>
            </li>
            <li>
              {t("vat")} <bdi dir="ltr">{site.vat}</bdi>
            </li>
            <li>{t("location")}</li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
