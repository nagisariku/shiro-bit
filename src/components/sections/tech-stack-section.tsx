'use client'

import Image from 'next/image'
import { Marquee } from '@/components/magicui/marquee'
import { BlurFade } from '@/components/magicui/blur-fade'

const techstacks = [
  { alt: 'React.js', img: '/assets/techstack/1.png' },
  {
    alt: 'Next',
    img: '/assets/techstack/2.png',
    class: 'dark:brightness-0 dark:invert',
  },
  { alt: 'Tailwind CSS', img: '/assets/techstack/3.png' },
  { alt: 'Node JS', img: '/assets/techstack/4.png' },
  {
    alt: 'Shadcn',
    img: '/assets/techstack/7.png',
    class: 'dark:brightness-0 dark:invert',
  },
  { alt: 'Framer Motion', img: '/assets/techstack/8.png' },
]

export default function TechStackSection() {
  return (
    <BlurFade delay={0.25} inView>
      <div className="section-wrapper text-center">
        <h2 className="section-title">Bring The Latest Technology</h2>
        <p className="section-subtitle">
          We use industry-leading frameworks like Next.js, React, Tailwind CSS,
          Node.js, and ShadCN to create fast, scalable, and future-ready
          websites.
        </p>
        <Marquee
          reverse
          className="mx-auto max-w-screen-lg [--duration:40s]"
          gap={4}
        >
          {techstacks.map((tech) => (
            <div
              key={tech.alt}
              className="relative flex h-16 w-24 items-center justify-center md:h-24 md:w-48"
            >
              <Image
                className={`object-contain ${tech.class || ''}`}
                src={tech.img}
                alt={tech.alt}
                fill
              />
            </div>
          ))}
        </Marquee>
      </div>
    </BlurFade>
  )
}
