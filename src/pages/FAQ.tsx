import { useState } from "react";
import {
  ChevronDown,
  Search,
  HelpCircle,
  Users,
  Car,
  CreditCard,
  Shield,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Badge } from "@/components/ui/badge";

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const categories = [
    {
      id: "general",
      title: "General",
      icon: HelpCircle,
      color: "bg-blue-100 text-blue-600",
    },
    {
      id: "riders",
      title: "For Riders",
      icon: Users,
      color: "bg-green-100 text-green-600",
    },
    {
      id: "drivers",
      title: "For Drivers",
      icon: Car,
      color: "bg-purple-100 text-purple-600",
    },
    {
      id: "payments",
      title: "Payments",
      icon: CreditCard,
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      id: "safety",
      title: "Safety",
      icon: Shield,
      color: "bg-red-100 text-red-600",
    },
  ];

  const faqs = [
    {
      id: "1",
      category: "general",
      question: "What is RideShare?",
      answer:
        "RideShare is a ride-hailing platform that connects riders with drivers through our mobile app. We provide safe, reliable, and affordable transportation in over 100 cities worldwide.",
    },
    {
      id: "2",
      category: "general",
      question: "In which cities is RideShare available?",
      answer:
        "RideShare operates in over 100 cities across North America, Europe, and Asia. Check our app to see if we serve your area.",
    },
    {
      id: "3",
      category: "riders",
      question: "How do I book a ride?",
      answer:
        'Download the RideShare app, create an account, enter your pickup location and destination, select your preferred vehicle type, and tap "Request Ride". You\'ll be matched with a nearby driver.',
    },
    {
      id: "4",
      category: "riders",
      question: "Can I schedule a ride in advance?",
      answer:
        'Yes! You can schedule rides up to 7 days in advance. Just select "Schedule" when booking and choose your preferred pickup time.',
    },
    {
      id: "5",
      category: "riders",
      question: "How much does a ride cost?",
      answer:
        "Ride costs vary based on distance, time, demand, and vehicle type. You'll see an upfront price estimate before confirming your ride.",
    },
    {
      id: "6",
      category: "riders",
      question: "Can I track my driver?",
      answer:
        "Yes, once your ride is confirmed, you can track your driver's location in real-time through the app.",
    },
    {
      id: "7",
      category: "drivers",
      question: "How do I become a RideShare driver?",
      answer:
        "To become a driver, you need to be at least 21 years old, have a valid driver's license, personal auto insurance, and a qualifying vehicle. You'll also need to pass a background check.",
    },
    {
      id: "8",
      category: "drivers",
      question: "What are the vehicle requirements?",
      answer:
        "Vehicles must be 2010 or newer, have 4 doors, pass a vehicle inspection, and meet local licensing requirements.",
    },
    {
      id: "9",
      category: "drivers",
      question: "How much can I earn as a driver?",
      answer:
        "Earnings vary based on factors like location, time spent driving, and demand. Drivers typically keep 80-85% of each fare, plus tips.",
    },
    {
      id: "10",
      category: "drivers",
      question: "When do I get paid?",
      answer:
        "You can cash out your earnings instantly after each trip, or receive weekly deposits every Tuesday for the previous week's earnings.",
    },
    {
      id: "11",
      category: "payments",
      question: "What payment methods do you accept?",
      answer:
        "We accept major credit and debit cards, PayPal, Apple Pay, Google Pay, and in some cities, cash payments.",
    },
    {
      id: "12",
      category: "payments",
      question: "How do I add a tip?",
      answer:
        "You can add a tip through the app after your ride is complete. Tips go directly to your driver.",
    },
    {
      id: "13",
      category: "payments",
      question: "Can I get a receipt for my ride?",
      answer:
        "Yes, receipts are automatically sent to your email after each completed ride. You can also access them in the app's trip history.",
    },
    {
      id: "14",
      category: "safety",
      question: "How do you ensure driver safety?",
      answer:
        "All drivers undergo comprehensive background checks, vehicle inspections, and must maintain proper insurance. We also provide in-app safety features like emergency assistance.",
    },
    {
      id: "15",
      category: "safety",
      question: "What should I do in an emergency?",
      answer:
        "Use the emergency button in the app to contact local authorities, or call 911 directly. The app also allows you to share your trip details with trusted contacts.",
    },
    {
      id: "16",
      category: "safety",
      question: "Can I share my trip with others?",
      answer:
        "Yes, you can share your trip status and location with family and friends through the app for added safety.",
    },
  ];

  const filteredFAQs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getCategoryFAQs = (categoryId: string) => {
    return filteredFAQs.filter((faq) => faq.category === categoryId);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl text-gray-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Find answers to common questions about RideShare
            </p>

            {/* Search */}
            <div className="relative max-w-lg mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search for answers..."
                className="pl-10 pr-4 py-3 text-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const categoryFAQs = getCategoryFAQs(category.id);
              return (
                <div key={category.id} className="flex items-center gap-2">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center ${category.color}`}
                  >
                    <category.icon className="h-4 w-4" />
                  </div>
                  <span className="text-gray-900">{category.title}</span>
                  <Badge variant="secondary">{categoryFAQs.length}</Badge>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {categories.map((category) => {
            const categoryFAQs = getCategoryFAQs(category.id);

            if (categoryFAQs.length === 0) return null;

            return (
              <div key={category.id} className="mb-12">
                <div className="flex items-center gap-3 mb-8">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center ${category.color}`}
                  >
                    <category.icon className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl text-gray-900">{category.title}</h2>
                  <Badge variant="outline">
                    {categoryFAQs.length} questions
                  </Badge>
                </div>

                <div className="space-y-4">
                  {categoryFAQs.map((faq) => (
                    <Card key={faq.id}>
                      <Collapsible
                        open={openItems.includes(faq.id)}
                        onOpenChange={() => toggleItem(faq.id)}
                      >
                        <CollapsibleTrigger className="w-full">
                          <CardContent className="p-6">
                            <div className="flex items-center justify-between text-left">
                              <h3 className="text-lg text-gray-900 pr-4">
                                {faq.question}
                              </h3>
                              <ChevronDown
                                className={`h-5 w-5 text-gray-500 transition-transform ${
                                  openItems.includes(faq.id) ? "rotate-180" : ""
                                }`}
                              />
                            </div>
                          </CardContent>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <CardContent className="pt-0 px-6 pb-6">
                            <p className="text-gray-600 leading-relaxed">
                              {faq.answer}
                            </p>
                          </CardContent>
                        </CollapsibleContent>
                      </Collapsible>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}

          {filteredFAQs.length === 0 && searchTerm && (
            <div className="text-center py-12">
              <HelpCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl text-gray-900 mb-2">No results found</h3>
              <p className="text-gray-600 mb-6">
                Sorry, we couldn't find any questions matching "{searchTerm}"
              </p>
              <button
                onClick={() => setSearchTerm("")}
                className="text-primary hover:text-primary/80"
              >
                Clear search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl text-white mb-4">Still have questions?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Our support team is here to help you 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-primary px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Contact Support
            </a>
            <a
              href="tel:1-800-RIDESHARE"
              className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-primary transition-colors"
            >
              Call 1-800-RIDESHARE
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
