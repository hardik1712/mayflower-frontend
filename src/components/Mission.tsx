
import { Card, CardContent } from '@/components/ui/card';

const Mission = () => {
  const values = [
    {
      title: "Innovation",
      description: "Push beyond what's possible and continuously transform through technological advancement.",
      icon: "💡"
    },
    {
      title: "Collaboration",
      description: "Working together as a unified force that amplifies our collective impact.",
      icon: "🤝"
    },
    {
      title: "Purpose",
      description: "Every decision we make is to improve human experience and address real-world challenges.",
      icon: "❤️"
    },
    {
      title: "Growth",
      description: "Continuously learning and pushing boundaries to achieve excellence and meaningful progress.",
      icon: "🌱"
    }
  ];

  return (
    <section id="mission" className="py-20 bg-background">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Core Values
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            The principles that guide everything we do.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="bg-muted/30 border-muted hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-6">{value.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-4">{value.title}</h3>
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
