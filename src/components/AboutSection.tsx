import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Target, Heart } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Personal Bio */}
          <div className="space-y-6">
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
          </div>

          {/* Key Info Cards */}
          <div className="space-y-6">
            <Card className="card-elegant">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <GraduationCap className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Education</h3>
                    <p className="text-muted-foreground">
                      B.Tech in AI & Data Science<br />
                      Rajagiri School of Engineering & Technology<br />
                      <span className="text-primary">2nd Year • Kochi, Kerala</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-elegant">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Target className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Career Aspirations</h3>
                    <p className="text-muted-foreground">
                      To become a leading AI & Data Science professional, contributing to 
                      innovative solutions that make a positive impact on society through 
                      technology and data-driven insights.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-elegant">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Heart className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Passion Areas</h3>
                    <p className="text-muted-foreground">
                      Machine Learning • Data Visualization • Game Development • 
                      Web Technologies • Team Collaboration • Problem Solving
                    </p>
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