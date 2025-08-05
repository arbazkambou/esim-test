"use client";
import { Check, ChevronsUpDown, X } from "lucide-react";
import * as React from "react";

import { Badge } from "@/components/ui/badge";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { FormControl } from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { getCountriesThatHavePackages } from "@/services/packages/dataOnlyPackages";
import { useQuery } from "@tanstack/react-query";

interface PropsType {
  selectedCountriesId: string[];
  setSelectedCountriesId: React.Dispatch<React.SetStateAction<string[]>>;
}

export function MultiSelectCountry({
  selectedCountriesId,
  setSelectedCountriesId,
}: PropsType) {
  const [open, setOpen] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");

  const { data: countries = [] } = useQuery({
    queryKey: ["countries"],
    queryFn: getCountriesThatHavePackages,
  });

  const toggleCountry = (countryId: string) => {
    setSelectedCountriesId((prev) =>
      prev.includes(countryId)
        ? prev.filter((id) => id !== countryId)
        : [...prev, countryId],
    );
  };

  const removeCountry = (countryId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setSelectedCountriesId((prev) => prev.filter((id) => id !== countryId));
  };

  const filteredCountries = React.useMemo(() => {
    return countries.filter((country) =>
      country.name.toLowerCase().includes(searchValue.toLowerCase()),
    );
  }, [countries, searchValue]);

  return (
    <div className="group relative">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <FormControl>
            <div
              className="flex h-14 w-full cursor-pointer flex-wrap items-center gap-2 overflow-auto rounded-md border-[1.5px] px-3 py-2 transition-all group-focus-within:border-primary"
              onClick={() => setOpen(true)}
              role="button"
              tabIndex={0}
            >
              {selectedCountriesId.length > 0 ? (
                selectedCountriesId.map((countryId) => {
                  const country = countries.find(
                    (country) => String(country.id) === countryId,
                  );
                  return country ? (
                    <Badge
                      key={countryId}
                      className="flex items-center px-2 py-1"
                    >
                      {country.name}
                      <X
                        className="ml-1 h-3 w-3 cursor-pointer"
                        onClick={(e) => removeCountry(countryId, e)}
                      />
                    </Badge>
                  ) : null;
                })
              ) : (
                <span className="text-sm text-muted-foreground group-focus-within:text-primary">
                  Countries you will sell to...
                </span>
              )}
              <ChevronsUpDown className="ml-auto h-4 w-4 text-muted-foreground" />
            </div>
          </FormControl>
        </PopoverTrigger>

        <PopoverContent className="h-[240px] w-[300px] overflow-y-auto p-0">
          <Command>
            <CommandInput
              placeholder="Search country..."
              value={searchValue}
              onValueChange={setSearchValue}
            />
            <CommandList>
              <CommandEmpty>No country found.</CommandEmpty>
              <CommandGroup>
                {filteredCountries.map((country) => (
                  <CommandItem
                    key={String(country.id)}
                    value={country.name}
                    onSelect={() => toggleCountry(String(country.id))}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        selectedCountriesId.includes(String(country.id))
                          ? "opacity-100"
                          : "opacity-0",
                      )}
                    />
                    {country.name}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
