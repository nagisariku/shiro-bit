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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

const plans = [
  {
    title: 'Starter',
    description: 'Suitable for a personal website with limited content.',
    features: ['Single Page', 'Basic SEO', '1x Revision', '7 Days Support'],
    price: '$149.99',
    originalPrice: '$299.99',

    icon: '/assets/icons/plant.png',
  },
  {
    title: 'Professional',
    description:
      'Ideal for a company profile introducing its business and products.',
    features: [
      'Up to 3 pages',
      'Advanced SEO',
      '3x Revision',
      '30 Days Support',
    ],
    price: '$349.99',
    originalPrice: '$699.99',
    beam: true,
    icon: '/assets/icons/building.png',
  },
  {
    title: 'High Conversion',
    description: 'Bring your dream website to life with exciting features.',
    features: ['5+ pages', 'Advanced SEO', '7x Revisions', '90 Days Support'],
    price: '$799.99',
    originalPrice: '$1,599.99',
    icon: '/assets/icons/diamond.png',
  },
]

const studyCases = [
  {
    title: 'Agencies',
    description:
      'High-performance landing pages and portfolios to showcase creative work and capture high-value leads.',
    image: '/assets/items/InstantPlanCollection/1.png',
  },
  {
    title: 'Hotels and Travel',
    description:
      'Immersive visual experiences with integrated booking systems to drive direct reservations and showcase amenities.',
    image: '/assets/items/InstantPlanCollection/2.png',
  },
  {
    title: 'Cafe & Restaurant',
    description:
      'Appetizing menus, online ordering integration, and reservation features wrapped in a mouth-watering design.',
    image: '/assets/items/InstantPlanCollection/3.png',
  },
  {
    title: 'Lifestyle Brands',
    description:
      'E-commerce ready platforms with strong brand storytelling and seamless shopping experiences.',
    image: '/assets/items/InstantPlanCollection/4.png',
  },
  {
    title: 'Education',
    description:
      'LMS integrations, course catalogs, and student portals designed for engaging online learning.',
    image: '/assets/items/InstantPlanCollection/5.png',
  },
  {
    title: 'Many More',
    description:
      'Custom solutions for real estate, healthcare, SaaS, and any other industry needing a competitive edge.',
    image: '/assets/items/InstantPlanCollection/6.png',
  },
]

const createWhatsAppUrl = (planTitle: string, planPrice: string) => {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
  const templateMessage = `Halo, saya tertarik dengan paket ${planTitle} seharga ${planPrice}. Bisakah Anda memberikan informasi lebih lanjut?`
  const encodedMessage = encodeURIComponent(templateMessage)
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`
}

export default function PricingSection() {
  return (
    <div className="section-wrapper text-center">
      <BlurFade delay={0.25} inView>
        <h2 className="section-title">Choose Your Plan!</h2>
      </BlurFade>
      <BlurFade delay={0.25} inView>
        <p className="section-subtitle">
          Already have a vision for your website? We'll bring it to life with
          precision and creativity.
        </p>
      </BlurFade>
      <div className="mx-auto mb-8 flex max-w-screen-lg flex-wrap gap-4">
        {plans.map((plan, idx) => (
          <div
            key={plan.title}
            className="flex min-w-64 flex-1 basis-64 items-center justify-center"
          >
            <BlurFade delay={0.25 * idx} inView>
              <Card className="relative flex min-h-[29rem] w-full max-w-[20rem] flex-col justify-between rounded-2xl shadow-none dark:border-border-subtle dark:bg-surface-muted sm:max-w-[24rem]">
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.title}</CardTitle>
                  <CardDescription className="flex flex-col items-center">
                    <div className="relative my-4 size-12">
                      <Image
                        src={plan.icon}
                        alt="plan icon"
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
                    className="h-12 w-full rounded-xl border text-xl dark:border-border-subtle dark:bg-surface-muted"
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
                {plan.beam && <BorderBeam duration={8} size={100} />}
              </Card>
            </BlurFade>
          </div>
        ))}
      </div>
      <p className="mb-12 text-sm text-neutral-500 dark:text-neutral-400">
        For a detailed comparison of our plans,{' '}
        <Link
          href="/pricing"
          className="font-semibold text-neutral-900 underline underline-offset-4 hover:text-neutral-700 dark:text-neutral-100 dark:hover:text-neutral-300"
        >
          click here
        </Link>
      </p>
      <BlurFade delay={0.5} inView>
        <h3 className="section-title">Study Cases</h3>
        <p className="section-subtitle">
          Explore our proven track record across various industries. See how we
          tailor digital solutions to unique business needs.
        </p>
      </BlurFade>
      <div className="mx-auto w-full max-w-screen-lg px-4 sm:px-6">
        <Carousel
          opts={{
            align: 'start',
            loop: false,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {studyCases.map((studyCase, idx) => (
              <CarouselItem
                key={idx}
                className="basis-[85%] pl-4 sm:basis-[60%] md:basis-[45%]"
              >
                <BlurFade delay={0.25 + idx * 0.05} inView className="h-full">
                  <Card className="relative mx-auto flex h-[28rem] w-full flex-col justify-end overflow-hidden rounded-2xl border-none shadow-none">
                    <Image
                      src={studyCase.image}
                      alt={studyCase.title}
                      fill
                      className="object-cover"
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                    <div className="relative z-10 flex flex-col p-6 text-left text-white">
                      <h4 className="mb-2 text-xl font-bold">
                        {studyCase.title}
                      </h4>
                      <p className="text-sm text-neutral-200">
                        {studyCase.description}
                      </p>
                    </div>
                  </Card>
                </BlurFade>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-12 hidden md:flex" />
          <CarouselNext className="-right-12 hidden md:flex" />
        </Carousel>
      </div>
    </div>
  )
}
