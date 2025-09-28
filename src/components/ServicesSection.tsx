import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, BarChart3, Users, Lightbulb, Star, Sparkles, Zap, Rocket } from 'lucide-react';

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

  const serviceHighlights = [
    { icon: Star, text: "Quality-Focused Development" },
    { icon: Rocket, text: "Fast & Efficient Delivery" },
    { icon: Sparkles, text: "Creative Problem Solving" },
    { icon: Zap, text: "Latest Technology Stack" }
  ];

  return (
    <section id="services" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/5 to-background"></div>
      <div className="absolute top-20 right-10 opacity-5 animate-float">
        <Code size={180} className="text-primary" />
      </div>
      <div className="absolute bottom-20 left-10 opacity-5 animate-float" style={{ animationDelay: '4s' }}>
        <Lightbulb size={150} className="text-accent" />
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Services & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Empowering ideas through code, data, and collaborative innovation
          </p>
        </div>

        {/* Service Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {serviceHighlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <div key={index} className="flex items-center gap-2 p-3 rounded-lg bg-card/30 backdrop-blur-sm border border-border/30 hover:border-primary/30 transition-all duration-300">
                <IconComponent size={16} className="text-primary" />
                <span className="text-sm font-medium">{highlight.text}</span>
              </div>
            );
          })}
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group relative overflow-hidden card-elegant hover:shadow-2xl transition-all duration-500 border-border/50 hover:border-primary/30">
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-accent/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardHeader className="relative pb-6">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="absolute -inset-2 bg-primary/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative bg-primary/10 p-4 rounded-xl group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                        <IconComponent className="text-primary" size={28} />
                      </div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="relative space-y-6">
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm text-primary">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3 text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">
                          <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full flex-shrink-0 animate-pulse"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Enhanced Service Philosophy */}
        <div className="relative mt-16">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl blur-xl opacity-30"></div>
          <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles size={24} className="text-primary animate-pulse" />
                <h3 className="text-3xl font-bold text-gradient">My Approach</h3>
                <Sparkles size={24} className="text-accent animate-pulse" />
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                As a student myself, I understand the challenges of academic projects and the importance of 
                continuous learning. I approach every collaboration with enthusiasm, creativity, and a 
                commitment to delivering quality results while fostering a collaborative learning environment.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 mt-8">
                <div className="flex items-center gap-2 p-3 rounded-lg bg-background/50 border border-border/30">
                  <Users size={16} className="text-primary" />
                  <span className="text-sm font-medium">Collaborative</span>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-lg bg-background/50 border border-border/30">
                  <Rocket size={16} className="text-accent" />
                  <span className="text-sm font-medium">Results-Driven</span>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-lg bg-background/50 border border-border/30">
                  <Star size={16} className="text-primary" />
                  <span className="text-sm font-medium">Quality-Focused</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;