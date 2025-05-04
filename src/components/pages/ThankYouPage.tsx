"use client";

import { useAuth } from "@/providers/AuthProvider";
import { useAppDispatch } from "@/redux/hooks";
import { clearCart } from "@/redux/slices/cartSlice";
import { getLatestPurchaseForGTM } from "@/services/purchase/purchaseApis";
import { sendGTMEvent } from "@next/third-parties/google";
import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface Propstype {
  paymentStatus: string;
}

function ThankYouPage({ paymentStatus }: Propstype) {
  const [countdown, setCountdown] = useState(5);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { isAuthLoading, isAuthenticated } = useAuth();

  const isPaymentSuccess =
    paymentStatus === "success" || paymentStatus === "true";

  //this api is used to get latest purchases from backend
  const {
    data: latestPurchase,
    isSuccess,
    isError,
    error,
  } = useQuery({
    queryKey: ["latest-purcase"],
    queryFn: getLatestPurchaseForGTM,
    enabled: isPaymentSuccess,
  });

  if (isError) {
    toast.error(error.message);
  }

  useEffect(function () {
    // if status is true then remove referral from cookies
    if (isPaymentSuccess) {
      const referral = Cookies.get("referral");
      if (referral) {
        Cookies.remove("referral");
      }
      dispatch(clearCart());
      Cookies.remove("isPurchase");
    } else {
      toast.error("Payment process failed.");
      Cookies.remove("isPurchase");
    }
  }, []);

  //To prevent unauthorized user to access this page
  useEffect(() => {
    if (!isAuthLoading && !isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, isAuthLoading, router]);

  //show a 5 seconds countdown timer so that latest purchase data can be get from api and send this data to a gtm event
  useEffect(() => {
    if (countdown <= 0) return;
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown, router]);

  //to prevent count down timer to go less than zero and also hit gtm event
  useEffect(() => {
    if (countdown === 0) {
      if (isPaymentSuccess) {
        if (isSuccess) {
          sendGTMEvent({
            event: latestPurchase.purchase_data.event,
            ecommerce: latestPurchase.purchase_data.ecommerce,
          });
        }

        Cookies.remove("isPurchase");
        router.push("/client/my-sims/");
      } else {
        Cookies.remove("isPurchase");
        router.push("/checkout/");
      }
    }
  }, [isSuccess, countdown]);

  return (
    <section className="container mt-14">
      <div className="rounded-md bg-primary/10 py-14">
        {isPaymentSuccess ? (
          <>
            <h2 className="fw-500 my-2 text-center font-sans text-h2-md text-grey">
              Thank You!
            </h2>
            <p className="fw-600 text-center font-sans text-h2-md font-semibold">
              Your eSIM has been Purchased
            </p>
          </>
        ) : (
          <>
            <h2 className="fw-500 my-2 text-center font-sans text-h2-md text-grey">
              Your payment could not be processed.
            </h2>
            <p className="fw-600 text-center font-sans text-h2-md font-semibold">
              Please try again
            </p>
          </>
        )}

        <div className="mt-10 text-center">
          <p className="fw-500 mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary font-sans text-4xl text-background">
            {countdown}
          </p>
        </div>
      </div>
    </section>
  );
}

export default ThankYouPage;
