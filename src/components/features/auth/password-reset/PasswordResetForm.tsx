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
import {
  sendPasswordResetData,
  sendPasswordResetPin,
} from "@/services/auth/authServices";
import { getPasswordResetFormSchema } from "@/lib/zod/PasswordResetFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

function PasswordResetForm() {
  const [isOTPSent, setIsOTPSent] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<ReturnType<typeof getPasswordResetFormSchema>>>({
    resolver: zodResolver(getPasswordResetFormSchema(isOTPSent)),
  });

  const { mutate: sendPasswordResetPinApi, isPending: isSendingOTP } =
    useMutation({
      mutationFn: sendPasswordResetPin,
      onSuccess: (data) => {
        toast.success(data);
        setIsOTPSent(true);
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });

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

  return (
    <section className="container mx-auto mt-5">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your email"
                    type="email"
                    {...field}
                    disabled={isSendingOTP || isDataSending}
                  />
                </FormControl>
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
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your password"
                        type="password"
                        {...field}
                        disabled={isSendingOTP || isDataSending}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Confirm your password"
                        type="password"
                        {...field}
                        disabled={isSendingOTP || isDataSending}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="otp"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>OTP</FormLabel>
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
            </>
          )}

          <Button type="submit" disabled={isSendingOTP || isDataSending}>
            {isDataSending || isSendingOTP ? <SpinnerMini /> : "Submit"}
          </Button>
        </form>
      </Form>
    </section>
  );
}

export default PasswordResetForm;
