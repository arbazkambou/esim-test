"use client";

import checkoutHero from "@/_assets/images/checkoutHero.png";
import { useAuth } from "@/providers/AuthProvider";
import Image from "next/image";
import { useEffect, useState } from "react";
import CheckoutSummary from "./CheckoutSummary";
import AvailableBalance from "../sims/AvailableBalance";
import CheckoutProgressSteps from "./CheckoutProgressSteps";
import LimitedTimeDeal from "./LimitedTimeDeal";
import PayAsGuest from "./PayAsGuest";
import { addHours, isBefore } from "date-fns";
import { useQuery } from "@tanstack/react-query";
import { showDiscountTimer } from "@/services/purchase/purchaseApis";

export function CheckoutProgress() {
  const [isClient, setIsClient] = useState(false);
  const { isAuthLoading, isAuthenticated, user } = useAuth();

  //Render content only in browser to fix hydration warnings
  useEffect(function () {
    setIsClient(true);
  }, []);

  //Api to show discount deal component, if showTimer=false hides the discount deal componnet
  const {
    data: showTimer,
    isSuccess: isShowTimerSuccess,
    isPending: isShowTimerLoading,
  } = useQuery({
    queryKey: ["discount-timer"],
    queryFn: showDiscountTimer,
    enabled: isAuthenticated && !isAuthLoading,
  });

  const isNotAuthenticated = !isAuthLoading && !isAuthenticated;

  //if user created his account in last 24 hours, then isDiscountActive will be true
  const isDiscountActive = user?.created_at
    ? isBefore(new Date(), addHours(new Date(user.created_at), 24))
    : false;

  return (
    <section className="container">
      <div className="mx-auto mt-16 max-w-4xl">
        {/* <h1 className="mb-12 text-center font-montserrat text-h1-base font-600 md:text-h2-md">
          Checkout
        </h1> */}

        <CheckoutProgressSteps />
      </div>

      {/* Checkout Detail  */}
      <div
        className={`mt-16 grid gap-[20px] ${isNotAuthenticated ? "xl:grid-cols-[1fr_minmax(300px,660px)]" : "xl:grid-cols-[1fr_minmax(300px,720px)]"}`}
      >
        {/* is user is not authenticated then render the pay as guest component to facilitate guest purchase fllow  */}
        {isNotAuthenticated ? (
          <PayAsGuest />
        ) : (
          <div
            className={`grid grid-rows-[auto_1fr] ${isDiscountActive ? "gap-5" : "gap-5"} xl:grid-cols-[minmax(200px,327px)_1fr]`}
          >
            {/* To show fallback while summary is being loading  */}
            {isShowTimerLoading && (
              <AvailableBalance
                isDiscountActive={false}
                isShowTimerLoading={isShowTimerLoading}
              />
            )}

            {isShowTimerSuccess && (!showTimer || !isDiscountActive) && (
              <AvailableBalance isDiscountActive={false} />
            )}

            {/* discount and timer  */}
            {isShowTimerSuccess && isDiscountActive && showTimer && (
              <LimitedTimeDeal />
            )}

            {/* hero image  */}
            <div className="relative col-span-2 hidden max-h-[460px] w-full xl:block">
              <Image
                src={checkoutHero}
                alt="checkout image"
                fill
                sizes="auto"
              />
            </div>
          </div>
        )}

        {/* Checkout Summary detail  */}
        {isClient && <CheckoutSummary />}
      </div>
    </section>
  );
}
