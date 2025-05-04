import { Country } from "@/helpers/generateSiteMap";

export interface CountriesThatHavePackagesResponeType {
  status: boolean;
  data: Country[];
}

export interface Continent {
  id: number;
  name: string;
  code?: string;
  created_at: string | null;
  updated_at: string;
  image_url: string;
  slug: string;
  rating: number;
  review: number;
  total_supported_countries: number;
  supported_countries_images: string[];
  href: string;
}

export interface GetContinentsResponse {
  status: string;
  data: Continent[];
}
