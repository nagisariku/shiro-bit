import React, { Suspense } from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { FaArrowLeft } from 'react-icons/fa6'
import { BlurFade } from '@/components/magicui/blur-fade'
import { Skeleton } from '@/components/ui/skeleton'

import { PricingCards } from './_components/pricing-cards'
import { ComparisonTable } from './_components/comparison-table'

export const metadata: Metadata = {
  title: 'Pricing Plans & Packages',
  description:
    'Explore our transparent pricing plans. Compare features across Starter, Professional, and High Conversion plans to find the perfect fit for your project.',
}

function PricingCardsSkeleton() {
  return (
    <div className="mx-auto flex max-w-screen-lg flex-wrap justify-center gap-6">
      {[...Array(3)].map((_, i) => (
        <Skeleton key={i} className="h-[29rem] w-full max-w-[20rem] rounded-2xl sm:max-w-[24rem]" />
      ))}
    </div>
  )
}

function TableSkeleton() {
  return (
    <div className="rounded-xl border border-neutral-100 dark:border-neutral-800">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="flex border-b border-neutral-50 p-4 last:border-0 dark:border-neutral-900">
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-4 w-1/4" />
        </div>
      ))}
    </div>
  )
}

export default function PricingPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <div className="container relative z-10 mx-auto flex max-w-screen-xl flex-col items-start justify-start px-6 py-0 lg:p-12">
        <Link href="/" className="back-link group">
          <FaArrowLeft className="transition-transform group-hover:-translate-x-1" />
          <span className="font-medium">Back to Home</span>
        </Link>

        {/* Hero Title & Description - Renders Immediately */}
        <section className="mx-auto mb-16 w-full max-w-screen-lg text-center">
          <BlurFade delay={0.1}>
            <div className="page-badge bg-green-500/10 text-green-600 dark:text-green-400">
              Pricing
            </div>
            <h1 className="page-title">
              Find the <span className="text-primary">Perfect Plan</span>
            </h1>
            <p className="page-subtitle">
              Transparent pricing with no hidden fees. Every plan includes
              responsive design, modern tech stack, and dedicated support to
              launch your digital presence.
            </p>
          </BlurFade>
        </section>

        {/* Pricing Cards - Parallel Load */}
        <section className="mx-auto mb-20 w-full">
          <Suspense fallback={<PricingCardsSkeleton />}>
            <PricingCards />
          </Suspense>
        </section>

        {/* Feature Comparison - Parallel Load */}
        <section id="comparisontable" className="mx-auto mb-24 w-full max-w-screen-lg">
          <BlurFade delay={0.2} inView>
            <div className="mb-10 text-center">
              <h2 className="mb-3 text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 md:text-3xl">
                Compare features across plans
              </h2>
              <p className="mx-auto max-w-xl text-sm text-neutral-500 dark:text-neutral-400 md:text-base">
                See exactly what's included in each plan so you can make an
                informed decision for your project.
              </p>
            </div>
          </BlurFade>

          <Suspense fallback={<TableSkeleton />}>
            <ComparisonTable />
          </Suspense>
        </section>
      </div>
    </div>
  )
}
