import React from 'react'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa6'
import { BlurFade } from '@/components/magicui/blur-fade'

import { Metadata } from 'next'
import { TimelineStep } from './_components/timeline-step'
import { steps } from './constants'

export const metadata: Metadata = {
  title: 'Our Process | How We Build Your Website',
  description:
    'Learn about our step-by-step development process, from discovery and design to development and launch. Transparency and quality at every stage.',
}

export default function ProcessPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      {/* Background patterns */}
      {/* <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.03] dark:opacity-[0.05]">
        <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px] dark:bg-[radial-gradient(#fff_1px,transparent_1px)]" />
      </div> */}

      <div className="container relative z-10 mx-auto flex max-w-screen-xl flex-col items-start justify-start px-6 py-0 lg:p-12">
        <Link href="/home" className="group back-link">
          <FaArrowLeft className="transition-transform group-hover:-translate-x-1" />
          <span className="font-medium">Back to Home</span>
        </Link>

        <section
          id="process-faqs"
          className="mx-auto mb-24 max-w-screen-lg scroll-mt-24"
        >
          <div className="text-center">
            <BlurFade delay={0.2}>
              <div className="page-badge bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                The Roadmap
              </div>
              <h1 className="page-title">
                How We Work
              </h1>
              <p className="page-subtitle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                est, quibusdam corporis distinctio id repellat esse excepturi
                minus eveniet culpa.
              </p>
            </BlurFade>
          </div>

          {/* Mobile: stacked cards */}
          <div className="flex flex-col gap-6 md:hidden">
            {steps.map((step, i) => (
              <TimelineStep
                key={step.id}
                step={step}
                isLast={i === steps.length - 1}
                delay={0.3 + i * 0.1}
              />
            ))}
          </div>

          {/* Desktop: timeline */}
          <div className="mt-24 hidden md:flex md:flex-col">
            {steps.map((step, i) => (
              <TimelineStep
                key={step.id}
                step={step}
                isLast={i === steps.length - 1}
                delay={0.3 + i * 0.1}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
