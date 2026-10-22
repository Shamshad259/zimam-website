import Image from "next/image";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/cn";

/**
 * The Zimam logo exactly as in the company profile (vector paths extracted from
 * the PDF). "white" swaps the dark-blue and charcoal parts to white for navy
 * backgrounds; red parts are unchanged.
 */
export function Logo({
  variant = "color",
  className,
  priority = false,
}: {
  variant?: "color" | "white";
  className?: string;
  priority?: boolean;
}) {
  const t = useTranslations("common");
  return (
    <Image
      src={variant === "white" ? "/images/logo/zimam-logo-white.svg" : "/images/logo/zimam-logo.svg"}
      alt={t("logoAlt")}
      width={527}
      height={132}
      priority={priority}
      className={cn("h-10 w-auto", className)}
    />
  );
}
