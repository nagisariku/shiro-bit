'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'motion/react'

export function FloatingCsButton() {
  const pathname = usePathname()

  // Hide the floating button if the user is already on the chatbot page
  if (pathname === '/chatbot') {
    return null
  }

  return (
    <div className="pointer-events-none fixed bottom-6 left-0 right-0 z-50 mx-auto w-full max-w-screen-xl px-6 md:bottom-8 lg:px-12">
      <div className="relative w-full">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.5, ease: 'easeOut' }}
          className="pointer-events-auto absolute bottom-0 right-0"
        >
          <Link
            id="floating-ask-cs-button"
            href="/chatbot"
            className="group flex items-center gap-3 rounded-full border border-white/10 bg-zinc-950 p-2.5 pr-5 text-white shadow-[0_10px_30px_rgba(0,0,0,0.3)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-green-500/50 hover:shadow-[0_10px_30px_rgba(34,197,94,0.25)] dark:border-zinc-800 dark:bg-white dark:text-zinc-950 dark:shadow-[0_10px_30px_rgba(255,255,255,0.15)] dark:hover:border-green-500/50 dark:hover:shadow-[0_10px_30px_rgba(34,197,94,0.3)]"
            aria-label="Ask Customer Service Chatbot"
          >
            {/* Icon Container with active indicator dot */}
            <div className="relative flex items-center justify-center rounded-full bg-zinc-900 p-2 transition-transform duration-300 group-hover:scale-110 dark:bg-zinc-100">
              <img
                src="/assets/icons/ai-icon.svg"
                alt="AI CS Icon"
                className="size-5 md:size-6"
              />
              {/* Pulsating online indicator */}
              <span className="absolute -right-0.5 -top-0.5 flex size-2.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500 dark:bg-emerald-600"></span>
              </span>
            </div>

            {/* Label Content */}
            <div className="flex flex-col items-start justify-center">
              <span className="text-[9px] font-bold uppercase tracking-wider text-zinc-400 transition-colors group-hover:text-zinc-300 dark:text-zinc-500 dark:group-hover:text-zinc-600">
                24/7 AI Support
              </span>
              <span className="text-sm font-bold leading-tight tracking-tight md:text-base">
                Ask CS
              </span>
            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
