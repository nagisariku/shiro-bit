import { Briefcase, Diamond, Zap } from 'lucide-react'

export const countryCodes = [
  { code: '+1', country: 'USA', flag: '🇺🇸' },
  { code: '+44', country: 'UK', flag: '🇬🇧' },
  { code: '+62', country: 'Indonesia', flag: '🇮🇩' },
  { code: '+91', country: 'India', flag: '🇮🇳' },
  { code: '+61', country: 'Australia', flag: '🇦🇺' },
  { code: '+65', country: 'Singapore', flag: '🇸🇬' },
  { code: '+60', country: 'Malaysia', flag: '🇲🇾' },
  { code: '+49', country: 'Germany', flag: '🇩🇪' },
  { code: '+33', country: 'France', flag: '🇫🇷' },
  { code: '+81', country: 'Japan', flag: '🇯🇵' },
  { code: '+86', country: 'China', flag: '🇨🇳' },
]

export const plans = [
  {
    id: 'starter',
    title: 'Starter',
    price: 149.99,
    originalPrice: 199.99,
    icon: Zap,
  },
  {
    id: 'professional',
    title: 'Professional',
    price: 349.99,
    originalPrice: 499.99,
    icon: Briefcase,
  },
  {
    id: 'high-conversion',
    title: 'High Conversion',
    price: 799.99,
    originalPrice: 1299.99,
    icon: Diamond,
  },
]

export const paymentMethods = [
  { id: 'paypal', title: 'PayPal', icon: '/assets/icons/paypal.svg' },
  { id: 'wise', title: 'Wise', icon: '/assets/icons/wise.svg' },
  { id: 'stripe', title: 'Stripe', icon: '/assets/icons/stripe.svg' },
]
