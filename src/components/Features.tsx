import batchConvert from "@/assets/batch-convert.png";
import videoAudio from "@/assets/video-audio.png";
import mergePdfs from "@/assets/merge-pdfs.png";
import pdfToImages from "@/assets/pdf-to-images.png";
import unpackArchives from "@/assets/unpack-archives.png";
import packZip from "@/assets/pack-zip.png";
import heroImage from "@/assets/hero-screenshot.png";

const Features = () => {
  const features = [
    {
      title: "All Your Files. Two Steps.",
      description: "A single workflow for images, video, audio, documents, PDFs, and archives.",
      image: heroImage,
      reverse: false
    },
    {
      title: "Batch Convert Mixed Files",
      description: "Convert hundreds of files in one go — even when the drop contains different types. Pick the final format and Converleon handles the rest.",
      image: batchConvert,
      reverse: true
    },
    {
      title: "Convert Video & Extract Audio",
      description: "Convert MOV/MP4/M4V, or extract audio to M4A/WAV — fast and offline.",
      image: videoAudio,
      reverse: false
    },
    {
      title: "Merge PDFs from Anything",
      description: "Drop images, documents, and PDFs. Choose 'Merge PDFs' and get one clean file — unsupported items are skipped automatically.",
      image: mergePdfs,
      reverse: true
    },
    {
      title: "PDF to Images — Page by Page",
      description: "Export every PDF page to JPG, PNG, HEIC, or TIFF in two steps.",
      image: pdfToImages,
      reverse: false
    },
    {
      title: "Unpack & Repack Archives",
      description: "Open most archive formats, unpack to a folder, or repack to ZIP. Passwords supported for ZIP/RAR.",
      image: unpackArchives,
      reverse: true
    },
    {
      title: "Pack Files into ZIP",
      description: "Create a ZIP from any files in one step while keeping folder structure.",
      image: packZip,
      reverse: false
    }
  ];

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto space-y-32">
        {features.map((feature, index) => (
          <div 
            key={index}
            className={`flex flex-col ${feature.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
          >
            <div className="flex-1 space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold">
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
                  className="w-full h-auto rounded-2xl"
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
