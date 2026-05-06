import { Skeleton } from '@/components/ui/skeleton'

export default function PortfolioItemLoading() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto flex max-w-screen-xl flex-col items-start justify-start px-3 py-0 lg:p-12">
        {/* Back link skeleton */}
        <div className="mb-8 flex items-center gap-2">
          <Skeleton className="h-4 w-4 rounded-full" />
          <Skeleton className="h-4 w-32" />
        </div>

        {/* Header skeleton */}
        <div className="mb-6 w-full max-w-screen-lg space-y-4">
          <Skeleton className="h-6 w-32 rounded-full" />
          <Skeleton className="h-12 w-3/4" />
          <Skeleton className="h-6 w-1/2" />
        </div>

        {/* Thumbnail skeleton */}
        <div className="mb-10 w-full max-w-screen-lg">
          <Skeleton className="aspect-video w-full rounded-2xl" />
        </div>

        {/* Two-column body skeleton */}
        <div className="w-full max-w-screen-lg">
          <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
            {/* LEFT COLUMN */}
            <div className="flex flex-col gap-12 lg:flex-[5]">
              <section className="space-y-4">
                <Skeleton className="h-8 w-48" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              </section>

              <section className="space-y-4">
                <Skeleton className="h-8 w-48" />
                <Skeleton className="aspect-video w-full rounded-2xl" />
              </section>
            </div>

            {/* RIGHT COLUMN */}
            <div className="lg:flex-[2]">
              <div className="sticky top-32 flex flex-col gap-6">
                <div className="rounded-xl border border-neutral-100 p-5 dark:border-neutral-800 space-y-4">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-6 w-full" />
                </div>
                <div className="rounded-xl border border-neutral-100 p-5 dark:border-neutral-800 space-y-4">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-6 w-full" />
                </div>
                <div className="space-y-3">
                  <Skeleton className="h-10 w-full rounded-md" />
                  <Skeleton className="h-10 w-full rounded-md" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
