import { 
  MapPin, 
  Clock, 
  Shield, 
  CreditCard, 
  Star, 
  MessageSquare, 
  Car, 
  Smartphone,
  AlertTriangle,
  DollarSign,
  Users,
  BarChart3
} from 'lucide-react'

export const riderFeatures = [
  {
    icon: MapPin,
    title: 'Real-time Tracking',
    description: 'Track your driver\'s location and estimated arrival time in real-time.'
  },
  {
    icon: CreditCard,
    title: 'Cashless Payments',
    description: 'Pay seamlessly with credit cards, digital wallets, or mobile payments.'
  },
  {
    icon: Star,
    title: 'Driver Ratings',
    description: 'Rate your experience and choose highly-rated drivers for future rides.'
  },
  {
    icon: AlertTriangle,
    title: 'Emergency SOS',
    description: 'One-tap emergency alert system for your safety and peace of mind.'
  }
]

export const driverFeatures = [
  {
    icon: DollarSign,
    title: 'Flexible Earnings',
    description: 'Drive when you want and keep up to 85% of each fare you earn.'
  },
  {
    icon: BarChart3,
    title: 'Earnings Analytics',
    description: 'Track your daily, weekly, and monthly earnings with detailed insights.'
  },
  {
    icon: Car,
    title: 'Vehicle Support',
    description: 'Get help with vehicle maintenance, insurance, and inspection requirements.'
  },
  {
    icon: Users,
    title: 'Driver Community',
    description: 'Connect with other drivers, share tips, and get support when you need it.'
  }
]

export const safetyFeatures = [
  {
    icon: Shield,
    title: 'Background Checks',
    description: 'All drivers undergo comprehensive background checks and vehicle inspections.',
    badge: 'Essential'
  },
  {
    icon: MessageSquare,
    title: '24/7 Support',
    description: 'Round-the-clock customer support available via chat, phone, or email.',
    badge: 'Always Available'
  },
  {
    icon: MapPin,
    title: 'Trip Sharing',
    description: 'Share your trip details with trusted contacts for added safety.',
    badge: 'Peace of Mind'
  },
  {
    icon: AlertTriangle,
    title: 'Emergency Response',
    description: 'Direct connection to emergency services when you need help most.',
    badge: 'Critical'
  }
]

export const appFeatures = [
  {
    icon: Smartphone,
    title: 'Intuitive Interface',
    description: 'Clean, easy-to-use app design that makes booking rides effortless.'
  },
  {
    icon: Clock,
    title: 'Schedule Rides',
    description: 'Book rides in advance for important appointments and events.'
  },
  {
    icon: Car,
    title: 'Multiple Vehicle Types',
    description: 'Choose from economy, premium, or large vehicles based on your needs.'
  },
  {
    icon: Star,
    title: 'Ride History',
    description: 'Access your complete ride history with receipts and trip details.'
  }
]