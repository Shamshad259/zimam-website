"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState } from "react";
import type { KeyboardEvent } from "react";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { useSwipe } from "@/hooks/useSwipe";

export interface CarouselImage {
  src: string;
  alt: string;
}

/** Photo carousel with arrows (mirrored in RTL), keyboard and swipe. Shows a placeholder when empty. */
export function PhotoCarousel({
  images,
  placeholderLabel,
}: {
  images: CarouselImage[];
  placeholderLabel: string;
}) {
  const t = useTranslations("projectsPage.modal");
  const [index, setIndex] = useState(0);
  const count = images.length;

  const previous = () => setIndex((i) => (i - 1 + count) % count);
  const next = () => setIndex((i) => (i + 1) % count);
  const swipe = useSwipe(previous, next);

  const onKeyDown = (e: KeyboardEvent) => {
    if (count < 2) return;
    const rtl = document.documentElement.dir === "rtl";
    if (e.key === "ArrowRight") (rtl ? previous : next)();
    if (e.key === "ArrowLeft") (rtl ? next : previous)();
  };

  const current = images[index];

  return (
    <div
      role="group"
      aria-roledescription="carousel"
      aria-label={t("photos")}
      tabIndex={count > 1 ? 0 : undefined}
      onKeyDown={onKeyDown}
      {...swipe}
      className="relative aspect-[4/3] touch-pan-y select-none overflow-hidden bg-navy"
    >
      {current ? (
        <Image
          key={current.src}
          src={current.src}
          alt={current.alt}
          fill
          sizes="(min-width: 896px) 56rem, 92vw"
          className="object-cover"
          draggable={false}
        />
      ) : (
        <PhotoPlaceholder label={placeholderLabel} />
      )}
      {count > 1 && (
        <>
          <button
            type="button"
            onClick={previous}
            aria-label={t("previous")}
            className="absolute inset-s-3 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center bg-navy/70 text-white hover:bg-signal"
          >
            <ChevronLeft aria-hidden="true" className="size-6 rtl:-scale-x-100" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label={t("next")}
            className="absolute inset-e-3 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center bg-navy/70 text-white hover:bg-signal"
          >
            <ChevronRight aria-hidden="true" className="size-6 rtl:-scale-x-100" />
          </button>
          <p
            aria-live="polite"
            className="absolute bottom-3 inset-e-3 bg-navy/70 px-3 py-1 text-xs font-semibold text-white"
          >
            {t("counter", { current: index + 1, total: count })}
          </p>
        </>
      )}
    </div>
  );
}
