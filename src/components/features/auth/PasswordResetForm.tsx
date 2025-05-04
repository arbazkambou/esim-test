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
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
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

  //this is used to send password reset pin to the user provided email address
  const { mutate: sendPasswordResetPinApi, isPending: isSendingOTP } =
    useMutation({
      mutationFn: sendPasswordResetPin,
      onSuccess: (data) => {
        toast.success(data);
        setIsOTPSent(true);
        setIsOTP(true);
      },
      onError: (error) => {
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

  return (
    <section className="container mx-auto flex flex-col gap-[1.3rem] xl:mt-5">
      <div className="flex items-center gap-3">
        <ArrowLeft className="h-[24px] w-[24px]" />
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
                          type="password"
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
                          type="password"
                          {...field}
                          disabled={isSendingOTP || isDataSending}
                        />
                      </FormControl>
                      <FormLabel>Confirm Password</FormLabel>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="otp"
                render={({ field }) => (
                  <FormItem>
                    <label className="mb-[1rem] block text-sm text-muted-foreground">
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
