import { useEffect } from "react";

import Footer from "@/components/Footer";
import ArticleBackLink from "@/components/ArticleBackLink";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { buttonVariants } from "@/components/ui/button";
import articleImage from "@/assets/articles/article2.png";
import { cn } from "@/lib/utils";

const PAGE_TITLE = "Merge PDF on Mac: Combine Word, Images & PDF Files";
const PAGE_DESCRIPTION =
  "Combine mixed files (DOCX, JPG, PDF) into one clean PDF on Mac. Secure offline merger. No file limits, no uploads required.";
const APP_STORE_URL = "https://apps.apple.com/app/converleon/id6751464821";

const MergePdfMacCombineWordImages = () => {
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
        <article className="mx-auto max-w-4xl glass-card rounded-3xl p-6 md:p-10 lg:p-12 space-y-8">
          <ArticleBackLink />
          <header className="space-y-5">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Merge PDF on Mac: Combine Word, Images &amp; PDF Files
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              If you have a contract in Word, a scanned page in JPG, and a cover letter in PDF, you probably just need
              one final document you can send right away. The fastest Merge PDF Mac workflow is to drop everything in
              one place and export a single clean file, without converting each item manually first. Converleon lets you
              merge files into one PDF on Mac in seconds while keeping documents on your device. This approach is ideal
              when you need to combine DOCX, JPG, and PDF for applications, legal packets, or internal reports.
            </p>
          </header>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold">The Easiest Way to Merge Files into One PDF on macOS</h2>
            <p className="text-muted-foreground leading-relaxed">
              You can skip intermediate conversions. Instead of turning Word and images into PDF one by one, Converleon
              merges mixed file types directly into a single, organized PDF.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold">What You Need</h2>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Converleon for Mac.</li>
              <li>Mixed files: Word documents (DOCX), images (JPG/PNG), or existing PDFs.</li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold">Step-by-Step Guide</h2>
            <Alert className="glass-card border-border/60">
              <AlertTitle>Smart mixed drops</AlertTitle>
              <AlertDescription>
                This method uses Smart mixed drops, so different file types are treated as one batch for one final PDF.
              </AlertDescription>
            </Alert>

            <h3 className="text-xl md:text-2xl font-semibold">How to Combine Word and PDF with images in one pass</h3>

            <ol className="list-decimal pl-6 space-y-6 text-muted-foreground">
              <li className="space-y-3">
                <h4 className="text-lg font-semibold text-foreground">Drop everything at once</h4>
                <p className="leading-relaxed">
                  Select your Word files, image scans, and PDF files, then drag and drop them onto the Converleon icon
                  at the top of the app. This opens the action bubble for mixed inputs. You do not need to convert them
                  one by one beforehand.
                </p>
                <figure className="space-y-2">
                  <img
                    src={articleImage}
                    alt="Converleon interface showing mixed file types (DOCX, PDF, image) ready to merge into one PDF on macOS."
                    className="w-full rounded-2xl border border-border/60"
                  />
                  <figcaption className="text-sm text-muted-foreground">
                    A mixed batch (DOCX, image, PDF) prepared for one-click PDF merge on Mac.
                  </figcaption>
                </figure>
              </li>

              <li className="space-y-3">
                <h4 className="text-lg font-semibold text-foreground">Click "Merge PDF"</h4>
                <p className="leading-relaxed">
                  In the bubble, choose the Merge PDF action instead of selecting an output format for each file.
                </p>
              </li>

              <li className="space-y-3">
                <h4 className="text-lg font-semibold text-foreground">Done</h4>
                <p className="leading-relaxed">
                  The app combines all dropped content into one multipage PDF and saves it to your Mac.
                </p>
              </li>
            </ol>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold">Common Mistakes</h2>
            <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
              <li>
                <span className="font-semibold text-foreground">Waiting for uploads:</span> Online PDF mergers require
                sending contracts or financial files to remote servers, which is slower and often conflicts with
                internal security policies.
              </li>
              <li>
                <span className="font-semibold text-foreground">Formatting loss:</span> Converleon preserves DOCX and
                image formatting when combining them into the final PDF.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold">FAQ</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold">Can I split a PDF back into images later?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Yes. Drop a PDF into Converleon and export pages as JPG, PNG, HEIC, or TIFF.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Is there a file size limit?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  No. Because Converleon runs offline on your device, you are not limited by server-side upload caps.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl md:text-3xl font-semibold">Conclusion</h2>
            <p className="text-muted-foreground leading-relaxed">
              Stop using three separate apps to prepare one report. Converleon helps you merge mixed file types in two
              clicks, keep sensitive documents on your hard drive, and finish the job faster.
            </p>
            <div>
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ size: "lg" }), "px-8 py-6 text-base")}
              >
                Get Converleon on the App Store
              </a>
              <p className="mt-3 text-sm text-muted-foreground">(Secure &amp; Offline. No uploads needed.)</p>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default MergePdfMacCombineWordImages;
