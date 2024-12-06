import { Navigation } from "@/components/Navigation";
import { Brain, Users, LineChart, MessageSquare } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-gray-900">About Our AI-Powered Investment Process</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine artificial intelligence with human expertise to revolutionize venture capital decision-making.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Brain className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-xl font-semibold">AI Deal Flow Analysis</h2>
              </div>
              <p className="text-gray-600">
                Our AI system processes thousands of startup applications, analyzing metrics, market trends, and growth potential to provide comprehensive initial assessments.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-green-100 p-2 rounded-full">
                  <LineChart className="h-6 w-6 text-green-600" />
                </div>
                <h2 className="text-xl font-semibold">Data-Driven Insights</h2>
              </div>
              <p className="text-gray-600">
                Each startup receives a detailed scoring based on multiple factors including team composition, market opportunity, traction, and innovation potential.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Investment Committee Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-purple-100 p-2 rounded-full">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold">Expert Review</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Our investment committee consists of seasoned venture capitalists and industry experts who review AI-curated deals, providing deep insights and final investment decisions.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Thorough evaluation of AI-recommended startups</li>
                  <li>Strategic assessment of market fit and potential</li>
                  <li>Risk analysis and mitigation strategies</li>
                </ul>
              </div>
              
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-orange-100 p-2 rounded-full">
                    <MessageSquare className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold">Meaningful Feedback</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Every startup receives detailed feedback combining AI insights and expert committee observations, helping founders understand their strengths and areas for improvement.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Comprehensive feedback reports</li>
                  <li>Actionable improvement suggestions</li>
                  <li>Market positioning insights</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Submit Your Startup?</h2>
            <p className="text-gray-600 mb-6">
              Join our platform to get your startup evaluated by our AI system and receive feedback from our investment committee.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Submit Your Startup
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutUs;