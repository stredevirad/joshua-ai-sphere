import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Code, Brain, Users, Globe, MessageCircle, Clock, Sparkles, Star, TrendingUp, Zap } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "text-blue-400",
      skills: [
        { name: "Python", level: 85, description: "Data analysis, automation, machine learning" },
        { name: "JavaScript", level: 80, description: "Web development, Node.js applications" },
        { name: "C/C++", level: 75, description: "System programming, algorithms" },
        { name: "C#", level: 70, description: "Unity game development, desktop apps" },
        { name: "R", level: 65, description: "Statistical analysis, data visualization" },
        { name: "HTML/CSS", level: 90, description: "Web design, responsive layouts" }
      ]
    },
    {
      title: "AI & Data Science",
      icon: Brain,
      color: "text-purple-400",
      skills: [
        { name: "Machine Learning Fundamentals", level: 70, description: "Supervised & unsupervised learning" },
        { name: "Data Handling", level: 80, description: "Cleaning, preprocessing, transformation" },
        { name: "Data Visualization", level: 85, description: "ggplot2, matplotlib, interactive charts" },
        { name: "Statistical Analysis", level: 75, description: "Hypothesis testing, regression analysis" },
        { name: "Pandas/NumPy", level: 70, description: "Data manipulation and analysis" }
      ]
    },
    {
      title: "Soft Skills",
      icon: Users,
      color: "text-green-400",
      skills: [
        { name: "Communication", level: 85, description: "Clear technical communication" },
        { name: "Teamwork", level: 90, description: "Collaborative project development" },
        { name: "Problem Solving", level: 88, description: "Analytical thinking, debugging" },
        { name: "Leadership", level: 75, description: "Project coordination, mentoring" },
        { name: "Adaptability", level: 85, description: "Learning new technologies quickly" }
      ]
    }
  ];

  const additionalSkills = [
    {
      category: "Languages",
      icon: Globe,
      skills: ["English (Fluent)", "Malayalam (Native)", "Hindi (Conversational)", "French (Basic)"]
    },
    {
      category: "Other Skills",
      icon: MessageCircle,
      skills: ["Time Management", "Critical Thinking", "Documentation", "Version Control (Git)"]
    }
  ];

  const getProgressColor = (level: number) => {
    if (level >= 80) return "bg-green-500";
    if (level >= 65) return "bg-blue-500";
    return "bg-orange-500";
  };

  const skillHighlights = [
    { icon: Star, number: "15+", label: "Technologies" },
    { icon: TrendingUp, number: "85%", label: "Avg. Proficiency" },
    { icon: Zap, number: "4", label: "Languages Spoken" },
    { icon: Code, number: "6+", label: "Programming Languages" }
  ];

  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/5 to-background"></div>
      <div className="absolute top-10 left-10 opacity-5 animate-float">
        <Brain size={200} className="text-primary" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-5 animate-float" style={{ animationDelay: '2s' }}>
        <Code size={150} className="text-accent" />
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Continuously evolving skillset driven by passion and hands-on experience
          </p>
        </div>

        {/* Skill Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {skillHighlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <div key={index} className="text-center group">
                <div className="relative mx-auto w-16 h-16 mb-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-lg group-hover:blur-none transition-all duration-500"></div>
                  <div className="relative w-full h-full bg-card/50 backdrop-blur-sm border border-border/50 rounded-full flex items-center justify-center group-hover:border-primary/50 transition-all duration-300">
                    <IconComponent size={24} className="text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-gradient mb-2">{highlight.number}</div>
                <div className="text-sm text-muted-foreground">{highlight.label}</div>
              </div>
            );
          })}
        </div>
        
        {/* Enhanced Main Skill Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="group relative overflow-hidden card-elegant hover:shadow-2xl transition-all duration-500 border-border/50 hover:border-primary/30">
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-accent/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardHeader className="relative pb-6">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="absolute -inset-2 bg-primary/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative bg-primary/10 p-4 rounded-xl group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                        <IconComponent className={`${category.color} group-hover:text-primary transition-colors duration-300`} size={28} />
                      </div>
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="relative space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-sm group-hover:text-primary transition-colors duration-300">{skill.name}</span>
                        <span className="text-xs text-muted-foreground bg-background/50 px-2 py-1 rounded-full border border-border/30">{skill.level}%</span>
                      </div>
                      <div className="relative">
                        <Progress 
                          value={skill.level} 
                          className="h-2 bg-background/50"
                        />
                        <div className="absolute top-0 left-0 h-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 animate-pulse" style={{ width: '100%' }}></div>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed group-hover:text-foreground/70 transition-colors duration-300">{skill.description}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Enhanced Additional Skills */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {additionalSkills.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <Card key={index} className="group relative overflow-hidden card-elegant hover:shadow-xl transition-all duration-500 border-border/50 hover:border-accent/30">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/2 via-transparent to-primary/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardHeader className="relative pb-4">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-accent/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative bg-accent/10 p-3 rounded-lg group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                        <IconComponent className="text-accent" size={20} />
                      </div>
                    </div>
                    <CardTitle className="text-lg group-hover:text-accent transition-colors duration-300">{section.category}</CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="relative">
                  <div className="flex flex-wrap gap-2">
                    {section.skills.map((skill) => (
                      <span key={skill} className="skill-tag hover:bg-accent/20 transition-colors duration-200">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Enhanced Skills Philosophy */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl blur-xl opacity-30"></div>
          <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 text-center">
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles size={24} className="text-primary animate-pulse" />
                <h3 className="text-3xl font-bold text-gradient">Continuous Learning Mindset</h3>
                <Sparkles size={24} className="text-accent animate-pulse" />
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Technology evolves rapidly, and I believe in staying current through continuous learning. 
                Each project, course, and collaboration adds to my skillset, making me a more versatile 
                and effective developer. I'm always eager to learn new technologies and improve my existing skills.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 mt-8">
                <div className="flex items-center gap-2 p-3 rounded-lg bg-background/50 border border-border/30">
                  <TrendingUp size={16} className="text-primary" />
                  <span className="text-sm font-medium">Always Growing</span>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-lg bg-background/50 border border-border/30">
                  <Star size={16} className="text-accent" />
                  <span className="text-sm font-medium">Quality Focused</span>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-lg bg-background/50 border border-border/30">
                  <Zap size={16} className="text-primary" />
                  <span className="text-sm font-medium">Fast Learner</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;