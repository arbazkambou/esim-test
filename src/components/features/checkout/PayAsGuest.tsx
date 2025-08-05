"use client";

import OrLine from "@/components/features/auth/OrLine";
import SpinnerMini from "@/components/my-ui/fallbacks/SpinnerMini";
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
import { ArrowUpLeft, Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import SocialLogins from "../auth/SocialLogins";
import PaymentMethods from "./PaymentMethods";
import { usePromoCode } from "@/providers/PromoCodeProvider";
import FooterLink from "@/components/my-ui/links/FooterLink";
import { useState } from "react";
import { loginUser } from "@/services/auth/authServices";
import { AdminRole } from "@/types/auth/LoginUserTypes";
import LoginRedirectionModal from "../auth/LoginRedirectionModal";
import { getPayAsGuestFormSchema } from "@/lib/zod/PayAsGuestFormSchema";
import { sendGTMEvent } from "@next/third-parties/google";
import { getTotalCartPrice } from "@/redux/slices/cartSlice";

function PayAsGuest() {
  const { isAuthLoading, isAuthenticated, login } = useAuth();
  const [isUserExist, setIsUserExist] = useState(false);
  const [adminRole, setAdminRole] = useState<AdminRole | null>(null);
  const [showRedirectionModal, setShowRedirectionModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { promoCodeData } = usePromoCode();
  const router = useRouter();
  const cartItems = useAppSelector((state) => state.cart);
  const totalCartPrice = useAppSelector((state) =>
    getTotalCartPrice(state.cart),
  );

  const isNotAuthenticated = !isAuthLoading && !isAuthenticated;

  const isCartHavePhonicoPackage = cartItems.some(
    (item) => item.provider === "Phonico",
  );

  const isCartHaveUltimatePackage = cartItems.some(
    (item) => item.provider === "ultimate_mobile",
  );

  //getPayAsGuestFormSchema is a function to generate form Schema dynamically
  const form = useForm<z.infer<ReturnType<typeof getPayAsGuestFormSchema>>>({
    resolver: zodResolver(
      getPayAsGuestFormSchema({
        isCartHavePhonicoPackage,
        isCartHaveUltimatePackage,
        isUserExist,
      }),
    ),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      zip_code: "",
      imei: "",
    },
  });

  //This api is used to facilitate guest purchase,
  //1.if user is not exis already then login the user with acess token comming from api and redirect user to stripe page for payment process
  //2. If user already have an account then shows the password field and login with email and password here in this component
  const { mutate: purchasePackagesAsGuestApi, isPending: isPurchasingAsGuest } =
    useMutation({
      mutationFn: purchasePackagesAsGuest,
      onSuccess: async (data) => {
        if (data.account) {
          toast.success(
            "Your email address is already registered. Please login with your password.",
          );
          setIsUserExist(true);
          return;
        }
        toast.success("Redirecting to stripe...");
        Cookies.set("isPaymentFromStripe", "true");
        Cookies.set("isPurchase", "true");
        Cookies.set("token", data.access_token, { expires: 365 });
        router.push(data.payment_intent);
      },

      onError: (error) => {
        toast.error(error.message);
      },
    });

  //This api is called to logged in the user if it already have an account
  const { mutate: loginUserApi, isPending: isLoggingIn } = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      if (data.data) {
        if (data.data.nonce) {
          setAdminRole(data.data);
          form.reset();
          setShowRedirectionModal(true);
          return;
        }
      }
      toast.success("Your are logged in successfully");
      login(data);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  //Form submit function for purchaing or login purpose
  //1. if it is a guest user then take his email and name , for phonico it will take zip code and imei number as well and for ultimate it will only take imei number from user
  //2. if it is a existing user then take his email and password and calls the login api
  function onSubmit(
    values: z.infer<ReturnType<typeof getPayAsGuestFormSchema>>,
  ) {
    if (isUserExist) {
      loginUserApi({
        email: values.email,
        password: values.password ? values.password : "",
      });

      return;
    }

    const items = cartItems.map((item) => ({
      item_id: item.id,
      email: values.email,
      item_name: item.name,
      price: item.price,
      quantity: item.quantity,
      affiliation: "eSIM Card Web",
      item_brand: item.provider,
      item_category: item.package_type,
      coupon: promoCodeData ? promoCodeData.promo_code : "",
    }));

    sendGTMEvent({
      event: "add_payment_info",
      ecommerce: {
        payment_type: "Guest User",
        currency: "USD",
        value: promoCodeData ? promoCodeData.total_amount : totalCartPrice,
        items: items,
      },
    });

    let redirect_url = "";
    const referral = Cookies.get("referral");
    if (typeof window !== undefined) {
      redirect_url = `${window.location.origin}/sim-buy-thank-you/`;
    }

    //calls this api to facilitate guest purchase by sending relevent inputs
    purchasePackagesAsGuestApi({
      ...values,
      redirect_url,
      promoCode: promoCodeData
        ? promoCodeData.promo_code
        : referral
          ? referral
          : null,
      cartItems,
    });
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div
        className={`flex w-full items-center justify-center xl:justify-start ${isNotAuthenticated && "!order-2"} xl:!order-1`}
      >
        <div className="flex w-full flex-col gap-[25px] xl:max-w-[700px]">
          <div className="flex flex-col gap-[15px] sm:gap-[20px]">
            <p className="font-montserrat text-[14px] font-700 leading-none">
              Get 15% Cashback on your first order when you sign up.
            </p>
            <p className="text-[14px] leading-normal">
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
              {/* name input  */}
              {!isUserExist && (
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
                            disabled={isPurchasingAsGuest || isLoggingIn}
                          />
                        </FormControl>
                        <FormLabel>Full Name</FormLabel>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
              {/* email input  */}
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
                          disabled={isPurchasingAsGuest || isLoggingIn}
                        />
                      </FormControl>
                      <FormLabel>Email</FormLabel>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* password input  */}
              {isUserExist && (
                <>
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <>
                        <FormItem>
                          <div className="relative">
                            <FormControl>
                              <Input
                                placeholder=""
                                type={showPassword ? "text" : "password"}
                                {...field}
                                disabled={isPurchasingAsGuest || isLoggingIn}
                              />
                            </FormControl>
                            <FormLabel>Password</FormLabel>
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              className="absolute right-0 top-0 h-full px-3 py-1.5 text-muted-foreground hover:bg-transparent hover:text-muted-foreground"
                              onClick={togglePasswordVisibility}
                              disabled={isLoggingIn}
                            >
                              {showPassword ? (
                                <EyeOff className="h-6 w-6" />
                              ) : (
                                <Eye className="h-6 w-6" />
                              )}
                              <span className="sr-only">
                                {showPassword
                                  ? "Hide password"
                                  : "Show password"}
                              </span>
                            </Button>
                          </div>
                          <FormMessage />
                        </FormItem>
                      </>
                    )}
                  />

                  <FooterLink
                    href={"/password/reset"}
                    className="-mt-4 ms-2 text-sm text-primary"
                  >
                    Forgot password?
                  </FooterLink>
                </>
              )}
              {/* imei input  */}
              {!isUserExist &&
                (isCartHavePhonicoPackage || isCartHaveUltimatePackage) && (
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
                              disabled={isPurchasingAsGuest || isLoggingIn}
                            />
                          </FormControl>
                          <FormLabel>IMEI Number</FormLabel>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
              {/* zip code input */}
              {!isUserExist && isCartHavePhonicoPackage && (
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
                            disabled={isPurchasingAsGuest || isLoggingIn}
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
                disabled={isPurchasingAsGuest || isLoggingIn}
              >
                {isPurchasingAsGuest || isLoggingIn ? (
                  <SpinnerMini />
                ) : (
                  <>
                    <ArrowUpLeft
                      className="transition group-hover:rotate-90 group-hover:text-foreground"
                      size={20}
                    />
                    {isUserExist ? "Login" : " Continue as Guest"}
                  </>
                )}
              </Button>
            </form>
          </Form>

          {!isUserExist && (
            <>
              {/* terms and conditions  */}
              <p className="text-xs">
                By clicking 'Continue as Guest' you agree to our{" "}
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

              <PaymentMethods />
            </>
          )}
        </div>
      </div>
      {/* Redirection options  */}
      <LoginRedirectionModal
        setShowRedirectionModal={setShowRedirectionModal}
        showRedirectionModal={showRedirectionModal}
        adminRole={adminRole}
      />
    </>
  );
}

export default PayAsGuest;
