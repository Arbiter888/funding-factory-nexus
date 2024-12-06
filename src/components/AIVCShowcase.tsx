import { Brain, ChartBarIcon, Sparkles, Target } from "lucide-react";

export const AIVCShowcase = () => {
  return (
    <div className="mb-20 py-16 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">AI-Powered Venture Capital</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our AI Investment Committee analyzes startups using advanced algorithms and deep market insights 
            to identify the most promising opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard 
            icon={<Brain className="h-8 w-8 text-indigo-600" />}
            title="AI Analysis"
            description="Deep analysis of market trends, team composition, and business metrics"
          />
          <FeatureCard 
            icon={<Target className="h-8 w-8 text-indigo-600" />}
            title="Smart Scoring"
            description="Comprehensive scoring system evaluating multiple success factors"
          />
          <FeatureCard 
            icon={<Sparkles className="h-8 w-8 text-indigo-600" />}
            title="Risk Assessment"
            description="Advanced risk modeling and opportunity evaluation"
          />
          <FeatureCard 
            icon={<ChartBarIcon className="h-8 w-8 text-indigo-600" />}
            title="Performance Tracking"
            description="Real-time monitoring of startup performance and metrics"
          />
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};