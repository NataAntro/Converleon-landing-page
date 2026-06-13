import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";

const SITE_URL = "https://www.converleon.com";
const APP_STORE_URL = "https://apps.apple.com/app/converleon/id6751464821";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.webp`;
const rootDir = process.cwd();
const distDir = path.resolve(rootDir, "dist");
const contentDir = path.resolve(rootDir, "src/content/articles");
const CONTENT_SECURITY_POLICY = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "script-src 'self' https://www.googletagmanager.com",
  "connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://stats.g.doubleclick.net",
  "img-src 'self' data: https://www.google-analytics.com https://www.googletagmanager.com https://stats.g.doubleclick.net",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  "frame-src https://www.youtube-nocookie.com",
  "upgrade-insecure-requests",
].join("; ");
const STATIC_FALLBACK_GUARD = `<style data-converleon-seo="static-fallback-guard">#root > .seo-static-page{visibility:hidden}</style>
<noscript><style>#root > .seo-static-page{visibility:visible}</style></noscript>`;
const CATEGORY_ORDER = [
  "Images",
  "Audio & Video",
  "PDFs & Documents",
  "Media Compression",
  "Archives",
  "Privacy & Offline",
  "Guides",
];

const legacyAliases = {
  "heic-to-png-mac-batch-convert": "heic-to-png-mac",
  "merge-pdf-mac-combine-word-images": "merge-pdf-mac",
  "extract-audio-from-video-mac-mov-to-wav": "extract-audio-from-video-mac",
  "stop-using-online-file-converters": "stop-using-online-converters",
  "open-rar-7z-mac-converter": "open-rar-7z-mac",
  "flac-to-m4a-wav-mac-converter": "flac-to-m4a-wav-mac",
  "pdf-to-jpg-split-pages-mac": "pdf-to-jpg-png-mac",
  "convert-voice-memos-wav-mac": "voice-memos-to-wav-mac",
};

const articleImageNames = {
  "heic-to-png-mac": "article1",
  "heic-to-jpg-mac": "article1",
  "heic-wont-open-mac": "article1",
  "heic-vs-jpg-vs-png": "batch-convert",
  "png-to-jpg-mac": "batch-convert",
  "merge-pdf-mac": "article2",
  "images-to-pdf-mac": "article2",
  "extract-audio-from-video-mac": "article3",
  "stop-using-online-converters": "article4",
  "open-rar-7z-mac": "article_rar_7z",
  "flac-to-m4a-wav-mac": "article_flac",
  "m4a-to-wav-mac": "article_flac",
  "pdf-to-jpg-png-mac": "article_pdf_export",
  "voice-memos-to-wav-mac": "article_voice_memos",
  "remove-background-mac": "removebg-enhance",
  "transparent-background-mac": "removebg-enhance",
  "compress-files-mac": "compress-media",
  "reduce-photo-size-mac": "compress-media",
  "enhance-photos-mac": "removebg-enhance",
  "webp-heif-converter-mac": "batch-convert",
  "mov-to-mp4-mac": "video-audio",
  "webp-to-png-mac": "batch-convert",
  "html-to-pdf-mac": "article2",
  "compress-video-mac": "compress-media",
  "best-offline-file-converter-mac": "hero-screenshot",
};

function escapeHtml(value = "") {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function escapeJson(value) {
  return JSON.stringify(value).replaceAll("<", "\\u003c");
}

function renderInline(value) {
  return escapeHtml(value)
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, href) => {
      const target = href === "#" ? APP_STORE_URL : href;
      return `<a href="${escapeHtml(target)}">${label}</a>`;
    });
}

function parseArticle(markdown) {
  const match = markdown.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!match) throw new Error("Article is missing frontmatter.");

  const meta = Object.fromEntries(
    match[1].split("\n").map((line) => {
      const separator = line.indexOf(":");
      return [
        line.slice(0, separator).trim(),
        line.slice(separator + 1).trim().replace(/^"|"$/g, ""),
      ];
    }),
  );

  return { ...meta, body: markdown.slice(match[0].length) };
}

