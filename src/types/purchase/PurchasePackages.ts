import { CartState } from "@/redux/slices/cartSlice";

export interface PurchasePackages {
  status: boolean;
  message: string;
  errors?: string[];
  // refill?: string;
  payment_intent: string;
}

export interface PurchasePackagesInputs {
  cartItems: CartState[];
  promoCode?: string | null;
  zip_code?: string;
  imei?: string;
  redirect_url?: string;
  reqIdConectia?: string | undefined;
}

export interface PurchasePackagesAsGuestInputs {
  cartItems: CartState[];
  promoCode?: string | null;
  zip_code?: string;
  imei?: string;
  redirect_url: string;
  name?: string;
  email?: string;
  reqIdConectia?: string | undefined;
}

export interface PurchasePackagesAsGuest {
  status: boolean;
  message: string;
  payment_intent: string;
  access_token: string;
  account: boolean;
}
