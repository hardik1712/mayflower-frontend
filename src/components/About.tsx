import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Mayflower
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Mayflower represents a new frontier in innovation, combining cutting-edge technology 
            with human-centered design to create solutions that matter.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">Our Story</h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Founded on the principles of exploration and discovery, Mayflower emerged from a vision 
              to create meaningful change in the world. Just as the original Mayflower carried brave 
              souls to new lands, we carry innovative ideas to new possibilities.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our journey is documented and shared through our insights and updates, keeping our 
              community informed about our progress and discoveries.
            </p>
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              asChild
            >
              <a href="https://substack.com/@smoothoperaterr" target="_blank" rel="noopener noreferrer">
                Read Our Substack
              </a>
            </Button>
          </div>
          <div>
            <Card className="bg-card border-border shadow-lg">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <h4 className="text-2xl font-bold text-foreground mb-2">Founded</h4>
                    <p className="text-lg text-muted-foreground">2024</p>
                  </div>
                  <div className="text-center">
                    <h4 className="text-2xl font-bold text-foreground mb-2">Mission</h4>
                    <p className="text-lg text-muted-foreground">Innovation through collaboration</p>
                  </div>
                  <div className="text-center">
                    <h4 className="text-2xl font-bold text-foreground mb-2">Vision</h4>
                    <p className="text-lg text-muted-foreground">Shaping tomorrow's world</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
