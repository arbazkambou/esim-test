import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ArrowUpLeft, ChevronDown, ShoppingCart, Tags, X } from "lucide-react";

interface PropsType {
  showCart: boolean;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
}

function CartSheet({ showCart, setShowCart }: PropsType) {
  return (
    <Sheet open={showCart} onOpenChange={setShowCart}>
      <SheetContent className="flex w-full flex-col justify-between p-0 sm:!min-w-[500px]">
        {/* cart items  */}
        <div className="mt-2 flex flex-col gap-[20px] overflow-auto scrollbar-thin">
          <SheetHeader className="ms-8 mt-[25px] text-body-lg font-500">
            <SheetTitle className="flex items-center gap-[10px] font-montserrat">
              <ShoppingCart size={30} />
              Review Your Cart
            </SheetTitle>
          </SheetHeader>
          {/* <CartItem />
          <CartItem />
          <CartItem />
          <CartItem /> */}
        </div>

        {/* coupon code  */}
        <div className="mx-4 mt-0 flex flex-col gap-[17px] border-t">
          <Collapsible className="group">
            <CollapsibleTrigger className="flex w-full items-center justify-between">
              <p className="mt-[17px] font-montserrat text-[18px] font-600 leading-none">
                Got a discount code?
              </p>
              <ChevronDown
                size={22}
                className="mt-2 transition-all group-data-[state=open]:rotate-180"
              />
            </CollapsibleTrigger>
            <CollapsibleContent className="CollapsibleContent">
              {/* promo code input  */}
              <div className="mt-[12px] flex items-center gap-2">
                <Input placeholder="Coupon Code" />
                <Button>Apply</Button>
              </div>
            </CollapsibleContent>
          </Collapsible>

          {/* sub total  */}
          <div className="flex items-center justify-between">
            <p className="font-montserrat text-[18px] font-600">Sub Total</p>
            <span className="flex items-center justify-center rounded-[6px] bg-primary/15 px-[10px] py-[6px] text-base font-500 leading-none text-primary">
              $24
            </span>
          </div>

          {/* coupon  */}

          <div className="flex items-center justify-between">
            <p className="relative flex items-center gap-2 font-montserrat text-[18px] font-500">
              <Tags size={24} />
              Coupon
              <span className="rounded-[6px] bg-primary-accent px-[12px] py-[4px] text-base">
                Umar
              </span>
              <X size={18} className="text-muted-foreground" />
            </p>

            <span className="flex items-center justify-center rounded-[6px] bg-primary/15 px-[10px] py-[6px] text-base font-500 leading-none text-primary">
              5% Off
            </span>
          </div>

          <Button className={`group mb-4 flex items-center gap-3 text-sm`}>
            <ArrowUpLeft
              className="transition group-hover:rotate-90 group-hover:text-foreground"
              size={20}
            />
            Checkout $24
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default CartSheet;
