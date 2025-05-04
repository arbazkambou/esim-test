export interface distributorPartnerInputs {
  business_address: string;
  business_name: string;
  countries_to_sell: string[];
  country_id: string;
  email: string;
  expected_clients: string;
  expected_sales: string;
  "g-recaptcha-response": string;
  how_to_sell: string;
  language: string;
  message: string;
  name: string;
  password: string;
  phone_number: string;
  website: string;
  website_url?: string;
  whatsapp_number: string;
}

export interface DistributorPartnerResponse {
  status: boolean;
  message: string;
  errors: string[];
}
