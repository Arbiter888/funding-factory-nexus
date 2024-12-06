import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

const AngelSyndicate = () => {
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
            <h1 className="text-4xl font-bold mb-4 text-gray-900">Angel Syndicate</h1>
            <p className="text-gray-600">
              Join our exclusive network of angel investors and get access to pre-seed investment opportunities.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-sm">
            <div className="space-y-4">
              <FormField label="Full Name" required>
                <Input placeholder="Enter your full name" />
              </FormField>

              <FormField label="Email" required>
                <Input type="email" placeholder="you@example.com" />
              </FormField>

              <FormField label="LinkedIn Profile" required>
                <Input type="url" placeholder="https://linkedin.com/in/..." />
              </FormField>

              <FormField label="Investment Experience">
                <Textarea 
                  placeholder="Tell us about your previous investment experience"
                  className="h-32"
                />
              </FormField>

              <FormField label="Investment Range" required>
                <select className="w-full rounded-md border border-gray-300 p-2">
                  <option value="">Select investment range</option>
                  <option value="5-25k">$5,000 - $25,000</option>
                  <option value="25-50k">$25,000 - $50,000</option>
                  <option value="50k+">$50,000+</option>
                </select>
              </FormField>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-gray-900 hover:bg-gray-800"
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
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    {children}
  </div>
);

export default AngelSyndicate;