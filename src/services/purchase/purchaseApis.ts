import {
  globalErrorHandler,
  globalHttpErrorHandler,
  globalResponseHandler,
} from "@/helpers/globalResponseHandler";
import { baseUrl } from "@/lib/fetch/apiSetup";
import { ApplyPromoCode } from "@/types/purchase/ApplyPromoCode";
import { MyEsims } from "@/types/purchase/MyEsims";
import { OrderHistory } from "@/types/purchase/OrderHistory";
import { LatestPurchase } from "@/types/purchase/PurchaseGTMEvent";
import {
  PurchasePackages,
  PurchasePackagesAsGuest,
  PurchasePackagesAsGuestInputs,
  PurchasePackagesInputs,
} from "@/types/purchase/PurchasePackages";
import { ShowDiscountTimer } from "@/types/purchase/ShowDiscountTimer";
import { SimRelatedPackages } from "@/types/purchase/SimRelatedPackages";
import { DataVoiceSimUsage, SimUsage } from "@/types/purchase/SimUsage";
import {
  WalletRefill,
  WalletRefillInputs,
  WalletRefresh,
} from "@/types/purchase/WalletRefill";
import Cookies from "js-cookie";

export async function getOrderHistory() {
  try {
    const token = Cookies.get("token");
    const res = await fetch(`${baseUrl}/user/order`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(globalHttpErrorHandler(res));
    }

    const data: OrderHistory = await res.json();

    if (!data.status) {
      throw new Error(globalResponseHandler(data, res.status));
    }

    return data.data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

export async function getDataOnlySims() {
  try {
    const token = Cookies.get("token");
    const res = await fetch(`${baseUrl}/my-sims`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(globalHttpErrorHandler(res));
    }

    const data: MyEsims = await res.json();

    if (!data.status) {
      throw new Error(globalResponseHandler(data, res.status));
    }

    return data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

export async function getDataVoiceSims() {
  try {
    const token = Cookies.get("token");

    const res = await fetch(`${baseUrl}/my-sims`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(globalHttpErrorHandler(res));
    }

    const data: MyEsims = await res.json();

    if (!data.status) {
      throw new Error(globalResponseHandler(data, res.status));
    }

    return data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

export async function walletRefill({
  amount,
  landing_redirect_url,
}: WalletRefillInputs) {
  try {
    const token = Cookies.get("token");

    const params = new URLSearchParams({
      amount,
      landing_redirect_url,
    });
    const res = await fetch(`${baseUrl}/user/can-pay?${params.toString()}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(globalHttpErrorHandler(res));
    }

    const data: WalletRefill = await res.json();

    return data.data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

export async function walletRefresh(tid: string | null) {
  try {
    const token = Cookies.get("token");

    const res = await fetch(`${baseUrl}/user/refill/refresh/${tid}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(globalHttpErrorHandler(res));
    }

    const data: WalletRefresh = await res.json();

    if (!data.status) {
      throw new Error(globalResponseHandler(data, res.status));
    }

    return data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

export async function getSimRelatedPackages(simId: string) {
  try {
    const token = Cookies.get("token");

    const res = await fetch(`${baseUrl}/my-sim/${simId}/related-packages`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(globalHttpErrorHandler(res));
    }

    const data: SimRelatedPackages = await res.json();

    if (!data.status) {
      throw new Error(globalResponseHandler(data, res.status));
    }

    return data.data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

export async function getDataOnlySimUsage(simId: string) {
  try {
    const token = Cookies.get("token");

    const res = await fetch(`${baseUrl}/my-sim/${simId}/usage`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(globalHttpErrorHandler(res));
    }

    const data: SimUsage = await res.json();

    if (!data.status) {
      throw new Error(globalResponseHandler(data, res.status));
    }

    return data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

export async function getDataVoiceSimUsage(simId: string) {
  try {
    const token = Cookies.get("token");

    const res = await fetch(`${baseUrl}/my-sim/data-voice/${simId}/usage`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(globalHttpErrorHandler(res));
    }

    const data: DataVoiceSimUsage = await res.json();

    if (!data.status) {
      throw new Error(globalResponseHandler(data, res.status));
    }

    return data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

// other

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

    const token = Cookies.get("token");

    const res = await fetch(`${baseUrl}/package-purchase`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        bundles: bundlesToPurchase,
        promo_code: promoCode ? promoCode : null,
        imei,
        zipcode: zip_code,
        zip_code,
        redirect_url,
      }),
    });

    if (!res.ok) {
      throw new Error(globalHttpErrorHandler(res));
    }

    const data: PurchasePackages = await res.json();

    if (!data.status) {
      throw new Error(globalResponseHandler(data, res.status));
    }

    return data;
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

    const token = Cookies.get("token");

    const res = await fetch(`${baseUrl}/checkout-summary`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        bundles: bundlesToPurchase,
        promo_code: promoCode ? promoCode : null,
      }),
    });

    if (!res.ok) {
      throw new Error(globalHttpErrorHandler(res));
    }

    const data: ApplyPromoCode = await res.json();

    if (!data.status) {
      throw new Error(globalResponseHandler(data, res.status));
    }

    data.data.promo_code = promoCode;

    return data;
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

    const res = await fetch(`${baseUrl}/guest-checkout`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        bundles: bundlesToPurchase,
        promo_code: promoCode ? promoCode : null,
      }),
    });

    if (!res.ok) {
      throw new Error(globalHttpErrorHandler(res));
    }

    const data: ApplyPromoCode = await res.json();

    if (!data.status) {
      throw new Error(globalResponseHandler(data, res.status));
    }

    data.data.promo_code = promoCode;

    return data;
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

    const res = await fetch(`${baseUrl}/guest-checkout-session`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
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
      }),
    });

    if (!res.ok) {
      throw new Error(globalHttpErrorHandler(res));
    }

    const data: PurchasePackagesAsGuest = await res.json();

    if (!data.status) {
      throw new Error(globalResponseHandler(data, res.status));
    }

    return data;
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
    const res = await fetch(`${baseUrl}/redeem/${iccid}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "g-recaptcha-response": gCaptchaToken,
      }),
    });

    if (!res.ok) {
      throw new Error(globalHttpErrorHandler(res));
    }

    const data: SimUsage = await res.json();

    if (!data.status) {
      throw new Error(globalResponseHandler(data, res.status));
    }

    return data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

export async function showDiscountTimer() {
  try {
    const token = Cookies.get("token");

    const res = await fetch(`${baseUrl}/user/show-discount-timer`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(globalHttpErrorHandler(res));
    }

    const data: ShowDiscountTimer = await res.json();

    if (!data.status) {
      throw new Error(globalResponseHandler(data, res.status));
    }

    return data.data.show_discount_timer;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}

export async function getLatestPurchaseForGTM() {
  try {
    const token = Cookies.get("token");

    const res = await fetch(`${baseUrl}/latest-purchase-for-tag-manager`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(globalHttpErrorHandler(res));
    }

    const data: LatestPurchase = await res.json();

    if (!data.status) {
      throw new Error(globalResponseHandler(data, res.status));
    }

    return data.data;
  } catch (error) {
    throw new Error(globalErrorHandler(error));
  }
}
