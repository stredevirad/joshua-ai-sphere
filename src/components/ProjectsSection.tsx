import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Star, Clock, Zap, Sparkles } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "2D Rhythm Parry Game",
      description: "An engaging rhythm-based game where players must time their parries to the beat. Features dynamic music synchronization and challenging gameplay mechanics.",
      technologies: ["Unity", "C#", "Game Design", "Audio Programming"],
      category: "Game Development",
      status: "Completed"
    },
    {
      title: "Data Visualization Lab Projects",
      description: "Comprehensive data analysis and visualization projects using R, working with CSV datasets to extract meaningful insights and create compelling visual narratives.",
      technologies: ["R", "ggplot2", "CSV Processing", "Statistical Analysis"],
      category: "Data Science",
      status: "Multiple Projects"
    },
    {
      title: "Resume.io PDF Cracker",
      description: "Automated tool for extracting and processing resume data from PDF files using web scraping techniques and HTTP Archive (HAR) file analysis.",
      technologies: ["Node.js", "Puppeteer", "HAR Analysis", "PDF Processing"],
      category: "Automation",
      status: "Completed"
    },
    {
      title: "Attendance Calculator App",
      description: "Smart attendance tracking application that helps students monitor their attendance percentage and provides insights for academic planning.",
      technologies: ["JavaScript", "Python", "Hybrid Development", "UI/UX"],
      category: "Utility App",
      status: "Completed"
    },
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website built with cutting-edge web technologies, featuring smooth animations and optimal performance.",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
      category: "Web Development",
      status: "In Progress"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "Game Development": "bg-purple-500/10 text-purple-400 border-purple-500/20",
      "Data Science": "bg-blue-500/10 text-blue-400 border-blue-500/20",
      "Automation": "bg-green-500/10 text-green-400 border-green-500/20",
      "Utility App": "bg-orange-500/10 text-orange-400 border-orange-500/20",
      "Web Development": "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
    };
    return colors[category as keyof typeof colors] || "bg-gray-500/10 text-gray-400 border-gray-500/20";
  };

  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 opacity-5 animate-float">
        <Sparkles size={150} className="text-primary" />
      </div>
      <div className="absolute bottom-20 left-10 opacity-5 animate-float" style={{ animationDelay: '3s' }}>
        <Zap size={120} className="text-accent" />
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my technical journey through innovative solutions and creative implementations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group relative overflow-hidden card-elegant hover:shadow-2xl transition-all duration-500 border-border/50 hover:border-primary/30">
              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Featured Badge for First Project */}
              {index === 0 && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-primary to-accent rounded-full text-xs font-bold text-white">
                    <Star size={12} />
                    Featured
                  </div>
                </div>
              )}
              
              <CardHeader className="relative pb-4">
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300 pr-2">
                    {project.title}
                  </CardTitle>
                  <Badge 
                    variant="outline" 
                    className={`text-xs font-medium border ${getCategoryColor(project.category)} shrink-0`}
                  >
                    {project.category}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="relative space-y-4">
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="skill-tag hover:bg-primary/20 transition-colors duration-200">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center gap-2">
                    <Clock size={14} className="text-muted-foreground" />
                    <Badge variant="secondary" className="text-xs font-medium">
                      {project.status}
                    </Badge>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="h-8 w-8 p-0 hover:bg-primary/10 hover:text-primary transition-all duration-200"
                      title="View Repository"
                    >
                      <Github size={16} />
                    </Button>
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="h-8 w-8 p-0 hover:bg-accent/10 hover:text-accent transition-all duration-200"
                      title="Live Demo"
                    >
                      <ExternalLink size={16} />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <div className="relative mt-16">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl blur-xl opacity-30"></div>
          <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 text-center">
            <div className="max-w-2xl mx-auto space-y-6">
              <h3 className="text-3xl font-bold text-gradient">Ready to Collaborate?</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm always excited to work on innovative projects and explore new technologies. 
                Let's build something amazing together!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hero-button group relative overflow-hidden"
                >
                  <span className="relative z-10">Get In Touch</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-glow/0 via-primary-glow/20 to-primary-glow/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                >
                  View Services
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;