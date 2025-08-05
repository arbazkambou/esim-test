import { getOrderHistory } from "@/services/purchase/purchaseApis";
import { useQuery } from "@tanstack/react-query";

export function useOrderHistory({ enabled = true }: { enabled: boolean }) {
  const {
    data = [],
    isPending,
    refetch,
    isRefetching,
    isSuccess: isOrdersFetched,
  } = useQuery({
    queryKey: ["order-history"],
    queryFn: getOrderHistory,
    enabled,
  });

  return { data, isPending, refetch, isRefetching, isOrdersFetched };
}
