import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Globe, Users, Brain, LineChart, MessageSquare, Building, Rocket } from "lucide-react";

const FounderValueAdd = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-background/90">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Founder Value Add
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide comprehensive support to help founders scale their businesses globally
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ValueAddCard
            icon={<Globe className="h-8 w-8 text-primary" />}
            title="Global Market Access"
            description="Strategic support for entering new markets and scaling operations internationally"
          />
          <ValueAddCard
            icon={<Users className="h-8 w-8 text-primary" />}
            title="Network Access"
            description="Connect with industry leaders, potential customers, and strategic partners"
          />
          <ValueAddCard
            icon={<Building className="h-8 w-8 text-primary" />}
            title="Corporate Development"
            description="Support in strategic partnerships, M&A opportunities, and corporate relationships"
          />
          <ValueAddCard
            icon={<Brain className="h-8 w-8 text-primary" />}
            title="Strategic Advisory"
            description="Expert guidance on business strategy, product development, and market positioning"
          />
          <ValueAddCard
            icon={<LineChart className="h-8 w-8 text-primary" />}
            title="Growth Support"
            description="Data-driven insights and operational support to accelerate growth"
          />
          <ValueAddCard
            icon={<Rocket className="h-8 w-8 text-primary" />}
            title="Fundraising Support"
            description="Access to our global network of investors and assistance with future funding rounds"
          />
        </div>
      </div>
    </div>
  );
};

const ValueAddCard = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) => {
  return (
    <div className="bg-secondary/50 backdrop-blur-sm rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-colors">
      <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default FounderValueAdd;