import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block mb-4 px-4 py-1 bg-gray-100 rounded-full text-sm text-gray-600 fade-in">
              Empowering the next generation of founders
            </span>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-gray-900 slide-up">
              Turning Visionaries into Leaders
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto slide-up">
              We partner with exceptional founders at the seed stage, providing capital and guidance to build category-defining companies.
            </p>
            <div className="space-x-4 slide-up">
              <Link to="/seed-funding">
                <Button size="lg" className="bg-gray-900 hover:bg-gray-800">
                  Apply for Seed Funding
                </Button>
              </Link>
              <Link to="/angel-syndicate">
                <Button size="lg" variant="outline">
                  Join Angel Syndicate
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <StatCard number="$100M+" label="Assets Under Management" />
              <StatCard number="50+" label="Portfolio Companies" />
              <StatCard number="90%" label="Follow-on Investment Rate" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

const StatCard = ({ number, label }: { number: string; label: string }) => (
  <div className="text-center p-8 rounded-lg bg-gray-50">
    <div className="text-4xl font-bold mb-2 text-gray-900">{number}</div>
    <div className="text-gray-600">{label}</div>
  </div>
);

export default Index;