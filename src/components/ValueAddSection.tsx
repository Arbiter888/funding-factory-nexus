import { Users, Heart, TrendingUp } from "lucide-react";

export const ValueAddSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary">
            Value Add to Founders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Beyond capital, we provide comprehensive support to help founders thrive personally and professionally
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-secondary/50 backdrop-blur-sm p-8 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300">
            <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
              <Heart className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Personal Support</h3>
            <p className="text-muted-foreground">
              Comprehensive relocation assistance for founders and their families, including private healthcare coverage and professional life coaching services.
            </p>
          </div>

          <div className="bg-secondary/50 backdrop-blur-sm p-8 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300">
            <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
              <Users className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Company Operations</h3>
            <p className="text-muted-foreground">
              Optimize your burn rate through our established network of Malaysian talent, providing cost-effective solutions without compromising quality.
            </p>
          </div>

          <div className="bg-secondary/50 backdrop-blur-sm p-8 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300">
            <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
              <TrendingUp className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Growth Support</h3>
            <p className="text-muted-foreground">
              Access to expert board members and ongoing support for follow-on investment rounds to ensure sustainable growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};