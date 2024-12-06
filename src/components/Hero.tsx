import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Globe, Search, Users, MapPin, Brain } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Hero = () => {
  const [activeSection, setActiveSection] = useState<'syndicate' | 'expansion'>('expansion');

  const toggleSection = (section: 'syndicate' | 'expansion') => {
    setActiveSection(section);
  };

  return (
    <div className="py-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          <span className="block">Funding Factory Nexus</span>
          <span className="block text-primary">Empowering Innovation</span>
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Connect with top investors and accelerate your startup's growth through our comprehensive funding platform.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link to="/seed-funding">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Get Started
            </Button>
          </Link>
          <Link to="/about-us" className="text-sm font-semibold leading-6 text-gray-900">
            Learn more <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;