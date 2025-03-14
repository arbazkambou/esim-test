"use client";

import EsimDetailsPage from "@/components/pages/EsimDetailsPage";
import { useAuth } from "@/providers/AuthProvider";
import { getDataOnlySimUsage } from "@/services/purchase/purchaseApis";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Page({ params }: { params: { slug: string } }) {
  const { isAuthenticated, isAuthLoading } = useAuth();
  const router = useRouter();

  // const { data: relatedPackages = [], isPending: isRelatedPackagesLoading } =
  //   useQuery({
  //     queryKey: [`topup-${params.slug}`],
  //     queryFn: () => getSimRelatedPackages(params.slug),
  //   });

  const { data: usage, isPending: isUsageLoading } = useQuery({
    queryKey: [`data-usage-${params.slug}`],
    queryFn: () => getDataOnlySimUsage(params.slug),
  });

  useEffect(
    function () {
      if (!isAuthLoading && !isAuthenticated) {
        router.push("/login");
      }
    },
    [isAuthenticated, isAuthLoading, router],
  );

  return (
    <>
      <EsimDetailsPage usage={usage} isUsageLoading={isUsageLoading} />
    </>
  );
}

export default Page;
