import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { howItWorksSteps } from "@/pages/data/randomJson";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

export default function HowItWorkSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            How It Works
          </Badge>
          <h2 className="text-3xl sm:text-4xl text-gray-900 dark:text-gray-100 mb-4">
            Getting around has never been easier
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Four simple steps to your destination. Whether you're a rider or
            driver, our platform makes transportation seamless.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {howItWorksSteps.map((step, index) => (
            <div key={index} className="relative text-center group">
              {/* Connection line */}
              {index < howItWorksSteps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary to-primary/30 transform translate-x-8" />
              )}

              <div className="relative bg-white dark:bg-gray-800 rounded-xl p-6 transition-colors">
                <div className="bg-primary/10 dark:bg-primary/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors">
                  <step.icon className="h-10 w-10 text-primary" />
                </div>

                <div className="absolute -top-2 -right-2 bg-primary text-white text-sm w-8 h-8 rounded-full flex items-center justify-center">
                  {step.step}
                </div>

                <h3 className="text-lg text-gray-900 dark:text-gray-100 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/register">
            <Button size="lg">
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
