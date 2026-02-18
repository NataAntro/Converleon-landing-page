import { useEffect } from "react";

import Footer from "@/components/Footer";
import ArticleBackLink from "@/components/ArticleBackLink";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { buttonVariants } from "@/components/ui/button";
import articleImage from "@/assets/articles/article_pdf_export.png";
import { cn } from "@/lib/utils";

const PAGE_TITLE = "PDF to Image on Mac: Export Pages to JPG, PNG & Split PDFs";
const PAGE_DESCRIPTION =
  "Export PDF pages to high-quality JPG, PNG, TIFF, or HEIC. Split large PDFs into single pages offline on macOS. No file size limits.";
const APP_STORE_URL = "https://apps.apple.com/app/converleon/id6751464821";

const PdfToJpgSplitPagesMac = () => {
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
              How to Export PDF Pages to JPG, PNG, or Single PDFs on Mac
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              If you need just one slide or contract page, taking a screenshot might seem quick, but it often creates
              blurry text and poor results. A cleaner workflow is to extract images from pdf mac files directly so each
              page keeps sharp quality and consistent sizing. Converleon helps you export pages as images or split a
              document into separate files in one pass, fully offline.
            </p>
          </header>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold">Stop Taking Screenshots of Your PDFs</h2>
            <p className="text-muted-foreground leading-relaxed">
              Screenshots reduce resolution, hurt text clarity, and look unprofessional. Converleon gives you a true
              page export workflow for high-quality JPG, PNG, TIFF, and HEIC output, or single-page PDF files when you
              need to split a document.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold">What You Need</h2>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li>A Mac running macOS 13.5 or later.</li>
              <li>Converleon (installed from the App Store).</li>
              <li>Your multi-page PDF file.</li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold">Step-by-Step Guide</h2>
            <p className="text-muted-foreground leading-relaxed">
              Converleon&apos;s PDF engine creates a separate output file for each page.
            </p>

            <ol className="list-decimal pl-6 space-y-6 text-muted-foreground">
              <li className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground">Drop your PDF</h3>
                <p className="leading-relaxed">
                  Drag your PDF file onto the Converleon icon. You can drop multiple PDFs at once for batch processing.
                </p>
                <figure className="space-y-2">
                  <img
                    src={articleImage}
                    alt="Screenshot of dropping a PDF file into Converleon for page extraction."
                    className="w-full rounded-2xl border border-border/60"
                  />
                  <figcaption className="text-sm text-muted-foreground">
                    Automatically splitting a PDF document into separate high-quality PNG images.
                  </figcaption>
                </figure>
              </li>

              <li className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground">Pick your format</h3>
                <p className="leading-relaxed">
                  Choose the output type based on whether you need images or split documents:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <span className="font-semibold text-foreground">For images:</span> JPG or PNG for web, HEIC for
                    efficient storage, and TIFF for high-quality print.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">For documents:</span> PDF output to split the
                    original file into separate single-page PDFs.
                  </li>
                </ul>
              </li>

              <li className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground">Done</h3>
                <p className="leading-relaxed">
                  Processing runs locally on your Mac. If the source has 10 pages, you get 10 numbered files in order.
                </p>
              </li>
            </ol>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold">Why &quot;Page by Page&quot; is Better Than Online Tools</h2>
            <Alert className="glass-card border-border/60">
              <AlertTitle>Better privacy and output quality</AlertTitle>
              <AlertDescription>
                Contracts and reports often contain sensitive data, so offline export avoids risky uploads. Converleon
                keeps text sharp for pdf to jpg mac high quality results and supports TIFF workflows used by print and
                design teams.
              </AlertDescription>
            </Alert>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold">FAQ</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold">Can I split a PDF into smaller PDFs?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Yes. Choose PDF as the export format, and each page is saved as its own PDF file.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Will the images look blurry?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  No. Pages are rendered at high resolution for presentations and sharing. PNG and TIFF are strong
                  choices when you want lossless quality.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Can I extract pages from multiple PDFs at once?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Yes. Drop several PDFs together and export all pages in one batch, including mixed outputs like JPG
                  or single-page PDF files.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl md:text-3xl font-semibold">Conclusion</h2>
            <p className="text-muted-foreground leading-relaxed">
              You do not need complex software to get one page out of a document. Use Converleon to split pdf into
              pages mac or convert page outputs for quick sharing and production-ready results.
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
              <p className="mt-3 text-sm text-muted-foreground">(Export high-resolution pages or split PDFs privately.)</p>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default PdfToJpgSplitPagesMac;
