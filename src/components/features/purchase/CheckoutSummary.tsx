"use client";

import FooterLink from "@/components/my-components/links/FooterLink";
import SpinnerMini from "@/components/my-components/shared/SpinnerMini";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { delay } from "@/helpers/delay";
import { getImeiZipFormSchema } from "@/lib/zod/ImeiZipFormSchema";
import { useAuth } from "@/providers/AuthProvider";
import { usePromoCode } from "@/providers/PromoCodeProvider";
import { getTotalCartPrice } from "@/redux/features/cartSlice";
import { useAppSelector } from "@/redux/hooks";
import { purchasePackages } from "@/services/purchase/purchaseApis";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { ArrowUpLeft, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import ApplyCouponCode from "../cart/ApplyCouponCode";
import CheckoutSummaryItem from "./CheckoutSummaryItem";
import OrderItem from "./OrderItem";
import PaymentMethods from "./PaymentMethods";

function CheckoutSummary() {
  const { promoCodeData, setPromoCodeData } = usePromoCode();

  const [isPromoApplying, setIsPromoApplying] = useState(false);

  const [showZipImeiModel, setShowZipImeiModel] = useState(false);

  const router = useRouter();

  const { isAuthLoading, isAuthenticated } = useAuth();

  const cartItems = useAppSelector((state) => state.cart);

  const isCartHavePhonicoPackage = cartItems.some(
    (item) => item.provider === "Phonico",
  );

  const isCartHaveUltimatePackage = cartItems.some(
    (item) => item.provider === "ultimate_mobile",
  );

  const form = useForm<z.infer<ReturnType<typeof getImeiZipFormSchema>>>({
    resolver: zodResolver(getImeiZipFormSchema(isCartHavePhonicoPackage)),
    defaultValues: {
      zip_code: "",
      imei: "",
    },
  });

  const totalCartPrice = useAppSelector((state) =>
    getTotalCartPrice(state.cart),
  );

  const { mutate: purchasePackagesApi, isPending: isPurchasing } = useMutation({
    mutationFn: purchasePackages,
    onSuccess: async (data) => {
      if (data) {
        if (data.refill) {
          toast.success(data.message);
          await delay(2000);
          return router.push("/refill/?cart=true");
        }
        toast.success(data.message);
        form.reset();
        setShowZipImeiModel(false);
        await delay(1000);
        setPromoCodeData(null);

        router.push("/client/my-sims?status=true");
      }
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  function onSubmit(values: z.infer<ReturnType<typeof getImeiZipFormSchema>>) {
    purchasePackagesApi({
      cartItems: cartItems,
      promoCode: promoCodeData ? promoCodeData.promo_code : null,
      ...values,
    });
  }

  return (
    <div className="order-1 flex flex-col items-center">
      <Card className="flex w-full flex-col gap-5 rounded-[15px] border border-grey px-3 py-5 sm:p-5">
        {/* Heading  */}
        <div className="flex items-center gap-[15px]">
          <ShoppingCart size={28} />
          <p className="text-[25px] font-500">Order Summaray</p>
        </div>

        {/* Cart Items Table  */}
        <Table>
          <TableHeader>
            <TableRow className="text-[10px] font-500 text-foreground-light">
              <TableHead className="w-[150px] text-[12px] font-500 text-foreground-light">
                Product
              </TableHead>
              <TableHead className="text-center text-[12px] font-500 text-foreground-light">
                Quantity
              </TableHead>
              <TableHead className="text-right text-[12px] font-500 text-foreground-light">
                Price
              </TableHead>
            </TableRow>
          </TableHeader>

          {/* Table body containg cart summary items  */}
          <TableBody>
            {cartItems.map((item, index) => (
              <CheckoutSummaryItem cartItem={item} key={index} />
            ))}
          </TableBody>
        </Table>

        {/* pricing  */}
        <div className="flex flex-col gap-3">
          <p className="font-montserrat text-[22px] font-500">Pricing</p>
          <OrderItem className="border border-primary/30 bg-primary/10 py-1 text-base font-500">
            <p>Sub Total</p>
            <p>$ {totalCartPrice}</p>
          </OrderItem>
        </div>

        <ApplyCouponCode
          promoCodeData={promoCodeData}
          setPromoCodeData={setPromoCodeData}
          couponContainerStyle="mb-0"
          titleStyle="text-[16px] leading-none"
          inputStyle="!py-1.5"
          buttonStyle="!py-2 !text-sm"
          couponTextStyle="text-sm"
          couponBadgeStyle="py-0 px-2"
          discountTextStyle="text-sm"
          setIsPromoApplying={setIsPromoApplying}
        />

        <OrderItem className="border border-primary/30 bg-background py-1 text-base font-500">
          <p>Total</p>

          {isPromoApplying ? (
            <Skeleton className="h-[16px] w-[60px] rounded-pill bg-primary/20" />
          ) : (
            <p>
              ${promoCodeData ? promoCodeData.total_amount : totalCartPrice}
            </p>
          )}
        </OrderItem>

        {!isAuthLoading && isAuthenticated && (
          <Button
            className={`group flex w-full items-center gap-3 text-sm`}
            disabled={isPurchasing}
            onClick={() => {
              if (isCartHavePhonicoPackage || isCartHaveUltimatePackage) {
                setShowZipImeiModel(true);
                return;
              }
              purchasePackagesApi({
                cartItems: cartItems,
                promoCode: promoCodeData ? promoCodeData.promo_code : null,
              });
            }}
          >
            {isPurchasing ? (
              <SpinnerMini />
            ) : (
              <>
                <ArrowUpLeft
                  className="transition group-hover:rotate-90 group-hover:text-foreground"
                  size={20}
                />
                Go to Secure Checkout
              </>
            )}
          </Button>
        )}

        {/* terms and conditions  */}
        <p className="text-xs">
          By clicking 'Go to Secure Checkout' you agree to our{" "}
          <FooterLink
            href={"/terms"}
            className="inline text-primary underline underline-offset-2"
          >
            Terms of Use
          </FooterLink>{" "}
          and{" "}
          <FooterLink
            href={"/privacy-policy"}
            className="inline text-primary underline underline-offset-2"
          >
            Privacy Policy
          </FooterLink>{" "}
          and will be redirected to Stripe for secure payment.
        </p>
      </Card>

      {!isAuthLoading && isAuthenticated && <PaymentMethods />}

      <Dialog open={showZipImeiModel} onOpenChange={setShowZipImeiModel}>
        <DialogContent>
          <DialogContent>
            <p className="mt-8 text-body-base font-500 md:text-body-md xl:text-body-lg">
              {isCartHavePhonicoPackage
                ? " Enter your IMEI and ZIP code to purchase.?"
                : " Enter your IMEI to purchase.?"}
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
                      <ArrowUpLeft
                        className="transition group-hover:rotate-90 group-hover:text-foreground"
                        size={20}
                      />
                      Go to Secure Checkout
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </DialogContent>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CheckoutSummary;
