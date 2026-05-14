'use client'

import { Button } from '@/components/ui/button'
import { Target, Code2, HeartHandshake } from 'lucide-react'
import Link from 'next/link'

export default function DescriptionSection() {
  return (
    <div className="section-wrapper px-0">
      <div className="flex flex-col gap-8 rounded-2xl p-0 dark:border-border-subtle md:border md:p-8 md:dark:bg-surface-muted lg:flex-row">
        <div className="order-2 grid w-full grid-cols-2 md:aspect-[4/3] lg:order-2">
          {/* Left column: Align Your Business Needs + Full Support */}
          <div className="row-span-2 flex flex-col border-r bg-surface-base dark:border-border-subtle dark:bg-surface-elevated md:bg-surface-base md:dark:border-border-subtle md:dark:bg-surface-muted">
            <div className="flex flex-1 flex-col p-4 md:p-6">
              <div className="mb-3 flex justify-end">
                <Target className="icon-style" />
              </div>
              <h2 className="paragraph-hero text-end">
                Align Your Business Needs
              </h2>
              <p className="paragraph-default text-end">
                We understanding your goals, audience, and vision to craft a
                digital presence that truly elevates your company.
              </p>
            </div>
            <div className="flex flex-1 flex-col border-t p-4 dark:border-border-subtle md:p-6 md:pt-6">
              <div className="mb-3 flex justify-end">
                <HeartHandshake className="icon-style" />
              </div>
              <h2 className="paragraph-hero text-end">Full Support</h2>
              <p className="paragraph-default text-end">
                From the conceptualization to post-launch care. We're not just a
                vendor, we're your long-term partner.
              </p>
            </div>
          </div>

          {/* Right column: Quality Development */}
          <div className="row-span-2 my-32 flex flex-col justify-center bg-surface-base p-4 dark:bg-surface-elevated md:my-0 md:bg-surface-base md:p-6 md:dark:bg-surface-muted">
            <div className="mb-4">
              <Code2 className="icon-style-large" />
            </div>
            <h3 className="paragraph-hero">Quality Development</h3>
            <p className="paragraph-default">
              Every line of code is clean, optimized, and held to industry
              standards. Everything fast and scalable.
            </p>
          </div>

          {/* Learn More Button */}
          <div className="col-span-2 mt-0 flex justify-center">
            <Button
              variant="outline"
              className="rounded-xl px-12 py-6 text-lg dark:border-border-subtle"
              asChild
            >
              <Link href="/home#our-services" aria-label="Explore our services">
                Explore Our Services
              </Link>
            </Button>
          </div>
        </div>
        <div className="section-title order-1 mt-8 flex w-full flex-col justify-center text-center lg:order-1 lg:mt-0 lg:max-w-[24rem]">
          <p>
            Why <span className="text-brand">ShiroBIT</span> ?
          </p>
        </div>
      </div>
    </div>
  )
}
