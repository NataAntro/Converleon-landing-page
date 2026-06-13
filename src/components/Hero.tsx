import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ArrowRight, Check, MousePointerClick, Play, Sparkles, X } from "lucide-react";
import heroImage from "@/assets/hero-screenshot.webp";
import appIcon from "@/assets/app-icon.webp";

const Hero = () => {
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
            <span className="gradient-text">file job on Mac</span>
          </h2>
        </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 mb-5 md:mb-6 text-lg md:text-3xl font-semibold">
            <div className="glass-card px-6 py-3 rounded-2xl flex items-center gap-2 w-full max-w-sm md:w-auto md:max-w-none justify-center">
              <Sparkles className="h-5 w-5 md:h-6 md:w-6 text-primary" />
              <span>One Drop</span>
            </div>
            <ArrowRight className="h-6 w-6 md:h-8 md:w-8 text-primary rotate-90 md:rotate-0" />
            <div className="glass-card px-6 py-3 rounded-2xl flex items-center gap-2 w-full max-w-sm md:w-auto md:max-w-none justify-center">
              <MousePointerClick className="h-5 w-5 md:h-6 md:w-6 text-primary" />
              <span>One Tap</span>
            </div>
            <ArrowRight className="h-6 w-6 md:h-8 md:w-8 text-primary rotate-90 md:rotate-0" />
            <div className="glass-card px-6 py-3 rounded-2xl flex items-center gap-2 w-full max-w-sm md:w-auto md:max-w-none justify-center">
              <Check className="h-5 w-5 md:h-6 md:w-6 text-primary" />
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
        
        <Dialog>
          <div className="relative max-w-5xl mx-auto animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="mb-4 text-center md:mb-6">
              <h3 className="text-2xl font-bold md:text-4xl">Watch Converleon in action</h3>
              <p className="mx-auto mt-2 max-w-2xl text-sm text-muted-foreground md:text-base">
                A quick look at the drop, choose, convert workflow.
              </p>
            </div>
            <DialogTrigger asChild>
              <button
                type="button"
                className="group relative block w-full rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-label="Play the Converleon product demo"
              >
                <span className="glass-card block rounded-3xl p-3 shadow-2xl md:p-4">
                  <span className="relative block overflow-hidden rounded-2xl">
                    <img
                      src={heroImage}
                      alt="Converleon app interface showing file conversion workflow"
                      width={1920}
                      height={1200}
                      className="w-full h-auto transition duration-500 group-hover:scale-[1.01]"
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
                  </span>
                </span>
              </button>
            </DialogTrigger>
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/10 to-transparent pointer-events-none rounded-3xl" />
          </div>
          <DialogContent className="max-w-4xl glass-card border-0 [&>button]:hidden">
            <DialogTitle className="sr-only">How Converleon works</DialogTitle>
            <DialogDescription className="sr-only">
              A short product video showing the Converleon drag-and-drop conversion workflow.
            </DialogDescription>
            <div className="flex justify-end">
              <DialogClose asChild>
                <Button
                  size="icon"
                  variant="outline"
                  className="h-10 w-10 rounded-full border bg-background/80 shadow-md hover:bg-accent"
                >
                  <X className="h-4 w-4" />
                  <span className="sr-only">Close video</span>
                </Button>
              </DialogClose>
            </div>
            <AspectRatio ratio={16 / 9}>
              <iframe
                src="https://www.youtube-nocookie.com/embed/aXsZbqFQUNw"
                title="How Converleon works"
                className="h-full w-full rounded-lg border"
                allow="autoplay; encrypted-media; picture-in-picture; web-share"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
                allowFullScreen
              />
            </AspectRatio>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Hero;
