export type PlanTier = 'starter' | 'professional' | 'highConversion'

export interface Plan {
  title: string
  description: string
  features: string[]
  price: string
  originalPrice: string
  icon: string
  beam?: boolean
  tier: PlanTier
}

export type FeatureValue =
  | string // text value (e.g. "1", "3", "5+")
  | boolean // checklist (true = included, false = not included)

export interface ComparisonFeature {
  name: string
  starter: FeatureValue
  professional: FeatureValue
  highConversion: FeatureValue
}

export interface ComparisonSection {
  title: string
  features: ComparisonFeature[]
}

export const plans: Plan[] = [
  {
    title: 'Starter',
    description: 'Suitable for a personal website with limited content.',
    features: ['Single Page', 'Basic SEO', '1x Revision', '7 Days Support'],
    price: '$149.99',
    originalPrice: '$299.99',
    icon: '/assets/icons/plant.png',
    tier: 'starter',
  },
  {
    title: 'Professional',
    description:
      'Ideal for a company profile introducing its business and products.',
    features: [
      'Up to 3 pages',
      'Advanced SEO',
      '3x Revision',
      '30 Days Support',
    ],
    price: '$349.99',
    originalPrice: '$699.99',
    beam: true,
    icon: '/assets/icons/building.png',
    tier: 'professional',
  },
  {
    title: 'High Conversion',
    description: 'Bring your dream website to life with exciting features.',
    features: ['5+ pages', 'Advanced SEO', '7x Revisions', '90 Days Support'],
    price: '$799.99',
    originalPrice: '$1,599.99',
    icon: '/assets/icons/diamond.png',
    tier: 'highConversion',
  },
]

export const comparisonSections: ComparisonSection[] = [
  {
    title: 'Price',
    features: [
      {
        name: 'Basic Plan',
        starter: '$149.99',
        professional: '$349.99',
        highConversion: '$799.99',
      },
      {
        name: 'Hosting & Domain',
        starter: '1 Year Free',
        professional: '1 Year Free',
        highConversion: '1 Year Free',
      },
      {
        name: 'Maintenance',
        starter: 'Free Support',
        professional: 'Priority Support',
        highConversion: 'Premium Support',
      },
      {
        name: 'Additional Pages',
        starter: '$50/page',
        professional: '$45/page',
        highConversion: '$40/page',
      },
    ],
  },
  {
    title: 'Essentials',
    features: [
      {
        name: 'Pages',
        starter: '1',
        professional: 'Up to 3',
        highConversion: '5+',
      },
      {
        name: 'SEO Optimization',
        starter: 'Basic Metadata',
        professional: 'Advanced / Per Page',
        highConversion: 'Advanced / Per Page',
      },
      {
        name: 'Revisions',
        starter: '1x',
        professional: '3x',
        highConversion: '7x',
      },
      {
        name: 'Responsive (All Devices)',
        starter: true,
        professional: true,
        highConversion: true,
      },
      {
        name: 'Nested Routing',
        starter: false,
        professional: true,
        highConversion: true,
      },
      {
        name: 'Custom Domain Setup',
        starter: false,
        professional: true,
        highConversion: true,
      },
      {
        name: 'Post-Launch Support',
        starter: '7 Days',
        professional: '30 Days',
        highConversion: '90 Days',
      },
      {
        name: 'Performance Optimization',
        starter: 'Basic',
        professional: 'Standard',
        highConversion: 'Advanced',
      },
    ],
  },
  {
    title: 'Special Support (Features & Components)',
    features: [
      {
        name: 'Animations & Transitions',
        starter: false,
        professional: 'Basic',
        highConversion: 'Advanced',
      },
      {
        name: 'Skeleton / Lazy Loading',
        starter: false,
        professional: true,
        highConversion: true,
      },
      {
        name: 'Form Validation',
        starter: false,
        professional: true,
        highConversion: true,
      },
      {
        name: 'Google Maps Location',
        starter: false,
        professional: false,
        highConversion: true,
      },
      {
        name: 'WhatsApp / Telegram Integration',
        starter: false,
        professional: true,
        highConversion: true,
      },
      {
        name: 'Email Integration',
        starter: false,
        professional: false,
        highConversion: true,
      },
      {
        name: 'Translation / Multi Languages',
        starter: false,
        professional: false,
        highConversion: true,
      },
      {
        name: 'Dark Mode Support',
        starter: false,
        professional: true,
        highConversion: true,
      },
      {
        name: 'Analytics Dashboard',
        starter: false,
        professional: false,
        highConversion: true,
      },
    ],
  },
]

export const createWhatsAppUrl = (planTitle: string, planPrice: string) => {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
  const templateMessage = `Halo, saya tertarik dengan paket ${planTitle} seharga ${planPrice}. Bisakah Anda memberikan informasi lebih lanjut?`
  const encodedMessage = encodeURIComponent(templateMessage)
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`
}
