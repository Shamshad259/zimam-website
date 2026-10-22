import { useTranslations } from "next-intl";
import { ContactInfoCard } from "@/components/contact/ContactInfoCard";
import { FindUsCard } from "@/components/contact/FindUsCard";
import { QuoteForm } from "@/components/contact/QuoteForm";
import { Container } from "@/components/ui/Container";
import { PageBanner } from "@/components/ui/PageBanner";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: PageProps<"/[locale]/contact">) {
  const { locale } = await params;
  return pageMetadata(locale, "contact");
}

export default function ContactPage() {
  const t = useTranslations("pageBanner.contact");
  return (
    <>
      <PageBanner
        image="/images/profile/atmosphere/riyadh-skyline-dusk.webp"
        alt={t("imageAlt")}
        title={t("title")}
      />
      <section className="bg-mist py-16 lg:py-24">
        {/* Mobile order: form, contact information, map. */}
        <Container className="grid items-start gap-8 lg:grid-cols-5 lg:gap-10">
          <div className="lg:col-span-3">
            <QuoteForm />
          </div>
          <div className="flex flex-col gap-8 lg:col-span-2">
            <ContactInfoCard />
            <FindUsCard />
          </div>
        </Container>
      </section>
    </>
  );
}
