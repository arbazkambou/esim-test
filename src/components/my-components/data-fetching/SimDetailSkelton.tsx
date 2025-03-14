import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function SimDetailSkelton() {
  return (
    <Card className="flex flex-col gap-[1rem] rounded-[1.8125rem] px-[0.88rem] py-[1.81rem]">
      <Skeleton className="h-6 w-3/4" />

      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className="flex flex-col gap-1 rounded-[0.5625rem] bg-muted px-[0.81rem] py-[0.69rem] md:flex-row md:justify-between"
        >
          <div className="flex items-center gap-[0.81rem]">
            <Skeleton className="h-6 w-6 rounded-full" />
            <Skeleton className="h-5 w-32" />
          </div>
          <Skeleton className="h-5 w-40" />
        </div>
      ))}

      <div className="ms-4 flex justify-between">
        <div className="flex flex-col gap-4">
          <Skeleton className="h-5 w-20" />
          <Skeleton className="h-32 w-32" />
        </div>
      </div>
    </Card>
  );
}
