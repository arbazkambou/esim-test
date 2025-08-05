"use client";

import OrderHistoryTable from "@/components/features/sims/OrderHistoryTable";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { delay } from "@/helpers/delay";
import { useAuth } from "@/providers/AuthProvider";
import { walletRefill } from "@/services/purchase/purchaseApis";
import { getUser } from "@/services/user/userApis";
import { useMutation, useQuery } from "@tanstack/react-query";
import { HandCoins, Tag } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import SpinnerMini from "../my-ui/fallbacks/SpinnerMini";
import { Skeleton } from "../ui/skeleton";

interface FormInputs {
  amount: string;
}

function RefillPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const router = useRouter();
  const searchParams = useSearchParams();
  const { isAuthLoading, isAuthenticated } = useAuth();

  const isComingFromCart = searchParams.get("cart");
  // const tid = searchParams.get("tid");

  const { data, isPending } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });

  //this api is used to refill wallet of the user by making a stripe payment
  const { mutate: walletRefillApi, isPending: isRefilling } = useMutation({
    mutationFn: walletRefill,
    onSuccess: async (data) => {
      toast.success("Redirecting to stripe...");
      await delay(2000);
      router.push(data.stripe_checkout_url);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  //this is called to referesh wallet refill process by sending a tid
  // const { mutate: walletRefreshApi, isPending: isRefreshing } = useMutation({
  //   mutationFn: walletRefresh,

  //   onSuccess: async (data) => {
  //     queryClient.invalidateQueries({ queryKey: ["user"] });
  //     queryClient.invalidateQueries({ queryKey: ["order-history"] });

  //     toast.success(data.message);
  //     const params = new URLSearchParams(searchParams.toString());

  //     //so that if it is comming from checkout page to refill it should be redirect back to checkout page if payment is success
  //     if (pathName.includes("/cart") && status === "true") {
  //       router.push("/checkout");
  //       return;
  //     }

  //     params.delete("status");
  //     params.delete("tid");
  //     const newQueryString = params.toString();
  //     const newUrl = newQueryString
  //       ? `${pathName}?${newQueryString}`
  //       : pathName;
  //     router.replace(newUrl, { scroll: false });
  //   },

  //   onError: (error) => {
  //     toast.error(error.message);
  //   },
  // });

  //to prevent unauthorized user to access this page
  useEffect(
    function () {
      if (!isAuthLoading && !isAuthenticated) {
        router.push("/login");
      }
    },
    [isAuthenticated, isAuthLoading, router],
  );

  //function to handle form submission
  function onSubmit(formValues: FormInputs) {
    let redirect_url = "";
    if (typeof window !== undefined) {
      redirect_url = `${window.location.origin}/refill/${isComingFromCart ? "/cart" : ""}`;
    }
    walletRefillApi({
      amount: formValues.amount,
      landing_redirect_url: redirect_url,
    });
  }

  return (
    <>
      <section className="container mt-16 flex flex-col justify-between gap-[1rem] xl:flex-row xl:items-start">
        <h1 className="font-montserrat text-h2-md font-600 xl:text-start xl:text-h2-xl">
          Refill your wallet
        </h1>
        <form
          className="relative flex items-start gap-[0.5rem]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="relative flex w-full flex-col gap-0.5">
            <Input
              placeholder="Enter Amount to Refill"
              type="number"
              className="w-full rounded-pill xl:w-[294px]"
              {...register("amount", {
                required: {
                  value: true,
                  message: "Please enter refill amount",
                },
                valueAsNumber: true,
                min: { value: 1, message: "Amount must be greater than 0" },
                max: {
                  value: 100,
                  message: "Amount must be less than or equal to 100",
                },
              })}
            />
            {errors.amount && (
              <p className="text-destructive">{errors.amount.message}</p>
            )}
          </div>

          <Button
            className="rounded-full !px-5 !py-3.5 font-600 shadow-none"
            size={"md"}
            type="submit"
            disabled={isRefilling}
          >
            {isRefilling ? (
              <SpinnerMini />
            ) : (
              <>
                <HandCoins size={24} className="shrink-0" /> Pay
              </>
            )}
          </Button>
        </form>

        <div className="flex items-center xl:justify-end">
          <div className="flex w-full items-center justify-center gap-2 rounded-[0.5rem] bg-muted px-[1rem] py-[0.89rem] xl:w-max">
            <Tag className="h-[15px] w-[15px]" />
            <p className="text-[1.1885rem] font-500">Current Balance</p>
            {isPending ? (
              <Skeleton className="h-[1.1885rem] w-[70px] bg-primary/10" />
            ) : (
              <p className="text-[1.1885rem] font-600 text-primary">
                ${data?.balance}
              </p>
            )}
          </div>
        </div>
      </section>
      <OrderHistoryTable />
    </>
  );
}

export default RefillPage;
