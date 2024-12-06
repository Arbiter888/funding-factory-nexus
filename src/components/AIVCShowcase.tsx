import { Brain, Users, LineChart, MessageSquare } from "lucide-react";

export const AIVCShowcase = () => {
  return (
    <section className="py-16 bg-background/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            AI-Powered Investment Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our AI system analyzes thousands of startups, providing comprehensive assessments to our Investment Committee for final decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-secondary/50 backdrop-blur-sm p-6 rounded-lg border border-primary/20 hover:border-primary/40 transition-colors">
            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Brain className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">AI Analysis</h3>
            <p className="text-muted-foreground">
              Our AI processes startup applications, analyzing metrics and market trends for initial assessment.
            </p>
          </div>

          <div className="bg-secondary/50 backdrop-blur-sm p-6 rounded-lg border border-primary/20 hover:border-primary/40 transition-colors">
            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <LineChart className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">Smart Scoring</h3>
            <p className="text-muted-foreground">
              Each startup receives a detailed scoring based on multiple factors including team, market, and traction.
            </p>
          </div>

          <div className="bg-secondary/50 backdrop-blur-sm p-6 rounded-lg border border-primary/20 hover:border-primary/40 transition-colors">
            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">Committee Review</h3>
            <p className="text-muted-foreground">
              Investment committee experts review AI-curated deals for final investment decisions.
            </p>
          </div>

          <div className="bg-secondary/50 backdrop-blur-sm p-6 rounded-lg border border-primary/20 hover:border-primary/40 transition-colors">
            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <MessageSquare className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">Detailed Feedback</h3>
            <p className="text-muted-foreground">
              Startups receive comprehensive feedback combining AI insights and expert observations.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a href="/about-us" className="inline-flex items-center text-primary hover:text-primary/90 transition-colors">
            Learn more about our investment process
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};