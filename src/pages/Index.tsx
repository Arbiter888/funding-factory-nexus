import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { AIVCShowcase } from "@/components/AIVCShowcase";
import { DealSections } from "@/components/DealSections";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-background/90">
      <Navigation />
      <Hero />
      <AIVCShowcase />
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <DealSections />
        </div>
      </div>
    </div>
  );
};

export default Index;