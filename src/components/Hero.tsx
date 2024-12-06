import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Globe, Search, Users } from "lucide-react";

export const Hero = () => {
  return (
    <div className="pt-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl font-bold mb-6">
          <span className="text-foreground">Bringing </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">American Risk Capital</span>
          <span className="text-foreground"> to </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">New Markets</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Revolutionizing seed-stage investments by connecting exceptional founders with smart capital
        </p>
        
        <div className="max-w-2xl mx-auto mb-8 relative">
          <Input 
            type="text" 
            placeholder="Search Companies..." 
            className="w-full h-12 pl-12 pr-4 rounded-lg bg-secondary/50 border-secondary-foreground/10 focus:border-primary"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <Button className="bg-primary hover:bg-primary/90">
            <Globe className="mr-2 h-4 w-4" />
            Explore Global Opportunities
          </Button>
          <Button variant="outline" className="border-primary/20 hover:bg-primary/10">
            <Users className="mr-2 h-4 w-4" />
            Join Scout Network
          </Button>
        </div>

        <div className="bg-secondary/50 backdrop-blur-sm rounded-xl p-6 mb-16 max-w-3xl mx-auto border border-primary/20">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Join Our Scout Network</h2>
          <p className="text-muted-foreground mb-4">
            Earn carry and referral fees by connecting us with exceptional founders in your network.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div className="bg-background/50 p-4 rounded-lg border border-primary/20">
              <h3 className="font-semibold text-foreground">Carry Share</h3>
              <p className="text-muted-foreground">Get a share of the investment upside for successful referrals</p>
            </div>
            <div className="bg-background/50 p-4 rounded-lg border border-primary/20">
              <h3 className="font-semibold text-foreground">Referral Fee</h3>
              <p className="text-muted-foreground">Earn immediate rewards for successful introductions</p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <p className="text-muted-foreground mb-8">Analyzing the best startups across investment platforms such as:</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-50">
            <img src="/placeholder.svg" alt="Platform 1" className="h-8 invert" />
            <img src="/placeholder.svg" alt="Platform 2" className="h-8 invert" />
            <img src="/placeholder.svg" alt="Platform 3" className="h-8 invert" />
            <img src="/placeholder.svg" alt="Platform 4" className="h-8 invert" />
            <img src="/placeholder.svg" alt="Platform 5" className="h-8 invert" />
          </div>
        </div>
      </div>
    </div>
  );
};