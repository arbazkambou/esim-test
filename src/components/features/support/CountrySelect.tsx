"use client";

import { Check, ChevronsUpDown } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
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
              {selectedCountry
                ? selectedCountry.name
                : "Select your country..."}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50 group-focus-within:text-primary" />
            </Button>
          </FormControl>
        </PopoverTrigger>

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
