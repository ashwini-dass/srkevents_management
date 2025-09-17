import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-corporate-event.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional corporate event venue"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-section opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Expert Corporate Event Planning & Execution
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
          From inaugurations to team bonding, we make your events unforgettable with professional planning and flawless execution.
        </p>
        <Button 
          size="lg" 
          className="bg-accent hover:bg-accent-hover text-accent-foreground btn-accent-hover text-lg px-8 py-6"
        >
          Contact Us
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-1 h-8 bg-white opacity-75 mx-auto"></div>
      </div>
    </section>
  );
};

export default HeroSection;