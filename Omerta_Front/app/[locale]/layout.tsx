import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Tajawal } from "next/font/google";
import Navigation from "@/components/navigation";
import { I18nProviderClient } from "@/locales/client";
import "./globals.css";
import Footer from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const tajawal = Tajawal({
  subsets: ["arabic"],
  variable: "--font-arabic",
  weight: ["400", "500", "300", "800", "700"],
});

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "fr" }, { locale: "ar" }];
}

export const metadata: Metadata = {
  title: "StreamPro - Premium IPTV Service",
  description:
    "Experience premium entertainment with over 50,000 channels worldwide. Crystal-clear 8K quality, global content, and 24/7 support.",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body
        className={`${locale === "ar" ? tajawal.className : inter.className} ${
          inter.variable
        } ${tajawal.variable} bg-black`}
      >
        <I18nProviderClient locale={locale}>
          <Navigation />
          {children}
          <Footer />
        </I18nProviderClient>
      </body>
    </html>
  );
}