function renderMarkdown(article, imagePath) {
  const lines = article.body.split("\n");
  const output = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index].trim();
    if (!line) {
      index += 1;
      continue;
    }

    const heading = line.match(/^(#{1,3})\s+(.+)$/);
    if (heading) {
      const level = heading[1].length;
      output.push(`<h${level}>${renderInline(heading[2])}</h${level}>`);
      index += 1;
      continue;
    }

    if (line.startsWith("<figure>")) {
      const figureLines = [];
      while (index < lines.length) {
        figureLines.push(lines[index]);
        if (lines[index].includes("</figure>")) break;
        index += 1;
      }
      const figure = figureLines.join("\n");
      const alt = figure.match(/alt="([^"]*)"/)?.[1] ?? article.title;
      const caption = figure.match(/<figcaption>([\s\S]*?)<\/figcaption>/)?.[1].trim() ?? "";
      output.push(
        `<figure><img src="${imagePath}" alt="${escapeHtml(alt)}" loading="lazy"><figcaption>${renderInline(caption)}</figcaption></figure>`,
      );
      index += 1;
      continue;
    }

    if (line.startsWith(">")) {
      const parts = [];
      while (index < lines.length && lines[index].trim().startsWith(">")) {
        parts.push(lines[index].trim().replace(/^>\s?/, ""));
        index += 1;
      }
      output.push(`<blockquote>${renderInline(parts.join(" "))}</blockquote>`);
      continue;
    }

    if (line.startsWith("- ")) {
      const items = [];
      while (index < lines.length && lines[index].trim().startsWith("- ")) {
        items.push(`<li>${renderInline(lines[index].trim().replace(/^-\s+/, ""))}</li>`);
        index += 1;
      }
      output.push(`<ul>${items.join("")}</ul>`);
      continue;
    }

    if (/^\d+\.\s+/.test(line)) {
      const items = [];
      while (index < lines.length && /^\d+\.\s+/.test(lines[index].trim())) {
        items.push(`<li>${renderInline(lines[index].trim().replace(/^\d+\.\s+/, ""))}</li>`);
        index += 1;
      }
      output.push(`<ol>${items.join("")}</ol>`);
      continue;
    }

    const paragraph = [];
    while (index < lines.length) {
      const current = lines[index].trim();
      if (!current) break;
      if (
        paragraph.length > 0 &&
        (/^#{1,3}\s+/.test(current) ||
          current.startsWith("- ") ||
          /^\d+\.\s+/.test(current) ||
          current.startsWith(">") ||
          current.startsWith("<figure>"))
      ) {
        break;
      }
      paragraph.push(current);
      index += 1;
    }
    output.push(`<p>${renderInline(paragraph.join(" "))}</p>`);
  }

  return output.join("\n");
}

function replaceMeta(html, selectorPattern, replacement) {
  return html.match(selectorPattern) ? html.replace(selectorPattern, replacement) : html.replace("</head>", `${replacement}\n</head>`);
}

function withSecurityHead(html) {
  return html
    .replace(/<meta http-equiv="Content-Security-Policy"[^>]*>\n?/g, "")
    .replace(/<meta name="referrer"[^>]*>\n?/g, "")
    .replace(/<style data-converleon-seo="static-fallback-guard">[\s\S]*?<\/style>\n?<noscript>[\s\S]*?<\/noscript>\n?/g, "")
    .replace(
      "</head>",
      `<meta http-equiv="Content-Security-Policy" content="${escapeHtml(CONTENT_SECURITY_POLICY)}">
<meta name="referrer" content="strict-origin-when-cross-origin">
${STATIC_FALLBACK_GUARD}
</head>`,
    );
}

