import { BadgeCheck, GraduationCap, ShieldCheck, Users, type LucideIcon } from "lucide-react";
import { useTranslations } from "next-intl";

export const policies: { id: "safety" | "quality" | "hr" | "training"; icon: LucideIcon; angle: number }[] = [
  { id: "safety", icon: ShieldCheck, angle: 315 },
  { id: "hr", icon: Users, angle: 45 },
  { id: "training", icon: GraduationCap, angle: 135 },
  { id: "quality", icon: BadgeCheck, angle: 225 },
];

const CENTER = 100;
const R_OUT = 96;
const R_IN = 56;
const HALF_SPAN = 42; // degrees each side of the segment's centre; the rest is the gap

const point = (r: number, deg: number) => {
  const rad = (deg * Math.PI) / 180;
  return [CENTER + r * Math.sin(rad), CENTER - r * Math.cos(rad)] as const;
};

function sector(angle: number) {
  const a0 = angle - HALF_SPAN;
  const a1 = angle + HALF_SPAN;
  const [x0, y0] = point(R_OUT, a0);
  const [x1, y1] = point(R_OUT, a1);
  const [x2, y2] = point(R_IN, a1);
  const [x3, y3] = point(R_IN, a0);
  return `M${x0} ${y0} A${R_OUT} ${R_OUT} 0 0 1 ${x1} ${y1} L${x2} ${y2} A${R_IN} ${R_IN} 0 0 0 ${x3} ${y3} Z`;
}

/** Circular "Quality Policies" wheel; each segment links to its policy card below. */
export function PolicyWheel() {
  const t = useTranslations("quality");

  return (
    <div className="relative mx-auto aspect-square w-full max-w-sm">
      <svg viewBox="0 0 200 200" role="group" aria-label={t("wheel.ariaLabel")} className="size-full">
        {policies.map(({ id, angle }) => (
          <a key={id} href={`#${id}`} aria-label={t(`policies.${id}.title`)} className="group outline-offset-2">
            <title>{t(`policies.${id}.title`)}</title>
            <path
              d={sector(angle)}
              className="fill-signal transition-colors duration-200 group-hover:fill-royal group-focus-visible:fill-royal"
            />
          </a>
        ))}
        {policies.map(({ id, icon: Icon, angle }) => {
          const [x, y] = point(76, angle);
          return (
            <g key={id} aria-hidden="true" pointerEvents="none">
              <circle cx={x} cy={y} r="12" className="fill-white" />
              <Icon x={x - 6.5} y={y - 6.5} width={13} height={13} className="text-signal" />
            </g>
          );
        })}
        <circle cx={CENTER} cy={CENTER} r="50" className="fill-navy" />
        <text
          textAnchor="middle"
          className="fill-white font-heading text-[13px] font-extrabold uppercase"
        >
          <tspan x={CENTER} y="97">
            {t("wheel.centerTop")}
          </tspan>
          <tspan x={CENTER} y="113">
            {t("wheel.centerBottom")}
          </tspan>
        </text>
      </svg>
    </div>
  );
}
