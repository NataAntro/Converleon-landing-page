import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const articles = [
  {
    href: "/heic-to-png-mac-batch-convert/",
    title: "HEIC to PNG on Mac: Batch Convert iPhone Photos (Offline & Fast)",
    description:
      "Convert a folder of iPhone HEIC photos into shareable PNG or JPG files in two clicks, fully offline on macOS.",
  },
  {
    href: "/merge-pdf-mac-combine-word-images/",
    title: "Merge PDF on Mac: Combine Word, Images & PDF Files",
    description:
      "Combine DOCX, JPG/PNG, and PDF files into one clean PDF without cloud uploads or manual intermediate conversion.",
  },
  {
    href: "/extract-audio-from-video-mac-mov-to-wav/",
    title: "Extract Audio from Video on Mac: MOV to WAV & M4A (No Quality Loss)",
    description:
      "Pull high-quality audio tracks from MOV and MP4 files for editing, podcast prep, or quick sharing on Apple devices.",
  },
  {
    href: "/stop-using-online-file-converters/",
    title: "Why You Should Stop Using Online File Converters",
    description:
      "Learn why local conversion is faster and safer for contracts, reports, and other sensitive files on Mac.",
  },
];

const ArticlesCarousel = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Learn by doing.
            <br />
            <span className="gradient-text">Real Mac workflows.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Swipe through practical guides and open any article in one click.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {articles.map((article) => (
              <CarouselItem
                key={article.href}
                className="basis-[92%] sm:basis-[72%] lg:basis-[52%] xl:basis-[45%]"
              >
                <article className="glass-card rounded-2xl p-6 md:p-8 h-full border border-border/60 transition-transform duration-300 hover:-translate-y-1">
                  <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Article</p>
                  <h3 className="text-xl md:text-2xl font-bold leading-tight mb-4">{article.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{article.description}</p>
                  <a
                    href={article.href}
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "glass-card border-border/60 hover:bg-accent/50",
                    )}
                  >
                    Read article
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="left-2 md:-left-4 h-10 w-10 glass-card border-border/60 hover:bg-accent/50" />
          <CarouselNext className="right-2 md:-right-4 h-10 w-10 glass-card border-border/60 hover:bg-accent/50" />
        </Carousel>
      </div>
    </section>
  );
};

export default ArticlesCarousel;
