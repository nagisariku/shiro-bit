'use client'

import { useRef, useState, useEffect } from 'react'
import { Check, X, ChevronLeft, ChevronRight } from 'lucide-react'


import { Button } from '@/components/ui/button'
import { comparisonSections, plans, createWhatsAppUrl, type FeatureValue } from '../constants'

function FeatureCell({ value }: { value: FeatureValue }) {
  if (typeof value === 'boolean') {
    return value ? (
      <Check className="mx-auto h-5 w-5 text-green-500" />
    ) : (
      <X className="mx-auto h-5 w-5 text-neutral-300 dark:text-neutral-600" />
    )
  }
  return (
    <span className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
      {value}
    </span>
  )
}

export function ComparisonTable() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  const checkScroll = () => {
    const el = scrollContainerRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 2)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 2)
  }

  useEffect(() => {
    const el = scrollContainerRef.current
    if (!el) return
    checkScroll()
    el.addEventListener('scroll', checkScroll, { passive: true })
    window.addEventListener('resize', checkScroll)
    return () => {
      el.removeEventListener('scroll', checkScroll)
      window.removeEventListener('resize', checkScroll)
    }
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollContainerRef.current
    if (!el) return
    const amount = el.clientWidth * 0.6
    el.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    })
  }

  return (
    <div className="relative mx-auto w-full max-w-screen-lg">
      {/* Mobile scroll hint arrows */}
      {canScrollLeft && (
        <button
          onClick={() => scroll('left')}
          className="absolute -left-1 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 p-1.5 shadow-lg backdrop-blur-sm transition-all hover:bg-white dark:bg-neutral-800/90 dark:hover:bg-neutral-700 md:hidden"
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-4 w-4 text-neutral-700 dark:text-neutral-200" />
        </button>
      )}
      {canScrollRight && (
        <button
          onClick={() => scroll('right')}
          className="absolute -right-1 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 p-1.5 shadow-lg backdrop-blur-sm transition-all hover:bg-white dark:bg-neutral-800/90 dark:hover:bg-neutral-700 md:hidden"
          aria-label="Scroll right"
        >
          <ChevronRight className="h-4 w-4 text-neutral-700 dark:text-neutral-200" />
        </button>
      )}

      {/* Mobile swipe hint */}
      <div className="mb-3 flex items-center justify-center gap-1.5 text-xs text-neutral-400 dark:text-neutral-500 md:hidden">
        <ChevronLeft className="h-3 w-3" />
        <span>Swipe to compare plans</span>
        <ChevronRight className="h-3 w-3" />
      </div>

      <div className="overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800">
        <div className="flex">
          {/* Frozen feature name column */}
          <div className="z-10 w-[160px] flex-shrink-0 border-r border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950 sm:w-[180px] md:w-[220px]">
            {/* Header spacer */}
            <div className="flex h-[120px] items-center border-b border-neutral-200 px-3 dark:border-neutral-800 sm:px-4 md:h-[110px]">
              <span className="text-sm font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 sm:text-base">
                Features
              </span>
            </div>

            {comparisonSections.map((section) => (
              <div key={section.title}>
                {/* Section header */}
                <div className="flex min-h-[52px] items-center border-b border-neutral-200 bg-neutral-50 px-3 py-2 dark:border-neutral-800 dark:bg-neutral-900 sm:min-h-[48px] sm:px-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-green-600 dark:text-green-400 sm:text-xs">
                    {section.title}
                  </span>
                </div>

                {/* Feature rows */}
                {section.features.map((feature, i) => (
                  <div
                    key={feature.name}
                    className={`flex min-h-[44px] items-center border-b border-neutral-100 px-3 dark:border-neutral-800/60 sm:min-h-[48px] sm:px-4 ${
                      i % 2 === 0
                        ? 'bg-white dark:bg-neutral-950'
                        : 'bg-neutral-50/50 dark:bg-neutral-900/30'
                    }`}
                  >
                    <span className="text-[12px] font-medium leading-tight text-neutral-700 dark:text-neutral-300 sm:text-[13px]">
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Scrollable plan columns */}
          <div
            ref={scrollContainerRef}
            className="hide-scrollbar flex flex-1 overflow-x-auto"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {plans.map((plan, planIdx) => (
              <div
                key={plan.tier}
                className={`min-w-[160px] flex-1 sm:min-w-[200px] ${
                  planIdx < plans.length - 1
                    ? 'border-r border-neutral-200 dark:border-neutral-800'
                    : ''
                }`}
              >
                {/* Plan header */}
                <div
                  className={`flex h-[120px] flex-col items-center justify-center border-b border-neutral-200 px-2 pb-3 dark:border-neutral-800 md:h-[110px] ${
                    plan.beam
                      ? 'bg-green-50/60 dark:bg-green-950/20'
                      : 'bg-white dark:bg-neutral-950'
                  }`}
                >
                  <span
                    className={`mb-2 text-sm font-bold sm:text-base ${
                      plan.beam
                        ? 'text-green-600 dark:text-green-400'
                        : 'text-neutral-900 dark:text-neutral-100'
                    }`}
                  >
                    {plan.title}
                  </span>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className={`h-7 rounded-lg px-3 text-[10px] font-bold uppercase tracking-tight sm:h-8 sm:text-[11px] ${
                      plan.beam
                        ? 'border-green-600 text-green-600 hover:bg-green-50 dark:border-green-500 dark:text-green-400 dark:hover:bg-green-950/30'
                        : 'border-neutral-200 text-neutral-600 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-900'
                    }`}
                  >
                    <a
                      href={createWhatsAppUrl(plan.title, plan.price)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Go {plan.title}
                    </a>
                  </Button>
                </div>

                {comparisonSections.map((section) => (
                  <div key={section.title}>
                    {/* Section header spacer */}
                    <div
                      className={`flex min-h-[52px] items-center border-b border-neutral-200 bg-neutral-50 px-2 py-2 dark:border-neutral-800 dark:bg-neutral-900 sm:min-h-[48px] ${
                        plan.beam
                          ? 'bg-green-50/30 dark:bg-green-950/10'
                          : ''
                      }`}
                    >
                      <span className="invisible text-[10px] sm:text-xs">—</span>
                    </div>

                    {/* Feature values */}
                    {section.features.map((feature, i) => (
                      <div
                        key={feature.name}
                        className={`flex min-h-[44px] items-center justify-center border-b border-neutral-100 px-2 text-center dark:border-neutral-800/60 sm:min-h-[48px] ${
                          i % 2 === 0
                            ? plan.beam
                              ? 'bg-green-50/20 dark:bg-green-950/5'
                              : 'bg-white dark:bg-neutral-950'
                            : plan.beam
                              ? 'bg-green-50/10 dark:bg-green-950/10'
                              : 'bg-neutral-50/50 dark:bg-neutral-900/30'
                        }`}
                      >
                        <FeatureCell
                          value={feature[plan.tier as keyof typeof feature] as FeatureValue}
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}
