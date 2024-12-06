import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/lovable-uploads/4f8ff145-24e7-461c-a3b4-7ec0e9eab126.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
          Welcome to Cowboy Capital
        </h1>
        <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          Pioneering the future of venture capital with AI-powered insights and deep industry expertise
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg"
          >
            <Link to="/seed-funding">Apply for Funding</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="bg-white/10 hover:bg-white/20 text-white border-white/20 px-8 py-6 text-lg"
          >
            <Link to="/about-us">Learn More</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};