
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              About Mayflower
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Founded on the principles of exploration and discovery, Mayflower 
              emerged from a vision to create meaningful change in the world. Just as the original 
              Mayflower carried brave souls to new lands, we carry innovative ideas 
              to new possibilities.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our journey is documented and shared through our insights and updates, keeping our 
              community informed about our progress and discoveries.
            </p>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              asChild
            >
              <Link to="/substack">
                Read our Substack →
              </Link>
            </Button>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To harness technology to solve real-world problems and create 
                lasting positive change for communities worldwide.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the guiding digital force that transforms the fabric of 
                healthcare.
              </p>
            </div>
            
            <Card className="bg-muted/30 border-muted">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold text-foreground mb-2">Founded</h4>
                <p className="text-lg text-muted-foreground">2024</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
