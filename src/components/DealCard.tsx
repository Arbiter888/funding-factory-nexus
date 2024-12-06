import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { startupData } from "@/data/startupData";

export const DealCard = ({ deal }: { deal: typeof startupData[0] }) => {
  return (
    <Card className="h-full bg-secondary/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors">
      <CardContent className="p-4">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex-shrink-0">
            <img src={deal.logo} alt={deal.name} className="w-full h-full object-cover rounded-lg" />
          </div>
          <div>
            <h3 className="font-semibold mb-1 text-foreground">{deal.name}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {deal.description}
            </p>
          </div>
        </div>

        <HoverCard>
          <HoverCardTrigger asChild>
            <div className="flex items-center gap-2 mb-4 cursor-pointer">
              <Star className="h-5 w-5 text-primary fill-primary" />
              <span className="font-semibold text-lg text-foreground">{deal.aiScore}</span>
              <span className="text-sm text-muted-foreground">AI Score</span>
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="w-80 bg-secondary/90 backdrop-blur-sm border-primary/20">
            <div className="space-y-2">
              <h4 className="font-semibold text-foreground">AI Score Breakdown</h4>
              <div className="space-y-1">
                {Object.entries(deal.scoreBreakdown).map(([category, score]) => (
                  <div key={category} className="flex justify-between items-center">
                    <span className="capitalize text-sm text-muted-foreground">{category}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 h-2 bg-secondary rounded-full">
                        <div 
                          className="h-full bg-primary rounded-full" 
                          style={{ width: `${score}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium text-foreground">{score}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
        
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Valuation:</span>
            <span className="font-medium text-foreground">{deal.valuation}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Industry:</span>
            <span className="font-medium text-foreground">{deal.industry}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Stage:</span>
            <span className="font-medium text-foreground">{deal.stage}</span>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-primary/20">
          <div className="flex justify-between text-sm">
            <span className="text-foreground">Raised: £{(deal.raised).toLocaleString()}</span>
            <span className="text-muted-foreground">of £{(deal.target).toLocaleString()}</span>
          </div>
          <div className="w-full bg-secondary rounded-full h-2 mt-2">
            <div 
              className="bg-primary h-2 rounded-full" 
              style={{ width: `${(deal.raised / deal.target) * 100}%` }} 
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};