'use client'

import Image from 'next/image'
import { BlurFade } from '@/components/magicui/blur-fade'
import { Card } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

const studyCases = [
  {
    title: 'Agencies',
    description:
      'High-performance landing pages and portfolios to showcase creative work and capture high-value leads.',
    image: '/assets/items/agency.jpeg',
  },
  {
    title: 'Hotels and Travel',
    description:
      'Immersive visual experiences with integrated booking systems to drive direct reservations and showcase amenities.',
    image: '/assets/items/hotel-travel.jpeg',
  },
  {
    title: 'Cafe & Restaurant',
    description:
      'Appetizing menus, online ordering, and reservation features for customer engagement.',
    image: '/assets/items/cafe-restaurant.jpeg',
  },
  {
    title: 'Lifestyle Brands',
    description:
      'Product-focused platforms with compelling storytelling and conversion-driven calls to action.',
    image: '/assets/items/lifestyle.jpeg',
  },
  {
    title: 'Education',
    description:
      'Course catalogs and student portals designed for engaging online learning.',
    image: '/assets/items/education.jpeg',
  },
  {
    title: 'Technology / Startup',
    description:
      'Scalable SaaS platforms and product landing pages engineered to communicate innovation and accelerate user growth.',
    image: '/assets/items/technology.jpeg',
  },
  {
    title: 'Healthcare & Wellness',
    description:
      'Patient-centric digital experiences for clinics and health-tech brands, focused on trust, accessibility, and clear communication.',
    image: '/assets/items/healthcare.jpeg',
  },
  {
    title: 'Finance & Business',
    description:
      'Strategic corporate websites for financial services and consultants that project authority and professional excellence.',
    image: '/assets/items/finance.jpeg',
  },
  {
    title: 'Real Estate',
    description:
      'Dynamic property showcases and realtor platforms with high-converting layouts and interactive listing features.',
    image: '/assets/items/real-estate.jpeg',
  },
  {
    title: 'Eco / Sustainability',
    description:
      'Impact-focused websites for green initiatives and sustainable brands that combine visual storytelling with transparent mission values.',
    image: '/assets/items/eco.jpeg',
  },
  {
    title: 'Many More',
    description:
      'Custom solutions for retail, manufacturing, logistics, and any other industry needing a competitive digital edge.',
    image: '/assets/items/others.jpeg',
  },
]

export default function StudyCasesSection() {
  return (
    <div className="section-wrapper text-center">
      <BlurFade delay={0.5} inView>
        <h3 className="section-title">Study Cases</h3>
        <p className="section-subtitle">
          Discover different types of landing page and company profile website
          cases, from corporate businesses to modern startups and local brands.
        </p>
      </BlurFade>
      <BlurFade delay={0.5} inView>
        <div className="relative mx-auto w-full">
          <Carousel
            opts={{
              align: (viewSize) => viewSize * 0.08,
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 sm:-ml-6 md:-ml-8">
              {studyCases.map((studyCase, idx) => (
                <CarouselItem
                  key={idx}
                  className="basis-[85%] pl-4 sm:basis-[40%] lg:basis-[30%]"
                >
                  <Card className="relative mx-auto flex aspect-[4/5] w-full flex-col justify-end overflow-hidden rounded-2xl border-none shadow-none">
                    <Image
                      src={studyCase.image}
                      alt={studyCase.title}
                      fill
                      className="pointer-events-none select-none object-cover"
                      sizes="(max-width: 640px) 85vw, (max-width: 1024px) 40vw, 30vw"
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      draggable={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                    <div className="relative z-10 flex select-none flex-col p-6 text-left text-white">
                      <h4 className="paragraph-hero text-neutral-200">
                        {studyCase.title}
                      </h4>
                      <p className="paragraph-default text-neutral-300">
                        {studyCase.description}
                      </p>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* <div className="absolute -bottom-16 left-1/2 flex -translate-x-1/2 gap-4 lg:static lg:contents">
            <CarouselPrevious className="static h-12 w-12 translate-y-0 border-white/20 bg-black/50 text-white hover:bg-black/70 lg:absolute lg:-left-4 lg:top-1/2 lg:-translate-y-1/2" />
            <CarouselNext className="static h-12 w-12 translate-y-0 border-white/20 bg-black/50 text-white hover:bg-black/70 lg:absolute lg:-right-4 lg:top-1/2 lg:-translate-y-1/2" />
          </div> */}
          </Carousel>
        </div>
      </BlurFade>
    </div>
  )
}
