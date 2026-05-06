import { Skeleton } from '@/components/ui/skeleton'

export default function PricingLoading() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <div className="container relative z-10 mx-auto flex max-w-screen-xl flex-col items-start justify-start px-6 py-0 lg:p-12">
        <div className="mb-8 flex items-center gap-2">
          <Skeleton className="h-4 w-4 rounded-full" />
          <Skeleton className="h-4 w-32" />
        </div>

        {/* Hero skeleton */}
        <section className="mx-auto mb-16 w-full max-w-screen-lg text-center">
          <div className="flex flex-col items-center space-y-4">
            <Skeleton className="h-6 w-24 rounded-full" />
            <Skeleton className="h-12 w-[300px] md:w-[500px]" />
            <Skeleton className="h-16 w-[280px] md:w-[450px]" />
          </div>
        </section>

        {/* Pricing Cards skeleton */}
        <div className="mx-auto mb-20 flex w-full flex-wrap justify-center gap-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex min-h-[29rem] w-full max-w-[20rem] flex-col justify-between rounded-2xl border border-neutral-100 p-6 dark:border-neutral-800 sm:max-w-[24rem]">
              <div className="space-y-6">
                <Skeleton className="mx-auto h-8 w-32" />
                <Skeleton className="mx-auto h-12 w-12 rounded-full" />
                <Skeleton className="h-12 w-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              </div>
              <Skeleton className="mt-8 h-12 w-full rounded-xl" />
            </div>
          ))}
        </div>

        {/* Table skeleton */}
        <div className="mx-auto w-full max-w-screen-lg space-y-8">
          <div className="flex flex-col items-center space-y-2">
            <Skeleton className="h-8 w-64" />
            <Skeleton className="h-4 w-96" />
          </div>
          <div className="rounded-xl border border-neutral-100 dark:border-neutral-800">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex border-b border-neutral-50 p-4 last:border-0 dark:border-neutral-900">
                <Skeleton className="h-4 w-1/4" />
                <Skeleton className="h-4 w-1/4" />
                <Skeleton className="h-4 w-1/4" />
                <Skeleton className="h-4 w-1/4" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
