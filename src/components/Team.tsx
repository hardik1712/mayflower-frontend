
import { Card, CardContent } from '@/components/ui/card';

const Team = () => {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "Co-Founder & CEO",
      bio: "Visionary leader with 15+ years in tech innovation and sustainable business development.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Marcus Rodriguez",
      role: "Co-Founder & CTO",
      bio: "Technical architect passionate about building scalable solutions that drive positive change.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Dr. Emily Watson",
      role: "Head of Research",
      bio: "PhD in Computer Science, leading our research initiatives in AI and sustainable technology.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "James Park",
      role: "Head of Design",
      bio: "Award-winning designer focused on creating intuitive and accessible user experiences.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    }
  ];

  return (
    <section id="team" className="py-20 bg-background">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Meet Our Team
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            The brilliant minds behind Mayflower, united by a shared passion for innovation 
            and commitment to excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover mb-4 border-4 border-accent/20"
                  />
                  <h3 className="text-xl font-bold text-card-foreground mb-2">{member.name}</h3>
                  <p className="text-accent font-semibold mb-3">{member.role}</p>
                </div>
                <p className="text-card-foreground/80 leading-relaxed">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
