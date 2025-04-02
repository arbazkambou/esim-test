import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import useMediaQuery from "@/hooks/useMediaQuery";
import type React from "react";
import CartDetail from "./CartDetail";

export interface CartSheetProps {
  showCart: boolean;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
}

function CartSheet({ showCart, setShowCart }: CartSheetProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <>
      {isDesktop ? (
        <Sheet open={showCart} onOpenChange={setShowCart}>
          <SheetContent className="grid !h-full !w-full grid-rows-[auto_1fr_auto] p-0 px-2 sm:!min-w-[500px]">
            <CartDetail setShowCart={setShowCart} />
          </SheetContent>
        </Sheet>
      ) : (
        <Drawer
          repositionInputs={false}
          open={showCart}
          onOpenChange={setShowCart}
        >
          <DrawerContent className="grid !h-[94%] !w-full grid-rows-[auto_auto_1fr_auto] px-2">
            <CartDetail setShowCart={setShowCart} />
          </DrawerContent>
        </Drawer>
      )}
    </>
  );
}

export default CartSheet;
