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
    <div className="relative min-h-screen flex items-center bg-gradient-to-b from-background to-secondary px-4 sm:px-6 lg:px-8">
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
      <div className="relative z-10 max-w-7xl mx-auto text-center py-32">
        <h1 className="text-5xl sm:text-6xl font-bold mb-6">
          <span className="text-foreground">Become a Modern </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary">Frontier Cowboy</span>
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          In the new frontier of global tech, cowboys aren't just riding horses - they're building companies and backing visionary founders. Join our elite network as either a founder pioneering new markets or an angel investing in the next generation of tech pioneers.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <Button 
            className="bg-primary hover:bg-primary/90"
            onClick={() => toggleSection('expansion')}
          >
            <Globe className="mr-2 h-4 w-4" />
            Become a Founder Cowboy
          </Button>
          <Button 
            variant="outline" 
            className={`border-primary/20 hover:bg-primary/10 ${activeSection === 'syndicate' ? 'ring-2 ring-primary' : ''}`}
            onClick={() => toggleSection('syndicate')}
          >
            <Users className="mr-2 h-4 w-4" />
            Join the Angel Posse
          </Button>
        </div>

        {activeSection === 'expansion' && (
          <div className="bg-secondary/50 backdrop-blur-sm rounded-xl p-6 mb-16 max-w-3xl mx-auto border border-primary/20">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Pioneer New Markets</h2>
            <p className="text-muted-foreground mb-6">
              Like the cowboys of old who ventured into uncharted territories, we help ambitious founders expand their reach across borders and conquer new markets
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left mb-6">
              <div className="bg-background/50 p-4 rounded-lg border border-primary/20">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-foreground">United States</h3>
                </div>
                <p className="text-muted-foreground text-sm">Your gateway to the world's largest tech frontier</p>
              </div>
              <div className="bg-background/50 p-4 rounded-lg border border-primary/20">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Dubai</h3>
                </div>
                <p className="text-muted-foreground text-sm">The new silk road to MENA opportunities</p>
              </div>
              <div className="bg-background/50 p-4 rounded-lg border border-primary/20">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Southeast Asia</h3>
                </div>
                <p className="text-muted-foreground text-sm">Tap into the fastest-growing digital economies</p>
              </div>
            </div>
            <Link to="/seed-funding">
              <Button variant="outline" className="border-primary/20 hover:bg-primary/10">
                Submit Your Pitch
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </Link>
          </div>
        )}

        {activeSection === 'syndicate' && (
          <div className="bg-secondary/50 backdrop-blur-sm rounded-xl p-6 mb-16 max-w-3xl mx-auto border border-primary/20 animate-in fade-in slide-in-from-bottom-4">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Join the Angel Posse</h2>
            <p className="text-muted-foreground mb-6">
              Ride alongside fellow angels in our exclusive syndicate. Like the cattle drives of old, we pool our resources and expertise to back the most promising ventures
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-6">
              <div className="bg-background/50 p-4 rounded-lg border border-primary/20">
                <div className="flex items-center gap-2 mb-2">
                  <Brain className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Scout the Best Deals</h3>
                </div>
                <p className="text-muted-foreground text-sm">Access thoroughly vetted opportunities with our expert due diligence</p>
              </div>
              <div className="bg-background/50 p-4 rounded-lg border border-primary/20">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Ride with the Best</h3>
                </div>
                <p className="text-muted-foreground text-sm">Join an elite network of experienced investors and industry experts</p>
              </div>
            </div>
            <Link to="/angel-syndicate">
              <Button variant="outline" className="border-primary/20 hover:bg-primary/10">
                Join the Syndicate
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </Link>
          </div>
        )}

        <div className="mt-24 mb-16">
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