import React from 'react'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'
import { BlurFade } from '@/components/magicui/blur-fade'
import { Metadata } from 'next'
import { ContactForm } from './_components/contact-form'

export const metadata: Metadata = {
  title: 'Contact Us | Start Your Project',
  description:
    'Ready to elevate your digital presence? Contact ShiroBIT today to discuss your website development project or template customization.',
}

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ plan?: string }>
}) {
  const { plan } = await searchParams
  return (
    <div className="container mx-auto flex max-w-screen-xl flex-col items-start justify-start px-6 py-0 lg:p-12">
      <Link href="/" className="group back-link">
        <FaArrowLeft className="transition-transform group-hover:-translate-x-1" />
        <span className="font-medium">Back to Home</span>
      </Link>

      <div className="flex w-full flex-col items-center justify-center gap-16">
        <div className="text-center">
          <BlurFade delay={0.2}>
            <div className="page-badge bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
              Start Now
            </div>
            <h1 className="page-title">
              Start Your{' '}
              <span className="text-primary">Digital Transformation</span>
            </h1>
            <p className="page-subtitle">
              Tell us about your project vision. Our team will review your
              requirements and provide a customized solution tailored to your
              business needs.
            </p>
          </BlurFade>
        </div>

        <ContactForm defaultPlan={plan} />
      </div>
    </div>
  )
}
