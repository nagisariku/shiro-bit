'use client'

import React from 'react'
import { BlurFade } from '@/components/magicui/blur-fade'
import Timeline from '@/components/timeline'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function ProcessSection() {
  return (
    <div className="section-wrapper">
      <div
        id="process"
        className="space-y-6 border-b border-t py-16 text-center dark:border-border-subtle md:flex md:gap-6"
      >
        <div className="mb-8 flex flex-1 flex-col items-center justify-center md:mb-0">
          <BlurFade delay={0.25} inView>
            <h2 className="section-title">How's The Process?</h2>
          </BlurFade>
          <BlurFade delay={0.25 * 2} inView>
            <p className="section-subtitle">
              It's just easy steps and we're here to guide you every step of the
              way.
              {/* <span>
                We also provide the dashboard for you to monitor the progress!
              </span> */}
            </p>
          </BlurFade>
          <BlurFade delay={0.25 * 3} inView>
            <Button
              variant="outline"
              className="mb-12 rounded-xl px-8 py-5 text-sm dark:border-border-subtle dark:bg-surface-muted md:py-6 md:text-lg"
              asChild
            >
              <Link href="/process" aria-label="Learn More about our process">
                Learn More
              </Link>
            </Button>
          </BlurFade>
        </div>

        <div className="flex-1">
          <Timeline />
        </div>
      </div>
      <div id="pricing" className=""></div>
    </div>
  )
}
