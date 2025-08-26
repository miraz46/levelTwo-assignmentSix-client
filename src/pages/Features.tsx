import {
  riderFeatures,
  driverFeatures,
  safetyFeatures,
  appFeatures,
} from "./data/featuresData";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { ImageWithFallback } from "@/components/features/ImageWithFallback";
import { FeatureSection } from "@/components/features/FeatureSection";

const Features = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl text-gray-900 mb-6">
              Powerful Features for Everyone
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the comprehensive suite of features designed to make your
              transportation experience safe, convenient, and enjoyable.
            </p>
          </div>
        </div>
      </section>

      {/* Safety First Section */}
      <FeatureSection
        title="Safety First"
        description="Your safety is our top priority. We've built comprehensive safety features into every aspect of our platform."
        features={safetyFeatures}
        iconColor="text-red-600"
        iconBgColor="bg-red-100"
      />

      {/* For Riders Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl text-gray-900 mb-6">For Riders</h2>
              <p className="text-xl text-gray-600 mb-8">
                Get where you need to go quickly and safely with features
                designed specifically for riders.
              </p>
              <Link to="/register?role=rider">
                <Button size="lg">Start Riding</Button>
              </Link>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
                alt="Rider using mobile app"
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {riderFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Drivers Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&h=400&fit=crop"
                alt="Driver in vehicle"
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl text-gray-900 mb-6">For Drivers</h2>
              <p className="text-xl text-gray-600 mb-8">
                Turn your car into a source of income with flexible driving
                opportunities and comprehensive support.
              </p>
              <Link to="/register?role=driver">
                <Button size="lg">Start Driving</Button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {driverFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-lg">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Features Section */}
      <FeatureSection
        title="Seamless Experience"
        description="Our app is designed with you in mind, offering intuitive features that make every interaction smooth and effortless."
        features={appFeatures}
        iconColor="text-purple-600"
        iconBgColor="bg-purple-100"
      />

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl text-white mb-4">
            Ready to experience the difference?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join millions of users who trust RideShare for their daily
            transportation needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register?role=rider">
              <Button
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto"
              >
                Get Started as Rider
              </Button>
            </Link>
            <Link to="/register?role=driver">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto text-white border-white hover:bg-white hover:text-primary"
              >
                Drive with Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
