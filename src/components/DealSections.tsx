import { Clock, TrendingUp, Users, Package, Handshake } from "lucide-react";
import { DealCard } from "./DealCard";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { startupData } from "@/data/startupData";

export const DealSections = () => {
  return (
    <>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Curated Investment Opportunities
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Discover high-potential startups vetted by our expert investment team. Each opportunity is thoroughly analyzed using our proprietary AI scoring system.
        </p>
      </div>

      <DealSection 
        title="Angel Network Top Picks" 
        icon={<Users className="h-5 w-5 text-primary" />}
        description="Highly rated opportunities by our angel network"
        deals={startupData}
      />
      
      <DealSection 
        title="New Deal Flow" 
        icon={<Package className="h-5 w-5 text-primary" />}
        description="Fresh opportunities from emerging markets"
        deals={startupData.slice(1, 3)}
      />
      
      <DealSection 
        title="Capital Committed" 
        icon={<Handshake className="h-5 w-5 text-primary" />}
        description="Portfolio companies we've already invested in"
        deals={startupData.slice(2)}
      />
    </>
  );
};

const DealSection = ({ 
  title, 
  icon, 
  description,
  deals 
}: { 
  title: string; 
  icon: React.ReactNode; 
  description: string;
  deals: typeof startupData;
}) => {
  return (
    <section className="mb-16">
      <div className="flex flex-col mb-6">
        <div className="flex items-center gap-2 mb-2">
          <div className="bg-primary/10 p-2 rounded-full">
            {icon}
          </div>
          <h2 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            {title}
          </h2>
        </div>
        <p className="text-muted-foreground ml-10">{description}</p>
      </div>
      
      <Carousel className="w-full">
        <CarouselContent>
          {deals.map((deal) => (
            <CarouselItem key={deal.id} className="md:basis-1/2 lg:basis-1/3">
              <DealCard deal={deal} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-secondary/50 border-primary/20 hover:bg-primary/10" />
        <CarouselNext className="bg-secondary/50 border-primary/20 hover:bg-primary/10" />
      </Carousel>
    </section>
  );
};