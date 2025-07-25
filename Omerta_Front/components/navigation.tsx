"use client";

import Link from "next/link";
import { useState } from "react";
import { Tv, Menu, X } from "lucide-react";
import LanguageSelector from "./language-selector";
import { useI18n } from "@/locales/client";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useI18n();

  return (
    <header className="sticky top-0 left-0 right-0  px-4 py-4 lg:px-8 z-20 bg-black">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-yellow-500 p-2 rounded-lg">
            <Tv className="h-6 w-6 text-black" />
          </div>
          <div>
            <span className="text-xl font-bold text-white">StreamPro</span>
            <p className="text-xs text-gray-400">Stream Beyond Limits</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="text-white hover:text-yellow-500 transition-colors"
          >
            {t("nav.home")}
          </Link>
          <Link
            href="/packages"
            className="text-gray-300 hover:text-yellow-500 transition-colors"
          >
            {t("nav.packages")}
          </Link>
          <Link
            href="/why-us"
            className="text-gray-300 hover:text-yellow-500 transition-colors"
          >
            {t("nav.whyUs")}
          </Link>
          <Link
            href="/faq"
            className="text-gray-300 hover:text-yellow-500 transition-colors"
          >
            {t("nav.faq")}
          </Link>
          <Link
            href="/contact"
            className="text-gray-300 hover:text-yellow-500 transition-colors"
          >
            {t("nav.contact")}
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <LanguageSelector />
          </div>

          {/* Desktop CTA Button */}
          <button className="hidden md:block bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-1.5 rounded-lg transition-colors">
            {t("nav.getStarted")}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className={`md:hidden absolute z-50 top-full left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-gray-800`}
        >
          <div className="px-4 py-6 space-y-4">
            <Link
              href="/"
              className="block text-white hover:text-yellow-500 transition-colors py-2"
            >
              {t("nav.home")}
            </Link>
            <Link
              href="/packages"
              className="block text-gray-300 hover:text-yellow-500 transition-colors py-2"
            >
              {t("nav.packages")}
            </Link>
            <Link
              href="/why-us"
              className="block text-gray-300 hover:text-yellow-500 transition-colors py-2"
            >
              {t("nav.whyUs")}
            </Link>
            <Link
              href="/faq"
              className="block text-gray-300 hover:text-yellow-500 transition-colors py-2"
            >
              {t("nav.faq")}
            </Link>
            <Link
              href="/contact"
              className="block text-gray-300 hover:text-yellow-500 transition-colors py-2"
            >
              {t("nav.contact")}
            </Link>
            <LanguageSelector />
            <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-lg transition-colors mt-4">
              {t("nav.getStarted")}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
