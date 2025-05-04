"use client";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { FormControl, FormMessage } from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import * as React from "react";

interface LanguageSelectProps {
  language: string;
  setLanguage: (value: string) => void;
  languages: string[];
  isSendingData: boolean;
  languageError?: string;
}

export function LanguageSelect({
  language,
  setLanguage,
  languages,
  isSendingData,
  languageError,
}: LanguageSelectProps) {
  const [open, setOpen] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");

  const filteredLanguages = React.useMemo(() => {
    return languages.filter((lang) =>
      lang.toLowerCase().includes(searchValue.toLowerCase()),
    );
  }, [languages, searchValue]);

  return (
    <div className="group relative">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <FormControl>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className={cn(
                "h-14 w-full justify-between rounded-md text-sm group-focus-within:border-primary group-focus-within:text-primary hover:bg-background",
                !language && "text-muted-foreground",
              )}
              disabled={isSendingData}
            >
              {language || "Which language do you speak?"}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </FormControl>
        </PopoverTrigger>

        <PopoverContent className="w-[340px] p-0">
          <Command>
            <CommandInput
              placeholder="Search language..."
              value={searchValue}
              onValueChange={setSearchValue}
            />
            <CommandList>
              <CommandEmpty>No language found.</CommandEmpty>
              <CommandGroup>
                {filteredLanguages.map((lang, index) => (
                  <CommandItem
                    key={index}
                    value={lang}
                    onSelect={() => {
                      setLanguage(lang);
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        language === lang ? "opacity-100" : "opacity-0",
                      )}
                    />
                    {lang}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      {languageError && (
        <FormMessage className="text-destructive">{languageError}</FormMessage>
      )}
    </div>
  );
}
