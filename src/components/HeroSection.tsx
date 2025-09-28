import { ArrowDown, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/joshua-profile.jpg';

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="animate-fadeIn">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="relative inline-block">
              <img
                src={profileImage}
                alt="Joshua Herbert Japheth Profile"
                className="w-48 h-48 sm:w-56 sm:h-56 rounded-full object-cover mx-auto shadow-glow animate-float"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 animate-glow"></div>
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block text-foreground">Joshua Herbert</span>
            <span className="block hero-text">Japheth</span>
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
            Aspiring AI & Data Science Professional
          </p>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            B.Tech Student at RSET, Kochi • Passionate about Machine Learning, Data Visualization & Game Development
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={scrollToProjects}
              className="hero-button"
              size="lg"
            >
              View My Work
            </Button>
            <Button 
              onClick={scrollToAbout}
              variant="outline" 
              size="lg"
              className="hover:bg-secondary hover:border-primary"
            >
              Learn More
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/stredevirad/stredevirad.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/joshuaherbertjapheth/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:joshuajapheth14@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a
              href="tel:+917994462227"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="Phone"
            >
              <Phone size={24} />
            </a>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={scrollToAbout}
            className="animate-bounce text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-label="Scroll to About section"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;