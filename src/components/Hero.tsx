import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import heroImage from "@/assets/hero-screenshot.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            One app for every
            <br />
            <span className="gradient-text">file job on Mac</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
            Drop → tap → done. Batch convert mixed files, merge PDFs from anything, export PDFs page by page, extract audio, and pack/unpack archives — offline, on-device, zero setup.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
              Download on the Mac App Store
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 glass-card">
              See how it works
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-6 justify-center text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>Offline & private</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>No settings</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>Native for macOS</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>Mixed batch support</span>
            </div>
          </div>
        </div>
        
        <div className="relative max-w-5xl mx-auto animate-scale-in" style={{ animationDelay: "0.2s" }}>
          <div className="glass-card rounded-3xl p-4 shadow-2xl">
            <img 
              src={heroImage} 
              alt="Converleon app interface showing file conversion workflow" 
              className="w-full h-auto rounded-2xl"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent pointer-events-none rounded-3xl" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
