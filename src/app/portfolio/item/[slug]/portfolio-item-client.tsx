'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { BlurFade } from '@/components/magicui/blur-fade'
import { cn } from '@/lib/utils'
import { FaArrowLeft } from 'react-icons/fa6'
import { WebTemplateType } from '@/types'
import {
  Check,
  Eye,
  FileText,
  ShoppingCart,
  ChevronDown,
  Clock,
  RefreshCw,
  Layout,
  CreditCard,
  Globe,
} from 'lucide-react'

const INITIAL_SCREENSHOT_COUNT = 3

interface PortfolioItemClientProps {
  webData: WebTemplateType
}

export function PortfolioItemClient({ webData }: PortfolioItemClientProps) {
  const [screenshotsExpanded, setScreenshotsExpanded] = useState(false)

  // Prefer rich `screenshots` field, fall back to `imageUrl`
  const allScreenshots = (webData.screenshots ?? webData.imageUrl ?? []).filter(
    (src) => src !== webData.thumbnail,
  )
  const visibleScreenshots = screenshotsExpanded
    ? allScreenshots
    : allScreenshots.slice(0, INITIAL_SCREENSHOT_COUNT)
  const hasMoreScreenshots = allScreenshots.length > INITIAL_SCREENSHOT_COUNT

  return (
    <div className="min-h-screen">
      <div className="container mx-auto flex max-w-screen-xl flex-col items-start justify-start px-3 py-0 lg:p-12">
        {/* Back link */}
        <Link
          href="/portfolio"
          className="group mb-8 flex items-center gap-2 text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
        >
          <FaArrowLeft className="transition-transform group-hover:-translate-x-1" />
          <span className="font-medium">Back to Portfolio</span>
        </Link>

        {/* Header */}
        <div className="my-6 w-full max-w-screen-lg space-y-3">
          {/* Category badge */}
          <span className="inline-block rounded-full border border-neutral-200 px-3 py-1 text-sm text-neutral-500 dark:border-neutral-700 dark:text-neutral-400">
            {webData.category}
          </span>

          {/* Title */}
          <h1 className="page-title mb-0">{webData.title}</h1>

          {/* Subtitle */}
          {webData.subtitle && (
            <p className="section-subtitle-portfolio mb-0">
              {webData.subtitle}
            </p>
          )}
        </div>

        {/* Thumbnail */}
        <div className="mb-10 w-full">
          <div className="relative aspect-video overflow-hidden rounded-2xl bg-neutral-100 dark:bg-zinc-800">
            <Image
              src={webData.thumbnail}
              alt={webData.title || 'Template preview'}
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 1280px) 100vw, 1280px"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
            />
          </div>
        </div>

        {/* Two-column body */}
        <div className="w-full">
          <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
            {/* ── LEFT COLUMN ── */}
            <div className="flex flex-col gap-12 md:flex-[5]">
              {/* About */}
              <section>
                <div className="mb-4 flex items-center gap-3">
                  <h2 className="section-title mb-0">About</h2>
                </div>
                <div className="">
                  <p className="paragraph-default">{webData.Description}</p>
                </div>
              </section>

              {/* Screenshots Gallery */}
              <section>
                <div className="mb-6 flex items-center gap-3">
                  <h2 className="section-title mb-0">Gallery</h2>
                </div>
                <div className="grid gap-6">
                  {visibleScreenshots.map((src, idx) => (
                    <BlurFade key={idx} delay={0.1 * idx} inView>
                      <div className="group relative aspect-video overflow-hidden rounded-2xl border border-neutral-100 bg-neutral-100 dark:border-neutral-800 dark:bg-zinc-800">
                        <Image
                          src={src}
                          alt={`${webData.title} screenshot ${idx + 1}`}
                          fill
                          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px"
                          placeholder="blur"
                          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                        />
                      </div>
                    </BlurFade>
                  ))}
                </div>

                {hasMoreScreenshots && (
                  <div className="mt-8 flex justify-center">
                    <Button
                      variant="ghost"
                      className="gap-2 text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100"
                      onClick={() =>
                        setScreenshotsExpanded(!screenshotsExpanded)
                      }
                    >
                      {screenshotsExpanded
                        ? 'Show Less'
                        : 'Show More Screenshots'}
                      <ChevronDown
                        className={cn(
                          'size-4 transition-transform duration-300',
                          screenshotsExpanded && 'rotate-180',
                        )}
                      />
                    </Button>
                  </div>
                )}
              </section>
            </div>

            {/* ── RIGHT COLUMN (Sidebar) ── */}
            <aside className="md:flex-[2]">
              <div className="sticky top-24 space-y-6">
                <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-zinc-950">
                  <h3 className="boxinfo-title">Charges & Development</h3>

                  {/* Charges Info Section */}
                  <div className="mb-8 space-y-4">
                    <h4 className="boxinfo-label">Package Plan</h4>
                    <div className="space-y-4">
                      <div className="flex items-start justify-between gap-3 text-sm">
                        <div className="flex items-start gap-2 text-neutral-500 dark:text-neutral-400">
                          <Layout className="boxinfo-icon mt-0.5" />
                          <span className="leading-tight">Development</span>
                        </div>
                        <span className="boxinfo-value shrink-0 text-right leading-tight">
                          {webData.chargesInfo?.development || '-'}
                        </span>
                      </div>
                      <div className="flex items-start justify-between gap-3 text-sm">
                        <div className="flex items-start gap-2 text-neutral-500 dark:text-neutral-400">
                          <CreditCard className="boxinfo-icon mt-0.5" />
                          <span className="leading-tight">Package Plan</span>
                        </div>
                        <span className="boxinfo-value shrink-0 text-right leading-tight">
                          {webData.chargesInfo?.packagePlan || '-'}
                        </span>
                      </div>
                      <div className="flex items-start justify-between gap-3 text-sm">
                        <div className="flex items-start gap-2 text-neutral-500 dark:text-neutral-400">
                          <Globe className="boxinfo-icon mt-0.5" />
                          <span className="leading-tight">
                            Hosting & Domain (Monthly)
                          </span>
                        </div>
                        <span className="boxinfo-value shrink-0 text-right leading-tight">
                          {webData.chargesInfo?.maintenanceHostingDomain || '-'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Development Info Section */}
                  <div className="mb-10 space-y-4">
                    <h4 className="boxinfo-label">Development</h4>
                    <div className="space-y-4">
                      <div className="flex items-start justify-between gap-3 text-sm">
                        <div className="flex items-start gap-2 text-neutral-500 dark:text-neutral-400">
                          <Clock className="boxinfo-icon mt-0.5" />
                          <span className="leading-tight">
                            Delivery Time (Days)
                          </span>
                        </div>
                        <span className="boxinfo-value shrink-0 text-right leading-tight">
                          {webData.developmentInfo?.deliveryTime || '-'}
                        </span>
                      </div>
                      <div className="flex items-start justify-between gap-3 text-sm">
                        <div className="flex items-start gap-2 text-neutral-500 dark:text-neutral-400">
                          <RefreshCw className="boxinfo-icon mt-0.5" />
                          <span className="leading-tight">Total Revisions</span>
                        </div>
                        <span className="boxinfo-value shrink-0 text-right leading-tight">
                          {webData.developmentInfo?.totalRevisions || '-'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* CTA Section */}
                  <div className="space-y-4 border-t border-neutral-100 pt-6 dark:border-neutral-800">
                    <p className="text-center text-sm font-medium text-neutral-600 dark:text-neutral-400">
                      Want a website like this for your business?
                    </p>
                    {/* <Link href="/contact" className="block">
                      <Button className="h-12 w-full rounded-xl bg-neutral-900 font-bold text-white transition-all hover:scale-[1.02] active:scale-[0.98] dark:bg-white dark:text-black">
                        I'm Interested!
                      </Button>
                    </Link> */}
                    <Button
                      variant="default"
                      className="w-full rounded-xl py-6 text-base dark:border-border-subtle sm:px-12"
                      asChild
                    >
                      <Link href="/contact" aria-label="">
                        I'm Interested!
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  )
}
