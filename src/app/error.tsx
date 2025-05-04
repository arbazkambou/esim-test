"use client";

import FooterLink from "@/components/my-ui/links/FooterLink";
import Image from "next/image";
import { useEffect } from "react";
import errorImg from "@/_assets/svgs/errorImg.svg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Something went wrong!",
};

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const links = [
    {
      text: "Explore All eSIM Destinations",
      link: "/esim/",
    },
    {
      text: "Visit Our Blog",
      link: "/blog/",
    },
    {
      text: "Contact Us",
      link: "/contact-us/",
    },
    {
      text: "Help Center",
      link: "/help-center/",
    },

    {
      text: "FAQs",
      link: "/faqs/",
    },
    {
      text: "Back to Homepage",
      link: "/",
    },
  ];
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <section className="container mt-16 grid gap-32 xl:grid-cols-[1fr_auto]">
        <div className="mt-4 flex flex-col gap-[1.62rem]">
          <h1 className="font-montserrat text-h1-base font-600 md:text-h1-md xl:text-h1-xl">
            Something Went Wrong
          </h1>

          <p className="text-[0.875rem] text-primary md:text-base">
            We’re experiencing temporary technical issues on our end. But don’t
            worry — we’re already working hard to fix it.
          </p>

          <p className="text-[0.875rem] text-destructive md:text-base">
            Please try again in a few minutes.
          </p>

          <p className="font-montserrat text-[1.25rem] font-600 md:text-[1.5rem]">
            🚀 While You Wait, Here’s What You Can Do:
          </p>

          <div className="flex flex-col gap-[0.8rem]">
            {links.map((item, index) => (
              <FooterLink
                href={item.link}
                key={index}
                className="text-sm text-primary"
              >
                {item.text}
              </FooterLink>
            ))}
          </div>
        </div>
        <div className="relative hidden h-[415px] w-[491px] rounded-[30px] bg-muted xl:block">
          <Image src={errorImg} alt="something went wrong" fill sizes="auto" />
        </div>
      </section>
      <section className="container mt-8">
        {" "}
        <div className="flex flex-col gap-[1.2rem]">
          <p className="text-[1.2rem] font-600 md:text-[1.5rem]">
            Don’t Leave Empty-Handed
          </p>
          <p className="text-base text-muted-foreground">
            We know you're comparing eSIM providers — and we're confident in
            what we offer:
          </p>

          <div className="grid gap-[1.62rem] sm:grid-cols-2 xl:grid-cols-4">
            <div className="flex w-max items-center justify-center rounded-[0.625rem] bg-primary/15 px-[2.38rem] py-[0.5rem] text-base font-500 text-primary">
              Instant Activation eSIMs
            </div>
            <div className="flex w-max items-center justify-center rounded-[0.625rem] bg-primary/15 px-[2.38rem] py-[0.5rem] text-base font-500 text-primary">
              Reliable Global Coverage
            </div>
            <div className="flex w-max items-center justify-center rounded-[0.625rem] bg-primary/15 px-[2.38rem] py-[0.5rem] text-base font-500 text-primary">
              Affordable Data Packages
            </div>
            <div className="flex w-max items-center justify-center rounded-[0.625rem] bg-primary/15 px-[2.38rem] py-[0.5rem] text-base font-500 text-primary">
              24/7 Live Support
            </div>
          </div>

          <p className="text-base text-muted-foreground">
            Still curious?{" "}
            <FooterLink
              href={"/contact-us/"}
              className="inline text-primary underline underline-offset-4"
            >
              Contact Support
            </FooterLink>{" "}
            — we’ll get back to you quickly.
          </p>
        </div>
      </section>
    </>
  );
}
