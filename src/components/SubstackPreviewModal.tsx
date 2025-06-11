
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

interface SubstackPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SubstackPreviewModal = ({ isOpen, onClose }: SubstackPreviewModalProps) => {
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
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground mb-2">
            Mayflower Substack Articles
          </DialogTitle>
          <p className="text-muted-foreground">
            Explore our latest insights, research, and discoveries
          </p>
        </DialogHeader>
        
        <div className="mt-6">
          <div className="grid gap-6">
            {recentArticles.map((article, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-sm text-accent font-medium">{article.date}</span>
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-3">
                    {article.title}
                  </h4>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                    asChild
                  >
                    <a href={article.url} target="_blank" rel="noopener noreferrer">
                      Read Full Article
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8 pt-6 border-t border-border">
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              asChild
            >
              <a href="https://substack.com/@smoothoperaterr" target="_blank" rel="noopener noreferrer">
                Visit Full Substack Profile
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SubstackPreviewModal;
