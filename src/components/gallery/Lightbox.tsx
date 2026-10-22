"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect, useRef } from "react";
import type { KeyboardEvent } from "react";
import { useSwipe } from "@/hooks/useSwipe";

export interface LightboxPhoto {
  src: string;
  width: number;
  height: number;
  alt: string;
}

interface LightboxProps {
  photos: LightboxPhoto[];
  /** Index of the open photo, or null when closed. */
  index: number | null;
  onIndexChange: (index: number) => void;
  onClose: () => void;
}

/** Full-screen photo viewer: arrows, keyboard (RTL-aware), swipe and Escape. */
export function Lightbox({ photos, index, onIndexChange, onClose }: LightboxProps) {
  const t = useTranslations("galleryPage.lightbox");
  const ref = useRef<HTMLDialogElement>(null);
  const open = index !== null;
  const count = photos.length;

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  const go = (delta: number) => {
    if (index === null || count === 0) return;
    onIndexChange((index + delta + count) % count);
  };
  const swipe = useSwipe(
    () => go(-1),
    () => go(1),
  );

  const onKeyDown = (e: KeyboardEvent) => {
    const rtl = document.documentElement.dir === "rtl";
    if (e.key === "ArrowRight") go(rtl ? -1 : 1);
    if (e.key === "ArrowLeft") go(rtl ? 1 : -1);
  };

  const photo = index !== null ? photos[index] : undefined;

  return (
    <dialog
      ref={ref}
      aria-label={t("label")}
      onClose={onClose}
      onKeyDown={onKeyDown}
      className="m-0 h-dvh max-h-none w-screen max-w-none bg-transparent p-0 backdrop:bg-navy/95"
    >
      {photo && (
        <div
          {...swipe}
          className="relative flex h-full w-full touch-pan-y select-none items-center justify-center px-4 py-16 sm:px-20"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <Image
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            sizes="100vw"
            className="h-auto max-h-full w-auto max-w-full object-contain"
            draggable={false}
            priority
          />
          <button
            type="button"
            onClick={onClose}
            aria-label={t("close")}
            className="absolute inset-e-3 top-3 flex size-12 items-center justify-center bg-white text-navy hover:bg-signal hover:text-white"
          >
            <X aria-hidden="true" className="size-6" />
          </button>
          {count > 1 && (
            <>
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label={t("previous")}
                className="absolute inset-s-2 top-1/2 flex size-12 -translate-y-1/2 items-center justify-center bg-white/90 text-navy hover:bg-signal hover:text-white sm:inset-s-4"
              >
                <ChevronLeft aria-hidden="true" className="size-6 rtl:-scale-x-100" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label={t("next")}
                className="absolute inset-e-2 top-1/2 flex size-12 -translate-y-1/2 items-center justify-center bg-white/90 text-navy hover:bg-signal hover:text-white sm:inset-e-4"
              >
                <ChevronRight aria-hidden="true" className="size-6 rtl:-scale-x-100" />
              </button>
              <p
                aria-live="polite"
                className="absolute inset-x-0 bottom-4 mx-auto w-fit bg-navy/80 px-4 py-1.5 text-sm font-semibold text-white"
              >
                {t("counter", { current: (index ?? 0) + 1, total: count })}
              </p>
            </>
          )}
        </div>
      )}
    </dialog>
  );
}
