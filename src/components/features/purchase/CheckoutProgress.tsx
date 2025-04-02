"use client";

import checkoutHero from "@/_assets/images/checkoutHero.png";
import { useAuth } from "@/providers/AuthProvider";
import Image from "next/image";
import { useEffect, useState } from "react";
import CheckoutSummary from "./CheckoutSummary";
import AvailableBalance from "./AvailableBalance";
import CheckoutProgressSteps from "./CheckoutProgressSteps";
import LimitedTimeDeal from "./LimitedTimeDeal";
import PayAsGuest from "./PayAsGuest";

export function CheckoutProgress() {
  const [isClient, setIsClient] = useState(false);
  const { isAuthLoading, isAuthenticated } = useAuth();

  useEffect(function () {
    setIsClient(true);
  }, []);

  const isNotAuthenticated = !isAuthLoading && !isAuthenticated;

  // const {
  //   id,
  //   name,
  //   data_quantity,
  //   data_unit,
  //   package_validity,
  //   package_validity_unit,
  //   image_url,
  //   total_price,
  //   unlimited,
  // } = cartItem;

  // const totalQuantityById = useAppSelector((state) =>
  //   getTotalQuantityById(state.cart, id),
  // );

  // const totalCartQuantity = useAppSelector((state) =>
  //   getTotalCartItems(state.cart),
  // );

  // const dispatch = useAppDispatch();

  return (
    <section className="container">
      <div className="mx-auto mt-16 max-w-4xl">
        <h1 className="mb-12 text-center font-montserrat text-h1-base font-600 md:text-h2-md">
          Checkout
        </h1>

        <CheckoutProgressSteps />
      </div>

      {/* Checkout Detail  */}
      <div
        className={`mt-16 grid gap-[40px] ${isNotAuthenticated ? "xl:grid-cols-[1fr_minmax(300px,660px)]" : "xl:grid-cols-[1fr_minmax(300px,660px)]"}`}
      >
        {/* Available balance and Discount */}
        {isNotAuthenticated ? (
          <PayAsGuest />
        ) : (
          <div className="grid grid-rows-[auto_1fr] gap-6 xl:grid-cols-[minmax(200px,327px)_1fr]">
            <AvailableBalance />

            {/* discount and timer  */}
            <LimitedTimeDeal />

            {/* hero image  */}
            <div className="relative col-span-2 hidden max-h-[490px] w-full xl:block">
              <Image
                src={checkoutHero}
                alt="checkout image"
                fill
                sizes="auto"
              />
            </div>
          </div>
        )}

        {/* Checkout Summary Card  */}
        {isClient && <CheckoutSummary />}
      </div>
    </section>
  );
}
