import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Ribbon, 
  Trophy, 
  Users, 
  Building, 
  Heart, 
  Music, 
  UsersRound 
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Ribbon,
      title: 'Inauguration Events',
      description: 'Grand opening ceremonies and launch events that create lasting impressions and mark significant milestones.'
    },
    {
      icon: Trophy,
      title: 'Awards Ceremonies',
      description: 'Elegant award shows and recognition events that honor achievements and celebrate excellence.'
    },
    {
      icon: Users,
      title: 'Conferences & Meetings',
      description: 'Professional conferences, seminars, and corporate meetings with seamless logistics and technology.'
    },
    {
      icon: Building,
      title: 'Trade Shows / Expos',
      description: 'Large-scale exhibitions and trade shows that showcase your brand and connect you with clients.'
    },
    {
      icon: Heart,
      title: 'CSR Events',
      description: 'Meaningful corporate social responsibility events that make a positive impact on communities.'
    },
    {
      icon: Music,
      title: 'Corporate DJ & Live Streaming',
      description: 'Professional entertainment and live streaming services for engaging virtual and hybrid events.'
    },
    {
      icon: UsersRound,
      title: 'Team Bonding Activities',
      description: 'Interactive team building experiences that strengthen relationships and boost morale.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We specialize in creating exceptional corporate events that exceed expectations and deliver measurable results for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="card-hover h-full">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;