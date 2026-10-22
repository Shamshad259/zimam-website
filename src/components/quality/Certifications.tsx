import { ShieldCheck } from "lucide-react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Certifications() {
  const t = useTranslations("quality.certifications");

  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <SectionTitle label={t("label")} title={t("title")} />
        {/* ADD CERTIFICATES HERE: replace the placeholders below with real certificates.
            Do not invent certificate names or numbers. */}
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[0, 1, 2, 3].map((n) => (
            <li
              key={n}
              className="flex aspect-[3/4] flex-col items-center justify-center gap-4 border-2 border-dashed border-navy/20 bg-mist p-6 text-center text-muted"
            >
              <ShieldCheck aria-hidden="true" className="size-10 text-navy/30" strokeWidth={1.5} />
              <span className="text-sm font-semibold">{t("placeholder")}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
