'use client'

import React from 'react'
import { BlurFade } from '@/components/magicui/blur-fade'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

interface FeatureItemProps {
  title: string
  description: string
  category: string
  image: string
  reverse?: boolean
}

const FeatureItem = ({
  title,
  description,
  category,
  image,
  reverse,
}: FeatureItemProps) => {
  return (
    <div className="grid w-full grid-cols-1 md:grid-cols-2">
      {/* Image Column */}
      <div
        className={`relative mx-auto mb-6 h-48 w-48 overflow-hidden md:mb-0 md:aspect-square md:h-[24rem] md:w-[24rem] ${
          reverse ? 'md:order-1' : 'md:order-2'
        }`}
      >
        <BlurFade
          delay={0.3}
          inView
          className="h-full w-full rounded-2xl dark:border-border-subtle md:border"
        >
          <Image
            src={image}
            alt={title}
            width={600}
            height={600}
            className="h-full w-full object-cover"
          />
        </BlurFade>
      </div>

      {/* Text Column */}
      <div
        className={`flex flex-col items-center justify-center px-6 pb-8 pt-0 text-center sm:px-6 md:items-start md:py-8 md:text-left ${
          reverse ? 'md:order-2' : 'md:order-1'
        }`}
      >
        <BlurFade
          delay={0.2}
          inView
          className="flex flex-col items-center md:items-start"
        >
          <h3 className="paragraph-hero">{title}</h3>
          <p className="paragraph-small mb-2 uppercase">{category}</p>
          <p className="paragraph-default">{description}</p>
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
      'Your website is the foundation of your professional identity. It provides a central, trustworthy home for your brand where customers can discover your story and feel confident choosing your services.',
    image: '/assets/items/credibility.png',
  },
  {
    category: 'Sales',
    title: 'Turn Visitors into Customers',
    description:
      'Take full control of your sales journey. Showcase your complete catalog and guide visitors step-by-step toward a purchase with a site designed specifically to convert interest into results.',
    image: '/assets/items/sales.png',
  },
  {
    category: 'Growth',
    title: 'Reach Beyond Your Local Area',
    description:
      'Expand your reach through search engines and connect with customers beyond your local community who are looking for exactly what you offer.',
    image: '/assets/items/growth.png',
  },
  {
    category: 'Marketing',
    title: 'Power Your Digital Strategy',
    description:
      'Everything leads back to your site. It acts as the intelligent hub for all your ads and promotions, giving you the tracking and conversion potential that third-party platforms simply can’t match.',
    image: '/assets/items/marketing.png',
  },
  {
    category: 'Systems',
    title: 'Connect, Automate, and Scale',
    description:
      'Build a system designed for long-term growth. Integrate tools, automate workflows, and scale your business efficiently as your needs evolve.',
    image: '/assets/items/system.png',
  },
]

export default function WhyWebsiteSection() {
  return (
    <section id="why-website" className="section-wrapper-sm md:px-6">
      <div className="mb-8 text-center">
        <BlurFade delay={0.2} inView>
          <h2 className="section-title">Why it matters?</h2>
          <p className="section-subtitle">
            In today&apos;s digital world, a website isn&apos;t just an option,
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
            image={feature.image}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  )
}
