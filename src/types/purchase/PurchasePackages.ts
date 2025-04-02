import { CartState } from "@/redux/features/cartSlice";

export interface PurchasePackages {
  status: boolean;
  message: string;
  errors?: string[];
  refill?: string;
}

export interface PurchasePackagesInputs {
  cartItems: CartState[];
  promoCode?: string | null;
  zip_code?: string;
  imei?: string;
}

export interface PurchasePackagesAsGuestInputs {
  cartItems: CartState[];
  promoCode?: string | null;
  zip_code?: string;
  imei?: string;
  redirect_url: string;
  name?: string;
  email?: string;
}

export interface PurchasePackagesAsGuest {
  status: boolean;
  message: string;
  payment_intent: string;
  access_token: string;
}
