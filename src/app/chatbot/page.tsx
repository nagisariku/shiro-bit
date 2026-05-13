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
      <div className="my-auto flex min-h-[calc(100vh-280px)] w-full flex-col items-center justify-center">
        <section className="mx-auto mb-8 w-full max-w-screen-lg text-center">
          <Skeleton className="mx-auto mb-4 h-12 w-48 rounded-lg" />
          <Skeleton className="mx-auto mb-2 h-4 w-[300px] rounded md:w-[500px]" />
          <Skeleton className="mx-auto h-4 w-[250px] rounded md:w-[400px]" />
        </section>

        <div className="w-full max-w-screen-lg px-2">
          <Skeleton className="mx-auto mb-8 h-8 w-64 rounded-lg" />
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
