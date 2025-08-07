"use client";

import EsimDetailsPage from "@/components/pages/EsimDetailsPage";
import { useAuth } from "@/providers/AuthProvider";
import { getDataOnlySimUsage } from "@/services/purchase/purchaseApis";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function DataOnlyEsimDetailPage({ params }: { params: { slug: string } }) {
  const { isAuthenticated, isAuthLoading } = useAuth();
  const router = useRouter();

  // const { data: relatedPackages = [], isPending: isRelatedPackagesLoading } =
  //   useQuery({
  //     queryKey: [`topup-${params.slug}`],
  //     queryFn: () => getSimRelatedPackages(params.slug),
  //   });

  //This api is called to get data only sim usage for authenticated user
  const { data: usage, isPending: isUsageLoading } = useQuery({
    queryKey: [`data-usage-${params.slug}`],
    queryFn: () => getDataOnlySimUsage(params.slug),
  });

  //To redirect the user to login page if user is not logged in
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

export default DataOnlyEsimDetailPage;
