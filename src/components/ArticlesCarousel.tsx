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
  {
    href: "/open-rar-7z-mac-converter/",
    title: "How to Open RAR and 7Z Files on Mac (No Command Line)",
    description:
      "Open RAR, 7Z, TAR, and GZ archives on Mac, then unpack or repack to ZIP for easy sharing in one offline workflow.",
  },
  {
    href: "/flac-to-m4a-wav-mac-converter/",
    title: "How to Convert FLAC to M4A or WAV on Mac (Batch & Offline)",
    description:
      "Batch process full FLAC albums to Apple-friendly M4A or production-ready WAV, without cloud uploads.",
  },
  {
    href: "/pdf-to-jpg-split-pages-mac/",
    title: "How to Export PDF Pages to JPG, PNG, or Single PDFs on Mac",
    description:
      "Export pages as JPG, PNG, TIFF, or HEIC, and split large PDFs into separate page files with clean quality.",
  },
  {
    href: "/convert-voice-memos-wav-mac/",
    title: "How to Convert iPhone Voice Memos to WAV on Mac (Batch)",
    description:
      "Convert iPhone M4A voice memos to WAV in bulk for editing in Logic, Audacity, Premiere, and other tools.",
  },
];

const ArticlesCarousel = () => {
  return (
    <section id="learn-guides" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Learn by doing.
            <br />
            <span className="gradient-text">Real Mac workflows.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Swipe through the guides, then go straight to the details.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full px-14 md:px-16"
        >
          <CarouselContent className="-ml-0 md:-ml-4">
            {articles.map((article) => (
              <CarouselItem key={article.href} className="pl-0 md:pl-4 basis-full md:basis-1/2">
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

          <CarouselPrevious className="left-2 md:left-0 h-12 w-12 md:h-14 md:w-14 glass-card border-border/60 hover:bg-accent/50" />
          <CarouselNext className="right-2 md:right-0 h-12 w-12 md:h-14 md:w-14 glass-card border-border/60 hover:bg-accent/50" />
        </Carousel>
      </div>
    </section>
  );
};

export default ArticlesCarousel;
