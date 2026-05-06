import { Skeleton } from '@/components/ui/skeleton'

export default function ProcessLoading() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <div className="container relative z-10 mx-auto flex max-w-screen-xl flex-col items-start justify-start px-6 py-0 lg:p-12">
        <div className="mb-8 flex items-center gap-2">
          <Skeleton className="h-4 w-4 rounded-full" />
          <Skeleton className="h-4 w-32" />
        </div>

        <section className="mx-auto mb-24 w-full max-w-screen-lg">
          <div className="text-center">
            <div className="flex flex-col items-center space-y-4">
              <Skeleton className="h-6 w-24 rounded-full" />
              <Skeleton className="h-12 w-[300px] md:w-[500px]" />
              <Skeleton className="h-16 w-[280px] md:w-[450px]" />
            </div>
          </div>

          <div className="mt-24 space-y-12">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex gap-8">
                <div className="flex flex-col items-center">
                  <Skeleton className="h-10 w-10 rounded-full" />
                  {i !== 4 && <Skeleton className="h-24 w-0.5" />}
                </div>
                <div className="flex-1 space-y-4 pt-2">
                  <Skeleton className="h-8 w-48" />
                  <Skeleton className="h-16 w-full" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
