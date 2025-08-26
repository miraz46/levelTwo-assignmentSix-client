import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { testimonials } from "@/pages/data/randomJson";
import { CheckCircle, Heart, Star } from "lucide-react";

export default function CustomerTestimonialsSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Heart className="h-3 w-3 mr-1" />
            Customer Love
          </Badge>
          <h2 className="text-3xl sm:text-4xl text-gray-900 dark:text-white mb-4">
            Don't just take our word for it
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            See what our community of riders and drivers have to say about their
            RideShare experience.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-800"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.name}
                    />
                    <AvatarFallback>
                      {testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <CardTitle className="text-base text-gray-900 dark:text-white">
                      {testimonial.name}
                    </CardTitle>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                <div className="flex space-x-1 mt-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-700 dark:text-gray-300 italic">
                  "{testimonial.content}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-6 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400 mr-1" />
              <span className="text-lg text-gray-900 dark:text-white">
                4.9/5
              </span>
            </div>
            <div>Based on 50,000+ reviews</div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-600 mr-1" />
              Verified customers
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
