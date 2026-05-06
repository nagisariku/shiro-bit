import React from 'react'
import Link from 'next/link'
import {
  FaArrowLeft,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaXTwitter,
} from 'react-icons/fa6'
import TableOfContents from '@/components/toc'
import { BlurFade } from '@/components/magicui/blur-fade'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

const tocItems = [
  { id: 'background-story', text: 'Background Story', level: 1 },
  { id: 'introduction', text: 'Introduction', level: 2 },
  { id: 'our-services', text: 'Our Services', level: 2 },
  { id: 'more-than-website', text: 'More Than Website', level: 2 },
  { id: 'our-clients', text: 'Our Clients', level: 2 },
  { id: 'why-choose-us', text: 'Why Choose Us?', level: 1 },
  { id: 'strategy-driven', text: 'Strategy-Driven', level: 2 },
  { id: 'premium-engineering', text: 'Premium Engineering', level: 2 },
  { id: 'full-support', text: 'True Partnership', level: 2 },
  { id: 'about-owner', text: 'About Owner', level: 1 },
]

export default function HomePage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <div className="container relative z-10 mx-auto flex max-w-screen-xl flex-col items-start justify-start px-6 py-0 lg:p-12">
        <Link
          href="../"
          className="group mb-12 inline-flex items-center gap-2 text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
        >
          <FaArrowLeft className="transition-transform group-hover:-translate-x-1" />
          <span className="font-medium">Back to Home</span>
        </Link>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr,280px]">
          {/* Main Content Column */}
          <div className="flex flex-col gap-24 font-sans">
            {/* Background Story Section */}
            <section id="background-story" className="scroll-mt-24">
              <BlurFade delay={0.2} inView>
                <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                  The Genesis
                </div>
                <h1 className="mb-8 text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 md:text-5xl">
                  Background Story
                </h1>
                <div className="mb-16 aspect-video w-full overflow-hidden rounded-3xl bg-neutral-100 dark:bg-neutral-900">
                  <div className="flex h-full w-full items-center justify-center text-neutral-400 dark:text-neutral-600">
                    <span className="text-sm font-medium">
                      Video/Image Placeholder (16:9)
                    </span>
                  </div>
                </div>
              </BlurFade>

              <div id="introduction" className="mb-16 scroll-mt-24">
                <BlurFade delay={0.3} inView>
                  <h2 className="mb-6 text-2xl font-semibold text-neutral-800 dark:text-neutral-200">
                    Introduction
                  </h2>
                  <div className="prose prose-neutral dark:prose-invert max-w-none space-y-4 leading-relaxed text-neutral-600 dark:text-neutral-400">
                    <p>
                      In today’s digital-first world, a strong online presence
                      is essential. Your website is more than just a place to
                      exist, it shapes how your business is seen, trusted, and
                      chosen. Yet, many businesses still rely on websites that
                      sit online without delivering real value.
                    </p>
                    <p>
                      At{' '}
                      <span className="font-semibold text-primary">
                        ShiroBIT
                      </span>
                      , we help small businesses and growing brands turn ideas
                      into high-performing digital experiences. We design and
                      build websites that communicate your value, attract the
                      right audience, and support real business growth.
                    </p>
                  </div>
                </BlurFade>
              </div>

              <div id="our-services" className="mb-16 scroll-mt-24">
                <BlurFade delay={0.4} inView>
                  <div className="mb-6 flex flex-wrap items-center gap-4">
                    <h2 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-200">
                      Our Services
                    </h2>
                    <div className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white/60 px-3 py-1 text-xs font-medium text-neutral-600 shadow-sm backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-900/60 dark:text-neutral-400">
                      <span className="flex h-2 w-2 animate-pulse rounded-full bg-green-500"></span>
                      Operating Globally 🌍
                    </div>
                  </div>

                  <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
                    {[
                      {
                        title: 'Custom Website Development',
                        desc: 'Built from scratch, tailored to your business goals and brand identity.',
                        icon: '⌘',
                      },
                      {
                        title: 'Website Redesign & Optimization',
                        desc: 'Transforming underperforming sites into conversion engines.',
                        icon: '⚡',
                      },
                      {
                        title: 'Ready-to-Use Website Templates',
                        desc: 'Premium, customizable solutions for businesses ready to launch fast.',
                        icon: '✨',
                      },
                    ].map((service, i) => (
                      <div
                        key={i}
                        className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white/50 p-6 backdrop-blur-sm transition-colors hover:border-primary/20 hover:bg-primary/5 dark:border-neutral-800 dark:bg-neutral-900/50 dark:hover:border-primary/20 dark:hover:bg-primary/10"
                      >
                        <div className="absolute -right-4 -top-4 text-8xl opacity-[0.03] transition-transform group-hover:scale-110 group-hover:opacity-[0.05] dark:opacity-[0.05] dark:group-hover:opacity-[0.08]">
                          {service.icon}
                        </div>
                        <h3 className="relative z-10 mb-3 font-semibold text-neutral-800 dark:text-neutral-200">
                          {service.title}
                        </h3>
                        <p className="relative z-10 text-sm text-neutral-600 dark:text-neutral-400">
                          {service.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </BlurFade>
              </div>

              <div id="more-than-website" className="mb-16 scroll-mt-24">
                <BlurFade delay={0.5} inView>
                  <h2 className="mb-6 text-2xl font-semibold text-neutral-800 dark:text-neutral-200">
                    More Than Just a Website
                  </h2>
                  <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6 text-neutral-600 dark:text-neutral-400">
                    <p>
                      We don’t simply design visually appealing websites. We
                      build strategic digital platforms that are engineered to
                      help businesses grow, scale, and compete.
                    </p>

                    <blockquote className="rounded-r-2xl border-l-4 border-primary bg-primary/5 p-6 font-medium italic text-neutral-800 shadow-sm dark:text-neutral-200">
                      "Most websites fail not because they look bad, but because
                      they are not built to perform."
                    </blockquote>

                    <p>They might catch the eye, but:</p>

                    <ol className="space-y-3 [counter-reset:step] marker:text-primary">
                      <li className="relative pl-10 [counter-increment:step] before:absolute before:left-0 before:flex before:h-7 before:w-7 before:items-center before:justify-center before:rounded-full before:bg-primary/10 before:text-xs before:font-semibold before:text-primary before:content-[counter(step)]">
                        <strong className="font-semibold text-neutral-800 dark:text-neutral-200">
                          They don't convert visitors into leads:
                        </strong>{' '}
                        Beautiful pages with no clear path to action waste every
                        click you earn.
                      </li>
                      <li className="relative pl-10 [counter-increment:step] before:absolute before:left-0 before:flex before:h-7 before:w-7 before:items-center before:justify-center before:rounded-full before:bg-primary/10 before:text-xs before:font-semibold before:text-primary before:content-[counter(step)]">
                        <strong className="font-semibold text-neutral-800 dark:text-neutral-200">
                          They are not structured to support marketing and
                          traffic growth:
                        </strong>{' '}
                        They lack the structural foundation and SEO integrity
                        required to support and sustain traffic acquisition.
                      </li>
                      <li className="relative pl-10 [counter-increment:step] before:absolute before:left-0 before:flex before:h-7 before:w-7 before:items-center before:justify-center before:rounded-full before:bg-primary/10 before:text-xs before:font-semibold before:text-primary before:content-[counter(step)]">
                        <strong className="font-semibold text-neutral-800 dark:text-neutral-200">
                          They don’t contribute to long-term business success:
                        </strong>{' '}
                        They operate as static digital brochures instead of
                        scalable, long-term growth engines.
                      </li>
                    </ol>

                    {/* <div className="mt-2 inline-block rounded-xl bg-neutral-100 p-4 text-sm font-medium text-neutral-800 dark:bg-neutral-900 dark:text-neutral-200">
                      <span className="font-semibold text-primary">
                        At ShiroBIT, we flip the script.
                      </span>{' '}
                      Every UX decision, every line of code, and every SEO
                      strategy is aligned for client-acquisition systems that
                      work for you 24/7.
                    </div> */}
                  </div>
                </BlurFade>
              </div>

              <div id="our-clients" className="mb-16 scroll-mt-24">
                <BlurFade delay={0.6} inView>
                  <h2 className="mb-6 text-2xl font-semibold text-neutral-800 dark:text-neutral-200">
                    Who's Our Clients?
                  </h2>
                  <div className="grid grid-cols-1 items-center gap-8">
                    <div className="prose prose-neutral dark:prose-invert max-w-none text-neutral-600 dark:text-neutral-400">
                      {/* <p className="font-medium text-neutral-800 dark:text-neutral-300">
                        We work with ambitious small business owners who refuse
                        to settle for average.
                      </p> */}
                      <p>
                        From cafes and restaurants, hotels and travel services,
                        to agencies, education, and lifestyle brands, and many
                        more. Our clients understand that a premium website is
                        one of the smartest investments they can make for
                        sustainable growth.
                      </p>
                      <p>
                        They come to us because they want more than just a
                        pretty design. They want a website that builds trust,
                        generates leads, and supports real business results.
                      </p>
                    </div>

                    <div className="grid aspect-[3/2] w-full grid-cols-2 gap-3">
                      <div className="overflow-hidden rounded-2xl bg-neutral-200 shadow-sm dark:bg-neutral-800">
                        <div className="h-full w-full bg-gradient-to-br from-neutral-300 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900"></div>
                      </div>
                      <div className="overflow-hidden rounded-2xl bg-neutral-200 shadow-sm dark:bg-neutral-800">
                        <div className="h-full w-full bg-gradient-to-br from-primary/10 to-primary/5"></div>
                      </div>
                      <div className="overflow-hidden rounded-2xl bg-neutral-200 shadow-sm dark:bg-neutral-800">
                        <div className="h-full w-full bg-gradient-to-tr from-neutral-200 to-neutral-300 dark:from-neutral-900 dark:to-neutral-800"></div>
                      </div>
                      <Link
                        href="/portfolio"
                        className="group relative block cursor-pointer overflow-hidden rounded-2xl bg-neutral-200 shadow-sm dark:bg-neutral-800"
                      >
                        <div className="absolute inset-0 z-10 bg-neutral-300/50 backdrop-blur-md transition-all duration-300 group-hover:backdrop-blur-sm dark:bg-neutral-800/50" />
                        <div className="absolute inset-0 bg-gradient-to-bl from-neutral-300 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900" />
                        <div className="absolute inset-0 z-20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                          <span className="font-semibold tracking-tight text-neutral-900 drop-shadow-md dark:text-white">
                            All Portfolio &rarr;
                          </span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </BlurFade>
              </div>
            </section>

            {/* Why Choose Us Section */}
            <section
              id="why-choose-us"
              className="scroll-mt-24 border-t border-neutral-200 pt-16 dark:border-neutral-800"
            >
              <BlurFade delay={0.2} inView>
                <div className="mb-4 inline-block rounded-full bg-indigo-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                  Our Edge
                </div>
                <h1 className="mb-6 text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 md:text-5xl">
                  Why Choose Us?
                </h1>
              </BlurFade>

              <div className="flex flex-col gap-20">
                {/* Pillar 1: Strategy-Driven */}
                <div id="strategy-driven" className="scroll-mt-24">
                  <BlurFade delay={0.3} inView>
                    <div className="mb-8">
                      <h2 className="mb-4 text-2xl font-semibold text-neutral-800 dark:text-neutral-200">
                        Engineered for Business Growth
                      </h2>
                      <p className="text-neutral-600 dark:text-neutral-400">
                        A beautiful website that doesn’t generate leads is just
                        an expensive digital painting. We bridge the gap between
                        stunning design and hard business results by starting
                        with strategy, not just aesthetics.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      {[
                        {
                          title: 'Business Analysis & Strategy',
                          desc: 'We study your market, competitors, and goals to map out a website architecture that actually drives sales.',
                          icon: (
                            <svg
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                              />
                            </svg>
                          ),
                        },
                        {
                          title: 'Human-Centric UI/UX Research',
                          desc: "We don't guess what your users want. We design intuitive, frictionless journeys based on logic and user psychology.",
                          icon: (
                            <svg
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                              />
                            </svg>
                          ),
                        },
                        {
                          title: 'Conversion-Focused Copywriting',
                          desc: "Words that sell. We craft messaging that speaks directly to your target audience's pain points and desires.",
                          icon: (
                            <svg
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                              />
                            </svg>
                          ),
                        },
                        {
                          title: 'Built-In SEO Architecture',
                          desc: 'We lay down the technical groundwork so your site is ready to climb search rankings from day one.',
                          icon: (
                            <svg
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                              />
                            </svg>
                          ),
                        },
                      ].map((feature, i) => (
                        <div key={i} className="flex gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                            {feature.icon}
                          </div>
                          <div>
                            <h3 className="mb-1 font-semibold text-neutral-800 dark:text-neutral-200">
                              {feature.title}
                            </h3>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">
                              {feature.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </BlurFade>
                </div>

                {/* Pillar 2: Premium Engineering */}
                <div id="premium-engineering" className="scroll-mt-24">
                  <BlurFade delay={0.4} inView>
                    <div className="mb-8">
                      <h2 className="mb-4 text-2xl font-semibold text-neutral-800 dark:text-neutral-200">
                        Modern, Fast, and Future-Proof
                      </h2>
                      <p className="text-neutral-600 dark:text-neutral-400">
                        Say goodbye to bloated templates and slow loading times.
                        We build bespoke, hand-coded systems designed to look
                        elite today and scale flawlessly tomorrow.
                      </p>
                    </div>
                    <Carousel opts={{ align: 'start' }} className="w-full">
                      <CarouselContent className="-ml-4">
                        {[
                          {
                            title: 'Handmade in Code',
                            desc: 'Every website is built from scratch using real coding. No WordPress, no pre-built systems.',
                            icon: (
                              <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                                />
                              </svg>
                            ),
                            bg: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
                          },
                          {
                            title: 'No AI-Generated',
                            desc: 'We don’t use AI generators or mass-produced outputs. Just original work, built through real thinking.',
                            icon: (
                              <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                />
                              </svg>
                            ),
                            bg: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop',
                          },
                          {
                            title: 'The Latest Technology Stack',
                            desc: 'Built with industry-leading tools like Next.js, React, and Tailwind CSS for maximum speed.',
                            icon: (
                              <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M13 10V3L4 14h7v7l9-11h-7z"
                                />
                              </svg>
                            ),
                            bg: 'https://images.unsplash.com/photo-1627398225058-eb56a8eb390e?q=80&w=2070&auto=format&fit=crop',
                          },
                          {
                            title: 'Pixel-Perfect & Dynamic',
                            desc: 'High-fidelity designs that are fully responsive across all devices with smooth interactions.',
                            icon: (
                              <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                                />
                              </svg>
                            ),
                            bg: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
                          },
                          {
                            title: 'Future-Ready Scalability',
                            desc: 'Our architecture is built to expand seamlessly without starting over as your business grows.',
                            icon: (
                              <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                />
                              </svg>
                            ),
                            bg: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
                          },
                        ].map((feature, i) => (
                          <CarouselItem
                            key={i}
                            className="basis-[85%] pl-4 sm:basis-[60%] md:basis-[45%]"
                          >
                            <div className="group relative flex h-full min-h-[300px] flex-col overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800">
                              {/* Background Image */}
                              <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                style={{
                                  backgroundImage: `url(${feature.bg})`,
                                }}
                              />
                              {/* Gradient Overlay for text legibility */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />

                              {/* Content */}
                              <div className="relative z-10 flex h-full flex-col justify-end p-6 text-white">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white backdrop-blur-sm">
                                  {feature.icon}
                                </div>
                                <h3 className="mb-2 text-xl font-semibold">
                                  {feature.title}
                                </h3>
                                <p className="text-sm leading-relaxed text-neutral-200">
                                  {feature.desc}
                                </p>
                              </div>
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <div className="mt-6 flex items-center justify-end gap-2 pr-4">
                        <CarouselPrevious className="static h-10 w-10 translate-x-0 translate-y-0 border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950" />
                        <CarouselNext className="static h-10 w-10 translate-x-0 translate-y-0 border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950" />
                      </div>
                    </Carousel>
                  </BlurFade>
                </div>

                {/* Pillar 3: True Partnership & Ownership */}
                <div id="full-support" className="scroll-mt-24">
                  <BlurFade delay={0.5} inView>
                    <div className="mb-8">
                      <h2 className="mb-4 text-2xl font-semibold text-neutral-800 dark:text-neutral-200">
                        Complete Ownership & Peace of Mind
                      </h2>
                      <p className="text-neutral-600 dark:text-neutral-400">
                        We don't hold your website hostage. Our relationship
                        doesn't end at the launch button—we provide the safety
                        net and transparency that most agencies avoid.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      {[
                        {
                          title: 'You Own Everything',
                          desc: 'Full source codes and complete documentation are handed over to you. No vendor lock-in, ever.',
                          icon: (
                            <svg
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                              />
                            </svg>
                          ),
                        },
                        {
                          title: 'Comprehensive Onboarding',
                          desc: "We don't just throw you the keys. We walk you through your new system so you know exactly how to use it.",
                          icon: (
                            <svg
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                              />
                            </svg>
                          ),
                        },
                        {
                          title: 'Post-Launch Safety Net',
                          desc: 'We handle security updates, backups, and minor revisions—including content updates as you evolve.',
                          icon: (
                            <svg
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                              />
                            </svg>
                          ),
                        },
                        {
                          title: 'True Partnership',
                          desc: 'We treat your business as our own. Your success is our reputation, and we act accordingly.',
                          icon: (
                            <svg
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          ),
                        },
                      ].map((item, i) => (
                        <div key={i} className="flex gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                            {item.icon}
                          </div>
                          <div>
                            <h3 className="mb-1 font-semibold text-neutral-800 dark:text-neutral-200">
                              {item.title}
                            </h3>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </BlurFade>
                </div>
              </div>
            </section>

            {/* About Owner Section */}
            <section
              id="about-owner"
              className="scroll-mt-24 border-t border-neutral-200 pt-16 dark:border-neutral-800"
            >
              <BlurFade delay={0.2} inView>
                <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                  The Person
                </div>
                <h1 className="mb-8 text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 md:text-5xl">
                  About Owner
                </h1>
                <div className="flex flex-col gap-8 md:flex-row">
                  <div className="flex-1 space-y-4 text-neutral-600 dark:text-neutral-400">
                    <p>
                      I started{' '}
                      <strong className="text-neutral-800 dark:text-neutral-200">
                        ShiroBIT
                      </strong>{' '}
                      not as a faceless corporate agency, but as a dedicated
                      developer who was tired of seeing small businesses get
                      burned by overpriced, underperforming digital products.
                    </p>
                    <p>
                      Is this driven by passion? Absolutely. Commitment?
                      Unquestionably. And yes, to make a couple bucks for a
                      living. But here is why that matters to you: because my
                      livelihood and reputation directly depend on the success
                      of your project, I don't just build and disappear. I treat
                      your website like my next paycheck depends on it. You’re
                      not hiring a vendor; you’re gaining a partner invested in
                      your growth.
                    </p>
                    <div className="flex gap-4 pt-2">
                      {[
                        { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
                        { icon: FaGithub, href: '#', label: 'GitHub' },
                        { icon: FaInstagram, href: '#', label: 'Instagram' },
                        { icon: FaXTwitter, href: '#', label: 'X' },
                      ].map((social, i) => (
                        <Link
                          key={i}
                          href={social.href}
                          className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-neutral-500 transition-all hover:bg-primary hover:text-white dark:bg-neutral-900 dark:text-neutral-400 dark:hover:bg-primary dark:hover:text-white"
                          aria-label={social.label}
                        >
                          <social.icon className="h-5 w-5" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </BlurFade>
            </section>
          </div>

          {/* Table of Contents Column */}
          <div className="relative mb-24 hidden lg:block">
            <div className="sticky top-24">
              <div className="mb-6 text-xs font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
                In View
              </div>
              <TableOfContents items={tocItems} />
            </div>
          </div>
        </div>

        <div className="mt-24 aspect-video w-full overflow-hidden rounded-3xl bg-neutral-100 dark:bg-neutral-900">
          <div className="flex h-full w-full items-center justify-center text-neutral-400 dark:text-neutral-600">
            <span className="text-sm font-medium">
              Bottom Video/Image Placeholder (16:9)
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
