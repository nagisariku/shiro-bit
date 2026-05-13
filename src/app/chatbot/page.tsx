import React, { Suspense } from 'react'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa6'
import { Skeleton } from '@/components/ui/skeleton'
import { ChatInterface } from './chat-interface'

export const metadata = {
  title: '',
  description: '',
}

function ChatbotSkeleton() {
  return (
    <div className="flex w-full flex-1 flex-col items-center">
      {/* Hero Section Skeleton */}
      <section className="mx-auto mb-16 w-full max-w-screen-lg text-center">
        <Skeleton className="mx-auto mb-4 h-12 w-48 rounded-lg" />
        <Skeleton className="mx-auto mb-2 h-4 w-[300px] rounded md:w-[500px]" />
        <Skeleton className="mx-auto h-4 w-[250px] rounded md:w-[400px]" />
      </section>

      {/* Chat Container Skeleton */}
      <div className="mx-auto flex h-[50vh] min-h-[400px] w-full max-w-screen-lg flex-col justify-between">
        {/* Conversation Empty State Skeleton */}
        <div className="flex size-full flex-col items-center justify-center gap-3 p-8 text-center">
          <div className="space-y-2">
            <Skeleton className="mx-auto h-5 w-32 rounded" />
            <Skeleton className="mx-auto h-4 w-64 rounded" />
          </div>
        </div>

        {/* Input Area Skeleton */}
        <div className="mt-auto pb-8 pt-4 w-full">
          {/* Paragraph Hero Skeleton inside AiInput */}
          <Skeleton className="mx-auto mb-8 h-8 w-64 rounded-lg" />

          {/* Composer Box Skeleton */}
          <Skeleton className="mx-auto h-14 w-full max-w-screen-lg rounded-3xl" />
        </div>
      </div>
    </div>
  )
}

export default function ChatbotPage() {
  return (
    <div className="">
      <div className="container mx-auto flex max-w-screen-xl flex-col items-start justify-start px-6 py-0 lg:p-12">
        <Link href="/" className="back-link group">
          <FaArrowLeft className="transition-transform group-hover:-translate-x-1" />
          <span className="font-medium">Back to Home</span>
        </Link>

        {/* Page Content */}
        <Suspense fallback={<ChatbotSkeleton />}>
          <ChatInterface />
        </Suspense>
      </div>
    </div>
  )
}
