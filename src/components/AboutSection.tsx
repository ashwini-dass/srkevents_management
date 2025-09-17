import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Users, Star, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: Calendar,
      title: '10+ Years',
      subtitle: 'Experience',
      description: 'Decade of expertise in corporate event management'
    },
    {
      icon: Users,
      title: '500+',
      subtitle: 'Happy Clients',
      description: 'Satisfied businesses across various industries'
    },
    {
      icon: Star,
      title: '1000+',
      subtitle: 'Successful Events',
      description: 'Flawlessly executed corporate gatherings'
    },
    {
      icon: Lightbulb,
      title: 'Creative',
      subtitle: 'Team',
      description: 'Innovative professionals dedicated to excellence'
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose EventPro?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We bring together years of experience, creative vision, and meticulous attention to detail to make your corporate events truly exceptional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <Card key={index} className="card-hover text-center bg-background">
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 bg-accent/10 rounded-full w-20 h-20 flex items-center justify-center">
                    <IconComponent className="w-10 h-10 text-accent" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-primary">{highlight.title}</CardTitle>
                  <div className="text-lg font-semibold text-accent">{highlight.subtitle}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;