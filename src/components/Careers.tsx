
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Careers = () => {
  return (
    <section id="careers" className="py-20 bg-background">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Join Our Journey
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            We're not currently hiring, but we're always looking for exceptional talent. 
            Check back soon for exciting opportunities to join our team.
          </p>
        </div>

        <div className="text-center">
          <Card className="bg-accent/10 border-accent/30 max-w-md mx-auto">
            <CardContent className="p-6 text-center">
              <h4 className="text-xl font-bold text-card-foreground mb-4">Stay Updated</h4>
              <p className="text-card-foreground/80 mb-6 leading-relaxed">
                Want to be notified when positions open up? Get in touch with us.
              </p>
              <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                Get in Touch
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Careers;
