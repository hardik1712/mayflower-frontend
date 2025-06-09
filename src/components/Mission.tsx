
import { Card, CardContent } from '@/components/ui/card';

const Mission = () => {
  const values = [
    {
      title: "Innovation",
      description: "We push boundaries and challenge conventional thinking to create breakthrough solutions.",
      icon: "💡"
    },
    {
      title: "Collaboration",
      description: "We believe the best ideas emerge when diverse minds work together toward common goals.",
      icon: "🤝"
    },
    {
      title: "Impact",
      description: "Every project we undertake is designed to create meaningful, positive change in the world.",
      icon: "🌍"
    },
    {
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from concept to execution.",
      icon: "⭐"
    }
  ];

  return (
    <section id="mission" className="py-20 bg-background">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            To navigate the future through innovative solutions that empower people, 
            organizations, and communities to thrive in an ever-changing world.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-primary/5 border-primary/20 shadow-lg">
            <CardContent className="p-8 md:p-12 text-center">
              <h3 className="text-3xl font-bold text-foreground mb-6">Our Vision</h3>
              <p className="text-xl text-muted-foreground leading-relaxed">
                "To be the guiding star for organizations embarking on transformative journeys, 
                just as the Mayflower guided pioneers to new horizons. We envision a world where 
                technology serves humanity's highest aspirations."
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
