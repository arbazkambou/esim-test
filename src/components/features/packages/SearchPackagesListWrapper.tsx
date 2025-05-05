"use client";

import dynamic from "next/dynamic";
import { SearchPackagesListReturn } from "@/types/packages/data-only/SearchPackagesList";
import { TopDestination } from "@/types/packages/data-only/TopDestinations";
import CountrySearchFallback from "@/components/my-ui/fallbacks/CountrySearchFallback";

const CountryRegionSearch = dynamic(() => import("./CountryRegionSearch"), {
  ssr: false,
  loading: () => (
    <CountrySearchFallback
      isDataLoading={true}
      searchInputStyle="!rounded-pill"
    />
  ),
});

interface Props {
  packagesList: SearchPackagesListReturn;
  topDestinations: TopDestination[];
}

export default function SearchPackagesListWrapper({
  packagesList,
  topDestinations,
}: Props) {
  return (
    <CountryRegionSearch
      packagesList={packagesList}
      topDesinations={topDestinations}
      isDataLoading={false}
      searchInputStyle="!rounded-pill"
    />
  );
}
