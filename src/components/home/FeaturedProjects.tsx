import { useTranslations } from "next-intl";
import { featuredProjectIds, projects } from "@/data/projects";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function FeaturedProjects() {
  const t = useTranslations("home.projects");
  const p = useTranslations("projects");
  const c = useTranslations("common");

  const featured = featuredProjectIds
    .map((id) => projects.find((project) => project.id === id))
    .filter((project) => project !== undefined);

  return (
    <section className="bg-mist py-20 lg:py-28">
      <Container>
        <Reveal>
          <SectionTitle label={t("label")} title={t("title")} />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {featured.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.08}>
              <ProjectCard
                title={p(`items.${project.id}.title`)}
                location={p.has(`items.${project.id}.location`) ? p(`items.${project.id}.location`) : undefined}
                scope={p(`items.${project.id}.scope`)}
                tags={project.tags.map((tag) => p(`tags.${tag}`))}
                placeholderLabel={p("photoPlaceholder")}
              />
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href="/projects" variant="outline-navy">
            {c("viewAllProjects")}
          </Button>
        </div>
      </Container>
    </section>
  );
}
