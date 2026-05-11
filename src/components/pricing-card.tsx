'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Check } from 'lucide-react'

import { BorderBeam } from '@/components/magicui/border-beam'
import { BlurFade } from '@/components/magicui/blur-fade'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export interface PricingPlan {
  title: string
  description: string
  features: string[]
  price: string
  originalPrice: string
  icon: string
  beam?: boolean
}

interface PricingCardProps {
  plan: PricingPlan
  index: number
}

export function PricingCard({ plan, index }: PricingCardProps) {
  return (
    <div className="flex min-w-64 flex-1 basis-64 items-center justify-center">
      <BlurFade delay={0.25 * index} inView>
        <Card className="relative flex min-h-[29rem] w-full max-w-[20rem] flex-col justify-between rounded-2xl shadow-none dark:border-border-subtle dark:bg-surface-muted sm:max-w-[24rem]">
          <CardHeader>
            <CardTitle className="paragraph-hero mb-0 text-center font-medium leading-relaxed tracking-normal md:mb-0">
              {plan.title}
            </CardTitle>
            <CardDescription className="paragraph-title flex flex-col items-center">
              <div className="relative my-4 size-12">
                <Image
                  src={plan.icon}
                  alt="plan icon"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="mb-3 text-center">{plan.description}</p>
              <ul className="mx-auto mt-2 flex max-w-[12rem] flex-col items-start space-y-1 text-sm font-medium">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" /> {feature}
                  </li>
                ))}
              </ul>
            </CardDescription>
          </CardHeader>
          <CardContent />
          <CardFooter>
            <Button
              asChild
              className="h-12 w-full rounded-xl border text-xl dark:border-border-subtle dark:bg-surface-muted"
            >
              <Link
                href={`/contact?plan=${plan.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <span className="mr-2 text-base text-gray-500 line-through dark:text-gray-400">
                  {plan.originalPrice}
                </span>
                {plan.price}
              </Link>
            </Button>
          </CardFooter>
          {plan.beam && <BorderBeam duration={8} size={100} />}
        </Card>
      </BlurFade>
    </div>
  )
}
