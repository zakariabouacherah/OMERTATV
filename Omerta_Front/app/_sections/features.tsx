"use client";

import { useI18n } from "@/locales/client";
import { Tv, Globe, Zap, Headphones, BadgeCheckIcon } from "lucide-react";

export default function FeaturesSection() {
  const t = useI18n();
  const features = [
    {
      icon: Tv,
      title: t("features.items.premiumChannels.title"),
      description: t("features.items.premiumChannels.description"),
    },
    {
      icon: Globe,
      title: t("features.items.globalAccess.title"),
      description: t("features.items.globalAccess.description"),
    },
    {
      icon: Zap,
      title: t("features.items.ultraStreaming.title"),
      description: t("features.items.ultraStreaming.description"),
    },
    {
      icon: Headphones,
      title: t("features.items.customerSupport.title"),
      description: t("features.items.customerSupport.description"),
    },
    {
      icon: BadgeCheckIcon,
      title: t("features.items.freeTrial.title"),
      description: t("features.items.freeTrial.description"),
    },
  ];

  return (
    <section className="bg-zinc-900 text-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 mb-8">
            <span className="text-yellow-500 font-medium">
              {t("features.badge")}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            {t("features.title", { brand: "Omerta Pro" })}
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto">
            {t("features.description")}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className={`group border border-yellow-500/20 rounded-lg p-4 hover:border-yellow-400/40 transition-all duration-300  text-center flex flex-col justify-start items-center-safe cursor-pointer ${
                  index % 2 !== 0
                    ? "bg-gradient-to-bl from-slate-900/50 to-slate-500/30"
                    : "bg-gradient-to-bl from-yellow-600/30 to-yellow-300/10"
                }`}
              >
                {/* Icon */}
                <div className="bg-yellow-400/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <IconComponent className="h-8 w-8 text-yellow-400" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-4 group-hover:text-yellow-400 transition">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
