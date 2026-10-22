import { useTranslations } from "next-intl";
import { ProjectsExplorer } from "@/components/projects/ProjectsExplorer";
import { PageBanner } from "@/components/ui/PageBanner";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: PageProps<"/[locale]/projects">) {
  const { locale } = await params;
  return pageMetadata(locale, "projects", "/projects");
}

export default function ProjectsPage() {
  const t = useTranslations("pageBanner.projects");
  return (
    <>
      <PageBanner
        image="/images/profile/atmosphere/civil-site-cranes.webp"
        alt={t("imageAlt")}
        label={t("label")}
        title={t("title")}
      />
      <ProjectsExplorer />
    </>
  );
}
