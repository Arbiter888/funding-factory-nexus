import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Flame, Clock, TrendingUp, Star } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

// Example startup data
const startupData = [
  {
    id: 1,
    name: "EcoTech Solutions",
    description: "Sustainable energy storage solutions for residential buildings",
    logo: "/placeholder.svg",
    aiScore: 85,
    valuation: "£2.5M",
    industry: "CleanTech",
    stage: "Seed",
    raised: 750000,
    target: 1000000,
    scoreBreakdown: {
      market: 90,
      team: 85,
      traction: 80,
      financials: 85,
      innovation: 85
    }
  },
  {
    id: 2,
    name: "HealthAI",
    description: "AI-powered diagnostic tools for healthcare professionals",
    logo: "/placeholder.svg",
    aiScore: 92,
    valuation: "£5M",
    industry: "HealthTech",
    stage: "Seed",
    raised: 900000,
    target: 1500000,
    scoreBreakdown: {
      market: 95,
      team: 90,
      traction: 92,
      financials: 88,
      innovation: 95
    }
  },
  {
    id: 3,
    name: "FinFlow",
    description: "Next-generation payment infrastructure for emerging markets",
    logo: "/placeholder.svg",
    aiScore: 78,
    valuation: "£3M",
    industry: "FinTech",
    stage: "Pre-Seed",
    raised: 400000,
    target: 800000,
    scoreBreakdown: {
      market: 85,
      team: 75,
      traction: 70,
      financials: 80,
      innovation: 80
    }
  },
  {
    id: 4,
    name: "DataSense",
    description: "Enterprise data analytics and visualization platform",
    logo: "/placeholder.svg",
    aiScore: 88,
    valuation: "£4M",
    industry: "Enterprise Software",
    stage: "Seed",
    raised: 600000,
    target: 1200000,
    scoreBreakdown: {
      market: 90,
      team: 85,
      traction: 85,
      financials: 90,
      innovation: 90
    }
  }
];

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
        </div>
      </main>
    </div>
  );
};

const DealSection = ({ title, icon, deals }: { title: string; icon: React.ReactNode; deals: typeof startupData }) => {
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

const DealCard = ({ deal }: { deal: typeof startupData[0] }) => {
  return (
    <Card className="h-full">
      <CardContent className="p-4">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 bg-gray-100 rounded-lg flex-shrink-0">
            <img src={deal.logo} alt={deal.name} className="w-full h-full object-cover rounded-lg" />
          </div>
          <div>
            <h3 className="font-semibold mb-1">{deal.name}</h3>
            <p className="text-sm text-gray-600 line-clamp-2">
              {deal.description}
            </p>
          </div>
        </div>

        <HoverCard>
          <HoverCardTrigger asChild>
            <div className="flex items-center gap-2 mb-4 cursor-pointer">
              <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
              <span className="font-semibold text-lg">{deal.aiScore}</span>
              <span className="text-sm text-gray-500">AI Score</span>
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="space-y-2">
              <h4 className="font-semibold">AI Score Breakdown</h4>
              <div className="space-y-1">
                {Object.entries(deal.scoreBreakdown).map(([category, score]) => (
                  <div key={category} className="flex justify-between items-center">
                    <span className="capitalize text-sm">{category}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 h-2 bg-gray-200 rounded-full">
                        <div 
                          className="h-full bg-indigo-600 rounded-full" 
                          style={{ width: `${score}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium">{score}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
        
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Valuation:</span>
            <span className="font-medium">{deal.valuation}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Industry:</span>
            <span className="font-medium">{deal.industry}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Stage:</span>
            <span className="font-medium">{deal.stage}</span>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t">
          <div className="flex justify-between text-sm">
            <span>Raised: £{(deal.raised).toLocaleString()}</span>
            <span className="text-gray-600">of £{(deal.target).toLocaleString()}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div 
              className="bg-green-500 h-2 rounded-full" 
              style={{ width: `${(deal.raised / deal.target) * 100}%` }} 
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Index;