"use client";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import { ChevronDown, Tags, X } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

interface PropsType {
  coupon: string;
  setCoupon: React.Dispatch<React.SetStateAction<string>>;
}

interface FormInputs {
  coupon: string;
}

function ApplyCouponCode({ coupon, setCoupon }: PropsType) {
  const [showCouponCollapsible, setShowCouponCollapsible] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
    clearErrors,
  } = useForm<FormInputs>();

  function onSubmit(values: FormInputs) {
    if (coupon) {
      setError("coupon", { message: "A coupon code is already applied." });
      return;
    }
    setCoupon(values.coupon);
    setShowCouponCollapsible(false);
    toast.success("Coupon code is applied");
    reset();
  }
  return (
    <>
      {/* Coupon Code Collapsible */}
      <Collapsible
        className="CollapsibleContent group mb-2"
        open={showCouponCollapsible}
        onOpenChange={setShowCouponCollapsible}
      >
        <CollapsibleTrigger className="flex w-full items-center justify-between transition-all hover:text-primary">
          <p className="font-montserrat text-lg font-semibold">
            Got a discount code?
          </p>
          <ChevronDown
            size={20}
            className="transition-all group-data-[state=open]:rotate-180"
          />
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-2">
          <form
            className="flex items-center gap-2"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              placeholder="Coupon Code"
              type="text"
              {...register("coupon", {
                required: "Please enter a coupon code.",
                maxLength: {
                  value: 20,
                  message: "Invalid coupon code.",
                },

                validate: (value) =>
                  !value.includes(" ") || "Coupon code cannot contain spaces.",
              })}
            />
            <Button type="submit">Apply</Button>
          </form>
          {errors?.coupon && (
            <span className="text-xs text-destructive">
              {errors.coupon.message}
            </span>
          )}
        </CollapsibleContent>
      </Collapsible>

      {/* Applied Coupon */}
      {coupon && (
        <div className="mb-3 flex items-center justify-between">
          <p className="flex items-center gap-2 font-montserrat text-lg font-medium">
            <Tags size={20} />
            Coupon
            <span className="rounded-md bg-primary-accent px-3 py-1 text-sm">
              {coupon}
            </span>
            <button
              className="text-muted-foreground hover:text-foreground"
              onClick={() => {
                setCoupon("");
                clearErrors();
              }}
            >
              <X size={16} />
            </button>
          </p>
          <span className="flex items-center justify-center rounded-[6px] bg-primary/15 px-[12px] py-[4px] text-base font-medium text-primary">
            5% Off
          </span>
        </div>
      )}
    </>
  );
}

export default ApplyCouponCode;
