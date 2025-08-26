import { Award } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { ImageWithFallback } from "@/components/features/ImageWithFallback";
import { team, values } from "./data/randomJson";

const About = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl text-gray-900 dark:text-gray-100 mb-6">
              About RideShare
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We're on a mission to revolutionize transportation by connecting
              people and communities through safe, reliable, and affordable
              rides.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl text-gray-900 dark:text-gray-100 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Founded in 2020, RideShare began with a simple idea:
                transportation should be accessible, safe, and convenient for
                everyone. What started as a local service in San Francisco has
                grown into a global platform serving millions of users
                worldwide.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We believe that mobility is a fundamental need, and everyone
                deserves access to reliable transportation. Our platform
                connects riders with professional drivers, creating economic
                opportunities while solving real transportation challenges.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl text-primary mb-1">5M+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    Rides Completed
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl text-primary mb-1">100+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    Cities
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl text-primary mb-1">1M+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    Happy Users
                  </div>
                </div>
              </div>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
                alt="Team collaboration"
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl text-gray-900 dark:text-gray-100 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              These core values guide everything we do and shape the experience
              we create for our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg bg-white dark:bg-gray-900"
              >
                <CardContent className="p-8 text-center">
                  <div className="bg-primary/10 dark:bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl text-gray-900 dark:text-gray-100 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl text-gray-900 dark:text-gray-100 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The passionate individuals working to make transportation better
              for everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover"
                  />
                </div>
                <h3 className="text-xl text-gray-900 dark:text-gray-100 mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <Award className="h-16 w-16 text-primary dark:text-yellow-400 mx-auto mb-6" />
            <h2 className="text-3xl text-gray-900 dark:text-white mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-200">
              To create a world where transportation is accessible, sustainable,
              and connects communities. We're building more than just a
              ride-sharing platform – we're fostering economic opportunities and
              bringing people together.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
