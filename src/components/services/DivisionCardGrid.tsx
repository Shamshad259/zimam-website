import { useTranslations } from "next-intl";
import { divisions } from "@/data/services";
import { DivisionCard } from "@/components/ui/DivisionCard";
import { Reveal } from "@/components/ui/Reveal";

/** The four division cards, shared by Home and the Services overview. */
export function DivisionCardGrid() {
  const d = useTranslations("divisions");
  const c = useTranslations("common");

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {divisions.map((division, i) => (
        <Reveal key={division.slug} delay={i * 0.08}>
          <DivisionCard
            number={division.number}
            divisionLabel={c("division")}
            title={d(`${division.slug}.title`)}
            description={d(`${division.slug}.summary`)}
            exploreLabel={c("explore")}
            href={`/services/${division.slug}`}
            image={division.image}
            alt={d(`${division.slug}.imageAlt`)}
          />
        </Reveal>
      ))}
    </div>
  );
}
