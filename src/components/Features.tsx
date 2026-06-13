import batchConvert from "@/assets/batch-convert.webp";
import removeBgEnhance from "@/assets/removebg-enhance.webp";
import compressMedia from "@/assets/compress-media.webp";
import videoAudio from "@/assets/video-audio.webp";
import mergePdfs from "@/assets/merge-pdfs.webp";
import pdfToImages from "@/assets/pdf-to-images.webp";
import unpackArchives from "@/assets/unpack-archives.webp";
import packZip from "@/assets/pack-zip.webp";
import heroImage from "@/assets/hero-screenshot.webp";
import Reveal from "@/components/Reveal";
import BeforeAfter from "@/components/BeforeAfter";
import { cn } from "@/lib/utils";

type Hotspot = { x: number; y: number; label: string };

type Feature = {
  title: string;
  description: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  tint: "primary" | "accent" | "cyan";
  visual?: "image" | "beforeAfter";
  beforeLabel?: string;
  afterLabel?: string;
  hotspots?: Hotspot[];
};

const features: Feature[] = [
  {
    title: "Every file type\nThe same two steps",
    description: "One workflow covers images, video, audio, documents, PDFs, and archives.",
    image: heroImage,
    imageWidth: 1920,
    imageHeight: 1200,
    tint: "primary",
  },
  {
    title: "Batch-convert mixed files",
    description: "Convert hundreds of files in a single pass, even when the drop holds several different types. Pick the final format and Converleon sorts out the rest.",
    image: batchConvert,
    imageWidth: 1920,
    imageHeight: 1200,
    tint: "accent",
    hotspots: [
      { x: 18, y: 72, label: "Drop a mixed batch" },
      { x: 52, y: 38, label: "Pick one final format" },
      { x: 84, y: 50, label: "Files arrive renamed" },
    ],
  },
  {
    title: "Compress images, video & audio",
    description: "Shrink media with three plain-language presets — Smallest, Balanced, Quality. Images keep the right format, video lands as MP4, audio as M4A.",
    image: compressMedia,
    imageWidth: 2880,
    imageHeight: 1800,
    tint: "cyan",
    visual: "beforeAfter",
    beforeLabel: "Original • heavy",
    afterLabel: "Compressed • light",
  },
  {
    title: "Remove backgrounds & enhance photos",
    description: "Cut out an image background and save it as a transparent PNG, or clean up a photo with automatic color, contrast, and red-eye correction.",
    image: removeBgEnhance,
    imageWidth: 2880,
    imageHeight: 1800,
    tint: "primary",
    hotspots: [
      { x: 30, y: 50, label: "Drop a photo" },
      { x: 70, y: 50, label: "Transparent PNG out" },
    ],
  },
  {
    title: "Convert video & pull out audio",
    description: "Convert MOV, MP4, and M4V, or extract just the audio track to M4A or WAV.",
    image: videoAudio,
    imageWidth: 1920,
    imageHeight: 1200,
    tint: "accent",
  },
  {
    title: "Merge PDFs from almost anything",
    description: "Drop images, documents, and PDFs together, choose Merge PDFs, and get one clean file. Unsupported items are skipped automatically.",
    image: mergePdfs,
    imageWidth: 1920,
    imageHeight: 1200,
    tint: "cyan",
    hotspots: [
      { x: 24, y: 70, label: "Mixed sources in" },
      { x: 76, y: 45, label: "Single PDF out" },
    ],
  },
  {
    title: "Split PDFs to images, page by page",
    description: "Export every page of a PDF to a single PDF, JPG, PNG, HEIC, or TIFF in two steps.",
    image: pdfToImages,
    imageWidth: 2880,
    imageHeight: 1800,
    tint: "primary",
  },
  {
    title: "Unpack & repack archives",
    description: "Open most archive formats, extract to a folder, or repack to ZIP. Password-protected ZIP and RAR files are supported.",
    image: unpackArchives,
    imageWidth: 1920,
    imageHeight: 1200,
    tint: "accent",
  },
  {
    title: "Pack anything into a ZIP",
    description: "Bundle any files into a ZIP in one step, with your folder structure intact.",
    image: packZip,
    imageWidth: 1920,
    imageHeight: 1200,
    tint: "cyan",
  },
];

const glowFor = (tint: Feature["tint"]) =>
  tint === "primary" ? "glow-primary" : tint === "accent" ? "glow-accent" : "glow-cyan";

const numberFor = (tint: Feature["tint"]) =>
  tint === "primary"
    ? "text-primary/30"
    : tint === "accent"
      ? "text-accent/30"
      : "text-[hsl(195_80%_60%/0.3)]";

const Features = () => {
  return (
    <section id="features" className="py-12 md:py-24 px-4">
      <div className="max-w-7xl mx-auto space-y-16 md:space-y-24 lg:space-y-32">
        {features.map((feature, index) => {
          const num = String(index + 1).padStart(2, "0");
          const reversed = index % 2 === 1;
          return (
            <Reveal
              key={index}
              className={cn(
                "flex flex-col gap-6 lg:gap-12 items-center",
                reversed ? "lg:flex-row-reverse" : "lg:flex-row"
              )}
            >
              <div className="flex-1 space-y-3 lg:space-y-6">
                <div className="flex items-baseline gap-4">
                  <span
                    className={cn(
                      "font-bold leading-none text-5xl md:text-6xl lg:text-7xl tracking-tight",
                      numberFor(feature.tint)
                    )}
                    aria-hidden="true"
                  >
                    {num}
                  </span>
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    of {String(features.length).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold whitespace-pre-line">
                  {feature.title}
                </h3>
                <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="flex-1 w-full">
                <div
                  className={cn(
                    "glass-card rounded-2xl lg:rounded-3xl p-2 lg:p-4 animate-float-slow",
                    glowFor(feature.tint)
                  )}
                >
                  {feature.visual === "beforeAfter" ? (
                    <BeforeAfter
                      src={feature.image}
                      alt={feature.title}
                      imageWidth={feature.imageWidth}
                      imageHeight={feature.imageHeight}
                      beforeLabel={feature.beforeLabel}
                      afterLabel={feature.afterLabel}
                    />
                  ) : (
                    <div className="relative">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        width={feature.imageWidth}
                        height={feature.imageHeight}
                        className="w-full h-auto rounded-2xl"
                        loading="lazy"
                        decoding="async"
                      />
                      {feature.hotspots?.map((h, i) => (
                        <span
                          key={i}
                          className="hotspot"
                          style={{ left: `${h.x}%`, top: `${h.y}%` }}
                          aria-label={h.label}
                          title={h.label}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
