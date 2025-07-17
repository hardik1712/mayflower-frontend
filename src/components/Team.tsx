
import { Card, CardContent } from '@/components/ui/card';

const Team = () => {
  const teamMembers = [
    {
      name: "Vishal Srivastava",
      role: "Co-founder",
      image: "/lovable-uploads/1c7390df-7707-4c5d-bfd9-d0391b0307c9.png"
    },
    {
      name: "Arvind Sinha",
      role: "Executive Advisor",
      image: "/lovable-uploads/384399df-f06c-45d8-a23e-f8707fe4d271.png"
    },
    {
      name: "Philip Thomas",
      role: "Co-founder",
      image: "/lovable-uploads/c34464f8-cdc5-4ce7-955f-bd139726eceb.png"
    },
    {
      name: "Mithun Diddi",
      role: "Software Engineer",
      image: "/lovable-uploads/e66ba98f-5ed7-4204-a25b-7858fd4d37db.png"
    },
    {
      name: "Sahil Ganghas",
      role: "Data Scientist",
      image: "/lovable-uploads/f129d2bd-fc3e-48bd-b56c-80baf7591cbc.png"
    },
    {
      name: "Vaibhav Srivastava",
      role: "Data Scientist",
      image: "/lovable-uploads/1c7390df-7707-4c5d-bfd9-d0391b0307c9.png"
    },
    {
      name: "Swuratii Pednekar",
      role: "Program Manager",
      image: "/lovable-uploads/384399df-f06c-45d8-a23e-f8707fe4d271.png"
    },
    {
      name: "Hardik Iyer",
      role: "Machine Learning",
      image: "/lovable-uploads/c34464f8-cdc5-4ce7-955f-bd139726eceb.png"
    },
    {
      name: "Dr. Itisha Wadhwa",
      role: "Clinical Advisor",
      image: "/lovable-uploads/e66ba98f-5ed7-4204-a25b-7858fd4d37db.png"
    }
  ];

  return (
    <section id="team" className="py-20 bg-primary">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Meet Our Team
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
            If everyone is moving forward together, then success takes care of itself.
          </p>
          <p className="text-lg text-primary-foreground/80 mt-2">- Henry Ford</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card key={index} className="bg-primary-foreground border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-muted">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
