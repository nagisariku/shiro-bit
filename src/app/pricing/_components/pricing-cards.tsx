'use client'

import Image from 'next/image'
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

import { plans, createWhatsAppUrl } from '../constants'

export function PricingCards() {
  return (
    <div className="mx-auto flex max-w-screen-lg flex-wrap gap-4">
      {plans.map((plan, idx) => (
        <div
          key={plan.title}
          className="flex min-w-64 flex-1 basis-64 items-center justify-center"
        >
          <BlurFade delay={0.25 + idx * 0.15} inView>
            <Card className="relative flex min-h-[29rem] w-full max-w-[20rem] flex-col justify-between rounded-2xl shadow-none dark:border-dark-neutral dark:bg-neutral-900 sm:max-w-[24rem]">
              <CardHeader className="text-center">
                <CardTitle className="text-center text-2xl">{plan.title}</CardTitle>
                <CardDescription className="flex flex-col items-center text-center">
                  <div className="relative my-4 size-12">
                    <Image
                      src={plan.icon}
                      alt={`${plan.title} plan icon`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="mb-3">{plan.description}</p>
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
                  className="h-12 w-full rounded-xl border text-xl dark:border-dark-neutral dark:bg-neutral-900"
                >
                  <a
                    href={createWhatsAppUrl(plan.title, plan.price)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="mr-2 text-base text-gray-500 line-through dark:text-gray-400">
                      {plan.originalPrice}
                    </span>
                    {plan.price}
                  </a>
                </Button>
              </CardFooter>
              {plan.beam && <BorderBeam duration={8} size={100} colorFrom="#22c55e" colorTo="#16a34a" />}
            </Card>
          </BlurFade>
        </div>
      ))}
    </div>
  )
}
