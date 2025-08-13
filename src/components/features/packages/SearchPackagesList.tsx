"use client";

import {
  getTopDestinations,
  searchPackagesList,
} from "@/services/packages/dataOnlyPackages";
import { useQuery } from "@tanstack/react-query";
import CountryRegionSearch from "./CountryRegionSearch";
import { useEffect, useState } from "react";

function SearchPackagesList() {
  const [isClient, setIsClient] = useState(false);

  const { data: packagesList, isLoading: isListLoading } = useQuery({
    queryKey: ["search-packages-list"],
    queryFn: searchPackagesList,
    staleTime: Infinity,
    enabled: isClient,
  });

  const { data: topDestinations, isLoading: isDestinationsLoading } = useQuery({
    queryKey: ["top-destinations"],
    queryFn: getTopDestinations,
    staleTime: Infinity,
    enabled: isClient,
  });

  const isDataLoading = isListLoading || isDestinationsLoading;

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <CountryRegionSearch
      packagesList={packagesList!}
      topDesinations={topDestinations!}
      isDataLoading={isDataLoading}
      searchInputStyle="!rounded-pill"
    />
  );
}

export default SearchPackagesList;
