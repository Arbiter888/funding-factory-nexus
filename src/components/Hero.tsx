import { Button } from "@/components/ui/button";
import { Globe, Users, MapPin, Brain } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Hero = () => {
  const [activeSection, setActiveSection] = useState<'syndicate' | 'expansion'>('expansion');

  const toggleSection = (section: 'syndicate' | 'expansion') => {
    setActiveSection(section);
  };

  return (
    <div className="relative pt-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary min-h-screen">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/lovable-uploads/17c449df-8c58-4c87-b469-16edbf5571a2.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/60" /> {/* Dark overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl font-bold mb-6">
          <span className="text-foreground">Bringing </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary">American Risk Capital</span>
          <span className="text-foreground"> to </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary">New Markets</span>
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8">
          Become a cowboy in the modern frontier: Submit your pitch to join our founder network or invest alongside us in our Angel syndicate
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <Button 
            className="bg-primary hover:bg-primary/90"
            onClick={() => toggleSection('expansion')}
          >
            <Globe className="mr-2 h-4 w-4" />
            Founder Relocation
          </Button>
          <Button 
            variant="outline" 
            className={`border-primary/20 hover:bg-primary/10 ${activeSection === 'syndicate' ? 'ring-2 ring-primary' : ''}`}
            onClick={() => toggleSection('syndicate')}
          >
            <Users className="mr-2 h-4 w-4" />
            Join Angel Syndicate
          </Button>
        </div>

        {activeSection === 'expansion' && (
          <div className="bg-secondary/50 backdrop-blur-sm rounded-xl p-6 mb-16 max-w-3xl mx-auto border border-primary/20">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Global Expansion Support</h2>
            <p className="text-muted-foreground mb-6">
              We help UK-based founders relocate and expand to high-growth markets
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left mb-6">
              <div className="bg-background/50 p-4 rounded-lg border border-primary/20">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-foreground">United States</h3>
                </div>
                <p className="text-muted-foreground text-sm">Access to the world's largest tech market</p>
              </div>
              <div className="bg-background/50 p-4 rounded-lg border border-primary/20">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Dubai</h3>
                </div>
                <p className="text-muted-foreground text-sm">Tax-efficient hub for MENA market</p>
              </div>
              <div className="bg-background/50 p-4 rounded-lg border border-primary/20">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Southeast Asia</h3>
                </div>
                <p className="text-muted-foreground text-sm">Access to rapid growth markets</p>
              </div>
            </div>
            <Link to="/angel-syndicate">
              <Button variant="outline" className="border-primary/20 hover:bg-primary/10">
                Learn More About Global Expansion
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </Link>
          </div>
        )}

        {activeSection === 'syndicate' && (
          <div className="bg-secondary/50 backdrop-blur-sm rounded-xl p-6 mb-16 max-w-3xl mx-auto border border-primary/20 animate-in fade-in slide-in-from-bottom-4">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Join Our Angel Syndicate</h2>
            <p className="text-muted-foreground mb-6">
              Become part of an exclusive network of angel investors and get access to pre-vetted investment opportunities
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-6">
              <div className="bg-background/50 p-4 rounded-lg border border-primary/20">
                <div className="flex items-center gap-2 mb-2">
                  <Brain className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Expert Due Diligence</h3>
                </div>
                <p className="text-muted-foreground text-sm">Access thoroughly vetted investment opportunities with comprehensive analysis</p>
              </div>
              <div className="bg-background/50 p-4 rounded-lg border border-primary/20">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Exclusive Network</h3>
                </div>
                <p className="text-muted-foreground text-sm">Connect with experienced investors and industry experts</p>
              </div>
            </div>
            <Link to="/angel-syndicate">
              <Button variant="outline" className="border-primary/20 hover:bg-primary/10">
                Learn More About Angel Syndicate
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </Link>
          </div>
        )}

        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-50">
            <img src="/placeholder.svg" alt="Platform 1" className="h-8 invert" />
            <img src="/placeholder.svg" alt="Platform 2" className="h-8 invert" />
            <img src="/placeholder.svg" alt="Platform 3" className="h-8 invert" />
            <img src="/placeholder.svg" alt="Platform 4" className="h-8 invert" />
            <img src="/placeholder.svg" alt="Platform 5" className="h-8 invert" />
          </div>
        </div>
      </div>
    </div>
  );
};
