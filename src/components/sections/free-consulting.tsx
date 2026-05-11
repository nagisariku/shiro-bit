'use client'
import React from 'react'
import { BlurFade } from '@/components/magicui/blur-fade'
import { Instagram, Mail, Send } from 'lucide-react'
export default function FreeConsulting() {
  return (
    <section
      id="free-consulting"
      className="section-wrapper-sm overflow-hidden"
    >
      <div className="mb-12 text-center">
        <BlurFade delay={0.1} inView>
          <h2 className="section-title">Free Consulting!</h2>
          <p className="section-subtitle">
            Ready to take your business to the next level? Reach out for a free
            consultation through your preferred platform.
          </p>
        </BlurFade>
      </div>
      <div className="grid grid-cols-2 gap-4 md:gap-6">
        {/* Left Column: Email (Spans 2 rows) */}
        <div className="row-span-2">
          <BlurFade delay={0.2} inView className="h-full">
            <a
              href="mailto:mumuhshidiq@gmail.com"
              className="group relative flex h-full flex-col items-center justify-center overflow-hidden rounded-3xl border border-border-subtle bg-surface-base p-8 py-16 transition-all hover:bg-neutral-50 dark:bg-surface-elevated dark:hover:bg-neutral-900 sm:py-24"
            >
              <div className="mb-6 rounded-3xl bg-green-100 p-6 text-green-600 transition-transform group-hover:scale-110 dark:bg-green-900/30 dark:text-green-400 md:p-8">
                <Mail className="size-10 md:size-14" />
              </div>
              <h3 className="paragraph-hero text-center">Email Inquiry</h3>
              <p className="paragraph-default mt-2 text-center">
                Drop us a line and let's start a conversation.
              </p>
            </a>
          </BlurFade>
        </div>
        {/* Instagram */}
        <BlurFade delay={0.3} inView className="h-full">
          <a
            href="https://instagram.com/shirobit"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex h-full flex-col items-center justify-center overflow-hidden rounded-3xl border border-border-subtle bg-surface-base p-8 py-10 transition-all hover:bg-neutral-50 dark:bg-surface-elevated dark:hover:bg-neutral-900 sm:py-14"
          >
            <div className="mb-4 rounded-2xl bg-pink-100 p-4 text-pink-600 transition-transform group-hover:scale-110 dark:bg-pink-900/30 dark:text-pink-400">
              <Instagram className="size-8" />
            </div>
            <h3 className="paragraph-hero text-center text-lg sm:text-xl">
              Direct Message
            </h3>
            <p className="paragraph-default mt-1 text-center text-sm">
              Reach out via Instagram
            </p>
          </a>
        </BlurFade>
        {/* Telegram */}
        <BlurFade delay={0.4} inView className="h-full">
          <a
            href="https://t.me/username"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex h-full flex-col items-center justify-center overflow-hidden rounded-3xl border border-border-subtle bg-surface-base p-8 py-10 transition-all hover:bg-neutral-50 dark:bg-surface-elevated dark:hover:bg-neutral-900 sm:py-14"
          >
            <div className="mb-4 rounded-2xl bg-blue-100 p-4 text-blue-600 transition-transform group-hover:scale-110 dark:bg-blue-900/30 dark:text-blue-400">
              <Send className="size-8" />
            </div>
            <h3 className="paragraph-hero text-center text-lg sm:text-xl">
              Telegram
            </h3>
            <p className="paragraph-default mt-1 text-center text-sm">
              Connect on Telegram
            </p>
          </a>
        </BlurFade>
      </div>
    </section>
  )
}
