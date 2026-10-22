import { DivisionTemplate } from "@/components/services/DivisionTemplate";
import { getDivision } from "@/data/services";
import { pageMetadata } from "@/lib/metadata";

// Static segment (no `params` read in the page): fully prerendered and instantly navigable.
// All four division pages share DivisionTemplate and are driven by src/data/services.ts.
export async function generateMetadata({ params }: PageProps<"/[locale]/services/civil">) {
  const { locale } = await params;
  return pageMetadata(locale, "divisions.civil", "/services/civil");
}

export default function CivilDivisionPage() {
  return <DivisionTemplate division={getDivision("civil")} />;
}
