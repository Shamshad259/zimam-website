"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useCallback, useState } from "react";
import { galleryItems, type GalleryCategory } from "@/data/gallery";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { Lightbox } from "./Lightbox";

const filters = ["all", "electrical", "elv-telecom", "mechanical", "civil"] as const;
type Filter = (typeof filters)[number];

export function GalleryExplorer() {
  const t = useTranslations("galleryPage");
  const [filter, setFilter] = useState<Filter>("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const close = useCallback(() => setOpenIndex(null), []);

  const visible = galleryItems
    .filter((item) => filter === "all" || item.category === (filter as GalleryCategory))
    .map((item) => ({ ...item, alt: t(`alt.${item.category}`) }));

  return (
    <section className="bg-mist py-16 lg:py-24">
      <Container>
        <div role="group" aria-label={t("filtersLabel")} className="flex flex-wrap gap-2">
          {filters.map((id) => (
            <button
              key={id}
              type="button"
              aria-pressed={filter === id}
              onClick={() => {
                setFilter(id);
                setOpenIndex(null);
              }}
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

        <ul className="mt-10 columns-2 gap-3 sm:gap-4 md:columns-3 lg:columns-4">
          {visible.map((photo, i) => (
            <li key={photo.src} className="mb-3 break-inside-avoid sm:mb-4">
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                aria-label={t("openPhoto", { n: i + 1 })}
                className="group relative block w-full overflow-hidden bg-navy"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                  className="h-auto w-full transition duration-500 group-hover:scale-105 motion-reduce:transition-none"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-navy/0 transition-colors duration-300 group-hover:bg-navy/25"
                />
              </button>
            </li>
          ))}
        </ul>
      </Container>
      <Lightbox photos={visible} index={openIndex} onIndexChange={setOpenIndex} onClose={close} />
    </section>
  );
}
