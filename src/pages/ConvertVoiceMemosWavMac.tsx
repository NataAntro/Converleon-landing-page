import { useEffect } from "react";

import Footer from "@/components/Footer";
import ArticleBackLink from "@/components/ArticleBackLink";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { buttonVariants } from "@/components/ui/button";
import articleImage from "@/assets/articles/article_voice_memos.png";
import { cn } from "@/lib/utils";

const PAGE_TITLE = "Voice Memos to WAV on Mac: Batch Convert iPhone M4A";
const PAGE_DESCRIPTION =
  "Convert iPhone Voice Memos (M4A) to WAV on macOS instantly. Batch process interviews and podcasts for editing. Secure, offline, and no file limits.";
const APP_STORE_URL = "https://apps.apple.com/app/converleon/id6751464821";

const ConvertVoiceMemosWavMac = () => {
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
              How to Convert iPhone Voice Memos to WAV on Mac (Batch)
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              If you record in iPhone Voice Memos and then move files to Mac for editing, you usually end up with M4A.
              That is efficient for storage, but editors like Audacity, Premiere Pro, and Logic often work better with
              WAV. This iPhone to Mac to editor workflow is exactly where people need fast batch conversion. Converleon
              lets you convert many clips at once, including m4a to wav mac conversion and reliable iphone audio to wav
              handoff, without uploading private audio.
            </p>
          </header>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold">Don&apos;t Just Rename the Extension</h2>
            <p className="text-muted-foreground leading-relaxed">
              Renaming <strong>.m4a</strong> to <strong>.wav</strong> in Finder does not convert audio data and can make
              files unusable. You need proper re-encoding to get a valid WAV file for production or archival work.
            </p>
            <Alert className="glass-card border-border/60">
              <AlertTitle>Warning</AlertTitle>
              <AlertDescription>
                Do not manually rename file extensions. Use a real conversion step to preserve compatibility.
              </AlertDescription>
            </Alert>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold">What You Need</h2>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li>A Mac running macOS 13.5 or later.</li>
              <li>Converleon (installed from the App Store).</li>
              <li>Your Voice Memo files (synced via iCloud or AirDropped to your Mac).</li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold">Step-by-Step Guide</h2>
            <p className="text-muted-foreground leading-relaxed">
              Whether you have one long interview or many short clips, the process is the same and supports batch
              convert workflows.
            </p>

            <ol className="list-decimal pl-6 space-y-6 text-muted-foreground">
              <li className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground">Drop your Voice Memos</h3>
                <p className="leading-relaxed">
                  Locate files in Finder and drag them onto the Converleon icon. You can drop mixed M4A, MP3, or video
                  files in one pass.
                </p>
                <figure className="space-y-2">
                  <img
                    src={articleImage}
                    alt="Screenshot of batch converting M4A Voice Memos to WAV in Converleon on macOS."
                    className="w-full rounded-2xl border border-border/60"
                  />
                </figure>
              </li>

              <li className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground">Select &quot;WAV&quot;</h3>
                <p className="leading-relaxed">
                  In the format bubble, choose WAV. WAV is uncompressed and lossless, which makes later edits,
                  stretching, and processing more predictable in professional tools.
                </p>
              </li>

              <li className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground">Done</h3>
                <p className="leading-relaxed">
                  New WAV files are created in the same folder and are ready for Logic Pro, Audacity, Premiere, or
                  other editors without compatibility errors.
                </p>
              </li>
            </ol>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold">Privacy Note for Journalists and Creators</h2>
            <p className="text-muted-foreground leading-relaxed">
              Voice memos may include sensitive interviews and private notes. Online converters require uploads to
              third-party servers, but Converleon processes files offline so raw recordings stay on your device.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold">FAQ</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold">Can I convert M4A to MP3?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Converleon focuses on high-quality outputs. It supports M4A, WAV, AIFF, FLAC, and CAF for audio
                  workflows where WAV is often preferred for editing.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Does this work with long recordings?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Yes. There is no short clip requirement, so long lectures and interviews can be converted the same way.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Can I batch convert a whole folder of memos?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Yes. Drop an entire folder to batch convert multiple files. Converleon skips incompatible items and
                  converts supported audio inputs.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl md:text-3xl font-semibold">Conclusion</h2>
            <p className="text-muted-foreground leading-relaxed">
              Getting audio off iPhone and into your editor should be simple. Use Converleon to convert voice memos to
              wav mac in a reliable batch workflow and prepare recordings for production.
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

export default ConvertVoiceMemosWavMac;
