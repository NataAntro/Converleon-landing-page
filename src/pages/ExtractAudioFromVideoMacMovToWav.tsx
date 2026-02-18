import { useEffect } from "react";

import Footer from "@/components/Footer";
import ArticleBackLink from "@/components/ArticleBackLink";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { buttonVariants } from "@/components/ui/button";
import articleImage from "@/assets/articles/article3.png";
import { cn } from "@/lib/utils";

const PAGE_TITLE = "Extract Audio from Video on Mac: MOV to WAV & M4A";
const PAGE_DESCRIPTION =
  "Extract high-quality audio from video on macOS instantly. Convert MOV/MP4 to WAV or M4A offline. No file size limits, no upload wait times.";
const APP_STORE_URL = "https://apps.apple.com/app/converleon/id6751464821";

const ExtractAudioFromVideoMacMovToWav = () => {
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
              Extract Audio from Video on Mac: MOV to WAV &amp; M4A (No Quality Loss)
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              If you have a concert clip, lecture recording, or video memo and only need the sound track, you should be
              able to get it fast without opening a heavy editor. A practical Extract audio from video Mac workflow
              means dropping the file, choosing an audio format, and exporting locally in seconds. Converleon lets you
              extract audio from MOV on Mac, convert MP4 to M4A for everyday playback, or save WAV when you need a
              lossless file for later editing. Your original video stays untouched, and the new audio file lands in your
              Mac folder right away.
            </p>
          </header>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold">How to Extract Audio from Video on Mac (MOV/MP4 to Audio)</h2>
            <p className="text-muted-foreground leading-relaxed">
              You do not need Final Cut Pro or DaVinci Resolve for a basic audio extraction. Converleon handles this in
              two clicks with a lightweight, offline workflow.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold">What You Need</h2>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li>A Mac running macOS 13.5 or later.</li>
              <li>Converleon installed from the App Store.</li>
              <li>Your video files (MOV, MP4, M4V).</li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold">Step-by-Step Guide</h2>

            <Alert className="glass-card border-border/60">
              <AlertTitle>Why Offline Matters</AlertTitle>
              <AlertDescription>
                Uploading a 2GB video to a web converter can take hours and expose your IP address. Converleon processes
                the same file locally on your Mac in seconds.
              </AlertDescription>
            </Alert>

            <ol className="list-decimal pl-6 space-y-6 text-muted-foreground">
              <li className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground">Drop your video file</h3>
                <p className="leading-relaxed">
                  Open Converleon and drag one video file (or select multiple video files) from Finder onto the
                  Converleon icon at the top of the app. Video inputs are detected automatically.
                </p>
                <figure className="space-y-2">
                  <img
                    src={articleImage}
                    alt="Dragging a large MOV video file into Converleon on macOS to extract audio."
                    className="w-full rounded-2xl border border-border/60"
                  />
                  <figcaption className="text-sm text-muted-foreground">
                    Dropping a large video into Converleon before audio extraction.
                  </figcaption>
                </figure>
              </li>

              <li className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground">Click your audio format</h3>
                <p className="leading-relaxed">
                  The app shows Extract Audio choices after you drop video files. For MOV to WAV extraction, choose WAV
                  when editing quality matters; choose M4A for general playback and voice memos.
                </p>
              </li>

              <li className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground">Done</h3>
                <p className="leading-relaxed">
                  Audio extraction runs immediately. The original video file stays untouched, and your new sound file is
                  saved in the same folder.
                </p>
              </li>
            </ol>

            <Alert className="glass-card border-border/60">
              <AlertTitle>Pro Tip</AlertTitle>
              <AlertDescription>
                If you need FLAC later, drop the extracted WAV back into Converleon and convert it. FLAC input and
                output are supported for audio files.
              </AlertDescription>
            </Alert>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold">Common Mistakes</h2>
            <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
              <li>
                <span className="font-semibold text-foreground">Renaming extensions manually:</span> Changing
                <code className="mx-1">video.mov</code> to <code className="mx-1">audio.wav</code> in Finder does not
                convert the file and can corrupt usability.
              </li>
              <li>
                <span className="font-semibold text-foreground">Using online converters for large files:</span> Video
                uploads are heavy and slow. Converleon handles large files locally on Apple Silicon without bandwidth
                throttling.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold">FAQ</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold">Why can&apos;t I export to MP3?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  MP3 requires specific licensing that many indie apps avoid to keep costs lower. M4A is widely
                  supported on Apple devices and works well for most everyday playback.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Can I extract audio from multiple videos at once?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Yes. Drop multiple videos together, pick WAV or M4A once, and Converleon will batch extract audio from
                  all of them.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl md:text-3xl font-semibold">Conclusion</h2>
            <p className="text-muted-foreground leading-relaxed">
              You do not need a full studio editor just to get sound out of a video file. With Converleon, the flow is
              simple: Drop -&gt; Click -&gt; Done. You get pristine audio extraction on Mac with no upload wait.
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
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default ExtractAudioFromVideoMacMovToWav;
