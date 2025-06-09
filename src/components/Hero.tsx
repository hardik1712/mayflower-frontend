
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-accent/10 pt-16">
      <div className="container-max section-padding text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Welcome to
            <span className="block text-accent">Mayflower</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/90 mb-8 leading-relaxed">
            Navigating the future through innovative solutions and exceptional teamwork. 
            Discover our mission, meet our team, and join us on this incredible journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 text-lg"
            >
              Learn More
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background font-semibold px-8 py-3 text-lg"
            >
              Join Our Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
