import { Skeleton } from '@/components/ui/skeleton'

export default function ContactLoading() {
  return (
    <div className="container mx-auto flex max-w-screen-xl flex-col items-start justify-start px-6 py-0 lg:p-12">
      <div className="mb-8 flex items-center gap-2">
        <Skeleton className="h-4 w-4 rounded-full" />
        <Skeleton className="h-4 w-32" />
      </div>

      <div className="flex w-full flex-col items-center justify-center gap-16">
        <div className="text-center">
          <div className="flex flex-col items-center space-y-4">
            <Skeleton className="h-6 w-24 rounded-full" />
            <Skeleton className="h-12 w-[300px] md:w-[600px]" />
            <Skeleton className="h-20 w-[280px] md:w-[500px]" />
          </div>
        </div>

        {/* Form Skeleton */}
        <div className="w-full max-w-2xl space-y-6 rounded-2xl border border-neutral-100 p-8 dark:border-neutral-800">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-10 w-full" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-10 w-full" />
            </div>
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-10 w-full" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-32 w-full" />
          </div>
          <Skeleton className="h-12 w-full rounded-xl" />
        </div>
      </div>
    </div>
  )
}
