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
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      toast.success("Application submitted successfully!");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-gray-900">Seed Funding Application</h1>
            <p className="text-gray-600">
              We invest $500K-$2M in early-stage companies with exceptional founding teams.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-sm">
            <div className="space-y-4">
              <FormField label="Company Name" required>
                <Input placeholder="Enter your company name" />
              </FormField>

              <FormField label="Website" required>
                <Input type="url" placeholder="https://" />
              </FormField>

              <FormField label="Pitch Deck" required>
                <Input type="file" accept=".pdf,.ppt,.pptx" />
              </FormField>

              <FormField label="Company Description" required>
                <Textarea 
                  placeholder="Tell us about your company and what problem you're solving"
                  className="h-32"
                />
              </FormField>

              <FormField label="Funding Amount" required>
                <Input type="number" placeholder="Amount in USD" />
              </FormField>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-gray-900 hover:bg-gray-800"
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
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    {children}
  </div>
);

export default SeedFunding;