import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { startupData } from "@/data/startupData";

export const DealCard = ({ deal }: { deal: typeof startupData[0] }) => {
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