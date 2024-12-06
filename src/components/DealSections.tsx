import { Clock, TrendingUp } from "lucide-react";
import { DealCard } from "./DealCard";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { startupData } from "@/data/startupData";

export const DealSections = () => {
  return (
    <>
      <DealSection 
        title="Most Invested This Week" 
        icon={<TrendingUp className="h-5 w-5" />}
        deals={startupData}
      />
      
      <DealSection 
        title="New Deals" 
        icon={<Clock className="h-5 w-5" />}
        deals={startupData.slice(1, 3)}
      />
      
      <DealSection 
        title="Closing Soon" 
        icon={<Clock className="h-5 w-5" />}
        deals={startupData.slice(2)}
      />
    </>
  );
};

const DealSection = ({ 
  title, 
  icon, 
  deals 
}: { 
  title: string; 
  icon: React.ReactNode; 
  deals: typeof startupData;
}) => {
  return (
    <section className="mb-16">
      <div className="flex items-center gap-2 mb-6">
        <div className="bg-gray-100 p-2 rounded-full">
          {icon}
        </div>
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      
      <Carousel className="w-full">
        <CarouselContent>
          {deals.map((deal) => (
            <CarouselItem key={deal.id} className="md:basis-1/2 lg:basis-1/4">
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