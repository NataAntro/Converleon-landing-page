import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Formats = () => {
  const formats = [
    {
      category: "Images",
      input: "JPG/JPEG, PNG, GIF, HEIC, BMP, TIFF/TIF",
      output: "JPG, PNG, HEIC, PDF, TIFF, BMP",
      note: null
    },
    {
      category: "Video",
      input: "MOV, MP4, M4V",
      output: "MOV, MP4, M4V",
      audioOutput: "Audio from video: M4A, WAV",
      note: "MP3 export isn't available due to licensing restrictions."
    },
    {
      category: "Audio",
      input: "M4A, AIFF, CAF, WAV, MP3",
      output: "M4A, AIFF, CAF, WAV",
      note: null
    },
    {
      category: "Documents",
      input: "DOCX, DOC, RTF, TXT",
      output: "PDF, RTF, TXT",
      note: "DOCX → PDF preserves images and formatting; DOC → PDF may export text-only depending on the system parser."
    },
    {
      category: "PDF tools",
      input: null,
      output: "Export to JPG/PNG/HEIC/TIFF (split pages or combined multi-page TIFF)",
      features: "Merge PDFs from images, documents, and PDFs",
      note: null
    },
    {
      category: "Archives",
      input: "ZIP, RAR, 7Z, CBR, TAR, GZ, XZ, BZ2, and more",
      output: null,
      actions: "Unpack to folder, repack to ZIP, pack any files to ZIP",
      note: "Password-protected 7Z archives aren't supported."
    }
  ];

  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Supported Formats
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to work with files on your Mac
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {formats.map((format, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="glass-card rounded-2xl px-6 border-0"
            >
              <AccordionTrigger className="text-xl font-bold hover:no-underline py-6">
                {format.category}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-3 pb-6">
                {format.input && (
                  <div>
                    <span className="font-semibold text-foreground">Input: </span>
                    {format.input}
                  </div>
                )}
                {format.output && (
                  <div>
                    <span className="font-semibold text-foreground">Output: </span>
                    {format.output}
                  </div>
                )}
                {format.audioOutput && (
                  <div>
                    <span className="font-semibold text-foreground">{format.audioOutput}</span>
                  </div>
                )}
                {format.features && (
                  <div>
                    <span className="font-semibold text-foreground">Features: </span>
                    {format.features}
                  </div>
                )}
                {format.actions && (
                  <div>
                    <span className="font-semibold text-foreground">Actions: </span>
                    {format.actions}
                  </div>
                )}
                {format.note && (
                  <div className="text-sm italic mt-2 p-3 glass-card rounded-lg">
                    {format.note}
                  </div>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Formats;
