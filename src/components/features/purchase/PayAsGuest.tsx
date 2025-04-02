"use client";

import OrLine from "@/components/my-components/shared/OrLine";
import SpinnerMini from "@/components/my-components/shared/SpinnerMini";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/providers/AuthProvider";
import { useAppSelector } from "@/redux/hooks";
import { purchasePackagesAsGuest } from "@/services/purchase/purchaseApis";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { ArrowUpLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import SocialLogins from "../auth/login/SocialLogins";
import PaymentMethods from "./PaymentMethods";
import { usePromoCode } from "@/providers/PromoCodeProvider";

function PayAsGuest() {
  const { isAuthLoading, isAuthenticated } = useAuth();
  const { promoCodeData } = usePromoCode();
  const isNotAuthenticated = !isAuthLoading && !isAuthenticated;
  const cartItems = useAppSelector((state) => state.cart);

  const router = useRouter();

  const isCartHavePhonicoPackage = cartItems.some(
    (item) => item.provider === "Phonico",
  );

  const isCartHaveUltimatePackage = cartItems.some(
    (item) => item.provider === "ultimate_mobile",
  );

  const formSchema = z.object({
    name: z.string().min(2, {
      message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    imei:
      isCartHavePhonicoPackage || isCartHaveUltimatePackage
        ? z
            .string()
            .min(1, { message: "IMEI is required" })
            .max(20, { message: "Invalid IMEI" })
        : z.string().optional(),

    zip_code: isCartHavePhonicoPackage
      ? z
          .string()
          .min(1, { message: "Zip code is required" })
          .max(20, { message: "Invalid Zip code" })
      : z.string().optional(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const { mutate: purchasePackagesAsGuestApi, isPending: isPurchasingAsGuest } =
    useMutation({
      mutationFn: purchasePackagesAsGuest,
      onSuccess: async (data) => {
        toast.success("Redirecting to stripe...");

        Cookies.set("token", data.access_token, { expires: 365 });

        router.push(data.payment_intent);
      },

      onError: (error) => {
        toast.error(error.message);
      },
    });

  function onSubmit(values: z.infer<typeof formSchema>) {
    let redirect_url = "";

    if (typeof window !== undefined) {
      redirect_url = `${window.location.origin}/client/my-sims/`;
    }

    purchasePackagesAsGuestApi({
      ...values,
      promoCode: promoCodeData ? promoCodeData.promo_code : null,
      cartItems,
      redirect_url,
    });
  }

  return (
    <div
      className={`flex w-full items-center justify-center xl:justify-start ${isNotAuthenticated && "!order-2"} xl:!order-1`}
    >
      <div className="flex w-full flex-col gap-[25px] xl:max-w-[700px]">
        <div className="flex flex-col gap-[20px]">
          <p className="font-montserrat text-[14px] font-700 leading-none">
            Get 15% Cashback on your first order when you sign up.
          </p>
          <p className="text-[14px]">
            Your eSIM will be sent to your email. We promise to only send you
            important emails about the service quality
          </p>
        </div>

        <p className="text-[30px] font-500">Sign up / Log in</p>
        <SocialLogins isGuestPurchase={true} />
        <OrLine />
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex w-full flex-col gap-[25px]"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <div className="relative">
                    <FormControl>
                      <Input
                        placeholder=""
                        {...field}
                        disabled={isPurchasingAsGuest}
                      />
                    </FormControl>
                    <FormLabel>Full Name</FormLabel>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <div className="relative">
                    <FormControl>
                      <Input
                        placeholder=""
                        {...field}
                        disabled={isPurchasingAsGuest}
                      />
                    </FormControl>
                    <FormLabel>Email</FormLabel>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            {isCartHavePhonicoPackage || isCartHaveUltimatePackage ? (
              <FormField
                control={form.control}
                name="imei"
                render={({ field }) => (
                  <FormItem>
                    <div className="relative">
                      <FormControl>
                        <Input
                          placeholder=""
                          {...field}
                          disabled={isPurchasingAsGuest}
                        />
                      </FormControl>
                      <FormLabel>IMEI Number</FormLabel>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ) : (
              ""
            )}

            {isCartHavePhonicoPackage && (
              <FormField
                control={form.control}
                name="zip_code"
                render={({ field }) => (
                  <FormItem>
                    <div className="relative">
                      <FormControl>
                        <Input
                          placeholder=""
                          {...field}
                          disabled={isPurchasingAsGuest}
                        />
                      </FormControl>
                      <FormLabel>Zip Code</FormLabel>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <Button
              className={`group flex items-center gap-3 text-sm`}
              type="submit"
              disabled={isPurchasingAsGuest}
            >
              {isPurchasingAsGuest ? (
                <SpinnerMini />
              ) : (
                <>
                  <ArrowUpLeft
                    className="transition group-hover:rotate-90 group-hover:text-foreground"
                    size={20}
                  />
                  Continue as Guest
                </>
              )}
            </Button>
          </form>
        </Form>
        <PaymentMethods />
      </div>
    </div>
  );
}

export default PayAsGuest;
