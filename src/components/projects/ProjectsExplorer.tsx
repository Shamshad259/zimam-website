"use client";

import { useTranslations } from "next-intl";
import { useCallback, useState } from "react";
import { projects, type ProjectCategory } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { cn } from "@/lib/cn";
import { ProjectModal } from "./ProjectModal";

const filters = ["all", "electrical", "mechanical", "mep", "civil"] as const;
type Filter = (typeof filters)[number];

export function ProjectsExplorer() {
  const t = useTranslations("projectsPage");
  const p = useTranslations("projects");
  const [filter, setFilter] = useState<Filter>("all");
  const [openId, setOpenId] = useState<string | null>(null);
  const close = useCallback(() => setOpenId(null), []);

  const visible = projects.filter(
    (project) => filter === "all" || project.categories.includes(filter as ProjectCategory),
  );
  const open = projects.find((project) => project.id === openId) ?? null;

  return (
    <section className="bg-mist py-16 lg:py-24">
      <Container>
        <h2 className="sr-only">{t("listHeading")}</h2>
        <div role="group" aria-label={t("filtersLabel")} className="flex flex-wrap gap-2">
          {filters.map((id) => (
            <button
              key={id}
              type="button"
              aria-pressed={filter === id}
              onClick={() => setFilter(id)}
              className={cn(
                "border-2 px-5 py-2.5 font-heading text-xs font-bold uppercase tracking-wider transition-colors rtl:tracking-normal",
                filter === id
                  ? "border-navy bg-navy text-white"
                  : "border-navy/20 bg-white text-navy hover:border-navy",
              )}
            >
              {t(`filters.${id}`)}
            </button>
          ))}
        </div>

        {visible.length === 0 ? (
          <p className="mt-12 text-center text-muted">{t("empty")}</p>
        ) : (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {visible.map((project) => {
              const title = p(`items.${project.id}.title`);
              const hasPhoto = project.images.length > 0;
              return (
                <ProjectCard
                  key={project.id}
                  title={title}
                  location={p.has(`items.${project.id}.location`) ? p(`items.${project.id}.location`) : undefined}
                  scope={p(`items.${project.id}.scope`)}
                  tags={project.tags.map((tag) => p(`tags.${tag}`))}
                  image={hasPhoto ? { src: project.images[0], alt: title } : undefined}
                  placeholderLabel={p("photoPlaceholder")}
                  onOpen={() => setOpenId(project.id)}
                  openLabel={t("viewDetails", { title })}
                />
              );
            })}
          </div>
        )}
      </Container>
      <ProjectModal project={open} onClose={close} />
    </section>
  );
}
