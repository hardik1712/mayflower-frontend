
const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container-max section-padding">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Mayflower</h3>
            <p className="text-primary-foreground/80 leading-relaxed mb-4">
              Navigating the future through innovative solutions and exceptional teamwork. 
              Join us on this incredible journey of discovery and growth.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">About</a></li>
              <li><a href="#team" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Team</a></li>
              <li><a href="#mission" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Mission</a></li>
              <li><a href="#careers" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Substack</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">LinkedIn</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Twitter</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/80">
            © 2024 Mayflower. All rights reserved. Built with passion and purpose.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
