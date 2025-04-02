import { Skeleton } from "@/components/ui/skeleton";

function UserBalanceSkelton() {
  return (
    <div className="flex items-center xl:justify-end">
      <div className="flex w-full items-center justify-center gap-2 rounded-[0.5rem] px-[1rem] py-[0.89rem] xl:w-max">
        <Skeleton className="h-[15px] w-[15px]" />
        <Skeleton className="h-[1.1885rem] w-[120px]" />
        <Skeleton className="h-[1.1885rem] w-[60px]" />
      </div>
    </div>
  );
}

export default UserBalanceSkelton;
