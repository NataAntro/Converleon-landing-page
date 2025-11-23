import { FileStack, Layers, Lock, Shuffle, FileText, Archive } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: <FileStack className="h-8 w-8" />,
      title: "All-in-one multi-tool",
      description: "Images, Video, Audio, Documents, PDF Tools, Archives — everything in one app"
    },
    {
      icon: <Layers className="h-8 w-8" />,
      title: "Batch convert hundreds",
      description: "Process hundreds of files at once with full batch conversion support"
    },
    {
      icon: <Shuffle className="h-8 w-8" />,
      title: "Smart mixed drops",
      description: "Converts only compatible files, safely skips unsupported ones"
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "PDF superpowers",
      description: "Merge from anything, export page by page to images"
    },
    {
      icon: <Archive className="h-8 w-8" />,
      title: "Archive handling",
      description: "Open many formats, repack to ZIP, password support for ZIP/RAR"
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Privacy first",
      description: "Fully offline, on-device processing. No cloud uploads, ever."
    }
  ];

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything you need.
            <br />
            <span className="gradient-text">Nothing you don't.</span>
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
