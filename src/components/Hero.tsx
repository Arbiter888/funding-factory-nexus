import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Flame, Search } from "lucide-react";

export const Hero = () => {
  return (
    <div className="pt-16 px-4 sm:px-6 lg:px-8">
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
      </div>
    </div>
  );
};