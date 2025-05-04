import { Country } from "@/helpers/generateSiteMap";
import { Continent } from "./CountriesThatHaveDataOnlyPackages";

export interface Region extends Continent {
  countries: Country[];
}

interface GlobalVoice {
  id: number;
  name: string;
  image_url: string;
  code: string;
  countries: Country[];
}

export interface PackagesList {
  local: Country[];
  regional: Region[];
  global: Country[];
  local_voice: Country[];
  regional_voice: Region[];
  global_voice: GlobalVoice[];
}

export interface Global {
  href: string;
  countries: Country[];
}

export interface SearchPackagesList {
  status: boolean;
  data: PackagesList;
}

export interface SearchPackagesListReturn {
  local: Country[];
  regional: Region[];
  global: Global;
  local_voice: Country[];
  regional_voice: Region[];
  global_voice: Global;
}
