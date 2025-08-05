import { Skeleton } from "@/components/ui/skeleton";

export function PackageCardSkelton() {
  return (
    <div className="group flex justify-between rounded-lg border border-muted bg-background px-[1.06rem] py-[0.94rem]">
      <div className="flex items-center gap-3">
        <Skeleton className="h-[40px] w-[40px] rounded-full" />
        <div className="flex flex-col justify-center">
          <Skeleton className="mb-1 h-5 w-24" />
          <Skeleton className="h-4 w-20" />
        </div>
      </div>
    </div>
  );
}
