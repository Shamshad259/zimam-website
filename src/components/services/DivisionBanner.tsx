import Image from "next/image";
import { useTranslations } from "next-intl";
import type { Division } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { RedAccentLine } from "@/components/ui/RedAccentLine";
import { ZimamWatermark } from "@/components/ui/ZimamWatermark";

/** Division page banner: label + H1 beside a vertical 3-panel image strip. */
export function DivisionBanner({ division }: { division: Division }) {
  const t = useTranslations("divisions");
  const p = useTranslations("divisionPage");
  const title = t.has(`${division.slug}.pageTitle`)
    ? t(`${division.slug}.pageTitle`)
    : t(`${division.slug}.title`);

  return (
    <section className="relative isolate overflow-hidden bg-navy text-white">
      <ZimamWatermark className="-bottom-6 inset-s-0 text-[20vw]" />
      <Container className="grid items-center gap-10 pt-16 pb-14 lg:grid-cols-2 lg:py-0">
        <div className="max-w-xl">
          <p className="font-heading text-sm font-bold uppercase tracking-[0.25em] text-signal-light rtl:tracking-normal">
            {p("bannerLabel", { number: division.number })}
          </p>
          <h1 className="mt-4 font-heading text-4xl font-extrabold uppercase leading-tight tracking-tight sm:text-5xl rtl:tracking-normal">
            {title}
          </h1>
          <RedAccentLine className="mt-6" />
        </div>
        {/* Decorative strip: the page title already names the division. */}
        <div aria-hidden="true" className="grid h-72 grid-cols-3 gap-2 sm:h-96 lg:h-[30rem]">
          {division.banner.map((src, i) => (
            <div
              key={src}
              className={`relative overflow-hidden ${i === 1 ? "-mt-4 mb-4 lg:-mt-6 lg:mb-6" : ""}`}
            >
              <Image
                src={src}
                alt=""
                fill
                preload={i === 1}
                fetchPriority={i === 1 ? "high" : undefined}
                sizes="(min-width: 1024px) 20vw, 33vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-navy/20" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
