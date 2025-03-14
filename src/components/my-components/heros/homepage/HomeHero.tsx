"use client";
import japan from "@/_assets/flags/japan.svg";
import russia from "@/_assets/flags/russia.svg";
import spain from "@/_assets/flags/spain.svg";
import turkey from "@/_assets/flags/turkey.svg";
import uae from "@/_assets/flags/uae.svg";
import uk from "@/_assets/flags/uk.svg";
import usa from "@/_assets/flags/usa.svg";
import hero from "@/_assets/images/hero.png";
import fiveStars from "@/_assets/svgs/5Star.svg";
import {
  flagContainerVariants,
  heroImageVariants,
  heroTextVariants,
  searchInputVariant,
  socialButtonsVariants,
} from "@/animations/animations";
import RevealAuto from "@/animations/RevealAuto";
import SocialsButtons from "@/components/my-components/shared/SocialsButtons";
import { Button } from "@/components/ui/button";
import { ArrowUpLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CountryRegionSearch from "../../shared/CountryRegionSearch";

function HomeHero() {
  const countryFlags = [
    { imgSrc: usa, name: "USA", href: "/esim/united-states" },
    { imgSrc: uk, name: "UK", href: "/esim/united-kingdom" },
    { imgSrc: japan, name: "Japan", href: "/esim/japan" },
    { imgSrc: uae, name: "UAE", href: "/esim/united-arab-emirates" },
    { imgSrc: turkey, name: "Turkey", href: "/esim/turkey" },
    { imgSrc: spain, name: "Spain", href: "/esim/spain" },
    { imgSrc: russia, name: "Russia", href: "/esim/russia" },
  ];

  return (
    <section className="container mt-16 grid gap-14 bg-background xl:mt-0 xl:grid-cols-5 xxl:mt-10">
      {/* Left Side: Text Content */}
      <RevealAuto
        variants={heroTextVariants}
        className="flex flex-col justify-center gap-12 md:gap-16 xl:col-span-3"
      >
        {/* Headings and text */}
        <div className="flex flex-col gap-6">
          <h1 className="text-center font-montserrat text-4xl md:text-start xl:text-6xl">
            <span className="font-700 text-foreground">eSIM</span> Card <br />
            We <span className="font-700 text-foreground">Connect</span> <br />
            You <span className="font-700 text-primary">Globally</span>
          </h1>
          <p className="text-sm opacity-80 xl:text-xl">
            Travel Smart with Affordable eSIM Data Plans and High Speed
            Internet. Our eSIMs Offer Coverage in Nearly Every Corner of the
            World!
          </p>
        </div>

        {/* Flags with Hover Effect */}
        <RevealAuto className="flex" variants={flagContainerVariants}>
          {countryFlags.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`group flex flex-col justify-center gap-0.5 transition duration-300 hover:-translate-y-6 ${
                index !== 0 ? "-ml-2" : ""
              }`}
            >
              <span className="ms-1.5 scale-0 text-xs group-hover:scale-100">
                {item.name}
              </span>
              <div className="relative h-10 w-10 border-foreground">
                <Image
                  src={item.imgSrc}
                  alt={`${item.name} eSIM`}
                  fill
                  sizes="auto"
                  priority
                  quality={70}
                />
              </div>
            </Link>
          ))}
        </RevealAuto>

        {/* Search Country Region */}
        <RevealAuto
          variants={searchInputVariant}
          className="flex flex-col gap-4 xl:flex-row xl:items-center"
        >
          <CountryRegionSearch />
          <Link href={"/esim"} className="w-full xl:w-max">
            <Button className="group flex w-full items-center gap-3 text-sm">
              <ArrowUpLeft
                className="transition group-hover:rotate-90 group-hover:text-foreground"
                size={20}
              />
              Explore all Countries
            </Button>
          </Link>
        </RevealAuto>
      </RevealAuto>

      {/* Right Side: Hero Image */}
      <RevealAuto
        variants={heroImageVariants}
        className="hidden xl:col-span-2 xl:block"
      >
        <div className="relative h-[606px] w-full">
          <Image
            src={hero}
            fill
            alt="eSIM Card We Connect You Globally"
            className="rounded-[1.8125rem] object-contain"
            sizes="auto"
            priority
            quality={70}
          />

          <RevealAuto
            variants={socialButtonsVariants}
            className="relative top-[475px] z-20 flex items-center justify-center xxl:top-[490px]"
          >
            <SocialsButtons />
          </RevealAuto>

          <RevealAuto
            variants={socialButtonsVariants}
            className="relative top-[490px] flex items-center justify-center gap-6 xxl:top-[500px]"
          >
            <div className="relative h-[12px] w-[80px] lg:h-[18px] lg:w-[148px]">
              <Image src={fiveStars} alt="eSIM Card Rating" fill sizes="auto" />
            </div>
            <p className="mt-1 text-[8px] font-600 text-background opacity-90 lg:text-xs">
              500,000+ Downloads
            </p>
          </RevealAuto>
        </div>
      </RevealAuto>
    </section>
  );
}

export default HomeHero;
