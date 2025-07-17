
import { Button } from '@/components/ui/button';
import { Rocket } from 'lucide-react';

const Careers = () => {
  return (
    <section id="careers" className="py-20 bg-muted/20">
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Rocket className="h-8 w-8 text-primary" />
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Join Our Journey
              </h2>
            </div>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We're not currently hiring right now, but we're always excited to meet 
              brilliant individuals who share our vision for transformative impact.
            </p>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3"
            >
              Stay Connected
            </Button>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-auto">
                {/* Placeholder for mobile phones image */}
                <div className="bg-muted rounded-2xl p-8 text-center">
                  <p className="text-muted-foreground">Mobile App Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
