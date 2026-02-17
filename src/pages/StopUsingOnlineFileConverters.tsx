import { useEffect } from "react";

import Footer from "@/components/Footer";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { buttonVariants } from "@/components/ui/button";
import articleImage from "@/assets/articles/article4.png";
import { cn } from "@/lib/utils";

const PAGE_TITLE = "Why You Should Stop Using Online File Converters";
const PAGE_DESCRIPTION =
  "Protect your data by using an offline file converter. Learn why local processing on Mac is faster and safer than cloud tools.";
const APP_STORE_URL = "https://apps.apple.com/app/converleon/id6751464821";

const StopUsingOnlineFileConverters = () => {
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
          <header className="space-y-5">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">Why You Should Stop Using Online File Converters</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We have all done it: googled "convert PDF to Word free" and uploaded a document to the first website that
              popped up. But when that document contains financial data, legal contracts, or personal photos, this habit
              becomes a major security risk. For Mac users, switching to a native, offline app like Converleon is not
              just about convenience. It is about data sovereignty.
            </p>
          </header>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold">Online vs. Offline Converters: Why Local Processing Wins</h2>
            <p className="text-muted-foreground leading-relaxed">
              A secure file converter Mac workflow keeps sensitive files on your device instead of uploading them to
              third-party servers.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold">The Risks of Cloud Conversion</h2>
            <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
              <li>
                <span className="font-semibold text-foreground">Data Persistence:</span> You may not know how long a
                remote server stores your file.
              </li>
              <li>
                <span className="font-semibold text-foreground">Tracking:</span> Many free tools monetize user
                behavior and file-conversion activity.
              </li>
              <li>
                <span className="font-semibold text-foreground">Intellectual Property:</span> Uploading creative work,
                documents, photos, or audio to third-party infrastructure can create avoidable risk.
              </li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold">The Converleon Solution: Privacy First</h2>

            <Alert className="glass-card border-border/60">
              <AlertTitle>No Accounts, No Uploads, No Tracking</AlertTitle>
              <AlertDescription>Converleon was built with this policy as the default behavior.</AlertDescription>
            </Alert>

            <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
              <li>
                <span className="font-semibold text-foreground">On-Device Processing:</span> Converted files stay on
                your Mac and do not pass through cloud servers.
              </li>
              <li>
                <span className="font-semibold text-foreground">Apple Silicon Speed:</span> The native macOS app uses
                M1, M2, and M3 chips for faster local conversion.
              </li>
              <li>
                <span className="font-semibold text-foreground">Apple Notarized:</span> The app is sandboxed and
                notarized by Apple, and it only accesses files you explicitly drop into it.
              </li>
            </ul>

            <figure className="space-y-2">
              <img
                src={articleImage}
                alt="App Store App Privacy card for Converleon showing 'Data Not Collected'."
                className="w-full rounded-2xl border border-border/60"
              />
              <figcaption className="text-sm text-muted-foreground">
                App Store privacy card indicating Converleon does not collect user data.
              </figcaption>
            </figure>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold">How it Works</h2>
            <h3 className="text-xl md:text-2xl font-semibold">The workflow is identical to online tools, but safer</h3>
            <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
              <li>Select your files in Finder and drag them onto the Converleon icon at the top of the app.</li>
              <li>In the bubble that appears, click your target format (e.g., PDF, ZIP, JPG).</li>
              <li>Done. The file is saved instantly to your drive.</li>
            </ol>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold">FAQ</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold">Is it really offline?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Yes. You can turn off your Wi-Fi and Converleon will work perfectly. It requires no internet
                  connection.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">Can I convert password-protected archives?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Yes, Converleon allows you to unpack password-protected ZIP and RAR files locally, ensuring your
                  password is never transmitted over the network.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl md:text-3xl font-semibold">Conclusion</h2>
            <p className="text-muted-foreground leading-relaxed">
              Security does not have to be complicated. By using a native macOS utility, you get the job done in
              2 clicks without compromising your privacy. Keep your files on your Mac, where they belong.
            </p>
            <div>
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ size: "lg" }), "px-8 py-6 text-base")}
              >
                Secure Your Workflow with Converleon
              </a>
              <p className="mt-3 text-sm text-muted-foreground">(Data Not Collected. 100% Offline.)</p>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default StopUsingOnlineFileConverters;
