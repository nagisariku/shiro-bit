'use client'

import Link from 'next/link'
import { BlurFade } from '@/components/magicui/blur-fade'
import { plans } from '@/app/pricing/constants'
import { PricingCard } from '@/components/pricing-card'

export default function PricingSection() {
  return (
    <div className="section-wrapper text-center">
      <BlurFade delay={0.25} inView>
        <h2 className="section-title">Choose Your Plan!</h2>
      </BlurFade>
      <BlurFade delay={0.25} inView>
        <p className="section-subtitle">
          Already have a vision for your website? We'll bring it to life with
          precision and creativity.
        </p>
      </BlurFade>
      <div className="mx-auto mb-8 flex max-w-screen-lg flex-wrap gap-4">
        {plans.map((plan, idx) => (
          <PricingCard key={plan.title} plan={plan} index={idx} />
        ))}
      </div>
      <p className="paragraph-default">
        For a detailed comparison of our plans,{' '}
        <Link
          href="/pricing#comparisontable"
          className="font-semibold text-neutral-900 underline underline-offset-4 hover:text-neutral-700 dark:text-neutral-100 dark:hover:text-neutral-300"
        >
          click here
        </Link>
      </p>
    </div>
  )
}
