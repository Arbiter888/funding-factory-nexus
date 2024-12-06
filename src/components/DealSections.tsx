import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Globe, Users } from "lucide-react";

export const DealSections = () => {
  return (
    <div className="py-16">
      <h2 className="text-4xl font-bold text-center mb-12">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Investment Opportunities
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Link to="/seed-funding" className="group">
          <Card className="h-full bg-secondary/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-colors">
            <CardHeader>
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Global Expansion</CardTitle>
              <CardDescription>Scale your startup internationally with our strategic support and funding</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Access our global network of partners and receive strategic guidance for international market entry
              </p>
            </CardContent>
          </Card>
        </Link>

        <Link to="/angel-syndicate" className="group">
          <Card className="h-full bg-secondary/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-colors">
            <CardHeader>
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Angel Syndicate</CardTitle>
              <CardDescription>Join our network of angel investors and access curated deal flow</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Connect with experienced angels and participate in exclusive investment opportunities
              </p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
};