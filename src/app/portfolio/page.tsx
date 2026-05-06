import React, { Suspense } from 'react'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa6'
import { BlurFade } from '@/components/magicui/blur-fade'
import { TemplatesClient } from './_components/templates-client'
import { Skeleton } from '@/components/ui/skeleton'

export const metadata = {
  title: 'Premium Website Templates Portfolio',
  description:
    'Browse our curated gallery of premium website templates. From Cafes and Hotels to Agencies and Lifestyle brands, find the perfect digital solution for your business.',
}

function TemplatesSkeleton() {
  return (
    <div className="w-full max-w-screen-lg space-y-24">
      {[...Array(2)].map((_, sectionIdx) => (
        <div key={sectionIdx} className="space-y-10">
          <div className="space-y-4">
            <Skeleton className="h-10 w-64" />
            <Skeleton className="h-8 w-96" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>
          <div className="grid w-full grid-cols-2 gap-4 lg:gap-6">
            <Skeleton className="col-span-2 aspect-video w-full rounded-lg" />
            <Skeleton className="aspect-video w-full rounded-lg" />
            <Skeleton className="aspect-video w-full rounded-lg" />
          </div>
        </div>
      ))}
    </div>
  )
}

export default function TemplatesPage() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto flex max-w-screen-xl flex-col items-start justify-start px-6 py-0 lg:p-12">
        <Link href="/" className="back-link group">
          <FaArrowLeft className="transition-transform group-hover:-translate-x-1" />
          <span className="font-medium">Back to Home</span>
        </Link>

        {/* Hero Title & Description - Renders Immediately */}
        <section className="mx-auto mb-16 w-full max-w-screen-lg text-center">
          <BlurFade delay={0.1}>
            <div className="page-badge bg-green-500/10 text-green-600 dark:text-green-400">
              The Proof
            </div>
            <h1 className="page-title">See Our Work</h1>
            <p className="page-subtitle">
              Explore our curated collection of high-performance website
              templates, designed to elevate your brand and drive real business
              results across various industries.
            </p>
          </BlurFade>
        </section>

        {/* Templates List - Parallel Load with Skeleton */}
        <Suspense fallback={<TemplatesSkeleton />}>
          <TemplatesClient />
        </Suspense>
      </div>
    </div>
  )
}
