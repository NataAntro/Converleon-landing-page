import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import ArticlesCarousel from "@/components/ArticlesCarousel";
import Features from "@/components/Features";
import FinalCTA from "@/components/FinalCTA";
import Formats from "@/components/Formats";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const elementId = location.hash.replace("#", "");
    const target = document.getElementById(elementId);

    if (target) {
      window.requestAnimationFrame(() => {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen">
      <Hero />
      <Benefits />
      <ArticlesCarousel />
      <Features />
      <FinalCTA />
      <Formats />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
