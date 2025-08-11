"use client";

import OrLine from "@/components/features/auth/OrLine";
import SpinnerMini from "@/components/my-ui/fallbacks/SpinnerMini";
import FooterLink from "@/components/my-ui/links/FooterLink";
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
import { loginFormSchema } from "@/lib/zod/LoginFormSchema";
import { useAuth } from "@/providers/AuthProvider";
import { loginUser } from "@/services/auth/authServices";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
// import { toast } from "sonner";
import { z } from "zod";
import SocialLogins from "./SocialLogins";
import LoginRedirectionModal from "./LoginRedirectionModal";
import { AdminRole } from "@/types/auth/LoginUserTypes";
import { toast } from "sonner";

function LoginForm({ isAffiliate }: { isAffiliate?: boolean }) {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showRedirectionModal, setShowRedirectionModal] = useState(false);
  const [adminRole, setAdminRole] = useState<AdminRole | null>(null);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const { isAuthenticated, login } = useAuth();
  const router = useRouter();
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: { email: "", password: "" },
  });

  //this api is used to login the user to website
  //1. if logged in user is not a simple user then it will show the redirection modal to redirect to user to there assigned portal
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
      router.push("/");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  //form submit hanndler
  function onSubmit(values: z.infer<typeof loginFormSchema>) {
    loginUserApi({ email: values.email, password: values.password });
  }

  // to prevent un authorized user to access the page
  useEffect(
    function () {
      if (isAuthenticated && !isAffiliate) router.push("/");
    },
    [isAuthenticated, router, isAffiliate],
  );

  return (
    <section className="flex flex-col gap-[2rem]">
      {isAffiliate ? (
        <h3 className="text-h1-base font-500">Sign in</h3>
      ) : (
        <h1 className="text-h1-base font-500">Sign in</h1>
      )}

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-[2rem]"
        >
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
                      disabled={isLoggingIn}
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
              <>
                <FormItem>
                  <div className="relative">
                    <FormControl>
                      <Input
                        placeholder=""
                        type={showPassword ? "text" : "password"}
                        {...field}
                        disabled={isLoggingIn}
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
                        {showPassword ? "Hide password" : "Show password"}
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

          <Button
            type="submit"
            disabled={isLoggingIn}
            className="hover:bg-primary/90 hover:text-background"
          >
            {isLoggingIn ? <SpinnerMini /> : "Login"}
          </Button>
          <OrLine />
        </form>
      </Form>
      <SocialLogins isAffiliate={isAffiliate} />
      {/* Redirection options  */}
      <LoginRedirectionModal
        setShowRedirectionModal={setShowRedirectionModal}
        showRedirectionModal={showRedirectionModal}
        adminRole={adminRole}
      />
    </section>
  );
}

export default LoginForm;
