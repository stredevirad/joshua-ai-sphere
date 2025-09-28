import { ArrowDown, Github, Linkedin, Mail, Phone, Code, Database, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Enhanced Background with Multiple Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/10 to-background"></div>
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
      
      {/* Enhanced Floating Elements with Glow Effects */}
      <div className="absolute top-20 left-10 opacity-10 animate-float">
        <div className="relative">
          <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl"></div>
          <Code size={60} className="relative text-primary" />
        </div>
      </div>
      <div className="absolute top-40 right-16 opacity-10 animate-float" style={{ animationDelay: '2s' }}>
        <div className="relative">
          <div className="absolute inset-0 bg-accent/30 rounded-full blur-xl"></div>
          <Database size={50} className="relative text-accent" />
        </div>
      </div>
      <div className="absolute bottom-32 left-20 opacity-10 animate-float" style={{ animationDelay: '4s' }}>
        <div className="relative">
          <div className="absolute inset-0 bg-primary-glow/30 rounded-full blur-xl"></div>
          <Brain size={70} className="relative text-primary-glow" />
        </div>
      </div>
      
      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent/40 rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-primary-glow/20 rounded-full animate-ping" style={{ animationDelay: '5s' }}></div>
      </div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="h-full w-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%221%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto text-center z-10">
        <div className="animate-fadeIn">
          {/* Animated Center Element */}
          <div className="mb-12">
            <div className="relative inline-block group">
              {/* Rotating Rings */}
              <div className="absolute inset-0 w-64 h-64 mx-auto">
                <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
                <div className="absolute inset-4 border border-accent/30 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
                <div className="absolute inset-8 border border-primary-glow/20 rounded-full animate-spin" style={{ animationDuration: '10s' }}></div>
              </div>
              
              {/* Central Animated Icon */}
              <div className="relative w-64 h-64 mx-auto flex items-center justify-center">
                {/* Pulsing Background */}
                <div className="absolute inset-16 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-full animate-pulse"></div>
                
                {/* Main Icon */}
                <div className="relative z-10 p-8 rounded-full bg-card/30 backdrop-blur-sm border border-border/50 group-hover:border-primary/50 transition-all duration-500 hover:scale-110">
                  <Brain size={80} className="text-primary animate-pulse" />
                </div>
                
                {/* Orbiting Elements */}
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '8s' }}>
                  <Code size={24} className="absolute top-4 left-1/2 transform -translate-x-1/2 text-accent" />
                </div>
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '12s', animationDirection: 'reverse' }}>
                  <Database size={20} className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-primary-glow" />
                </div>
                
                {/* Floating Particles */}
                <div className="absolute top-8 right-8 w-3 h-3 bg-primary/60 rounded-full animate-ping"></div>
                <div className="absolute bottom-8 left-8 w-2 h-2 bg-accent/60 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 right-4 w-1 h-1 bg-primary-glow/60 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
              </div>
            </div>
          </div>

          {/* Enhanced Main Content */}
          <div className="space-y-6 mb-12">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight">
              <span className="block text-foreground mb-2 animate-fadeIn">Joshua Herbert</span>
              <span className="block hero-text animate-fadeIn" style={{ animationDelay: '0.2s' }}>Japheth</span>
            </h1>

            <div className="space-y-4 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
              <p className="text-xl sm:text-3xl font-light text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Aspiring AI & Data Science Professional
              </p>
              
              <div className="flex items-center justify-center gap-2 text-lg text-muted-foreground/80">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span>B.Tech Student at RSET, Kochi</span>
                <div className="w-1 h-1 bg-muted-foreground/50 rounded-full"></div>
                <span>ML Enthusiast</span>
                <div className="w-1 h-1 bg-muted-foreground/50 rounded-full"></div>
                <span>Game Developer</span>
              </div>
            </div>
          </div>

          {/* Modern Floating Cards */}
          <div className="mb-12 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105">
                <Brain size={16} className="text-primary" />
                <span className="text-sm font-medium">Machine Learning</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 hover:border-accent/50 transition-all duration-300 hover:scale-105">
                <Database size={16} className="text-accent" />
                <span className="text-sm font-medium">Data Visualization</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary-glow/50 transition-all duration-300 hover:scale-105">
                <Code size={16} className="text-primary-glow" />
                <span className="text-sm font-medium">Game Development</span>
              </div>
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fadeIn" style={{ animationDelay: '0.8s' }}>
            <Button 
              onClick={scrollToProjects}
              className="relative group overflow-hidden rounded-xl px-8 py-4 font-semibold text-lg bg-primary text-primary-foreground hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              size="lg"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-glow/0 via-primary-glow/20 to-primary-glow/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </Button>
            
            <Button 
              onClick={scrollToAbout}
              variant="outline" 
              size="lg"
              className="relative group rounded-xl px-8 py-4 font-semibold text-lg border-2 border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              <span className="relative z-10">Learn More</span>
            </Button>
          </div>

          {/* Enhanced Social Links */}
          <div className="flex justify-center gap-8 mb-16 animate-fadeIn" style={{ animationDelay: '1s' }}>
            <a
              href="https://github.com/stredevirad/stredevirad.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 rounded-full bg-card/30 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              aria-label="GitHub Profile"
            >
              <Github size={24} className="text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              <div className="absolute inset-0 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <a
              href="https://www.linkedin.com/in/joshuaherbertjapheth/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 rounded-full bg-card/30 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} className="text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              <div className="absolute inset-0 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <a
              href="mailto:joshuajapheth14@gmail.com"
              className="group relative p-4 rounded-full bg-card/30 backdrop-blur-sm border border-border/50 hover:border-accent/50 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              aria-label="Email"
            >
              <Mail size={24} className="text-muted-foreground group-hover:text-accent transition-colors duration-300" />
              <div className="absolute inset-0 rounded-full bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <a
              href="tel:+917994462227"
              className="group relative p-4 rounded-full bg-card/30 backdrop-blur-sm border border-border/50 hover:border-accent-glow/50 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              aria-label="Phone"
            >
              <Phone size={24} className="text-muted-foreground group-hover:text-accent-glow transition-colors duration-300" />
              <div className="absolute inset-0 rounded-full bg-accent-glow/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>

          {/* Enhanced Scroll Indicator */}
          <div className="animate-fadeIn" style={{ animationDelay: '1.2s' }}>
            <button
              onClick={scrollToAbout}
              className="group relative p-3 rounded-full hover:bg-primary/10 transition-all duration-300 animate-bounce hover:animate-none"
              aria-label="Scroll to About section"
            >
              <ArrowDown size={28} className="text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              <div className="absolute inset-0 rounded-full border border-muted-foreground/20 group-hover:border-primary/50 transition-colors duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;