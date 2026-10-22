import { useTranslations } from "next-intl";
import { sectors } from "@/data/sectors";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function SectorsSection() {
  const t = useTranslations("home.sectors");

  return (
    <section className="bg-white py-20 lg:py-24">
      <Container>
        <Reveal>
          <SectionTitle label={t("label")} title={t("title")} align="center" />
        </Reveal>
        <ul className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 lg:grid-cols-7">
          {sectors.map(({ id, icon: Icon }, i) => (
            <li key={id}>
              <Reveal delay={i * 0.05} className="group flex flex-col items-center text-center">
                <span className="hex flex size-20 items-center justify-center bg-navy text-white transition-colors duration-300 group-hover:bg-signal motion-reduce:transition-none">
                  <Icon aria-hidden="true" className="size-8" strokeWidth={1.6} />
                </span>
                <span className="mt-4 text-sm font-semibold leading-snug text-navy">
                  {t(`items.${id}`)}
                </span>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
