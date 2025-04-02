import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function RelatedPackagecardSkelton() {
  return (
    <Card className="relative rounded-md p-3 shadow-none">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-[0.19rem]">
          <div className="flex items-center justify-between">
            <Skeleton className="h-5 w-24" />
            <Skeleton className="h-4 w-5" />
          </div>
          <div className="flex items-center gap-1">
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-3 w-20" />
          </div>
        </div>

        <div>
          <div className="flex items-center">
            <Skeleton className="h-5 w-16" />
            <Skeleton className="ml-2 h-3 w-8" />
          </div>
          <div className="mt-1 flex items-center gap-1">
            <Skeleton className="h-4 w-4" />
            <div className="flex items-center gap-1">
              <Skeleton className="h-4 w-16" />
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col gap-2 xs:flex-row xs:items-center">
          <Skeleton className="h-6 w-20" />
          <Skeleton className="h-6 w-24" />
        </div>
      </div>
    </Card>
  );
}
