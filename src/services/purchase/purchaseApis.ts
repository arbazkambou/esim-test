import {
  globalErrorHandler,
  globalResponseHanlder,
} from "@/helpers/globalResponseHandler";
import { MyEsims } from "@/types/purchase/MyEsims";
import { OrderHistory } from "@/types/purchase/OrderHistory";
import { SimRelatedPackages } from "@/types/purchase/SimRelatedPackages";
import { DataVoiceSimUsage, SimUsage } from "@/types/purchase/SimUsage";
import {
  WalletRefill,
  WalletRefillInputs,
  WalletRefresh,
} from "@/types/purchase/WalletRefill";
import api from "../../lib/axios/apiSetup";
import {
  PurchasePackages,
  PurchasePackagesAsGuest,
  PurchasePackagesAsGuestInputs,
  PurchasePackagesInputs,
} from "@/types/purchase/PurchasePackages";
import { ApplyPromoCode } from "@/types/purchase/ApplyPromoCode";
import { ShowDiscountTimer } from "@/types/purchase/ShowDiscountTimer";
import { LatestPurchase } from "@/types/purchase/PurchaseGTMEvent";

export async function getOrderHistory() {
  try {
    const response = await api.get<OrderHistory>("/user/order");

    if (!response.data.status) {
      throw new Error(globalResponseHanlder(response));
    }

    return response.data.data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

export async function getDataOnlySims() {
  try {
    const response = await api.get<MyEsims>("/my-sims", {
      params: {
        type: "data",
      },
    });

    if (!response.data.status) {
      throw new Error(globalResponseHanlder(response));
    }
    return response.data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

export async function getDataVoiceSims() {
  try {
    const response = await api.get<MyEsims>("/my-sims", {
      params: { type: "voice" },
    });

    if (!response.data.status) {
      throw new Error(globalResponseHanlder(response));
    }

    return response.data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

export async function walletRefill({
  amount,
  landing_redirect_url,
}: WalletRefillInputs) {
  try {
    const response = await api.get<WalletRefill>("/user/can-pay", {
      params: { amount, landing_redirect_url },
    });

    if (!response.data.data.verified || !response.data.status) {
      if (response.data.message) {
        throw new Error(response.data.message);
      } else {
        throw new Error("Something went wrong during wallet refill");
      }
    }
    return response.data.data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

export async function walletRefresh(tid: string | null) {
  try {
    const response = await api.get<WalletRefresh>(
      `/user/refill/refresh/${tid}`,
    );

    if (!response.data.status) {
      throw new Error(globalResponseHanlder(response));
    }

    return response.data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

export async function getSimRelatedPackages(simId: string) {
  try {
    const response = await api.get<SimRelatedPackages>(
      `/my-sim/${simId}/related-packages`,
    );

    if (!response.data.status) {
      throw new Error(globalResponseHanlder(response));
    }
    return response.data.data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

export async function getDataOnlySimUsage(simId: string) {
  try {
    const response = await api.get<SimUsage>(`/my-sim/${simId}/usage`);

    if (!response.data.status) {
      throw new Error(globalResponseHanlder(response));
    }

    return response.data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

export async function getDataVoiceSimUsage(simId: string) {
  try {
    const response = await api.get<DataVoiceSimUsage>(
      `/my-sim/data-voice/${simId}/usage`,
    );

    if (!response.data.status) {
      throw new Error(globalResponseHanlder(response));
    }

    return response.data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

export async function purchasePackages({
  cartItems,
  promoCode,
  imei,
  zip_code,
  redirect_url,
}: PurchasePackagesInputs) {
  try {
    const bundlesToPurchase = cartItems.map((item) => ({
      id: item.id,
      quantity: item.quantity,
      recurring: item.recurring,
    }));

    const response = await api.post<PurchasePackages>("/package-purchase", {
      bundles: bundlesToPurchase,
      promo_code: promoCode ? promoCode : null,
      imei,
      zipcode: zip_code,
      zip_code,
      redirect_url,
    });

    if (!response.data.status) {
      throw new Error(globalResponseHanlder(response));
    }

    return response.data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

export async function applyPromoCode({
  cartItems,
  promoCode,
}: PurchasePackagesInputs) {
  try {
    const bundlesToPurchase = cartItems.map((item) => ({
      id: item.id,
      quantity: item.quantity,
    }));

    const response = await api.post<ApplyPromoCode>("/checkout-summary", {
      bundles: bundlesToPurchase,
      promo_code: promoCode ? promoCode : null,
    });

    if (!response.data.status) {
      throw new Error(globalResponseHanlder(response));
    }

    response.data.data.promo_code = promoCode;

    return response.data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

export async function applyPromoCodeAsGuest({
  cartItems,
  promoCode,
}: PurchasePackagesInputs) {
  try {
    const bundlesToPurchase = cartItems.map((item) => ({
      id: item.id,
      quantity: item.quantity,
    }));

    const response = await api.post<ApplyPromoCode>("/guest-checkout", {
      bundles: bundlesToPurchase,
      promo_code: promoCode ? promoCode : null,
    });

    if (!response.data.status) {
      throw new Error(globalResponseHanlder(response));
    }

    response.data.data.promo_code = promoCode;

    return response.data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

export async function purchasePackagesAsGuest({
  cartItems,
  promoCode,
  imei,
  zip_code,
  redirect_url,
  email,
  name,
}: PurchasePackagesAsGuestInputs) {
  try {
    const bundlesToPurchase = cartItems.map((item) => ({
      id: item.id,
      quantity: item.quantity,
      recurring: item.recurring,
    }));

    const response = await api.post<PurchasePackagesAsGuest>(
      "/guest-checkout-session",
      {
        bundles: bundlesToPurchase,
        promo_code: promoCode ? promoCode : null,
        email,
        name,
        imei,
        zipcode: zip_code,
        zip_code,
        type: "api",
        guest: "guest",
        redirect_url,
      },
    );

    if (!response.data.status) {
      throw new Error(globalResponseHanlder(response));
    }

    return response.data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

export type RedeemSimInputs = {
  iccid: string;
  gCaptchaToken: string;
};

export async function redeemSimUsage({
  iccid,
  gCaptchaToken,
}: RedeemSimInputs) {
  try {
    const response = await api.post<SimUsage>(`/redeem/${iccid}`, {
      "g-recaptcha-response": gCaptchaToken,
    });

    if (!response.data.status) {
      throw new Error(globalResponseHanlder(response));
    }

    return response.data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

export async function showDiscountTimer() {
  try {
    const response = await api.get<ShowDiscountTimer>(
      `/user/show-discount-timer`,
    );

    if (!response.data.status) {
      throw new Error(globalResponseHanlder(response));
    }

    return response.data.data.show_discount_timer;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

export async function getLatestPurchaseForGTM() {
  try {
    const response = await api.get<LatestPurchase>(
      "/latest-purchase-for-tag-manager",
    );

    if (!response.data.status) {
      throw new Error(globalResponseHanlder(response));
    }

    return response.data.data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}
