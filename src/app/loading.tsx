import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <div className="container mx-auto flex max-w-screen-xl flex-col items-start justify-start px-6 py-0 lg:p-12">
      {/* Back button skeleton */}
      <div className="mb-8 flex items-center gap-2">
        <Skeleton className="h-4 w-4 rounded-full" />
        <Skeleton className="h-4 w-24" />
      </div>

      <div className="flex w-full flex-col items-center justify-center gap-12">
        {/* Header skeleton */}
        <div className="flex flex-col items-center space-y-4 text-center">
          <Skeleton className="h-6 w-24 rounded-full" />
          <Skeleton className="h-12 w-[300px] md:w-[500px]" />
          <Skeleton className="h-20 w-[250px] md:w-[400px]" />
        </div>

        {/* Content skeleton - 3 cards */}
        <div className="grid w-full gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex flex-col space-y-4">
              <Skeleton className="aspect-video w-full rounded-2xl" />
              <div className="space-y-2">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
