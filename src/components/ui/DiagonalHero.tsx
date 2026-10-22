import Image from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

interface DiagonalHeroProps {
  image: string;
  alt: string;
  priority?: boolean;
  className?: string;
  children: ReactNode;
  /** Optional strip pinned to the bottom edge (e.g. division names). */
  bottom?: ReactNode;
}

/** Full-bleed image with a diagonal navy shape cutting across it (mirrors in RTL). */
export function DiagonalHero({
  image,
  alt,
  priority = false,
  className,
  children,
  bottom,
}: DiagonalHeroProps) {
  return (
    <section className={cn("relative isolate flex flex-col overflow-hidden bg-navy text-white", className)}>
      {/* On desktop the photo sits in the end 75% so its focal point clears the navy wedge. */}
      <div className="absolute inset-y-0 inset-e-0 -z-30 w-full lg:w-3/4 rtl:-scale-x-100">
        <Image
          src={image}
          alt={alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 75vw, 100vw"
          className="object-cover"
        />
      </div>
      <div aria-hidden="true" className="absolute inset-0 -z-20 bg-navy/25" />
      <div aria-hidden="true" className="diagonal-accent absolute inset-0 -z-10 bg-royal/85 max-md:hidden" />
      <div aria-hidden="true" className="diagonal-start absolute inset-0 -z-10 bg-navy/80 lg:bg-navy/94" />
      <Container className="flex flex-1 items-center">{children}</Container>
      {bottom}
    </section>
  );
}
