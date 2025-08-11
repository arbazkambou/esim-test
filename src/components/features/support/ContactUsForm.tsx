"use client";

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
import { Textarea } from "@/components/ui/textarea";
import { contactUsFormSchema } from "@/lib/zod/ContactUsFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { postContactUsData } from "@/services/support/SupportApis";
import { toast } from "sonner";
import SpinnerMini from "@/components/my-ui/fallbacks/SpinnerMini";

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string;

function ContactUsForm() {
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

  const form = useForm<z.infer<typeof contactUsFormSchema>>({
    resolver: zodResolver(contactUsFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      phone_number: "",
      message: "",
    },
  });

  const { mutate: postContactUsDataApi, isPending: isPostingData } =
    useMutation({
      mutationFn: postContactUsData,
      onSuccess: (message) => {
        form.reset();
        toast.success(message);
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  function onSubmit(values: z.infer<typeof contactUsFormSchema>) {
    if (!recaptchaToken) {
      alert("Please complete the reCAPTCHA.");
      return;
    }
    postContactUsDataApi({ ...values, "g-recaptcha-response": recaptchaToken });
  }

  const onCaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
    setIsCaptchaVerified(!!token);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid gap-4 md:grid-cols-2 xl:gap-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <div className="relative">
                  <FormControl>
                    <Input {...field} placeholder="" />
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
                    <Input {...field} placeholder="" disabled={isPostingData} />
                  </FormControl>
                  <FormLabel>Email</FormLabel>
                </div>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <div className="relative">
                  <FormControl>
                    <Input {...field} placeholder="" disabled={isPostingData} />
                  </FormControl>
                  <FormLabel>Subject</FormLabel>
                </div>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone_number"
            render={({ field }) => (
              <FormItem>
                <div className="relative">
                  <FormControl>
                    <Input {...field} placeholder="" disabled={isPostingData} />
                  </FormControl>
                  <FormLabel>Phone Number</FormLabel>
                </div>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <div className="relative">
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder=""
                      rows={6}
                      disabled={isPostingData}
                    />
                  </FormControl>
                  <FormLabel className="text-sm font-400">Message</FormLabel>
                </div>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {/* reCAPTCHA */}
        <div className="mt-4">
          <ReCAPTCHA sitekey={RECAPTCHA_SITE_KEY} onChange={onCaptchaChange} />
        </div>

        <Button
          type="submit"
          className="mt-4 w-full"
          disabled={!isCaptchaVerified || isPostingData}
        >
          {isPostingData ? <SpinnerMini /> : "Submit"}
        </Button>
      </form>
    </Form>
  );
}

export default ContactUsForm;
