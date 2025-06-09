
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Careers = () => {
  const openPositions = [
    {
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Remote / San Francisco",
      type: "Full-time",
      description: "Join our engineering team to build cutting-edge user interfaces that delight our users."
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Remote / New York",
      type: "Full-time",
      description: "Lead product strategy and work with cross-functional teams to bring innovative features to life."
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote / Los Angeles",
      type: "Full-time",
      description: "Create beautiful, intuitive experiences that make complex technology accessible to everyone."
    },
    {
      title: "Data Scientist",
      department: "Research",
      location: "Remote / Boston",
      type: "Full-time",
      description: "Use data to uncover insights that drive product decisions and business growth."
    }
  ];

  const benefits = [
    "Competitive salary and equity",
    "Comprehensive health coverage",
    "Flexible work arrangements",
    "Professional development budget",
    "Unlimited PTO policy",
    "Modern equipment and tools"
  ];

  return (
    <section id="careers" className="py-20 bg-background">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Join Our Journey
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Be part of something bigger. Help us shape the future while building your career 
            alongside some of the most talented people in the industry.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold text-foreground mb-8">Open Positions</h3>
            <div className="space-y-6">
              {openPositions.map((position, index) => (
                <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-card-foreground mb-2">{position.title}</h4>
                        <div className="flex flex-wrap gap-4 text-sm text-card-foreground/80 mb-3">
                          <span className="bg-accent/20 px-3 py-1 rounded-full">{position.department}</span>
                          <span className="bg-accent/20 px-3 py-1 rounded-full">{position.location}</span>
                          <span className="bg-accent/20 px-3 py-1 rounded-full">{position.type}</span>
                        </div>
                      </div>
                      <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold mt-4 md:mt-0">
                        Apply Now
                      </Button>
                    </div>
                    <p className="text-card-foreground/80 leading-relaxed">{position.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-foreground mb-8">Why Mayflower?</h3>
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold text-card-foreground mb-6">Benefits & Perks</h4>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-card-foreground/80">
                      <span className="text-accent mr-3">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-accent/10 border-accent/30 mt-6">
              <CardContent className="p-6 text-center">
                <h4 className="text-xl font-bold text-card-foreground mb-4">Don't see a fit?</h4>
                <p className="text-card-foreground/80 mb-6 leading-relaxed">
                  We're always looking for exceptional talent. Send us your resume and tell us how you'd like to contribute.
                </p>
                <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                  Get in Touch
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
