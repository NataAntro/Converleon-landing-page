import { useEffect } from "react";

import Footer from "@/components/Footer";
import ArticleBackLink from "@/components/ArticleBackLink";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { buttonVariants } from "@/components/ui/button";
import articleImage from "@/assets/articles/article_flac.png";
import { cn } from "@/lib/utils";

const PAGE_TITLE = "FLAC to M4A & WAV on Mac: Batch Convert Lossless Audio";
const PAGE_DESCRIPTION =
  "Convert FLAC to M4A or WAV on macOS in seconds. Batch process entire albums offline. Fix compatibility issues with Apple Music and iPhone.";
const APP_STORE_URL = "https://apps.apple.com/app/converleon/id6751464821";

const FlacToM4aWavMacConverter = () => {
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
              How to Convert FLAC to M4A or WAV on Mac (Batch &amp; Offline)
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              If your FLAC library will not import into Apple Music (iTunes) or sync cleanly to iPhone, you are not
              alone. Many people hit this compatibility wall when they try to play flac on itunes and keep their
              high-quality collection in the Apple ecosystem. The fastest fix is converting to Apple-native M4A for
              daily listening, or to WAV for universal editing and playback. Converleon makes this simple with offline
              batch conversion, so you can bulk convert full albums without uploading huge files.
            </p>
          </header>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold">Why Won&apos;t My FLAC Files Play in Apple Music?</h2>
            <p className="text-muted-foreground leading-relaxed">
              FLAC is widely used for lossless audio, but Apple apps do not always handle it the way users expect. You
              do not need to install extra cloud tools or sacrifice quality. Converting to M4A solves Apple Music and
              iPhone compatibility quickly, while WAV gives you an uncompressed format for production workflows.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold">What You Need</h2>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li>A Mac running macOS 13.5 or later.</li>
              <li>Converleon (installed from the App Store).</li>
              <li>Your folder of FLAC files.</li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold">Step-by-Step Guide</h2>
            <p className="text-muted-foreground leading-relaxed">
              Converleon is optimized for batch processing, so it is ideal for entire albums, discographies, and large
              sample packs.
            </p>

            <ol className="list-decimal pl-6 space-y-6 text-muted-foreground">
              <li className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground">Drop your audio files</h3>
                <p className="leading-relaxed">
                  Select FLAC files or an entire album folder and drag them onto the Converleon icon.
                </p>
                <figure className="space-y-2">
                  <img
                    src={articleImage}
                    alt="Screenshot of batch converting FLAC audio files in Converleon on macOS."
                    className="w-full rounded-2xl border border-border/60"
                  />
                </figure>
              </li>
              <li className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground">Choose your target format</h3>
                <p className="leading-relaxed">Pick the output based on your goal:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <span className="font-semibold text-foreground">M4A:</span> Best for listening on Mac, iPhone, and
                    iPad with native Apple Music and QuickTime support.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">WAV:</span> Best for editing in Logic Pro, Final
                    Cut, and other DAWs.
                  </li>
                </ul>
              </li>
              <li className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground">Done</h3>
                <p className="leading-relaxed">
                  Conversion starts immediately on your Mac, so even heavy lossless files are processed quickly.
                </p>
              </li>
            </ol>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold">Why Offline Conversion Matters for Audio</h2>
            <Alert className="glass-card border-border/60">
              <AlertTitle>Large files stay local</AlertTitle>
              <AlertDescription>
                Lossless albums can be hundreds of megabytes. Offline conversion avoids long upload times, saves
                bandwidth, and keeps your private library on your own drive.
              </AlertDescription>
            </Alert>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold">FAQ</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold">Does converting FLAC to M4A lose quality?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  M4A is a native Apple container that improves compatibility across Apple devices. In practice, users
                  get high-quality listening with immediate Apple Music and iPhone support.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Can I convert other formats like WAV to FLAC?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Yes. Converleon supports two-way conversion, including M4A, WAV, AIFF, and CAF inputs to FLAC, M4A,
                  or WAV outputs.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Can I extract audio from video files too?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Yes. Drop a MOV or MP4 file and extract the audio track directly to M4A or WAV with the same workflow.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl md:text-3xl font-semibold">Conclusion</h2>
            <p className="text-muted-foreground leading-relaxed">
              Do not let format issues break your music workflow. Use Converleon for flac to m4a mac when you need
              Apple Music playback, or convert flac to wav mac for editing and universal compatibility.
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

export default FlacToM4aWavMacConverter;
