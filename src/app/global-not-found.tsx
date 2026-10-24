import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic, Inter, Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import ar from "../../messages/ar.json";
import en from "../../messages/en.json";
import "./globals.css";

// Unmatched URLs (e.g. /en/foo, /ar/services/foo) are answered by Next with a real 404
// status and this page. It bypasses the [locale] layout, so it carries both languages.
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  variable: "--font-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${en.notFound.title} | ${en.common.companyName}`,
  robots: { index: false, follow: false },
};

const linkClass =
  "inline-flex items-center justify-center bg-signal px-6 py-3 font-heading text-sm font-bold text-white transition hover:bg-signal-dark";

export default function GlobalNotFound() {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable} ${plexArabic.variable}`}>
      <body>
        <main className="relative isolate flex min-h-screen items-center overflow-hidden bg-navy py-16 text-white">
          <div aria-hidden="true" className="diagonal-accent absolute inset-0 -z-10 bg-royal/60" />
          <div className="mx-auto w-full max-w-6xl px-6">
            <Image
              src="/images/logo/zimam-logo-white.svg"
              alt={en.common.logoAlt}
              width={527}
              height={132}
              priority
              className="h-11 w-auto"
            />
            <div className="mt-12 grid gap-12 md:grid-cols-2">
              <section lang="en" dir="ltr">
                <p className="font-heading text-sm font-bold uppercase tracking-[0.3em] text-signal-light">
                  {en.notFound.label}
                </p>
                <h1 className="mt-4 font-heading text-4xl font-extrabold leading-tight sm:text-5xl">
                  {en.notFound.title}
                </h1>
                <div aria-hidden="true" className="my-6 h-0.5 w-24 bg-signal" />
                <p className="max-w-md text-lg leading-relaxed text-white/85">{en.notFound.text}</p>
                <Link href="/en" className={`${linkClass} mt-8`}>
                  {en.notFound.home}
                </Link>
              </section>
              <section lang="ar" dir="rtl">
                <p className="font-heading text-sm font-bold text-signal-light">{ar.notFound.label}</p>
                <h2 className="mt-4 font-heading text-4xl font-extrabold leading-snug sm:text-5xl">
                  {ar.notFound.title}
                </h2>
                <div aria-hidden="true" className="my-6 h-0.5 w-24 bg-signal" />
                <p className="max-w-md text-lg leading-loose text-white/85">{ar.notFound.text}</p>
                <Link href="/ar" className={`${linkClass} mt-8`}>
                  {ar.notFound.home}
                </Link>
              </section>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
