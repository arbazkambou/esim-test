export interface CountryPackagesRespone {
  status: boolean;
  data: PackagesData;
}

export interface PackagesData {
  data: CountryInfoAndPackages;
  meta_title: string | null;
  meta_description: string | null;
  meta_keywords: string | null;
  page_description: string | null;
  page_features: string | null;
  // page_compatibility: string | null;
  page_technical_specs: string | null;
  scriptData: ScriptData;
  related_countries: string[] | null;
}
export interface CountryInfoAndPackages {
  // id: number;
  // continent_id: number;
  name: string;
  // full_name: string;
  // capital: string;
  // code: string;
  // code_alpha3: string;
  // code_numeric: string;
  // emoji: string;
  // has_division: number;
  // currency_code: string;
  // currency_name: string;
  // tld: string;
  // callingcode: string;
  created_at: string | null;
  updated_at: string | null;
  // priority: number;
  // vonage_number_supported: number;
  cover_image: string | null;
  // gradient_from: string;
  // gradient_to: string;
  slug?: string;
  // rating: number;
  // review: number;
  // local_state_code: string | null;
  image_url: string;
  packages: Package[];
}

export interface Package {
  /* --- Common fields (required) --- */
  id: string;
  external_id: string;
  name: string;
  data_quantity: number;
  data_unit: string;
  voice_quantity: number;
  voice_unit: string;
  sms_quantity: number;
  package_validity: number;
  package_validity_unit: string;
  activation_type: string;
  activation_type_description: string;
  activation_string: string;
  activation_time: number;
  activation_time_unit: string;
  activation_time_description: string;
  price: number;
  price_currency: string;
  data_allowance: string;
  voice_allowance: string;
  sms_allowance: string;
  available_from: string | null;
  available_to: string | null;
  can_be_activated_from: string | null;
  notes: string | null;
  countries: CountryInfo[];
  coverage: Coverage[];
  connectivity: string;
  highest_connectivity: string;
  unlimited: boolean;
  throttling: boolean;
  other_info: string | null;
  tether: boolean;
  original_price: number;
  discounted_price: number;
  discount_percentage: number;
  provider: string;
  unthrottle_data: string | null;
  throttle_speed: string | null;

  /* --- Non-common fields (optional) --- */
  // From GlobalPackage
  continents_count?: number | null;
  country_count?: number | null;

  // From CountryPackage
  package_type: string;
  roaming_countries?: CountryInfo[];
  promotion?: boolean;
  promotion_name?: string | null;
  can_renew?: boolean;
}

export interface CountryInfo {
  id: number;
  name: string;
  image_url: string;
  gradient_from: string | null;
  gradient_to: string | null;
  code: string;
  code_alpha3: string;
  local_state_code: string | null;
}

export interface Coverage {
  id: number;
  country_name: string;
  code: string;
  iso: string;
  country_image_url: string;
  network_name: string;
  network_code: string;
  supported_networks_coverages: string[];
  t_2G: boolean;
  th_3G: boolean;
  "for-4G": boolean;
  fiv_5G: boolean;
}

export interface ScriptData {
  "@context": string;
  "@type": string;
  name: string;
  image: string;
  description: string;
  sku: string;
  mpn: string;
  brand: Brand;
  review: Review;
  aggregateRating: AggregateRating;
  offers: Offers;
}

interface Brand {
  "@type": string;
  name: string;
}

interface Review {
  "@type": string;
  reviewRating: ReviewRating;
  author: Author;
}

interface ReviewRating {
  "@type": string;
  ratingValue: string;
  bestRating: string;
}

interface Author {
  "@type": string;
  name: string;
}

interface AggregateRating {
  "@type": string;
  ratingValue: string;
  reviewCount: string;
}

interface Offers {
  "@type": string;
  url: string;
  priceCurrency: string;
  itemCondition: string;
  availability: string;
  lowPrice: string;
  highPrice: string;
  offerCount: string;
  seller: Seller;
}

interface Seller {
  "@type": string;
  name: string;
  url: string;
  logo: string;
  slogan: string;
}
