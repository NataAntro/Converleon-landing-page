import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import Features from "@/components/Features";
import Formats from "@/components/Formats";
import Pricing from "@/components/Pricing";
import Privacy from "@/components/Privacy";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <HowItWorks />
      <Benefits />
      <Features />
      <Formats />
      <Pricing />
      <Privacy />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
