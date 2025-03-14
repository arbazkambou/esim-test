"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useQuery } from "@tanstack/react-query";
import { getCountriesThatHavePackages } from "@/services/packages/dataOnlyPackages";
import { FormControl, FormLabel } from "@/components/ui/form";

interface PropsType {
  countryId: string;
  setCountryId: React.Dispatch<React.SetStateAction<string>>;
}

export function CountrySelect({ countryId, setCountryId }: PropsType) {
  const [open, setOpen] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");

  const { data: countries = [] } = useQuery({
    queryKey: ["countries"],
    queryFn: getCountriesThatHavePackages,
  });

  const selectedCountry = countries.find(
    (country) => String(country.id) === countryId,
  );

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
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="text-muted- w-full justify-between text-muted-foreground group-focus-within:border-primary group-focus:text-primary hover:bg-background hover:text-muted-foreground"
            >
              {selectedCountry ? selectedCountry.name : "Select country..."}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50 group-focus-within:text-primary" />
            </Button>
          </FormControl>
        </PopoverTrigger>
        <FormLabel className="text-sm font-normal text-muted-foreground group-focus-within:text-primary">
          Country
        </FormLabel>
        <PopoverContent className="h-[240px] w-[340px] p-0">
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
                    key={country.id}
                    value={country.name}
                    onSelect={() => {
                      setCountryId(String(country.id));
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        countryId === String(country.id)
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
