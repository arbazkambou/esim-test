"use client";

import { cleanString } from "@/helpers/cleanString";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { useState } from "react";
import { Input } from "../../ui/input";

interface PropsType {
  searchInputStyle?: string;
  isDataLoading: boolean;
}

function CountrySearchFallback({ searchInputStyle, isDataLoading }: PropsType) {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  function handleSearchQuery(e: React.ChangeEvent<HTMLInputElement>) {
    const query = cleanString(e.target.value);
    setSearchQuery(query);
    if (query) {
      setShowSuggestions(true);
    }
  }

  return (
    <div className="relative z-50 w-full scale-100 transition duration-500">
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
      {showSuggestions && searchQuery && (
        <div className="barMini absolute top-[3.4rem] flex max-h-[320px] w-full flex-col overflow-auto rounded-md bg-background py-4 ps-3 shadow-2xl">
          {isDataLoading && <p className="text-sm">Searching...</p>}
        </div>
      )}
    </div>
  );
}

export default CountrySearchFallback;
