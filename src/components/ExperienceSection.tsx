import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Trophy, Users, Gamepad2 } from 'lucide-react';

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

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Experience & Participation</h2>
        
        <div className="space-y-8">
          {experiences.map((experience, index) => {
            const IconComponent = experience.icon;
            return (
              <Card key={index} className="card-elegant">
                <CardHeader className="pb-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <IconComponent className="text-primary" size={24} />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-foreground">
                          {experience.title}
                        </CardTitle>
                        <p className="text-primary font-medium">
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
                
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {experience.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Key Highlights:</h4>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {experience.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Skills Developed:</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill) => (
                        <span key={skill} className="skill-tag">
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

        {/* Experience Summary */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-4 text-gradient">Learning Through Experience</h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Each hackathon, competition, and collaborative project has been a stepping stone in my journey, 
            teaching me the value of teamwork, innovation under pressure, and the importance of 
            continuous learning in the rapidly evolving tech landscape.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;