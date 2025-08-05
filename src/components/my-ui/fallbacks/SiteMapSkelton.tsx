import { Skeleton } from "@/components/ui/skeleton";

export function SiteMapSkelton() {
  return (
    <div className="mx-auto w-full max-w-4xl">
      {/* Tabs skeleton */}
      <div className="mb-8 flex justify-center">
        <Skeleton className="h-10 w-64" />
      </div>

      {/* Content skeleton */}
      <div className="space-y-8">
        {/* Title skeleton */}
        <Skeleton className="h-8 w-48" />

        {/* Letter navigation skeleton */}
        <div className="flex justify-between">
          {[...Array(8)].map((_, i) => (
            <Skeleton key={i} className="h-6 w-6" />
          ))}
        </div>

        {/* Countries/Regions list skeleton */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="flex items-center space-x-2">
              <Skeleton className="h-6 w-6" />
              <Skeleton className="h-4 w-24" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
