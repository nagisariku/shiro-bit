'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BlurFade } from '@/components/magicui/blur-fade'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { WebTemplates } from '@/lib/constants/templates'
import { WebTemplateType } from '@/types'

interface TemplateSectionProps {
  title: string
  subHeadline: string
  paragraphs: string[]
  highlights: string[]
  category: string
  templates: WebTemplateType[]
  initialVisibleCount?: number
  gridClassName?: string
  getItemClassName?: (idx: number) => string
}

const TemplateSection = ({
  title,
  subHeadline,
  paragraphs,
  highlights,
  templates,
  initialVisibleCount = 4,
  gridClassName = 'grid-cols-2 lg:gap-4',
  getItemClassName,
}: TemplateSectionProps) => {
  const [isExpanded, setIsExpanded] = useState(false)

  if (templates.length === 0) return null

  const visibleTemplates = isExpanded
    ? templates
    : templates.slice(0, initialVisibleCount)
  const hasMore = templates.length > initialVisibleCount

  return (
    <section className="my-20 first:mt-8">
      <div className="mb-10 max-w-screen-xl">
        <h2 className="section-title">{title}</h2>
        <h3 className="section-subtitle-portfolio">{subHeadline}</h3>
        <div className="paragraph-default space-y-4">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="mt-8 max-w-screen-md rounded-2xl bg-neutral-50 p-6 dark:bg-neutral-900/50">
          <h4 className="paragraph-default mb-4">What you gain:</h4>
          <ul className="grid gap-3 md:grid-cols-2">
            {highlights.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm">
                <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-green-500/20 text-[10px] font-bold text-green-600 dark:text-green-400">
                  ✓
                </span>
                <span className="paragraph-small">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={cn('grid w-full gap-3', gridClassName)}>
        {visibleTemplates.map((template, idx) => {
          const isLastVisibleItem =
            !isExpanded && idx === initialVisibleCount - 1
          const shouldShowBlur = isLastVisibleItem && hasMore

          return (
            <BlurFade
              key={template.id}
              delay={idx < initialVisibleCount ? 0.1 : 0.05}
              inView
              className={cn(
                'group relative',
                getItemClassName?.(idx),
                shouldShowBlur && 'cursor-pointer',
              )}
              onClick={() => {
                if (shouldShowBlur) setIsExpanded(true)
              }}
            >
              <div className="overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800">
                {shouldShowBlur ? (
                  <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                      src={template.thumbnail}
                      alt={template.title}
                      fill
                      className="scale-110 object-cover object-top blur-sm transition-transform duration-300"
                      sizes="(max-width: 768px) 50vw, 33vw"
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                      <Button
                        variant="secondary"
                        className="pointer-events-none shadow-lg"
                      >
                        Show More
                      </Button>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={`/portfolio/item/${template.id}`}
                    className="relative block aspect-video w-full overflow-hidden"
                  >
                    <Image
                      src={template.thumbnail}
                      alt={template.title}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 33vw"
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      priority={idx < 2}
                    />
                  </Link>
                )}
              </div>
            </BlurFade>
          )
        })}
      </div>
    </section>
  )
}

export function TemplatesClient() {
  const sections = [
    {
      title: 'Cafe & Restaurant',
      category: 'Cafes and Restaurants',
      subHeadline:
        'Turn hungry visitors into loyal customers, before they even walk in.',
      paragraphs: [
        'Your food might be amazing, but if people can’t find you online, they’ll end up somewhere else. A website acts as your digital storefront, open 24/7, showcasing your menu, vibe, and experience.',
        'Imagine someone searching for “best coffee near me.” Your website becomes the first impression: mouth-watering visuals, clear menu, easy reservations, and location details, all in seconds.',
        'More than just information, it builds trust. Customers are far more likely to visit a place that looks alive, updated, and professional online.',
      ],
      highlights: [
        'More walk-ins from search visibility',
        'Easy menu access & online reservations',
        'Strong brand identity (not just another café on Instagram)',
        'A central hub beyond social media algorithms',
      ],
      initialVisibleCount: 3,
      getItemClassName: (idx: number) => (idx === 0 ? 'col-span-2' : ''),
    },
    {
      title: 'Hotel & Travel',
      category: 'Hotels and Travel',
      subHeadline: 'Sell the experience before the journey begins.',
      paragraphs: [
        'Travel decisions are emotional. People don’t just book rooms, they buy experiences. A website lets you control that narrative with stunning visuals, seamless booking, and compelling storytelling.',
        'Instead of relying only on third-party platforms (that take commissions and limit your branding), your website becomes your own booking engine, increasing direct reservations and profit margins.',
        'It also builds credibility. Travelers trust businesses with a polished, informative online presence.',
      ],
      highlights: [
        'More direct bookings (less reliance on OTA platforms)',
        'Stronger brand positioning & trust',
        'Clear packages, itineraries, and pricing',
        'Better customer experience before arrival',
      ],
    },
    {
      title: 'Agencies & Service Businesses',
      category: 'Agencies',
      subHeadline:
        'Make your business look as professional as the service you deliver.',
      paragraphs: [
        'Whether you’re in property, car rental, fitness, or IT services, people judge your credibility in seconds. A website acts as proof that your business is real, established, and trustworthy.',
        'It also simplifies your sales process. Instead of explaining everything manually, your website educates potential clients, services, pricing, testimonials, before they even contact you.',
        'Think of it as your best salesperson, working non-stop.',
      ],
      highlights: [
        'Increased trust & authority in your industry',
        'More qualified leads (clients who already understand your service)',
        'Clear presentation of services & portfolio',
        'Reduced back-and-forth communication',
      ],
    },
    {
      title: 'Education',
      category: 'Education',
      subHeadline:
        'Build trust with students and parents before the first conversation.',
      paragraphs: [
        'Education is about credibility and clarity. A website becomes the foundation for both, showcasing your programs, achievements, facilities, and values in a structured way.',
        'Parents and students will research before making decisions. Without a website, you risk looking outdated or less trustworthy compared to competitors.',
        'It’s also a communication hub, announcements, registration, course details, everything in one place.',
      ],
      highlights: [
        'Strong institutional credibility',
        'Easier student enrollment process',
        'Centralized information & updates',
        'Better communication with students & parents',
      ],
    },
    {
      title: 'Lifestyle Brands',
      category: 'Lifestyle Brands',
      subHeadline: 'Turn your brand into an experience, not just a product.',
      paragraphs: [
        'In lifestyle industries, perception is everything. A website lets you shape how people feel about your brand, through visuals, storytelling, and seamless shopping experiences.',
        'Unlike marketplaces or social media, your website is fully yours. No distractions, no competitors next to your product, just your brand, your identity.',
        'It also scales your business. From showcasing collections to enabling online sales, your website becomes your digital flagship store.',
      ],
      highlights: [
        'Strong brand identity & positioning',
        'Full control over customer experience',
        'Increased sales through direct channels',
        'A scalable platform for growth',
      ],
    },
  ]

  return (
    <div className="w-full max-w-screen-lg">
      {sections.map((section) => (
        <TemplateSection
          key={section.category}
          title={section.title}
          subHeadline={section.subHeadline}
          paragraphs={section.paragraphs}
          highlights={section.highlights}
          category={section.category}
          templates={WebTemplates.filter(
            (t) => t.category === section.category,
          )}
          initialVisibleCount={section.initialVisibleCount}
          getItemClassName={section.getItemClassName}
        />
      ))}
    </div>
  )
}
