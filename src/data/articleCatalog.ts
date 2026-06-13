import { articleSources, legacyArticleSlugAliases } from "@/data/articles";

type ArticleMeta = {
  title: string;
  meta_description: string;
  slug: string;
  category: string;
  date_published: string;
  date_modified: string;
};

export type ArticleBlock =
  | { type: "heading"; level: 1 | 2 | 3; text: string }
  | { type: "paragraph"; text: string }
  | { type: "unordered-list"; items: string[] }
  | { type: "ordered-list"; items: string[] }
  | { type: "figure"; alt: string; caption: string }
  | { type: "alert"; title: string; description: string }
  | { type: "cta"; label: string; description: string };

export type Article = ArticleMeta & {
  image: string;
  imageWidth: number;
  imageHeight: number;
  blocks: ArticleBlock[];
};

const stopPatterns = [/^#{1,3}\s+/, /^-\s+/, /^\d+\.\s+/, /^>\s?/, /^<figure>/];

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
      const value = line.slice(separatorIndex + 1).trim().replace(/^"|"$/g, "");

      if (
        key === "title" ||
        key === "meta_description" ||
        key === "slug" ||
        key === "category" ||
        key === "date_published" ||
        key === "date_modified"
      ) {
        acc[key] = value;
      }

      return acc;
    },
    { title: "", meta_description: "", slug: "", category: "", date_published: "", date_modified: "" },
  );

  return { meta, body: markdown.slice(match[0].length) };
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
    return { type: "alert", title: alertMatch[1], description: alertMatch[2] };
  }

  const ctaMatch = text.match(/^\*\*\[([^\]]+)\]\(#\)\*\*\s+[—-]\s+(.+)$/);
  if (ctaMatch) {
    return { type: "cta", label: ctaMatch[1], description: ctaMatch[2] };
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
      blocks.push({ type: "heading", level: heading[1].length as 1 | 2 | 3, text: heading[2] });
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

export const articles: Article[] = articleSources.map(({ markdown, image, imageWidth, imageHeight }) => {
  const { meta, body } = parseFrontmatter(markdown);
  return { ...meta, image, imageWidth, imageHeight, blocks: parseBlocks(body) };
});

export const articleBySlug = articles.reduce<Record<string, Article>>((acc, article) => {
  acc[article.slug] = article;
  return acc;
}, {});

export function resolveArticleSlug(slug: string | undefined) {
  if (!slug) return undefined;
  return legacyArticleSlugAliases[slug] ?? slug;
}
