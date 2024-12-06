import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Flame, Clock, TrendingUp } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <main className="pt-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="text-gray-900">Find, </span>
            <span className="text-indigo-600">Research</span>
            <span className="text-gray-900"> and </span>
            <span className="text-indigo-600">Track</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">YOUR NEXT STARTUP INVESTMENT</p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8 relative">
            <Input 
              type="text" 
              placeholder="Search Companies..." 
              className="w-full h-12 pl-12 pr-4 rounded-lg border-gray-200 focus:border-indigo-500"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          </div>
          
          {/* Action Buttons */}
          <div className="flex justify-center gap-4 mb-16">
            <Button className="bg-indigo-600 hover:bg-indigo-700">
              <Flame className="mr-2 h-4 w-4" />
              Popular Deals
            </Button>
            <Button variant="outline">
              <Search className="mr-2 h-4 w-4" />
              Explore All Deals
            </Button>
          </div>

          {/* Platform Logos */}
          <div className="mb-16">
            <p className="text-gray-600 mb-8">Analyzing the best startups across investment platforms such as:</p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-50">
              <img src="/placeholder.svg" alt="Platform 1" className="h-8" />
              <img src="/placeholder.svg" alt="Platform 2" className="h-8" />
              <img src="/placeholder.svg" alt="Platform 3" className="h-8" />
              <img src="/placeholder.svg" alt="Platform 4" className="h-8" />
              <img src="/placeholder.svg" alt="Platform 5" className="h-8" />
            </div>
          </div>

          {/* Deal Sections */}
          <DealSection 
            title="Most Invested This Week" 
            icon={<TrendingUp className="h-5 w-5" />}
          />
          
          <DealSection 
            title="New Deals" 
            icon={<Clock className="h-5 w-5" />}
          />
          
          <DealSection 
            title="Closing Soon" 
            icon={<Clock className="h-5 w-5" />}
          />
        </div>
      </main>
    </div>
  );
};

const DealSection = ({ title, icon }: { title: string, icon: React.ReactNode }) => {
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
          {[1, 2, 3, 4].map((item) => (
            <CarouselItem key={item} className="md:basis-1/2 lg:basis-1/4">
              <DealCard />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

const DealCard = () => {
  return (
    <Card className="h-full">
      <CardContent className="p-4">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 bg-gray-100 rounded-lg flex-shrink-0" />
          <div>
            <h3 className="font-semibold mb-1">Company Name</h3>
            <p className="text-sm text-gray-600 line-clamp-2">
              Brief description of the company and what they do...
            </p>
          </div>
        </div>
        
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Valuation:</span>
            <span className="font-medium">$1M</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Industry:</span>
            <span className="font-medium">Technology</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Stage:</span>
            <span className="font-medium">Seed</span>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t">
          <div className="flex justify-between text-sm">
            <span>Raised: $50,000</span>
            <span className="text-gray-600">of $100,000</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div className="bg-green-500 h-2 rounded-full" style={{ width: "50%" }} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Index;