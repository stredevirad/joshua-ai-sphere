import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Trophy, Users, Gamepad2, Sparkles, Star, Award, Target } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Hive Night Hackathon",
      organization: "IEDC & IIC",
      date: "October 2024",
      type: "Hackathon",
      icon: Trophy,
      description: "Participated in an intensive hackathon focused on innovative technology solutions. Collaborated with teams to develop creative projects under time constraints.",
      highlights: [
        "Rapid prototyping and development",
        "Team collaboration under pressure",
        "Innovative problem-solving",
        "Technology integration"
      ],
      skills: ["Team Leadership", "Rapid Development", "Innovation", "Presentation"]
    },
    {
      title: "Game Craft Competition",
      organization: "Techkshetra 2024",
      date: "2024",
      type: "Competition",
      icon: Gamepad2,
      description: "Competed in a game development competition, showcasing creativity and technical skills in building engaging gaming experiences.",
      highlights: [
        "Game design and mechanics",
        "Creative storytelling",
        "Technical implementation",
        "User experience design"
      ],
      skills: ["Unity Development", "Game Design", "C# Programming", "Creative Thinking"]
    },
    {
      title: "Game Jam Participation",
      organization: "Team Project Initiative",
      date: "2024",
      type: "Collaborative Event",
      icon: Users,
      description: "Actively participated in game development jams, working with diverse teams to create innovative gaming solutions within limited timeframes.",
      highlights: [
        "Cross-functional collaboration",
        "Agile development practices",
        "Creative problem solving",
        "Iterative design process"
      ],
      skills: ["Collaboration", "Agile Methods", "Game Development", "Team Dynamics"]
    }
  ];

  const getTypeColor = (type: string) => {
    const colors = {
      "Hackathon": "bg-red-500/10 text-red-400 border-red-500/20",
      "Competition": "bg-purple-500/10 text-purple-400 border-purple-500/20",
      "Collaborative Event": "bg-blue-500/10 text-blue-400 border-blue-500/20"
    };
    return colors[type as keyof typeof colors] || "bg-gray-500/10 text-gray-400 border-gray-500/20";
  };

  const experienceStats = [
    { icon: Trophy, number: "3+", label: "Events Participated" },
    { icon: Users, number: "15+", label: "Team Collaborations" },
    { icon: Target, number: "5+", label: "Skills Developed" },
    { icon: Award, number: "100%", label: "Learning Rate" }
  ];

  return (
    <section id="experience" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden">
      {/* Enhanced Multi-Layer Background */}
      <div className="absolute inset-0 bg-gradient-to-bl from-background via-muted/15 to-background"></div>
      <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-transparent to-primary/5"></div>
      <div className="absolute inset-0 bg-gradient-mesh opacity-25"></div>
      
      {/* Enhanced Background Elements with Glow */}
      <div className="absolute top-10 right-10 opacity-5 animate-float">
        <div className="relative">
          <div className="absolute inset-0 bg-primary/25 rounded-full blur-3xl"></div>
          <Trophy size={220} className="relative text-primary" />
        </div>
      </div>
      <div className="absolute bottom-10 left-10 opacity-5 animate-float" style={{ animationDelay: '3s' }}>
        <div className="relative">
          <div className="absolute inset-0 bg-accent/25 rounded-full blur-3xl"></div>
          <Star size={140} className="relative text-accent" />
        </div>
      </div>
      
      {/* Award Animation Elements */}
      <div className="absolute top-1/4 left-1/5 opacity-10 animate-float" style={{ animationDelay: '1s' }}>
        <Award size={45} className="text-primary-glow" />
      </div>
      <div className="absolute bottom-1/3 right-1/4 opacity-10 animate-float" style={{ animationDelay: '5s' }}>
        <Target size={40} className="text-accent-glow" />
      </div>
      
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Experience & Participation</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Building expertise through hands-on experience and collaborative learning
          </p>
        </div>

        {/* Experience Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {experienceStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="relative mx-auto w-16 h-16 mb-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-lg group-hover:blur-none transition-all duration-500"></div>
                  <div className="relative w-full h-full bg-card/50 backdrop-blur-sm border border-border/50 rounded-full flex items-center justify-center group-hover:border-primary/50 transition-all duration-300">
                    <IconComponent size={24} className="text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-gradient mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            );
          })}
        </div>
        
        <div className="space-y-8">
          {experiences.map((experience, index) => {
            const IconComponent = experience.icon;
            return (
              <Card key={index} className="group relative overflow-hidden card-elegant hover:shadow-2xl transition-all duration-500 border-border/50 hover:border-primary/30">
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-accent/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Featured Badge for First Experience */}
                {index === 0 && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-primary to-accent rounded-full text-xs font-bold text-white">
                      <Star size={12} />
                      Recent
                    </div>
                  </div>
                )}
                
                <CardHeader className="relative pb-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="absolute -inset-2 bg-primary/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative bg-primary/10 p-4 rounded-xl group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                          <IconComponent className="text-primary" size={28} />
                        </div>
                      </div>
                      <div>
                        <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                          {experience.title}
                        </CardTitle>
                        <p className="text-primary font-semibold">
                          {experience.organization}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:items-end gap-2">
                      <Badge 
                        variant="outline" 
                        className={`text-xs font-medium border ${getTypeColor(experience.type)}`}
                      >
                        {experience.type}
                      </Badge>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar size={14} />
                        {experience.date}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="relative space-y-6">
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                    {experience.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Sparkles size={16} className="text-accent" />
                      Key Highlights:
                    </h4>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {experience.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-center gap-3 text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">
                          <div className="w-2 h-2 bg-gradient-to-r from-accent to-primary rounded-full flex-shrink-0 animate-pulse"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Target size={16} className="text-primary" />
                      Skills Developed:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill) => (
                        <span key={skill} className="skill-tag hover:bg-primary/20 transition-colors duration-200">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Enhanced Experience Summary */}
        <div className="relative mt-16">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl blur-xl opacity-30"></div>
          <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 text-center">
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Award size={24} className="text-primary animate-pulse" />
                <h3 className="text-3xl font-bold text-gradient">Learning Through Experience</h3>
                <Award size={24} className="text-accent animate-pulse" />
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Each hackathon, competition, and collaborative project has been a stepping stone in my journey, 
                teaching me the value of teamwork, innovation under pressure, and the importance of 
                continuous learning in the rapidly evolving tech landscape.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 mt-8">
                <div className="flex items-center gap-2 p-3 rounded-lg bg-background/50 border border-border/30">
                  <Trophy size={16} className="text-primary" />
                  <span className="text-sm font-medium">Achievement-Oriented</span>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-lg bg-background/50 border border-border/30">
                  <Users size={16} className="text-accent" />
                  <span className="text-sm font-medium">Team Player</span>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-lg bg-background/50 border border-border/30">
                  <Target size={16} className="text-primary" />
                  <span className="text-sm font-medium">Goal-Focused</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;