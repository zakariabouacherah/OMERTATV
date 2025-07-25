"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { useI18n } from "@/locales/client";

export default function PricingSection() {
  const t = useI18n();
  const [activeTab, setActiveTab] = useState("standard");

  const packageTiers = {
    standard: {
      name: t("pricing.tabs.standard"),
      packages: [
        {
          name: t("pricing.standard.monthly.name"),
          description: t("pricing.standard.monthly.description"),
          price: "$9.99",
          originalPrice: "$12.99",
          savings: t("pricing.standard.monthly.savings"),
          period: t("pricing.standard.monthly.period"),
          features: [
            t("pricing.features.hdStreaming"),
            t("pricing.features.channels500"),
            t("pricing.features.support247"),
          ],
          popular: false,
        },
        {
          name: t("pricing.standard.quarterly.name"),
          description: t("pricing.standard.quarterly.description"),
          price: "$25.99",
          originalPrice: "$35.99",
          savings: t("pricing.standard.quarterly.savings"),
          period: t("pricing.standard.quarterly.period"),
          features: [
            t("pricing.features.hdStreaming"),
            t("pricing.features.channels500"),
            t("pricing.features.support247"),
          ],
          popular: true,
        },
        {
          name: t("pricing.standard.annual.name"),
          description: t("pricing.standard.annual.description"),
          price: "$79.99",
          originalPrice: "$119.99",
          savings: t("pricing.standard.annual.savings"),
          period: t("pricing.standard.annual.period"),
          features: [
            t("pricing.features.hdStreaming"),
            t("pricing.features.channels500"),
            t("pricing.features.support247"),
          ],
          popular: false,
        },
        {
          name: t("pricing.standard.semiAnnual.name"),
          description: t("pricing.standard.semiAnnual.description"),
          price: "$45.99",
          originalPrice: "$65.99",
          savings: t("pricing.standard.semiAnnual.savings"),
          period: t("pricing.standard.semiAnnual.period"),
          features: [
            t("pricing.features.hdStreaming"),
            t("pricing.features.channels500"),
            t("pricing.features.support247"),
          ],
          popular: false,
        },
      ],
    },
    premium: {
      name: t("pricing.tabs.premium"),
      packages: [
        {
          name: t("pricing.premium.monthly.name"),
          description: t("pricing.premium.monthly.description"),
          price: "$19.99",
          originalPrice: "$24.99",
          savings: t("pricing.premium.monthly.savings"),
          period: t("pricing.premium.monthly.period"),
          features: [
            t("pricing.features.ultraHd4k"),
            t("pricing.features.channels10k"),
            t("pricing.features.prioritySupport"),
            t("pricing.features.multiDevice"),
          ],
          popular: false,
        },
        {
          name: t("pricing.premium.quarterly.name"),
          description: t("pricing.premium.quarterly.description"),
          price: "$49.99",
          originalPrice: "$69.99",
          savings: t("pricing.premium.quarterly.savings"),
          period: t("pricing.premium.quarterly.period"),
          features: [
            t("pricing.features.ultraHd4k"),
            t("pricing.features.channels10k"),
            t("pricing.features.prioritySupport"),
            t("pricing.features.multiDevice"),
          ],
          popular: true,
        },
        {
          name: t("pricing.premium.annual.name"),
          description: t("pricing.premium.annual.description"),
          price: "$159.99",
          originalPrice: "$239.99",
          savings: t("pricing.premium.annual.savings"),
          period: t("pricing.premium.annual.period"),
          features: [
            t("pricing.features.ultraHd4k"),
            t("pricing.features.channels10k"),
            t("pricing.features.prioritySupport"),
            t("pricing.features.multiDevice"),
          ],
          popular: false,
        },
        {
          name: t("pricing.premium.semiAnnual.name"),
          description: t("pricing.premium.semiAnnual.description"),
          price: "$89.99",
          originalPrice: "$129.99",
          savings: t("pricing.premium.semiAnnual.savings"),
          period: t("pricing.premium.semiAnnual.period"),
          features: [
            t("pricing.features.ultraHd4k"),
            t("pricing.features.channels10k"),
            t("pricing.features.prioritySupport"),
            t("pricing.features.multiDevice"),
          ],
          popular: false,
        },
      ],
    },
    royalGold: {
      name: t("pricing.tabs.royalGold"),
      packages: [
        {
          name: t("pricing.royalGold.monthly.name"),
          description: t("pricing.royalGold.monthly.description"),
          price: "$39.99",
          originalPrice: "$49.99",
          savings: t("pricing.royalGold.monthly.savings"),
          period: t("pricing.royalGold.monthly.period"),
          features: [
            t("pricing.features.ultraHd8k"),
            t("pricing.features.channels50k"),
            t("pricing.features.vipSupport"),
            t("pricing.features.unlimitedDevices"),
            t("pricing.features.premiumSports"),
          ],
          popular: false,
        },
        {
          name: t("pricing.royalGold.quarterly.name"),
          description: t("pricing.royalGold.quarterly.description"),
          price: "$99.99",
          originalPrice: "$139.99",
          savings: t("pricing.royalGold.quarterly.savings"),
          period: t("pricing.royalGold.quarterly.period"),
          features: [
            t("pricing.features.ultraHd8k"),
            t("pricing.features.channels50k"),
            t("pricing.features.vipSupport"),
            t("pricing.features.unlimitedDevices"),
            t("pricing.features.premiumSports"),
          ],
          popular: true,
        },
        {
          name: t("pricing.royalGold.annual.name"),
          description: t("pricing.royalGold.annual.description"),
          price: "$319.99",
          originalPrice: "$479.99",
          savings: t("pricing.royalGold.annual.savings"),
          period: t("pricing.royalGold.annual.period"),
          features: [
            t("pricing.features.ultraHd8k"),
            t("pricing.features.channels50k"),
            t("pricing.features.vipSupport"),
            t("pricing.features.unlimitedDevices"),
            t("pricing.features.premiumSports"),
          ],
          popular: false,
        },
        {
          name: t("pricing.royalGold.semiAnnual.name"),
          description: t("pricing.royalGold.semiAnnual.description"),
          price: "$179.99",
          originalPrice: "$259.99",
          savings: t("pricing.royalGold.semiAnnual.savings"),
          period: t("pricing.royalGold.semiAnnual.period"),
          features: [
            t("pricing.features.ultraHd8k"),
            t("pricing.features.channels50k"),
            t("pricing.features.vipSupport"),
            t("pricing.features.unlimitedDevices"),
            t("pricing.features.premiumSports"),
          ],
          popular: false,
        },
      ],
    },
  };

  const currentPackages = packageTiers[activeTab as keyof typeof packageTiers];

  const getTierColors = (tier: string) => {
    switch (tier) {
      case "standard":
        return {
          accent: "text-cyan-300",
          border: "border-cyan-300",
          shadow: "shadow-cyan-300/20",
          badge: "bg-cyan-300 text-black",
          button: "bg-cyan-300 hover:bg-cyan-300 text-black",
          check: "text-cyan-300",
        };
      case "premium":
        return {
          accent: "text-blue-500",
          border: "border-blue-500",
          shadow: "shadow-blue-500/20",
          badge: "bg-blue-500 text-white",
          button: "bg-blue-500 hover:bg-blue-600 text-white",
          check: "text-blue-500",
        };
      case "royalGold":
        return {
          accent: "text-yellow-400",
          border: "border-yellow-600",
          shadow: "shadow-yellow-400/20",
          badge: "bg-gradient-to-r from-yellow-400 to-yellow-600 text-black",
          button:
            "bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black",
          check: "text-yellow-400",
        };
      default:
        return {
          accent: "text-yellow-500",
          border: "border-yellow-500",
          shadow: "shadow-yellow-500/20",
          badge: "bg-yellow-500 text-black",
          button: "bg-yellow-500 hover:bg-yellow-600 text-black",
          check: "text-yellow-500",
        };
    }
  };

  const colors = getTierColors(activeTab);

  return (
    <section className="bg-slate-950 text-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 mb-8">
            <span className="text-yellow-500 font-medium">
              {t("pricing.badge")}
            </span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            {t("pricing.title").split(" ").slice(0, -2).join(" ")}{" "}
            <span className="text-yellow-500">
              {t("pricing.title").split(" ").slice(-2).join(" ")}
            </span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            {t("pricing.description")}
          </p>

          {/* Tabs */}
          <div className="flex justify-center gap-2 mb-16 bg-gray-800 w-fit mx-auto p-1 rounded-xl">
            <button
              onClick={() => setActiveTab("standard")}
              className={`text-sm lg:text-base px-2 lg:px-6 py-0.5 rounded-lg font-medium transition-all duration-300 ${
                activeTab === "standard"
                  ? "bg-cyan-300 text-black"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              {t("pricing.tabs.standard")}
            </button>
            <button
              onClick={() => setActiveTab("premium")}
              className={`text-sm lg:text-base px-2 lg:px-6 py-0.5 rounded-lg font-medium transition-all duration-300 ${
                activeTab === "premium"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              {t("pricing.tabs.premium")}
            </button>
            <button
              onClick={() => setActiveTab("royalGold")}
              className={`text-sm lg:text-base px-2 lg:px-6 py-0.5 rounded-lg font-medium transition-all duration-300 ${
                activeTab === "royalGold"
                  ? "bg-gradient-to-r from-yellow-400 to-yellow-600 text-black"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              {t("pricing.tabs.royalGold")}
            </button>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentPackages.packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-gray-900/50 rounded-lg p-6 transition-all duration-300 hover:bg-gray-900/70 ${
                pkg.popular
                  ? `border-2 ${colors.border} shadow-lg ${colors.shadow}`
                  : "border border-gray-800 hover:border-gray-700"
              }`}
            >
              {pkg.popular && (
                <div
                  className={`absolute w-2/3 -top-3 left-1/2 transform -translate-x-1/2 ${colors.badge} px-3 py-1 rounded-full text-sm text-center font-bold`}
                >
                  {t("pricing.mostPopular")}
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {pkg.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{pkg.description}</p>

                <div className="mb-2">
                  <span className="text-3xl font-bold text-white">
                    {pkg.price}
                  </span>
                  <span className="text-gray-400 line-through ml-2 text-lg">
                    {pkg.originalPrice}
                  </span>
                </div>
                <p className="text-sm text-gray-400 mb-2">{pkg.period}</p>
                <p className={`${colors.accent} font-semibold text-sm`}>
                  {pkg.savings}
                </p>
              </div>

              <div className="mb-8">
                <ul className="space-y-3">
                  {pkg.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-gray-300"
                    >
                      <Check
                        className={`h-4 w-4 ${colors.check} mr-3 flex-shrink-0`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`w-full ${colors.button} font-semibold py-3 px-6 rounded-lg transition-colors`}
              >
                {t("pricing.choosePlan")}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
