import { useTranslations } from "next-intl";
import { ClientsGrid } from "@/components/clients/ClientsGrid";
import { PageBanner } from "@/components/ui/PageBanner";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: PageProps<"/[locale]/clients">) {
  const { locale } = await params;
  return pageMetadata(locale, "clients");
}

export default function ClientsPage() {
  const t = useTranslations("pageBanner.clients");
  return (
    <>
      <PageBanner
        image="/images/profile/atmosphere/riyadh-skyline-day.webp"
        alt={t("imageAlt")}
        label={t("label")}
        title={t("title")}
      />
      <ClientsGrid />
    </>
  );
}
