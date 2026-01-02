import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const FinalCTA = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="glass-card rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-50" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 flex flex-col gap-2">
              <span>Drop files.</span>
              <span>Choose a format.</span>
              <span>Done.</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Join Mac users who have simplified their file workflow with Converleon
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90"
              >
                <a
                  href="https://apps.apple.com/app/converleon/id6751464821"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download on the Mac App Store
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=converleonapp@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "text-lg px-8 py-6 glass-card cursor-pointer"
                )}
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
