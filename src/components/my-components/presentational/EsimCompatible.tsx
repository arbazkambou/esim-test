"use client";

import esimSS from "@/_assets/images/esimSS.png";
import {
  cardVariantPrimary,
  heroImageVariants,
  heroTextVariants,
} from "@/animations/animations";
import Reveal from "@/animations/Reveal";
import { Button } from "@/components/ui/button";
import { ArrowUpLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function EsimCompatible() {
  const sampleDevices = [
    "Pixel 4 and Later",
    "iPhone XS and Later",
    "Huawei P40 and Later",
    "Samsung Galaxy S20 - S23 Series",
  ];
  return (
    <section className="mt-16 bg-primary-gradient">
      <div className="container flex flex-col items-center gap-[2.31rem] px-[2rem] py-[3rem] md:gap-[2.88rem] md:px-[4.25rem] md:py-[5.38rem] xl:grid xl:grid-cols-9 xl:items-start xl:gap-x-[3rem] xl:gap-y-[2rem] xl:px-[2rem] xl:py-[4rem] xxl:gap-y-[2rem]">
        {/* text section  */}
        <Reveal
          className="flex flex-col gap-[1.31rem] xl:col-span-4 xl:mt-4 xl:gap-[3.06rem]"
          variants={heroTextVariants}
        >
          <h2 className="text-center font-montserrat text-h2-base font-500 text-background md:text-h2-md xl:text-start xl:text-h2-xl">
            Check if your phone is eSIM Compatible
          </h2>
          <p className="text-center text-body-sm text-background/80 md:text-body-md xl:text-start">
            As you feel the need to use eSIM on your phone, the first question
            that arises is: does your mobile support eSIMs? And do
            eSIM-compatible devices work in all regions worldwide?
          </p>
          <Link href={"/esim-compatible"} className="hidden xl:block">
            <Button className="group flex items-center gap-3 bg-white/10 text-sm hover:text-primary">
              <ArrowUpLeft
                className="transition group-hover:rotate-90 group-hover:text-primary"
                size={20}
              />
              All eSlM-compatible phones
            </Button>
          </Link>
        </Reveal>

        {/* sample devices on mobile  */}
        <div className="grid place-content-start gap-[0.56rem] md:grid-cols-2 xl:hidden xl:grid-cols-5">
          <h3 className="sr-only">Some phones that support eSIM technology</h3>
          {sampleDevices.map((item, index) => (
            <Reveal
              className="w-max place-self-center rounded-pill bg-background px-[1.5rem] py-[1rem] text-body-sm font-500 text-foreground/80 md:place-self-end"
              key={index}
              custom={index}
              variants={cardVariantPrimary}
            >
              {item}
            </Reveal>
          ))}
        </div>

        {/* link button on mobile  */}
        <Link href={"/esim-compatible"} className="xl:hidden">
          <Reveal variants={heroTextVariants}>
            <Button className="group flex items-center gap-3 bg-white/10 text-sm hover:text-primary">
              <ArrowUpLeft
                className="transition group-hover:rotate-90 group-hover:text-primary"
                size={20}
              />
              All eSlM-compatible phones
            </Button>
          </Reveal>
        </Link>

        {/* hero image  */}
        <Reveal
          className="relative hidden h-[412px] w-full max-w-[612px] md:block xl:col-span-5 xl:max-w-full"
          variants={heroImageVariants}
        >
          <Image
            src={esimSS}
            alt="Distribution Partner with eSIMCard eSIM"
            fill
            sizes="auto"
            className="rounded-[2rem] object-cover transition-all hover:scale-105"
            quality={70}
          />
        </Reveal>

        {/* devices on desktop  */}
        <div className="hidden xl:col-span-9 xl:flex xl:items-center xl:justify-end xl:gap-1">
          <h3 className="sr-only">Some phones that support eSIM technology</h3>

          {sampleDevices.map((item, index) => (
            <Reveal key={index} variants={cardVariantPrimary} custom={index}>
              <p className="w-max rounded-pill bg-background px-[1rem] py-[0.5rem] text-xs font-500 text-foreground/80 md:place-self-end xxl:text-body-sm">
                {item}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EsimCompatible;
