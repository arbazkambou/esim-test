import { CartState } from "@/redux/features/cartSlice";

export interface PromoCodeResponse {
  balance: number;
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
