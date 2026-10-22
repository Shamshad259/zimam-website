"use client";

import { MapPin, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useRef } from "react";
import type { Project } from "@/data/projects";
import { RedAccentLine } from "@/components/ui/RedAccentLine";
import { PhotoCarousel } from "./PhotoCarousel";

/** Project detail dialog with a photo carousel. Uses the native <dialog> for focus trap and Escape. */
export function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const t = useTranslations("projectsPage.modal");
  const p = useTranslations("projects");
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (project && !dialog.open) dialog.showModal();
    if (!project && dialog.open) dialog.close();
  }, [project]);

  useEffect(() => {
    if (!project) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [project]);

  const title = project ? p(`items.${project.id}.title`) : "";
  const location = project && p.has(`items.${project.id}.location`) ? p(`items.${project.id}.location`) : undefined;

  return (
    <dialog
      ref={ref}
      aria-label={title || undefined}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="m-auto max-h-[92vh] w-[min(92vw,56rem)] overflow-y-auto bg-white p-0 text-ink shadow-lift backdrop:bg-navy/80"
    >
      {project && (
        <div>
          <div className="relative">
            <PhotoCarousel
              key={project.id}
              images={project.images.map((src) => ({ src, alt: title }))}
              placeholderLabel={p("photoPlaceholder")}
            />
            <button
              type="button"
              onClick={onClose}
              aria-label={t("close")}
              className="absolute inset-e-3 top-3 z-10 flex size-11 items-center justify-center bg-white text-navy hover:bg-signal hover:text-white"
            >
              <X aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="p-6 sm:p-8">
            <ul className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="bg-mist px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-royal rtl:tracking-normal"
                >
                  {p(`tags.${tag}`)}
                </li>
              ))}
            </ul>
            <h2 className="mt-4 font-heading text-2xl font-extrabold text-navy sm:text-3xl">{title}</h2>
            <RedAccentLine className="my-5" />
            {location && (
              <p className="flex items-center gap-2 text-sm text-muted">
                <MapPin aria-hidden="true" className="size-4 text-signal" />
                <span className="sr-only">{t("location")}:</span>
                {location}
              </p>
            )}
            <h3 className="mt-5 font-heading text-sm font-extrabold uppercase tracking-wider text-royal rtl:tracking-normal">
              {t("scope")}
            </h3>
            <p className="mt-2 leading-relaxed text-ink">{p(`items.${project.id}.scope`)}</p>
          </div>
        </div>
      )}
    </dialog>
  );
}
