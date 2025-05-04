"use client";

import canada from "@/_assets/flags/canada.svg";
import { MyTooltip } from "@/components/my-ui/shared/Tooltip";
import { TableCell, TableRow } from "@/components/ui/table";
import {
  CartState,
  decreaseQuantity,
  enableRenew,
  getTotalCartItems,
  increaseQuantity,
} from "@/redux/slices/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";

function CheckoutSummaryItem({ cartItem }: { cartItem: CartState }) {
  const {
    id,
    name,
    image_url,
    total_price,
    quantity,
    can_renew,
    package_type,
    data_quantity,
    data_unit,
    package_validity,
    package_validity_unit,
    unlimited,
  } = cartItem;
  const [isRenewEnable, setIsRenewEnable] = useState(false);

  const totalCartQuantity = useAppSelector((state) =>
    getTotalCartItems(state.cart),
  );

  const dispatch = useAppDispatch();

  function handleCheckedChange(value: boolean) {
    setIsRenewEnable(value);
    dispatch(enableRenew({ id, isRenew: value }));
  }

  return (
    <TableRow className="bg-background hover:bg-background">
      {/* flag with name  */}
      <TableCell className="bg-background p-1 pb-4 sm:p-2">
        <div className="flex shrink-0 items-center gap-[7px]">
          <div className="relative h-[22px] w-[22px] shrink-0 rounded-full">
            {image_url ? (
              <Image
                src={image_url}
                alt="country flag"
                fill
                sizes="auto"
                className="shrink-0 rounded-full object-cover shadow-md"
              />
            ) : (
              <Image
                src={canada}
                alt={`country flag`}
                fill
                sizes="auto"
                className="shrink-0"
              />
            )}
          </div>

          <p className="text-[10px] font-500 leading-tight text-foreground sm:min-w-[200px] sm:text-[15px]">
            {package_type === "DATA-VOICE-SMS"
              ? name
              : unlimited
                ? `Unlimited Data for ${package_validity} ${package_validity_unit}`
                : `${data_quantity}${data_unit} eSIM Data for ${package_validity} ${package_validity_unit}`}
          </p>
        </div>
      </TableCell>
      {/* inc dec btns  */}
      <TableCell className="mt-2 bg-background p-1 sm:p-2">
        <div className="flex w-full justify-center">
          <div className="flex w-[54px] shrink-0 items-center justify-between rounded-pill bg-primary p-[3px] leading-none text-background sm:w-[80px] sm:px-[6px] sm:py-[6px]">
            <span
              role="button"
              className="rounded-pill px-0.5 transition-all hover:bg-background/40 sm:px-1.5"
              onClick={() => dispatch(decreaseQuantity(id))}
            >
              <Minus className="h-[12px] w-[12px] sm:h-[15px] sm:w-[15px]" />
            </span>
            <p className="text-[10px] font-500">{quantity}</p>
            <span
              role="button"
              className="rounded-pill px-0.5 transition-all hover:bg-background/40 sm:px-1.5"
              onClick={() => {
                if (totalCartQuantity >= 5) {
                  toast.error(
                    "You can only add up to 5 eSIM packages to your cart.",
                  );
                }
                dispatch(increaseQuantity(id));
              }}
            >
              <Plus className="h-[12px] w-[12px] sm:h-[15px] sm:w-[15px]" />
            </span>
          </div>
        </div>
      </TableCell>

      {/* Renew swicth  */}
      <TableCell className="mt-2 bg-background p-1 sm:p-2">
        <MyTooltip
          message={
            can_renew
              ? "Ensure you have sufficient balance on your renewal date to keep your eSIM active"
              : "This eSIM does not support auto-renewal"
          }
          side="top"
          isRenewTooltip={true}
          handleCheckedChange={handleCheckedChange}
          can_renew={can_renew}
          isRenewEnable={isRenewEnable}
        />
      </TableCell>
      {/* price  */}
      <TableCell className="bg-background">
        <div className="flex min-w-[60px] items-center justify-end">
          <div className="flex w-max items-center justify-center rounded-[6px] bg-primary/15 px-[8px] py-[6px] text-[10px] font-500 leading-none text-primary sm:px-[10px] sm:py-[6px]">
            ${total_price}
          </div>
        </div>
      </TableCell>
    </TableRow>
  );
}

export default CheckoutSummaryItem;
