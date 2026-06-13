import { ReactNode, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";

import Footer from "@/components/Footer";
import ArticleBackLink from "@/components/ArticleBackLink";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { buttonVariants } from "@/components/ui/button";
import { articleSources, legacyArticleSlugAliases } from "@/data/articles";
import { cn } from "@/lib/utils";

const APP_STORE_URL = "https://apps.apple.com/app/converleon/id6751464821";

type ArticleMeta = {
  title: string;
  meta_description: string;
  slug: string;
};

type Article = ArticleMeta & {
  image: string;
  blocks: ArticleBlock[];
};

type ArticleBlock =
  | { type: "heading"; level: 1 | 2 | 3; text: string }
  | { type: "paragraph"; text: string }
  | { type: "unordered-list"; items: string[] }
  | { type: "ordered-list"; items: string[] }
  | { type: "figure"; alt: string; caption: string }
  | { type: "alert"; title: string; description: string }
  | { type: "cta"; label: string; description: string };

const stopPatterns = [
  /^#{1,3}\s+/,
  /^-\s+/,
  /^\d+\.\s+/,
  /^>\s?/,
  /^<figure>/,
];

function parseFrontmatter(markdown: string) {
  const match = markdown.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!match) {
    throw new Error("Article is missing frontmatter.");
  }

  const meta = match[1].split("\n").reduce<ArticleMeta>(
    (acc, line) => {
      const separatorIndex = line.indexOf(":");
      if (separatorIndex === -1) return acc;

      const key = line.slice(0, separatorIndex).trim() as keyof ArticleMeta;
      const value = line
        .slice(separatorIndex + 1)
        .trim()
        .replace(/^"|"$/g, "");

      if (key === "title" || key === "meta_description" || key === "slug") {
        acc[key] = value;
      }

      return acc;
    },
    { title: "", meta_description: "", slug: "" },
  );

  return {
    meta,
    body: markdown.slice(match[0].length),
  };
}

function parseFigure(lines: string[]) {
  const html = lines.join("\n");
  return {
    alt: html.match(/alt="([^"]*)"/)?.[1] ?? "",
    caption: html.match(/<figcaption>([\s\S]*?)<\/figcaption>/)?.[1].trim() ?? "",
  };
}

function parseCallout(text: string): ArticleBlock | null {
  const alertMatch = text.match(/^\*\*(Tip|Managing passwords):\*\*\s+(.+)$/);
  if (alertMatch) {
    return {
      type: "alert",
      title: alertMatch[1],
      description: alertMatch[2],
    };
  }

  const ctaMatch = text.match(/^\*\*\[([^\]]+)\]\(#\)\*\*\s+[—-]\s+(.+)$/);
  if (ctaMatch) {
    return {
      type: "cta",
      label: ctaMatch[1],
      description: ctaMatch[2],
    };
  }

  return null;
}

function parseBlocks(body: string): ArticleBlock[] {
  const lines = body.split("\n");
  const blocks: ArticleBlock[] = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index].trim();

    if (!line) {
      index += 1;
      continue;
    }

    const heading = line.match(/^(#{1,3})\s+(.+)$/);
    if (heading) {
      blocks.push({
        type: "heading",
        level: heading[1].length as 1 | 2 | 3,
        text: heading[2],
      });
      index += 1;
      continue;
    }

    if (line.startsWith("<figure>")) {
      const figureLines: string[] = [];
      while (index < lines.length) {
        figureLines.push(lines[index]);
        if (lines[index].includes("</figure>")) break;
        index += 1;
      }
      blocks.push({ type: "figure", ...parseFigure(figureLines) });
      index += 1;
      continue;
    }

    if (line.startsWith(">")) {
      const quoteLines: string[] = [];
      while (index < lines.length && lines[index].trim().startsWith(">")) {
        quoteLines.push(lines[index].trim().replace(/^>\s?/, ""));
        index += 1;
      }
      const quote = quoteLines.join(" ");
      const titledQuote = quote.match(/^\*\*([^*]+):\*\*\s+(.+)$/);
      blocks.push({
        type: "alert",
        title: titledQuote?.[1] ?? "Note",
        description: titledQuote?.[2] ?? quote,
      });
      continue;
    }

    if (line.startsWith("- ")) {
      const items: string[] = [];
      while (index < lines.length && lines[index].trim().startsWith("- ")) {
        items.push(lines[index].trim().replace(/^-\s+/, ""));
        index += 1;
      }
      blocks.push({ type: "unordered-list", items });
      continue;
    }

    if (/^\d+\.\s+/.test(line)) {
      const items: string[] = [];
      while (index < lines.length && /^\d+\.\s+/.test(lines[index].trim())) {
        items.push(lines[index].trim().replace(/^\d+\.\s+/, ""));
        index += 1;
      }
      blocks.push({ type: "ordered-list", items });
      continue;
    }

    const paragraphLines: string[] = [];
    while (index < lines.length) {
      const current = lines[index].trim();
      if (!current) break;
      if (paragraphLines.length > 0 && stopPatterns.some((pattern) => pattern.test(current))) break;
      paragraphLines.push(current);
      index += 1;
    }

    const paragraph = paragraphLines.join(" ");
    blocks.push(parseCallout(paragraph) ?? { type: "paragraph", text: paragraph });
  }

  return blocks;
}

function parseArticles() {
  return articleSources.map(({ markdown, image }) => {
    const { meta, body } = parseFrontmatter(markdown);
    return {
      ...meta,
      image,
      blocks: parseBlocks(body),
    };
  });
}

export const articles = parseArticles();

export const articleBySlug = articles.reduce<Record<string, Article>>((acc, article) => {
  acc[article.slug] = article;
  return acc;
}, {});

export function resolveArticleSlug(slug: string | undefined) {
  if (!slug) return undefined;
  return legacyArticleSlugAliases[slug] ?? slug;
}

function renderInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const pattern = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    const token = match[0];

    if (token.startsWith("**")) {
      nodes.push(
        <span key={`${match.index}-strong`} className="font-semibold text-foreground">
          {token.slice(2, -2)}
        </span>,
      );
    } else if (token.startsWith("`")) {
      nodes.push(
        <code key={`${match.index}-code`} className="mx-1 rounded bg-muted px-1.5 py-0.5 text-sm text-foreground">
          {token.slice(1, -1)}
        </code>,
      );
    } else {
      const link = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (link) {
        nodes.push(
          <a key={`${match.index}-link`} href={link[2]} className="font-medium text-primary underline underline-offset-4">
            {link[1]}
          </a>,
        );
      }
    }

    lastIndex = match.index + token.length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}

