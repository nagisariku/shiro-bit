'use client'

import React, { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'

export function FaqItem({
  question,
  answer,
}: {
  question: string
  answer: React.ReactNode
}) {
  const [open, setOpen] = useState(false)
  return (
    <div className="overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="paragraph-default paragraph-default flex cursor-pointer items-center gap-2 py-2"
      >
        <span>{question}</span>
        <div className="flex shrink-0 items-center justify-center text-neutral-400 dark:text-neutral-500">
          {open ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
        </div>
      </button>
      <div
        className={cn(
          'grid transition-all duration-200',
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        )}
      >
        <div className="overflow-hidden">
          <div className="paragraph-default pb-6 pt-1">{answer}</div>
        </div>
      </div>
    </div>
  )
}
