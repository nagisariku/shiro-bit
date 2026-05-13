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
          <BlurFade delay={0.25 * 3} inView className="hidden md:block">
            <Button
              variant="outline"
              className="rounded-xl px-12 py-6 text-lg dark:border-border-subtle"
              asChild
            >
              <Link href="/process" aria-label="Explore our process">
                Explore Our Process
              </Link>
            </Button>
          </BlurFade>
        </div>

        <div className="flex-1">
          <Timeline />
          <BlurFade
            delay={0.25 * 3}
            inView
            className="mt-8 flex justify-center md:hidden"
          >
            <Button
              variant="outline"
              className="rounded-xl px-12 py-6 text-lg dark:border-border-subtle"
              asChild
            >
              <Link href="/process" aria-label="Explore our process">
                Explore Our Process
              </Link>
            </Button>
          </BlurFade>
        </div>
      </div>
      <div id="pricing" className=""></div>
    </div>
  )
}
