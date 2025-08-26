import {
  Shield,
  Phone,
  AlertTriangle,
  CheckCircle,
  Users,
  Car,
  MapPin,
  Clock,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Safety = () => {
  const emergencyContacts = [
    {
      label: "Emergency Services",
      number: "911",
      description: "Police, Fire, Medical",
    },
    {
      label: "RideShare Safety",
      number: "1-800-RIDE-911",
      description: "24/7 Safety Hotline",
    },
    {
      label: "Local Police",
      number: "311",
      description: "Non-emergency assistance",
    },
  ];

  const safetyTips = [
    {
      category: "Before Your Ride",
      icon: MapPin,
      tips: [
        "Share your trip details with a trusted contact",
        "Wait in a safe, well-lit location",
        "Verify the driver and vehicle details match the app",
        "Check the license plate before getting in",
      ],
    },
    {
      category: "During Your Ride",
      icon: Car,
      tips: [
        "Wear your seatbelt at all times",
        "Sit in the back seat when riding alone",
        "Keep the app open to track your route",
        "Trust your instincts - speak up if something feels wrong",
      ],
    },
    {
      category: "Driver Safety",
      icon: Users,
      tips: [
        "Keep doors locked until you verify the passenger",
        "Follow the suggested route in the app",
        "Don't accept cash payments outside the app",
        "Take breaks to avoid fatigue while driving",
      ],
    },
    {
      category: "After Your Ride",
      icon: CheckCircle,
      tips: [
        "Rate your driver/passenger honestly",
        "Report any safety concerns immediately",
        "Keep a record of your trip receipt",
        "Contact support if you left something in the vehicle",
      ],
    },
  ];

  const safetyFeatures = [
    {
      title: "Real-time GPS Tracking",
      description:
        "Every ride is tracked with GPS for your safety and security",
      icon: MapPin,
    },
    {
      title: "24/7 Support",
      description:
        "Our safety team is available around the clock to assist you",
      icon: Clock,
    },
    {
      title: "Driver Background Checks",
      description: "All drivers undergo comprehensive background screening",
      icon: Shield,
    },
    {
      title: "Emergency Button",
      description: "One-touch access to emergency services during your ride",
      icon: AlertTriangle,
    },
    {
      title: "Trip Sharing",
      description:
        "Share your trip details with family and friends in real-time",
      icon: Users,
    },
    {
      title: "Ride Verification",
      description: "Match driver photo, name, license plate, and vehicle model",
      icon: CheckCircle,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-blue-100 dark:bg-gray-800 rounded-full">
            <Shield className="h-12 w-12 text-blue-600 dark:text-blue-400" />
          </div>
        </div>
        <h1 className="mb-4 text-3xl font-bold">Your Safety is Our Priority</h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          We're committed to providing a safe and secure rideshare experience
          for all our users. Learn about our safety features, guidelines, and
          emergency procedures.
        </p>
      </div>

      {/* Emergency Alert */}
      <Alert className="mb-8 border-red-600 dark:border-red-400 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-200">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Emergency Situations</AlertTitle>
        <AlertDescription>
          If you're in immediate danger, call 911 first. Then contact our safety
          team at 1-800-RIDE-911 to report the incident and get additional
          support.
        </AlertDescription>
      </Alert>

      {/* Emergency Contacts */}
      <Card className="mb-12 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            Emergency Contacts
          </CardTitle>
          <CardDescription>
            Keep these numbers handy for any safety-related concerns
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            {emergencyContacts.map((contact, index) => (
              <div
                key={index}
                className="text-center p-4 border rounded-lg border-gray-200 dark:border-gray-700"
              >
                <div className="text-2xl mb-2">{contact.number}</div>
                <div className="text-sm text-gray-700 dark:text-gray-300">
                  {contact.label}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  {contact.description}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Safety Features */}
      <section className="mb-12">
        <h2 className="mb-6 text-center text-2xl font-semibold">Safety Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {safetyFeatures.map((feature, index) => (
            <Card
              key={index}
              className="text-center bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700"
            >
              <CardHeader>
                <div className="flex justify-center mb-2">
                  <div className="p-2 bg-blue-100 dark:bg-gray-800 rounded-lg">
                    <feature.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Safety Tips */}
      <section className="mb-12">
        <h2 className="mb-8 text-center text-2xl font-semibold">Safety Guidelines</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {safetyTips.map((section, index) => (
            <Card
              key={index}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <section.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  {section.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {section.tips.map((tip, tipIndex) => (
                    <li
                      key={tipIndex}
                      className="flex items-start gap-2 text-gray-900 dark:text-gray-100"
                    >
                      <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Community Standards */}
      <section className="mb-12">
        <Card className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle>Community Standards</CardTitle>
            <CardDescription>
              Guidelines that all users must follow to maintain a safe
              environment
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="mb-3 flex items-center gap-2">
                  <Badge variant="outline">Required</Badge>
                  Respectful Behavior
                </h4>
                <ul className="text-sm space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Treat all users with respect and courtesy</li>
                  <li>
                    • No harassment, discrimination, or inappropriate behavior
                  </li>
                  <li>• Maintain appropriate conversation and conduct</li>
                  <li>• Respect personal boundaries and privacy</li>
                </ul>
              </div>
              <div>
                <h4 className="mb-3 flex items-center gap-2">
                  <Badge variant="outline">Prohibited</Badge>
                  Unsafe Activities
                </h4>
                <ul className="text-sm space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• No weapons, illegal substances, or contraband</li>
                  <li>• No smoking or vaping in vehicles</li>
                  <li>• No excessive noise or disruptive behavior</li>
                  <li>
                    • No bringing prohibited items or animals (except service
                    animals)
                  </li>
                </ul>
              </div>
            </div>

            <Separator className="dark:border-gray-700" />

            <div className="text-center">
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                Violations of community standards may result in account
                suspension or permanent ban.
              </p>
              <Button variant="outline">
                <Shield className="h-4 w-4 mr-2" />
                Report Safety Concern
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Additional Resources */}
      <section>
        <h2 className="mb-6 text-center text-2xl font-semibold">Additional Safety Resources</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {["Safety Center", "Safety Training", "Incident Reporting"].map((title, idx) => (
            <Card
              key={idx}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700"
            >
              <CardHeader>
                <CardTitle className="text-lg">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  {title === "Safety Center"
                    ? "Access comprehensive safety guides, tutorials, and best practices"
                    : title === "Safety Training"
                    ? "Interactive courses for drivers and riders on safety procedures"
                    : "Report safety incidents or concerns directly to our safety team"}
                </CardDescription>
                <Button variant="outline" className="w-full">
                  {title === "Incident Reporting" ? "Report Issue" : "Learn More"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Footer */}
      <div className="mt-12 text-center p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <h3 className="mb-2 text-lg font-semibold">Need Help?</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Our safety team is here to help 24/7. Don't hesitate to reach out if
          you have any concerns.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button>
            <Phone className="h-4 w-4 mr-2" />
            Call Safety Hotline
          </Button>
          <Button variant="outline">
            <AlertTriangle className="h-4 w-4 mr-2" />
            Emergency Services
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Safety;
