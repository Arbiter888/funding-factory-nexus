import { Clock, TrendingUp, Users, Package, HandShake } from "lucide-react";
import { DealCard } from "./DealCard";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { startupData } from "@/data/startupData";

export const DealSections = () => {
  return (
    <>
      <DealSection 
        title="Angel Network Top Picks" 
        icon={<Users className="h-5 w-5" />}
        description="Highly rated opportunities by our angel network"
        deals={startupData}
      />
      
      <DealSection 
        title="New Deal Flow" 
        icon={<Package className="h-5 w-5" />}
        description="Fresh opportunities from emerging markets"
        deals={startupData.slice(1, 3)}
      />
      
      <DealSection 
        title="Active Due Diligence" 
        icon={<HandShake className="h-5 w-5" />}
        description="Deals currently under review by our investment committee"
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
          <div className="bg-gray-100 p-2 rounded-full">
            {icon}
          </div>
          <h2 className="text-xl font-semibold">{title}</h2>
        </div>
        <p className="text-gray-600 ml-10">{description}</p>
      </div>
      
      <Carousel className="w-full">
        <CarouselContent>
          {deals.map((deal) => (
            <CarouselItem key={deal.id} className="md:basis-1/2 lg:basis-1/3">
              <DealCard deal={deal} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};