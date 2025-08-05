"use client";
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
import { redeemFormSchema } from "@/lib/zod/redeemFormSchema";
import { RedeemSimInputs } from "@/services/purchase/purchaseApis";
import { SimUsage } from "@/types/purchase/SimUsage";
import { zodResolver } from "@hookform/resolvers/zod";
import { UseMutateFunction } from "@tanstack/react-query";
import { ArrowUpLeft } from "lucide-react";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { z } from "zod";

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string;

interface PropsType {
  isUsageLoading: boolean;
  redeemSimUsageApi: UseMutateFunction<
    SimUsage,
    Error,
    RedeemSimInputs,
    unknown
  >;
}

function RedeemForm({ isUsageLoading, redeemSimUsageApi }: PropsType) {
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const form = useForm<z.infer<typeof redeemFormSchema>>({
    resolver: zodResolver(redeemFormSchema),
    defaultValues: {
      iccid: "",
    },
  });

  function onSubmit(values: z.infer<typeof redeemFormSchema>) {
    redeemSimUsageApi({
      iccid: values.iccid,
      gCaptchaToken: recaptchaToken ? recaptchaToken : "",
    });
    form.reset();
  }

  const onCaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
    setIsCaptchaVerified(!!token);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-[1.56rem]"
      >
        <FormField
          control={form.control}
          name="iccid"
          render={({ field }) => (
            <FormItem>
              <div className="relative">
                <FormControl>
                  <Input placeholder="" {...field} disabled={isUsageLoading} />
                </FormControl>
                <FormLabel>Enter Your eSIM ID or ICCID</FormLabel>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <p className="text-[0.9375rem] italic text-muted-foreground">
          You can find this number in your device settings or from your eSIM
          confirmation email.
        </p>
        <Button
          className={`group flex w-full items-center gap-3 text-sm`}
          disabled={isUsageLoading || !isCaptchaVerified}
        >
          {isUsageLoading ? (
            <SpinnerMini />
          ) : (
            <>
              <ArrowUpLeft
                className="transition group-hover:rotate-90 group-hover:text-foreground"
                size={20}
              />
              Redeem
            </>
          )}
        </Button>
      </form>
      <div className="mt-4">
        <ReCAPTCHA sitekey={RECAPTCHA_SITE_KEY} onChange={onCaptchaChange} />
      </div>
    </Form>
  );
}

export default RedeemForm;
