import { CartState } from "@/redux/slices/cartSlice";

export interface PromoCodeResponse {
  balance: number;
  from_wallet: number;
  from_card: number;
  total_amount: number;
  original_amount: number;
  discount: number;
  discount_amount: string;
  promo_applied: boolean;
  promo_applied_message: string;
  promo_code: string | undefined | null;
}

export interface ApplyPromoCode {
  status: boolean;
  data: PromoCodeResponse;
  message: string;
}

export interface ApplyPromoCodeInputs {
  cartItems: CartState[];
  promoCode?: string | null;
}
