'use client'

import * as React from 'react'
import Link from 'next/link'
import { Instagram, Mail, Send, MapPin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-20 border-t bg-neutral-50/50 py-16 dark:border-neutral-800 dark:bg-transparent">
      <div className="container mx-auto max-w-screen-xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="inline-block transition-opacity hover:opacity-90"
            >
              <img
                src="/assets/logo/logo-tr-light.svg"
                alt="ShiroBIT Logo"
                className="h-10 w-auto dark:hidden md:h-12"
              />
              <img
                src="/assets/logo/logo-tr-dark.svg"
                alt="ShiroBIT Logo"
                className="hidden h-10 w-auto dark:block md:h-12"
              />
            </Link>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
              Custom High-Quality Website Development for your business needs.
              We craft high-fidelity digital experiences that drive growth,
              engagement, and lasting impact.
            </p>
          </div>

          {/* Contact Info Section */}
          <div>
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-neutral-900 dark:text-neutral-100">
              Contact
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-neutral-600 dark:text-neutral-400">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800/50">
                  <MapPin className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium">Indonesia</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-600 dark:text-neutral-400">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800/50">
                  <Mail className="h-4 w-4" />
                </div>
                <a
                  href="mailto:mumuhshidiq@gmail.com"
                  className="text-sm font-medium transition-colors hover:text-neutral-900 dark:hover:text-neutral-100"
                >
                  mumuhshidiq@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Socials Section */}
          <div>
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-neutral-900 dark:text-neutral-100">
              Follow Us
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com/shirobit"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100 text-neutral-600 transition-all hover:scale-105 hover:bg-neutral-200 hover:text-neutral-900 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-100"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://t.me/shirobit"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100 text-neutral-600 transition-all hover:scale-105 hover:bg-neutral-200 hover:text-neutral-900 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-100"
                >
                  <Send className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 border-t border-neutral-200 pt-8 dark:border-neutral-800">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="text-sm font-medium text-neutral-500 dark:text-neutral-500">
              @copywrite {currentYear} ShiroBIT. All rights reserved.
            </p>
            <div className="flex gap-8 text-sm font-medium text-neutral-500 dark:text-neutral-500">
              <Link
                href="#"
                className="transition-colors hover:text-neutral-900 dark:hover:text-neutral-100"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="transition-colors hover:text-neutral-900 dark:hover:text-neutral-100"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
