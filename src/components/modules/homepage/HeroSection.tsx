import { ImageWithFallback } from "@/components/features/ImageWithFallback";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { stats } from "@/pages/data/randomJson";
import { ArrowRight, Play, Star } from "lucide-react";
import { Link } from "react-router";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 py-20 sm:py-32 overflow-hidden">
      {/* background grid */}
      <div className="absolute inset-0 bg-grid-white/[0.02] dark:bg-grid-black/[0.05] bg-[size:60px_60px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="mb-4">
                <Star className="h-3 w-3 mr-1" />
                #1 Ride Sharing Platform
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl text-gray-900 dark:text-white">
                Your ride is just a
                <span className="text-primary block mt-2">tap away</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed">
                Experience the future of transportation with safe, reliable, and
                affordable rides available 24/7 in your city. Join millions who
                trust RideShare.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/register">
                <Button size="lg" className="w-full sm:w-auto group">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/features">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto"
                >
                  <Play className="mr-2 h-4 w-4" />
                  Watch Demo
                </Button>
              </Link>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl text-gray-900 dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content (Image) */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-blue-500/20 dark:from-primary/10 dark:to-blue-400/10 rounded-3xl transform rotate-3" />
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1565268875034-d9ab0eccd6d0?w=600&h=400&fit=crop"
              alt="RideShare mobile app interface"
              className="relative rounded-3xl shadow-2xl w-full h-auto transform -rotate-1 hover:rotate-0 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
