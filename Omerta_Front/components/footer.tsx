"use client";

import Link from "next/link";
import {
  Tv,
  Mail,
  Phone,
  MessageCircle,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";
import { useI18n } from "@/locales/client";

export default function Footer() {
  const t = useI18n();
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-16 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="bg-yellow-500 p-2 rounded-lg">
                <Tv className="h-6 w-6 text-black" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">StreamPro</span>
                <p className="text-xs text-gray-400">Stream Beyond Limits</p>
              </div>
            </Link>
            <p className="text-gray-400 mb-8 leading-relaxed text-sm">
              {/* Premium IPTV service with over 50,000 channels worldwide.
              Experience luxury entertainment like never before. */}
              {t("footer.description")}
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="bg-yellow-500 p-2 rounded-lg hover:bg-yellow-600 transition-colors"
              >
                <Facebook className="h-5 w-5 text-black" />
              </a>
              <a
                href="#"
                className="bg-yellow-500 p-2 rounded-lg hover:bg-yellow-600 transition-colors"
              >
                <Twitter className="h-5 w-5 text-black" />
              </a>
              <a
                href="#"
                className="bg-yellow-500 p-2 rounded-lg hover:bg-yellow-600 transition-colors"
              >
                <Instagram className="h-5 w-5 text-black" />
              </a>
              <a
                href="#"
                className="bg-yellow-500 p-2 rounded-lg hover:bg-yellow-600 transition-colors"
              >
                <Youtube className="h-5 w-5 text-black" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {t("footer.links.home")}
                </Link>
              </li>
              <li>
                <Link
                  href="/packages"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {t("footer.links.packages")}
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {t("footer.links.howItWorks")}
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {t("footer.links.faq")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              {t("footer.support")}
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {t("footer.links.helpCenter")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {t("footer.links.setupGuide")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {t("footer.links.privacyPolicy")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {t("footer.links.termsOfUse")}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              {t("footer.contactInfo")}
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  support@streampro.com
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                <span className="text-gray-400 text-sm">(+212)612345678</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  {t("footer.contact.whatsappSupport")}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  {t("footer.contact.premiumSupport")}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm flex flex-row items-center justify-center gap-1 rtl:flex-row">
              © {new Date().getFullYear()}{" "}
              <span className="text-yellow-400 "> StreamPro </span>.{" "}
              {t("footer.copyright")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
