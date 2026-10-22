import { DiagonalHero } from "./DiagonalHero";
import { RedAccentLine } from "./RedAccentLine";
import { SectionTitle } from "./SectionTitle";

interface PageBannerProps {
  image: string;
  alt: string;
  /** Small word(s) above the title (two-line heading style). */
  label?: string;
  title: string;
  intro?: string;
}

/** Inner-page banner: diagonal hero with the page's single H1. */
export function PageBanner({ image, alt, label, title, intro }: PageBannerProps) {
  return (
    <DiagonalHero
      image={image}
      alt={alt}
      priority
      className="min-h-72 lg:min-h-96"
    >
      <div className="max-w-3xl pt-16 pb-14 lg:pt-24 lg:pb-20">
        <SectionTitle as="h1" label={label} title={title} tone="light" />
        <RedAccentLine className="mt-6" />
        {intro && <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">{intro}</p>}
      </div>
    </DiagonalHero>
  );
}
