'use client'

import { PricingCard } from '@/components/pricing-card'
import { plans } from '../constants'

export function PricingCards() {
  return (
    <div className="mx-auto mb-8 flex max-w-screen-lg flex-wrap gap-4">
      {plans.map((plan, idx) => (
        <PricingCard key={plan.title} plan={plan} index={idx} />
      ))}
    </div>
  )
}
