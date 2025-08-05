import japan from "@/_assets/flags/japan.svg";
import russia from "@/_assets/flags/russia.svg";
import spain from "@/_assets/flags/spain.svg";
import turkey from "@/_assets/flags/turkey.svg";
import uae from "@/_assets/flags/uae.svg";
import uk from "@/_assets/flags/uk.svg";
import usa from "@/_assets/flags/usa.svg";
import hero from "@/_assets/images/hero.png";
import fiveStars from "@/_assets/svgs/5Star.svg";
import FlagHoverComponent from "@/components/animations/FlagHoverComponent";
import SocialsButtons from "@/components/features/auth/SocialsButtons";
import { Button } from "@/components/ui/button";
import { ArrowUpLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SearchPackagesList from "../../features/packages/SearchPackagesList";

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
    <section className="container mt-10 grid gap-14 bg-background xl:grid-cols-[1fr_minmax(516px,516px)]">
      {/* Left Side: Text Content */}
      <div className="self-center">
        <div className="space-y-10 md:space-y-12">
          {/* Headings and text */}
          <div className="flex flex-col gap-6">
            <h1 className="text-center font-montserrat text-4xl md:text-start xl:text-6xl">
              <span className="font-700 text-foreground">eSIM</span> Card <br />
              We <span className="font-700 text-foreground">Connect</span>{" "}
              <br />
              You <span className="font-700 text-primary">Globally</span>
            </h1>
            <p className="text-sm opacity-80 xl:text-xl">
              Travel Smart with Affordable eSIM Data Plans and High Speed
              Internet. Our eSIMs Offer Coverage in Nearly Every Corner of the
              World!
            </p>
          </div>

          {/* Flags with Hover Effect */}
          <div className="ml-10 flex justify-center md:ml-0 md:justify-start">
            <FlagHoverComponent countryFlags={countryFlags} />
          </div>

          {/* Search Country Region */}
          <div className="relative top-2 flex flex-col gap-4 xl:flex-row xl:items-center">
            <SearchPackagesList />

            <Link href={"/esim"} className="w-full xl:w-max">
              <Button className="group flex w-full items-center gap-3 text-sm">
                <ArrowUpLeft
                  className="transition group-hover:rotate-90 group-hover:text-foreground"
                  size={20}
                />
                Explore all Countries
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Right Side: Hero Image */}
      <div className="hidden shrink-0 xl:block">
        <div className="relative h-[606px] w-full">
          <Image
            src={hero}
            fill
            alt="eSIM Card We Connect You Globally"
            className="rounded-[1.8125rem] object-contain"
            sizes="auto"
            // priority
            quality={70}
          />

          <div className="relative top-[490px] z-20 flex items-center justify-center">
            <SocialsButtons />
          </div>

          <div className="relative top-[500px] flex items-center justify-center gap-6">
            <div className="relative h-[18px] w-[148px]">
              <Image src={fiveStars} alt="eSIM Card Rating" fill sizes="auto" />
            </div>
            <p className="mt-1 text-[8px] font-600 text-background opacity-90 lg:text-xs">
              500,000+ Downloads
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
