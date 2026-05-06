import { Skeleton } from '@/components/ui/skeleton'

export function HeroSkeleton() {
  return (
    <div className="mx-auto mb-8 flex min-h-[72vh] max-w-screen-xl flex-col items-center justify-center px-6 py-8 text-center">
      <Skeleton className="mb-6 h-10 w-64 rounded-full" />
      <Skeleton className="mb-8 h-24 w-full max-w-3xl" />
      <Skeleton className="mb-24 h-6 w-80" />
      <div className="flex gap-4">
        <Skeleton className="h-12 w-40 rounded-xl" />
        <Skeleton className="h-12 w-40 rounded-xl" />
      </div>
    </div>
  )
}

export function SectionSkeleton() {
  return (
    <div className="section-wrapper py-20">
      <div className="flex flex-col items-center space-y-4 text-center">
        <Skeleton className="h-12 w-64" />
        <Skeleton className="h-6 w-96" />
        <div className="mt-12 grid w-full gap-8 md:grid-cols-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="aspect-video w-full rounded-2xl" />
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-12 w-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function PricingSkeleton() {
  return (
    <div className="section-wrapper py-20 text-center">
      <Skeleton className="mx-auto mb-4 h-12 w-64" />
      <Skeleton className="mx-auto mb-12 h-6 w-96" />
      <div className="mx-auto mb-8 flex max-w-screen-lg flex-wrap gap-4 justify-center">
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} className="h-[29rem] w-full max-w-[20rem] rounded-2xl" />
        ))}
      </div>
    </div>
  )
}

export function TechStackSkeleton() {
  return (
    <div className="section-wrapper py-20">
      <Skeleton className="mx-auto mb-12 h-12 w-48" />
      <div className="flex flex-wrap justify-center gap-8">
        {[...Array(6)].map((_, i) => (
          <Skeleton key={i} className="h-16 w-32 rounded-lg" />
        ))}
      </div>
    </div>
  )
}
