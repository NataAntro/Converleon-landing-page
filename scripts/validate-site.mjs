import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";

const distDir = path.resolve("dist");
const failures = [];
const indexableTitles = new Map();
const indexableCanonicals = new Map();

function fail(message) {
  failures.push(message);
}

function collectHtmlFiles(directory) {
  return readdirSync(directory).flatMap((name) => {
    const filePath = path.join(directory, name);
    return statSync(filePath).isDirectory()
      ? collectHtmlFiles(filePath)
      : name.endsWith(".html")
        ? [filePath]
        : [];
  });
}

if (!existsSync(path.join(distDir, "index.html"))) {
  fail("dist/index.html is missing. Run the production build first.");
} else {
  const sitemap = readFileSync(path.join(distDir, "sitemap.xml"), "utf8");
  const sitemapPaths = [...sitemap.matchAll(/<loc>https:\/\/www\.converleon\.com([^<]*)<\/loc>/g)].map((match) => match[1]);

  for (const urlPath of sitemapPaths) {
    const filePath =
      urlPath === "/"
        ? path.join(distDir, "index.html")
        : urlPath.endsWith("/")
          ? path.join(distDir, urlPath, "index.html")
          : path.join(distDir, urlPath);

    if (!existsSync(filePath)) {
      fail(`Sitemap URL has no generated file: ${urlPath}`);
    }
  }

  for (const filePath of collectHtmlFiles(distDir)) {
    const html = readFileSync(filePath, "utf8");
    const fileName = path.basename(filePath);
    const isGoogleSiteVerification = /^google[a-z0-9]+\.html$/.test(fileName);

    if (isGoogleSiteVerification) {
      const expectedVerification = `google-site-verification: ${fileName}`;
      if (html.trim() !== expectedVerification) {
        fail(`${filePath} has invalid Google site verification content.`);
      }
      continue;
    }

    const isRedirect = html.includes('content="noindex, follow"') && html.includes("window.location.replace");
    const is404 = filePath.endsWith(`${path.sep}404.html`);
    const isStandalonePolicy = filePath.endsWith(`${path.sep}privacy-policy.html`);
    const needsSecurityMeta = !isRedirect && !is404 && !isStandalonePolicy;
    const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
    const canonical = html.match(/<link rel="canonical" href="([^"]+)">/)?.[1];

    if (!title) fail(`${filePath} has no title.`);
    if (!isRedirect && !is404 && !/<meta name="description" content="[^"]+">/.test(html)) {
      fail(`${filePath} has no meta description.`);
    }
    if (!isRedirect && !is404 && !canonical) {
      fail(`${filePath} has no canonical URL.`);
    }
    if (needsSecurityMeta && !/<meta http-equiv="Content-Security-Policy" content="[^"]+">/.test(html)) {
      fail(`${filePath} has no Content-Security-Policy meta tag.`);
    }
    if (needsSecurityMeta && !/<meta name="referrer" content="strict-origin-when-cross-origin">/.test(html)) {
      fail(`${filePath} has no strict referrer policy meta tag.`);
    }
    if (needsSecurityMeta && html.includes('class="seo-static-page"') && !html.includes('data-converleon-seo="static-fallback-guard"')) {
      fail(`${filePath} has visible SEO fallback content without the static fallback guard.`);
    }

    if (!isRedirect && !is404 && title && canonical) {
      if (indexableTitles.has(title)) fail(`${filePath} duplicates the title used by ${indexableTitles.get(title)}.`);
      if (indexableCanonicals.has(canonical)) {
        fail(`${filePath} duplicates the canonical URL used by ${indexableCanonicals.get(canonical)}.`);
      }
      indexableTitles.set(title, filePath);
      indexableCanonicals.set(canonical, filePath);
    }

    for (const match of html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
      try {
        JSON.parse(match[1]);
      } catch {
        fail(`${filePath} contains invalid JSON-LD.`);
      }
    }
  }
}

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exitCode = 1;
} else {
  console.log("Generated site validation passed.");
}
