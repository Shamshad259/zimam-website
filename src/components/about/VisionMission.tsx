import { Eye, Target } from "lucide-react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function VisionMission() {
  const t = useTranslations("about.visionMission");
  const cards = [
    { id: "vision", icon: Eye },
    { id: "mission", icon: Target },
  ] as const;

  return (
    <section className="bg-mist py-20 lg:py-28">
      <Container className="grid gap-6 md:grid-cols-2">
        {cards.map(({ id, icon: Icon }, i) => (
          <Reveal key={id} delay={i * 0.1}>
            <article className="h-full border-t-4 border-signal bg-white p-8 shadow-card sm:p-10">
              <span className="hex flex size-14 items-center justify-center bg-navy text-white">
                <Icon aria-hidden="true" className="size-6" />
              </span>
              <h2 className="mt-6 font-heading text-2xl font-extrabold uppercase text-navy rtl:tracking-normal">
                {t(`${id}.title`)}
              </h2>
              <p className="mt-4 leading-relaxed text-muted">{t(`${id}.text`)}</p>
            </article>
          </Reveal>
        ))}
      </Container>
    </section>
  );
}
