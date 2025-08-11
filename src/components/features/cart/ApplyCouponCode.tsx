"use client";

import SpinnerMini from "@/components/my-ui/fallbacks/SpinnerMini";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useAuth } from "@/providers/AuthProvider";
import { useAppSelector } from "@/redux/hooks";
import { getTotalCartItems, getTotalCartPrice } from "@/redux/slices/cartSlice";
import {
  applyPromoCode,
  applyPromoCodeAsGuest,
} from "@/services/purchase/purchaseApis";
import { PromoCodeResponse } from "@/types/purchase/ApplyPromoCode";
import { useMutation, useQuery } from "@tanstack/react-query";
import { ChevronDown, Tags, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface PropsType {
  promoCodeData: PromoCodeResponse | null;
  setPromoCodeData: React.Dispatch<
    React.SetStateAction<PromoCodeResponse | null>
  >;
  couponContainerStyle?: string;
  titleStyle?: string;
  inputStyle?: string;
  buttonStyle?: string;
  couponTextStyle?: string;
  couponBadgeStyle?: string;
  discountTextStyle?: string;
  setIsPromoApplying: React.Dispatch<React.SetStateAction<boolean>>;
}

interface FormInputs {
  coupon: string;
}

function ApplyCouponCode({
  promoCodeData,
  setPromoCodeData,
  titleStyle,
  inputStyle,
  buttonStyle,
  couponBadgeStyle,
  couponTextStyle,
  discountTextStyle,
  couponContainerStyle,
  setIsPromoApplying,
}: PropsType) {
  const [showCouponCollapsible, setShowCouponCollapsible] = useState(false);
  const { isAuthLoading, isAuthenticated } = useAuth();
  const cartItems = useAppSelector((state) => state.cart);
  const totalCartItems = useAppSelector((state) =>
    getTotalCartItems(state.cart),
  );
  const totalCartPrice = useAppSelector((state) =>
    getTotalCartPrice(state.cart),
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
    clearErrors,
  } = useForm<FormInputs>();

  //To apply promo code and discount
  //1. This apis is called when is user is logged in
  const { mutate: applyPromoCodeApi, isPending: isPromoApplying } = useMutation(
    {
      mutationFn: applyPromoCode,

      onSuccess: (data) => {
        if (data) {
          const { promo_applied, promo_applied_message } = data.data;
          if (promo_applied) {
            setPromoCodeData(data.data);
            setShowCouponCollapsible(false);
            reset();
          } else if (!promo_applied) {
            if (promo_applied_message) {
              toast.error(promo_applied_message);
            } else {
              toast.error("Promo code not available in your destination.");
            }
          }
        }
      },

      onError: (error) => {
        setPromoCodeData(null);
        toast.error(error.message);
      },

      onMutate: () => setIsPromoApplying(true),

      onSettled: () => setIsPromoApplying(false),
    },
  );

  //To apply promo code and discount
  //1.This apis is called when user is not logged in,means as a guest user
  const { mutate: applyPromoCodeAsGuestApi, isPending: isGuestPromoApplying } =
    useMutation({
      mutationFn: applyPromoCodeAsGuest,
      onSuccess: (data) => {
        if (data) {
          const { promo_applied, promo_applied_message } = data.data;
          if (promo_applied) {
            setPromoCodeData(data.data);
            setShowCouponCollapsible(false);
            reset();
          } else if (!promo_applied) {
            if (promo_applied_message) {
              toast.error(promo_applied_message);
            } else {
              toast.error("Promo code not available in your destination.");
            }
          }
        }
      },
      onError: (error) => {
        toast.error(error.message);
      },

      onMutate: () => setIsPromoApplying(true),

      onSettled: () => setIsPromoApplying(false),
    });

  //Run on page mount just to check if all is right and packages bundle are valid
  //1.This api is called when is not logged in
  const { isError: isGuestPromoError, error: guestPromoError } = useQuery({
    queryKey: ["guest-promo-code"],
    queryFn: () =>
      applyPromoCodeAsGuest({
        cartItems: cartItems,
        promoCode: null,
      }),
    enabled: !isAuthenticated && !isAuthLoading,
  });

  //This function is responsible for calling promo code api by taking promo code from user
  function onSubmit(values: FormInputs) {
    if (promoCodeData) {
      setError("coupon", { message: "A coupon code is already applied." });
      return;
    }

    //If user is logged in then run simple "promoCodeApi" unless run "applypromoCodeAsGuestApi"
    if (!isAuthLoading && isAuthenticated) {
      applyPromoCodeApi({ cartItems, promoCode: values.coupon });
    } else {
      if (!isGuestPromoError) {
        applyPromoCodeAsGuestApi({ cartItems, promoCode: values.coupon });
      } else {
        toast.error(guestPromoError.message);
      }
    }
  }

  //To sync the promo code data with cart items changes
  useEffect(() => {
    if (promoCodeData && cartItems.length > 0) {
      if (!isAuthLoading && isAuthenticated) {
        applyPromoCodeApi({ cartItems, promoCode: promoCodeData.promo_code });
      } else {
        applyPromoCodeAsGuestApi({
          cartItems,
          promoCode: promoCodeData.promo_code,
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalCartItems, totalCartPrice, isAuthenticated]);

  const isPromoApisLoading = isPromoApplying || isGuestPromoApplying;

  return (
    <>
      {/* Coupon Code Collapsible */}
      <Collapsible
        className={cn(`CollapsibleContent group mb-2`, couponContainerStyle)}
        open={showCouponCollapsible}
        onOpenChange={setShowCouponCollapsible}
      >
        <CollapsibleTrigger className="flex w-full items-center justify-between transition-all hover:text-primary">
          <p
            className={cn(`font-montserrat text-lg font-semibold`, titleStyle)}
          >
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
              className={cn(inputStyle)}
              disabled={isPromoApisLoading}
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
            <Button
              type="submit"
              className={cn(buttonStyle)}
              disabled={isPromoApisLoading}
            >
              {isPromoApisLoading ? <SpinnerMini /> : "Apply"}
            </Button>
          </form>
          {errors?.coupon && (
            <span className="text-xs text-destructive">
              {errors.coupon.message}
            </span>
          )}
        </CollapsibleContent>
      </Collapsible>

      {/* Applied Coupon */}
      {promoCodeData && (
        <div className="mb-3 flex items-center justify-between">
          <p
            className={cn(
              `flex items-center gap-2 font-montserrat text-lg font-medium`,
              couponTextStyle,
            )}
          >
            <Tags size={20} />
            Coupon
            <span
              className={cn(
                `rounded-md bg-primary-accent px-3 py-1 text-sm`,
                couponBadgeStyle,
              )}
            >
              {promoCodeData.promo_code}
            </span>
            <button
              className="text-muted-foreground hover:text-foreground"
              onClick={() => {
                setPromoCodeData(null);
                clearErrors();
              }}
            >
              <X size={16} />
            </button>
          </p>

          {/* discount after coupon  */}
          <span
            className={cn(
              `flex items-center justify-center rounded-[6px] bg-primary/15 px-[12px] py-[4px] text-base font-medium text-primary`,
              discountTextStyle,
            )}
          >
            {promoCodeData.discount}% Off
          </span>
        </div>
      )}
    </>
  );
}

export default ApplyCouponCode;
