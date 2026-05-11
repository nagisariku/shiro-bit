'use client'

import { Button } from '@/components/ui/button'
import { RainbowButton } from '@/components/magicui/rainbow-button'
import { AnimatedGradientText } from '@/components/magicui/animated-gradient-text'
import { TextAnimate } from '@/components/magicui/text-animate'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <div className="mx-auto mb-8 flex min-h-[72vh] max-w-screen-xl flex-col items-center justify-center px-6 py-8 text-center">
      <div className="group relative mx-auto mb-6 flex w-fit cursor-pointer items-center justify-center rounded-full px-3 py-1 text-sm duration-500 md:w-[16rem] md:px-4 md:py-1.5 md:text-lg">
        <span
          className={cn(
            'from-accent-1/50 via-accent-2/50 to-accent-1/50 absolute inset-0 animate-gradient rounded-full bg-gradient-to-r bg-[length:300%_100%] p-[1px]',
          )}
          style={{
            WebkitMask:
              'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'destination-out',
            maskComposite: 'subtract',
          }}
        />
        ✨ <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
        <AnimatedGradientText className="text-xs font-medium md:text-sm">
          Digital Ascent
        </AnimatedGradientText>
        <ChevronRight className="ml-1 size-3 stroke-neutral-500 transition-transform duration-300 group-hover:translate-x-0.5 md:size-4" />
      </div>
      <TextAnimate
        as="h1"
        className="mb-8 text-3xl font-medium sm:px-4 sm:text-4xl md:text-5xl"
        animation="slideUp"
        by="word"
        once
      >
        We design and build <span className="text-brand">premium website</span>{' '}
        to leverage your business{' '}
        <span className="text-brand">digital presence</span>
      </TextAnimate>
      <div className="mb-24 text-neutral-800 dark:text-neutral-100">
        <ul className="flex flex-wrap items-center justify-center gap-2 text-sm md:flex-row md:gap-3 md:text-base">
          <li>#Website Development</li>
          <li>#Business Analysis</li>
          <li>#UI/UX</li>
          <li>#SEO</li>
        </ul>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <RainbowButton
          className="text-sm text-white dark:text-black md:py-6 md:text-lg"
          onClick={() =>
            document
              .getElementById('process')
              ?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          Let’s Get Started
        </RainbowButton>
        <Button
          variant="outline"
          className="rounded-xl px-8 py-5 text-sm md:py-6 md:text-lg"
          asChild
        >
          <Link href="/portfolio">Case Studies</Link>
        </Button>
      </div>
    </div>
  )
}
