import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Target, Heart, Sparkles, Brain, Code, Users, Globe } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { number: "2nd", label: "Year Student", icon: GraduationCap },
    { number: "5+", label: "Projects", icon: Code },
    { number: "3+", label: "Hackathons", icon: Users },
    { number: "4+", label: "Languages", icon: Globe }
  ];

  const highlights = [
    { icon: Brain, text: "AI & Data Science Specialization" },
    { icon: Code, text: "Full-Stack Development Experience" },
    { icon: Users, text: "Active Hackathon Participant" },
    { icon: Sparkles, text: "Creative Problem Solver" }
  ];

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/10 to-background"></div>
      <div className="absolute top-10 right-10 opacity-5 animate-float">
        <Brain size={200} className="text-primary" />
      </div>
      
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate about transforming ideas into reality through code and creativity
          </p>
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="relative mx-auto w-16 h-16 mb-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-lg group-hover:blur-none transition-all duration-500"></div>
                  <div className="relative w-full h-full bg-card/50 backdrop-blur-sm border border-border/50 rounded-full flex items-center justify-center group-hover:border-primary/50 transition-all duration-300">
                    <IconComponent size={24} className="text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gradient mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            );
          })}
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Enhanced Personal Bio */}
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl blur-xl opacity-30"></div>
              <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <h3 className="text-2xl font-bold text-gradient">My Journey</h3>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Hi! I'm Joshua Herbert Japheth, a passionate B.Tech student in my 2nd year at 
                  <span className="text-primary font-semibold"> Rajagiri School of Engineering & Technology (RSET)</span>, 
                  Kochi, specializing in Artificial Intelligence & Data Science.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My journey in technology began with curiosity and has evolved into a deep passion for 
                  creating innovative solutions through code. I thrive on challenges and love exploring 
                  the intersection of AI, data science, and creative development.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me participating in hackathons, collaborating on 
                  team projects, or experimenting with new technologies to push the boundaries of 
                  what's possible.
                </p>

                {/* Highlights */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {highlights.map((highlight, index) => {
                    const IconComponent = highlight.icon;
                    return (
                      <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-border/30 hover:border-primary/30 transition-all duration-300">
                        <IconComponent size={16} className="text-primary" />
                        <span className="text-sm font-medium">{highlight.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Key Info Cards */}
          <div className="space-y-6">
            <Card className="group relative overflow-hidden card-elegant hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="relative p-8">
                <div className="flex items-start gap-6">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-primary/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative bg-primary/10 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <GraduationCap className="text-primary" size={28} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl mb-3 text-gradient">Education</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      B.Tech in AI & Data Science<br />
                      Rajagiri School of Engineering & Technology<br />
                      <span className="text-primary font-semibold">2nd Year • Kochi, Kerala</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden card-elegant hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="relative p-8">
                <div className="flex items-start gap-6">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-accent/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative bg-accent/10 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Target className="text-accent" size={28} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl mb-3 text-gradient">Career Aspirations</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      To become a leading AI & Data Science professional, contributing to 
                      innovative solutions that make a positive impact on society through 
                      technology and data-driven insights.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden card-elegant hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="relative p-8">
                <div className="flex items-start gap-6">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-primary/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative bg-primary/10 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Heart className="text-primary" size={28} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl mb-3 text-gradient">Passion Areas</h3>
                    <div className="flex flex-wrap gap-2">
                      {['Machine Learning', 'Data Visualization', 'Game Development', 'Web Technologies', 'Team Collaboration', 'Problem Solving'].map((passion, index) => (
                        <span key={index} className="skill-tag">
                          {passion}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;