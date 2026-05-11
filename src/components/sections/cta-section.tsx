'use client'

import React from 'react'
import { BlurFade } from '../magicui/blur-fade'
import { Button } from '../ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="section-wrapper overflow-hidden">
      <BlurFade delay={0.25} inView>
        <div className="flex w-full flex-col items-center justify-center rounded-2xl border border-border-subtle bg-surface-base px-6 py-20 text-center dark:bg-surface-elevated sm:py-32">
          <h2 className="mb-8 text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Tell us your <span className="text-brand">business</span>
          </h2>
          <p className="paragraph-default mb-10 max-w-[32rem]">
            Ready to transform your digital identity? Share your vision with us
            and let's build something extraordinary together.
          </p>
          <Button
            size="lg"
            className="group h-12 rounded-xl px-8 text-lg sm:h-14 sm:px-10 sm:text-xl"
            asChild
          >
            <Link href="/contact" className="flex items-center gap-2">
              Get Started
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </BlurFade>
    </section>
  )
}
