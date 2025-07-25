import {
  MessageCircle,
  ArrowRight,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

export default function ContactCTASection() {
  return (
    <section className="bg-slate-950 text-white py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 mb-8">
          <span className="text-yellow-500 font-medium">
            Start Your Premium Journey
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl lg:text-5xl font-bold mb-6">
          Ready to Experience{" "}
          <span className="text-yellow-500">
            Premium
            <br />
            Entertainment?
          </span>
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12">
          Join millions of satisfied customers and experience the ultimate in
          premium entertainment
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-2 rounded-lg text-lg transition-colors flex items-center justify-center group">
            Start Premium Now
            <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>

          <button className="bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white font-semibold px-8 py-2 rounded-lg text-lg transition-colors flex items-center justify-center">
            <MessageCircle className="mr-2 h-4 w-4" />
            Contact WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}
