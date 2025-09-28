import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

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
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-elegant group">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <Badge 
                    variant="outline" 
                    className={`text-xs font-medium border ${getCategoryColor(project.category)}`}
                  >
                    {project.category}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="skill-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-4">
                  <Badge variant="secondary" className="text-xs">
                    {project.status}
                  </Badge>
                  
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                      <Github size={16} />
                    </Button>
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                      <ExternalLink size={16} />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Interested in collaborating or learning more about my projects?
          </p>
          <Button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="hero-button"
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;