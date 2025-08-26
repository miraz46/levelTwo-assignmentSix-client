import { Shield, Users, Heart, Globe, Mail, Phone, MapPin, Clock, HelpCircle, Car, CreditCard, Smartphone, DollarSign, Award, Gift, Percent, } from "lucide-react";

export const values = [
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

export const team = [
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


export const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    content: "support@rideshare.com",
    description: "Send us an email anytime",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "1-800-RIDESHARE",
    description: "24/7 customer support",
  },
  {
    icon: MapPin,
    title: "Address",
    content: "123 Main St, San Francisco, CA 94102",
    description: "Visit our headquarters",
  },
  {
    icon: Clock,
    title: "Hours",
    content: "24/7 Support Available",
    description: "We never sleep",
  },
];

export const categories = [
  {
    id: "general",
    title: "General",
    icon: HelpCircle,
    color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
  },
  {
    id: "riders",
    title: "For Riders",
    icon: Users,
    color: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
  },
  {
    id: "drivers",
    title: "For Drivers",
    icon: Car,
    color: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
  },
  {
    id: "payments",
    title: "Payments",
    icon: CreditCard,
    color: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400",
  },
  {
    id: "safety",
    title: "Safety",
    icon: Shield,
    color: "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400",
  },
];

export const faqs = [
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


export const howItWorksSteps = [
  {
    step: "1",
    title: "Request a Ride",
    description: "Open the app and enter your destination",
    icon: Smartphone,
    userType: "rider",
  },
  {
    step: "2",
    title: "Get Matched",
    description: "We find the nearest available driver",
    icon: MapPin,
    userType: "both",
  },
  {
    step: "3",
    title: "Enjoy Your Ride",
    description: "Sit back and relax while we get you there",
    icon: Car,
    userType: "rider",
  },
  {
    step: "4",
    title: "Pay Seamlessly",
    description: "Automatic payment through the app",
    icon: CreditCard,
    userType: "rider",
  },
];

export const serviceHighlights = [
  {
    icon: Shield,
    title: "Safety First",
    description: "Background-checked drivers, GPS tracking, and 24/7 support",
    color: "text-green-600",
  },
  {
    icon: Clock,
    title: "Always Available",
    description:
      "Round-the-clock service with average pickup under 5 minutes",
    color: "text-blue-600",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "Upfront fare estimates with no hidden fees",
    color: "text-yellow-600",
  },
  {
    icon: Award,
    title: "Top-Rated Service",
    description:
      "4.9-star average rating from millions of satisfied customers",
    color: "text-purple-600",
  },
];

export const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Manager",
    avatar:
      "https://images.unsplash.com/photo-1587813368302-70f35d8eac81?w=100&h=100&fit=crop&crop=face",
    content:
      "RideShare has transformed my daily commute. The drivers are professional and the app is incredibly user-friendly.",
    rating: 5,
    location: "New York",
  },
  {
    name: "Michael Chen",
    role: "Software Developer",
    avatar:
      "https://images.unsplash.com/photo-1718434137166-b3cb7d944b27?w=100&h=100&fit=crop&crop=face",
    content:
      "As a driver, I love the flexibility and earning potential. The platform makes it easy to connect with riders.",
    rating: 5,
    location: "San Francisco",
  },
  {
    name: "Emily Rodriguez",
    role: "Business Owner",
    avatar:
      "https://images.unsplash.com/photo-1720627453069-d0d9b763de39?w=100&h=100&fit=crop&crop=face",
    content:
      "Reliable, safe, and affordable. I use RideShare for all my business trips and recommend it to my team.",
    rating: 5,
    location: "Chicago",
  },
];

export const promotions = [
  {
    title: "First Ride Free",
    description: "New users get their first ride up to $15 free",
    code: "WELCOME15",
    icon: Gift,
    badge: "New Users",
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "20% Off Peak Hours",
    description: "Save on rides during off-peak times (10 AM - 4 PM)",
    code: "OFFPEAK20",
    icon: Percent,
    badge: "Limited Time",
    color: "from-blue-500 to-cyan-600",
  },
  {
    title: "Driver Bonus Weekend",
    description: "Earn extra $200 completing 25 rides this weekend",
    code: "DRIVE200",
    icon: Award,
    badge: "Drivers Only",
    color: "from-purple-500 to-pink-600",
  },
];

export const stats = [
  { label: "Happy Riders", value: "2.5M+", icon: Users },
  { label: "Rides Completed", value: "15M+", icon: Car },
  { label: "Cities Served", value: "150+", icon: MapPin },
  { label: "Driver Partners", value: "500K+", icon: Award },
];
