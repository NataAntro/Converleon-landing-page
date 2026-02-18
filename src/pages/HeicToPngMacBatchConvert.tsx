import { useEffect } from "react";

import Footer from "@/components/Footer";
import ArticleBackLink from "@/components/ArticleBackLink";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { buttonVariants } from "@/components/ui/button";
import articleImage from "@/assets/articles/article1.png";
import { cn } from "@/lib/utils";

const PAGE_TITLE = "HEIC to PNG on Mac: Batch Convert iPhone Photos Fast";
const PAGE_DESCRIPTION =
  "Convert HEIC to PNG or JPG on macOS in seconds. Secure, offline batch converter for iPhone photos. No cloud uploads, no file limits.";
const APP_STORE_URL = "https://apps.apple.com/app/converleon/id6751464821";

const HeicToPngMacBatchConvert = () => {
  useEffect(() => {
    const previousTitle = document.title;
    const existingDescription = document.querySelector('meta[name="description"]');
    const previousDescription = existingDescription?.getAttribute("content") ?? null;

    document.title = PAGE_TITLE;

    let descriptionTag = existingDescription;
    if (!descriptionTag) {
      descriptionTag = document.createElement("meta");
      descriptionTag.setAttribute("name", "description");
      document.head.appendChild(descriptionTag);
    }
    descriptionTag.setAttribute("content", PAGE_DESCRIPTION);

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
  }, []);

  return (
    <div className="min-h-screen">
      <main className="px-4 py-16 md:py-20">
        <div className="mx-auto max-w-4xl mb-4">
          <ArticleBackLink />
        </div>
        <article className="mx-auto max-w-4xl glass-card rounded-3xl p-6 md:p-10 lg:p-12 space-y-8">
          <header className="space-y-5">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              HEIC to PNG on Mac: Batch Convert iPhone Photos (Offline & Fast)
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              If you moved iPhone photos to your Mac and now those HEIC files will not upload to a website, you are
              not alone. Many forms and editors still reject HEIC even though macOS previews it normally. If you need a
              fast HEIC to PNG Mac workflow, the quickest fix is to convert your photos in one batch selection instead
              of exporting each image one by one in Preview. Converleon lets you convert HEIC to PNG on Mac in seconds,
              offline, so your photos stay on-device. This guide shows exactly how to batch convert iPhone photos with
              a simple Drop -&gt; Click -&gt; Done flow.
            </p>
          </header>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold">How to Batch Convert HEIC to PNG on Mac Without Quality Loss</h2>
            <p className="text-muted-foreground leading-relaxed">
              You do not need to open every image manually. With one batch action, you can generate PNG or JPG outputs
              from a large set of selected files and keep your workflow fast.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold">Why HEIC Files Often Fail to Upload</h2>
            <p className="text-muted-foreground leading-relaxed">
              HEIC is efficient for storage, but many upload tools, registration forms, and legacy editors still expect
              PNG or JPG. That mismatch is why iPhone photos can look fine on your Mac but fail during upload.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold">What You Need</h2>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li>A Mac running macOS 13.5 or later.</li>
              <li>Converleon installed from the App Store.</li>
              <li>A folder containing your HEIC images.</li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold">Step-by-Step Guide</h2>
            <p className="text-muted-foreground leading-relaxed">Converleon is designed for this job and supports 1, 5, or 500 files at once.</p>
            <h3 className="text-xl md:text-2xl font-semibold">Batch convert HEIC in 2 clicks</h3>

            <ol className="list-decimal pl-6 space-y-6 text-muted-foreground">
              <li className="space-y-3">
                <h4 className="text-lg font-semibold text-foreground">Drop your files</h4>
                <p className="leading-relaxed">
                  Open Finder, select the HEIC files you want to convert (you can multi-select hundreds), then drag and
                  drop the selection onto the Converleon icon at the top of the app. This triggers the format bubble.
                </p>
                <figure className="space-y-2">
                  <img
                    src={articleImage}
                    alt="Batch converting multiple HEIC images to PNG in Converleon on macOS."
                    className="w-full rounded-2xl border border-border/60"
                  />
                  <figcaption className="text-sm text-muted-foreground">
                    Converleon processing multiple HEIC images in one batch.
                  </figcaption>
                </figure>
              </li>

              <li className="space-y-3">
                <h4 className="text-lg font-semibold text-foreground">Click your format</h4>
                <p className="leading-relaxed">
                  In the bubble, choose PNG (or JPG). Converleon automatically recognizes you are working with images.
                </p>
              </li>

              <li className="space-y-3">
                <h4 className="text-lg font-semibold text-foreground">Done</h4>
                <p className="leading-relaxed">
                  Conversion runs instantly on your Mac. The new PNG files appear in the same folder as the originals,
                  or in your chosen output folder.
                </p>
              </li>
            </ol>

            <Alert className="glass-card border-border/60">
              <AlertTitle>Pro Tip</AlertTitle>
              <AlertDescription>
                Converleon uses Smart mixed drops. If you accidentally include a music file with your photos, it safely
                ignores the incompatible item and converts only the images.
              </AlertDescription>
            </Alert>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold">Common Mistakes</h2>
            <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
              <li>
                <span className="font-semibold text-foreground">Using online converters:</span> Uploading personal
                iPhone photos to random web tools can create privacy risk. Converleon works 100% offline.
              </li>
              <li>
                <span className="font-semibold text-foreground">Losing quality through repeated compression:</span>{" "}
                Converting HEIC to PNG preserves visual quality with a lossless image format.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold">FAQ</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold">Can I convert HEIC to JPG instead?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Yes. Converleon supports HEIC to JPG, PNG, BMP, TIFF, and PDF conversions.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Does this remove geolocation data?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The conversion creates a new file. Visual quality stays intact, while the file format structure changes.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl md:text-3xl font-semibold">Conclusion</h2>
            <p className="text-muted-foreground leading-relaxed">
              Managing iPhone photos on macOS should not be a chore. With Converleon, the process is simple: Drop -&gt;
              Click -&gt; Done. It is a safe way to batch convert iPhone photos into shareable formats without uploading
              your memories to the cloud.
            </p>
            <div>
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ size: "lg" }), "px-8 py-6 text-base")}
              >
                Download Converleon for Mac
              </a>
              <p className="mt-3 text-sm text-muted-foreground">(Batch convert iPhone photos instantly. 100% offline.)</p>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default HeicToPngMacBatchConvert;
