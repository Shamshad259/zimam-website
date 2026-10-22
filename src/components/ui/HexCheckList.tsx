import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { HexCheckIcon } from "./HexCheckIcon";

interface HexCheckListProps {
  items: string[];
  /** Trailing arrow, as in the profile's service lists. Mirrors in RTL. */
  showArrow?: boolean;
  columns?: 1 | 2;
  className?: string;
}

export function HexCheckList({
  items,
  showArrow = false,
  columns = 2,
  className,
}: HexCheckListProps) {
  return (
    <ul className={cn("grid gap-x-12", columns === 2 && "md:grid-cols-2", className)}>
      {items.map((item) => (
        <li
          key={item}
          className="flex items-center gap-3 border-b border-navy/10 py-3.5 text-sm font-medium text-ink"
        >
          <HexCheckIcon />
          <span className="flex-1">{item}</span>
          {showArrow && (
            <ArrowRight aria-hidden="true" className="size-4 text-navy rtl:-scale-x-100" />
          )}
        </li>
      ))}
    </ul>
  );
}
