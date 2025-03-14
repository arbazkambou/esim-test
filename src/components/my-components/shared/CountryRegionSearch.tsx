"use client";

import { cleanString } from "@/helpers/cleanString";
import { Country } from "@/helpers/generateSiteMap";
import {
  getContinentsThatHavePackages,
  getCountriesThatHavePackages,
} from "@/services/packages/dataOnlyPackages";
import {
  getContinentsThatHaveDataVoicePackages,
  getCountriesThatHaveDataVoicePackages,
} from "@/services/packages/dataVoicePackages";
import { Continent } from "@/types/packages/data-only/CountriesThatHaveDataOnlyPackages";
import { useQuery } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { Input } from "../../ui/input";
import {
  searchDropdownVariants,
  searchResultVariants,
} from "@/animations/animations";

function CountryRegionSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const pathName = usePathname();

  const isDataVoice = [
    "/data-voice-sms/",
    "/data-voice-sms/regional/",
    "/international-esim/",
  ].includes(pathName);

  const { data: countries = [], isLoading: isCountriesLoading } = useQuery({
    queryKey: ["countries"],
    queryFn: getCountriesThatHavePackages,
    enabled: !isDataVoice,
  });

  const { data: continents = [], isLoading: isContinentsLoading } = useQuery({
    queryKey: ["continents"],
    queryFn: getContinentsThatHavePackages,
    enabled: !isDataVoice,
  });

  const {
    data: dataVoiceCountries = [],
    isLoading: isDataVoiceCountriesLoading,
  } = useQuery({
    queryKey: ["data-voice-countries"],
    queryFn: getCountriesThatHaveDataVoicePackages,
    enabled: isDataVoice,
  });

  const {
    data: dataVoiceContinents = [],
    isLoading: isDataVoiceContinentsLoading,
  } = useQuery({
    queryKey: ["data-voice-continents"],
    queryFn: getContinentsThatHaveDataVoicePackages,
    enabled: isDataVoice,
  });

  const allCountriesAndRegions = useMemo(() => {
    return [
      ...(isDataVoice ? [] : countries),
      ...(isDataVoice ? [] : continents),
      ...(isDataVoice ? dataVoiceCountries : []),
      ...(isDataVoice ? dataVoiceContinents : []),
    ];
  }, [
    countries,
    continents,
    dataVoiceCountries,
    dataVoiceContinents,
    isDataVoice,
  ]);

  const filteredCountriesAndRegions: (Country | Continent)[] = useMemo(() => {
    if (searchQuery && !isCountriesLoading && !isContinentsLoading) {
      return allCountriesAndRegions.filter((item) =>
        cleanString(item.name).includes(searchQuery),
      );
    }
    return [...countries, ...continents];
  }, [
    searchQuery,
    isCountriesLoading,
    isContinentsLoading,
    allCountriesAndRegions,
    countries,
    continents,
  ]);

  const isDataLoading =
    isCountriesLoading ||
    isContinentsLoading ||
    isDataVoiceCountriesLoading ||
    isDataVoiceContinentsLoading;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleSearchQuery(e: React.ChangeEvent<HTMLInputElement>) {
    const query = cleanString(e.target.value);
    setSearchQuery(query);
    if (query) {
      setShowSuggestions(true);
    }
  }

  return (
    <div
      ref={containerRef}
      className="relative z-50 w-full scale-100 transition duration-500"
    >
      {/* Search Input */}
      <Input
        placeholder="Enter your destination"
        className="w-full shadow focus-within:shadow-xl"
        onChange={handleSearchQuery}
        value={searchQuery}
        onFocus={() => setShowSuggestions(true)}
      />
      <Search className="absolute right-3 top-1/2 -translate-y-1/2 transform text-primary" />

      {/* Search Dropdown with AnimatePresence */}
      <AnimatePresence>
        {showSuggestions && searchQuery && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={searchDropdownVariants}
            className="absolute top-[3.4rem] flex max-h-[260px] w-full flex-col overflow-auto rounded-md bg-background p-4 shadow-2xl"
          >
            {isDataLoading ? (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-sm"
              >
                Searching...
              </motion.p>
            ) : filteredCountriesAndRegions.length > 0 ? (
              filteredCountriesAndRegions.map((item, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                  variants={searchResultVariants}
                >
                  <Link
                    className="flex items-center gap-3 rounded-full p-2 transition hover:bg-secondary"
                    href={item.href}
                  >
                    <div className="relative h-[20px] w-[30px]">
                      <Image
                        src={item.image_url}
                        alt={`${item.name} Packages`}
                        className="rounded object-cover shadow-lg"
                        fill
                      />
                    </div>
                    <p className="text-sm">{item.name}</p>
                  </Link>
                </motion.div>
              ))
            ) : (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-sm"
              >
                No matching countries. Try another search.
              </motion.p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default CountryRegionSearch;
