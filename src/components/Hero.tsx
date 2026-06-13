import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ArrowRight, Check, MousePointerClick, Play, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-screenshot.webp";
import appIcon from "@/assets/app-icon.webp";

const productDemoUrl = "https://www.youtube-nocookie.com/embed/aXsZbqFQUNw";

const Hero = () => {
  const [isDemoPlaying, setIsDemoPlaying] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-10 md:py-20 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
      <div className="text-center mb-8 md:mb-12 animate-fade-in">
        <div className="relative mb-8 md:mb-12">
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold leading-tight relative z-10">
            <span className="gradient-text">Converleon</span>
            <span className="sr-only"> — Offline File Converter for Mac</span>
          </h1>
          <div className="absolute inset-0 blur-3xl opacity-30 bg-gradient-to-r from-primary via-accent to-primary animate-pulse" />
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-8 mb-6 md:mb-8">
          <img 
            src={appIcon} 
            alt="Converleon app icon" 
            width={1024}
            height={1024}
            className="w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-3xl shadow-2xl animate-scale-in"
          />
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-center md:text-left">
            One app for every
            <br />
            <span>file job on </span>
            <span className="text-accent">Mac</span>
          </h2>
        </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 mb-5 md:mb-6 text-base md:text-xl font-semibold text-foreground/90">
            <div className="flex items-center justify-center gap-2 rounded-full border border-white/10 bg-background/25 px-4 py-2 w-full max-w-xs md:w-auto md:max-w-none backdrop-blur">
              <Sparkles className="h-4 w-4 text-primary/80" />
              <span>One Drop</span>
            </div>
            <ArrowRight className="h-5 w-5 text-primary/60 rotate-90 md:rotate-0" />
            <div className="flex items-center justify-center gap-2 rounded-full border border-white/10 bg-background/25 px-4 py-2 w-full max-w-xs md:w-auto md:max-w-none backdrop-blur">
              <MousePointerClick className="h-4 w-4 text-primary/80" />
              <span>One Tap</span>
            </div>
            <ArrowRight className="h-5 w-5 text-primary/60 rotate-90 md:rotate-0" />
            <div className="flex items-center justify-center gap-2 rounded-full border border-white/10 bg-background/25 px-4 py-2 w-full max-w-xs md:w-auto md:max-w-none backdrop-blur">
              <Check className="h-4 w-4 text-primary/80" />
              <span>Done</span>
            </div>
          </div>
          
          <p className="text-lg md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-6 md:mb-8 leading-relaxed">
            Batch-convert mixed files, merge PDFs from almost anything, split PDFs page by page, extract audio, remove backgrounds, and pack or unpack archives.
            <br />
            No uploads, no setup.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button asChild size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
              <a href="https://apps.apple.com/app/converleon/id6751464821" target="_blank" rel="noopener noreferrer">
                Download on the Mac App Store
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-6 justify-center text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>Offline & private</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>No settings to learn</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>Native macOS app</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>Handles mixed batches</span>
            </div>
          </div>
        </div>
        
        <div className="relative max-w-5xl mx-auto animate-scale-in" style={{ animationDelay: "0.2s" }}>
          <div className="mb-4 text-center md:mb-5">
            <h3 className="text-2xl font-bold leading-tight text-foreground md:text-3xl">See it in action</h3>
            <div className="mx-auto mt-3 h-px w-28 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          </div>
          <div className="glass-card rounded-3xl p-3 shadow-2xl md:p-4">
            <div className="relative overflow-hidden rounded-2xl">
              {isDemoPlaying ? (
                <AspectRatio ratio={16 / 9}>
                  <iframe
                    src={`${productDemoUrl}?autoplay=1&rel=0`}
                    title="How Converleon works"
                    className="h-full w-full border-0"
                    allow="autoplay; encrypted-media; picture-in-picture; web-share"
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
                    allowFullScreen
                  />
                </AspectRatio>
              ) : (
                <button
                  type="button"
                  className="group relative block w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  aria-label="Play the Converleon product demo"
                  onClick={() => setIsDemoPlaying(true)}
                >
                  <AspectRatio ratio={16 / 9}>
                    <img
                      src={heroImage}
                      alt="Converleon app interface showing file conversion workflow"
                      width={1920}
                      height={1200}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.01]"
                    />
                    <span className="absolute inset-0 bg-gradient-to-t from-background/60 via-background/10 to-transparent transition group-hover:from-background/70" />
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="flex h-20 w-20 items-center justify-center rounded-full border border-white/30 bg-primary/90 text-primary-foreground shadow-2xl shadow-primary/30 transition group-hover:scale-105 group-hover:bg-primary md:h-24 md:w-24">
                        <Play className="h-8 w-8 translate-x-0.5 fill-primary-foreground md:h-10 md:w-10" />
                      </span>
                    </span>
                    <span className="absolute inset-x-4 bottom-4 flex justify-center md:bottom-6">
                      <span className="rounded-full border border-white/15 bg-background/70 px-5 py-2 text-sm font-semibold text-foreground shadow-lg backdrop-blur md:text-base">
                        Play the demo
                      </span>
                    </span>
                  </AspectRatio>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
