import { ArrowDownRight, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import { projects } from "@/data/projects";
import type { Division } from "@/data/services";
import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HexCheckList } from "@/components/ui/HexCheckList";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { DivisionBanner } from "./DivisionBanner";

/** Shared template for all four division pages, driven by src/data/services.ts. */
export function DivisionTemplate({ division }: { division: Division }) {
  const { slug } = division;
  const s = useTranslations(`services.${slug}`);
  const p = useTranslations("divisionPage");
  const nav = useTranslations("nav");
  const proj = useTranslations("projects");
  const c = useTranslations("common");

  const related = projects.filter((project) => project.divisions.includes(slug));

  return (
    <>
      <DivisionBanner division={division} />

      <section className="bg-white py-16 lg:py-20">
        <Container>
          <Reveal>
            <p className="max-w-4xl text-lg leading-relaxed text-ink sm:text-xl">{s("description")}</p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-mist py-20 lg:py-28">
        <Container>
          <Reveal className="flex items-center gap-4">
            <SectionTitle label={p("keyLabel")} title={p("keyTitle")} />
            <ArrowDownRight aria-hidden="true" className="size-12 text-signal rtl:-scale-x-100" strokeWidth={2.5} />
          </Reveal>
          <div className="mt-10 space-y-10">
            {division.groups.map((group) => (
              <Reveal key={group.group ?? "ungrouped"}>
                {group.group && (
                  <h2 className="mb-2 font-heading text-lg font-extrabold uppercase text-royal rtl:tracking-normal">
                    {s(`groups.${group.group}`)}
                  </h2>
                )}
                <HexCheckList showArrow items={group.items.map((id) => s(`items.${id}`))} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* TODO: no project in src/data/projects.ts is tagged for some divisions yet, so this block is hidden for them. */}
      {related.length > 0 && (
        <section className="bg-white py-20 lg:py-28">
          <Container>
            <Reveal>
              <SectionTitle label={p("relatedLabel")} title={p("relatedTitle")} />
            </Reveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {related.map((project, i) => (
                <Reveal key={project.id} delay={(i % 4) * 0.08}>
                  <ProjectCard
                    title={proj(`items.${project.id}.title`)}
                    location={proj.has(`items.${project.id}.location`) ? proj(`items.${project.id}.location`) : undefined}
                    scope={proj(`items.${project.id}.scope`)}
                    tags={project.tags.map((tag) => proj(`tags.${tag}`))}
                    placeholderLabel={proj("photoPlaceholder")}
                  />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className="bg-navy py-16 text-white">
        <Container className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="max-w-2xl font-heading text-2xl font-extrabold uppercase leading-snug sm:text-3xl rtl:tracking-normal">
            {p("ctaTitle", { division: nav(slug) })}
          </h2>
          <div className="flex flex-wrap gap-3">
            <Button href="/contact" size="lg">
              {c("requestQuote")}
            </Button>
            <Button href={`tel:${site.primaryPhone.tel}`} external variant="outline-white" size="lg">
              <Phone aria-hidden="true" className="size-4" />
              {c("callUs")}
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
