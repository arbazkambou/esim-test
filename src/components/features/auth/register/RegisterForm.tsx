"use client";

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
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useAuth } from "@/providers/AuthProvider";
import { registerUser, sendOTP } from "@/services/auth/authServices";
import { getRegisterFormSchema } from "@/lib/zod/RegisterFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import { Eye, EyeOff } from "lucide-react";
import OrLine from "@/components/my-components/shared/OrLine";
import SocialLogins from "../login/SocialLogins";

function RegisterForm({ isAffiliate }: { isAffiliate?: boolean }) {
  const [isOTPSent, setIsOTPSent] = useState(false);
  const { isAuthenticated, login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const router = useRouter();
  const form = useForm<z.infer<ReturnType<typeof getRegisterFormSchema>>>({
    resolver: zodResolver(getRegisterFormSchema(isOTPSent)),
  });

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

  const { mutate: registerUserApi, isPending: isUserRegistering } = useMutation(
    {
      mutationFn: registerUser,
      onSuccess: (data) => {
        toast.success("You account is created successfully.");
        login(data);
        router.push("/");
      },
      onError: (error) => {
        toast.error(error.message);
      },
    },
  );

  function onSubmit(values: z.infer<ReturnType<typeof getRegisterFormSchema>>) {
    if (!isOTPSent) {
      sendOTPApi({ email: values.email, password: values.password });
    } else {
      if (isAffiliate) {
        registerUserApi({
          email: values.email,
          password: values.password,
          name: values.name,
          otp: values.otp!,
          is_affiliate: 1,
        });
      } else {
        registerUserApi({
          email: values.email,
          password: values.password,
          name: values.name,
          otp: values.otp!,
        });
      }
    }
  }

  useEffect(
    function () {
      if (isAuthenticated && !isAffiliate) {
        router.push("/");
      }
    },
    [isAuthenticated, router, isAffiliate],
  );

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-[2rem]"
      >
        <h1 className="text-h1-base font-500">Sign up now</h1>
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

        <Button
          type="submit"
          disabled={isSendingOTP || isUserRegistering}
          className="hover:bg-primary/90 hover:text-background"
        >
          {isSendingOTP || isUserRegistering ? <SpinnerMini /> : "Register"}
        </Button>
        <OrLine />
        <SocialLogins />
      </form>
    </Form>
  );
}

export default RegisterForm;
