'use client'
import React from 'react'
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials'
import { BlurFade } from '@/components/magicui/blur-fade'

export default function ReviewsAltSection() {
  const testimonials = [
    {
      quote:
        'ShiroBIT delivered a website that perfectly captures the essence of our restaurant. The booking integration is seamless and our customers love the aesthetic.',
      name: 'Gusto Restaurant',
      designation: 'Culinary - Fine Dining',
      src: '/assets/portfolio/cr-1-1.png',
      link: 'https://gusto-restaurant.com',
    },
    {
      quote:
        'The portfolio layout is stunning. It showcases my work in a way that truly resonates with my clients. Highly recommended for creative professionals.',
      name: 'Lumina Studio',
      designation: 'Creative - Photography',
      src: '/assets/portfolio/ag-1-1.png',
      link: 'https://lumina-studio.co',
    },
    {
      quote:
        'Strategic, fast, and high-quality. ShiroBIT is our go-to for all our web development needs. They understand the tech industry perfectly.',
      name: 'ShiroBIT',
      designation: 'Tech - Digital Consulting',
      src: '/assets/portfolio/ag-2-1.png',
      link: 'https://shirobit.com',
    },
    {
      quote:
        'Our conversion rates doubled since the relaunch. The performance optimization is unmatched and the design is incredibly professional.',
      name: 'Zenith Fitness',
      designation: 'Wellness - Gym & Training',
      src: '/assets/portfolio/tr-1-1.png',
      link: 'https://zenith-fitness.app',
    },
    {
      quote:
        "The shopping experience is smooth and beautiful. Our customers love the new design and we've seen a significant increase in sales.",
      name: 'Bloom Florist',
      designation: 'Retail - E-commerce',
      src: '/assets/portfolio/cr-1-2.png',
      link: 'https://bloom-florist.shop',
    },
  ]

  return (
    <section className="section-wrapper overflow-hidden text-center">
      <BlurFade delay={0.25} inView>
        <h2 className="section-title">
          Client Success Stories
        </h2>
      </BlurFade>
      <BlurFade delay={0.25} inView>
        <p className="section-subtitle">
          Don't just take our word for it. Hear from the businesses and
          individuals we&apos;ve helped elevate with premium digital solutions.
        </p>
      </BlurFade>
      <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
    </section>
  )
}
