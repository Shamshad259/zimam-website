// Text lives in messages/*.json under `projects.items.<id>` (title, location, scope).
export type ProjectCategory = "electrical" | "mechanical" | "mep" | "civil";

export interface Project {
  id: string;
  categories: ProjectCategory[];
  /** i18n keys under `projects.tags`. */
  tags: string[];
  /** Division slugs, for the "related projects" block on division pages. */
  divisions: string[];
  /**
   * REPLACE WITH REAL SITE PHOTO: public path(s) of real photos of this project.
   * Leave empty until it is confirmed which photos belong to which project.
   */
  images: string[];
}

export const projects: Project[] = [
  { id: "stc-data-center", categories: ["electrical"], tags: ["electrical", "dataCenter"], divisions: ["electrical"], images: [] },
  { id: "haram-makkah", categories: ["electrical", "mechanical"], tags: ["electrical", "mechanical"], divisions: ["electrical", "mechanical"], images: [] },
  { id: "raffles-diriyah", categories: ["electrical", "mechanical"], tags: ["electrical", "plumbing", "hospitality"], divisions: ["electrical", "mechanical"], images: [] },
  { id: "seven-riyadh", categories: ["electrical"], tags: ["electrical", "entertainment"], divisions: ["electrical"], images: [] },
  { id: "private-villas", categories: ["mep"], tags: ["mep", "residential"], divisions: ["electrical", "mechanical"], images: [] },
  { id: "warehouses", categories: ["mep"], tags: ["mep", "industrial"], divisions: ["electrical", "mechanical"], images: [] },
  { id: "kidzone-school", categories: ["mep"], tags: ["mep", "education"], divisions: ["electrical", "mechanical"], images: [] },
];

export const featuredProjectIds = [
  "stc-data-center",
  "haram-makkah",
  "raffles-diriyah",
  "seven-riyadh",
] as const;
