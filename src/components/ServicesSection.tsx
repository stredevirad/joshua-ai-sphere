import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, BarChart3, Users, Lightbulb } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: "Software Development",
      description: "Building web applications, games, and utility tools using modern technologies. Specializing in React, Unity, Python, and Node.js development.",
      features: [
        "Web Application Development",
        "Game Development (Unity)",
        "Python Automation Scripts",
        "JavaScript/TypeScript Projects"
      ]
    },
    {
      icon: BarChart3,
      title: "Data Visualization & Analysis",
      description: "Transforming raw data into meaningful insights through compelling visualizations and statistical analysis using R and Python.",
      features: [
        "Statistical Data Analysis",
        "Interactive Dashboards",
        "R/ggplot2 Visualizations",
        "CSV Data Processing"
      ]
    },
    {
      icon: Users,
      title: "Academic Project Collaboration",
      description: "Collaborative partner for academic projects, hackathons, and team-based development initiatives with a focus on innovation.",
      features: [
        "Team Project Leadership",
        "Hackathon Participation",
        "Code Review & Mentoring",
        "Problem-Solving Workshops"
      ]
    },
    {
      icon: Lightbulb,
      title: "Technical Consultation",
      description: "Providing insights and guidance on technology choices, project architecture, and best practices for student-level projects.",
      features: [
        "Technology Stack Selection",
        "Project Planning",
        "Code Optimization",
        "Learning Path Guidance"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Services & Expertise</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="card-elegant group">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="text-primary" size={28} />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Service Philosophy */}
        <div className="mt-12 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4 text-gradient">My Approach</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            As a student myself, I understand the challenges of academic projects and the importance of 
            continuous learning. I approach every collaboration with enthusiasm, creativity, and a 
            commitment to delivering quality results while fostering a collaborative learning environment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;