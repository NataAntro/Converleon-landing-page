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
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { organizationSchema, Seo, softwareApplicationSchema } from "@/lib/seo";

const HOME_TITLE = "Offline File Converter for Mac | Converleon";
const HOME_DESCRIPTION =
  "Convert images, video, audio, documents, PDFs, and archives offline on Mac. Batch-convert mixed files with no uploads or complicated setup.";

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
      <Seo
        title={HOME_TITLE}
        description={HOME_DESCRIPTION}
        path="/"
        jsonLd={[organizationSchema, softwareApplicationSchema]}
      />
      <Hero />
      <Benefits />
      <ArticlesCarousel />
      <Features />
      <FinalCTA />
      <Formats />
      <FAQ />
      <Footer />
      <StickyMobileCTA />
    </div>
  );
};

export default Index;
