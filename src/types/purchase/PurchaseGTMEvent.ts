export interface EcommerceItem {
  item_id: string;
  item_name: string;
  item_category: string;
  price: number;
  quantity: number;
  currency: string;
}

export interface EcommerceData {
  transaction_id: number;
  affiliation: string;
  value: number;
  tax: number;
  email: string;
  shipping: number;
  currency: string;
  items: EcommerceItem[];
}

export interface PurchaseData {
  event: "purchase";
  ecommerce: EcommerceData;
}

export interface SurveyOption {
  merchant_id: number;
  order_id: number;
  email: string;
  delivery_country: string;
  estimated_delivery_date: string;
}

export interface LatestPurchase {
  status: boolean;
  data: {
    purchase_data: PurchaseData;
    survey_option: SurveyOption;
  };
}
