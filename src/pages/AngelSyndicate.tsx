import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const syndicateMembers = [
  {
    name: "Alexandra Chen",
    expertise: "AI/ML & Deep Tech",
    investments: 12,
    bio: "Former CTO with 15+ years in tech, focused on AI startups",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop"
  },
  {
    name: "Marcus Thompson",
    expertise: "FinTech & Blockchain",
    investments: 8,
    bio: "Serial entrepreneur, founded and sold 3 fintech startups",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&auto=format&fit=crop"
  },
  {
    name: "Sarah Williams",
    expertise: "SaaS & B2B",
    investments: 15,
    bio: "20+ years in enterprise software sales and scaling",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&auto=format&fit=crop"
  }
];

const AngelSyndicate = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Application submitted successfully!");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-background/90">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Join Our Angel Syndicate
            </h1>
            <p className="text-muted-foreground">
              Join our exclusive network of angel investors and get access to pre-seed investment opportunities.
            </p>
          </div>

          {/* Syndicate Directory Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Angel Syndicate Members
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {syndicateMembers.map((member) => (
                <Card key={member.name} className="bg-secondary/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300">
                  <CardHeader>
                    <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-xl text-center text-foreground">{member.name}</CardTitle>
                    <CardDescription className="text-center text-primary font-medium">
                      {member.expertise}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">{member.investments} investments</span>
                      <Button variant="secondary" size="sm">Connect</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Application Form Section */}
          <form onSubmit={handleSubmit} className="space-y-6 bg-secondary/50 backdrop-blur-sm p-8 rounded-lg border border-primary/20 max-w-3xl mx-auto">
            <div className="space-y-4">
              <FormField label="Full Name" required>
                <Input placeholder="Enter your full name" className="bg-background/50" />
              </FormField>

              <FormField label="Email" required>
                <Input type="email" placeholder="you@example.com" className="bg-background/50" />
              </FormField>

              <FormField label="LinkedIn Profile" required>
                <Input type="url" placeholder="https://linkedin.com/in/..." className="bg-background/50" />
              </FormField>

              <FormField label="Investment Experience">
                <Textarea 
                  placeholder="Tell us about your previous investment experience"
                  className="h-32 bg-background/50"
                />
              </FormField>

              <FormField label="Investment Range" required>
                <select className="w-full rounded-md border border-primary/20 p-2 bg-background/50 text-foreground">
                  <option value="">Select investment range</option>
                  <option value="5-25k">£5,000 - £25,000</option>
                  <option value="25-50k">£25,000 - £50,000</option>
                  <option value="50k+">£50,000+</option>
                </select>
              </FormField>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Apply to Join"}
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
};

const FormField = ({ 
  label, 
  required, 
  children 
}: { 
  label: string; 
  required?: boolean; 
  children: React.ReactNode;
}) => (
  <div>
    <label className="block text-sm font-medium text-foreground mb-1">
      {label} {required && <span className="text-destructive">*</span>}
    </label>
    {children}
  </div>
);

export default AngelSyndicate;
