import FooterLink from "@/components/my-components/links/FooterLink";
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
import { loginFormSchema } from "@/lib/zod/LoginFormSchema";
import { useAuth } from "@/providers/AuthProvider";
import { loginUser } from "@/services/auth/authServices";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import SocialLogins from "./SocialLogins";
import { Eye, EyeOff } from "lucide-react";

function LoginForm() {
  const [showPassword, setShowPassword] = React.useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const { isAuthenticated, login } = useAuth();
  const router = useRouter();
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
  });

  const { mutate: loginUserApi, isPending: isLoggingIn } = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      toast.success("Your are logged in successfully.");
      login(data);
      router.push("/");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  function onSubmit(values: z.infer<typeof loginFormSchema>) {
    loginUserApi({ email: values.email, password: values.password });
  }

  useEffect(
    function () {
      if (isAuthenticated) router.push("/");
    },
    [isAuthenticated, router],
  );

  return (
    <section className="flex flex-col gap-[2rem]">
      <h1 className="text-h1-base font-500">Sign in</h1>
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
            href={"/password-reset"}
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
          <SocialLogins />
        </form>
      </Form>
    </section>
  );
}

export default LoginForm;
