import { Link } from "react-router-dom";

import Footer from "@/components/Footer";
import { articles } from "@/data/articleCatalog";
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

const Guides = () => {
  const articleCategories = [...new Set(articles.map((article) => article.category))];
  const categories = [
    ...CATEGORY_ORDER.filter((category) => articleCategories.includes(category)),
    ...articleCategories.filter((category) => !CATEGORY_ORDER.includes(category as (typeof CATEGORY_ORDER)[number])),
  ];

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

          <div className="space-y-16">
            {categories.map((category) => (
              <section key={category} aria-labelledby={`category-${category.toLowerCase().replace(/\s+/g, "-")}`}>
                <h2
                  id={`category-${category.toLowerCase().replace(/\s+/g, "-")}`}
                  className="mb-6 text-2xl md:text-3xl font-bold"
                >
                  {category}
                </h2>
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {articles
                    .filter((article) => article.category === category)
                    .map((article) => (
                      <article key={article.slug} className="glass-card rounded-2xl border border-border/60 p-6">
                        <h3 className="mb-3 text-xl font-bold leading-tight">
                          <Link to={`/blog/${article.slug}/`} className="hover:text-primary">
                            {article.title}
                          </Link>
                        </h3>
                        <p className="mb-5 text-muted-foreground leading-relaxed">{article.meta_description}</p>
                        <Link to={`/blog/${article.slug}/`} className="font-medium text-primary hover:underline">
                          Read guide
                        </Link>
                      </article>
                    ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Guides;
