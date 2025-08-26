import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Download } from "lucide-react";
import { Link } from "react-router";

export default function FinalCallSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary via-blue-600 to-indigo-700 relative overflow-hidden dark:from-primary/90 dark:via-blue-800 dark:to-indigo-900 transition-colors duration-300">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1663408490081-b1edfbe1b2e9?w=1200&h=600&fit=crop')] bg-cover bg-center opacity-10 dark:opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="max-w-4xl mx-auto space-y-8">
          <Badge variant="secondary" className="mb-4">
            Download Now
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
            Ready to revolutionize your commute?
          </h2>

          <p className="text-xl text-blue-100 dark:text-blue-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join millions of satisfied customers and experience the convenience
            of modern transportation. Download the app today and get your first
            ride free.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link to="/register">
              <Button
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto group"
              >
                <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                Get Started Free
              </Button>
            </Link>

            <div className="flex gap-4">
              <Button
                variant="outline"
                size="lg"
                className="text-white border-white hover:bg-white hover:text-primary dark:text-gray-200 dark:border-gray-400 dark:hover:bg-white dark:hover:text-primary"
              >
                <Download className="mr-2 h-4 w-4" />
                App Store
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-white border-white hover:bg-white hover:text-primary dark:text-gray-200 dark:border-gray-400 dark:hover:bg-white dark:hover:text-primary"
              >
                <Download className="mr-2 h-4 w-4" />
                Google Play
              </Button>
            </div>
          </div>

          {/* Features */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-blue-100 dark:text-blue-200">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              No signup fees
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              Available 24/7
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              Safe & secure
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
