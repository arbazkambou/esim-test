"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
import { useAppSelector } from "@/redux/hooks";
import { getTotalCartItems, getTotalCartPrice } from "@/redux/slices/cartSlice";
import {
  applyPromoCode,
  purchasePackages,
} from "@/services/purchase/purchaseApis";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import ApplyCouponCode from "../cart/ApplyCouponCode";
import CheckoutButton from "./CheckoutButton";
import CheckoutSummaryItem from "./CheckoutSummaryItem";
import CheckoutTermsConditionMessage from "./CheckoutTermsConditionMessage";
import OrderItem from "./OrderItem";
import PaymentMethods from "./PaymentMethods";
import SummaryFromApi from "./SummaryFromApi";
import ZipImeiModal from "./ZipImeiModal";

function CheckoutSummary() {
  const { promoCodeData, setPromoCodeData } = usePromoCode();
  const [isPromoApplying, setIsPromoApplying] = useState(false);
  const [showZipImeiModel, setShowZipImeiModel] = useState(false);
  const router = useRouter();
  const totalCartItems = useAppSelector((state) =>
    getTotalCartItems(state.cart),
  );
  const totalCartPrice = useAppSelector((state) =>
    getTotalCartPrice(state.cart),
  );
  const { isAuthLoading, isAuthenticated } = useAuth();
  const cartItems = useAppSelector((state) => state.cart);

  const isCartHavePhonicoPackage = cartItems.some(
    (item) => item.provider === "Phonico",
  );

  const isCartHaveUltimatePackage = cartItems.some(
    (item) => item.provider === "ultimate_mobile",
  );

  //form schema for taking zip and imei inputs from user if the package he is purchasing is from phonico or ultimate
  const form = useForm<z.infer<ReturnType<typeof getImeiZipFormSchema>>>({
    resolver: zodResolver(getImeiZipFormSchema(isCartHavePhonicoPackage)),
    defaultValues: {
      zip_code: "",
      imei: "",
    },
  });

  //Api to facilitate auth purchase flow,
  //1. if data.payment_intent=true then its means user does not have enough balance to purchase bundles, in this case it will be redirect to stripe page
  //2. if data.payment_intent=false then its means user have enough balance to purchase bundle
  const { mutate: purchasePackagesApi, isPending: isPurchasing } = useMutation({
    mutationFn: purchasePackages,
    onSuccess: async (data) => {
      if (data) {
        Cookies.set("isPurchase", "true");
        if (data.payment_intent) {
          Cookies.set("isPaymentFromStripe", "true");
          toast.success("Redirecting to stripe...");
          await delay(1000);
          setShowZipImeiModel(false);
          router.push(data.payment_intent);
          return;
        }
        toast.success(data.message);
        setShowZipImeiModel(false);
        form.reset();
        setPromoCodeData(null);
        await delay(1000);
        router.push("/sim-buy-thank-you/?status=true");
      }
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  //Fetch checkout summary detail and also sync with the cart items changes
  const { isLoading: isSummaryLoading, data: checkoutSummary } = useQuery({
    queryKey: [
      "checkout-summary",
      totalCartPrice,
      totalCartItems,
      promoCodeData,
    ],
    queryFn: () =>
      applyPromoCode({
        cartItems: cartItems,
        promoCode: promoCodeData ? promoCodeData.promo_code : null,
      }),

    enabled: isAuthenticated && !isAuthLoading,
  });

  return (
    <div className="order-1 flex flex-col items-center">
      <Card className="flex w-full flex-col gap-5 rounded-[15px] border border-grey px-1 py-5 sm:p-5">
        {/* Heading  */}
        <div className="flex items-center gap-[15px] ps-2">
          <ShoppingCart size={28} />
          <p className="text-[25px] font-500">Order Summary</p>
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
              <TableHead className="text-center text-[12px] font-500 text-foreground-light">
                Renew
              </TableHead>
              <TableHead className="text-right text-[12px] font-500 text-foreground-light">
                Price
              </TableHead>
            </TableRow>
          </TableHeader>

          {/* Table body containing cart summary items  */}
          <TableBody>
            {cartItems.map((item, index) => (
              <CheckoutSummaryItem cartItem={item} key={index} />
            ))}
          </TableBody>
        </Table>
        {/* pricing  */}
        <div className="flex flex-col gap-3 px-2">
          <p className="font-montserrat text-[22px] font-500">Pricing</p>
          <OrderItem className="border border-primary/30 bg-primary/10 py-1 text-base font-500">
            <p>Sub Total</p>
            <p>$ {totalCartPrice}</p>
          </OrderItem>
        </div>
        {/* this component is handling promo code related logis  */}
        <ApplyCouponCode
          promoCodeData={promoCodeData}
          setPromoCodeData={setPromoCodeData}
          couponContainerStyle="mb-0 !mx-2"
          titleStyle="text-[16px] leading-none"
          inputStyle="!py-1.5"
          buttonStyle="!py-2 !text-sm"
          couponTextStyle="text-sm !mx-2"
          couponBadgeStyle="py-0 px-2"
          discountTextStyle="text-sm"
          setIsPromoApplying={setIsPromoApplying}
        />
        <OrderItem className="mx-2 border border-primary/30 bg-background py-1 text-base font-500">
          <p>Total</p>

          {isPromoApplying ? (
            <Skeleton className="h-[16px] w-[60px] rounded-pill bg-primary/20" />
          ) : (
            <p>
              $
              {promoCodeData
                ? promoCodeData.total_amount.toFixed(2)
                : totalCartPrice}
            </p>
          )}
        </OrderItem>
        {isSummaryLoading ? (
          <>
            <OrderItem className="mx-2">
              <Skeleton className="h-[16px] w-[80px] rounded-pill bg-primary/20" />
              <Skeleton className="h-[16px] w-[80px] rounded-pill bg-primary/20" />
            </OrderItem>
            <OrderItem className="mx-2">
              <Skeleton className="h-[16px] w-[80px] rounded-pill bg-primary/20" />
              <Skeleton className="h-[16px] w-[80px] rounded-pill bg-primary/20" />
            </OrderItem>
            <Button disabled>
              <Skeleton className="h-[16px] w-[100px] rounded-pill bg-background/70" />
            </Button>
          </>
        ) : checkoutSummary ? (
          <SummaryFromApi checkoutSummary={checkoutSummary.data} />
        ) : (
          ""
        )}

        {/* 
            this button is responsible for calling purchase api logic
            1. if user have phonico and ultimate packages then it will show a popup to facilitate user to enter his imei and zip code 
            2. if user does not have phonico or ultimate packages then it will call the purchase packages api 
        */}
        {!isAuthLoading && isAuthenticated && checkoutSummary && (
          <CheckoutButton
            cartItems={cartItems}
            checkoutSummary={checkoutSummary.data}
            isCartHavePhonicoPackage={isCartHavePhonicoPackage}
            isCartHaveUltimatePackage={isCartHaveUltimatePackage}
            isPurchasing={isPurchasing}
            promoCodeData={promoCodeData}
            purchasePackagesApi={purchasePackagesApi}
            setShowZipImeiModel={setShowZipImeiModel}
          />
        )}

        {/*checkout terms and conditions text */}
        {!isAuthLoading && isAuthenticated && checkoutSummary && (
          <CheckoutTermsConditionMessage
            checkouSummary={checkoutSummary.data}
          />
        )}
      </Card>

      {/* payment methods logos  */}
      {!isAuthLoading && isAuthenticated && <PaymentMethods />}

      {/* this modal is responsible for taking zip code and imei number from user in case if user have phonico or ultimate package in there cart items list and then calls the purchase packages api*/}
      <ZipImeiModal
        showZipImeiModel={showZipImeiModel}
        cartItems={cartItems}
        checkoutSummary={checkoutSummary}
        isCartHavePhonicoPackage={isCartHavePhonicoPackage}
        isPurchasing={isPurchasing}
        purchasePackagesApi={purchasePackagesApi}
        setShowZipImeiModel={setShowZipImeiModel}
      />
    </div>
  );
}

export default CheckoutSummary;
