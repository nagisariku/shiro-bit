import React from 'react'
import { BlurFade } from '../magicui/blur-fade'

export default function CTASection() {
  return (
    <section className="section-wrapper overflow-hidden text-center">
      <BlurFade delay={0.25} inView>
        <div className="mb-16 aspect-video w-full overflow-hidden rounded-3xl bg-surface-muted">
          <div className="flex h-full w-full items-center justify-center text-neutral-400 dark:text-neutral-600">
            <span className="text-sm font-medium">
              Video/Image Placeholder (16:9)
            </span>
          </div>
        </div>
      </BlurFade>
    </section>
  )
}
