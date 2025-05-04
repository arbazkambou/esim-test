import { Region } from "@/types/packages/data-only/SearchPackagesList";
import { cleanString } from "./cleanString";
import { Country } from "./generateSiteMap";

interface PropsType {
  country?: Country;
  region?: Region;
  searchQuery: string;
  isGlobal?: boolean;
}

export function isSearchQueryMatch({
  country,
  region,
  searchQuery,
  isGlobal,
}: PropsType): boolean {
  if (country) {
    if (isGlobal) {
      const res = ["global", "international"].some((item) =>
        cleanString(item).includes(searchQuery),
      );
      if (res) return true;
    }

    return (
      cleanString(country.name).includes(searchQuery) ||
      cleanString(country.code).includes(searchQuery) ||
      cleanString(
        country.local_state_code ? country.local_state_code : "",
      ).includes(searchQuery) ||
      cleanString(country.code_alpha3).includes(searchQuery)
    );
  }

  if (region) {
    const res = ["region", "regional"].some((item) =>
      cleanString(item).includes(cleanString(searchQuery)),
    );

    if (res) return true;

    return (
      cleanString(region.name).includes(searchQuery) ||
      region.countries.some((country) =>
        isSearchQueryMatch({ country, searchQuery }),
      )
    );
  }

  return false;
}
