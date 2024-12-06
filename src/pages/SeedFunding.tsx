import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

const SeedFunding = () => {
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
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary">
              Seed Funding Application
            </h2>
            <p className="text-muted-foreground">
              We invest £500K-£2M in early-stage companies with exceptional founding teams.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-secondary/50 backdrop-blur-sm p-8 rounded-lg border border-primary/20">
            <div className="space-y-4">
              <FormField label="Company Name" required>
                <Input placeholder="Enter your company name" className="bg-background/50" />
              </FormField>

              <FormField label="Website" required>
                <Input type="url" placeholder="https://" className="bg-background/50" />
              </FormField>

              <FormField label="Pitch Deck" required>
                <Input type="file" accept=".pdf,.ppt,.pptx" className="bg-background/50" />
              </FormField>

              <FormField label="Company Description" required>
                <Textarea 
                  placeholder="Tell us about your company and what problem you're solving"
                  className="h-32 bg-background/50"
                />
              </FormField>

              <FormField label="Funding Amount" required>
                <Input type="number" placeholder="Amount in GBP" className="bg-background/50" />
              </FormField>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit Application"}
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

export default SeedFunding;