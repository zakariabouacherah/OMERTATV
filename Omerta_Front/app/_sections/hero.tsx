"use client";

import { useI18n, useCurrentLocale } from "@/locales/client";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";
import React from "react";

const Hero = () => {
  const t = useI18n();
  const currentLocale = useCurrentLocale();

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <main className="relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.jpg"
            alt="IPTV Channels Background"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-black/60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 px-4 py-20 lg:px-8 lg:py-32">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 mb-8">
                <span className="text-yellow-500 font-medium">
                  {t("hero.badge")}
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {t("hero.title")}
              </h1>

              {/* Subheading */}
              <h2 className="text-2xl lg:text-3xl text-gray-300 mb-6 font-light">
                {t("hero.subtitle")}
              </h2>

              {/* Description */}
              <p className="text-lg text-gray-400 mb-12 max-w-2xl leading-relaxed">
                {t("hero.description")}
              </p>

              {/* Statistics */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-white mb-2">
                    50K+
                  </div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">
                    {t("hero.stats.channels")}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-white mb-2">
                    4K
                  </div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">
                    {t("hero.stats.ultraHd")}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-white mb-2">
                    99.9%
                  </div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">
                    {t("hero.stats.uptime")}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-white mb-2">
                    24/7
                  </div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">
                    {t("hero.stats.support")}
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-2.5 rounded-lg transition-colors flex items-center justify-center">
                  {t("hero.cta.getStarted")}
                  {currentLocale === "ar" ? (
                    <ChevronLeft className="h-4 w-4 mr-2" />
                  ) : (
                    <ChevronRight className="h-4 w-4 ml-2" />
                  )}
                </button>
                <button className="border border-gray-600 text-white hover:bg-gray-800 px-6 py-2.5 rounded-lg bg-black/50 transition-colors flex items-center justify-center">
                  <Play className="h-4 w-4 mr-2 rtl:ml-2" />
                  {t("hero.cta.watchDemo")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
