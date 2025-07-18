
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Users, Target, Lightbulb, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const teamMembers = [
    { name: "Vishal Srivastava", role: "CEO", image: "/lovable-uploads/19e433d7-1793-4949-91fa-199a37b155ea.png" },
    { name: "Arvind Sinha", role: "Senior Advisor, Cloud Technologies", image: "/lovable-uploads/73690854-a71e-4ec2-bc47-c3137ede853b.png" },
    { name: "Philip Thomas", role: "Senior Advisor UI/UX", image: "/lovable-uploads/6323c771-cc68-4bcd-a3b8-0f0c5f5558e8.png" },
    { name: "Mithun Diddi", role: "AI Scientist and Co-Founder", image: "/lovable-uploads/a845a416-21cb-498e-9f72-02e87294532c.png" },
    { name: "Sahil Ganghas", role: "Senior Developer", image: "/lovable-uploads/57f38820-23ec-49de-a0c1-d9eb120ee568.png" },
    { name: "Vaibhav Srivastava", role: "Product Manager", image: "/lovable-uploads/f6b33a78-0cc4-4dfd-886d-4a9a5113a106.png" },
    { name: "Swarali Pednekar", role: "Associate Product Manager", image: "/lovable-uploads/97c321ff-4b0e-4c84-8094-ec9a8733a501.png" },
    { name: "Hardik Iyer", role: "AI Research Engineer", image: "/lovable-uploads/0cc7d3b1-e505-4fad-98b1-2acfdf26fafd.png" },
    { name: "Dr. Itisha Wadhwa", role: "Medical Liaison and Advisor", image: "" }
  ];

  const coreValues = [
    { title: "Innovation", description: "Pushing boundaries and fostering creativity in everything we do." },
    { title: "Collaboration", description: "Working together as a unified team to achieve shared goals." },
    { title: "Purpose", description: "Driven by a mission to make a meaningful impact on the world." },
    { title: "Growth", description: "Continuously learning, evolving and striving for excellence." }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#3F533F] text-white px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-xl font-bold font-fraunces">Mayflower</div>
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="hover:text-gray-200 font-fraunces">Home</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-gray-200 font-fraunces">About</button>
            <button onClick={() => scrollToSection('team')} className="hover:text-gray-200 font-fraunces">Team</button>
            <button onClick={() => scrollToSection('join')} className="hover:text-gray-200 font-fraunces">Careers</button>
          </nav>
          <Button className="bg-[#2F3F2F] hover:bg-[#1F2F1F] text-white rounded-full px-6 font-fraunces">
            Get Started
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-[#3F533F] text-white py-20 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-fraunces text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Welcome to Mayflower
            </h1>
            <p className="text-lg mb-8 text-gray-100">
              Experience the true principles of development and discover our simplified 
              framework in the form of Cycle: Health, Discover your marketing, heal 
              your vision, and pull up on this remarkable journey.
            </p>
            <Button className="bg-[#2F3F2F] hover:bg-[#1F2F1F] text-white rounded-md px-8 py-3 font-fraunces">
              Join Our Team
            </Button>
          </div>
          <div className="relative">
            <div className="bg-white rounded-lg shadow-2xl p-6 transform rotate-6">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop" 
                alt="Dashboard" 
                className="w-full h-48 object-cover rounded-md"
              />
              <div className="mt-4 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Revenue</span>
                  <span className="font-bold text-gray-800">$156,000</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#3F533F] h-2 rounded-full w-3/4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h2 className="font-fraunces text-2xl sm:text-3xl font-bold text-gray-800 mb-6">About Mayflower</h2>
            <p className="text-gray-600 mb-6">
              Founded on the principles of development and discovery, Mayflower 
              has grown from a vision to provide meaningful solutions to emerging, 
              even if we are busy for the year. Mayflower created fusion challenges for 
              all teams and to use the word, and it has been proven that it will bring 
              an original change along all time.
            </p>
            <p className="text-gray-600 mb-8">
              Dedicated to our community, our leadership team has trained very great 
              partners, protecting our businesses to formed about our projected 
              new challenges.
            </p>
            <Button asChild className="bg-[#3F533F] hover:bg-[#2F3F2F] text-white rounded-md px-6 py-2 flex items-center font-fraunces">
              <Link to="/substack">
                Read our substack
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="font-fraunces text-xl font-semibold text-gray-800 mb-3">Our Mission</h3>
              <p className="text-gray-600 text-sm">
                To bring challenging solutions that lead everyone's results including 
                technologies that are continuously discovered including business ideas.
              </p>
            </div>
            <div>
              <h3 className="font-fraunces text-xl font-semibold text-gray-800 mb-3">Our Vision</h3>
              <p className="text-gray-600 text-sm">
                To become the global digital transformation in the field of 
                trade connections.
              </p>
            </div>
            <div>
              <h3 className="font-fraunces text-xl font-semibold text-gray-800 mb-3">Founded</h3>
              <p className="text-gray-600 text-sm">2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-6 bg-[#3F533F] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-fraunces text-2xl sm:text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-gray-100 mb-12">
            If everyone is moving forward together, then success takes care of itself
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-white text-gray-800">
                <CardContent className="p-6 text-center">
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                    />
                  ) : (
                    <div className="w-20 h-20 rounded-full mx-auto mb-4 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-400 text-xs">No Image</span>
                    </div>
                  )}
                  <h3 className="font-semibold text-lg font-fraunces">{member.name}</h3>
                  <p className="text-gray-600 text-sm">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-fraunces text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Our Core Values</h2>
          <p className="text-gray-600 mb-12">The principles that guide everything we do.</p>
          <div className="grid md:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-[#3F533F] rounded-lg flex items-center justify-center mx-auto mb-4">
                  {index === 0 && <Lightbulb className="h-6 w-6 text-white" />}
                  {index === 1 && <Users className="h-6 w-6 text-white" />}
                  {index === 2 && <Target className="h-6 w-6 text-white" />}
                  {index === 3 && <TrendingUp className="h-6 w-6 text-white" />}
                </div>
                <h3 className="font-fraunces font-semibold text-lg text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="join" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-[#3F533F] rounded flex items-center justify-center mr-3">
                <span className="text-white font-bold">🚀</span>
              </div>
              <h2 className="font-fraunces text-xl sm:text-2xl font-bold text-gray-800">Join Our Journey</h2>
            </div>
            <p className="text-gray-600 mb-8">
              We're not actively hiring right now, but we are always excited to meet 
              talented individuals. Send us your interest for the candidate and 
              we'll connect if interesting opportunities arise.
            </p>
            <Button asChild className="bg-[#3F533F] hover:bg-[#2F3F2F] text-white rounded-md px-8 py-3 font-fraunces">
              <a href="mailto:contact@mayflower-health.com">
                Contact us on: contact@mayflower-health.com
              </a>
            </Button>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=600&fit=crop" 
                alt="Mobile App" 
                className="w-48 h-96 object-cover rounded-3xl shadow-2xl transform rotate-12"
              />
              <img 
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=600&fit=crop" 
                alt="Mobile App" 
                className="w-48 h-96 object-cover rounded-3xl shadow-2xl absolute top-8 -left-8 transform -rotate-12"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3F533F] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-fraunces text-lg font-semibold mb-4">About Mayflower</h3>
            <p className="text-gray-200 text-sm mb-4">
              Mayflower brings change in applying and including 
              technology the level of digital innovation and 
              a set of new possibilities.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full"></div>
              <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full"></div>
              <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full"></div>
            </div>
          </div>
          <div>
            <h3 className="font-fraunces text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-200">
              <li><button onClick={() => scrollToSection('about')} className="hover:text-white">About Us</button></li>
              <li><button onClick={() => scrollToSection('team')} className="hover:text-white">Our Team</button></li>
              <li><a href="#" className="hover:text-white">Our Values</a></li>
              <li><button onClick={() => scrollToSection('join')} className="hover:text-white">Careers</button></li>
            </ul>
          </div>
          <div>
            <h3 className="font-fraunces text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>contact@mayflower-health.com</li>
            </ul>
          </div>
          <div></div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-white border-opacity-20 mt-8 pt-8 text-center">
          <p className="text-gray-200 text-sm">
            © 2024 Mayflower. All rights reserved. Built with love and purpose.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
