import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Features from "@/components/Features";
import FinalCTA from "@/components/FinalCTA";
import Formats from "@/components/Formats";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Benefits />
      <Features />
      <FinalCTA />
      <Formats />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
