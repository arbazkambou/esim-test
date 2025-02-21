"use client";

import { cleanString } from "@/helpers/cleanString";
import { Country } from "@/helpers/generateSiteMap";
import {
  getContinentsThatHavePackages,
  getCountriesThatHavePackages,
} from "@/services/packages/dataOnlyPackages";
import { Continent } from "@/types/packages/data-only/CountriesThatHaveDataOnlyPackages";
import { useQuery } from "@tanstack/react-query";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Card } from "../../ui/card";
import { Input } from "../../ui/input";

function CountryRegionSearch() {
  const [searchQuery, setSearchQuery] = useState("");

  let filteredCountriesAndRegions: (Country | Continent)[];

  const { data: countries = [], isLoading: isCountriesLoading } = useQuery({
    queryKey: ["countries"],
    queryFn: getCountriesThatHavePackages,
  });

  const { data: continents = [], isLoading: isContinentsLoading } = useQuery({
    queryKey: ["continents"],
    queryFn: getContinentsThatHavePackages,
  });

  const allCountriesAndRegions = [...(countries || []), ...(continents || [])];

  if (searchQuery && !isCountriesLoading && !isContinentsLoading) {
    filteredCountriesAndRegions = allCountriesAndRegions.filter((item) =>
      cleanString(item.name).includes(searchQuery),
    );
  } else {
    filteredCountriesAndRegions = [...countries!, ...continents!];
  }
  function handleSearchQuery(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchQuery(() => cleanString(e.target.value));
  }

  return (
    <div className={`relative w-full scale-100 transition duration-500`}>
      <Input
        placeholder="Enter your destination"
        className="w-full shadow focus-within:shadow-xl"
        onChange={handleSearchQuery}
        value={searchQuery}
      />
      <Search className="absolute right-3 top-1/2 -translate-y-1/2 transform text-primary" />

      {searchQuery && (
        <Card className="bar absolute top-[3.4rem] z-50 flex max-h-[260px] w-full flex-col overflow-auto bg-background p-4 shadow-2xl">
          {isCountriesLoading ? (
            <p className="text-sm">Searching...</p>
          ) : filteredCountriesAndRegions?.length! > 0 ? (
            filteredCountriesAndRegions?.map((item, index) => (
              <Link
                className="flex items-center gap-3 rounded-full p-2 hover:bg-secondary"
                href={
                  "total_supported_countries" in item
                    ? `/regional/${item.slug}`
                    : `/esim/${item.slug}`
                }
                key={index}
              >
                <Image
                  src={item.image_url}
                  height={25}
                  width={25}
                  alt={`${item.name} Packages`}
                  className="rounded shadow-lg"
                />
                <p className="text-sm">{item.name}</p>
              </Link>
            ))
          ) : (
            <p className="text-sm">
              No matching countries. Try another search.
            </p>
          )}
        </Card>
      )}
    </div>
  );
}

export default CountryRegionSearch;
