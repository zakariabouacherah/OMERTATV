"use client";

import { useI18n } from "@/locales/client";

export default function HowItWorksSection() {
  const t = useI18n();

  return (
    <section className="bg-zinc-900 text-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 mb-8">
            <span className="text-yellow-500 font-medium">
              {t("howItWorks.badge")}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            <span className="">
              {t("howItWorks.title").split(" ").slice(0, -1).join(" ")}{" "}
            </span>
            <span className="text-yellow-500">
              {t("howItWorks.title").split(" ").slice(-1).join(" ")}
            </span>
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto">
            {t("howItWorks.description")}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border border-slate-800 hover:border-slate-700 bg-slate-800/50 rounded-lg p-8 text-center hover:bg-slate-800/70 transition-all duration-300">
            {/* Step Number */}
            <div className="bg-yellow-500 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-xl font-bold text-white">{1}</span>
            </div>

            {/* Step Title */}
            <h3 className="text-xl font-bold text-white mb-4">
              {t("howItWorks.steps.0.title")}
            </h3>

            {/* Step Description */}
            <p className="text-gray-400 leading-relaxed">
              {t("howItWorks.steps.0.description")}
            </p>
          </div>
          <div className="border border-slate-800 hover:border-slate-700 bg-slate-800/50 rounded-lg p-8 text-center hover:bg-slate-800/70 transition-all duration-300">
            {/* Step Number */}
            <div className="bg-yellow-500 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-xl font-bold text-white">{2}</span>
            </div>

            {/* Step Title */}
            <h3 className="text-xl font-bold text-white mb-4">
              {t("howItWorks.steps.1.title")}
            </h3>

            {/* Step Description */}
            <p className="text-gray-400 leading-relaxed">
              {t("howItWorks.steps.1.description")}
            </p>
          </div>
          <div className="border border-slate-800 hover:border-slate-700 bg-slate-800/50 rounded-lg p-8 text-center hover:bg-slate-800/70 transition-all duration-300">
            {/* Step Number */}
            <div className="bg-yellow-500 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-xl font-bold text-white">{3}</span>
            </div>

            {/* Step Title */}
            <h3 className="text-xl font-bold text-white mb-4">
              {t("howItWorks.steps.2.title")}
            </h3>

            {/* Step Description */}
            <p className="text-gray-400 leading-relaxed">
              {t("howItWorks.steps.2.description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
