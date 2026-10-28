import { ExternalLink } from "lucide-react";
import { useTranslations } from "next-intl";
import { certifier } from "@/data/certifications";
import { CertificateGrid } from "@/components/quality/CertificateGrid";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Certifications() {
  const t = useTranslations("quality.certifications");

  return (
    <section id="certifications" className="scroll-mt-24 bg-white py-20 lg:py-28">
      <Container>
        <SectionTitle label={t("label")} title={t("title")} />
        <CertificateGrid />
        <p className="mt-8 text-sm leading-relaxed text-muted">
          {t("scopeLabel")}: {t("scope")} {t("certifiedBy")}{" "}
          <a
            href={certifier.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-royal underline underline-offset-4 hover:text-signal"
          >
            {t("verify")}
            <ExternalLink aria-hidden="true" className="size-3.5 rtl:-scale-x-100" />
            <span className="sr-only">{t("newTab")}</span>
          </a>
        </p>
      </Container>
    </section>
  );
}
