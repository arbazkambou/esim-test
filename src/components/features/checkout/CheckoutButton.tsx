import SpinnerMini from "@/components/my-ui/fallbacks/SpinnerMini";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/providers/AuthProvider";
import { useAppSelector } from "@/redux/hooks";
import { CartState, getTotalCartPrice } from "@/redux/slices/cartSlice";
import { PromoCodeResponse } from "@/types/purchase/ApplyPromoCode";
import {
  PurchasePackages,
  PurchasePackagesInputs,
} from "@/types/purchase/PurchasePackages";
import { sendGTMEvent } from "@/helpers/sendGTMEvent";
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

  const totalCartPrice = useAppSelector((state) =>
    getTotalCartPrice(state.cart),
  );

  const { user } = useAuth();

  function handleClick() {
    const items = cartItems.map((item) => ({
      item_id: item.id,
      email: user?.email,
      item_name: item.name,
      price: item.price,
      quantity: item.quantity,
      affiliation: "eSIM Card Web",
      item_brand: item.provider,
      item_category: item.package_type,
      coupon: promoCodeData ? promoCodeData.promo_code : "",
    }));

    sendGTMEvent({
      event: "add_payment_info",
      ecommerce: {
        payment_type: "Logged In User",
        currency: "USD",
        value: promoCodeData ? promoCodeData.total_amount : totalCartPrice,
        items: items,
      },
    });

    if (isCartHavePhonicoPackage || isCartHaveUltimatePackage) {
      setShowZipImeiModel(true);
      return;
    }

    const referral = Cookies.get("referral");

    let redirect_url = "";
    if (typeof window !== undefined) {
      redirect_url = `${window.location.origin}/sim-buy-thank-you/`;
    }

    const reqIdConectia = Cookies.get("reqIdConectia");

    purchasePackagesApi({
      cartItems: cartItems,
      redirect_url,
      promoCode: promoCodeData
        ? promoCodeData.promo_code
        : referral
          ? referral
          : null,
      reqIdConectia,
    });
  }

  return (
    <Button
      className={`group flex w-full items-center gap-3 text-sm`}
      disabled={isPurchasing}
      onClick={handleClick}
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
