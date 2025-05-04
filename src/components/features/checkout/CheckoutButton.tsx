import SpinnerMini from "@/components/my-ui/fallbacks/SpinnerMini";
import { Button } from "@/components/ui/button";
import { CartState } from "@/redux/slices/cartSlice";
import { PromoCodeResponse } from "@/types/purchase/ApplyPromoCode";
import {
  PurchasePackages,
  PurchasePackagesInputs,
} from "@/types/purchase/PurchasePackages";
import { UseMutateFunction } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { ArrowUpRight } from "lucide-react";

interface PropsType {
  isPurchasing: boolean;
  checkoutSummary: PromoCodeResponse;
  isCartHavePhonicoPackage: boolean;
  isCartHaveUltimatePackage: boolean;
  setShowZipImeiModel: React.Dispatch<React.SetStateAction<boolean>>;
  purchasePackagesApi: UseMutateFunction<
    PurchasePackages,
    Error,
    PurchasePackagesInputs,
    unknown
  >;
  promoCodeData: PromoCodeResponse | null;
  cartItems: CartState[];
}

function CheckoutButton({
  checkoutSummary,
  isPurchasing,
  isCartHavePhonicoPackage,
  isCartHaveUltimatePackage,
  purchasePackagesApi,
  setShowZipImeiModel,
  promoCodeData,
  cartItems,
}: PropsType) {
  const { from_card } = checkoutSummary;
  return (
    <Button
      className={`group flex w-full items-center gap-3 text-sm`}
      disabled={isPurchasing}
      onClick={() => {
        if (isCartHavePhonicoPackage || isCartHaveUltimatePackage) {
          setShowZipImeiModel(true);
          return;
        }

        const referral = Cookies.get("referral");
        let redirect_url = "";
        if (typeof window !== undefined) {
          redirect_url = `${window.location.origin}/sim-buy-thank-you/`;
        }

        purchasePackagesApi({
          cartItems: cartItems,
          redirect_url,
          promoCode: promoCodeData
            ? promoCodeData.promo_code
            : referral
              ? referral
              : null,
        });
      }}
    >
      {isPurchasing ? (
        <SpinnerMini />
      ) : (
        <>
          {from_card === 0 ? "Purchase Now" : "Go to Secure Checkout"}
          <ArrowUpRight
            className="transition group-hover:rotate-45 group-hover:text-foreground"
            size={20}
          />
        </>
      )}
    </Button>
  );
}

export default CheckoutButton;
