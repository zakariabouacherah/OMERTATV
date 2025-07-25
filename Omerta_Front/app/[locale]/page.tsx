import ContactCTASection from "../_sections/contact-cta";
import FAQSection from "../_sections/faq";
import FeaturesSection from "../_sections/features";
import Hero from "../_sections/hero";
import HowItWorksSection from "../_sections/how-it-works";
import PricingSection from "../_sections/pricing";
import TestimonialsSection from "../_sections/tesimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturesSection />
      <PricingSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactCTASection />
    </>
  );
}
