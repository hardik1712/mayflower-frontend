
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Substack = () => {
  const articles = [
    {
      id: 1,
      title: "Latest Insights from Smooth Operator",
      excerpt: "Exploring the intersection of innovation and practical implementation in our latest research findings. Dive deep into methodologies that are shaping the future of technology and human interaction.",
      url: "https://substack.com/home/post/p-165763046",
      date: "Recent",
      image: "/placeholder.svg", // Using placeholder for now - you can replace with actual article images
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "The Future of Innovation",
      excerpt: "Understanding how emerging technologies shape our approach to problem-solving and creative solutions. A comprehensive look at trends that will define the next decade of technological advancement.",
      url: "https://substack.com/home/post/p-165762903",
      date: "This Week",
      image: "/placeholder.svg", // Using placeholder for now - you can replace with actual article images
      readTime: "8 min read"
    }
  ];

  const substackProfileUrl = "https://substack.com/@smoothoperaterr";

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-card border-b border-border py-4">
        <div className="container-max section-padding">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-foreground hover:text-accent transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Back to Mayflower</span>
            </Link>
            <Button 
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              asChild
            >
              <a href={substackProfileUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit Full Profile
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-16 bg-secondary/20">
        <div className="container-max section-padding text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Smooth Operator Substack
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Explore the latest insights, research, and discoveries from my Substack profile. 
            Stay updated with cutting-edge thoughts on innovation and technology.
          </p>
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
            asChild
          >
            <a href={substackProfileUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-5 w-5 mr-2" />
              Subscribe on Substack
            </a>
          </Button>
        </div>
      </section>

      {/* Articles */}
      <section className="py-20">
        <div className="container-max section-padding">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Latest Articles
            </h2>
            <p className="text-lg text-muted-foreground">
              Recent posts from the Smooth Operator Substack
            </p>
          </div>

          <div className="grid gap-8 md:gap-12">
            {articles.map((article) => (
              <Card key={article.id} className="bg-card border-border hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="md:flex">
                  {/* Article Image */}
                  <div className="md:w-1/3">
                    <div className="aspect-video md:aspect-square bg-muted">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Article Content */}
                  <div className="md:w-2/3">
                    <CardContent className="p-6 md:p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-sm text-accent font-medium bg-accent/10 px-3 py-1 rounded-full">
                          {article.date}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {article.readTime}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                        {article.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center gap-4">
                        <Button 
                          className="bg-accent hover:bg-accent/90 text-accent-foreground"
                          asChild
                        >
                          <a href={article.url} target="_blank" rel="noopener noreferrer">
                            Read Full Article
                            <ExternalLink className="h-4 w-4 ml-2" />
                          </a>
                        </Button>
                        
                        <Button 
                          variant="outline"
                          size="sm"
                          className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                          asChild
                        >
                          <a href={substackProfileUrl} target="_blank" rel="noopener noreferrer">
                            View on Substack
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 p-8 bg-secondary/20 rounded-lg">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Want to read more?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Visit my full Substack profile to explore all articles, subscribe for updates, 
              and join the community of readers interested in innovation and technology.
            </p>
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              asChild
            >
              <a href={substackProfileUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-5 w-5 mr-2" />
                Visit Complete Profile
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Substack;
