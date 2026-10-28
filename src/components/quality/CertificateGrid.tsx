"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { certifications } from "@/data/certifications";
import { HexCheckIcon } from "@/components/ui/HexCheckIcon";

/** Three certificate cards; a card opens its full certificate in a modal dialog. */
export function CertificateGrid() {
  const t = useTranslations("quality.certifications");
  const [openId, setOpenId] = useState<string | null>(null);
  const ref = useRef<HTMLDialogElement>(null);
  const current = certifications.find((c) => c.id === openId);

  // Native <dialog> gives the focus trap, Esc and focus return to the opening button.
  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (current && !dialog.open) dialog.showModal();
    if (!current && dialog.open) dialog.close();
  }, [current]);

  useEffect(() => {
    if (!current) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [current]);

  return (
    <>
      <ul className="mt-12 grid gap-6 md:grid-cols-3">
        {certifications.map((c) => (
          <li key={c.id} className="flex flex-col border border-navy/10 bg-white shadow-sm">
            <button
              type="button"
              onClick={() => setOpenId(c.id)}
              aria-haspopup="dialog"
              aria-label={t("view", { standard: c.standard })}
              className="group relative block bg-mist p-6"
            >
              <Image
                src={c.thumb.src}
                alt={t(`items.${c.id}.alt`)}
                width={c.thumb.width}
                height={c.thumb.height}
                sizes="(min-width: 768px) 30vw, 80vw"
                className="mx-auto h-auto w-full max-w-[16rem] border border-navy/10 bg-white shadow-md transition-transform duration-300 group-hover:scale-[1.02] motion-reduce:transition-none"
              />
              <span className="mt-4 block text-center text-xs font-semibold uppercase tracking-[0.18em] text-royal rtl:tracking-normal">
                {t("viewHint")}
              </span>
            </button>
            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-start gap-3">
                <HexCheckIcon className="mt-1" />
                <h3>
                  <span className="block text-xs font-light uppercase tracking-[0.28em] text-royal rtl:tracking-normal">
                    <bdi dir="ltr">{c.standard}</bdi>
                  </span>
                  <span className="mt-1 block font-heading text-xl font-extrabold leading-snug text-navy">
                    {t(`items.${c.id}.name`)}
                  </span>
                </h3>
              </div>
              <dl className="mt-5 space-y-1.5 text-sm">
                <div className="flex flex-wrap gap-x-2">
                  <dt className="text-muted">{t("numberLabel")}:</dt>
                  <dd className="font-semibold text-ink">
                    <bdi dir="ltr">{c.number}</bdi>
                  </dd>
                </div>
              </dl>
              <p className="mt-4 border-t border-navy/10 pt-4 text-sm font-semibold text-navy">
                {t("validUntil")}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <dialog
        ref={ref}
        aria-label={current ? t("dialogLabel", { standard: current.standard }) : undefined}
        onClose={() => setOpenId(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpenId(null);
        }}
        className="m-0 h-dvh max-h-none w-screen max-w-none bg-transparent p-0 backdrop:bg-navy/95"
      >
        {current && (
          <div
            className="flex h-full w-full items-center justify-center px-4 py-16 sm:px-20"
            onClick={(e) => {
              if (e.target === e.currentTarget) setOpenId(null);
            }}
          >
            <Image
              src={current.full.src}
              alt={t(`items.${current.id}.alt`)}
              width={current.full.width}
              height={current.full.height}
              sizes="100vw"
              className="h-auto max-h-full w-auto max-w-full bg-white object-contain"
            />
            <button
              type="button"
              autoFocus
              onClick={() => setOpenId(null)}
              aria-label={t("close")}
              className="absolute inset-e-3 top-3 flex size-12 items-center justify-center bg-white text-navy hover:bg-signal hover:text-white"
            >
              <X aria-hidden="true" className="size-6" />
            </button>
          </div>
        )}
      </dialog>
    </>
  );
}
