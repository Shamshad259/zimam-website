import { cn } from "@/lib/cn";

/** Large faint "ZIMAM" lettering for dark sections. Decorative only. */
export function ZimamWatermark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute select-none font-heading font-extrabold leading-none tracking-tighter text-white/[0.04]",
        className,
      )}
    >
      ZIMAM
    </span>
  );
}
