import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

import Footer from "@/components/Footer";
import { articles, type Article } from "@/data/articleCatalog";
import { breadcrumbSchema, Seo } from "@/lib/seo";

const GUIDES_TITLE = "Mac File Conversion Guides | Converleon";
const GUIDES_DESCRIPTION =
  "Practical guides for converting images, audio, video, documents, PDFs, and archives offline on Mac.";

const CATEGORY_ORDER = [
  "Images",
  "Audio & Video",
  "PDFs & Documents",
  "Media Compression",
  "Archives",
  "Privacy & Offline",
  "Guides",
] as const;

const getCategoryId = (category: string) =>
  `category-${category
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")}`;

const GuideCard = ({ article, compact = false }: { article: Article; compact?: boolean }) => (
  <article className={`glass-card border border-border/60 ${compact ? "rounded-xl p-4" : "rounded-2xl p-6"}`}>
    <h3 className={`${compact ? "mb-2 text-base" : "mb-3 text-xl"} font-bold leading-tight`}>
      <Link to={`/blog/${article.slug}/`} className="hover:text-primary">
        {article.title}
      </Link>
    </h3>
    <p className={`${compact ? "mb-3 text-sm" : "mb-5"} text-muted-foreground leading-relaxed`}>
      {article.meta_description}
    </p>
    <Link to={`/blog/${article.slug}/`} className="font-medium text-primary hover:underline">
      Read guide
    </Link>
  </article>
);

const Guides = () => {
  const articleCategories = [...new Set(articles.map((article) => article.category))];
  const categories = [
    ...CATEGORY_ORDER.filter((category) => articleCategories.includes(category)),
    ...articleCategories.filter((category) => !CATEGORY_ORDER.includes(category as (typeof CATEGORY_ORDER)[number])),
  ];
  const articlesByCategory = categories.map((category) => ({
    category,
    categoryId: getCategoryId(category),
    articles: articles.filter((article) => article.category === category),
  }));
  const [openCategory, setOpenCategory] = useState(categories[0] ?? "");

  const selectCategory = (category: string, categoryId: string) => {
    setOpenCategory(category);
    window.requestAnimationFrame(() => {
      document.getElementById(categoryId)?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
        block: "start",
      });
    });
  };

  return (
    <div className="min-h-screen">
      <Seo
        title={GUIDES_TITLE}
        description={GUIDES_DESCRIPTION}
        path="/guides/"
        jsonLd={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides/" },
        ])}
      />
      <main className="px-4 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span aria-current="page" className="text-foreground">Guides</span>
          </nav>

          <header className="mb-14 max-w-3xl">
            <h1 className="mb-5 text-4xl md:text-6xl font-bold">Mac file conversion guides</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Clear, offline workflows for the file jobs that regularly slow Mac users down.
            </p>
          </header>

          <nav aria-label="Guide categories" className="mb-8 flex flex-wrap gap-2 md:hidden">
            {articlesByCategory.map(({ category, categoryId, articles: categoryArticles }) => (
              <button
                key={category}
                type="button"
                onClick={() => selectCategory(category, categoryId)}
                aria-pressed={openCategory === category}
                className="rounded-full border border-border/70 bg-background/20 px-3 py-2 text-left text-sm font-medium text-foreground/90 aria-pressed:border-primary/70 aria-pressed:bg-primary/15"
              >
                {category} <span className="text-muted-foreground">({categoryArticles.length})</span>
              </button>
            ))}
          </nav>

          <div className="space-y-4 md:hidden">
            {articlesByCategory.map(({ category, categoryId, articles: categoryArticles }) => {
              const isOpen = openCategory === category;
              const buttonId = `${categoryId}-button`;
              const panelId = `${categoryId}-guides`;

              return (
                <section
                  key={category}
                  id={categoryId}
                  className="scroll-mt-4 glass-card rounded-2xl border border-border/60"
                  aria-labelledby={buttonId}
                >
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenCategory(category)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span>
                      <span className="block text-lg font-bold">{category}</span>
                      <span className="text-sm text-muted-foreground">{categoryArticles.length} guides</span>
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div id={panelId} hidden={!isOpen} className="space-y-3 border-t border-border/60 px-4 py-4">
                    {categoryArticles.map((article) => (
                      <GuideCard key={article.slug} article={article} compact />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>

          <div className="hidden space-y-16 md:block">
            {articlesByCategory.map(({ category, categoryId, articles: categoryArticles }) => {
              const desktopCategoryId = `${categoryId}-desktop`;

              return (
                <section key={category} aria-labelledby={desktopCategoryId}>
                  <h2 id={desktopCategoryId} className="mb-6 text-2xl md:text-3xl font-bold">
                    {category}
                  </h2>
                  <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {categoryArticles.map((article) => (
                      <GuideCard key={article.slug} article={article} />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Guides;
