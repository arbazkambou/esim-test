import FooterLink from "@/components/my-ui/links/FooterLink";
import { Button } from "@/components/ui/button";
import { SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { usePromoCode } from "@/providers/PromoCodeProvider";
import { getTotalCartPrice } from "@/redux/slices/cartSlice";
import { useAppSelector } from "@/redux/hooks";
import { ArrowUpRight, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import ApplyCouponCode from "./ApplyCouponCode";
import CartItem from "./CartItem";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { sendGTMEvent } from "@/helpers/sendGTMEvent";

export interface PropsType {
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
}

function CartDetail({ setShowCart }: PropsType) {
  const { promoCodeData, setPromoCodeData } = usePromoCode();
  const [isPromoApplying, setIsPromoApplying] = useState(false);
  const router = useRouter();
  const cartItems = useAppSelector((state) => state.cart);
  const totalCartPrice = useAppSelector((state) =>
    getTotalCartPrice(state.cart),
  );

  function handleCheckoutClick() {
    if (cartItems.length !== 0) {
      const items = cartItems.map((item) => ({
        item_id: item.id,
        item_name: item.name,
        price: item.price,
        quantity: item.quantity,
        affiliation: "eSIM Card Web",
        item_brand: item.provider,
        item_category: item.package_type,
        coupon: promoCodeData ? promoCodeData.promo_code : "",
      }));

      sendGTMEvent({
        event: "begin_checkout",
        ecommerce: {
          currency: "USD",
          value: promoCodeData ? promoCodeData.total_amount : totalCartPrice,
          items: items,
        },
      });
    }

    router.push("/checkout");
  }

  return cartItems.length !== 0 ? (
    <>
      <SheetHeader className="!h-max border-b px-6 pb-4 pt-6">
        <SheetTitle className="flex items-center gap-2.5 font-montserrat">
          <ShoppingCart size={24} />
          Review Your Cart
        </SheetTitle>
      </SheetHeader>

      {/* Cart Items */}
      <div className="flex flex-grow flex-col justify-start gap-4 overflow-auto py-4 scrollbar-thin">
        {cartItems.map((item, index) => (
          <CartItem cartItem={item} key={index} />
        ))}
      </div>

      {/* Coupon and Checkout */}
      <div className="border-t px-4 pb-3 pt-3 sm:px-6">
        <ApplyCouponCode
          promoCodeData={promoCodeData}
          setPromoCodeData={setPromoCodeData}
          setIsPromoApplying={setIsPromoApplying}
        />

        {/* Subtotal */}
        <div className="mb-2 flex items-center justify-between">
          <p className="font-montserrat text-lg font-semibold">Sub Total</p>
          <span className="flex items-center justify-center rounded-[6px] bg-primary/15 px-[12px] py-[4px] text-base font-medium text-primary">
            ${totalCartPrice}
          </span>
        </div>

        {/* Checkout Button */}
        <div className="flex flex-col gap-1">
          <Button
            className="group flex w-full items-center justify-center gap-2 text-base"
            size={"md"}
            onClick={handleCheckoutClick}
          >
            Checkout
            {isPromoApplying ? (
              <Skeleton className="h-[16px] w-[40px] rounded-pill bg-background/80" />
            ) : (
              <span>
                $
                {promoCodeData?.total_amount
                  ? promoCodeData.total_amount.toFixed(2)
                  : totalCartPrice}
              </span>
            )}
            <ArrowUpRight
              className="transition-transform group-hover:rotate-[45deg]"
              size={18}
            />
          </Button>
          <Button
            variant={"ghost"}
            size={"sm"}
            className="text-base hover:text-primary"
            onClick={() => {
              setShowCart(false);
            }}
          >
            Continue Shopping
          </Button>
        </div>
      </div>
    </>
  ) : (
    <div className="ms-6 mt-4 flex flex-col gap-2">
      <h2 className="text-lg font-semibold">Your cart is empty</h2>
      <p className="mt-2 text-sm">
        You haven't added any eSIM packages yet. Start exploring our plans to
        get connected!
      </p>

      <FooterLink
        href={"/esim"}
        className="text-primary underline underline-offset-4"
        onClick={() => setShowCart(false)}
      >
        Browse our eSIM Packages
      </FooterLink>
    </div>
  );
}

export default CartDetail;
