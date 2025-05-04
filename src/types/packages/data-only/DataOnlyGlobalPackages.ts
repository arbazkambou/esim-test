import { Package, ScriptData } from "./DataOnlyCountryPackages";

export interface GlobalPackagesMeta {
  data: Package[];
  meta_title: string | null;
  meta_description: string | null;
  meta_keywords: string | null;
  page_description: string | null;
  page_features: string | null;
  page_technical_specs: string | null;
  scriptData: ScriptData;
  related_countries: string[] | null;
  global_coverage_image: string | null;
}
// export interface GlobalPackage {
//   id: string;
//   external_id: string;
//   name: string;
//   data_quantity: number;
//   data_unit: string;
//   voice_quantity: number;
//   voice_unit: string;
//   sms_quantity: number;
//   package_validity: number;
//   package_validity_unit: string;
//   activation_type: string;
//   activation_string: string;
//   activation_type_description: string;
//   activation_time: number;
//   activation_time_unit: string;
//   activation_time_description: string;
//   price: number;
//   price_currency: string;
//   countries: CountryInfo[];
//   coverage: Coverage[];
//   data_allowance: string;
//   voice_allowance: string;
//   sms_allowance: string;
//   available_from: string | null;
//   available_to: string | null;
//   can_be_activated_from: string | null;
//   notes: string | null;
//   continents_count: number | null;
//   country_count: number | null;
//   connectivity: string;
//   highest_connectivity: string;
//   unlimited: boolean;
//   throttling: boolean;
//   other_info: string | null;
//   tether: boolean;
//   original_price: number;
//   discounted_price: number;
//   discount_percentage: number;
//   provider: string;
// }

export interface GlobalPackageResponse {
  status: boolean;
  data: GlobalPackagesMeta;
}
