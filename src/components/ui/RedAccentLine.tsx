import { cn } from "@/lib/cn";

/** Thin red line with a dashed ending: ———— — — */
export function RedAccentLine({
  className,
  grow = false,
}: {
  className?: string;
  /** Stretch the solid part to fill the available width (section dividers). */
  grow?: boolean;
}) {
  return (
    <div aria-hidden="true" className={cn("flex items-center gap-1.5", className)}>
      <span className={cn("h-0.5 bg-signal", grow ? "flex-1" : "w-20")} />
      <span className="h-0.5 w-3 bg-signal" />
      <span className="h-0.5 w-3 bg-signal" />
    </div>
  );
}
