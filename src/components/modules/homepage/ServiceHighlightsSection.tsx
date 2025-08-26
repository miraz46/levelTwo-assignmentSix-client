import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { serviceHighlights } from "@/pages/data/randomJson";
import { Car, Users } from "lucide-react";
import { Link } from "react-router";

export default function ServiceHighlightsSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Why Choose Us
          </Badge>
          <h2 className="text-3xl sm:text-4xl text-gray-900 dark:text-white mb-4">
            Built for your peace of mind
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We've designed every aspect of our service with your safety,
            convenience, and satisfaction in mind. Here's what sets us apart.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceHighlights.map((feature, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group dark:bg-gray-800"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 bg-gray-100 dark:bg-gray-700 group-hover:bg-gray-200 dark:group-hover:bg-gray-600 transition-colors">
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <h3 className="text-lg text-gray-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 relative">
          <div className="bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl mb-4">
                Join the RideShare community today
              </h3>
              <p className="text-lg mb-8 text-blue-100">
                Whether you need a ride or want to drive, we've got you covered
                with the most reliable platform in the industry.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/register?role=rider">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="w-full sm:w-auto"
                  >
                    <Users className="mr-2 h-5 w-5" />
                    Sign Up as Rider
                  </Button>
                </Link>
                <Link to="/register?role=driver">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto text-white border-white hover:bg-white hover:text-primary"
                  >
                    <Car className="mr-2 h-5 w-5" />
                    Become a Driver
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
