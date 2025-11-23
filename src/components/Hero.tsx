import { Button } from "@/components/ui/button";
import { ArrowRight, Check, MousePointerClick, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-screenshot.png";
import appIcon from "@/assets/app-icon.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
      <div className="text-center mb-12 animate-fade-in">
        <div className="relative mb-12">
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold leading-tight relative z-10">
            <span className="gradient-text">Converleon</span>
          </h1>
          <div className="absolute inset-0 blur-3xl opacity-30 bg-gradient-to-r from-primary via-accent to-primary animate-pulse" />
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 mb-8">
          <img 
            src={appIcon} 
            alt="Converleon app icon" 
            className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-3xl shadow-2xl animate-scale-in"
          />
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-center md:text-left">
            One app for every
            <br />
            <span className="gradient-text">file job on Mac</span>
          </h2>
        </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-6 text-xl md:text-3xl font-semibold">
            <div className="glass-card px-6 py-3 rounded-2xl flex items-center gap-2 w-full md:w-auto justify-center">
              <Sparkles className="h-5 w-5 md:h-6 md:w-6 text-primary" />
              <span>One Drop</span>
            </div>
            <ArrowRight className="h-6 w-6 md:h-8 md:w-8 text-primary rotate-90 md:rotate-0" />
            <div className="glass-card px-6 py-3 rounded-2xl flex items-center gap-2 w-full md:w-auto justify-center">
              <MousePointerClick className="h-5 w-5 md:h-6 md:w-6 text-primary" />
              <span>One Tap</span>
            </div>
            <ArrowRight className="h-6 w-6 md:h-8 md:w-8 text-primary rotate-90 md:rotate-0" />
            <div className="glass-card px-6 py-3 rounded-2xl flex items-center gap-2 w-full md:w-auto justify-center">
              <Check className="h-5 w-5 md:h-6 md:w-6 text-primary" />
              <span>Done</span>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
            Batch convert mixed files, merge PDFs from anything, export PDFs page by page, extract audio, and pack/unpack archives — offline, on-device, zero setup.
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
