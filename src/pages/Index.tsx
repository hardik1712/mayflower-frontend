
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Team from '@/components/Team';
import Mission from '@/components/Mission';
import Careers from '@/components/Careers';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Team />
      <Mission />
      <Careers />
      <Footer />
    </div>
  );
};

export default Index;
