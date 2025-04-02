"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { getTotalCartItems } from "@/redux/features/cartSlice";
import { useAppSelector } from "@/redux/hooks";
import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function CartQuantityButton({
  setShowCart,
}: {
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [isCartQuantityLoading, setIsCartQuantityLoading] = useState(true);
  const totalCartQuantity = useAppSelector((state) =>
    getTotalCartItems(state.cart),
  );

  const router = useRouter();

  useEffect(function () {
    if (typeof window !== "undefined") {
      setIsCartQuantityLoading(false);
    }
  }, []);
  return (
    <Button
      className={`relative rounded-pill border-0 bg-secondary px-3 py-2 font-sans text-sm font-500 shadow-none transition-all duration-200 hover:bg-primary hover:text-background`}
      size={"sm"}
      variant={"outline"}
      onClick={() => {
        if (totalCartQuantity === 0) {
          setShowCart(true);
        } else {
          router.push("/checkout");
        }
      }}
    >
      {isCartQuantityLoading ? (
        <Skeleton className="h-[20px] w-[20px] rounded-full" />
      ) : (
        <>
          <ShoppingCart size={20} />
          <Badge className="absolute -top-2 right-[5px] flex h-4 w-4 items-center justify-center rounded-[50%] text-[10px]">
            {totalCartQuantity}
          </Badge>
        </>
      )}
    </Button>
  );
}

export default CartQuantityButton;
