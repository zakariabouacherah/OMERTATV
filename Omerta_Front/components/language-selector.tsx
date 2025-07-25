"use client";

import { useChangeLocale, useCurrentLocale } from "@/locales/client";
import { Globe } from "lucide-react";
import { useState } from "react";

export default function LanguageSelector() {
  const changeLocale = useChangeLocale();
  const currentLocale = useCurrentLocale();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "en", name: "English" },
    { code: "fr", name: "Français" },
    { code: "ar", name: "العربية" },
  ];

  const currentLanguage = languages.find((lang) => lang.code === currentLocale);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-white transition-colors"
      >
        <Globe className="h-4 w-4" />
        <span className="text-sm">{currentLanguage?.name}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-gray-800 border border-gray-700 rounded-lg shadow-lg z-50 min-w-[150px]">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => {
                changeLocale(language.code as "en" | "fr" | "ar");
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-700 transition-colors flex items-center gap-2 ${
                currentLocale === language.code
                  ? "bg-gray-700 text-yellow-500"
                  : "text-white"
              }`}
            >
              <span>{language.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
