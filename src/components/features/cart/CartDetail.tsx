import FooterLink from "@/components/my-components/links/FooterLink";
import { Button } from "@/components/ui/button";
import { getTotalCartPrice } from "@/redux/features/cartSlice";
import { useAppSelector } from "@/redux/hooks";
import { ArrowUpLeft, ShoppingCart } from "lucide-react";
import { useState } from "react";
import ApplyCouponCode from "./ApplyCouponCode";
import CartItem from "./CartItem";
import { SheetHeader, SheetTitle } from "@/components/ui/sheet";

export interface PropsType {
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
}

function CartDetail({ setShowCart }: PropsType) {
  const [coupon, setCoupon] = useState("");
  const cartItems = useAppSelector((state) => state.cart);
  const totalCartPrice = useAppSelector((state) =>
    getTotalCartPrice(state.cart),
  );
  return cartItems.length !== 0 ? (
    <div className="grid h-full grid-rows-[auto_1fr_auto]">
      <SheetHeader className="border-b px-6 pb-4 pt-6">
        <SheetTitle className="flex items-center gap-2.5 font-montserrat">
          <ShoppingCart size={24} />
          Review Your Cart
        </SheetTitle>
      </SheetHeader>

      {/* Cart Items */}
      <div className="overflow-y-auto py-4 scrollbar-thin">
        <div className="flex flex-col gap-4">
          {cartItems.map((item, index) => (
            <CartItem cartItem={item} key={index} />
          ))}
        </div>
      </div>

      {/* Coupon and Checkout */}
      <div className="border-t px-4 pb-3 pt-3 sm:px-6">
        <ApplyCouponCode coupon={coupon} setCoupon={setCoupon} />

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
          >
            <ArrowUpLeft
              className="transition-transform group-hover:rotate-[-45deg]"
              size={18}
            />
            Checkout ${totalCartPrice}
          </Button>
          <Button
            variant={"ghost"}
            size={"sm"}
            className="text-base hover:text-primary"
            onClick={() => setShowCart(false)}
          >
            Continue Shopping
          </Button>
        </div>
      </div>
    </div>
  ) : (
    <div className="ms-6 mt-4 flex flex-col gap-2">
      <h2 className="text-lg font-semibold">Your cart is empty</h2>
      <p className="mt-2 text-sm">
        You haven't added any eSIM packages yet. Start exploring our plans to
        get connected!
      </p>

      <FooterLink
        href={"/"}
        className="text-primary underline underline-offset-4"
        onClick={() => setShowCart(false)}
      >
        Browse our eSIM Packages
      </FooterLink>
    </div>
  );
}

export default CartDetail;
