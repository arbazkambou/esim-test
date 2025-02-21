import { Country } from "@/helpers/generateSiteMap";
import { Continent } from "../data-only/CountriesThatHaveDataOnlyPackages";

export interface DataVoiceCountry extends Country {
  upto: string;
}

export interface DataVoiceContinent extends Continent {
  upto: string;
}

export interface CountriesThatHaveDataVoicePackages {
  status: boolean;
  data: DataVoiceCountry[];
}

export interface ContinentsThatHaveDataVoicePackages {
  status: boolean;
  data: DataVoiceContinent[];
}
