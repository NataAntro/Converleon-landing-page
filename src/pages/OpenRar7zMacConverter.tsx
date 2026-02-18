import { useEffect } from "react";

import Footer from "@/components/Footer";
import ArticleBackLink from "@/components/ArticleBackLink";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { buttonVariants } from "@/components/ui/button";
import articleImage from "@/assets/articles/article_rar_7z.png";
import { cn } from "@/lib/utils";

const PAGE_TITLE = "Open RAR & 7Z Files on Mac: Unpack or Convert to ZIP Fast";
const PAGE_DESCRIPTION =
  "Open RAR, 7Z, and TAR files on macOS instantly. Unpack to folder or convert mixed archives to ZIP. Secure, offline, and drag-and-drop.";
const APP_STORE_URL = "https://apps.apple.com/app/converleon/id6751464821";

const OpenRar7zMacConverter = () => {
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
              How to Open RAR and 7Z Files on Mac (No Command Line)
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              If macOS says there is no app set to open your downloaded archive, you are not alone. This is a common
              issue with RAR and 7Z files, and it usually appears right after a double-click in Finder. If you need an
              open rar mac workflow without Terminal, Converleon gives you a fast drag-and-drop way to unpack archives
              or repack them into ZIP in seconds. It is also useful for anyone searching for a reliable mac unzip 7z
              solution that works fully offline.
            </p>
          </header>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold">
              The &quot;There is no application set to open the document&quot; Error
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              While the built-in Archive Utility handles ZIP files, it often fails with RAR, 7Z, and other complex
              archive formats. You do not need Terminal commands or ad-heavy freeware to access your files. Converleon
              lets you open these archives, or convert them into Mac-friendly ZIP files, in a few clicks.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold">What You Need</h2>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li>A Mac running macOS 13.5 or later.</li>
              <li>Converleon (installed from the App Store).</li>
              <li>Your stubborn RAR or 7Z file.</li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold">Step-by-Step Guide</h2>
            <p className="text-muted-foreground leading-relaxed">
              Converleon handles archive management differently than standard unzippers. You can either extract files
              immediately or repack them into a compatible ZIP for sharing.
            </p>

            <ol className="list-decimal pl-6 space-y-6 text-muted-foreground">
              <li className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground">Drop your archive</h3>
                <p className="leading-relaxed">
                  Drag your RAR, 7Z, TAR, or GZ file from Finder onto the Converleon icon. You can drop multiple
                  archives at once.
                </p>
                <figure className="space-y-2">
                  <img
                    src={articleImage}
                    alt="Screenshot of dragging a RAR file into Converleon on macOS."
                    className="w-full rounded-2xl border border-border/60"
                  />
                </figure>
              </li>

              <li className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground">Choose your action</h3>
                <p className="leading-relaxed">Converleon detects the archive type and gives you two main paths:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <span className="font-semibold text-foreground">Unpack:</span> Extracts the contents into a folder
                    next to the original file.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Repack to ZIP:</span> Opens the RAR or 7Z and
                    repacks it into a standard ZIP file for easy sharing.
                  </li>
                </ul>
              </li>

              <li className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground">Done</h3>
                <p className="leading-relaxed">The process runs offline on your device. Your files are ready to use.</p>
              </li>
            </ol>

            <Alert className="glass-card border-border/60">
              <AlertTitle>Pro Tip: Managing Passwords</AlertTitle>
              <AlertDescription>
                Converleon supports opening password-protected ZIP and RAR files (standard encryption). Password-
                protected 7Z files are not currently supported.
              </AlertDescription>
            </Alert>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold">Why Repack to ZIP instead of just Unpacking?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Sometimes you do not need to open the contents right now, you just need a more universal format. A
              convert rar to zip mac workflow makes the archive easier to share across macOS and Windows without extra
              tools.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold">FAQ</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold">Can I create 7Z files with Converleon?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  You can unpack 7Z files, but for creating archives Converleon uses the ZIP standard for broad
                  compatibility.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Can I password-protect my output?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Yes. When you pack files into a ZIP using Converleon, you can add a password. Output is ZIP, not RAR
                  or 7Z.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Does this work with split archives (part1.rar, part2.rar)?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  For best results, keep all parts of the split archive in the same folder before dropping the first
                  part into Converleon.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl md:text-3xl font-semibold">Conclusion</h2>
            <p className="text-muted-foreground leading-relaxed">
              Do not let archive formats slow down your workflow. Whether you need to open rar mac files or mac unzip
              7z archives, Converleon keeps the process simple with drag-and-drop and offline processing.
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
              <p className="mt-3 text-sm text-muted-foreground">Free download on the Mac App Store. No account required.</p>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default OpenRar7zMacConverter;
