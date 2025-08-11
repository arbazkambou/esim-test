"use client";

import SpinnerMini from "@/components/my-ui/fallbacks/SpinnerMini";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { getImeiZipFormSchema } from "@/lib/zod/ImeiZipFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Cookies from "js-cookie";
import {
  PurchasePackages,
  PurchasePackagesInputs,
} from "@/types/purchase/PurchasePackages";
import { MutateOptions } from "@tanstack/react-query";
import { CartState } from "@/redux/slices/cartSlice";
import { usePromoCode } from "@/providers/PromoCodeProvider";
import { ApplyPromoCode } from "@/types/purchase/ApplyPromoCode";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Drawer, DrawerContent } from "@/components/ui/drawer";

interface PropsType {
  showZipImeiModel: boolean;
  setShowZipImeiModel: React.Dispatch<React.SetStateAction<boolean>>;
  isCartHavePhonicoPackage: boolean;
  isPurchasing: boolean;
  purchasePackagesApi: (
    variables: PurchasePackagesInputs,
    options?:
      | MutateOptions<PurchasePackages, Error, PurchasePackagesInputs, unknown>
      | undefined,
  ) => void;

  cartItems: CartState[];
  checkoutSummary: ApplyPromoCode | undefined;
}

function ZipImeiModal({
  isCartHavePhonicoPackage,
  setShowZipImeiModel,
  showZipImeiModel,
  purchasePackagesApi,
  cartItems,
  isPurchasing,
  checkoutSummary,
}: PropsType) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const form = useForm<z.infer<ReturnType<typeof getImeiZipFormSchema>>>({
    resolver: zodResolver(getImeiZipFormSchema(isCartHavePhonicoPackage)),
    defaultValues: {
      zip_code: "",
      imei: "",
    },
  });

  const { promoCodeData } = usePromoCode();

  function onSubmit(values: z.infer<ReturnType<typeof getImeiZipFormSchema>>) {
    const referral = Cookies.get("referral");

    let redirect_url = "";

    if (typeof window !== undefined) {
      redirect_url = `${window.location.origin}/sim-buy-thank-you/`;
    }
    const reqIdConectia = Cookies.get("reqIdConectia");

    purchasePackagesApi({
      ...values,
      cartItems,
      redirect_url,
      promoCode: promoCodeData
        ? promoCodeData.promo_code
        : referral
          ? referral
          : null,
      reqIdConectia,
    });
  }

  return isDesktop ? (
    <Dialog open={showZipImeiModel} onOpenChange={setShowZipImeiModel}>
      <DialogContent>
        <DialogContent>
          <p className="mt-8 text-body-base font-500 md:text-body-md xl:text-body-lg">
            {isCartHavePhonicoPackage
              ? " Enter your IMEI and ZIP code to purchase"
              : " Enter your IMEI to purchase"}
          </p>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="mt-2 space-y-8"
            >
              <FormField
                control={form.control}
                name="imei"
                render={({ field }) => (
                  <FormItem>
                    <div className="relative">
                      <FormControl>
                        <Input placeholder="" {...field} />
                      </FormControl>
                      <FormLabel>IMEI Number</FormLabel>
                    </div>

                    <FormMessage />
                  </FormItem>
                )}
              />

              {isCartHavePhonicoPackage && (
                <FormField
                  control={form.control}
                  name="zip_code"
                  render={({ field }) => (
                    <FormItem>
                      <div className="relative">
                        <FormControl>
                          <Input placeholder="" {...field} />
                        </FormControl>
                        <FormLabel>Zip Code</FormLabel>
                      </div>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}

              <Button
                className={`group flex w-full items-center gap-3 text-sm`}
                disabled={isPurchasing}
              >
                {isPurchasing ? (
                  <SpinnerMini />
                ) : (
                  <>
                    {checkoutSummary && checkoutSummary.data.from_card === 0
                      ? "Purchase Now"
                      : "Go to Secure Checkout"}
                    <ArrowUpRight
                      className="transition group-hover:rotate-45 group-hover:text-foreground"
                      size={20}
                    />
                  </>
                )}
              </Button>
            </form>
          </Form>
        </DialogContent>
      </DialogContent>
    </Dialog>
  ) : (
    <Drawer
      repositionInputs={false}
      open={showZipImeiModel}
      onOpenChange={setShowZipImeiModel}
    >
      <DrawerContent className="!w-full px-4 py-[10px]">
        <div className="mt-2 w-full">
          <p className="mb-4 text-body-base font-500 md:text-body-md xl:text-body-lg">
            {isCartHavePhonicoPackage
              ? " Enter your IMEI and ZIP code to purchase"
              : " Enter your IMEI to purchase"}
          </p>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="mt-2 space-y-6"
            >
              <FormField
                control={form.control}
                name="imei"
                render={({ field }) => (
                  <FormItem>
                    <div className="relative">
                      <FormControl>
                        <Input placeholder="" {...field} />
                      </FormControl>
                      <FormLabel>IMEI Number</FormLabel>
                    </div>

                    <FormMessage />
                  </FormItem>
                )}
              />

              {isCartHavePhonicoPackage && (
                <FormField
                  control={form.control}
                  name="zip_code"
                  render={({ field }) => (
                    <FormItem>
                      <div className="relative">
                        <FormControl>
                          <Input placeholder="" {...field} />
                        </FormControl>
                        <FormLabel>Zip Code</FormLabel>
                      </div>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}

              <Button
                className={`group flex w-full items-center gap-3 text-sm`}
                disabled={isPurchasing}
              >
                {isPurchasing ? (
                  <SpinnerMini />
                ) : (
                  <>
                    {checkoutSummary && checkoutSummary.data.from_card === 0
                      ? "Purchase Now"
                      : "Go to Secure Checkout"}
                    <ArrowUpRight
                      className="transition group-hover:rotate-45 group-hover:text-foreground"
                      size={20}
                    />
                  </>
                )}
              </Button>
            </form>
          </Form>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default ZipImeiModal;
