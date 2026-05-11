import React from 'react'
import { FaqItem } from './_components/faq-item'
import { WarningIcon, CheckCircleIcon } from './_components/icons'
import { type Step } from './types'
import Link from 'next/link'

export const steps: Step[] = [
  {
    id: 'step-email',
    number: '01',
    title: 'Step 1: Send Us Email',
    description:
      "Let's align our vision. To give you the most accurate quote and timeline, we need to understand your business.",
    content: (
      <div className="space-y-4">
        <div className="border-default max-w-3xl">
          <h4 className="paragraph-default mb-2 font-semibold text-neutral-900 dark:text-neutral-100">
            Action Steps:
          </h4>
          <ol className="paragraph-default mb-4 ml-6 list-decimal space-y-2">
            <li>
              Collect all the requirements into your Google Drive folder and
              make it public.
            </li>
            <li>
              Fill out{' '}
              <Link
                href="contact"
                className="font-semibold text-neutral-900 underline underline-offset-4 hover:text-neutral-700 dark:text-neutral-100 dark:hover:text-neutral-300"
              >
                this form
              </Link>{' '}
              and click send.
            </li>
          </ol>
          <div className="flex flex-col gap-2">
            <div className="paragraph-default flex items-center gap-2 text-amber-600 dark:text-amber-500">
              <WarningIcon />
              <span>
                Use your active contact/email! Your privacy is safe with us.
              </span>
            </div>
          </div>
        </div>

        <div className="max-w-3xl">
          <FaqItem
            question="What example of requirements could I collect?"
            answer="You can collect your logo, assets, specific requirement notes, links, copywriting, design references (images, Figma, XD, etc.), and any other relevant materials."
          />
          <FaqItem
            question="How if I didn't bring any design yet?"
            answer="You can choose from our available templates, or you can tell us your preferences and leave the design to us!"
          />
        </div>
      </div>
    ),
  },
  {
    id: 'step-payment',
    number: '02',
    title: 'Step 2: Payment',
    description:
      'Once we agree on the scope and price, we require a 50% deposit to secure your slot in our development queue.',
    content: (
      <div className="space-y-4">
        <div className="grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-neutral-200 bg-white p-6 text-center shadow-sm dark:border-neutral-800 dark:bg-neutral-900/50">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#00457C]/10 text-[#00457C] dark:bg-[#0079C1]/20 dark:text-[#0079C1]">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106z" />
              </svg>
            </div>
            <span className="paragraph-default text-neutral-800 dark:text-neutral-200">
              Pay via secure PayPal link
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-neutral-200 bg-white p-6 text-center shadow-sm dark:border-neutral-800 dark:bg-neutral-900/50">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#9FE870]/20 text-[#2E4B1A] dark:bg-[#9FE870]/10 dark:text-[#9FE870]">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.353 19.34L18.995 3.323l-3.323-.004L4.545 17.514l1.808 1.826zm14.331-4.838l-1.803-1.827L7.697 21.68h3.325l9.662-7.178z" />
              </svg>
            </div>
            <span className="paragraph-default text-neutral-800 dark:text-neutral-200">
              Pay via Wise (Low fees bank transfer)
            </span>
          </div>
        </div>

        <div className="paragraph-default max-w-3xl rounded-2xl border border-neutral-200 bg-neutral-50 px-6 py-4 dark:border-neutral-800 dark:bg-neutral-900/50">
          <strong className="font-semibold text-neutral-900 dark:text-neutral-100">
            Action Step:
          </strong>{' '}
          After completing the transfer, take a screenshot of the receipt and
          reply to our email thread.
        </div>

        <div className="max-w-3xl">
          <FaqItem
            question="Do you offer installment plans?"
            answer="Yes. For most projects, we work on a 50/50 basis (50% upfront deposit, 50% upon project completion before site handover)."
          />
          <FaqItem
            question="Is my payment secure?"
            answer="Absolutely. We only use globally recognized, secure payment gateways like PayPal and Wise. We never store your card information."
          />
        </div>
      </div>
    ),
  },
  {
    id: 'step-development',
    number: '03',
    title: 'Step 3: Analysis & Development',
    description:
      'We dive into the code. Development starts the very next business day after your payment is confirmed.',
    content: (
      <div className="space-y-4">
        <div className="max-w-3xl rounded-xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/50">
          <h4 className="mb-2 flex items-center gap-2 font-bold text-neutral-800 dark:text-neutral-200">
            <svg
              className="h-5 w-5 text-indigo-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            The 18:00 PM Rule
          </h4>
          <p className="text-base text-neutral-600 dark:text-neutral-400">
            To keep you stress-free and informed, we will send you a daily
            progress report every day at 18:00 PM (your local time). You will
            never have to guess what we are working on.
          </p>
        </div>

        <div className="max-w-3xl">
          <FaqItem
            question="Can I request changes while the site is being built?"
            answer="Yes. Daily reporting allows you to give feedback in real-time. Minor adjustments are welcomed, though major structural changes outside the original PDF scope may affect the final delivery date."
          />
          <FaqItem
            question="How long does a standard website build take?"
            answer="Depending on complexity, a standard landing page takes 3-5 days, while full multi-page websites takes 6-12 days."
          />
        </div>
      </div>
    ),
  },
  {
    id: 'step-golive',
    number: '04',
    title: 'Step 4: Go-Live: Documentation & Onboarding',
    description:
      "The big day. We don't just launch your site and disappear; we ensure you know how to operate it.",
    content: (
      <div className="space-y-4">
        <div className="max-w-3xl rounded-xl border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-900/50">
          <h4 className="mb-4 font-semibold text-neutral-800 dark:text-neutral-200">
            What you get:
          </h4>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                ),
                label: 'Source Code',
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                ),
                label: 'Loom Walkthrough',
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                ),
                label: 'PDF Guide',
              },
            ].map(({ icon, label }) => (
              <li
                key={label}
                className="paragraph-default flex items-center gap-2 rounded-lg border border-neutral-200 bg-white p-3 text-neutral-700 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/50 dark:text-neutral-300"
              >
                <svg
                  className="h-5 w-5 shrink-0 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {icon}
                </svg>
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="max-w-3xl">
          <FaqItem
            question="Do I actually own the website when you are done?"
            answer="Yes, 100%. Unlike agencies that lock you into proprietary software, we give you full ownership of the source code and domain."
          />
        </div>
      </div>
    ),
  },
  {
    id: 'step-postproduction',
    number: '05',
    title: 'Step 5: Post-Production: Maintenance & Revisions',
    description:
      'Your safety net. Every project comes with a 30-day free support window to fix any bugs, adjust content, and ensure everything runs flawlessly post-launch.',
    isHighlighted: true,
    content: (
      <div className="max-w-3xl">
        <FaqItem
          question="What happens after the free support window ends?"
          answer="You can choose to manage the site yourself, or subscribe to our monthly retainer care plan where we handle security updates, backups, and small content edits for you."
        />
        <FaqItem
          question="Like what kind revisions can we do?"
          answer="During the 30-day free support window, we offer minor revisions such as changing images, updating text copy, tweaking colors, or fixing any bugs that arise. Major structural changes or adding new features will require a separate scope of work."
        />
      </div>
    ),
  },
]
