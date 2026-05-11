import dynamic from 'next/dynamic'
import {
  HeroSkeleton,
  SectionSkeleton,
  PricingSkeleton,
  TechStackSkeleton,
} from '@/components/skeletons/section-skeletons'

const HeroSection = dynamic(
  () => import('@/components/sections/hero-section'),
  {
    loading: () => <HeroSkeleton />,
  },
)
const DescriptionSection = dynamic(
  () => import('@/components/sections/description-section'),
  {
    loading: () => <SectionSkeleton />,
  },
)
const ProcessSection = dynamic(
  () => import('@/components/sections/process-section'),
  {
    loading: () => <SectionSkeleton />,
  },
)
const TechStackSection = dynamic(
  () => import('@/components/sections/tech-stack-section'),
  {
    loading: () => <TechStackSkeleton />,
  },
)
const PricingSection = dynamic(
  () => import('@/components/sections/pricing-section'),
  {
    loading: () => <PricingSkeleton />,
  },
)
const StudyCasesSection = dynamic(
  () => import('@/components/sections/study-cases-section'),
  {
    loading: () => <SectionSkeleton />,
  },
)
const ReviewsSection = dynamic(
  () => import('@/components/sections/reviews-alt-section'),
  {
    loading: () => <SectionSkeleton />,
  },
)
const WhyWebsiteSection = dynamic(
  () => import('@/components/sections/why-website-section'),
  {
    loading: () => <SectionSkeleton />,
  },
)
const CTASection = dynamic(() => import('@/components/sections/cta-section'), {
  loading: () => <SectionSkeleton />,
})
const FreeConsulting = dynamic(
  () => import('@/components/sections/free-consulting'),
  {
    loading: () => <SectionSkeleton />,
  },
)

export default function Home() {
  return (
    <div>
      <HeroSection />
      <DescriptionSection />
      <TechStackSection />
      <ProcessSection />
      <PricingSection />
      <StudyCasesSection />
      <WhyWebsiteSection />
      <ReviewsSection />
      <FreeConsulting />
      <CTASection />
    </div>
  )
}
