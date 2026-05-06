import { Skeleton } from '@/components/ui/skeleton'

export default function PortfolioLoading() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto flex max-w-screen-xl flex-col items-start justify-start px-6 py-0 lg:p-12">
        {/* Back link skeleton */}
        <div className="mb-8 flex items-center gap-2">
          <Skeleton className="h-4 w-4 rounded-full" />
          <Skeleton className="h-4 w-32" />
        </div>

        {/* Hero skeleton */}
        <section className="mx-auto mb-16 w-full max-w-screen-lg text-center">
          <div className="flex flex-col items-center space-y-4">
            <Skeleton className="h-6 w-24 rounded-full" />
            <Skeleton className="h-14 w-[300px] md:w-[600px]" />
            <Skeleton className="h-20 w-[280px] md:w-[500px]" />
          </div>
        </section>

        {/* Sections skeleton */}
        <div className="w-full max-w-screen-lg space-y-24">
          {[...Array(2)].map((_, sectionIdx) => (
            <div key={sectionIdx} className="space-y-10">
              {/* Section Header */}
              <div className="space-y-4">
                <Skeleton className="h-10 w-64" />
                <Skeleton className="h-8 w-96" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              </div>

              {/* Grid skeleton */}
              <div className="grid w-full grid-cols-2 gap-4 lg:gap-6">
                <Skeleton className="col-span-2 aspect-video w-full rounded-lg" />
                <Skeleton className="aspect-video w-full rounded-lg" />
                <Skeleton className="aspect-video w-full rounded-lg" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
