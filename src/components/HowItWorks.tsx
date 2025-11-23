const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Drop files",
      description: "Drag and drop any files — images, videos, documents, or archives"
    },
    {
      number: "2",
      title: "Choose a format",
      description: "Select your desired output format from the options"
    },
    {
      number: "3",
      title: "Enjoy the result",
      description: "Get your converted files instantly, no waiting"
    }
  ];

  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Two steps. Any workload.
          </h2>
          <p className="text-xl text-muted-foreground">
            No setup required. Drop mixed files and let Converleon handle the rest.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="glass-card rounded-2xl p-8 text-center transition-all hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent mb-6">
                <span className="text-2xl font-bold">{step.number}</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
