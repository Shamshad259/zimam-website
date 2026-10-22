import { ClientLogo } from "@/components/ui/ClientLogo";
import type { Client, LogoBox } from "@/data/clients";

export type MarqueeLogo = Client & { name: string };

// Fixed inner logo box in logo units: 140x56 on desktop (112x48 on mobile, --u 0.8).
const MARQUEE_BOX: LogoBox = { w: 140, h: 56 };

/**
 * Infinite auto-scrolling logo strip. Every tile has an explicit, identical size
 * (180x96, 144x80 on mobile) that content can never change; the only spacing is
 * `--gap`, applied between tiles and as end padding on each copy so the loop seam
 * has the same gap. Pauses on hover/focus, greyscale until hovered, and falls back
 * to a scrollable row under prefers-reduced-motion. The second copy is hidden from
 * assistive tech.
 */
export function LogoMarquee({ logos, label }: { logos: MarqueeLogo[]; label: string }) {
  return (
    <div
      role="region"
      aria-label={label}
      className="marquee overflow-hidden [--gap:1rem] [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] sm:[--gap:1.5rem]"
    >
      <div className="marquee-track flex w-max">
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy === 1 ? true : undefined}
            className="flex flex-none gap-(--gap) pe-(--gap)"
          >
            {logos.map((logo) => (
              <li
                key={logo.id}
                className="box-border flex h-20 w-36 min-w-0 flex-none items-center justify-center overflow-hidden rounded-lg border border-navy/10 bg-white [--u:0.8px] sm:h-24 sm:w-45 sm:[--u:1px]"
              >
                <div className="flex h-12 w-28 flex-none items-center justify-center overflow-hidden sm:h-14 sm:w-35">
                  <ClientLogo
                    client={logo}
                    alt={copy === 1 ? "" : logo.name}
                    box={MARQUEE_BOX}
                    className="grayscale transition duration-300 hover:grayscale-0 motion-reduce:transition-none"
                  />
                </div>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
