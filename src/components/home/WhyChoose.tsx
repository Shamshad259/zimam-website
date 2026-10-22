import { useTranslations } from "next-intl";
import { whyChooseIds } from "@/data/why-choose";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function WhyChoose() {
  const t = useTranslations("home.why");

  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <Reveal>
          <SectionTitle label={t("label")} title={t("title")} />
        </Reveal>
        <ol className="mt-12 grid gap-px bg-navy/10 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseIds.map((id, i) => (
            <li key={id} className="bg-white">
              <Reveal delay={(i % 3) * 0.08} className="group relative h-full p-8 sm:p-10">
                <span
                  aria-hidden="true"
                  className="font-heading text-6xl font-extrabold leading-none text-navy/10 transition-colors duration-300 group-hover:text-signal/30 motion-reduce:transition-none"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-heading text-lg font-extrabold leading-snug text-navy">
                  {t(`items.${id}.title`)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{t(`items.${id}.text`)}</p>
                <span
                  aria-hidden="true"
                  className="absolute inset-s-0 top-0 h-full w-1 origin-top scale-y-0 bg-signal transition-transform duration-500 group-hover:scale-y-100 motion-reduce:transition-none"
                />
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
