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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { distributorPartnerFormSchema } from "@/lib/zod/DistributorPartnerFormSchema";
import { postDistributorData } from "@/services/support/PartnersApis";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import { CountrySelect } from "./CountrySelect";
import { LanguageSelect } from "./LanguageSelect";
import { MultiSelectCountry } from "./MultiSelectCountry";
import { Label } from "@/components/ui/label";

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string;

function DistributorPartnerForm() {
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const [website, setWebsite] = useState("no");
  const [websiteError, setWebsiteError] = useState("");
  const [countryId, setCountryId] = useState("");
  const [countryIdError, setCountryIdError] = useState("");
  const [language, setLanguage] = useState("");
  const [languageError, setLanguageError] = useState("");
  const [selectedCountriesId, setSelectedCountriesId] = useState<string[]>([]);
  const [selectedCountriesIdError, setSelectedCountriesIdError] = useState("");

  const { mutate: postDistributorDataApi, isPending: isSendingData } =
    useMutation({
      mutationFn: postDistributorData,
      onSuccess: (message) => {
        toast.success(message);
        form.reset();
        setWebsite("no");
        setCountryId("");
        setLanguage("");
        setSelectedCountriesId([]);
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });

  const form = useForm<z.infer<typeof distributorPartnerFormSchema>>({
    resolver: zodResolver(distributorPartnerFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone_number: "",
      business_address: "",
      business_name: "",
      expected_clients: "",
      expected_sales: "",
      how_to_sell: "",
      message: "",
      password: "",
      website_url: "",
      whatsapp_number: "",
    },
  });

  function onSubmit(values: z.infer<typeof distributorPartnerFormSchema>) {
    if (!recaptchaToken) {
      alert("Please complete the reCAPTCHA.");
      return;
    }

    if (!countryId) {
      setCountryIdError("Please select a country");
    }

    if (selectedCountriesId.length === 0) {
      setSelectedCountriesIdError("Please select some countries");
    }

    if (!website) {
      setWebsiteError("Please select website option");
    }

    if (!language) {
      setLanguageError("Please select your language");
    }

    const formData = {
      ...values,
      country_id: countryId,
      countries_to_sell: selectedCountriesId,
      website,
      language,
      "g-recaptcha-response": recaptchaToken,
    };
    postDistributorDataApi(formData);
  }

  const onCaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
    setIsCaptchaVerified(!!token);
  };

  const languages = [
    "English",
    "Arabic",
    "Spanish",
    "French",
    "Turkish",
    "German",
    "Dutch",
    "Dari (Persian)",
    "Albanian",
    "Berber",
    "Catalan",
    "Portuguese",
    "Quechua",
    "Aymara",
    "Armenian",
    "Urdu",
    "Hindi",
    "Azerbaijani",
    "Bengali",
    "Dzongkha",
    "Bosnian",
    "Croatian",
    "Serbian",
    "Setswana",
    "Bulgarian",
    "Kirundi",
    "Malay",
    "Belarusian",
    "Russian",
    "Other",
  ];

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4 md:grid md:grid-cols-2 xl:gap-x-14 xl:gap-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <div className="relative">
                  <FormControl>
                    <Input
                      {...field}
                      placeholder=""
                      className="col-span-2"
                      disabled={isSendingData}
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
                    <Input {...field} placeholder="" disabled={isSendingData} />
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
                      {...field}
                      placeholder=""
                      type="password"
                      disabled={isSendingData}
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
            name="phone_number"
            render={({ field }) => (
              <FormItem>
                <div className="relative">
                  <FormControl>
                    <Input {...field} placeholder="" disabled={isSendingData} />
                  </FormControl>
                  <FormLabel>Phone Number</FormLabel>
                </div>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="business_name"
            render={({ field }) => (
              <FormItem>
                <div className="relative">
                  <FormControl>
                    <Input {...field} placeholder="" disabled={isSendingData} />
                  </FormControl>
                  <FormLabel>Business Name</FormLabel>
                </div>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="business_address"
            render={({ field }) => (
              <FormItem>
                <div className="relative">
                  <FormControl>
                    <Input {...field} placeholder="" disabled={isSendingData} />
                  </FormControl>
                  <FormLabel>Business Address</FormLabel>
                </div>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="whatsapp_number"
            render={({ field }) => (
              <FormItem>
                <div className="relative">
                  <FormControl>
                    <Input {...field} placeholder="" disabled={isSendingData} />
                  </FormControl>
                  <FormLabel>Whatsapp Number</FormLabel>
                </div>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="expected_clients"
            render={({ field }) => (
              <FormItem>
                <div className="relative">
                  <FormControl>
                    <Input
                      {...field}
                      placeholder=""
                      type="number"
                      disabled={isSendingData}
                    />
                  </FormControl>
                  <FormLabel>Expected Clients</FormLabel>
                </div>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="expected_sales"
            render={({ field }) => (
              <FormItem>
                <div className="relative">
                  <FormControl>
                    <Input
                      {...field}
                      placeholder=""
                      type="number"
                      disabled={isSendingData}
                    />
                  </FormControl>
                  <FormLabel>Expected Sales</FormLabel>
                </div>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="how_to_sell"
            render={({ field }) => (
              <FormItem>
                <div className="relative">
                  <FormControl>
                    <Input {...field} placeholder="" disabled={isSendingData} />
                  </FormControl>
                  <FormLabel>Where Will You Sell?</FormLabel>
                </div>

                <FormMessage />
              </FormItem>
            )}
          />

          <CountrySelect countryId={countryId} setCountryId={setCountryId} />

          {countryIdError && (
            <FormMessage className="text-destructive">
              {countryIdError}
            </FormMessage>
          )}

          <MultiSelectCountry
            setSelectedCountriesId={setSelectedCountriesId}
            selectedCountriesId={selectedCountriesId}
          />

          {selectedCountriesIdError && (
            <FormMessage className="text-destructive">
              {selectedCountriesIdError}
            </FormMessage>
          )}

          {/* <div className="relative">
            <Select
              onValueChange={(value) => setLanguage(value)}
              value={language}
              disabled={isSendingData}
            >
              <FormControl>
                <SelectTrigger className="h-14 rounded-md text-sm text-muted-foreground">
                  <SelectValue placeholder="" />
                </SelectTrigger>
              </FormControl>
              <FormLabel className="text-sm font-normal text-muted-foreground">
                Which language do you speak?
              </FormLabel>
              <SelectContent>
                {languages.map((item, index) => (
                  <SelectItem key={index} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {languageError && (
              <FormMessage className="text-destructive">
                {languageError}
              </FormMessage>
            )}
          </div> */}

          <LanguageSelect
            languages={languages}
            isSendingData={isSendingData}
            language={language}
            setLanguage={setLanguage}
            languageError={languageError}
          />

          <div className="group relative">
            <Select
              value={website}
              onValueChange={(value) => setWebsite(value)}
              disabled={isSendingData}
            >
              <SelectTrigger className="h-14 rounded-md border-[1.5px] text-sm text-muted-foreground group-focus-within:border-primary group-focus-within:text-primary">
                <SelectValue placeholder="" />
              </SelectTrigger>
              <FormLabel className="text-sm font-normal text-muted-foreground group-focus-within:text-primary">
                Do you have a website?
              </FormLabel>
              <SelectContent>
                <SelectItem value="yes">Yes</SelectItem>
                <SelectItem value="no">No</SelectItem>
              </SelectContent>
            </Select>
            {websiteError && (
              <FormMessage className="text-destructive">
                {websiteError}
              </FormMessage>
            )}
          </div>
          {website !== "no" && (
            <FormField
              control={form.control}
              name="website_url"
              render={({ field }) => (
                <FormItem>
                  <div className="relative">
                    <FormControl>
                      <Input
                        {...field}
                        placeholder=""
                        disabled={isSendingData}
                      />
                    </FormControl>
                    <FormLabel>Enter website url</FormLabel>
                  </div>

                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <div className="group relative">
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder=""
                      disabled={isSendingData}
                    />
                  </FormControl>
                  <Label className="font-400 group-focus-within:text-primary">
                    Requirements
                  </Label>
                </div>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="mt-4">
          <ReCAPTCHA sitekey={RECAPTCHA_SITE_KEY} onChange={onCaptchaChange} />
        </div>
        <Button
          type="submit"
          className="mt-4 w-full hover:bg-primary/80 hover:text-background"
          disabled={!isCaptchaVerified}
        >
          {isSendingData ? <SpinnerMini /> : "Submit"}
        </Button>
      </form>
    </Form>
  );
}

export default DistributorPartnerForm;
