"use client";

import globalImg from "@/_assets/svgs/globalMap.svg";
import { searchDropdownVariants } from "@/lib/animations";
import { cleanString } from "@/helpers/cleanString";
import { cn } from "@/lib/utils";
import { SearchPackagesListReturn } from "@/types/packages/data-only/SearchPackagesList";
import { AnimatePresence, motion } from "framer-motion";
import { Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Input } from "../../ui/input";
import CountryItem from "./CountryItem";
import { usePathname } from "next/navigation";
import { TopDestination } from "@/types/packages/data-only/TopDestinations";
import { isSearchQueryMatch } from "@/helpers/isSearchQueryMatch";
import { sendGTMEvent } from "@next/third-parties/google";

interface PropsType {
  searchInputStyle?: string;
  packagesList: SearchPackagesListReturn;
  isDataLoading: boolean;
  topDesinations: TopDestination[];
}

function CountryRegionSearch({
  searchInputStyle,
  packagesList,
  isDataLoading,
  topDesinations,
}: PropsType) {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pathName = usePathname();
  const dataVoiceLinks = [
    "/data-voice-sms/",
    "/data-voice-sms/regional/",
    "/international-esim/",
  ];

  const isDataVoicePage = dataVoiceLinks.includes(pathName);

  const { local, regional, global, local_voice, regional_voice, global_voice } =
    packagesList;

  let filteredPackagesList;

  if (searchQuery) {
    filteredPackagesList = {
      dataOnly: {
        local: local.filter((country) =>
          isSearchQueryMatch({ country, searchQuery }),
        ),
        regional: regional.filter((region) =>
          isSearchQueryMatch({ region, searchQuery }),
        ),
        global: {
          href: global.href,
          countries: global.countries.filter((country) =>
            isSearchQueryMatch({ country, searchQuery, isGlobal: true }),
          ),
        },
      },

      dataVoice: {
        local: local_voice.filter((country) =>
          isSearchQueryMatch({ country, searchQuery }),
        ),
        regional: regional_voice.filter((region) =>
          isSearchQueryMatch({ region, searchQuery }),
        ),
        global: {
          href: global_voice.href,
          countries: global_voice.countries.filter((country) =>
            isSearchQueryMatch({ country, searchQuery, isGlobal: true }),
          ),
        },
      },
    };
  }

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
    setSearchQuery(cleanString(e.target.value));
    if (query) {
      setShowSuggestions(true);
    }
  }

  useEffect(() => {
    if (!cleanString(searchQuery)) return;

    const timeout = setTimeout(() => {
      sendGTMEvent({
        event: "search",
        search_term: searchQuery,
      });
    }, 1000);

    return () => clearTimeout(timeout);
  }, [searchQuery]);

  let isPackages = false;
  let isDataOnlyPackages = false;
  let isDataVoicePackages = false;
  let isDataOnlyLocal = false;
  let isDataOnlyRegional = false;
  let isDataOnlyGlobal = false;
  let isDataVoiceLocal = false;
  let isDataVoiceRegional = false;
  let isDataVoiceGlobal = false;

  if (filteredPackagesList) {
    const { dataOnly, dataVoice } = filteredPackagesList;
    const { global, regional, local } = dataOnly;
    const {
      global: globalVoice,
      regional: regionalVoice,
      local: localVoice,
    } = dataVoice;

    isDataOnlyPackages =
      local.length > 0 || regional.length > 0 || global.countries.length > 0;

    isDataVoicePackages =
      localVoice.length > 0 ||
      regionalVoice.length > 0 ||
      globalVoice.countries.length > 0;

    if (isDataVoicePage) {
      isPackages = isDataVoicePackages;
    } else {
      isPackages = isDataOnlyPackages || isDataVoicePackages;
    }

    isDataOnlyLocal = isDataOnlyPackages && local.length > 0;

    isDataOnlyRegional = isDataOnlyPackages && regional.length > 0;

    isDataOnlyGlobal = isDataOnlyPackages && global.countries.length > 0;

    isDataVoiceLocal = isDataVoicePackages && localVoice.length > 0;

    isDataVoiceRegional = isDataOnlyPackages && regionalVoice.length > 0;

    isDataVoiceGlobal = isDataOnlyPackages && globalVoice.countries.length > 0;
  }

  return (
    <div
      ref={containerRef}
      className="relative z-50 w-full scale-100 transition duration-500"
    >
      {/* Search Input */}
      <Input
        placeholder="Enter your destination"
        className={cn("w-full shadow focus-within:shadow-xl", searchInputStyle)}
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
            exit={"exit"}
            className="barMini absolute top-[56px] flex max-h-[320px] w-full flex-col overflow-auto rounded-md bg-background py-4 ps-3 shadow-2xl"
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
            ) : isPackages ? (
              <div className="flex flex-col gap-4">
                {!isDataVoicePage && isDataOnlyPackages && (
                  <div>
                    <p className="mb-2 ps-2 font-montserrat text-[18px] font-semibold leading-none text-primary">
                      Data Only
                    </p>

                    {isDataOnlyLocal && (
                      <div>
                        {/* <p className="p-2 text-sm font-500 text-muted-foreground">
                          Countries
                        </p> */}
                        {filteredPackagesList?.dataOnly.local.map(
                          (item, index) => (
                            <CountryItem
                              countryName={item.name}
                              image_url={item.image_url}
                              index={index}
                              href={item.href}
                              key={index}
                            />
                          ),
                        )}
                      </div>
                    )}

                    {isDataOnlyRegional && (
                      <div>
                        <p className="p-2 text-sm font-500 text-muted-foreground">
                          Regional
                        </p>
                        {filteredPackagesList?.dataOnly.regional.map(
                          (item, index) => (
                            <CountryItem
                              countryName={item.name}
                              image_url={item.image_url}
                              index={index}
                              href={item.href}
                              key={index}
                            />
                          ),
                        )}
                      </div>
                    )}

                    {isDataOnlyGlobal && (
                      <div>
                        <p className="p-2 text-sm font-500 text-muted-foreground">
                          Global
                        </p>
                        <CountryItem
                          countryName={"Global"}
                          image_url={globalImg}
                          index={1}
                          href={"/global/"}
                        />
                      </div>
                    )}
                  </div>
                )}

                {isDataVoicePackages && (
                  <div>
                    <p className="mb-2 ps-2 font-montserrat text-[18px] font-semibold leading-none text-primary">
                      Data / Voice / SMS
                    </p>

                    {isDataVoiceLocal && (
                      <div>
                        {/* <p className="p-2 text-sm font-500 text-muted-foreground">
                          Countries
                        </p> */}
                        {filteredPackagesList?.dataVoice.local.map(
                          (item, index) => (
                            <CountryItem
                              countryName={item.name}
                              image_url={item.image_url}
                              index={index}
                              href={item.href}
                              key={index}
                            />
                          ),
                        )}
                      </div>
                    )}

                    {isDataVoiceRegional && (
                      <div>
                        <p className="p-2 text-sm font-500 text-muted-foreground">
                          Regional
                        </p>
                        {filteredPackagesList?.dataVoice.regional.map(
                          (item, index) => (
                            <CountryItem
                              countryName={item.name}
                              image_url={item.image_url}
                              index={index}
                              href={item.href}
                              key={index}
                            />
                          ),
                        )}
                      </div>
                    )}

                    {isDataVoiceGlobal && (
                      <div>
                        <p className="p-2 text-sm font-500 text-muted-foreground">
                          Global
                        </p>
                        <CountryItem
                          countryName={"Global"}
                          image_url={globalImg}
                          index={0}
                          href={"/international-esim/"}
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <div>
                <p className="ps-2 text-sm">
                  No match found — check out our top destinations!
                </p>

                <p className="my-2 ps-2 font-montserrat text-[18px] font-semibold leading-none text-primary">
                  Top Destinations
                </p>
                {topDesinations?.map((item, index) => (
                  <CountryItem
                    countryName={item.name}
                    image_url={item.image_url}
                    index={index}
                    href={`/esim/${item.slug}/`}
                    key={index}
                  />
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default CountryRegionSearch;
