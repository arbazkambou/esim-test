"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { getUser } from "@/services/user/userApis";
import { useQuery } from "@tanstack/react-query";

interface PropsType {
  isDiscountActive: boolean;
  isShowTimerLoading?: boolean;
}

function AvailableBalance({ isDiscountActive, isShowTimerLoading }: PropsType) {
  const { data, isPending: isUserLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });

  return (
    <div
      className={`flex flex-col justify-center gap-2 rounded-[15px] bg-primary-gradient px-[33px] py-[26px] leading-none text-background ${!isDiscountActive ? "col-span-2 !flex-row items-center !gap-6" : ""}`}
    >
      <p
        className={`text-[22px] font-500 ${!isDiscountActive ? "!text-[18px] !font-500 sm:!text-[22px]" : ""}`}
      >
        Your Available Balance
      </p>
      {isUserLoading || isShowTimerLoading ? (
        <Skeleton className="h-[25px] w-[100px] bg-background/70" />
      ) : (
        <p
          className={`text-[36px] font-600 ${!isDiscountActive ? "!text-[18px] !font-500 sm:!text-[22px]" : ""}`}
        >
          ${data?.balance}
        </p>
      )}
    </div>
  );
}

export default AvailableBalance;
