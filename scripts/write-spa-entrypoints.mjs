import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const ARTICLE_SLUGS = [
  "heic-to-png-mac-batch-convert",
  "merge-pdf-mac-combine-word-images",
  "extract-audio-from-video-mac-mov-to-wav",
  "stop-using-online-file-converters",
  "open-rar-7z-mac-converter",
  "flac-to-m4a-wav-mac-converter",
  "pdf-to-jpg-split-pages-mac",
  "convert-voice-memos-wav-mac",
];

async function main() {
  const distDir = path.resolve(process.cwd(), "dist");
  const rootIndexPath = path.join(distDir, "index.html");
  const rootIndexHtml = await readFile(rootIndexPath, "utf8");

  await Promise.all(
    ARTICLE_SLUGS.map(async (slug) => {
      const outDir = path.join(distDir, slug);
      await mkdir(outDir, { recursive: true });
      await writeFile(path.join(outDir, "index.html"), rootIndexHtml, "utf8");
    }),
  );

  console.log(`Wrote SPA entrypoints for ${ARTICLE_SLUGS.length} article routes.`);
}

main().catch((error) => {
  console.error("Failed to write SPA entrypoints:", error);
  process.exitCode = 1;
});
