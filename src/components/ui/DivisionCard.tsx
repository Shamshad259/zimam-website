import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";

interface DivisionCardProps {
  number: string;
  divisionLabel: string;
  title: string;
  description: string;
  exploreLabel: string;
  href: string;
  image: string;
  alt: string;
}

export function DivisionCard({
  number,
  divisionLabel,
  title,
  description,
  exploreLabel,
  href,
  image,
  alt,
}: DivisionCardProps) {
  return (
    <article className="group relative isolate flex min-h-[26rem] overflow-hidden bg-navy text-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lift motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <Image
        src={image}
        alt={alt}
        fill
        sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
        className="-z-20 object-cover transition duration-700 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-navy via-navy/70 to-navy/10"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1 w-12 bg-signal transition-all duration-500 group-hover:w-full motion-reduce:transition-none"
      />
      <div className="mt-auto w-full p-6">
        <p className="flex items-baseline gap-3 font-heading text-xs font-semibold uppercase tracking-[0.2em] text-white/80 rtl:tracking-normal">
          <span className="text-3xl font-extrabold tracking-normal text-signal">{number}</span>
          {divisionLabel}
        </p>
        <h3 className="mt-3 font-heading text-xl font-extrabold uppercase leading-snug">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/80">{description}</p>
        <Link
          href={href}
          className="mt-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider after:absolute after:inset-0 rtl:tracking-normal"
        >
          {exploreLabel}
          <ArrowRight
            aria-hidden="true"
            className="size-4 text-signal transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1 motion-reduce:transition-none"
          />
        </Link>
      </div>
    </article>
  );
}
