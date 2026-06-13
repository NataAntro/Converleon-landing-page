import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { articles } from "@/data/articleCatalog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ArticlesCarousel = () => {
  return (
    <section id="learn-guides" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Real Mac workflows, start to finish
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Browse the guides, then jump straight into the steps.
          </p>
          <Link
            to="/guides/"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "mt-5 glass-card border-border/60 text-primary hover:bg-accent/50",
            )}
          >
            View all guides
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full px-14 md:px-16"
        >
          <CarouselContent className="-ml-0 md:-ml-4 pt-2">
            {articles.map((article) => (
              <CarouselItem key={article.slug} className="pl-0 md:pl-4 basis-full md:basis-1/2">
                <article className="glass-card rounded-2xl p-6 md:p-8 h-full border border-border/60 transition-transform duration-300 hover:-translate-y-1">
                  <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Article</p>
                  <h3 className="text-xl md:text-2xl font-bold leading-tight mb-4">{article.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{article.meta_description}</p>
                  <a
                    href={`/blog/${article.slug}/`}
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
