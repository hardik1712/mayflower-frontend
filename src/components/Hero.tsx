
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-primary pt-16">
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Welcome to Mayflower
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed max-w-lg">
              Founded on the principles of exploration and discovery, Mayflower 
              emerged from a vision to create meaningful change in the world. Just as the original 
              Mayflower carried brave souls to new lands, we carry innovative ideas 
              to new possibilities.
            </p>
            <Button 
              size="lg" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-8 py-3 text-lg"
            >
              Join Our Team
            </Button>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src="/lovable-uploads/88340341-86f2-46d4-9edf-9840a3579c20.png" 
                alt="Mayflower Dashboard" 
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
