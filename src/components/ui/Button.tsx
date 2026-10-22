import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "navy" | "outline-white" | "outline-navy" | "ghost";

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: "md" | "lg";
  /** Internal path (locale added automatically) or, with `external`, a full URL. */
  href?: string;
  external?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
  className?: string;
}

const variants: Record<ButtonVariant, string> = {
  primary: "bg-signal text-white hover:bg-signal-dark",
  navy: "bg-navy text-white hover:bg-royal",
  "outline-white": "border-2 border-white/80 text-white hover:bg-white hover:text-navy",
  "outline-navy": "border-2 border-navy text-navy hover:bg-navy hover:text-white",
  ghost: "text-navy hover:bg-navy/5",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  external,
  type = "button",
  onClick,
  className,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 font-heading text-sm font-bold uppercase tracking-wider transition duration-200 rtl:tracking-normal",
    "hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0",
    size === "lg" ? "px-8 py-4" : "px-6 py-3",
    variants[variant],
    className,
  );

  if (href && external) {
    const web = /^https?:/.test(href);
    return (
      <a
        href={href}
        target={web ? "_blank" : undefined}
        rel={web ? "noopener noreferrer" : undefined}
        onClick={onClick}
        className={classes}
      >
        {children}
      </a>
    );
  }
  if (href) {
    return (
      <Link href={href} onClick={onClick} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
