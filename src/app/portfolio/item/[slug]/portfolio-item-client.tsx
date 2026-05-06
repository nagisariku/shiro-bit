'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { BlurFade } from '@/components/magicui/blur-fade'
import { cn } from '@/lib/utils'
import { FaArrowLeft } from 'react-icons/fa6'
import { WebTemplateType } from '@/types'
import { Check, Eye, FileText, ShoppingCart, ChevronDown } from 'lucide-react'

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
        <div className="mb-6 w-full max-w-screen-lg">
          {/* Category badge */}
          <span className="mb-3 inline-block rounded-full border border-neutral-200 px-3 py-1 text-sm text-neutral-500 dark:border-neutral-700 dark:text-neutral-400">
            {webData.category}
          </span>

          {/* Title */}
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            {webData.title}
          </h1>

          {/* Subtitle */}
          {webData.subtitle && (
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              {webData.subtitle}
            </p>
          )}
        </div>

        {/* Thumbnail */}
        <div className="mb-10 w-full max-w-screen-lg">
          <div className="relative aspect-video overflow-hidden rounded-2xl bg-neutral-100 dark:bg-zinc-800">
            <Image
              src={webData.thumbnail}
              alt={webData.title || 'Template preview'}
              fill
              priority
              className="object-cover object-top"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
            />
          </div>
        </div>

        {/* Two-column body */}
        <div className="w-full max-w-screen-lg">
          <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
            {/* ── LEFT COLUMN ── */}
            <div className="flex flex-col gap-12 lg:flex-[5]">
              {/* About */}
              <section>
                <div className="mb-4 flex items-center gap-3">
                  <FileText className="size-5 text-brand" />
                  <h2 className="text-2xl font-bold">About</h2>
                </div>
                <div className="prose prose-neutral dark:prose-invert max-w-none">
                  <p className="whitespace-pre-wrap leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {webData.Description}
                  </p>
                </div>
              </section>

              {/* Key Features */}
              <section>
                <div className="mb-6 flex items-center gap-3">
                  <Check className="size-5 text-brand" />
                  <h2 className="text-2xl font-bold">Key Features</h2>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {(webData.features ?? []).map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 rounded-xl border border-neutral-100 bg-neutral-50/50 p-4 dark:border-neutral-800 dark:bg-zinc-900/50"
                    >
                      <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                        <Check className="size-4" />
                      </div>
                      <span className="text-neutral-700 dark:text-neutral-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Screenshots Gallery */}
              <section>
                <div className="mb-6 flex items-center gap-3">
                  <Eye className="size-5 text-brand" />
                  <h2 className="text-2xl font-bold">Gallery</h2>
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
                      onClick={() => setScreenshotsExpanded(!screenshotsExpanded)}
                    >
                      {screenshotsExpanded ? 'Show Less' : 'Show More Screenshots'}
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
            <aside className="lg:flex-[2]">
              <div className="sticky top-24 space-y-6">
                <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-zinc-950">
                  <div className="mb-6">
                    <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                      Starting at
                    </span>
                    <div className="mt-1 text-4xl font-bold text-brand">
                      {webData.price}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button
                      className="h-12 w-full bg-brand text-lg font-bold text-white hover:bg-brand/90"
                      asChild
                    >
                      <Link
                        href={`https://wa.me/6281234567890?text=Halo Riku Store, saya tertarik dengan template ${webData.title}`}
                        target="_blank"
                      >
                        <ShoppingCart className="mr-2 size-5" />
                        I'm Interested
                      </Link>
                    </Button>

                    {webData.url && (
                      <Button
                        variant="outline"
                        className="h-12 w-full border-neutral-200 text-lg font-medium dark:border-neutral-800"
                        asChild
                      >
                        <Link href={webData.url} target="_blank">
                          <Eye className="mr-2 size-5" />
                          Live Preview
                        </Link>
                      </Button>
                    )}
                  </div>

                  <p className="mt-6 text-center text-xs text-neutral-500 dark:text-neutral-400">
                    Includes setup, basic customization, and 1-year maintenance
                  </p>
                </div>

                {/* Categories/Tags */}
                <div className="rounded-2xl border border-neutral-200 bg-neutral-50/50 p-6 dark:border-neutral-800 dark:bg-zinc-900/50">
                  <h3 className="mb-4 font-bold">Category</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-lg bg-white px-3 py-1.5 text-sm font-medium shadow-sm dark:bg-zinc-800">
                      {webData.category}
                    </span>
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
