import { Shield, Users,  Award, Heart, Globe } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { ImageWithFallback } from "@/components/features/ImageWithFallback";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description:
        "Every driver is background-checked and every vehicle is inspected to ensure your safety.",
    },
    {
      icon: Users,
      title: "Community Driven",
      description:
        "We believe in building strong connections between riders and drivers in every community.",
    },
    {
      icon: Heart,
      title: "Customer Focused",
      description:
        "Your experience matters to us. We continuously improve based on your feedback.",
    },
    {
      icon: Globe,
      title: "Globally Accessible",
      description:
        "Available in over 100 cities worldwide, bringing reliable transportation everywhere.",
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b332e234?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Operations",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "David Kim",
      role: "Head of Safety",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl text-gray-900 mb-6">
              About RideShare
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're on a mission to revolutionize transportation by connecting
              people and communities through safe, reliable, and affordable
              rides.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Founded in 2020, RideShare began with a simple idea:
                transportation should be accessible, safe, and convenient for
                everyone. What started as a local service in San Francisco has
                grown into a global platform serving millions of users
                worldwide.
              </p>
              <p className="text-gray-600 mb-6">
                We believe that mobility is a fundamental need, and everyone
                deserves access to reliable transportation. Our platform
                connects riders with professional drivers, creating economic
                opportunities while solving real transportation challenges.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl text-primary mb-1">5M+</div>
                  <div className="text-sm text-gray-600">Rides Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl text-primary mb-1">100+</div>
                  <div className="text-sm text-gray-600">Cities</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl text-primary mb-1">1M+</div>
                  <div className="text-sm text-gray-600">Happy Users</div>
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and shape the experience
              we create for our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
                <h3 className="text-xl text-gray-900 mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <Award className="h-16 w-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl text-white mb-6">Our Mission</h2>
            <p className="text-xl text-blue-100">
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
