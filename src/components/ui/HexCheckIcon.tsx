import { Check } from "lucide-react";
import { cn } from "@/lib/cn";

/** Red hexagon with a white check, used for service lists. */
export function HexCheckIcon({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "hex inline-flex size-6 shrink-0 items-center justify-center bg-signal text-white",
        className,
      )}
    >
      <Check className="size-3.5" strokeWidth={3} />
    </span>
  );
}
