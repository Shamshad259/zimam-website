import { cn } from "@/lib/cn";

interface SectionTitleProps {
  /** Small, light word(s) on the first line, e.g. "OUR KEY". */
  label?: string;
  /** Bold, large word(s) on the second line, e.g. "SERVICES". */
  title: string;
  as?: "h1" | "h2" | "h3";
  tone?: "dark" | "light";
  align?: "start" | "center";
  size?: "md" | "lg";
  className?: string;
}

/** Two-line section heading from the company profile. One heading element, two lines. */
export function SectionTitle({
  label,
  title,
  as: Tag = "h2",
  tone = "dark",
  align = "start",
  size = "lg",
  className,
}: SectionTitleProps) {
  const light = tone === "light";
  return (
    <Tag className={cn(align === "center" ? "text-center" : "text-start", className)}>
      {label && (
        <span
          className={cn(
            "block text-xs font-light uppercase tracking-[0.28em] sm:text-sm rtl:tracking-normal",
            light ? "text-white/80" : "text-royal",
          )}
        >
          {label}
        </span>
      )}
      <span
        className={cn(
          "block font-heading font-extrabold uppercase leading-tight tracking-tight rtl:tracking-normal",
          label && "mt-1",
          size === "lg" ? "text-3xl sm:text-4xl lg:text-5xl" : "text-2xl sm:text-3xl lg:text-4xl",
          light ? "text-white" : "text-navy",
        )}
      >
        {title}
      </span>
    </Tag>
  );
}
