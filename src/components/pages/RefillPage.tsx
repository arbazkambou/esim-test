"use client";

import OrderHistoryTable from "@/components/features/purchase/OrderHistoryTable";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getUser } from "@/services/user/userApis";
import { useMutation, useQuery } from "@tanstack/react-query";
import { HandCoins, Tag } from "lucide-react";
import { useForm } from "react-hook-form";
import { Skeleton } from "../ui/skeleton";
import { walletRefill } from "@/services/purchase/purchaseApis";
import toast from "react-hot-toast";
import SpinnerMini from "../my-components/shared/SpinnerMini";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "@/providers/AuthProvider";

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
  const status = searchParams.get("status");
  const { isAuthLoading, isAuthenticated } = useAuth();

  const { data, isPending } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });

  const { mutate: walletRefillApi, isPending: isRefilling } = useMutation({
    mutationFn: walletRefill,
    onSuccess: (data) => {
      toast.success("Redirecting to stripe...");
      router.push(data.stripe_checkout_url);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  useEffect(() => {
    if (status === "true") {
      toast.success("Payment successful.");
    } else if (status === "false") {
      toast.error("Payment failed. Please try again.");
    }
  }, [status]);

  useEffect(
    function () {
      if (!isAuthLoading && !isAuthenticated) {
        router.push("/login");
      }
    },
    [isAuthenticated, isAuthLoading, router],
  );

  function onSubmit(formValues: FormInputs) {
    let redirect_url = "";
    if (typeof window !== undefined) {
      redirect_url = `${window.location.origin}/refill/`;
    }
    walletRefillApi({
      amount: formValues.amount,
      landing_redirect_url: redirect_url,
    });
  }
  return (
    <>
      <section className="container mt-16 flex flex-col justify-between gap-[1rem] xl:flex-row xl:items-center">
        <h1 className="font-montserrat text-h2-md font-600 xl:text-start xl:text-h2-xl">
          Refill your wallet
        </h1>
        <form
          className="relative flex items-center gap-[0.5rem]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            placeholder="Enter Amount to Refill"
            className="w-full rounded-pill xl:w-[294px]"
            {...register("amount", {
              required: {
                value: true,
                message: "Please enter refill amount",
              },
            })}
          />
          {errors.amount && (
            <p className="text-destructive">{errors.amount.message}</p>
          )}

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
