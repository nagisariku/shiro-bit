'use client'

import React from 'react'
import { BlurFade } from '@/components/magicui/blur-fade'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface FeatureItemProps {
  title: string
  description: string
  category: string
  reverse?: boolean
}

const FeatureItem = ({
  title,
  description,
  category,
  reverse,
}: FeatureItemProps) => {
  return (
    <div className="grid w-full grid-cols-1 md:grid-cols-2">
      {/* Text Column */}
      <div
        className={`flex flex-col items-center justify-center px-6 py-4 text-center sm:px-12 md:items-start md:py-20 md:text-left lg:px-16 ${
          reverse ? 'md:order-2 md:pl-20' : 'md:order-1 md:pr-20'
        }`}
      >
        <BlurFade
          delay={0.2}
          inView
          className="flex flex-col items-center md:items-start"
        >
          <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50 md:text-2xl">
            {title}
          </h3>
          <p className="mb-2 text-xs text-neutral-500 dark:text-neutral-400">
            {category}
          </p>
          <p className="max-w-md text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 md:text-base">
            {description}
          </p>
        </BlurFade>
      </div>

      {/* Image Column */}
      <div
        className={`relative hidden min-h-[280px] w-full overflow-hidden rounded-3xl bg-surface-muted md:block md:min-h-full ${
          reverse ? 'md:order-1' : 'md:order-2'
        }`}
      >
        <BlurFade delay={0.3} inView className="h-full w-full">
          <div className="flex h-full w-full items-center justify-center text-neutral-400 dark:text-neutral-600">
            <span className="text-[10px] font-medium uppercase tracking-[0.3em]">
              Section Image
            </span>
          </div>
        </BlurFade>
      </div>
    </div>
  )
}

const features = [
  {
    category: 'Credibility',
    title: 'Build Trust at First Click',
    description:
      'Your website is the foundation of your professional identity. It provides a central, trustworthy home for your brand where customers can discover your story and feel confident choosing your services over fragmented social media profiles.',
  },
  {
    category: 'Sales',
    title: 'Turn Visitors into Customers',
    description:
      'Take full control of your sales journey. Showcase your complete catalog and guide visitors step-by-step toward a purchase with a site designed specifically to convert interest into results, 24/7.',
  },
  {
    category: 'Growth',
    title: 'Reach Beyond Your Local Area',
    description:
      'Break free from the limits of local foot traffic. A well-optimized website puts your business on the global map, allowing search engines to connect you with customers who are looking for exactly what you offer.',
  },
  {
    category: 'Marketing',
    title: 'Power Your Digital Strategy',
    description:
      'Everything leads back to your site. It acts as the intelligent hub for all your ads and promotions, giving you the tracking and conversion potential that third-party platforms simply can’t match.',
  },
  {
    category: 'Systems',
    title: 'Connect, Automate, and Scale',
    description:
      'Your website is more than a display—it’s a business system. Integrate automation, payments, and analytics to transform your site into a high-efficiency engine that grows alongside your business.',
  },
]

export default function WhyWebsiteSection() {
  return (
    <section id="why-website" className="section-wrapper-sm sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <BlurFade delay={0.2} inView>
          <h2 className="section-title">Why Need a Website?</h2>
          <p className="section-subtitle">
            In today&apos;s digital world, a website isn&apos;t just an option —
            it&apos;s your business&apos;s foundation for growth, trust, and
            long-term success.
          </p>
        </BlurFade>
      </div>

      <div className="flex flex-col gap-2 md:gap-0">
        {features.map((feature, index) => (
          <FeatureItem
            key={index}
            category={feature.category}
            title={feature.title}
            description={feature.description}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  )
}
