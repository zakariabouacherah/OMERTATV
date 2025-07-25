"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What devices are compatible with StreamPro?",
      answer:
        "StreamPro is compatible with a wide range of devices including Smart TVs (Samsung, LG, Sony), Android TV boxes, Amazon Fire TV, Apple TV, iOS and Android smartphones/tablets, Windows and Mac computers, and any device that supports M3U playlists or IPTV apps.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes! We offer a 24-hour free trial for new customers. This allows you to test our service quality, channel selection, and streaming performance before committing to a subscription. No credit card required for the trial period.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major payment methods including Visa, Mastercard, American Express, PayPal, Bitcoin, and other cryptocurrencies. All payments are processed securely through encrypted payment gateways to ensure your financial information is protected.",
    },
    {
      question: "Can I use StreamPro on multiple devices?",
      answer:
        "Yes, depending on your subscription plan. Standard plans allow 2 simultaneous connections, Premium plans allow up to 5 connections, and Royal Gold plans offer unlimited simultaneous connections. You can install the app on as many devices as you want.",
    },
    {
      question: "What if I experience technical issues?",
      answer:
        "Our dedicated support team is available 24/7 to help you with any technical issues. You can reach us through live chat, email, or our support ticket system. We also provide detailed setup guides and troubleshooting resources in our knowledge base.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-zinc-900 text-white py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 mb-8">
            <span className="text-yellow-500 font-medium">Support</span>
          </div>

          {/* Title */}
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Frequently Asked <span className="text-yellow-500">Questions</span>
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto">
            Get answers to common questions about StreamPro's premium IPTV
            service
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden transition-all duration-300 hover:bg-slate-800/70"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-yellow-500/50 rounded-lg"
              >
                <span className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6">
                  <div className="border-t border-slate-700 pt-4">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Support CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6">
            Still have questions? We're here to help!
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 rounded-lg transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
}
