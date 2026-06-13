import { FileStack, Layers, Lock, Shuffle, FileText, Archive } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: <FileStack className="h-8 w-8" />,
      title: "One multi-tool, not eight apps",
      description: "Images, video, audio, documents, PDF tools, archives, compression, and Remove BG — in a single window."
    },
    {
      icon: <Layers className="h-8 w-8" />,
      title: "Hundreds of files at once",
      description: "Full batch support, so a folder of files is the same effort as one."
    },
    {
      icon: <Shuffle className="h-8 w-8" />,
      title: "Smart mixed drops",
      description: "Drop different file types together. Converleon converts what it can and quietly skips what it can't."
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "PDF, handled",
      description: "Merge a mixed batch into one PDF, or export an existing PDF page by page to images."
    },
    {
      icon: <Archive className="h-8 w-8" />,
      title: "Archives without the headache",
      description: "Open most formats, repack to ZIP, and unlock password-protected ZIP and RAR files."
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Private by default",
      description: "Everything runs on your Mac. Your files never touch a server."
    }
  ];

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Does the work. Skips the busywork.
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="glass-card rounded-2xl p-8 hover:scale-105 transition-all"
            >
              <div className="text-primary mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
