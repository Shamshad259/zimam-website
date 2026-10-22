import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { RedAccentLine } from "@/components/ui/RedAccentLine";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PolicyWheel, policies } from "./PolicyWheel";

const order = ["safety", "quality", "hr", "training"] as const;

export function PolicyCards() {
  const t = useTranslations("quality.policies");
  const icons = Object.fromEntries(policies.map((p) => [p.id, p.icon]));

  return (
    <section className="bg-mist py-20 lg:py-28">
      <Container>
        <Reveal>
          <SectionTitle label={t("label")} title={t("title")} align="center" />
        </Reveal>
        <div className="mt-12">
          <PolicyWheel />
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {order.map((id, i) => {
            const Icon = icons[id];
            return (
              <Reveal key={id} delay={(i % 2) * 0.1} className="h-full">
                <article
                  id={id}
                  className="h-full scroll-mt-28 border-t-4 border-signal bg-white p-8 shadow-card target:ring-2 target:ring-royal sm:p-10"
                >
                  <span className="hex flex size-14 items-center justify-center bg-navy text-white">
                    <Icon aria-hidden="true" className="size-6" />
                  </span>
                  <h3 className="mt-5 font-heading text-xl font-extrabold text-navy">{t(`${id}.title`)}</h3>
                  <RedAccentLine className="my-4" />
                  <p className="leading-relaxed text-muted">{t(`${id}.text`)}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
