import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Code, Brain, Users, Globe, MessageCircle, Clock } from 'lucide-react';

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

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Skills & Expertise</h2>
        
        {/* Main Skill Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="card-elegant">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <IconComponent className={`${category.color}`} size={24} />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-sm">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2"
                      />
                      <p className="text-xs text-muted-foreground">{skill.description}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Skills */}
        <div className="grid md:grid-cols-2 gap-8">
          {additionalSkills.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <Card key={index} className="card-elegant">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <IconComponent className="text-accent" size={20} />
                    </div>
                    <CardTitle className="text-lg">{section.category}</CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {section.skills.map((skill) => (
                      <span key={skill} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Skills Philosophy */}
        <div className="mt-12 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4 text-gradient">Continuous Learning Mindset</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Technology evolves rapidly, and I believe in staying current through continuous learning. 
            Each project, course, and collaboration adds to my skillset, making me a more versatile 
            and effective developer. I'm always eager to learn new technologies and improve my existing skills.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;