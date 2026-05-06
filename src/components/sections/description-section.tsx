'use client'

import { Button } from '@/components/ui/button'
import { Target, Code2, HeartHandshake } from 'lucide-react'

export default function DescriptionSection() {
  return (
    <div className="mx-auto mb-12 max-w-screen-xl px-2 py-8 sm:px-4">
      <div className="flex flex-col gap-8 rounded-3xl p-0 dark:border-border-subtle md:border md:p-8 md:dark:bg-surface-muted lg:flex-row">
        <div className="order-2 grid min-h-[32rem] w-full grid-cols-2 md:aspect-[4/3] lg:order-2">
          {/* Left column: Align Your Business Needs + Full Support */}
          <div className="row-span-2 flex flex-col border-r bg-surface-base dark:border-border-subtle dark:bg-surface-elevated md:bg-surface-base md:dark:border-border-subtle md:dark:bg-surface-muted">
            <div className="flex flex-1 flex-col justify-end p-4 md:p-6">
              <div className="mb-3 flex justify-end">
                <Target className="size-6 text-neutral-500 md:size-7" />
              </div>
              <h3 className="mb-2 text-end text-lg font-medium md:mb-3 md:text-2xl">
                Align Your Business Needs
              </h3>
              <p className="text-end text-sm text-neutral-800 dark:text-neutral-100">
                We go beyond the surface, understanding your goals, audience,
                and vision to craft a digital presence that truly elevates your
                company.
              </p>
            </div>
            <div className="flex-1 border-t p-4 dark:border-border-subtle md:p-6 md:pt-6">
              <div className="mb-3 flex justify-end">
                <HeartHandshake className="size-6 text-neutral-500 md:size-7" />
              </div>
              <h3 className="mb-2 text-end text-lg font-medium md:mb-3 md:text-2xl">
                Full Support
              </h3>
              <p className="text-end text-sm text-neutral-800 dark:text-neutral-100">
                From the conceptualization to post-launch care, maintenance,
                revisions, and guidance included. We're not just a vendor, we're
                your long-term partner.
              </p>
            </div>
          </div>

          {/* Right column: Quality Development */}
          <div className="row-span-2 flex flex-col justify-center bg-surface-base p-4 dark:bg-surface-elevated md:bg-surface-base md:p-6 md:dark:bg-surface-muted">
            <div className="mb-4">
              <Code2 className="size-8 text-neutral-500 md:size-10" />
            </div>
            <h3 className="mb-2 text-lg font-medium md:mb-3 md:text-2xl">
              Quality Development
            </h3>
            <p className="text-sm text-neutral-800 dark:text-neutral-100">
              Responsive, pixel-precise, and built to perform. Every line of
              code is clean, optimized, and held to industry standards, so your
              site loads fast and scales effortlessly.
            </p>
          </div>

          {/* Learn More Button */}
          <div className="col-span-2 mt-0 flex justify-center">
            <Button
              variant="outline"
              className="w-full max-w-xs rounded-xl py-6 text-lg dark:border-border-subtle sm:w-auto sm:px-12"
            >
              Learn More
            </Button>
          </div>
        </div>
        <div className="order-1 mt-8 flex w-full flex-col justify-center text-center text-3xl font-medium dark:text-neutral-400 md:text-4xl lg:order-1 lg:mt-0 lg:max-w-[32rem]">
          <p>
            Start{' '}
            <span className="text-brand">
              digitalizing
            </span>{' '}
            today
          </p>
        </div>
      </div>
    </div>
  )
}
