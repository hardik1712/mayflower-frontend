
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

const About = () => {
  const recentArticles = [
    {
      title: "Latest Insights from Mayflower",
      excerpt: "Exploring the intersection of innovation and practical implementation in our latest research findings...",
      url: "https://substack.com/@smoothoperaterr/note/c-124552316",
      date: "Recent"
    },
    {
      title: "The Future of Innovation",
      excerpt: "Understanding how emerging technologies shape our approach to problem-solving and creative solutions...",
      url: "https://substack.com/@smoothoperaterr",
      date: "This Week"
    },
    {
      title: "Building Tomorrow",
      excerpt: "A deep dive into the methodologies and principles that guide our mission at Mayflower...",
      url: "https://substack.com/@smoothoperaterr",
      date: "Last Week"
    }
  ];

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

        {/* Latest Articles Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Latest Articles</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay updated with our latest insights, research, and discoveries shared on our Substack.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {recentArticles.map((article, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-sm text-accent font-medium">{article.date}</span>
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                    {article.title}
                  </h4>
                  <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                    asChild
                  >
                    <a href={article.url} target="_blank" rel="noopener noreferrer">
                      Read Article
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button 
              variant="ghost" 
              size="lg"
              className="text-accent hover:bg-accent/10"
              asChild
            >
              <a href="https://substack.com/@smoothoperaterr" target="_blank" rel="noopener noreferrer">
                View All Articles →
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
