import { Lock, HardDrive, WifiOff, Shield } from "lucide-react";

const Privacy = () => {
  const features = [
    {
      icon: <WifiOff className="h-8 w-8" />,
      title: "Offline"
    },
    {
      icon: <HardDrive className="h-8 w-8" />,
      title: "On-device"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "No settings"
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "No uploads"
    }
  ];

  return (
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="glass-card rounded-3xl p-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Private by design.
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Converleon runs fully on your Mac. No cloud uploads, no tracking, no internet required.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center gap-3">
                <div className="text-primary">{feature.icon}</div>
                <span className="font-semibold">{feature.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
