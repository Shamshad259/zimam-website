// Divisions and their services. Display text lives in messages/*.json under
// `divisions.<slug>` (title, summary) and `services.<slug>.items.<id>`.
export type DivisionSlug = "electrical" | "elv-telecom" | "mechanical" | "civil";

export interface ServiceGroup {
  /** i18n key under `services.<slug>.groups`; null = ungrouped list. */
  group: string | null;
  items: string[];
}

export interface Division {
  slug: DivisionSlug;
  number: "01" | "02" | "03" | "04";
  /** Card image on Home / Services. Atmosphere or real site photo. */
  image: string;
  /** Three vertical panels for the division page banner (decorative). */
  banner: [string, string, string];
  groups: ServiceGroup[];
}

export const divisions: Division[] = [
  {
    slug: "electrical",
    number: "01",
    image: "/images/profile/site/site-p13-01.webp",
    banner: ["/images/profile/site/site-p13-01.webp", "/images/profile/atmosphere/switchgear-hall.webp", "/images/profile/site/site-p13-03.webp"],
    groups: [
      {
        group: null,
        items: [
          "cableInstallation",
          "panelsSwitchgear",
          "busbar",
          "transformer",
          "smallPower",
          "lighting",
          "streetLighting",
          "glanding",
          "controlCabling",
          "earthing",
          "testing",
        ],
      },
    ],
  },
  {
    slug: "elv-telecom",
    number: "02",
    image: "/images/profile/atmosphere/elv-network-cables.webp",
    banner: ["/images/profile/site/site-p19-08.webp", "/images/profile/atmosphere/elv-network-cables.webp", "/images/profile/site/site-p19-03.webp"],
    groups: [
      {
        group: null,
        items: [
          "structuredCabling",
          "fiberOptic",
          "telecomTower",
          "cctv",
          "accessControl",
          "securityMonitoring",
          "publicAddress",
          "intercom",
          "smatvIptv",
          "telephone",
          "testing",
        ],
      },
    ],
  },
  {
    slug: "mechanical",
    number: "03",
    image: "/images/profile/atmosphere/mechanical-ductwork.webp",
    banner: ["/images/profile/site/site-p14-03.webp", "/images/profile/atmosphere/mechanical-ductwork.webp", "/images/profile/site/site-p15-03.webp"],
    groups: [
      { group: "hvac", items: ["hvac", "chilledWaterDx", "ventilationExhaust"] },
      { group: "fireFighting", items: ["firePumpsSprinkler", "fireSuppression"] },
      {
        group: "plumbing",
        items: ["plumbingDrainage", "waterSupply", "sewageStormwater"],
      },
      { group: null, items: ["testing"] },
    ],
  },
  {
    slug: "civil",
    number: "04",
    image: "/images/profile/atmosphere/civil-site-cranes.webp",
    banner: ["/images/profile/site/site-p18-04.webp", "/images/profile/atmosphere/civil-site-cranes.webp", "/images/profile/site/site-p19-06.webp"],
    groups: [
      {
        group: "construction",
        items: [
          "sitePrep",
          "earthworks",
          "concreteFoundation",
          "masonry",
          "blockwork",
          "roadsPavement",
        ],
      },
      {
        group: "finishing",
        items: [
          "plastering",
          "gypsum",
          "tiling",
          "marbleGranite",
          "painting",
          "waterproofing",
          "buildingMaintenance",
        ],
      },
    ],
  },
];

export function getDivision(slug: DivisionSlug): Division {
  const division = divisions.find((d) => d.slug === slug);
  if (!division) throw new Error(`Unknown division: ${slug}`);
  return division;
}
