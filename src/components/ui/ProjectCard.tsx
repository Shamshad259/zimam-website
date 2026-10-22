import Image from "next/image";
import { MapPin } from "lucide-react";
import { PhotoPlaceholder } from "./PhotoPlaceholder";

interface ProjectCardProps {
  title: string;
  location?: string;
  scope: string;
  tags: string[];
  /** Real site photo. Omit until one is available. */
  image?: { src: string; alt: string };
  placeholderLabel: string;
  /** Makes the whole card a button (opens the detail modal). */
  onOpen?: () => void;
  openLabel?: string;
}

export function ProjectCard({
  title,
  location,
  scope,
  tags,
  image,
  placeholderLabel,
  onOpen,
  openLabel,
}: ProjectCardProps) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lift motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <div className="relative aspect-[4/3] overflow-hidden bg-navy">
        {image ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-700 group-hover:scale-105 motion-reduce:transition-none"
          />
        ) : (
          <PhotoPlaceholder label={placeholderLabel} />
        )}
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1 w-0 bg-signal transition-all duration-500 group-hover:w-full motion-reduce:transition-none" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <ul className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li
              key={tag}
              className="bg-mist px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-royal rtl:tracking-normal"
            >
              {tag}
            </li>
          ))}
        </ul>
        <h3 className="mt-4 font-heading text-lg font-extrabold leading-snug text-navy">{title}</h3>
        {location && (
          <p className="mt-1.5 flex items-center gap-1.5 text-sm text-muted">
            <MapPin aria-hidden="true" className="size-4 shrink-0 text-signal" />
            {location}
          </p>
        )}
        <p className="mt-3 text-sm leading-relaxed text-muted">{scope}</p>
      </div>
      {onOpen && (
        <button
          type="button"
          onClick={onOpen}
          aria-label={openLabel}
          className="absolute inset-0 z-10 cursor-pointer"
        />
      )}
    </article>
  );
}
