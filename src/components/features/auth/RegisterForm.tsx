"use client";

import OrLine from "@/components/features/auth/OrLine";
import SpinnerMini from "@/components/my-ui/fallbacks/SpinnerMini";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { getRegisterFormSchema } from "@/lib/zod/RegisterFormSchema";
import { useAuth } from "@/providers/AuthProvider";
import { registerUser, sendOTP } from "@/services/auth/authServices";
import { AdminRole } from "@/types/auth/LoginUserTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import LoginRedirectionModal from "./LoginRedirectionModal";
import SocialLogins from "./SocialLogins";

function RegisterForm({ isAffiliate }: { isAffiliate?: boolean }) {
  const [isOTPSent, setIsOTPSent] = useState(false);
  const { isAuthenticated, login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showRedirectionModal, setShowRedirectionModal] = useState(false);
  const [adminRole, setAdminRole] = useState<AdminRole | null>(null);
  // const [isTermsAccepted, setIsTermsAccepted] = useState<
  //   boolean | CheckedState
  // >(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const router = useRouter();

  const form = useForm<z.infer<ReturnType<typeof getRegisterFormSchema>>>({
    resolver: zodResolver(getRegisterFormSchema(isOTPSent)),
    defaultValues: {
      name: "",
      email: "",
      confirmPassword: "",
      password: "",
      otp: "",
      // phoneNumber: "",
    },
  });

  //this api is used to send user email and password to api then it will snd otp to the user provided email
  const { mutate: sendOTPApi, isPending: isSendingOTP } = useMutation({
    mutationFn: sendOTP,
    onSuccess: () => {
      toast.success("OTP has been sent to your email. Please Verify it.");
      setIsOTPSent(true);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  //this api  is used to send user email, password, confirm_password, otp
  //if all is right then it will give a user object
  //if user is affiliate then it will give a nonce field
  const { mutate: registerUserApi, isPending: isUserRegistering } = useMutation(
    {
      mutationFn: registerUser,
      onSuccess: (data) => {
        if (data.data) {
          if (data.data.nonce) {
            toast.success("You account is created successfully.");
            setAdminRole(data.data);
            form.reset();
            setShowRedirectionModal(true);
            return;
          }
        }

        toast.success("You account is created successfully.");
        form.reset();
        login(data);
        router.push("/");
      },
      onError: (error) => {
        toast.error(error.message);
      },
    },
  );

  //register process handling function
  function onSubmit(values: z.infer<ReturnType<typeof getRegisterFormSchema>>) {
    // 1.first otp is sent
    //2.then email and password with otp to to register user
    //3.if user is affiliate then send a affiliate flags to the backend api
    // if (!isTermsAccepted) return;
    if (!isOTPSent) {
      sendOTPApi({ email: values.email, password: values.password });
    } else {
      if (isAffiliate) {
        registerUserApi({
          email: values.email,
          password: values.password,
          name: values.name,
          otp: values.otp!,
          phone_number: values.phoneNumber,
          is_affiliate: 1,
        });
      } else {
        registerUserApi({
          email: values.email,
          password: values.password,
          name: values.name,
          otp: values.otp!,
          phone_number: values.phoneNumber,
        });
      }
    }
  }

  //to prevent unauthorized user to access page
  useEffect(
    function () {
      if (isAuthenticated && !isAffiliate) {
        router.push("/");
      }
    },
    [isAuthenticated, router, isAffiliate],
  );

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-[2rem]"
        >
          {isAffiliate ? (
            <h3 className="text-h1-base font-500">Sign up now</h3>
          ) : (
            <h1 className="text-h1-base font-500">Sign up now</h1>
          )}

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <div className="relative">
                  <FormControl>
                    <Input
                      placeholder=""
                      type="text"
                      {...field}
                      disabled={isSendingOTP || isUserRegistering}
                    />
                  </FormControl>
                  <FormLabel>Name</FormLabel>
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
                      type="email"
                      {...field}
                      disabled={isSendingOTP || isUserRegistering}
                    />
                  </FormControl>
                  <FormLabel>Email</FormLabel>
                </div>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <div className="relative">
                  <FormControl>
                    <Input
                      placeholder=""
                      type={showPassword ? "text" : "password"}
                      {...field}
                      disabled={isSendingOTP || isUserRegistering}
                    />
                  </FormControl>
                  <FormLabel>Password</FormLabel>
                </div>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <>
                <FormItem>
                  <div className="relative">
                    <FormControl>
                      <Input
                        placeholder=""
                        type={showPassword ? "text" : "password"}
                        {...field}
                        disabled={isSendingOTP || isUserRegistering}
                      />
                    </FormControl>
                    <FormLabel>Confirm Password</FormLabel>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-full px-3 py-1.5 text-muted-foreground hover:bg-transparent hover:text-muted-foreground"
                      onClick={togglePasswordVisibility}
                      disabled={isSendingOTP || isUserRegistering}
                    >
                      {showPassword ? (
                        <EyeOff className="h-6 w-6" />
                      ) : (
                        <Eye className="h-6 w-6" />
                      )}
                      <span className="sr-only">
                        {showPassword ? "Hide password" : "Show password"}
                      </span>
                    </Button>
                  </div>
                  <FormMessage />
                </FormItem>
              </>
            )}
          />
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <>
                <FormItem>
                  <div className="relative">
                    <FormControl>
                      <Input
                        placeholder=""
                        type="text"
                        {...field}
                        disabled={isSendingOTP || isUserRegistering}
                      />
                    </FormControl>
                    <FormLabel>Phone Number (Optional)</FormLabel>
                  </div>
                  <FormMessage />
                </FormItem>
              </>
            )}
          />
          {isOTPSent && (
            <FormField
              control={form.control}
              name="otp"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <label className="mb-[1rem] block text-sm text-muted-foreground">
                        Enter OTP that you’ve received on your email
                      </label>

                      <InputOTP maxLength={4} {...field}>
                        <InputOTPGroup>
                          <InputOTPSlot index={0} />
                          <InputOTPSlot index={1} />
                          <InputOTPSlot index={2} />
                          <InputOTPSlot index={3} />
                        </InputOTPGroup>
                      </InputOTP>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          <div className="flex gap-2">
            <Checkbox
              id="terms"
              className="mt-1 rounded-[0.2rem]"
              defaultChecked
              // checked={isTermsAccepted}
              // onCheckedChange={(value) => setIsTermsAccepted(value)}
            />
            <label className="text-xs text-muted-foreground" htmlFor="terms">
              By providing your phone number, you agree to receive SMS account
              notifications and support messages from esimcard.com. Message
              frequency may vary. Standard message and data rates may apply.
              Reply STOP to opt out. Reply HELP for help. We will not share
              mobile information with third parties for promotional or marketing
              purposes.
            </label>
          </div>
          <Button
            type="submit"
            disabled={isSendingOTP || isUserRegistering}
            className="hover:bg-primary/90 hover:text-background"
          >
            {isSendingOTP || isUserRegistering ? <SpinnerMini /> : "Register"}
          </Button>
          <OrLine />
        </form>
      </Form>
      <div className="mt-[2rem]">
        <SocialLogins isAffiliate={isAffiliate} />
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

export default RegisterForm;
