'use client'

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { BlurFade } from '@/components/magicui/blur-fade'
import { type Step } from '../types'

export function TimelineStep({
  step,
  isLast,
  delay,
}: {
  step: Step
  isLast: boolean
  delay: number
}) {
  const [open, setOpen] = useState(true)

  return (
    <BlurFade delay={delay} inView>
      {/* ── Mobile layout (no timeline, no cards, no numbers) ── */}
      <div className="block md:hidden">
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex items-center gap-3 py-2 text-left"
        >
          <span className="paragraph-hero">{step.title}</span>
          <ChevronDown
            className={cn(
              'h-5 w-5 shrink-0 text-neutral-400 transition-transform duration-200',
              open && 'rotate-180',
            )}
          />
        </button>

        <div
          className={cn(
            'grid transition-all duration-300',
            open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
          )}
        >
          <div className="overflow-hidden">
            <div className="space-y-4 pt-2">
              <p className="paragraph-default">{step.description}</p>
              {step.content}
            </div>
          </div>
        </div>
      </div>

      {/* ── Desktop layout (with timeline) ── */}
      <div
        id={step.id}
        className="relative hidden scroll-mt-24 md:flex md:gap-8"
      >
        {/* Left: number + connector line */}
        <div className="flex flex-col items-center">
          <div
            className={cn(
              'relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-mono text-sm font-bold',
              step.isHighlighted
                ? 'text-primary-foreground bg-primary shadow-md shadow-primary/20'
                : 'border-2 border-neutral-200 bg-white text-primary dark:border-neutral-800 dark:bg-neutral-900/50',
            )}
          >
            {step.number}
          </div>
          {/* Connector — hidden on last step */}
          {!isLast && (
            <div className="mt-2 w-[2px] flex-1 bg-neutral-100 dark:bg-neutral-800" />
          )}
        </div>

        {/* Right: collapsible content */}
        <div className={cn('flex-1', !isLast && 'pb-12')}>
          <button
            onClick={() => setOpen((v) => !v)}
            className="mb-1 inline-flex items-center gap-2 text-left"
          >
            <h3 className="paragraph-hero">{step.title}</h3>
            <ChevronDown
              className={cn(
                'h-5 w-5 shrink-0 text-neutral-400 transition-transform duration-200',
                open && 'rotate-180',
              )}
            />
          </button>

          <p className="paragraph-default mb-4">{step.description}</p>

          <div
            className={cn(
              'grid transition-all duration-300',
              open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
            )}
          >
            <div className="overflow-hidden">
              <div className="space-y-4 pb-1">{step.content}</div>
            </div>
          </div>
        </div>
      </div>
    </BlurFade>
  )
}
