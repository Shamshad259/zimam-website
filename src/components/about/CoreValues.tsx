import { BadgeCheck, Handshake, Scale, ShieldCheck } from "lucide-react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

// TODO: the brief names the four values but gives no descriptions, so none are shown.
const values = [
  { id: "safety", icon: ShieldCheck },
  { id: "quality", icon: BadgeCheck },
  { id: "integrity", icon: Scale },
  { id: "commitment", icon: Handshake },
] as const;

export function CoreValues() {
  const t = useTranslations("about.values");

  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <Reveal>
          <SectionTitle label={t("label")} title={t("title")} align="center" />
        </Reveal>
        <ul className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {values.map(({ id, icon: Icon }, i) => (
            <li key={id}>
              <Reveal delay={i * 0.08} className="group h-full">
                <div className="flex h-full flex-col items-center border border-navy/10 px-4 py-10 text-center transition duration-300 hover:-translate-y-1 hover:border-signal hover:shadow-lift motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                  <span className="hex flex size-20 items-center justify-center bg-navy text-white transition-colors duration-300 group-hover:bg-signal motion-reduce:transition-none">
                    <Icon aria-hidden="true" className="size-8" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-extrabold uppercase text-navy rtl:tracking-normal">
                    {t(`items.${id}`)}
                  </h3>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
