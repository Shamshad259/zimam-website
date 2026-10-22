import { ZimamWatermark } from "./ZimamWatermark";

/**
 * Neutral branded placeholder shown where a real site photo will go.
 * It is deliberately not an image of a project.
 */
export function PhotoPlaceholder({ label }: { label: string }) {
  // REPLACE WITH REAL SITE PHOTO
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy to-royal">
      <ZimamWatermark className="inset-x-0 top-1/2 -translate-y-1/2 text-center text-[5rem] text-white/[0.07]" />
      <span className="relative text-xs font-semibold uppercase tracking-[0.2em] text-white/60 rtl:tracking-normal">
        {label}
      </span>
    </div>
  );
}
