import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Globe, Search, Users } from "lucide-react";

export const Hero = () => {
  return (
    <div className="pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl font-bold mb-6">
          <span className="text-gray-900">Bringing </span>
          <span className="text-indigo-600">American Risk Capital</span>
          <span className="text-gray-900"> to </span>
          <span className="text-indigo-600">New Markets</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Revolutionizing seed-stage investments by connecting exceptional founders with smart capital
        </p>
        
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
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <Button className="bg-indigo-600 hover:bg-indigo-700">
            <Globe className="mr-2 h-4 w-4" />
            Explore Global Opportunities
          </Button>
          <Button variant="outline">
            <Users className="mr-2 h-4 w-4" />
            Join Scout Network
          </Button>
        </div>

        {/* Scout Network Feature */}
        <div className="bg-indigo-50 rounded-xl p-6 mb-16 max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-indigo-900 mb-4">Join Our Scout Network</h2>
          <p className="text-indigo-700 mb-4">
            Earn carry and referral fees by connecting us with exceptional founders in your network.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900">Carry Share</h3>
              <p className="text-gray-600">Get a share of the investment upside for successful referrals</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900">Referral Fee</h3>
              <p className="text-gray-600">Earn immediate rewards for successful introductions</p>
            </div>
          </div>
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