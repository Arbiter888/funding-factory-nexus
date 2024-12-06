import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";

const investors = [
  {
    name: "Sarah Chen",
    role: "Founding Partner",
    focus: "AI/ML, Enterprise SaaS",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop",
    investments: 15,
  },
  {
    name: "Michael Zhang",
    role: "Angel Investor",
    focus: "FinTech, Blockchain",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&auto=format&fit=crop",
    investments: 23,
  },
  {
    name: "Elena Rodriguez",
    role: "Operating Partner",
    focus: "HealthTech, BioTech",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&auto=format&fit=crop",
    investments: 18,
  },
  {
    name: "David Kim",
    role: "Angel Investor",
    focus: "Consumer Tech, D2C",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&auto=format&fit=crop",
    investments: 12,
  },
];

const Investors = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-gray-900">Our Investors</h1>
            <p className="text-gray-600">
              Meet our network of experienced investors and industry experts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {investors.map((investor) => (
              <div key={investor.name} className="bg-white rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md">
                <div className="aspect-square relative">
                  <img 
                    src={investor.image} 
                    alt={investor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-1">{investor.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{investor.role}</p>
                  <p className="text-sm text-gray-500 mb-4">Focus: {investor.focus}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">
                      {investor.investments} investments
                    </span>
                    <Button variant="outline" size="sm">
                      View Profile
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Investors;