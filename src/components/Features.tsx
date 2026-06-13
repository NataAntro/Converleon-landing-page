import batchConvert from "@/assets/batch-convert.webp";
import removeBgEnhance from "@/assets/removebg-enhance.webp";
import compressMedia from "@/assets/compress-media.webp";
import videoAudio from "@/assets/video-audio.webp";
import mergePdfs from "@/assets/merge-pdfs.webp";
import pdfToImages from "@/assets/pdf-to-images.webp";
import unpackArchives from "@/assets/unpack-archives.webp";
import packZip from "@/assets/pack-zip.webp";
import heroImage from "@/assets/hero-screenshot.webp";

const Features = () => {
  const features = [
    {
      title: "Every file type\nThe same two steps",
      description: "One workflow covers images, video, audio, documents, PDFs, and archives.",
      image: heroImage,
      imageWidth: 1920,
      imageHeight: 1200
    },
    {
      title: "Batch-convert mixed files",
      description: "Convert hundreds of files in a single pass, even when the drop holds several different types. Pick the final format and Converleon sorts out the rest.",
      image: batchConvert,
      imageWidth: 1920,
      imageHeight: 1200
    },
    {
      title: "Compress images, video & audio",
      description: "Shrink media with three plain-language presets — Smallest, Balanced, Quality. Images keep the right format, video lands as MP4, audio as M4A.",
      image: compressMedia,
      imageWidth: 2880,
      imageHeight: 1800
    },
    {
      title: "Remove backgrounds & enhance photos",
      description: "Cut out an image background and save it as a transparent PNG, or clean up a photo with automatic color, contrast, and red-eye correction.",
      image: removeBgEnhance,
      imageWidth: 2880,
      imageHeight: 1800
    },
    {
      title: "Convert video & pull out audio",
      description: "Convert MOV, MP4, and M4V, or extract just the audio track to M4A or WAV.",
      image: videoAudio,
      imageWidth: 1920,
      imageHeight: 1200
    },
    {
      title: "Merge PDFs from almost anything",
      description: "Drop images, documents, and PDFs together, choose Merge PDFs, and get one clean file. Unsupported items are skipped automatically.",
      image: mergePdfs,
      imageWidth: 1920,
      imageHeight: 1200
    },
    {
      title: "Split PDFs to images, page by page",
      description: "Export every page of a PDF to a single PDF, JPG, PNG, HEIC, or TIFF in two steps.",
      image: pdfToImages,
      imageWidth: 2880,
      imageHeight: 1800
    },
    {
      title: "Unpack & repack archives",
      description: "Open most archive formats, extract to a folder, or repack to ZIP. Password-protected ZIP and RAR files are supported.",
      image: unpackArchives,
      imageWidth: 1920,
      imageHeight: 1200
    },
    {
      title: "Pack anything into a ZIP",
      description: "Bundle any files into a ZIP in one step, with your folder structure intact.",
      image: packZip,
      imageWidth: 1920,
      imageHeight: 1200
    }
  ];

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto space-y-32">
        {features.map((feature, index) => (
          <div 
            key={index}
            className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
          >
            <div className="flex-1 space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold whitespace-pre-line">
                {feature.title}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
            
            <div className="flex-1">
              <div className="glass-card rounded-3xl p-4 shadow-2xl">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  width={feature.imageWidth}
                  height={feature.imageHeight}
                  className="w-full h-auto rounded-2xl"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
