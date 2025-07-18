
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Substack = () => {
  const articles = [
    {
      id: 1,
      title: "Why Patient Trust Starts with Smarter Data Sharing",
      summary: "Exploring how artificial intelligence is revolutionizing medical diagnosis, treatment planning, and patient care across various healthcare sectors.",
      image: "/lovable-uploads/838bf94b-fe35-42d7-946f-21fef1fad89b.png",
      link: "https://substack.com/home/post/p-167967178"
    },
    {
      id: 2,
      title: "What Does it Mean to be a AI-Native Health Tech Platform",
      summary: "A comprehensive guide to implementing digital transformation initiatives that drive business growth and operational efficiency.",
      image: "/lovable-uploads/27c0daca-358a-4202-9f2d-c6156fef5636.png",
      link: "https://substack.com/home/post/p-166048892"
    },
    {
      id: 3,
      title: "India's Quite Revolution in Healthcare",
      summary: "Best practices for developing and maintaining technology solutions that can grow with your business needs and market demands.",
      image: "/lovable-uploads/15283dc0-8b6b-4bb0-8cfc-3d824a61478e.png",
      link: "https://substack.com/home/post/p-162068835"
    },
    {
      id: 4,
      title: "Mayflower",
      summary: "Insights into modern product development methodologies and how to foster innovation within your development teams.",
      image: "/lovable-uploads/0b2a86f2-3b48-4f80-92c0-e3ffeab7586c.png",
      link: "https://substack.com/home/post/p-161790860"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#3F533F] text-white px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-xl font-bold font-fraunces">Mayflower</div>
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-gray-200 font-fraunces">Home</Link>
            <a href="#" className="hover:text-gray-200 font-fraunces">About</a>
            <a href="#" className="hover:text-gray-200 font-fraunces">Team</a>
            <a href="#" className="hover:text-gray-200 font-fraunces">Careers</a>
          </nav>
          <Button className="bg-[#2F3F2F] hover:bg-[#1F2F1F] text-white rounded-full px-6 font-fraunces">
            Get Started
          </Button>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Back button */}
        <Link to="/" className="inline-flex items-center text-[#3F533F] hover:text-[#2F3F2F] mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        {/* Page title */}
        <div className="text-center mb-12">
          <h1 className="font-fraunces text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Substack Articles
          </h1>
          <p className="text-gray-600 text-lg">
            Insights and thoughts from the Mayflower team
          </p>
        </div>

        {/* Articles grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {articles.map((article) => (
            <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-fraunces text-xl font-semibold text-gray-800 mb-3">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {article.summary}
                  </p>
                  <Button 
                    asChild
                    variant="outline" 
                    className="border-[#3F533F] text-[#3F533F] hover:bg-[#3F533F] hover:text-white font-fraunces"
                  >
                    <a href={article.link} target="_blank" rel="noopener noreferrer">
                      Read Article
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Visit Substack profile button */}
        <div className="text-center">
          <Button 
            asChild
            className="bg-[#3F533F] hover:bg-[#2F3F2F] text-white px-8 py-3 text-lg font-fraunces"
          >
            <a href="https://substack.com/@vsmayflower" target="_blank" rel="noopener noreferrer">
              Visit Our Substack Profile
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#3F533F] text-white py-12 px-6 mt-16">
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
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Our Team</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
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

export default Substack;
