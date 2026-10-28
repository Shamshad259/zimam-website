import { ShieldCheck } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { certifications } from "@/data/certifications";
import { Container } from "@/components/ui/Container";

/** Slim text-only trust strip linking to the certifications on the Quality page. */
export function CertifiedStrip() {
  const t = useTranslations("home.certified");

  return (
    <section aria-label={t("label")} className="bg-navy text-white">
      <Container>
        <Link
          href="/quality-hse#certifications"
          className="group flex flex-wrap items-center justify-center gap-x-3 gap-y-1 py-5 text-center font-heading text-xs font-bold uppercase tracking-[0.18em] sm:text-sm rtl:tracking-normal"
        >
          <ShieldCheck aria-hidden="true" className="size-5 text-signal" />
          <span>
            {certifications.map((c, i) => (
              <span key={c.id}>
                {i > 0 && <span aria-hidden="true"> · </span>}
                <bdi dir="ltr">{c.short}</bdi>
              </span>
            ))}{" "}
            {t("suffix")}
          </span>
          <span className="underline-offset-4 group-hover:underline">{t("link")}</span>
        </Link>
      </Container>
    </section>
  );
}
