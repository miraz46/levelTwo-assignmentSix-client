import HeroSection from "@/components/modules/homepage/HeroSection";
import HowItWorkSection from "@/components/modules/homepage/HowItWorkSection";
import CustomerTestimonialsSection from "@/components/modules/homepage/CustomerTestimonialsSection";
import ServiceHighlightsSection from "@/components/modules/homepage/ServiceHighlightsSection";
import PromotionalSection from "@/components/modules/homepage/PromotionalSection";
import FinalCallSection from "@/components/modules/homepage/FinalCallSection";

const Homepage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Banner Section */}
      <HeroSection></HeroSection>

      {/* How It Works Section */}
      <HowItWorkSection></HowItWorkSection>

      {/* Service Highlights Section */}
      <ServiceHighlightsSection></ServiceHighlightsSection>

      {/* Customer Testimonials Section */}
      <CustomerTestimonialsSection></CustomerTestimonialsSection>

      {/* Promotions Section */}
      <PromotionalSection></PromotionalSection>

      {/* Final Call-to-Action Section */}
      <FinalCallSection></FinalCallSection>
    </div>
  );
};

export default Homepage;