function ArticleContentBlock({ block, image }: { block: ArticleBlock; image: string }) {
  switch (block.type) {
    case "heading":
      if (block.level === 1) return null;
      if (block.level === 2) {
        return <h2 className="text-2xl md:text-3xl font-semibold">{renderInline(block.text)}</h2>;
      }
      return <h3 className="text-xl md:text-2xl font-semibold">{renderInline(block.text)}</h3>;

    case "paragraph":
      return <p className="text-muted-foreground leading-relaxed">{renderInline(block.text)}</p>;

    case "unordered-list":
      return (
        <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
          {block.items.map((item) => (
            <li key={item}>{renderInline(item)}</li>
          ))}
        </ul>
      );

    case "ordered-list":
      return (
        <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
          {block.items.map((item) => (
            <li key={item}>{renderInline(item)}</li>
          ))}
        </ol>
      );

    case "figure":
      return (
        <figure className="space-y-2">
          <img src={image} alt={block.alt} className="w-full rounded-2xl border border-border/60" loading="lazy" />
          <figcaption className="text-sm text-muted-foreground">{renderInline(block.caption)}</figcaption>
        </figure>
      );

    case "alert":
      return (
        <Alert className="glass-card border-border/60">
          <AlertTitle>{renderInline(block.title)}</AlertTitle>
          <AlertDescription>{renderInline(block.description)}</AlertDescription>
        </Alert>
      );

    case "cta":
      return (
        <div>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ size: "lg" }), "px-8 py-6 text-base")}
          >
            {block.label}
          </a>
          <p className="mt-3 text-sm text-muted-foreground">{block.description}</p>
        </div>
      );

    default:
      return null;
  }
}

const ArticlePage = ({ slug: explicitSlug }: { slug?: string }) => {
  const params = useParams();
  const slug = resolveArticleSlug(explicitSlug ?? params.slug);
  const article = slug ? articleBySlug[slug] : undefined;

  const content = useMemo(() => {
    if (!article) return null;

    const titleBlock = article.blocks.find(
      (block): block is Extract<ArticleBlock, { type: "heading" }> => block.type === "heading" && block.level === 1,
    );
    const title = titleBlock?.text ?? article.title;
    const titleIndex = titleBlock ? article.blocks.indexOf(titleBlock) : -1;
    const afterTitle = article.blocks.slice(titleIndex + 1);
    const leadBlocks = afterTitle.filter((block, index) => {
      if (block.type !== "paragraph") return false;
      return afterTitle.slice(0, index).every((previous) => previous.type === "paragraph");
    });
    const bodyStartIndex = titleIndex + 1 + leadBlocks.length;
    const bodyBlocks = article.blocks.slice(bodyStartIndex);

    return { title, leadBlocks, bodyBlocks };
  }, [article]);

  useEffect(() => {
    if (!article) return;

    const previousTitle = document.title;
    const existingDescription = document.querySelector('meta[name="description"]');
    const previousDescription = existingDescription?.getAttribute("content") ?? null;

    document.title = article.title;

    let descriptionTag = existingDescription;
    if (!descriptionTag) {
      descriptionTag = document.createElement("meta");
      descriptionTag.setAttribute("name", "description");
      document.head.appendChild(descriptionTag);
    }

    descriptionTag.setAttribute("content", article.meta_description);

    return () => {
      document.title = previousTitle;

      if (descriptionTag) {
        if (previousDescription === null) {
          descriptionTag.removeAttribute("content");
        } else {
          descriptionTag.setAttribute("content", previousDescription);
        }
      }
    };
  }, [article]);

  if (!article || !content) {
    return (
      <div className="min-h-screen">
        <main className="px-4 py-16 md:py-20">
          <div className="mx-auto max-w-4xl mb-4">
            <ArticleBackLink />
          </div>
          <article className="mx-auto max-w-4xl glass-card rounded-3xl p-6 md:p-10 lg:p-12">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">Article not found</h1>
          </article>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <main className="px-4 py-16 md:py-20">
        <div className="mx-auto max-w-4xl mb-4">
          <ArticleBackLink />
        </div>
        <article className="mx-auto max-w-4xl glass-card rounded-3xl p-6 md:p-10 lg:p-12 space-y-8">
          <header className="space-y-5">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">{renderInline(content.title)}</h1>
            {content.leadBlocks.map((block) => (
              <p key={block.text} className="text-lg text-muted-foreground leading-relaxed">
                {renderInline(block.text)}
              </p>
            ))}
          </header>

          {content.bodyBlocks.map((block, index) => (
            <ArticleContentBlock key={`${block.type}-${index}`} block={block} image={article.image} />
          ))}
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default ArticlePage;
