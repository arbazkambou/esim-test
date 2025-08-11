"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { careersFormSchema } from "@/lib/zod/CareersFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { ArrowUpLeft } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string;

export default function CareerForm() {
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

  const form = useForm<z.infer<typeof careersFormSchema>>({
    resolver: zodResolver(careersFormSchema),
    defaultValues: {
      name: "",
      email: "",
      linkedIn: "",
    },
  });

  const onSubmit = (values: z.infer<typeof careersFormSchema>) => {
    if (!recaptchaToken) {
      toast.error("Please complete the reCAPTCHA.");
      return;
    }

    const formData = {
      ...values,
      "g-recaptcha-response": recaptchaToken,
    };

    console.log("Submitted values:", formData);
    toast.success("Form submitted successfully!");
    form.reset();
    setRecaptchaToken(null);
    setIsCaptchaVerified(false);
  };

  const onCaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
    setIsCaptchaVerified(!!token);
  };

  return (
    <section className="container mt-16">
      <div className="flex flex-col gap-[2rem]">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-1 gap-4 md:grid-cols-3"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <div className="relative">
                    <FormControl>
                      <Input type="text" {...field} placeholder="" />
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
                      <Input type="email" {...field} placeholder="" />
                    </FormControl>
                    <FormLabel>Email Address</FormLabel>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="linkedIn"
              render={({ field }) => (
                <FormItem>
                  <div className="relative">
                    <FormControl>
                      <Input type="url" {...field} placeholder="" />
                    </FormControl>
                    <FormLabel>LinkedIn Profile</FormLabel>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="mt-16 flex flex-col items-center justify-center gap-6 md:flex-row md:justify-evenly">
              <div>
                <ReCAPTCHA
                  sitekey={RECAPTCHA_SITE_KEY}
                  onChange={onCaptchaChange}
                />
              </div>
              <div>
                <button
                  type="submit"
                  disabled={!isCaptchaVerified}
                  className={`flex w-full items-center justify-center gap-3 rounded-lg px-7 py-4 transition-all duration-300 ease-in-out md:w-[200px] ${
                    isCaptchaVerified
                      ? "bg-[#008E7C] text-white hover:scale-105 hover:bg-[#006A5F]"
                      : "cursor-not-allowed bg-gray-400 text-white"
                  }`}
                >
                  <ArrowUpLeft className="transition group-hover:rotate-90 group-hover:text-foreground" />
                  <span className="transition-all group-hover:text-secondary-foreground">
                    Submit
                  </span>
                </button>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
}