function withHead(html, { title, description, canonical, image = DEFAULT_IMAGE, type = "website", robots = "index, follow, max-image-preview:large", schemas = [] }) {
  let output = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(title)}</title>`);
  output = replaceMeta(output, /<meta name="description"[^>]*>/, `<meta name="description" content="${escapeHtml(description)}">`);
  output = replaceMeta(output, /<meta name="robots"[^>]*>/, `<meta name="robots" content="${escapeHtml(robots)}">`);
  output = replaceMeta(output, /<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${canonical}">`);
  output = replaceMeta(output, /<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${escapeHtml(title)}">`);
  output = replaceMeta(output, /<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${escapeHtml(description)}">`);
  output = replaceMeta(output, /<meta property="og:type"[^>]*>/, `<meta property="og:type" content="${type}">`);
  output = replaceMeta(output, /<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${canonical}">`);
  output = replaceMeta(output, /<meta property="og:image"[^>]*>/, `<meta property="og:image" content="${image}">`);
  output = replaceMeta(output, /<meta name="twitter:title"[^>]*>/, `<meta name="twitter:title" content="${escapeHtml(title)}">`);
  output = replaceMeta(output, /<meta name="twitter:description"[^>]*>/, `<meta name="twitter:description" content="${escapeHtml(description)}">`);
  output = replaceMeta(output, /<meta name="twitter:image"[^>]*>/, `<meta name="twitter:image" content="${image}">`);
  output = output.replace(/<script[^>]*data-converleon-seo="json-ld"[^>]*>[\s\S]*?<\/script>\n?/g, "");

  const jsonLd = schemas
    .map((schema) => `<script type="application/ld+json" data-converleon-seo="json-ld">${escapeJson(schema)}</script>`)
    .join("\n");

  return withSecurityHead(output.replace("</head>", `${jsonLd}\n</head>`));
}

function withStaticRoot(html, content) {
  return html.replace('<div id="root"></div>', `<div id="root">${content}</div>`);
}

function cleanBuiltIndex(html) {
  return html
    .replace(/<script[^>]*data-converleon-seo="json-ld"[^>]*>[\s\S]*?<\/script>\n?/g, "")
    .replace(/<body>[\s\S]*<\/body>/, '<body>\n    <div id="root"></div>\n  </body>');
}

async function writeRoute(route, html) {
  const outDir = path.join(distDir, route);
  await mkdir(outDir, { recursive: true });
  await writeFile(path.join(outDir, "index.html"), html, "utf8");
}

function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

function articleSchema(article, image) {
  const articleUrl = `${SITE_URL}/blog/${article.slug}/`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.meta_description,
    image,
    datePublished: article.date_published,
    dateModified: article.date_modified,
    author: { "@type": "Organization", name: "Converleon", url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: "Converleon",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/apple-touch-icon.png` },
    },
    mainEntityOfPage: articleUrl,
  };
}

async function main() {
  const rootIndexPath = path.join(distDir, "index.html");
  const rootIndexHtml = cleanBuiltIndex(await readFile(rootIndexPath, "utf8"));
  const assetFiles = await readdir(path.join(distDir, "assets"));
  const articleFiles = (await readdir(contentDir)).filter((file) => file.endsWith(".md")).sort();
  const articles = await Promise.all(
    articleFiles.map(async (file) => parseArticle(await readFile(path.join(contentDir, file), "utf8"))),
  );

  for (const article of articles) {
    const imageBase = articleImageNames[article.slug];
    const imageFile = assetFiles.find((file) => file.startsWith(`${imageBase}-`) && file.endsWith(".webp"));
    const imagePath = imageFile ? `/assets/${imageFile}` : "/og-image.webp";
    const imageUrl = `${SITE_URL}${imagePath}`;
    const canonicalPath = `/blog/${article.slug}/`;
    const staticContent = `
      <main class="seo-static-page">
        <nav aria-label="Breadcrumb"><a href="/">Home</a> / <a href="/guides/">Guides</a></nav>
        <article>
          <p>${escapeHtml(article.category)}</p>
          ${renderMarkdown(article, imagePath)}
        </article>
      </main>`;

    const articleHtml = withStaticRoot(
      withHead(rootIndexHtml, {
        title: article.title,
        description: article.meta_description,
        canonical: `${SITE_URL}${canonicalPath}`,
        image: imageUrl,
        type: "article",
        schemas: [
          articleSchema(article, imageUrl),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Guides", path: "/guides/" },
            { name: article.title, path: canonicalPath },
          ]),
        ],
      }),
      staticContent,
    );
    await writeRoute(`blog/${article.slug}`, articleHtml);
  }

  const articleCategories = [...new Set(articles.map((article) => article.category))];
  const categories = [
    ...CATEGORY_ORDER.filter((category) => articleCategories.includes(category)),
    ...articleCategories.filter((category) => !CATEGORY_ORDER.includes(category)),
  ];
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Converleon",
    url: SITE_URL,
    logo: `${SITE_URL}/apple-touch-icon.png`,
    email: "converleonapp@gmail.com",
  };
  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Converleon",
    operatingSystem: "macOS 13.5 or later",
    applicationCategory: "UtilitiesApplication",
    description: "An offline Mac file converter for images, video, audio, documents, PDFs, and archives.",
    url: SITE_URL,
    downloadUrl: APP_STORE_URL,
    image: DEFAULT_IMAGE,
  };
  const homeLinks = articles
    .map((article) => `<li><a href="/blog/${article.slug}/">${escapeHtml(article.title)}</a></li>`)
    .join("");
  const homeHtml = withStaticRoot(
    withHead(rootIndexHtml, {
      title: "Offline File Converter for Mac | Converleon",
      description: "Convert images, video, audio, documents, PDFs, and archives offline on Mac. Batch-convert mixed files with no uploads or complicated setup.",
      canonical: `${SITE_URL}/`,
      schemas: [organizationSchema, softwareApplicationSchema],
    }),
    `<main class="seo-static-page">
      <h1>Converleon — Offline File Converter for Mac</h1>
      <p>Convert images, video, audio, documents, PDFs, and archives offline on Mac. Batch-convert mixed files with no uploads or complicated setup.</p>
      <p><a href="${APP_STORE_URL}">Download Converleon on the Mac App Store</a> · <a href="/guides/">Browse Mac conversion guides</a></p>
      <h2>Mac file conversion guides</h2><ul>${homeLinks}</ul>
    </main>`,
  );
  await writeFile(rootIndexPath, homeHtml, "utf8");

  const guideSections = categories
    .map(
      (category) => `
        <section>
          <h2>${escapeHtml(category)}</h2>
          <ul>${articles
            .filter((article) => article.category === category)
            .map((article) => `<li><a href="/blog/${article.slug}/">${escapeHtml(article.title)}</a></li>`)
            .join("")}</ul>
        </section>`,
    )
    .join("");
  const guidesHtml = withStaticRoot(
    withHead(rootIndexHtml, {
      title: "Mac File Conversion Guides | Converleon",
      description: "Practical guides for converting images, audio, video, documents, PDFs, and archives offline on Mac.",
      canonical: `${SITE_URL}/guides/`,
      schemas: [breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Guides", path: "/guides/" }])],
    }),
    `<main class="seo-static-page"><h1>Mac file conversion guides</h1>${guideSections}</main>`,
  );
  await writeRoute("guides", guidesHtml);

  for (const [legacySlug, currentSlug] of Object.entries(legacyAliases)) {
    const destination = `/blog/${currentSlug}/`;
    const redirectHtml = `<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<title>Page moved | Converleon</title>
<meta name="robots" content="noindex, follow">
<link rel="canonical" href="${SITE_URL}${destination}">
<meta http-equiv="refresh" content="0; url=${destination}">
<script>window.location.replace(${JSON.stringify(destination)});</script>
</head><body><p>This guide moved to <a href="${destination}">${destination}</a>.</p></body></html>`;
    await writeRoute(legacySlug, redirectHtml);
  }

  const sitemapUrls = [
    { path: "/", lastmod: "2026-06-13" },
    { path: "/guides/", lastmod: "2026-06-13" },
    { path: "/privacy-policy.html", lastmod: "2025-11-23" },
    ...articles.map((article) => ({ path: `/blog/${article.slug}/`, lastmod: article.date_modified })),
  ];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls.map((entry) => `  <url><loc>${SITE_URL}${entry.path}</loc><lastmod>${entry.lastmod}</lastmod></url>`).join("\n")}
</urlset>
`;
  await writeFile(path.join(distDir, "sitemap.xml"), sitemap, "utf8");

  console.log(`Generated SEO HTML for ${articles.length} articles, guides, legacy routes, and sitemap.`);
}

main().catch((error) => {
  console.error("Failed to generate SEO entrypoints:", error);
  process.exitCode = 1;
});
