import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Monthly",
      description: "Recurring each month",
      price: "Starting at $2.99",
      popular: false
    },
    {
      name: "Yearly",
      description: "Best value yearly access",
      price: "Starting at $17.99",
      popular: true
    },
    {
      name: "Lifetime",
      description: "One-time purchase",
      price: "Starting at $34.99",
      popular: false
    }
  ];

  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-muted-foreground">
            Choose the plan that works best for you
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`glass-card rounded-3xl p-8 relative ${
                plan.popular ? 'ring-2 ring-primary' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-accent rounded-full text-sm font-semibold">
                  Best Value
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                <div className="text-3xl font-bold">{plan.price}</div>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">All conversion features</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Unlimited conversions</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Batch processing</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Priority support</span>
                </li>
              </ul>
              
              <Button 
                className={`w-full ${
                  plan.popular 
                    ? 'bg-primary hover:bg-primary/90' 
                    : 'bg-secondary hover:bg-secondary/90'
                }`}
              >
                Choose {plan.name}
              </Button>
            </div>
          ))}
        </div>
        
        <p className="text-center text-sm text-muted-foreground">
          Prices may vary by region.
        </p>
        
        <div className="text-center mt-8">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Unlock Pro on the Mac App Store
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
