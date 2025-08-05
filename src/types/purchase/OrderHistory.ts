export interface Order {
  id: string;
  user_id: number;
  source: string;
  source_id: string;
  description: string;
  source_type: string;
  amount: number;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  platform: string | null;
  version: string | null;
  affiliate_promo_code_id: string | null;
  affiliate_id: string | null;
  transaction_type: string | null;
}

export interface OrderHistory {
  status: boolean;
  data: Order[];
}
