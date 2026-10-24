import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans_Arabic, Inter, Montserrat } from "next/font/google";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { locale as rootLocale } from "next/root-params";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { CtaBand } from "@/components/layout/CtaBand";
import { CtaBandGate } from "@/components/layout/CtaBandGate";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { TopBar } from "@/components/layout/TopBar";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { JsonLd } from "@/components/seo/JsonLd";
import { MotionProvider } from "@/components/ui/MotionProvider";
import { siteUrl } from "@/data/site";
import { localeDirection, routing } from "@/i18n/routing";
import { isReadyLocale, ogImage, ogLocale } from "@/lib/seo";
import { organizationJsonLd } from "@/lib/structured-data";
import "../globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-arabic",
  display: "swap",
  preload: false,
});

export const viewport: Viewport = { themeColor: "#0a0a4f" };

export async function generateMetadata(): Promise<Metadata> {
  const locale = await rootLocale();
  const t = await getTranslations({ locale, namespace: "meta.root" });
  return {
    metadataBase: new URL(siteUrl),
    title: { default: t("siteName"), template: `%s | ${t("siteName")}` },
    description: t("description"),
    robots: isReadyLocale(locale) ? undefined : { index: false, follow: false },
    openGraph: {
      type: "website",
      siteName: t("siteName"),
      locale: ogLocale(locale),
      images: [{ ...ogImage, alt: t("ogImageAlt") }],
    },
    twitter: { card: "summary_large_image", images: [{ url: ogImage.url, alt: t("ogImageAlt") }] },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children }: LayoutProps<"/[locale]">) {
  const locale = await rootLocale();
  if (!hasLocale(routing.locales, locale)) notFound();

  const messages = await getMessages();
  const t = await getTranslations({ locale, namespace: "common" });

  return (
    <html
      lang={locale}
      dir={localeDirection(locale)}
      className={`${montserrat.variable} ${inter.variable} ${plexArabic.variable}`}
    >
      <body>
        <JsonLd data={organizationJsonLd(t("companyName"), locale)} />
        <NextIntlClientProvider locale={locale} messages={messages}>
          <MotionProvider>
            <a
              href="#main"
              className="sr-only focus:not-sr-only focus:fixed focus:inset-s-4 focus:top-4 focus:z-70 focus:bg-signal focus:px-4 focus:py-2 focus:text-white"
            >
              {t("skipToContent")}
            </a>
            <TopBar />
            {/* Suspense: usePathname() needs it on routes rendered per request (e.g. the 404 catch-all). */}
            <Suspense fallback={<div className="h-20 bg-white" />}>
              <Header />
            </Suspense>
            <main id="main">{children}</main>
            <Suspense fallback={null}>
              <CtaBandGate>
                <CtaBand />
              </CtaBandGate>
            </Suspense>
            <Footer />
            <WhatsAppButton />
          </MotionProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
