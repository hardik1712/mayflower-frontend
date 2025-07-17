
import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container-max section-padding">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-6">About Mayflower</h3>
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              Established to navigate the future through innovative solutions and exceptional teamwork. 
              Join us on this incredible journey of discovery and growth.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                <span className="text-sm">f</span>
              </div>
              <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                <span className="text-sm">in</span>
              </div>
              <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                <span className="text-sm">@</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">About Us</a></li>
              <li><a href="#team" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Our Team</a></li>
              <li><a href="#mission" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Our Mission</a></li>
              <li><a href="#careers" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Connect</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4" />
                <span className="text-primary-foreground/80">vaibhav@mayflower-health.com</span>
              </li>
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
