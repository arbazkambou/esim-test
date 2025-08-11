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
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { getPasswordResetFormSchema } from "@/lib/zod/PasswordResetFormSchema";
import {
  sendPasswordResetData,
  sendPasswordResetPin,
} from "@/services/auth/authServices";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

interface PropsType {
  setIsOTP: React.Dispatch<React.SetStateAction<boolean>>;
}

function PasswordResetForm({ setIsOTP }: PropsType) {
  const [isOTPSent, setIsOTPSent] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<ReturnType<typeof getPasswordResetFormSchema>>>({
    resolver: zodResolver(getPasswordResetFormSchema(isOTPSent)),
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isOTPResending, setIsOTPResending] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const { getValues, resetField } = form;

  //this is used to send password reset pin to the user provided email address
  const { mutate: sendPasswordResetPinApi, isPending: isSendingOTP } =
    useMutation({
      mutationFn: sendPasswordResetPin,
      onSuccess: (data) => {
        toast.success(data);
        setIsOTPSent(true);
        setIsOTP(true);
        setIsOTPResending(false);
        resetField("otp");
      },
      onError: (error) => {
        setIsOTPResending(false);
        toast.error(error.message);
      },
    });

  //this api is used to send new password, confirm_password with otp to reset there password
  const { mutate: sendPasswordResetDataApi, isPending: isDataSending } =
    useMutation({
      mutationFn: sendPasswordResetData,
      onSuccess: (data) => {
        toast.success(data);
        router.push("/login");
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });

  //functio to handle form submission for password reset
  function onSubmit(
    values: z.infer<ReturnType<typeof getPasswordResetFormSchema>>,
  ) {
    if (!isOTPSent) {
      sendPasswordResetPinApi(values.email);
    } else {
      sendPasswordResetDataApi({
        email: values.email,
        password: values.password!,
        password_confirmation: values.confirmPassword!,
        token: values.otp!,
      });
    }
  }

  function resendOTP() {
    const email = getValues("email");
    if (email) {
      setIsOTPResending(true);
      sendPasswordResetPinApi(email);
    } else {
      toast.error("Please enter your email.");
    }
  }

  return (
    <section className="container mx-auto flex flex-col gap-[1.3rem] xl:mt-5">
      <div className="flex items-center gap-3">
        <Link href={"/login"} className="transition-colors hover:text-primary">
          <ArrowLeft className="h-[24px] w-[24px]" />
        </Link>
        <h1 className="font-montserrat text-[1.5rem] font-500">
          Reset Password
        </h1>
      </div>
      <p className="text-body-sm">
        We will send you OTP to reset your password
      </p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
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
                      disabled={isSendingOTP || isDataSending}
                    />
                  </FormControl>
                  <FormLabel>Email</FormLabel>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          {isOTPSent && (
            <>
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <div className="relative">
                      <FormControl>
                        <Input
                          placeholder=""
                          autoComplete="new-password"
                          type={showPassword ? "text" : "password"}
                          {...field}
                          disabled={isSendingOTP || isDataSending}
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
                  <FormItem>
                    <div className="relative">
                      <FormControl>
                        <Input
                          placeholder=""
                          autoComplete="new-password"
                          type={showPassword ? "text" : "password"}
                          {...field}
                          disabled={isSendingOTP || isDataSending}
                        />
                      </FormControl>
                      <FormLabel>Confirm Password</FormLabel>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full px-3 py-1.5 text-muted-foreground hover:bg-transparent hover:text-muted-foreground"
                        onClick={togglePasswordVisibility}
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
                )}
              />

              <div className="flex flex-col gap-1.5">
                <FormField
                  control={form.control}
                  name="otp"
                  render={({ field }) => (
                    <FormItem>
                      <label className="mb-[0.5rem] block text-sm text-muted-foreground">
                        Enter OTP that you’ve received on your email
                      </label>
                      <FormControl>
                        <InputOTP maxLength={4} {...field}>
                          <InputOTPGroup>
                            <InputOTPSlot index={0} />
                            <InputOTPSlot index={1} />
                            <InputOTPSlot index={2} />
                            <InputOTPSlot index={3} />
                          </InputOTPGroup>
                        </InputOTP>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  size="sm"
                  className="w-max"
                  onClick={resendOTP}
                  type="button"
                  disabled={isSendingOTP || isDataSending}
                >
                  {isSendingOTP ? <SpinnerMini /> : "Resend OTP"}
                </Button>
              </div>
            </>
          )}

          <Button type="submit" disabled={isSendingOTP || isDataSending}>
            {isDataSending || (isSendingOTP && !isOTPResending) ? (
              <SpinnerMini />
            ) : (
              "Submit"
            )}
          </Button>
        </form>
      </Form>
    </section>
  );
}

export default PasswordResetForm;
