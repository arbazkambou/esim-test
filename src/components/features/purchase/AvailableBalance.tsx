"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { getUser } from "@/services/user/userApis";
import { useQuery } from "@tanstack/react-query";

function AvailableBalance() {
  const { data, isPending: isUserLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });

  return (
    <div className="flex flex-col justify-center gap-2 rounded-[15px] bg-primary-gradient px-[33px] py-[26px] leading-none text-background">
      <p className="text-[22px] font-500">Your Available Balance</p>
      {isUserLoading ? (
        <Skeleton className="h-[25px] w-[100px] bg-background/70" />
      ) : (
        <p className="text-[36px] font-600">${data?.balance}</p>
      )}
    </div>
  );
}

export default AvailableBalance;
